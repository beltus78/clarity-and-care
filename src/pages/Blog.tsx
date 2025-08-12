import SEO from "@/components/SEO";

const Blog = () => {
  const structured = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Clarity & Care Blog",
    description: "Wellness insights and product guidance",
  };

  return (
    <main className="container mx-auto py-10">
      <SEO title="Blog — Clarity & Care" description="Wellness insights, product updates, and evidence-based guidance." structuredDataJSON={structured} />
      <h1 className="text-3xl font-bold">Blog</h1>
      <p className="mt-2 text-muted-foreground">Coming soon: articles on wellness, medications, and lifestyle tips.</p>
    </main>
  );
};

export default Blog;
