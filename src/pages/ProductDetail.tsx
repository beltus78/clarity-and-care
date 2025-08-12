import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { products } from "@/data/products";
import { useMemo } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

const ProductDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const product = useMemo(() => products.find((p) => p.slug === slug), [slug]);

  if (!product) {
    return (
      <main className="container mx-auto py-10">
        <h1 className="text-2xl font-semibold">Product not found</h1>
        <Button className="mt-4" onClick={() => navigate(-1)} variant="soft">Go Back</Button>
      </main>
    );
  }

  const structured = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image: product.image,
    brand: { "@type": "Brand", name: "Clarity & Care" },
  };

  return (
    <main>
      <SEO
        title={`${product.name} — Details, Dosage, Benefits`}
        description={product.description}
        structuredDataJSON={structured}
      />
      <article className="container mx-auto py-10">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="overflow-hidden rounded-lg border bg-card">
            <img src={product.image} alt={`${product.name} packaging`} className="w-full object-cover" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <p className="mt-3 text-muted-foreground">{product.description}</p>
            <div className="mt-6 grid gap-6">
              <section>
                <h2 className="font-semibold">Dosage</h2>
                <p className="mt-1 text-sm text-muted-foreground">{product.dosage}</p>
              </section>
              <section>
                <h2 className="font-semibold">Ingredients</h2>
                <ul className="mt-1 list-disc pl-5 text-sm text-muted-foreground">
                  {product.ingredients.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
              </section>
              <section>
                <h2 className="font-semibold">Benefits</h2>
                <ul className="mt-1 list-disc pl-5 text-sm text-muted-foreground">
                  {product.benefits.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
              </section>
              <section>
                <h2 className="font-semibold">Potential Side Effects</h2>
                <ul className="mt-1 list-disc pl-5 text-sm text-muted-foreground">
                  {product.sideEffects.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
              </section>
              <section>
                <h2 className="font-semibold">Testimonials</h2>
                <ul className="mt-2 grid gap-3">
                  {product.testimonials.map((t, idx) => (
                    <li key={idx} className="rounded-md border p-3 text-sm">
                      <blockquote>“{t.quote}”</blockquote>
                      <cite className="mt-1 block text-xs text-muted-foreground">— {t.author}</cite>
                    </li>
                  ))}
                </ul>
              </section>
            </div>

            <div className="mt-8 flex gap-3">
              <Button asChild variant="hero">
                <Link to="/contact">Contact a Provider</Link>
              </Button>
              <Button asChild variant="outline">
                <Link to="/products">Back to Products</Link>
              </Button>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
};

export default ProductDetail;
