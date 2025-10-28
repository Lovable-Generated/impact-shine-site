import { useState } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast({ title: "Error", description: "Please fill in all required fields.", variant: "destructive" });
      return;
    }
    setIsSubmitting(true);
    setTimeout(() => {
      toast({ title: "Message Sent!", description: "We'll get back to you within 24 hours." });
      setFormData({ name: "", email: "", subject: "", message: "" });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 bg-gradient-to-r from-primary via-primary to-secondary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6">Get in Touch</Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Let's Create Impact Together</h1>
            <p className="text-xl text-primary-foreground/90">Ready to start your journey? Reach out and let's discuss how we can help.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
            <div className="lg:col-span-2">
              <Card className="p-8">
                <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name *</Label>
                      <Input id="name" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input id="email" type="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} required />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" value={formData.subject} onChange={(e) => setFormData({...formData, subject: e.target.value})} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea id="message" rows={6} value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} required />
                  </div>
                  <Button type="submit" size="lg" disabled={isSubmitting} className="w-full md:w-auto">
                    {isSubmitting ? "Sending..." : "Send Message"} <Send className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              </Card>
            </div>

            <div className="space-y-6">
              <Card className="p-6">
                <Mail className="h-8 w-8 text-secondary mb-4" />
                <h3 className="font-semibold mb-2">Email Us</h3>
                <a href="mailto:hello@impactvision.org" className="text-muted-foreground hover:text-secondary">hello@impactvision.org</a>
              </Card>
              <Card className="p-6">
                <Phone className="h-8 w-8 text-secondary mb-4" />
                <h3 className="font-semibold mb-2">Call Us</h3>
                <a href="tel:+15551234567" className="text-muted-foreground hover:text-secondary">+1 (555) 123-4567</a>
              </Card>
              <Card className="p-6">
                <MapPin className="h-8 w-8 text-secondary mb-4" />
                <h3 className="font-semibold mb-2">Visit Us</h3>
                <p className="text-muted-foreground">123 Impact Drive<br/>Innovation District<br/>San Francisco, CA 94105</p>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
