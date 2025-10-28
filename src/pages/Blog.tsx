import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Search, Grid, List } from "lucide-react";
import { blogPosts } from "@/data/mockData";

const categories = ["All", "Insights", "Methodology", "Collaboration", "Technology", "Systems Thinking", "Finance"];

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory =
      selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-r from-primary via-primary to-secondary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <Badge variant="secondary" className="mb-6">Insights & Resources</Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Thought Leadership in Social Impact
            </h1>
            <p className="text-xl text-primary-foreground/90">
              Expert perspectives, practical tools, and emerging trends in the social
              innovation space.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search & Filters */}
      <section className="py-8 border-b bg-background sticky top-20 z-40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-4">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>

            <div className="flex gap-2">
              <Button
                variant={viewMode === "grid" ? "default" : "outline"}
                size="icon"
                onClick={() => setViewMode("grid")}
                aria-label="Grid view"
              >
                <Grid className="h-5 w-5" />
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "outline"}
                size="icon"
                onClick={() => setViewMode("list")}
                aria-label="List view"
              >
                <List className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                size="sm"
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {viewMode === "grid" ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="overflow-hidden h-full hover:shadow-xl transition-all duration-300 group">
                    <div className="aspect-video bg-muted"></div>
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-3 text-sm text-muted-foreground">
                        <Badge variant="outline">{post.category}</Badge>
                        <span>{post.readTime}</span>
                      </div>
                      <h3 className="text-xl font-semibold mb-2 line-clamp-2 group-hover:text-secondary transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        {post.author} • {post.date}
                      </p>
                      <p className="text-muted-foreground mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.map((tag, i) => (
                          <Badge key={i} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <Link
                        to={`/blog/${post.id}`}
                        className="text-secondary font-medium hover:underline inline-flex items-center group/link"
                      >
                        Read Article
                        <ArrowRight className="ml-1 h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="space-y-6 max-w-4xl mx-auto">
              {filteredPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Card className="p-6 hover:shadow-lg transition-all duration-300">
                    <div className="flex gap-6">
                      <div className="w-48 h-32 bg-muted rounded-lg flex-shrink-0 hidden md:block"></div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2 text-sm text-muted-foreground">
                          <Badge variant="outline">{post.category}</Badge>
                          <span>{post.readTime}</span>
                        </div>
                        <h3 className="text-2xl font-semibold mb-2 hover:text-secondary transition-colors">
                          <Link to={`/blog/${post.id}`}>{post.title}</Link>
                        </h3>
                        <p className="text-sm text-muted-foreground mb-3">
                          {post.author} • {post.date}
                        </p>
                        <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                        <div className="flex items-center justify-between">
                          <div className="flex flex-wrap gap-2">
                            {post.tags.map((tag, i) => (
                              <Badge key={i} variant="secondary" className="text-xs">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                          <Link
                            to={`/blog/${post.id}`}
                            className="text-secondary font-medium hover:underline inline-flex items-center whitespace-nowrap"
                          >
                            Read Article <ArrowRight className="ml-1 h-4 w-4" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          )}

          {filteredPosts.length === 0 && (
            <div className="text-center py-20">
              <p className="text-xl text-muted-foreground">
                No articles found matching your criteria.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
