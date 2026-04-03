"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/tutorials", label: "Tutorials" },
  { href: "/resume", label: "Resume" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--background)]/80 backdrop-blur-md">
      {/* Top accent line */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent opacity-40" />

      <nav className="mx-auto flex max-w-7xl items-center justify-between px-10 py-3.5 sm:px-16 lg:px-24">
        <Link
          href="/"
          className="font-mono text-sm font-bold tracking-tight text-[var(--accent)] transition-opacity hover:opacity-75"
        >
          otengisaac<span className="text-[var(--muted)]">.dev</span>
        </Link>

        <ul className="flex items-center gap-0.5">
          {links.map(({ href, label }) => {
            const isActive =
              href === "/" ? pathname === "/" : pathname.startsWith(href);
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={`relative rounded-md px-3 py-1.5 text-sm font-medium transition-colors ${
                    isActive
                      ? "text-[var(--foreground)]"
                      : "text-[var(--muted)] hover:text-[var(--foreground)]"
                  }`}
                >
                  {label}
                  {isActive && (
                    <span className="absolute inset-x-2 -bottom-[1px] h-px rounded-full bg-[var(--accent)]" />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
