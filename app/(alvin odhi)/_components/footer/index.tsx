"use client";

import { MessageCircleMore, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";

export default function Footer() {
  const { setTheme, resolvedTheme } = useTheme();

  const toggleTheme = () => {
    if (resolvedTheme === "dark") {
      return setTheme("light");
    }
    return setTheme("dark");
  };

  return (
    <footer className="py-12 sm:py-16 border-t border-border max-w-4xl mx-auto px-6 sm:px-8 lg:px-16">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 sm:gap-8">
        <div className="text-sm text-muted-foreground">
          © 2025 Alvin Odhi Nusantara. <br /> All rights reserved.
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="group p-3 rounded-lg border border-border hover:border-muted-foreground/50 transition-all duration-300 cursor-pointer"
            aria-label="Toggle theme"
          >
            {resolvedTheme === "dark" ? (
              <Moon className="size-4" />
            ) : (
              <Sun className="size-4" />
            )}
          </button>

          <Link
            href="https://wa.me/081390860474?text=Hi!%20I%20found%20your%20portfolio%20and%20would%20like%20to%20connect"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-3 rounded-lg border border-border hover:border-muted-foreground/50 transition-all duration-300 cursor-pointer inline-block"
          >
            <MessageCircleMore className="size-4" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
