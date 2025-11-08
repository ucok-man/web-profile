type Props = {
  tech: string;
};

export default function TechBadge({ tech }: Props) {
  return (
    <span className="px-3 py-1 text-xs border border-border rounded-full hover:border-muted-foreground/50 transition-colors duration-300 size-fit">
      {tech}
    </span>
  );
}
