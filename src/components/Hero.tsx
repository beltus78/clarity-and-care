import { motion } from "framer-motion";
import hero from "@/assets/hero-hero-wellness.jpg";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <img
        src={hero}
        alt="Healthcare and wellness background with premium pharmaceutical imagery"
        className="absolute inset-0 h-full w-full object-cover"
        loading="eager"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/60 to-background" />

      <div className="relative container mx-auto flex min-h-[70vh] items-center">
        <div className="max-w-2xl py-24">
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-4xl font-bold leading-tight md:text-5xl"
          >
            Discover Your Path to Wellness
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="mt-4 text-lg text-muted-foreground"
          >
            Explore trusted products, understand benefits and dosages, and make informed health decisions.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
            className="mt-8 flex gap-3"
          >
            <Button asChild variant="hero" size="lg">
              <Link to="/products" className="hover-scale">Explore Our Products</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/about">Learn More</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
