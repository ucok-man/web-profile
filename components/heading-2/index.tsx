import { cn } from "@/lib/utils";

type Props = {
  children: string;
  className?: string;
};

export default function Heading2({ children, className }: Props) {
  return (
    <h2 className={cn("text-3xl sm:text-4xl font-light", className)}>
      {children}
    </h2>
  );
}
