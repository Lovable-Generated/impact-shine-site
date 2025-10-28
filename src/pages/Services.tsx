import { useState } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Target,
  Lightbulb,
  BarChart3,
  Users,
  GraduationCap,
  Network,
  ChevronDown,
  ChevronUp,
  ArrowRight,
} from "lucide-react";
import { services } from "@/data/mockData";

const iconMap: Record<string, any> = {
  Target,
  Lightbulb,
  BarChart3,
  Users,
  GraduationCap,
  Network,
};

export default function Services() {
  const [expandedService, setExpandedService] = useState<number | null>(null);

  const toggleService = (id: number) => {
    setExpandedService(expandedService === id ? null : id);
  };

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
            <Badge variant="secondary" className="mb-6">Our Services</Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Comprehensive Solutions for Maximum Impact
            </h1>
            <p className="text-xl text-primary-foreground/90">
              From strategic planning to implementation and evaluation, we provide
              end-to-end support tailored to your organization's unique needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {services.map((service, index) => {
              const Icon = iconMap[service.icon];
              const isExpanded = expandedService === service.id;

              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="overflow-hidden hover:shadow-lg transition-all duration-300">
                    <div className="p-8">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex items-start gap-6 flex-1">
                          <div className="bg-secondary/10 w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0">
                            <Icon className="h-8 w-8 text-secondary" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-2xl font-bold mb-3">
                              {service.title}
                            </h3>
                            <p className="text-lg text-muted-foreground mb-4">
                              {service.description}
                            </p>

                            {isExpanded && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                className="mt-4 pt-4 border-t"
                              >
                                <p className="text-base text-muted-foreground leading-relaxed">
                                  {service.fullDescription}
                                </p>
                              </motion.div>
                            )}
                          </div>
                        </div>

                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => toggleService(service.id)}
                          className="flex-shrink-0"
                          aria-label={isExpanded ? "Show less" : "Show more"}
                        >
                          {isExpanded ? (
                            <ChevronUp className="h-6 w-6" />
                          ) : (
                            <ChevronDown className="h-6 w-6" />
                          )}
                        </Button>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4">Our Approach</Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                How We Work With You
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-6">
                <div className="bg-secondary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4 text-secondary font-bold text-xl">
                  1
                </div>
                <h3 className="text-xl font-semibold mb-3">Discovery & Design</h3>
                <p className="text-muted-foreground">
                  We begin by deeply understanding your context, challenges, and
                  aspirations through stakeholder interviews and collaborative
                  workshops.
                </p>
              </Card>

              <Card className="p-6">
                <div className="bg-secondary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4 text-secondary font-bold text-xl">
                  2
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  Implementation & Capacity Building
                </h3>
                <p className="text-muted-foreground">
                  We work alongside your team to implement strategies, building
                  internal capabilities to ensure long-term sustainability.
                </p>
              </Card>

              <Card className="p-6">
                <div className="bg-secondary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4 text-secondary font-bold text-xl">
                  3
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  Evaluation & Iteration
                </h3>
                <p className="text-muted-foreground">
                  We measure outcomes rigorously and iterate based on learnings,
                  ensuring continuous improvement and adaptive management.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-gradient-to-r from-primary via-primary to-secondary text-primary-foreground p-12 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
              Let's discuss how our services can help you achieve your impact goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link to="/contact">
                  Schedule a Consultation <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-white/10 border-white/30 hover:bg-white/20">
                <Link to="/case-studies">View Our Work</Link>
              </Button>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
