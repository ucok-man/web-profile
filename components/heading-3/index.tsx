import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

export default function Heading3({ children, className }: Props) {
  return (
    <h2 className={cn("text-lg sm:text-xl font-medium", className)}>
      {children}
    </h2>
  );
}
