import { useState } from "react";
import { blogPosts } from "@/data/blogPosts";
import SEO from "@/components/SEO";
import BlogCard from "@/components/blog/BlogCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search } from "lucide-react";
import { motion } from "framer-motion";

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = Array.from(new Set(blogPosts.map(post => post.category)));
  
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = !selectedCategory || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const structured = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Pills4Sale UK Blog",
    description: "Expert pharmaceutical insights, medication guides, and health information for UK patients.",
    url: "https://pills4sale.co.uk/blog",
    publisher: {
      "@type": "Organization",
      name: "Pills4Sale UK"
    }
  };

  return (
    <main className="container mx-auto py-10">
      <SEO 
        title="Expert Pharmaceutical Blog — Pills4Sale UK" 
        description="Expert pharmaceutical insights, medication guides, ADHD treatment, diabetes management, pain relief, and sleep medicine information for UK patients." 
        structuredDataJSON={structured} 
      />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Pharmaceutical Insights & Expert Guides</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay informed with expert articles on medications, treatment options, and health management 
            from our team of pharmaceutical professionals.
          </p>
        </header>

        {/* Search and Filter */}
        <div className="mb-8 space-y-4">
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search articles..."
              className="pl-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div className="flex flex-wrap justify-center gap-2">
            <Button
              variant={selectedCategory === null ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(null)}
            >
              All Categories
            </Button>
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, index) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <BlogCard post={post} />
            </motion.div>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-muted-foreground">
              No articles found matching your search criteria.
            </p>
            <Button 
              variant="outline" 
              className="mt-4"
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory(null);
              }}
            >
              Clear Filters
            </Button>
          </div>
        )}
      </motion.div>
    </main>
  );
};

export default Blog;
