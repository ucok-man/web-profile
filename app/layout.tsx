import Providers from "@/components/providers";
import type { Metadata } from "next";
import { PropsWithChildren } from "react";
import { geistMono, geistSans } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Alvin Odhi | Fullstack Developer",
  description: "Fullstack Developer from Indonesia with handsome face :)",
  icons: [{ rel: "icon", url: "/hello.svg" }],
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
