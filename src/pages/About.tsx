import SEO from "@/components/SEO";

const About = () => {
  return (
    <main className="container mx-auto py-10">
      <SEO title="About Us — Pills4Sale UK" description="UK's trusted source for premium pharmaceutical products with secure Bitcoin payments and fast delivery." />
      <h1 className="text-3xl font-bold">About Us</h1>
      <p className="mt-3 text-muted-foreground max-w-2xl">
        Pills4Sale UK is your trusted source for premium pharmaceutical products across the UK. 
        We offer secure Bitcoin payments and fast, discreet delivery of quality medications 
        to support your health and wellness needs.
      </p>
    </main>
  );
};

export default About;
