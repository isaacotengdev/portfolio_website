import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

const TUTORIALS_DIR = path.join(process.cwd(), "src/content/tutorials");

export type TutorialFrontmatter = {
  title: string;
  description: string;
  date: string;
  tags: string[];
  published: boolean;
};

export type Tutorial = TutorialFrontmatter & {
  slug: string;
  readingTime: string;
  content: string;
};

export type TutorialMeta = Omit<Tutorial, "content">;

export function getAllTutorials(): TutorialMeta[] {
  if (!fs.existsSync(TUTORIALS_DIR)) return [];

  const files = fs.readdirSync(TUTORIALS_DIR).filter((f) => f.endsWith(".mdx"));

  const tutorials = files
    .map((file) => {
      const slug = file.replace(/\.mdx$/, "");
      const raw = fs.readFileSync(path.join(TUTORIALS_DIR, file), "utf-8");
      const { data, content } = matter(raw);
      const fm = data as TutorialFrontmatter;

      return {
        slug,
        title: fm.title,
        description: fm.description,
        date: fm.date,
        tags: fm.tags ?? [],
        published: fm.published ?? true,
        readingTime: readingTime(content).text,
      };
    })
    .filter((t) => t.published)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return tutorials;
}

export function getTutorialBySlug(slug: string): Tutorial | null {
  const filePath = path.join(TUTORIALS_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  const fm = data as TutorialFrontmatter;

  return {
    slug,
    title: fm.title,
    description: fm.description,
    date: fm.date,
    tags: fm.tags ?? [],
    published: fm.published ?? true,
    readingTime: readingTime(content).text,
    content,
  };
}

export function getAllTags(): string[] {
  const tutorials = getAllTutorials();
  const tags = new Set<string>();
  tutorials.forEach((t) => t.tags.forEach((tag) => tags.add(tag)));
  return Array.from(tags).sort();
}
