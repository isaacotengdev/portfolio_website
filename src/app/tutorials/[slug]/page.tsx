import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getTutorialBySlug, getAllTutorials } from "@/lib/tutorials";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const tutorials = getAllTutorials();
  return tutorials.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const tutorial = getTutorialBySlug(slug);
  if (!tutorial) return {};
  return {
    title: tutorial.title,
    description: tutorial.description,
    openGraph: {
      title: tutorial.title,
      description: tutorial.description,
      type: "article",
      publishedTime: tutorial.date,
      tags: tutorial.tags,
    },
  };
}

const TAG_COLORS: Record<string, string> = {
  AWS: "text-[#FF9900] border-[#FF9900]/30 bg-[#FF9900]/5",
  "Data Engineering": "text-[var(--accent-2)] border-[var(--accent-2)]/30 bg-[var(--accent-2)]/5",
  AI: "text-[var(--accent)] border-[var(--accent)]/30 bg-[var(--accent)]/5",
  Serverless: "text-[#FF9900] border-[#FF9900]/30 bg-[#FF9900]/5",
  ETL: "text-[var(--accent-2)] border-[var(--accent-2)]/30 bg-[var(--accent-2)]/5",
};

function tagClass(tag: string) {
  return TAG_COLORS[tag] ?? "text-[var(--muted)] border-[var(--border)] bg-[var(--surface-2)]";
}

export default async function TutorialPage({ params }: Props) {
  const { slug } = await params;
  const tutorial = getTutorialBySlug(slug);

  if (!tutorial || !tutorial.published) notFound();

  return (
    <div className="mx-auto max-w-3xl py-16">
      {/* Back */}
      <Link
        href="/tutorials"
        className="mb-10 inline-flex items-center gap-1.5 font-mono text-sm text-[var(--muted)] transition-colors hover:text-[var(--accent)]"
      >
        ← All tutorials
      </Link>

      {/* Header */}
      <header className="mb-10 border-b border-[var(--border)] pb-8">
        <div className="mb-4 flex flex-wrap gap-2">
          {tutorial.tags.map((tag) => (
            <span
              key={tag}
              className={`rounded-full border px-3 py-0.5 font-mono text-xs ${tagClass(tag)}`}
            >
              {tag}
            </span>
          ))}
        </div>
        <h1 className="mb-4 text-2xl font-bold leading-tight tracking-tight text-[var(--foreground)] sm:text-3xl">
          {tutorial.title}
        </h1>
        <p className="mb-4 text-base text-[var(--muted)]">
          {tutorial.description}
        </p>
        <div className="flex items-center gap-4 font-mono text-xs text-[var(--muted)]">
          <span>{tutorial.date}</span>
          <span>·</span>
          <span>{tutorial.readingTime}</span>
          <span>·</span>
          <span>Oteng Isaac</span>
        </div>
      </header>

      {/* Content */}
      <article className="prose">
        <MDXRemote source={tutorial.content} />
      </article>

      {/* Footer nav */}
      <div className="mt-16 border-t border-[var(--border)] pt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <Link
          href="/tutorials"
          className="text-sm text-[var(--accent)] hover:underline"
        >
          ← Back to tutorials
        </Link>
        <div className="flex gap-4">
          <a
            href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(tutorial.title)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
          >
            Share on X
          </a>
          <a
            href="https://dev.to/devoteng1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
          >
            Follow on Dev.to
          </a>
        </div>
      </div>
    </div>
  );
}
