import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-[var(--border)] bg-[var(--background)]">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-10 py-8 sm:flex-row sm:px-16 lg:px-24">
        <p className="font-mono text-sm text-[var(--muted)]">
          © {new Date().getFullYear()} Oteng Isaac — Built with Next.js &
          Tailwind
        </p>
        <div className="flex items-center gap-4">
          <a
            href="https://dev.to/devoteng1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-[var(--muted)] hover:text-[var(--accent)] transition-colors"
          >
            Dev.to
          </a>
          <a
            href="https://github.com/OtengCloud"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-[var(--muted)] hover:text-[var(--accent)] transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/otengisaac"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-[var(--muted)] hover:text-[var(--accent)] transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
