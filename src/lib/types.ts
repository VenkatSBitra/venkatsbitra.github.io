export interface DateRange {
  startDate: string;
  endDate: string | null;
}

export interface EducationEntry extends DateRange {
  institution: string;
  location: string;
  degree: string;
  gpa?: string;
}

export interface ExperienceEntry extends DateRange {
  id: string;
  organization: string;
  role: string;
  location: string;
  bullets: string[];
  link?: string;
}

export interface ProjectEntry extends DateRange {
  id: string;
  title: string;
  subtitle?: string;
  stack: string[];
  bullets: string[];
  link?: string;
}

export interface PublicationAuthor {
  name: string;
  isSelf?: boolean;
}

export interface PublicationEntry {
  id: string;
  title: string;
  authors: PublicationAuthor[];
  authorsNote?: string;
  venue: string;
  date: string;
  link?: string;
  award?: string;
  status: "published" | "submitted" | "upcoming";
}

export interface MentorshipEntry extends DateRange {
  id: string;
  course: string;
  courseCode?: string;
  institution: string;
  role: string;
}

export interface SkillsData {
  languages: string[];
  frameworks: string[];
}

export interface CourseworkGroup {
  category: string;
  courses: string[];
}

export interface AchievementEntry {
  id: string;
  title: string;
  date?: string;
  link?: string;
}

export interface CertificationEntry {
  id: string;
  title: string;
  year?: string;
  link?: string;
}

export interface ProfileData {
  name: string;
  tagline: string;
  location: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  siteUrl: string;
  bio?: string[];
}
