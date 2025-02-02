import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import TopBar from "./components/TopBar";
import NavBar from "./components/NavBar";

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
  description:
    "PetCare hjälper dig att hålla ditt husdjur friskt och lyckligt. Planera veterinärbesök, få expertråd och hantera ditt husdjurs dagliga behov enkelt.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-dvh flex flex-col mx-auto w-full  
         3xl:w-3/4`}
      >
        <header className="flex flex-col justify-center items-center h-28">
          <TopBar />
          <NavBar />
        </header>

        <main className="flex-grow">{children}</main>

        <footer className=" bg-petCare-darkBlue text-white p-4 text-center">
          <p>
            &copy; {new Date().getFullYear()} PetCare. Alla rättigheter
            förbehållna.
          </p>
        </footer>
      </body>
    </html>
  );
}
