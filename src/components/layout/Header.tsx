import { Link, NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ShoppingBag, Menu } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CartIcon from "@/components/cart/CartIcon";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/products", label: "Products" },
  { to: "/about", label: "About Us" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
];

export const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img src="/src/assets/logo.png" alt="Pills4Sale UK" className="h-8 w-auto" />
          <span className="text-lg font-semibold">Pills4Sale UK</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                cn("text-sm text-muted-foreground hover:text-foreground story-link", isActive && "text-foreground")
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <CartIcon />
          <Button variant="soft" asChild>
            <Link to="/products" className="hover-scale">
              <ShoppingBag className="mr-2" /> Explore
            </Link>
          </Button>
        </div>

        <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setOpen((v) => !v)} aria-label="Toggle Menu">
          <Menu />
        </Button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden border-t"
          >
            <div className="container mx-auto py-3 flex flex-col gap-3">
              {navItems.map((item) => (
                <Link key={item.to} to={item.to} onClick={() => setOpen(false)} className="text-sm">
                  {item.label}
                </Link>
              ))}
              <div className="pt-2">
                <CartIcon />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
