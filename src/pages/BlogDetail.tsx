import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Facebook, Twitter, Linkedin, Mail } from "lucide-react";
import { blogPosts } from "@/data/mockData";

export default function BlogDetail() {
  const { id } = useParams();
  const post = blogPosts.find((p) => p.id === Number(id));

  if (!post) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Article Not Found</h1>
          <Button asChild>
            <Link to="/blog"><ArrowLeft className="mr-2 h-4 w-4" />Back to Blog</Link>
          </Button>
        </div>
      </div>
    );
  }

  const relatedPosts = blogPosts.filter((p) => p.id !== post.id && p.category === post.category).slice(0, 3);

  return (
    <div className="min-h-screen pt-20">
      <article className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Button asChild variant="ghost" className="mb-6">
              <Link to="/blog"><ArrowLeft className="mr-2 h-4 w-4" />Back to Blog</Link>
            </Button>
            
            <Badge variant="outline" className="mb-4">{post.category}</Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">{post.title}</h1>
            
            <div className="flex items-center gap-4 mb-8 text-muted-foreground">
              <span>{post.author}</span>
              <span>•</span>
              <span>{post.date}</span>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>

            <div className="aspect-video bg-muted rounded-2xl mb-12"></div>

            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-xl text-muted-foreground leading-relaxed">{post.excerpt}</p>
              <p className="text-muted-foreground leading-relaxed mt-6">
                This is placeholder content for the full article. In a production environment, 
                this would contain the complete article content with proper formatting, images, 
                and rich media elements.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mb-8">
              {post.tags.map((tag, i) => (
                <Badge key={i} variant="secondary">{tag}</Badge>
              ))}
            </div>

            <Card className="p-6 mb-12">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <h3 className="font-semibold mb-1">Share this article</h3>
                  <p className="text-sm text-muted-foreground">Help spread these insights</p>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="icon" aria-label="Share on Facebook">
                    <Facebook className="h-5 w-5" />
                  </Button>
                  <Button variant="outline" size="icon" aria-label="Share on Twitter">
                    <Twitter className="h-5 w-5" />
                  </Button>
                  <Button variant="outline" size="icon" aria-label="Share on LinkedIn">
                    <Linkedin className="h-5 w-5" />
                  </Button>
                  <Button variant="outline" size="icon" aria-label="Share via Email">
                    <Mail className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-muted/30">
              <div className="flex gap-6">
                <div className="w-24 h-24 bg-muted rounded-full flex-shrink-0"></div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{post.author}</h3>
                  <p className="text-muted-foreground mb-3">{post.authorRole}</p>
                  <p className="text-muted-foreground">
                    Expert contributor with deep experience in social innovation and impact strategy.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </article>

      {relatedPosts.length > 0 && (
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-12 text-center">Related Articles</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {relatedPosts.map((relatedPost) => (
                <Card key={relatedPost.id} className="overflow-hidden hover:shadow-xl transition-all">
                  <div className="aspect-video bg-muted"></div>
                  <div className="p-6">
                    <Badge variant="outline" className="mb-3">{relatedPost.category}</Badge>
                    <h3 className="text-lg font-semibold mb-2 line-clamp-2">{relatedPost.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{relatedPost.excerpt}</p>
                    <Link to={`/blog/${relatedPost.id}`} className="text-secondary font-medium hover:underline">
                      Read Article
                    </Link>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
