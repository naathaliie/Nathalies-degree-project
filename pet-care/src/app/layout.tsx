import type { Metadata } from "next";
import "./globals.css";
import TopBar from "./components/TopBar";
import NavBar from "./components/NavBar";
import StoreProvider from "./StoreProvider";
import MyPageNav from "./components/MyPageNav";
import GetMockData from "../lib/initializers/GetMockData";

export const metadata: Metadata = {
  title: "PetCare - Din partner för husdjursvård",
  description:
    "PetCare hjälper dig att hålla ditt husdjur friskt och lyckligt. Planera veterinärbesök, få expertråd och hantera ditt husdjurs dagliga behov enkelt.",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <StoreProvider>
        <GetMockData />
        <body className=" antialiased flex flex-col min-h-screen mx-auto 3xl:w-3/4">
          <header>
            <TopBar />
            <NavBar />
          </header>

          <main className="flex-grow bg-gradient-to-r from-[#C5E3E9] to-[#F9FCFD] bg-opacity-25">
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
