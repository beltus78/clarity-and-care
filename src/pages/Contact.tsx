import SEO from "@/components/SEO";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({ title: "Message sent", description: "We will get back to you soon." });
    (e.currentTarget as HTMLFormElement).reset();
  };

  return (
    <main className="container mx-auto py-10">
      <SEO title="Contact — Clarity & Care" description="Get in touch with our team for product questions or support." />
      <h1 className="text-3xl font-bold">Contact</h1>
      <p className="mt-1 text-muted-foreground">Email: support@clarityandcare.example • Phone: +1 (555) 123-4567</p>
      <form onSubmit={onSubmit} className="mt-6 grid max-w-xl gap-4">
        <Input placeholder="Your name" required />
        <Input type="email" placeholder="Email address" required />
        <Textarea placeholder="How can we help?" rows={6} required />
        <div>
          <Button type="submit" variant="hero">Send Message</Button>
        </div>
      </form>
    </main>
  );
};

export default Contact;
