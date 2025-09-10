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
      <SEO title="Contact — Pills4Sale UK" description="Get in touch with our UK team for product questions, payment support, or delivery inquiries." />
      <h1 className="text-3xl font-bold">Contact</h1>
      <p className="mt-1 text-muted-foreground">Email: support@pills4saleuk.com • Phone: +44 (0) 20 7123 4567 • WhatsApp: +44 7856095887</p>
      <div className="mt-4 rounded-lg border border-amber-200 bg-amber-50 p-4">
        <h2 className="font-semibold text-amber-800">Alternative Payment Methods</h2>
        <p className="mt-1 text-sm text-amber-700">
          We primarily accept Bitcoin payments. If you need to use other payment methods (credit card, bank transfer, etc.), 
          please use the form below and we'll get back to you with payment options.
        </p>
      </div>
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
