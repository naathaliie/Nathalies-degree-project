import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PetCare - Din partner för husdjursvård",
  description: "PetCare hjälper dig att hålla ditt husdjur friskt och lyckligt. Planera veterinärbesök, få expertråd och hantera ditt husdjurs dagliga behov enkelt.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <header className="bg-blue-400 text-white p-4 flex justify-center">
          <h1 className="text-xl font-bold">PetCare</h1>
        </header>

        <main className="flex-grow">{children}</main>

        <footer className="bg-gray-800 text-white p-4 text-center">
          <p>&copy; {new Date().getFullYear()} PetCare. Alla rättigheter förbehållna.</p>
        </footer>
      </body>
    </html>
  );
}
