import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { caseStudies } from "@/data/mockData";

const categories = ["All", "Education", "Environment", "Health", "Economic Development", "Youth Development"];

export default function CaseStudies() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredCaseStudies =
    selectedCategory === "All"
      ? caseStudies
      : caseStudies.filter((study) => study.category === selectedCategory);

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
            <Badge variant="secondary" className="mb-6">Case Studies</Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Stories of Impact and Transformation
            </h1>
            <p className="text-xl text-primary-foreground/90">
              Explore how we've partnered with organizations to create measurable,
              sustainable change across diverse sectors and geographies.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter */}
      <section className="py-8 border-b bg-background sticky top-20 z-40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCaseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="overflow-hidden h-full hover:shadow-xl transition-all duration-300 group">
                  <div className="aspect-video bg-muted relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Badge variant="secondary">{study.category}</Badge>
                      <span className="text-sm text-muted-foreground">
                        {study.duration}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-secondary transition-colors">
                      {study.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {study.client}
                    </p>
                    <p className="text-muted-foreground mb-4">{study.summary}</p>
                    <div className="space-y-2 mb-4">
                      <div className="text-sm font-medium text-secondary">
                        {study.impact.metric1}
                      </div>
                      <div className="text-sm font-medium text-secondary">
                        {study.impact.metric2}
                      </div>
                      <div className="text-sm font-medium text-secondary">
                        {study.impact.metric3}
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {study.tags.map((tag, i) => (
                        <Badge key={i} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <Link
                      to={`/case-studies/${study.id}`}
                      className="text-secondary font-medium hover:underline inline-flex items-center group/link"
                    >
                      Read Full Case Study
                      <ArrowRight className="ml-1 h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {filteredCaseStudies.length === 0 && (
            <div className="text-center py-20">
              <p className="text-xl text-muted-foreground">
                No case studies found in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-gradient-to-r from-primary via-primary to-secondary text-primary-foreground p-12 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Let's Create Your Success Story
            </h2>
            <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
              Partner with us to design strategies that deliver measurable impact for
              your organization and the communities you serve.
            </p>
            <Button asChild size="lg" variant="secondary">
              <Link to="/contact">
                Start Your Journey <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </Card>
        </div>
      </section>
    </div>
  );
}
