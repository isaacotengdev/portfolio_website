import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "Technical Solutions Consultant with expertise in AWS Cloud, Databricks, Big Data Analytics, and AI.",
};

const timeline = [
  {
    year: "2025",
    role: "Senior Technical Solutions Consultant",
    highlights: [
      "Designed and delivered end-to-end data lake architectures on AWS",
      "Built production AI pipelines with AWS Bedrock and Amazon Titan",
      "Published tutorials reaching the AWS Builders community on Dev.to",
    ],
  },
  {
    year: "2024",
    role: "Data & Cloud Engineer",
    highlights: [
      "Led Medallion Architecture implementations (Bronze/Silver/Gold) on AWS",
      "Built ETL pipelines with AWS Glue and Apache Spark",
      "Designed data ingestion patterns using Kinesis and S3",
    ],
  },
  {
    year: "2023",
    role: "Cloud & Data Practitioner",
    highlights: [
      "Achieved AWS certifications in cloud architecture",
      "Started writing technical content on AWS data services",
      "Built Kinesis Data Streams projects for real-time data processing",
    ],
  },
];

const certs = [
  "AWS Certified Solutions Architect",
  "AWS Certified Data Engineer",
  "Databricks Certified Associate Developer for Apache Spark",
];

export default function AboutPage() {
  return (
    <div className="py-16">
      <div className="mb-12">
        <p className="mb-2 font-mono text-xs uppercase tracking-widest text-[var(--accent)]">
          About
        </p>
        <h1 className="mb-6 text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl">
          Oteng Isaac
        </h1>
        <p className="max-w-2xl text-lg leading-relaxed text-[#c9d1d9]">
          Technical Solutions Consultant with deep expertise in{" "}
          <strong className="text-[#FF9900]">AWS Cloud</strong>,{" "}
          <strong className="text-[#FF3621]">Databricks</strong>, Big Data
          Analytics, and applied AI. I help organizations design and implement
          scalable data systems — from ingestion to insight — and I document
          what I learn along the way.
        </p>
      </div>

      <div className="grid gap-12 lg:grid-cols-3">
        {/* Main content */}
        <div className="lg:col-span-2 space-y-12">
          {/* What I do */}
          <section>
            <h2 className="mb-4 text-lg font-bold text-[var(--foreground)] border-b border-[var(--border)] pb-2">
              What I Do
            </h2>
            <div className="space-y-4 text-[#c9d1d9] leading-relaxed">
              <p>
                I specialize in building modern data platforms on AWS — data
                lakes, streaming pipelines, and cloud-native ETL systems using
                services like Glue, Kinesis, S3, Athena, and Redshift.
              </p>
              <p>
                On the AI side, I work with AWS Bedrock and foundation models to
                build practical LLM applications — from conversational chatbots
                to production-grade text APIs backed by serverless architecture.
              </p>
              <p>
                I believe the best engineers document what they build. Every
                tutorial I publish is a real problem I&apos;ve solved — no fluff,
                just working code and clear explanations.
              </p>
            </div>
          </section>

          {/* Timeline */}
          <section>
            <h2 className="mb-6 text-lg font-bold text-[var(--foreground)] border-b border-[var(--border)] pb-2">
              Experience
            </h2>
            <div className="space-y-8">
              {timeline.map(({ year, role, highlights }) => (
                <div key={year} className="flex gap-6">
                  <div className="w-12 shrink-0">
                    <span className="font-mono text-sm font-bold text-[var(--accent)]">
                      {year}
                    </span>
                  </div>
                  <div>
                    <h3 className="mb-2 font-semibold text-[var(--foreground)]">
                      {role}
                    </h3>
                    <ul className="space-y-1.5">
                      {highlights.map((h) => (
                        <li
                          key={h}
                          className="flex items-start gap-2 text-sm text-[var(--muted)]"
                        >
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <div className="space-y-8">
          {/* Certifications */}
          <section className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-5">
            <h3 className="mb-4 font-mono text-xs uppercase tracking-widest text-[var(--muted)]">
              Certifications
            </h3>
            <ul className="space-y-3">
              {certs.map((cert) => (
                <li key={cert} className="flex items-start gap-2">
                  <span className="mt-1 text-[var(--accent-2)]">✓</span>
                  <span className="text-sm text-[var(--foreground)]">
                    {cert}
                  </span>
                </li>
              ))}
            </ul>
          </section>

          {/* Tech stack */}
          <section className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-5">
            <h3 className="mb-4 font-mono text-xs uppercase tracking-widest text-[var(--muted)]">
              Tech Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {[
                "AWS",
                "Databricks",
                "Apache Spark",
                "Python",
                "SQL",
                "Terraform",
                "AWS Glue",
                "Kinesis",
                "S3",
                "Athena",
                "Bedrock",
                "Lambda",
                "API Gateway",
                "Redshift",
              ].map((tech) => (
                <span
                  key={tech}
                  className="rounded bg-[var(--surface-2)] px-2.5 py-1 font-mono text-xs text-[var(--muted)]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>

          {/* Links */}
          <section className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-5">
            <h3 className="mb-4 font-mono text-xs uppercase tracking-widest text-[var(--muted)]">
              Find Me
            </h3>
            <ul className="space-y-2">
              {[
                { label: "Dev.to", href: "https://dev.to/devoteng1" },
                { label: "GitHub", href: "https://github.com/OtengCloud" },
                {
                  label: "LinkedIn",
                  href: "https://linkedin.com/in/otengisaac",
                },
              ].map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-[var(--accent)] hover:underline"
                  >
                    {label} →
                  </a>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>

      {/* CTA */}
      <div className="mt-12 border-t border-[var(--border)] pt-10 flex flex-wrap gap-4">
        <Link
          href="/projects"
          className="inline-flex items-center rounded-md bg-[var(--accent)] px-5 py-2.5 text-sm font-semibold text-[var(--background)] transition-opacity hover:opacity-90"
        >
          See My Projects
        </Link>
        <Link
          href="/resume"
          className="inline-flex items-center rounded-md border border-[var(--border)] bg-[var(--surface)] px-5 py-2.5 text-sm font-semibold text-[var(--foreground)] transition-colors hover:border-[var(--accent)]"
        >
          Download Resume
        </Link>
      </div>
    </div>
  );
}
