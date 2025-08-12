import SEO from "@/components/SEO";
import { Input } from "@/components/ui/input";
import ProductCard from "@/components/products/ProductCard";
import { products } from "@/data/products";
import { useMemo, useState } from "react";

const Products = () => {
  const [q, setQ] = useState("");
  const list = useMemo(() => {
    return products.filter((p) => p.name.toLowerCase().includes(q.toLowerCase()));
  }, [q]);

  return (
    <main className="container mx-auto py-10">
      <SEO
        title="Products — Pills4Sale UK"
        description="Browse premium pharmaceutical products including Concerta, Tilidin, Adderall, Clonazepam, Mounjaro, Ozempic, Oxycontin, Percocet, Zolpidem, and Zopiclone."
      />
      <header className="mb-8">
        <h1 className="text-3xl font-bold">Products</h1>
        <p className="mt-1 text-muted-foreground">Find detailed guidance on benefits, dosage, and more.</p>
        <div className="mt-6 max-w-md">
          <label htmlFor="search" className="sr-only">Search products</label>
          <Input id="search" placeholder="Search products…" value={q} onChange={(e) => setQ(e.target.value)} />
        </div>
      </header>

      <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((p) => (
          <ProductCard key={p.slug} product={p} />
        ))}
      </section>
    </main>
  );
};

export default Products;
