import Link from "next/link";
import ProductCard from "./components/productCard";

export default function HomePage() {
  return (
    <main className="HomePage flex flex-col justify-center items-center min-h-[70vh]">
     <h1 className="text-6xl text-petCare-darkBlue">Välkommen till PetCare</h1>
    </main>
  );
}
