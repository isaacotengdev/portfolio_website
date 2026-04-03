import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Real-world cloud, data engineering, and AI projects built on AWS and Databricks.",
};

type Project = {
  title: string;
  description: string;
  tags: string[];
  github?: string;
  demo?: string;
  tutorial?: string;
  highlight?: boolean;
};

const projects: Project[] = [
  {
    title: "Production Text-to-Text API with AWS Bedrock",
    description:
      "Serverless REST API built with AWS Lambda, API Gateway, and Bedrock (Claude/Titan). Handles prompt engineering, response streaming, and rate limiting in a production-ready architecture.",
    tags: ["AWS Bedrock", "Lambda", "API Gateway", "Serverless", "AI"],
    tutorial: "/tutorials/building-production-text-to-text-api-aws-bedrock",
    highlight: true,
  },
  {
    title: "Conversational Chatbot — AWS Bedrock",
    description:
      "Multi-turn conversational chatbot powered by Amazon Titan via Bedrock. Maintains session context, handles conversation history, and exposes a clean API for frontend integration.",
    tags: ["AWS Bedrock", "Amazon Titan", "Python", "AI"],
    tutorial: "/tutorials/conversational-chatbot-aws-bedrock-amazon-titan",
  },
  {
    title: "Medallion Architecture Data Lake on AWS",
    description:
      "End-to-end Medallion Architecture (Bronze / Silver / Gold) implemented on AWS using S3, Glue, and Athena. Handles raw ingestion through curated, analytics-ready datasets.",
    tags: ["AWS", "S3", "Glue", "Athena", "Data Engineering", "Architecture"],
    tutorial: "/tutorials/medallion-architecture-on-aws",
    highlight: true,
  },
  {
    title: "AWS Glue ETL Pipeline",
    description:
      "Scalable ETL job using AWS Glue with PySpark. Transforms and cleans large datasets, applies schema evolution, and writes to partitioned Parquet on S3.",
    tags: ["AWS Glue", "PySpark", "ETL", "S3", "Data Engineering"],
    tutorial: "/tutorials/aws-glue-etl-jobs-transform-data-at-scale",
  },
  {
    title: "Data Cataloguing System on AWS",
    description:
      "Automated data cataloguing using AWS Glue Data Catalog, crawlers, and Lake Formation. Enables governed, discoverable data assets across multiple S3 data zones.",
    tags: ["AWS Glue", "Lake Formation", "Data Catalog", "Governance"],
    tutorial: "/tutorials/data-cataloguing-in-aws",
  },
  {
    title: "Real-Time Data Ingestion Pipeline",
    description:
      "Two-part data ingestion series: batch and streaming patterns on AWS. Covers S3 uploads, Kinesis Firehose, and event-driven triggers for near-real-time data delivery.",
    tags: ["Kinesis", "S3", "Firehose", "Streaming", "Data Engineering"],
    tutorial: "/tutorials/data-ingestion-using-aws-services-part-1",
  },
];

const tagColors: Record<string, string> = {
  AWS: "text-[#FF9900]",
  "AWS Bedrock": "text-[#FF9900]",
  Lambda: "text-[#FF9900]",
  "API Gateway": "text-[#FF9900]",
  Serverless: "text-[#FF9900]",
  "Amazon Titan": "text-[#FF9900]",
  "AWS Glue": "text-[#FF9900]",
  S3: "text-[#FF9900]",
  Athena: "text-[#FF9900]",
  Kinesis: "text-[#FF9900]",
  Firehose: "text-[#FF9900]",
  "Lake Formation": "text-[#FF9900]",
  "Data Catalog": "text-[#FF9900]",
  AI: "text-[var(--accent)]",
  Python: "text-[#3776AB]",
  PySpark: "text-[#E25A1C]",
  ETL: "text-[var(--accent-2)]",
  "Data Engineering": "text-[var(--accent-2)]",
  Architecture: "text-[var(--muted)]",
  Streaming: "text-[var(--accent)]",
  Governance: "text-[var(--muted)]",
};

export default function ProjectsPage() {
  return (
    <div className="py-16">
      <div className="mb-12">
        <p className="mb-2 font-mono text-xs uppercase tracking-widest text-[var(--accent)]">
          Work
        </p>
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl">
          Projects
        </h1>
        <p className="max-w-xl text-[var(--muted)]">
          Real-world systems built on AWS and Databricks — each backed by a
          published tutorial so you can build it too.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.title}
            className={`flex flex-col rounded-lg border bg-[var(--surface)] p-6 transition-colors ${
              project.highlight
                ? "border-[var(--accent)]/40 hover:border-[var(--accent)]"
                : "border-[var(--border)] hover:border-[var(--surface-2)]"
            }`}
          >
            {project.highlight && (
              <span className="mb-3 inline-block self-start rounded-full bg-[var(--accent)]/10 px-2.5 py-0.5 font-mono text-xs font-medium text-[var(--accent)]">
                Featured
              </span>
            )}
            <h3 className="mb-2 font-semibold leading-snug text-[var(--foreground)]">
              {project.title}
            </h3>
            <p className="mb-4 flex-1 text-sm leading-relaxed text-[var(--muted)]">
              {project.description}
            </p>

            <div className="mb-4 flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className={`rounded bg-[var(--surface-2)] px-2 py-0.5 font-mono text-xs ${tagColors[tag] ?? "text-[var(--muted)]"}`}
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex gap-3">
              {project.tutorial && (
                <Link
                  href={project.tutorial}
                  className="text-sm text-[var(--accent)] hover:underline"
                >
                  Read tutorial →
                </Link>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[var(--muted)] hover:text-[var(--foreground)]"
                >
                  GitHub
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[var(--muted)] hover:text-[var(--foreground)]"
                >
                  Live demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
