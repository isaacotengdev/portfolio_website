# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

> **Note:** This project uses Next.js 16. APIs, conventions, and file structure may differ from older versions. Check `node_modules/next/dist/docs/` if uncertain about a Next.js API.

## Commands

```bash
npm run dev        # Start dev server at http://localhost:3000
npm run build      # Production build — use this to validate correctness
npm run lint       # ESLint
npm run start      # Serve production build
```

There are no tests. Use `npm run build` to catch TypeScript and MDX errors before committing.

## Architecture

**Stack:** Next.js 16 (App Router), Tailwind CSS v4, TypeScript, MDX via `next-mdx-remote`.

### Content system

Tutorials are MDX files in `src/content/tutorials/`. Each file requires this frontmatter:

```yaml
---
title: "..."
description: "..."
date: "YYYY-MM-DD"
tags: ["AWS", "AI", ...]
published: true
---
```

`src/lib/tutorials.ts` is the single source of truth for reading tutorial content — it exposes `getAllTutorials()`, `getTutorialBySlug()`, and `getAllTags()`. All file I/O for tutorials goes through this module.

### Routing

| Route | Type | Notes |
| --- | --- | --- |
| `/` | Static | Hero, skills, featured tutorials |
| `/about` | Static | Bio, timeline, certifications |
| `/projects` | Static | Project cards (data hardcoded in the file) |
| `/resume` | Static | CV layout; PDF served from `public/resume.pdf` |
| `/tutorials` | Static | Client-side search/filter via `TutorialsClient.tsx` |
| `/tutorials/[slug]` | SSG | Rendered from MDX via `next-mdx-remote` |
| `/api/subscribe` | Dynamic | Newsletter signup stub — needs email provider wired in |

### Styling

Tailwind v4 with CSS custom properties defined in `src/app/globals.css`. Use the CSS vars (`var(--accent)`, `var(--surface)`, `var(--border)`, etc.) rather than Tailwind color utilities for theme-consistent styling. Prose/MDX content uses the `.prose` class defined in `globals.css` — not `@tailwindcss/typography`.

### Newsletter

`src/app/api/subscribe/route.ts` is a stub. To activate, integrate an email provider (e.g. Resend) and set `RESEND_API_KEY` + `RESEND_AUDIENCE_ID` in `.env.local` (see `.env.local.example`).

### MDX gotchas

- Curly braces `{}` in MDX body are parsed as JS expressions — wrap CLI examples containing JSON in fenced code blocks
- Angle-bracket tags with special chars (e.g. `<bucket-name*>`) must be escaped or placed in inline code
- Run `npm run build` after adding any new `.mdx` file to catch parse errors before deploy
