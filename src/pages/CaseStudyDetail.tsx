import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { caseStudies } from "@/data/mockData";

export default function CaseStudyDetail() {
  const { id } = useParams();
  const study = caseStudies.find((s) => s.id === Number(id));

  if (!study) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Case Study Not Found</h1>
          <Button asChild>
            <Link to="/case-studies">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Case Studies
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  const relatedStudies = caseStudies
    .filter((s) => s.id !== study.id && s.category === study.category)
    .slice(0, 2);

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-r from-primary via-primary to-secondary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <Button
              asChild
              variant="ghost"
              className="mb-6 text-primary-foreground hover:text-primary-foreground/80"
            >
              <Link to="/case-studies">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Case Studies
              </Link>
            </Button>
            <div className="flex items-center gap-3 mb-6">
              <Badge variant="secondary">{study.category}</Badge>
              <span className="text-primary-foreground/80">{study.duration}</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">{study.title}</h1>
            <p className="text-xl text-primary-foreground/90">{study.client}</p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Summary */}
            <Card className="p-8 mb-12 bg-muted/30">
              <p className="text-xl leading-relaxed">{study.summary}</p>
            </Card>

            {/* Challenge */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6">The Challenge</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {study.challenge}
              </p>
            </div>

            {/* Solution */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Our Solution</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {study.solution}
              </p>
            </div>

            {/* Impact Metrics */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Measurable Impact</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="p-6 text-center">
                  <CheckCircle2 className="h-12 w-12 text-secondary mx-auto mb-4" />
                  <div className="text-2xl font-bold text-secondary mb-2">
                    {study.impact.metric1}
                  </div>
                </Card>
                <Card className="p-6 text-center">
                  <CheckCircle2 className="h-12 w-12 text-secondary mx-auto mb-4" />
                  <div className="text-2xl font-bold text-secondary mb-2">
                    {study.impact.metric2}
                  </div>
                </Card>
                <Card className="p-6 text-center">
                  <CheckCircle2 className="h-12 w-12 text-secondary mx-auto mb-4" />
                  <div className="text-2xl font-bold text-secondary mb-2">
                    {study.impact.metric3}
                  </div>
                </Card>
              </div>
            </div>

            {/* Tags */}
            <div className="mb-12">
              <h3 className="text-xl font-semibold mb-4">Project Tags</h3>
              <div className="flex flex-wrap gap-2">
                {study.tags.map((tag, i) => (
                  <Badge key={i} variant="outline">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            {/* CTA */}
            <Card className="bg-gradient-to-r from-primary via-primary to-secondary text-primary-foreground p-8">
              <h3 className="text-2xl font-bold mb-4">
                Interested in Similar Results?
              </h3>
              <p className="mb-6 text-primary-foreground/90">
                Let's discuss how we can help your organization achieve transformative
                impact.
              </p>
              <Button asChild variant="secondary" size="lg">
                <Link to="/contact">
                  Get in Touch <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Related Case Studies */}
      {relatedStudies.length > 0 && (
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Related Case Studies
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {relatedStudies.map((relatedStudy) => (
                <Card
                  key={relatedStudy.id}
                  className="overflow-hidden hover:shadow-xl transition-all duration-300"
                >
                  <div className="aspect-video bg-muted"></div>
                  <div className="p-6">
                    <Badge variant="secondary" className="mb-3">
                      {relatedStudy.category}
                    </Badge>
                    <h3 className="text-xl font-semibold mb-2">
                      {relatedStudy.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {relatedStudy.summary}
                    </p>
                    <Link
                      to={`/case-studies/${relatedStudy.id}`}
                      className="text-secondary font-medium hover:underline inline-flex items-center"
                    >
                      Read Case Study <ArrowRight className="ml-1 h-4 w-4" />
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
