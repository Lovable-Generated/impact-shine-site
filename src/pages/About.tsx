import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FAQAccordion } from "@/components/shared/FAQAccordion";
import { CheckCircle2 } from "lucide-react";
import { teamMembers } from "@/data/mockData";
import teamPhoto from "@/assets/team-photo.jpg";

const coreValues = [
  {
    title: "Impact-Driven",
    description: "Every decision we make is guided by its potential to create meaningful, measurable social impact.",
  },
  {
    title: "Collaborative Approach",
    description: "We believe the best solutions emerge from genuine partnerships and collective wisdom.",
  },
  {
    title: "Systems Thinking",
    description: "We address root causes and leverage points to drive lasting systemic transformation.",
  },
  {
    title: "Adaptive Learning",
    description: "We embrace iteration, feedback, and continuous improvement in all our work.",
  },
  {
    title: "Equity & Inclusion",
    description: "We center marginalized voices and work to dismantle barriers to opportunity.",
  },
  {
    title: "Evidence-Based",
    description: "We ground our strategies in rigorous research, data, and proven methodologies.",
  },
];

const timeline = [
  { year: "2009", event: "IMPACT VISION founded with a mission to democratize access to strategic consulting for social sector organizations" },
  { year: "2012", event: "Expanded to international markets, launching programs in Latin America and Southeast Asia" },
  { year: "2015", event: "Reached milestone of 100 completed projects across 25 countries" },
  { year: "2018", event: "Launched IMPACT VISION Academy to build capacity of social sector leaders globally" },
  { year: "2021", event: "Achieved B Corporation certification, formalizing our commitment to stakeholder capitalism" },
  { year: "2024", event: "Celebrating 15 years of impact with 500+ projects and 2.5M+ lives positively affected" },
];

export default function About() {
  const [storyRef, storyInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [valuesRef, valuesInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [teamRef, teamInView] = useInView({ triggerOnce: true, threshold: 0.1 });

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
            <Badge variant="secondary" className="mb-6">About Us</Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Empowering Change, One Partnership at a Time
            </h1>
            <p className="text-xl text-primary-foreground/90">
              For over 15 years, we've been partnering with visionary organizations
              to transform ideas into measurable impact.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section ref={storyRef} className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={storyInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <Badge variant="outline" className="mb-4">Our Story</Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Born from a Vision of Equitable Impact
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                IMPACT VISION was founded in 2009 by a group of social entrepreneurs
                and former management consultants who believed that world-class
                strategic thinking shouldn't be the exclusive domain of corporations.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                We saw talented nonprofit leaders struggling with limited resources,
                foundations uncertain about how to maximize their philanthropic
                investments, and social enterprises needing sophisticated business
                strategy to scale their impact.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Today, we're proud to have supported over 250 organizations across
                40 countries, contributing to positive outcomes for millions of people
                through strategic innovation, capacity building, and systems change
                initiatives.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={storyInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img
                src={teamPhoto}
                alt="IMPACT VISION team"
                className="rounded-2xl shadow-xl w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section ref={valuesRef} className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge variant="outline" className="mb-4">Our Values</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Principles That Guide Our Work
            </h2>
            <p className="text-lg text-muted-foreground">
              These core values shape how we partner with clients and approach every
              challenge we tackle together.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 h-full">
                  <CheckCircle2 className="h-10 w-10 text-secondary mb-4" />
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge variant="outline" className="mb-4">Our Journey</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              15 Years of Growth and Impact
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-8 mb-12 last:mb-0"
              >
                <div className="flex flex-col items-center">
                  <div className="bg-secondary text-secondary-foreground rounded-full w-16 h-16 flex items-center justify-center font-bold text-sm flex-shrink-0">
                    {item.year}
                  </div>
                  {index !== timeline.length - 1 && (
                    <div className="w-0.5 bg-border h-full mt-4"></div>
                  )}
                </div>
                <div className="pb-12">
                  <Card className="p-6">
                    <p className="text-lg">{item.event}</p>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section ref={teamRef} className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge variant="outline" className="mb-4">Our Team</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Meet the Changemakers
            </h2>
            <p className="text-lg text-muted-foreground">
              A diverse team of strategists, facilitators, and domain experts
              passionate about social impact.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={teamInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: index * 0.05 }}
              >
                <Card className="overflow-hidden text-center hover:shadow-lg transition-all duration-300">
                  <div className="aspect-square bg-muted"></div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
                    <p className="text-sm text-secondary font-medium mb-3">
                      {member.role}
                    </p>
                    <p className="text-sm text-muted-foreground">{member.bio}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge variant="outline" className="mb-4">FAQs</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <FAQAccordion />
          </div>
        </div>
      </section>
    </div>
  );
}
