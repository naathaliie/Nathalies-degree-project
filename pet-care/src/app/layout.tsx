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

const initialUsers: User[] = [
  {
    id: "1",
    username: "Alice",
    email: "alice@example.com",
    isLoggedIn: false,
    pets: [
      {
        id: "301",
        name: "Lady",
        breed: "Cocker spaniel",
        age: 2,
        ownerId: "1",
      },
      { id: "303", name: "Misse", breed: "Bondkatt", age: 7, ownerId: "1" },
    ],
  },
  {
    id: "2",
    username: "Bob",
    email: "bob@example.com",
    isLoggedIn: true,
    pets: [
      { id: "302", name: "Lufsen", breed: "Blandras", age: 5, ownerId: "2" },
    ],
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <StoreProvider users={initialUsers}>
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

          <footer className=" bg-petCare-darkBlue text-white p-4 text-center">
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
