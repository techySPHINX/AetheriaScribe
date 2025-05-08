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
      <body className="flex flex-col min-h-screen bg-gray-100">
        {/* Header Component */}
        <Header />
        <>{children}</>
        {/* Toaster Component */}
      </body>
    </html>
  );
}
