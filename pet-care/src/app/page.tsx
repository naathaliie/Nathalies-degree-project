import Link from "next/link";
import ProductCard from "./components/productCard";

export default function HomePage() {
  return (
    <main>
      <h1>Hello world!</h1>
      {/* Använd Link istället för en a-tagg */}
      <Link href="/users">Users</Link>
      <ProductCard />
    </main>
  );
}
