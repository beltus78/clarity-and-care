import { BlogPost } from "@/data/blogPosts";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Calendar, Clock, User } from "lucide-react";

const BlogCard = ({ post }: { post: BlogPost }) => {
  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 250, damping: 20 }}
      className="group overflow-hidden rounded-lg border bg-card shadow-sm h-full"
    >
      <div className="p-6 h-full flex flex-col">
        <div className="mb-4">
          <Badge variant="outline" className="mb-2">
            {post.category}
          </Badge>
          <h3 className="text-xl font-semibold leading-tight mb-2 group-hover:text-primary transition-colors">
            <Link to={`/blog/${post.slug}`} className="hover:underline">
              {post.title}
            </Link>
          </h3>
          <p className="text-muted-foreground line-clamp-3 mb-4">
            {post.excerpt}
          </p>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.slice(0, 3).map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
        
        <div className="mt-auto">
          <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <User className="h-3 w-3" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="h-3 w-3" />
                <span>{new Date(post.publishDate).toLocaleDateString('en-GB')}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-3 w-3" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>
          
          <Button variant="soft" size="sm" asChild>
            <Link to={`/blog/${post.slug}`}>Read More</Link>
          </Button>
        </div>
      </div>
    </motion.article>
  );
};

export default BlogCard;