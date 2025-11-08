export const SECTION_IDS = [
  "intro",
  "education",
  "projects",
  "connect",
] as const;

export type SectionID = (typeof SECTION_IDS)[number];
