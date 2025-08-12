import { Link } from "react-router-dom";
import { Github, Twitter, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="mt-16 border-t bg-background">
      <div className="container mx-auto grid gap-8 py-10 md:grid-cols-3">
        <div>
          <h3 className="text-lg font-semibold">Clarity & Care</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Trusted information and products to support your wellness journey.
          </p>
        </div>
        <nav className="grid grid-cols-2 gap-4 text-sm">
          <div className="flex flex-col gap-2">
            <Link to="/" className="hover:underline">Home</Link>
            <Link to="/products" className="hover:underline">Products</Link>
            <Link to="/about" className="hover:underline">About Us</Link>
          </div>
          <div className="flex flex-col gap-2">
            <Link to="/blog" className="hover:underline">Blog</Link>
            <Link to="/contact" className="hover:underline">Contact</Link>
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Terms of Service</a>
          </div>
        </nav>
        <div className="flex items-end md:justify-end">
          <div className="flex gap-3 text-muted-foreground">
            <a href="#" aria-label="Twitter" className="hover:text-foreground"><Twitter /></a>
            <a href="#" aria-label="Facebook" className="hover:text-foreground"><Facebook /></a>
            <a href="#" aria-label="Github" className="hover:text-foreground"><Github /></a>
          </div>
        </div>
      </div>
      <div className="border-t py-4 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Clarity & Care. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
