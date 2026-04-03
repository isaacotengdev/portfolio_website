import Link from "next/link";
import Image from "next/image";
import profileImage from "@/images/image1.jpg";

const skills = [
  { label: "AWS Cloud",      color: "text-[#FF9900]", bg: "bg-[#FF9900]/10", border: "border-[#FF9900]/30" },
  { label: "AI Engineering", color: "text-[#58a6ff]", bg: "bg-[#58a6ff]/10", border: "border-[#58a6ff]/30" },
  { label: "Python",         color: "text-[#4B8BBE]", bg: "bg-[#4B8BBE]/10", border: "border-[#4B8BBE]/30" },
  { label: "Databricks",     color: "text-[#FF3621]", bg: "bg-[#FF3621]/10", border: "border-[#FF3621]/30" },
  { label: "SQL",            color: "text-[#8b949e]", bg: "bg-[#8b949e]/10", border: "border-[#8b949e]/30" },
];

const stats = [
  { value: "9+",    label: "Tutorials published" },
  { value: "AWS",   label: "Certified architect" },
  { value: "3+",    label: "Years in cloud & data" },
];

const featuredTutorials = [
  {
    slug: "building-production-text-to-text-api-aws-bedrock",
    title: "Building a Production-Ready Text-to-Text API with AWS Bedrock, Lambda & API Gateway",
    tags: ["AWS", "AI", "Serverless"],
    date: "Dec 31, 2025",
  },
  {
    slug: "conversational-chatbot-aws-bedrock-amazon-titan",
    title: "Building a Conversational Chatbot with AWS Bedrock (Amazon Titan)",
    tags: ["AWS", "AI"],
    date: "Dec 26, 2025",
  },
  {
    slug: "medallion-architecture-on-aws",
    title: "Medallion Architecture on AWS",
    tags: ["AWS", "Data Engineering", "Architecture"],
    date: "Dec 1, 2025",
  },
];

const TAG_COLORS: Record<string, string> = {
  AWS:              "text-[#FF9900]",
  AI:               "text-[#58a6ff]",
  Serverless:       "text-[#FF9900]",
  "Data Engineering": "text-[#3fb950]",
  Architecture:     "text-[#8b949e]",
};

