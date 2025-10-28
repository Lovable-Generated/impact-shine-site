import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AnimatedCounter } from "@/components/shared/AnimatedCounter";
import { TestimonialCarousel } from "@/components/shared/TestimonialCarousel";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  ArrowRight,
  Target,
  Lightbulb,
  BarChart3,
  Users,
  GraduationCap,
  Network,
} from "lucide-react";
import { services, caseStudies, blogPosts, impactMetrics, clientLogos } from "@/data/mockData";
import heroImage from "@/assets/hero-home.jpg";
import impactVisual from "@/assets/impact-visual.jpg";

const iconMap: Record<string, any> = {
  Target,
  Lightbulb,
  BarChart3,
  Users,
  GraduationCap,
  Network,
};

export default function Home() {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [missionRef, missionInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [servicesRef, servicesInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(15, 23, 42, 0.9) 0%, rgba(15, 23, 42, 0.7) 100%), url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <Badge variant="secondary" className="mb-6 text-sm px-4 py-2">
              Creating Measurable Social Impact
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Transform Challenges Into{" "}
              <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                Lasting Impact
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-10 leading-relaxed">
              We empower organizations to design, implement, and scale innovative
              solutions that create meaningful change in communities worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-lg px-8">
                <Link to="/contact">
                  Start Your Journey <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg px-8 bg-white/10 border-white/30 text-white hover:bg-white/20">
                <Link to="/services">Explore Services</Link>
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
            <div className="w-1 h-3 bg-white/50 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {impactMetrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <AnimatedCounter
                  end={metric.value}
                  suffix={metric.suffix}
                  isMillions={metric.isMillions}
                />
                <div className="text-muted-foreground font-medium mt-2">
                  {metric.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section ref={missionRef} className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={missionInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <Badge variant="outline" className="mb-4">Our Mission</Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Driving Systemic Change Through Strategic Innovation
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                At IMPACT VISION, we believe that the world's most pressing challenges
                require innovative thinking, collaborative approaches, and unwavering
                commitment to measurable results.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                We partner with nonprofits, foundations, social enterprises, and
                forward-thinking organizations to design and implement strategies
                that create lasting positive change for communities around the globe.
              </p>
              <Button asChild size="lg">
                <Link to="/about">
                  Learn Our Story <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={missionInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <img
                src={impactVisual}
                alt="Our mission in action"
                className="rounded-2xl shadow-xl w-full"
              />
              <div className="absolute -bottom-6 -right-6 bg-accent text-accent-foreground p-6 rounded-xl shadow-lg">
                <div className="text-3xl font-bold">15+</div>
                <div className="text-sm">Years of Impact</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section ref={servicesRef} className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge variant="outline" className="mb-4">What We Offer</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Comprehensive Solutions for Social Impact
            </h2>
            <p className="text-lg text-muted-foreground">
              From strategy development to implementation and evaluation, we provide
              end-to-end support for your impact journey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = iconMap[service.icon];
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="p-6 h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 hover:border-secondary">
                    <div className="bg-secondary/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="h-7 w-7 text-secondary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                    <p className="text-muted-foreground mb-4">
                      {service.description}
                    </p>
                    <Link
                      to="/services"
                      className="text-secondary font-medium hover:underline inline-flex items-center"
                    >
                      Learn More <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg">
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Case Studies */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge variant="outline" className="mb-4">Success Stories</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Real Impact, Real Results
            </h2>
            <p className="text-lg text-muted-foreground">
              Discover how we've helped organizations transform challenges into
              measurable, sustainable outcomes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.slice(0, 3).map((study) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden h-full hover:shadow-xl transition-all duration-300">
                  <div className="aspect-video bg-muted"></div>
                  <div className="p-6">
                    <Badge variant="secondary" className="mb-3">
                      {study.category}
                    </Badge>
                    <h3 className="text-xl font-semibold mb-2">{study.title}</h3>
                    <p className="text-muted-foreground mb-4">{study.summary}</p>
                    <div className="space-y-2 mb-4">
                      <div className="text-sm font-medium text-secondary">
                        {study.impact.metric1}
                      </div>
                      <div className="text-sm font-medium text-secondary">
                        {study.impact.metric2}
                      </div>
                    </div>
                    <Link
                      to={`/case-studies/${study.id}`}
                      className="text-secondary font-medium hover:underline inline-flex items-center"
                    >
                      Read Case Study <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline">
              <Link to="/case-studies">View All Case Studies</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-semibold mb-2">Trusted by Leading Organizations</h3>
            <p className="text-muted-foreground">
              We're proud to partner with changemakers across sectors
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
            {clientLogos.map((logo, index) => (
              <div key={index} className="text-center text-muted-foreground font-medium">
                {logo}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge variant="outline" className="mb-4">Client Testimonials</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              What Our Partners Say
            </h2>
          </div>
          <TestimonialCarousel />
        </div>
      </section>

      {/* Latest Insights */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge variant="outline" className="mb-4">Latest Insights</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Thought Leadership & Resources
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.slice(0, 3).map((post) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden h-full hover:shadow-lg transition-all duration-300">
                  <div className="aspect-video bg-muted"></div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3 text-sm text-muted-foreground">
                      <Badge variant="outline">{post.category}</Badge>
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <Link
                      to={`/blog/${post.id}`}
                      className="text-secondary font-medium hover:underline inline-flex items-center"
                    >
                      Read Article <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline">
              <Link to="/blog">View All Insights</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary via-primary to-secondary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Create Lasting Impact?
            </h2>
            <p className="text-xl mb-10 text-primary-foreground/90">
              Let's work together to design strategies that drive meaningful change
              in your community and beyond.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="text-lg px-8">
                <Link to="/contact">Get Started Today</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg px-8 bg-white/10 border-white/30 hover:bg-white/20">
                <Link to="/case-studies">View Our Work</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
