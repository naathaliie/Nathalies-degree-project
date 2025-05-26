import type { Metadata } from "next";
import "./globals.css";
import TopBar from "./components/TopBar";
import NavBar from "./components/NavBar";
import StoreProvider from "./StoreProvider";
import MyPageNav from "./components/MyPageNav";
import GetMockData from "../lib/initializers/GetMockData";

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
        {/* För att hämta all mockdata */}
        <GetMockData />
        <body className=" antialiased flex flex-col mx-auto 3xl:w-3/4">
          <header>
            <TopBar />
            <NavBar />
          </header>

          <main>
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
