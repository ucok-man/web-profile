import TechCard from "../tech-badge";

const FOCUS_SKILL = ["React", "Typescript", "Go", "Node.js", "SQL", "Docker"];

export const Intro = {
  Sub: () => (
    <div className="text-sm text-muted-foreground font-mono tracking-wider">
      Fullstack Developer
    </div>
  ),

  Name: () => (
    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light tracking-tight">
      Alvin Odhi <span className="max-sm:hidden">👋</span>
      <br />
      <span className="text-muted-foreground">Nusantara</span>
    </h1>
  ),

  About: () => (
    <p className="text-base sm:text-xl text-muted-foreground leading-relaxed">
      Crafting digital experiences at the intersection of
      <span className="text-foreground"> design</span>,
      <span className="text-foreground"> technology</span>, and
      <span className="text-foreground"> user experience</span>.
    </p>
  ),

  Status: () => (
    <div className="flex flex-row items-center gap-3 sm:gap-4 text-sm text-muted-foreground">
      <div className="flex items-center gap-2">
        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
        Open to opportunities
      </div>
      <div className="flex items-center gap-1">
        <span>📍</span>Indonesia
      </div>
    </div>
  ),

  CurrentJob: () => (
    <div className="space-y-2">
      <div className="text-foreground">Seeking New Opportunities</div>
      <div className="text-xs text-muted-foreground">
        Available for full-time roles
      </div>
    </div>
  ),

  Focus: () => (
    <div className="flex flex-wrap gap-2">
      {FOCUS_SKILL.map((skill) => (
        <TechCard tech={skill} key={skill} />
      ))}
    </div>
  ),
};
