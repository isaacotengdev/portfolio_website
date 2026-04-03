"use client";

import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-8">
      <p className="mb-1 font-mono text-xs uppercase tracking-widest text-[var(--accent)]">
        Newsletter
      </p>
      <h3 className="mb-2 text-xl font-bold text-[var(--foreground)]">
        Stay in the loop
      </h3>
      <p className="mb-6 text-sm text-[var(--muted)]">
        New tutorials on AWS, Databricks, and AI — no spam, unsubscribe any
        time.
      </p>

      {status === "success" ? (
        <div className="rounded-lg border border-[var(--accent-2)]/30 bg-[var(--accent-2)]/10 px-4 py-3">
          <p className="text-sm font-medium text-[var(--accent-2)]">
            ✓ You&apos;re subscribed! Check your inbox.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row">
          <input
            type="email"
            required
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={status === "loading"}
            className="flex-1 rounded-md border border-[var(--border)] bg-[var(--surface-2)] px-4 py-2.5 text-sm text-[var(--foreground)] placeholder-[var(--muted)] outline-none transition-colors focus:border-[var(--accent)] disabled:opacity-50"
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="rounded-md bg-[var(--accent)] px-5 py-2.5 text-sm font-semibold text-[var(--background)] transition-opacity hover:opacity-90 disabled:opacity-50"
          >
            {status === "loading" ? "Subscribing..." : "Subscribe"}
          </button>
        </form>
      )}

      {status === "error" && (
        <p className="mt-2 text-xs text-red-400">
          Something went wrong. Please try again.
        </p>
      )}
    </div>
  );
}
