"use client";

import { useSectionObserver } from "@/hooks/use-section-observer";
import { SectionID } from "@/lib/constant";
import { useState } from "react";
import Footer from "./_components/footer";
import Navigation from "./_components/navigation";
import SectionConnect from "./_components/section-connect";
import SectionEducation from "./_components/section-education";
import SectionIntro from "./_components/section-intro";
import SectionProjects from "./_components/section-projects";

export default function Home() {
  const [activeSection, setActiveSection] = useState<SectionID>("intro");
  const sectionsRef = useSectionObserver((entry) => {
    // Add animation class to trigger the fade-in-up animation
    entry.target.classList.add("animate-fade-in-up");
    // Update the active section state with this section's ID
    setActiveSection(entry.target.id as SectionID);
  });

  return (
    <div className="min-h-screen relative">
      <Navigation active={activeSection} />

      <main className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-16">
        <SectionIntro onRef={(el) => sectionsRef.current.push(el)} />
        <SectionEducation onRef={(el) => sectionsRef.current.push(el)} />
        <SectionProjects onRef={(el) => sectionsRef.current.push(el)} />
        <SectionConnect onRef={(el) => sectionsRef.current.push(el)} />
      </main>

      <Footer />

      {/* BG */}
      <div className="fixed bottom-0 left-0 right-0 h-24 bg-linear-to-t from-background via-background/80 to-transparent pointer-events-none"></div>
    </div>
  );
}
