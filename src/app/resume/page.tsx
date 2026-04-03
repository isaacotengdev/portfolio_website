import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume",
  description:
    "Resume of Oteng Isaac — Technical Solutions Consultant, AWS Cloud & Data Engineer.",
};

const experience = [
  {
    title: "Senior Technical Solutions Consultant",
    company: "Cloud & Data Consulting",
    period: "2024 – Present",
    bullets: [
      "Designed end-to-end Medallion Architecture data lakes on AWS (S3, Glue, Athena, Redshift)",
      "Built production AI APIs with AWS Bedrock, Lambda, and API Gateway",
      "Led data ingestion and streaming pipeline implementations using Kinesis and Glue ETL",
      "Delivered technical guidance on AWS data governance with Lake Formation",
    ],
  },
  {
    title: "Data & Cloud Engineer",
    company: "Data Engineering Practice",
    period: "2023 – 2024",
    bullets: [
      "Implemented large-scale ETL pipelines using AWS Glue and PySpark",
      "Built real-time data ingestion patterns with Kinesis Data Streams and Firehose",
      "Designed and maintained data cataloguing systems with Glue Data Catalog",
      "Authored technical documentation and internal knowledge base articles",
    ],
  },
];

const education = [
  {
    degree: "BSc Computer Science / Engineering",
    institution: "University",
    year: "2022",
  },
];

const certifications = [
  { name: "AWS Certified Solutions Architect – Associate", issuer: "Amazon Web Services" },
  { name: "AWS Certified Data Engineer – Associate", issuer: "Amazon Web Services" },
  {
    name: "Databricks Certified Associate Developer for Apache Spark",
    issuer: "Databricks",
  },
];

const skills = {
  Cloud: ["AWS (S3, Glue, Athena, Redshift, Kinesis, Lambda, Bedrock, API Gateway, Lake Formation, CloudFormation)"],
  "Data Engineering": ["Apache Spark", "PySpark", "ETL Pipelines", "Medallion Architecture", "Data Lakehouse"],
  AI: ["AWS Bedrock", "Amazon Titan", "LLM APIs", "Prompt Engineering", "Serverless AI"],
  Languages: ["Python", "SQL", "TypeScript"],
  Infrastructure: ["Terraform", "AWS CDK", "CI/CD"],
};

export default function ResumePage() {
  return (
    <div className="mx-auto max-w-3xl py-16">
      {/* Header */}
      <div className="mb-10 flex flex-col gap-4 border-b border-[var(--border)] pb-8 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h1 className="mb-1 text-3xl font-bold tracking-tight text-[var(--foreground)]">
            Oteng Isaac
          </h1>
          <p className="text-[var(--muted)]">
            Technical Solutions Consultant · Cloud & Data Engineer
          </p>
          <p className="mt-1 font-mono text-sm text-[var(--accent)]">
            AWS · Databricks · Data Engineering · AI/LLM
          </p>
        </div>
        <div className="flex flex-col gap-1 text-sm text-[var(--muted)] sm:text-right">
          <a
            href="https://dev.to/devoteng1"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--accent)]"
          >
            dev.to/devoteng1
          </a>
          <a
            href="https://github.com/OtengCloud"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--accent)]"
          >
            github.com/OtengCloud
          </a>
        </div>
      </div>

      <div className="space-y-10">
        {/* Experience */}
        <section>
          <h2 className="mb-5 font-mono text-xs uppercase tracking-widest text-[var(--accent)]">
            Experience
          </h2>
          <div className="space-y-8">
            {experience.map((job) => (
              <div key={job.title}>
                <div className="mb-2 flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between">
                  <div>
                    <span className="font-semibold text-[var(--foreground)]">
                      {job.title}
                    </span>
                    <span className="ml-2 text-sm text-[var(--muted)]">
                      — {job.company}
                    </span>
                  </div>
                  <span className="font-mono text-xs text-[var(--muted)]">
                    {job.period}
                  </span>
                </div>
                <ul className="space-y-1.5 pl-4">
                  {job.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex items-start gap-2 text-sm text-[var(--muted)]"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--border)]" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section>
          <h2 className="mb-5 font-mono text-xs uppercase tracking-widest text-[var(--accent)]">
            Skills
          </h2>
          <div className="space-y-3">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="flex gap-4">
                <span className="w-28 shrink-0 text-sm font-medium text-[var(--foreground)]">
                  {category}
                </span>
                <span className="text-sm text-[var(--muted)]">
                  {items.join(", ")}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Certifications */}
        <section>
          <h2 className="mb-5 font-mono text-xs uppercase tracking-widest text-[var(--accent)]">
            Certifications
          </h2>
          <div className="space-y-2">
            {certifications.map((cert) => (
              <div key={cert.name} className="flex items-center gap-3">
                <span className="text-[var(--accent-2)]">✓</span>
                <div>
                  <span className="text-sm font-medium text-[var(--foreground)]">
                    {cert.name}
                  </span>
                  <span className="ml-2 text-xs text-[var(--muted)]">
                    {cert.issuer}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section>
          <h2 className="mb-5 font-mono text-xs uppercase tracking-widest text-[var(--accent)]">
            Education
          </h2>
          {education.map((e) => (
            <div key={e.degree} className="flex justify-between text-sm">
              <div>
                <span className="font-medium text-[var(--foreground)]">
                  {e.degree}
                </span>
                <span className="ml-2 text-[var(--muted)]">
                  — {e.institution}
                </span>
              </div>
              <span className="font-mono text-xs text-[var(--muted)]">
                {e.year}
              </span>
            </div>
          ))}
        </section>
      </div>

      {/* Download CTA */}
      <div className="mt-12 border-t border-[var(--border)] pt-8">
        <p className="mb-4 text-sm text-[var(--muted)]">
          Want a PDF version?
        </p>
        <a
          href="/resume.pdf"
          download
          className="inline-flex items-center rounded-md border border-[var(--border)] bg-[var(--surface)] px-5 py-2.5 text-sm font-semibold text-[var(--foreground)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
        >
          Download PDF ↓
        </a>
        <p className="mt-3 font-mono text-xs text-[var(--muted)]">
          Place your resume PDF at /public/resume.pdf to enable the download.
        </p>
      </div>
    </div>
  );
}
