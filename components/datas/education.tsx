import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Heading3 from "../heading-3";

export const EDUCATION_LIST = [
  {
    institution: "Purwadhika Digital Technology",
    type: "Professional Certification",
    startYear: 2024,
    endYear: 2025,
    imageUrl: "/education/purwadhika.png",
    link: "https://purwadhika.com",
  },
  {
    institution: "Codepolitan",
    type: "Professional Certification",
    startYear: 2024,
    endYear: 2024,
    imageUrl: "/education/codepolitan.png",
    link: "https://codepolitan.com",
  },
  {
    institution: "Hacktiv8 Indonesia",
    type: "Professional Certification",
    startYear: 2023,
    endYear: 2024,
    imageUrl: "/education/hacktiv8.png",
    link: "https://hacktiv8.com",
  },
];

export const Education = {
  Card: ({ item }: { item: (typeof EDUCATION_LIST)[number] }) => (
    <article
      className={cn(
        "group grid lg:grid-cols-12 gap-2 lg:gap-0 py-6 transition-colors duration-300",
        "border-b border-border hover:border-muted-foreground/30"
      )}
    >
      {/* Institution Image */}
      <div className="lg:col-span-2 lg:size-20 relative">
        <Image
          src={item.imageUrl}
          alt={item.institution}
          fill
          className="size-full object-cover object-center rounded-full aspect-square"
        />
      </div>

      {/* Education Info */}
      <div className="lg:col-span-6 space-y-2">
        <a
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <Heading3 className="cursor-pointer">
            {item.institution}
            <ArrowRight className="inline size-4 transform group-hover:-translate-y-[15%] group-hover:translate-x-[50%] opacity-0 group-hover:opacity-100 transition-all duration-300" />
          </Heading3>
        </a>

        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-lg">
          {item.type}
        </p>
      </div>

      {/* Years */}
      <div className="lg:col-span-4 flex flex-wrap text-muted-foreground lg:justify-end">
        {item.startYear} - {item.endYear}
      </div>
    </article>
  ),
};
