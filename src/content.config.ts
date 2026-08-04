import { defineCollection, z } from "astro:content";
import { file } from "astro/loaders";

const dateRangeFields = {
  startDate: z.string(),
  endDate: z.string().nullable(),
};

const experience = defineCollection({
  loader: file("src/data/experience.json"),
  schema: z.object({
    id: z.string(),
    organization: z.string(),
    role: z.string(),
    location: z.string(),
    ...dateRangeFields,
    bullets: z.array(z.string()),
    link: z.string().url().optional(),
  }),
});

const projects = defineCollection({
  loader: file("src/data/projects.json"),
  schema: z.object({
    id: z.string(),
    title: z.string(),
    subtitle: z.string().optional(),
    stack: z.array(z.string()),
    ...dateRangeFields,
    bullets: z.array(z.string()),
    link: z.string().url().optional(),
  }),
});

const publications = defineCollection({
  loader: file("src/data/publications.json"),
  schema: z.object({
    id: z.string(),
    title: z.string(),
    authors: z.array(
      z.object({
        name: z.string(),
        isSelf: z.boolean().optional(),
      }),
    ),
    authorsNote: z.string().optional(),
    venue: z.string(),
    date: z.string(),
    link: z.string().url().optional(),
    award: z.string().optional(),
    status: z.enum(["published", "submitted", "upcoming"]),
  }),
});

const mentorship = defineCollection({
  loader: file("src/data/mentorship.json"),
  schema: z.object({
    id: z.string(),
    course: z.string(),
    courseCode: z.string().optional(),
    institution: z.string(),
    role: z.string(),
    ...dateRangeFields,
  }),
});

const achievements = defineCollection({
  loader: file("src/data/achievements.json"),
  schema: z.object({
    id: z.string(),
    title: z.string(),
    date: z.string().optional(),
    link: z.string().url().optional(),
  }),
});

const certifications = defineCollection({
  loader: file("src/data/certifications.json"),
  schema: z.object({
    id: z.string(),
    title: z.string(),
    year: z.string().optional(),
    link: z.string().url().optional(),
  }),
});

export const collections = {
  experience,
  projects,
  publications,
  mentorship,
  achievements,
  certifications,
};
