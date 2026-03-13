import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NayaCare | Fourth-Trimester Support",
  description: "Premium NayaCare chat experience for postpartum and newborn guidance."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
