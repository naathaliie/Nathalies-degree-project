import Link from "next/link";
import ProductCard from "./components/productCard";
import dog from "../../public/8630162.png";
import Image from "next/image";
import HeroSection from "./components/HeroSection";

export default function HomePage() {
  return (
    <main className="HomePage">
        <HeroSection/>
     <h1 className="text-6xl text-petCare-sapphireTeal-dark">Välkommen till PetCare</h1>

    </main>
  );
}
