import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bellonzo's Blog",
  description: "My personal Tech Blog",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
