import { useParams, Link } from "react-router-dom";
import { blogPosts } from "@/data/blogPosts";
import { products } from "@/data/products";
import SEO from "@/components/SEO";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Calendar, Clock, User, ArrowLeft, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return (
      <main className="container mx-auto py-10">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Blog post not found</h1>
          <Button asChild>
            <Link to="/blog">Back to Blog</Link>
          </Button>
        </div>
      </main>
    );
  }

  const relatedProducts = products.filter(product => 
    post.relatedProducts.includes(product.slug)
  );

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.metaDescription,
    "author": {
      "@type": "Person",
      "name": post.author
    },
    "datePublished": post.publishDate,
    "publisher": {
      "@type": "Organization",
      "name": "Pills4Sale UK"
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://pills4sale.co.uk/blog/${post.slug}`
    }
  };

  return (
    <main className="container mx-auto py-10">
      <SEO 
        title={`${post.title} — Pills4Sale UK Blog`}
        description={post.metaDescription}
        structuredDataJSON={structuredData}
      />
      
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Button variant="ghost" asChild className="mb-6">
            <Link to="/blog">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Blog
            </Link>
          </Button>

          <article className="prose prose-lg max-w-none">
            <header className="not-prose mb-8">
              <Badge variant="outline" className="mb-4">
                {post.category}
              </Badge>
              
              <h1 className="text-4xl font-bold leading-tight mb-4">
                {post.title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-6">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>{new Date(post.publishDate).toLocaleDateString('en-GB')}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>{post.readTime}</span>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                {post.excerpt}
              </p>
            </header>

            <div 
              className="prose-headings:font-semibold prose-headings:text-foreground prose-p:text-muted-foreground prose-li:text-muted-foreground prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-strong:text-foreground"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </article>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <section className="mt-12">
              <h2 className="text-2xl font-semibold mb-6">Related Products</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedProducts.map((product) => (
                  <Card key={product.slug} className="hover:shadow-md transition-shadow">
                    <CardHeader>
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-32 object-cover rounded-md mb-4"
                      />
                      <CardTitle className="text-lg">{product.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                        {product.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-lg font-bold text-primary">£{product.price}</span>
                        <Button variant="outline" size="sm" asChild>
                          <Link to={`/products/${product.slug}`}>View Details</Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          )}

          {/* External Links */}
          {post.externalLinks.length > 0 && (
            <section className="mt-12">
              <h2 className="text-2xl font-semibold mb-6">Additional Resources</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {post.externalLinks.map((link, index) => (
                  <Card key={index}>
                    <CardContent className="p-4">
                      <a 
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between hover:text-primary transition-colors"
                      >
                        <span>{link.text}</span>
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          )}
        </motion.div>
      </div>
    </main>
  );
};

export default BlogPost;