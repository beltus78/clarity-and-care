import { Product } from "@/data/products";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 250, damping: 20 }}
      className="group overflow-hidden rounded-lg border bg-card shadow-sm"
    >
      <Link to={`/products/${product.slug}`} aria-label={`Learn more about ${product.name}`}>
        <div className="aspect-square overflow-hidden">
          <img
            src={product.image}
            alt={`${product.name} product image`}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
          />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold">{product.name}</h3>
          <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">
            {product.description}
          </p>
          <div className="mt-4">
            <Button variant="soft" size="sm" asChild>
              <Link to={`/products/${product.slug}`}>Learn More</Link>
            </Button>
          </div>
        </div>
      </Link>
    </motion.article>
  );
};

export default ProductCard;
