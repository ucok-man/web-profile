import { ArrowRight } from "lucide-react";
import Link from "next/link";

export const SOCIAL_LIST = [
  {
    name: "Github",
    handle: "@ucok-man",
    url: "https://github.com/ucok-man",
  },
  {
    name: "LinkedIn",
    handle: "Alvin Odhi",
    url: "https://www.linkedin.com/feed",
  },
] as const;

export const Connect = {
  Interest: () => (
    <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
      Always interested in new opportunities, collaborations, and conversations
      about technology and manga.
    </p>
  ),
  ContactLink: () => (
    <div className="space-y-4">
      <Link
        href="mailto:ucokkocu411@gmail.com"
        className="group inline-flex items-center gap-3 text-foreground hover:text-primary transition-all duration-300 hover:gap-4"
      >
        <span className="text-base sm:text-lg">ucokkocu411@gmail.com</span>
        <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
      </Link>
    </div>
  ),

  SocialCard: ({ item }: { item: (typeof SOCIAL_LIST)[number] }) => (
    <Link
      key={item.name}
      href={item.url}
      className="group p-4 border border-border rounded-lg hover:border-muted-foreground/50 transition-all duration-300 hover:shadow-sm"
    >
      <div className="space-y-2">
        <div className="text-foreground group-hover:text-foreground/80 transition-colors duration-300">
          {item.name}
        </div>
        <div className="text-sm text-muted-foreground">{item.handle}</div>
      </div>
    </Link>
  ),
};
