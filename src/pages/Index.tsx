import SEO from "@/components/SEO";
import Hero from "@/components/Hero";
import { products } from "@/data/products";
import ProductCard from "@/components/products/ProductCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  const featured = products.slice(0, 6);
  return (
    <main>
      <SEO
        title="Pills4Sale UK — Premium Pharmaceutical Products"
        description="Buy trusted pharmaceutical products like Ozempic, Mounjaro, Adderall and more in the UK. Secure Bitcoin payments, fast delivery."
      />
      <Hero />

      <section className="container mx-auto py-12">
        <header className="mb-8">
          <h2 className="text-2xl font-semibold">Featured Products</h2>
          <p className="mt-1 text-muted-foreground">
            A curated selection to help you get started.
          </p>
        </header>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
        <div className="mt-8 text-center">
          <Button asChild variant="hero">
            <Link to="/products" className="hover-scale">View All Products</Link>
          </Button>
        </div>
      </section>
    </main>
  );
};

export default Index;