export default function HomePage() {
  return (
    <div>

      {/* ── Hero ──────────────────────────────────────── */}
      <section className="relative overflow-hidden py-24 md:py-32">
        {/* Subtle grid */}
        <div className="pointer-events-none absolute inset-0 grid-bg opacity-[0.03]" />

        {/* Faded background image — right side */}
        <div className="pointer-events-none absolute inset-y-0 right-0 w-[55%] overflow-hidden">
          <Image
            src={profileImage}
            alt=""
            fill
            className="object-cover object-top opacity-[0.08]"
            priority
            aria-hidden="true"
          />
          {/* Gradient fade: left edge + bottom */}
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--background)] via-[var(--background)]/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)] via-transparent to-transparent" />
        </div>

        {/* Radial accent glow */}
        <div className="pointer-events-none absolute inset-0 bg-radial-[ellipse_80%_50%_at_50%_-10%] from-[var(--accent-glow)] to-transparent" />

        <div className="relative flex flex-col-reverse items-start gap-12 sm:flex-row sm:items-start">

          {/* Text */}
          <div className="max-w-2xl sm:ml-10">
            <p className="animate-fade-up mb-3 font-mono text-sm font-medium text-[var(--accent)]">
              Hello, I&apos;m
            </p>
            <h1 className="animate-fade-up animate-delay-100 mb-3 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              <span className="gradient-text">Oteng Isaac</span>
            </h1>
            <h2 className="animate-fade-up animate-delay-200 mb-6 text-lg font-semibold text-[var(--muted)] sm:text-xl">
              Cloud, Data and AI Solutions Architect
            </h2>
            <p className="animate-fade-up animate-delay-300 mb-8 max-w-xl text-base leading-relaxed text-[#c9d1d9] sm:text-lg">
              I design and build scalable data systems on{" "}
              <span className="font-semibold text-[#FF9900]">AWS</span> and{" "}
              <span className="font-semibold text-[#FF3621]">Databricks</span>. I
              write practical tutorials on cloud architecture, data engineering
              pipelines, and applied AI — so you can build production-ready
              systems faster.
            </p>

            <div className="animate-fade-up animate-delay-400 flex flex-wrap gap-3">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 rounded-lg bg-[var(--accent)] px-5 py-2.5 text-sm font-semibold text-[var(--background)] shadow-lg shadow-[var(--accent-glow)] transition-all hover:opacity-90 hover:shadow-[var(--accent-glow-strong)]"
              >
                View My Work
              </Link>
              <Link
                href="/tutorials"
                className="inline-flex items-center gap-2 rounded-lg border border-[var(--border)] bg-[var(--surface)] px-5 py-2.5 text-sm font-semibold text-[var(--foreground)] transition-all hover:border-[var(--accent)] hover:text-[var(--accent)]"
              >
                Read Tutorials
              </Link>
              <Link
                href="/resume"
                className="inline-flex items-center rounded-lg px-5 py-2.5 text-sm font-medium text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
              >
                Resume →
              </Link>
            </div>
          </div>

          {/* Profile image — full portrait */}
          <div className="animate-fade-in animate-delay-200 shrink-0 sm:ml-16 lg:ml-24">
            <div className="relative overflow-hidden rounded-3xl">
              <div className="absolute -inset-3 rounded-3xl bg-[var(--accent)] opacity-10 blur-xl" />
              <Image
                src={profileImage}
                alt="Oteng Isaac"
                width={260}
                height={360}
                className="relative block rounded-3xl object-cover object-top shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>

        {/* Stats row */}
        <div className="animate-fade-up animate-delay-500 mt-16 flex flex-wrap gap-8 border-t border-[var(--border)] pt-8">
          {stats.map(({ value, label }) => (
            <div key={label}>
              <p className="text-2xl font-bold text-[var(--foreground)]">{value}</p>
              <p className="mt-0.5 text-sm text-[var(--muted)]">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Skills ────────────────────────────────────── */}
      <section className="border-t border-[var(--border)] py-16">
        <p className="mb-6 font-mono text-xs uppercase tracking-widest text-[var(--muted)]">
          Core Skills
        </p>
        <div className="flex flex-wrap gap-3">
          {skills.map(({ label, color, bg, border }) => (
            <span
              key={label}
              className={`rounded-lg border px-4 py-2 font-mono text-sm font-semibold transition-all hover:scale-105 ${color} ${bg} ${border}`}
            >
              {label}
            </span>
          ))}
        </div>
      </section>

      {/* ── Featured Tutorials ────────────────────────── */}
      <section className="border-t border-[var(--border)] py-16">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <p className="mb-1 font-mono text-xs uppercase tracking-widest text-[var(--accent)]">
              Latest
            </p>
            <h3 className="text-2xl font-bold tracking-tight text-[var(--foreground)]">
              Tutorials
            </h3>
          </div>
          <Link
            href="/tutorials"
            className="text-sm text-[var(--accent)] transition-opacity hover:opacity-70"
          >
            View all →
          </Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featuredTutorials.map(({ slug, title, tags, date }) => (
            <Link
              key={slug}
              href={`/tutorials/${slug}`}
              className="glow-card group flex flex-col rounded-xl border border-[var(--border)] bg-[var(--surface)] p-5"
            >
              {/* Top accent line */}
              <div className="mb-4 h-px w-full bg-gradient-to-r from-[var(--accent)] via-[var(--accent-2)] to-transparent opacity-60" />

              <div className="mb-3 flex flex-wrap gap-1.5">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className={`font-mono text-xs font-medium ${TAG_COLORS[tag] ?? "text-[var(--muted)]"}`}
                  >
                    #{tag}
                  </span>
                ))}
              </div>
              <h4 className="mb-auto text-sm font-semibold leading-snug text-[var(--foreground)] transition-colors group-hover:text-[var(--accent)]">
                {title}
              </h4>
              <p className="mt-4 font-mono text-xs text-[var(--muted)]">{date}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* ── Newsletter CTA ────────────────────────────── */}
      <section className="border-t border-[var(--border)] py-16">
        <div className="relative overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-10 text-center">
          {/* Background grid */}
          <div className="pointer-events-none absolute inset-0 grid-bg opacity-[0.04]" />
          {/* Glow */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent opacity-50" />

          <div className="relative">
            <p className="mb-2 font-mono text-xs uppercase tracking-widest text-[var(--accent)]">
              Newsletter
            </p>
            <h3 className="mb-2 text-2xl font-bold text-[var(--foreground)]">
              Stay in the loop
            </h3>
            <p className="mb-8 text-sm text-[var(--muted)]">
              New tutorials on AWS, Databricks, and AI delivered to your inbox.
            </p>
            <Link
              href="/tutorials#newsletter"
              className="inline-flex items-center rounded-lg bg-[var(--accent)] px-6 py-2.5 text-sm font-semibold text-[var(--background)] shadow-lg shadow-[var(--accent-glow)] transition-all hover:opacity-90"
            >
              Subscribe →
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
