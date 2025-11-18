import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

export default function Bold({ children, className }: Props) {
  return <span className={cn("text-foreground", className)}>{children}</span>;
}
