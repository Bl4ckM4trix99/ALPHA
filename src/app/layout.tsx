import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { NavigationProvider } from "@/context/navigation";
import { LoadingBar } from "@/components/LoadingBar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ALPHA NET - Cybersecurity Platform",
  description: "Master cybersecurity with cutting-edge threat intelligence, competitive CTF challenges, and comprehensive hands-on learning experiences designed by industry experts.",
  keywords: ["cybersecurity", "CTF", "capture the flag", "security training", "ethical hacking"],
  authors: [{ name: "ALPHA NET Team" }],
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
          integrity="sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased min-h-screen flex flex-col bg-black text-gray-100`}
      >
        <NavigationProvider>
          <LoadingBar />
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </NavigationProvider>
      </body>
    </html>
  );
}
