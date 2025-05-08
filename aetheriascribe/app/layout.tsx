import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "AetheriaScribe",
  description: "Your All time story teller",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {/* Header Component */}
        <Header />
        <>{children}</>
        {/* Toaster Component */}
      </body>
    </html>
  );
}
