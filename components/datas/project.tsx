import { cn } from "@/lib/utils";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import Heading3 from "../heading-3";
import TechBadge from "../tech-badge";

export const PROJECT_LIST = [
  {
    name: "Fafa | JSON Data Conversion",
    description:
      "API Service to transform any unstructured data into clean, valid JSON with custom schema definitions and AI-powered features.",
    imageUrl: "/projects/fafa.png",
    liveUrl: "https://fafa.ucokman.web.id",
    githubUrl: "https://github.com/ucok-man/fafa",
    tech: ["Next.js", "TypeScript", "OpenAI"],
  },
  {
    name: "CV-Hub | Resume Analyzer",
    description:
      "AI-powered resume analyzer that provides instant feedback on your CV with ATS compatibility scoring and actionable recommendations.",
    imageUrl: "/projects/cv-hub.png",
    liveUrl: "https://cv-hub.ucokman.web.id",
    githubUrl: "https://github.com/ucok-man/cv-hub",
    tech: ["Next.js", "ORPC", "Prisma", "Postgres", "Cloudinary", "OpenAI"],
  },
  {
    name: "Unlovable | Clone",
    description:
      "Lovable clone application that generates complete web applications using AI agents.",
    imageUrl: "/projects/unlovable.png",
    liveUrl: "https://unlovable.ucokman.web.id",
    githubUrl: "https://github.com/ucok-man/unlovable",
    tech: [
      "Next.js",
      "Clerk",
      "TRPC",
      "E2B",
      "Inngest",
      "Prisma",
      "Postgres",
      "OpenAI",
    ],
  },
  {
    name: "Stuck Overflow | Clone",
    description:
      "Stack Overflow clone, featuring AI-powered answer generation, real-time interactions, and a beautiful dark mode interface.",
    imageUrl: "/projects/stuck-overflow.png",
    liveUrl: "https://stuck-overflow-two.vercel.app",
    githubUrl: "https://github.com/ucok-man/stuck-overflow",
    tech: [
      "Next.js",
      "TRPC",
      "Clerk",
      "Prisma",
      "Postgres",
      "Uploadthing",
      "OpenAI",
    ],
  },
  {
    name: "FTAssistant.ai | AI Agent",
    description:
      "Personalized AI fitness trainer that helps you create customized workout plans based on your personal profile and fitness goals.",
    imageUrl: "/projects/ft-assistant.png",
    liveUrl: "https://ai-fitness-trainer-sigma.vercel.app",
    githubUrl: "https://github.com/ucok-man/ftAssistant.ai",
    tech: ["Next.js", "Clerk", "Convex", "Vapi", "Gemini"],
  },
  {
    name: "Koalla | Ecommerce",
    description:
      "E-commerce application that empowers users to transform their photos into high-quality custom phone cases.",
    imageUrl: "/projects/koalla.png",
    liveUrl: "https://koalla.ucokman.web.id",
    githubUrl: "https://github.com/ucok-man/koalla",
    tech: [
      "Next.js",
      "Clerk",
      "TRPC",
      "Uploadthing",
      "Stripe",
      "Prisma",
      "Postgres",
    ],
  },
  {
    name: "Pinguins | Saas Demo",
    description:
      "Service to monitor your SaaS application. Get instant Discord notifications for sales, new users, and any custom events you want to track.",
    imageUrl: "/projects/pinguins.png",
    liveUrl: "https://pinguins.ucokman.web.id",
    githubUrl: "https://github.com/ucok-man/pinguins",
    tech: [
      "Next.js",
      "JStack",
      "Clerk",
      "Discord Bot",
      "Stripe",
      "Prisma",
      "Postgres",
    ],
  },
  {
    name: "8event | Event Management",
    description:
      "Event management platform designed to simplify the process of organizing and managing events.",
    imageUrl: "/projects/8event.png",
    liveUrl: "https://8event.ucokman.web.id",
    githubUrl: "https://github.com/ucok-man/8event",
    tech: [
      "Next.js",
      "Express",
      "Prisma",
      "Postgres",
      "Redis",
      "Midtrans",
      "SMTP",
    ],
  },
  {
    name: "Streamify | Social Platform",
    description:
      "Learning language platform that allows users to connect, interact, and engage with their community through chat and video calls.",
    imageUrl: "/projects/streamify.png",
    liveUrl: "https://streamify.ucokman.web.id",
    githubUrl: "https://github.com/ucok-man/streamify",
    tech: ["React", "Go", "Getstream.io", "Mongodb"],
  },
  {
    name: "Twitter | Clone",
    description:
      "Twitter clone built with Next.js 14, featuring real-time interactions, user authentication, and a modern UI.",
    imageUrl: "/projects/twitter-clone.png",
    liveUrl: "https://nextjs-twitter-clone-liart.vercel.app",
    githubUrl: "https://github.com/ucok-man/twitter-clone",
    tech: ["Next.js", "Typescript", "Prisma", "Postgres", "NextAuth"],
  },
  {
    name: "Gmoapi | REST API",
    description:
      "RESTful API movies management with user authentication, role-based authorization, rate limiting, and email notifications.",
    imageUrl: "/projects/gmoapi.png",
    liveUrl: "https://gmoapi.ucokman.web.id",
    githubUrl: "https://github.com/ucok-man/gmoapi",
    tech: ["Go", "Postgres", "SMTP", "Swagger"],
  },
  {
    name: "Falesso | Company Profile",
    description: "Company profile built with love :)",
    imageUrl: "/projects/falesso.png",
    liveUrl: "https://nextjs-company-profile-falesso.vercel.app",
    githubUrl: "https://github.com/ucok-man/pwd-company-profile-falesso",
    tech: ["Next.js", "Typescript", "Shadcn", "Tailwind"],
  },
];

export const Project = {
  Card: ({ item }: { item: (typeof PROJECT_LIST)[number] }) => (
    <article
      className={cn(
        "group grid gap-4 py-6 transition-colors duration-300",
        "border-b border-border hover:border-muted-foreground/30",
        "lg:grid-cols-12",
        "sm:gap-8 sm:py-8"
      )}
    >
      {/* Project Image */}
      <div className="lg:col-span-3 relative">
        <Image
          src={item.imageUrl}
          alt={item.name}
          fill
          className="size-full object-cover object-center rounded-sm aspect-square"
        />
      </div>

      {/* Project Info */}
      <div className="lg:col-span-5 space-y-3">
        <header className="space-y-2">
          <Heading3 className="truncate">{item.name}</Heading3>

          <div className="flex items-center gap-3">
            {item.liveUrl && (
              <a
                href={item.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Live</span>
              </a>
            )}
            {item.githubUrl && (
              <a
                href={item.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                <Github className="w-4 h-4" />
                <span>Source</span>
              </a>
            )}
          </div>
        </header>

        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-lg line-clamp-3">
          {item.description}
        </p>
      </div>

      {/* Tech Stack */}
      <div className="lg:col-span-4 flex flex-wrap gap-x-2 gap-y-4 lg:justify-end mt-2 lg:mt-0 h-fit">
        {item.tech.map((tech) => (
          <TechBadge tech={tech} key={tech} />
        ))}
      </div>
    </article>
  ),
};
