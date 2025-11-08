"use client";

import { SECTION_IDS, SectionID } from "@/lib/constant";
import { cn } from "@/lib/utils";

type Props = {
  active: SectionID;
};

export default function Navigation({ active }: Props) {
  const scrollToSection = (sectionId: SectionID) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const isActive = (sectionId: SectionID) => active === sectionId;

  return (
    <nav
      className="fixed left-8 top-1/2 -translate-y-1/2 z-10 hidden lg:block"
      aria-label="Page navigation"
    >
      <div className="flex flex-col gap-4">
        {SECTION_IDS.map((section) => {
          const activeSection = isActive(section);

          return (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className={cn(
                "w-2 h-8 rounded-full transition-all duration-300",
                "group cursor-pointer hover:w-32",
                activeSection
                  ? "bg-foreground text-background"
                  : "bg-muted-foreground/40 hover:bg-foreground/20"
              )}
              aria-label={`Navigate to ${section} section`}
              aria-current={activeSection ? "true" : undefined}
            >
              <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 capitalize font-medium">
                {section}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
