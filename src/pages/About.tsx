import SEO from "@/components/SEO";

const About = () => {
  return (
    <main className="container mx-auto py-10">
      <SEO title="About Us — Clarity & Care" description="Our mission is to provide clear, reliable information and access to trusted pharmaceutical products." />
      <h1 className="text-3xl font-bold">About Us</h1>
      <p className="mt-3 text-muted-foreground max-w-2xl">
        At Clarity & Care, we believe informed choices lead to better health outcomes. Our
        team curates reliable information and presents products with clarity, so you can
        collaborate with your healthcare provider confidently.
      </p>
    </main>
  );
};

export default About;
