"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import type { TutorialMeta } from "@/lib/tutorials";

const TAG_COLORS: Record<string, string> = {
  AWS: "text-[#FF9900] border-[#FF9900]/30 bg-[#FF9900]/5",
  Serverless: "text-[#FF9900] border-[#FF9900]/30 bg-[#FF9900]/5",
  "Data Engineering": "text-[var(--accent-2)] border-[var(--accent-2)]/30 bg-[var(--accent-2)]/5",
  Architecture: "text-[var(--muted)] border-[var(--border)] bg-[var(--surface-2)]",
  AI: "text-[var(--accent)] border-[var(--accent)]/30 bg-[var(--accent)]/5",
  ETL: "text-[var(--accent-2)] border-[var(--accent-2)]/30 bg-[var(--accent-2)]/5",
  Tutorial: "text-[var(--muted)] border-[var(--border)] bg-[var(--surface-2)]",
};

function tagClass(tag: string) {
  return TAG_COLORS[tag] ?? "text-[var(--muted)] border-[var(--border)] bg-[var(--surface-2)]";
}

export default function TutorialsClient({
  tutorials,
  allTags,
}: {
  tutorials: TutorialMeta[];
  allTags: string[];
}) {
  const [search, setSearch] = useState("");
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const filtered = useMemo(() => {
    return tutorials.filter((t) => {
      const matchesSearch =
        !search ||
        t.title.toLowerCase().includes(search.toLowerCase()) ||
        t.description.toLowerCase().includes(search.toLowerCase()) ||
        t.tags.some((tag) => tag.toLowerCase().includes(search.toLowerCase()));
      const matchesTag = !activeTag || t.tags.includes(activeTag);
      return matchesSearch && matchesTag;
    });
  }, [tutorials, search, activeTag]);

  return (
    <div>
      {/* Search */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search tutorials..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full rounded-lg border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-sm text-[var(--foreground)] placeholder-[var(--muted)] outline-none transition-colors focus:border-[var(--accent)] sm:max-w-sm"
        />
      </div>

      {/* Tag filters */}
      <div className="mb-8 flex flex-wrap gap-2">
        <button
          onClick={() => setActiveTag(null)}
          className={`rounded-full border px-3 py-1 font-mono text-xs transition-colors ${
            activeTag === null
              ? "border-[var(--accent)] bg-[var(--accent)]/10 text-[var(--accent)]"
              : "border-[var(--border)] bg-[var(--surface)] text-[var(--muted)] hover:border-[var(--accent)] hover:text-[var(--accent)]"
          }`}
        >
          All
        </button>
        {allTags.map((tag) => (
          <button
            key={tag}
            onClick={() => setActiveTag(activeTag === tag ? null : tag)}
            className={`rounded-full border px-3 py-1 font-mono text-xs transition-colors ${
              activeTag === tag
                ? "border-[var(--accent)] bg-[var(--accent)]/10 text-[var(--accent)]"
                : `border-[var(--border)] bg-[var(--surface)] hover:border-[var(--accent)] hover:text-[var(--accent)] ${tagClass(tag)}`
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Results count */}
      {(search || activeTag) && (
        <p className="mb-6 font-mono text-xs text-[var(--muted)]">
          {filtered.length} tutorial{filtered.length !== 1 ? "s" : ""} found
        </p>
      )}

      {/* Tutorial list */}
      {filtered.length === 0 ? (
        <div className="py-12 text-center">
          <p className="text-[var(--muted)]">No tutorials match your search.</p>
          <button
            onClick={() => {
              setSearch("");
              setActiveTag(null);
            }}
            className="mt-3 text-sm text-[var(--accent)] hover:underline"
          >
            Clear filters
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          {filtered.map((tutorial) => (
            <Link
              key={tutorial.slug}
              href={`/tutorials/${tutorial.slug}`}
              className="group flex flex-col gap-3 rounded-lg border border-[var(--border)] bg-[var(--surface)] p-5 transition-all hover:border-[var(--accent)] sm:flex-row sm:items-start sm:justify-between"
            >
              <div className="flex-1">
                <div className="mb-2 flex flex-wrap gap-1.5">
                  {tutorial.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`rounded-full border px-2.5 py-0.5 font-mono text-xs ${tagClass(tag)}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="mb-1.5 font-semibold leading-snug text-[var(--foreground)] transition-colors group-hover:text-[var(--accent)]">
                  {tutorial.title}
                </h3>
                <p className="text-sm leading-relaxed text-[var(--muted)]">
                  {tutorial.description}
                </p>
              </div>
              <div className="flex shrink-0 flex-col items-end gap-1 sm:ml-6 sm:text-right">
                <span className="font-mono text-xs text-[var(--muted)]">
                  {tutorial.date}
                </span>
                <span className="font-mono text-xs text-[var(--muted)]">
                  {tutorial.readingTime}
                </span>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
