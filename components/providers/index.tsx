"use client";

import { PropsWithChildren } from "react";
import { useIsClient } from "usehooks-ts";
import { ThemeProvider } from "./theme-provider";

export default function Providers({ children }: PropsWithChildren) {
  const isClient = useIsClient();
  if (!isClient) return null;

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  );
}
