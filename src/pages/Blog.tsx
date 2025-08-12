import SEO from "@/components/SEO";

const Blog = () => {
  const structured = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Pills4Sale UK Blog",
    description: "Pharmaceutical insights and product guidance",
  };

  return (
    <main className="container mx-auto py-10">
      <SEO title="Blog — Pills4Sale UK" description="Pharmaceutical insights, product updates, and medication guidance for UK customers." structuredDataJSON={structured} />
      <h1 className="text-3xl font-bold">Blog</h1>
      <p className="mt-2 text-muted-foreground">Coming soon: articles on pharmaceuticals, medications, and health tips.</p>
    </main>
  );
};

export default Blog;
