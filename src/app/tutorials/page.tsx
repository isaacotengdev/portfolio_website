import type { Metadata } from "next";
import { getAllTutorials, getAllTags } from "@/lib/tutorials";
import TutorialsClient from "./TutorialsClient";
import Newsletter from "@/components/Newsletter";

export const metadata: Metadata = {
  title: "Tutorials",
  description:
    "Practical tutorials on AWS Cloud, Databricks, Data Engineering, and AI — written by Oteng Isaac.",
};

export default function TutorialsPage() {
  const tutorials = getAllTutorials();
  const allTags = getAllTags();

  return (
    <div className="mx-auto max-w-3xl py-16">
      <div className="mb-10">
        <p className="mb-2 font-mono text-xs uppercase tracking-widest text-[var(--accent)]">
          Learn
        </p>
        <h1 className="mb-3 text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl">
          Tutorials
        </h1>
        <p className="max-w-xl text-[var(--muted)]">
          Practical guides on AWS, Databricks, data engineering, and applied AI.
          Real problems, working code, clear explanations.
        </p>
      </div>

      <TutorialsClient tutorials={tutorials} allTags={allTags} />

      {/* Newsletter */}
      <div id="newsletter" className="mt-20 border-t border-[var(--border)] pt-12">
        <Newsletter />
      </div>
    </div>
  );
}
