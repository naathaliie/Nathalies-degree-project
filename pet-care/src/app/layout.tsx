import type { Metadata } from "next";
/* import { Geist, Geist_Mono } from "next/font/google";
 */ import "./globals.css";
import TopBar from "./components/TopBar";
import NavBar from "./components/NavBar";
import StoreProvider from "./StoreProvider";
import { User } from "../../types/types";
import MyPageNav from "./components/MyPageNav";

/* const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
}); */

export const metadata: Metadata = {
  title: "PetCare",
  description: "PetCare hjälper dig...",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <StoreProvider>
        <body
          className=" antialiased min-h-screen flex flex-col mx-auto w-full
         3xl:w-3/4"
        >
          <header className="flex flex-col justify-center items-center h-36">
            <TopBar />
            <NavBar />
          </header>

          <main className="flex-grow  min-h-screen">
            <MyPageNav />
            {children}
          </main>

          <footer className=" bg-petCare-sapphireTeal-dark text-white p-4 text-center">
            <p>
              &copy; {new Date().getFullYear()} PetCare. Alla rättigheter
              förbehållna.
            </p>
          </footer>
        </body>
      </StoreProvider>
    </html>
  );
}
