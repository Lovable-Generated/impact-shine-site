import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";
import {
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  ArrowUp,
  Mail,
} from "lucide-react";

export const Footer = () => {
  const [email, setEmail] = useState("");

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast({
        title: "Success!",
        description: "You've been subscribed to our newsletter.",
      });
      setEmail("");
    } else {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand & Newsletter */}
          <div className="lg:col-span-2">
            <div className="text-2xl font-bold mb-4">IMPACT VISION</div>
            <p className="text-primary-foreground/80 mb-6 max-w-md">
              Empowering organizations to create lasting social impact through
              strategic innovation and collaborative approaches.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-3">
              <div className="text-sm font-semibold mb-2">
                Subscribe to Our Newsletter
              </div>
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50"
                />
                <Button
                  type="submit"
                  variant="secondary"
                  className="whitespace-nowrap"
                >
                  Subscribe
                </Button>
              </div>
            </form>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/about"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/case-studies"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Case Studies
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Insights
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Get in Touch</h3>
            <ul className="space-y-3 text-primary-foreground/80">
              <li className="flex items-start gap-2">
                <Mail className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:hello@impactvision.org"
                  className="hover:text-primary-foreground transition-colors"
                >
                  hello@impactvision.org
                </a>
              </li>
              <li>
                <div className="font-medium text-primary-foreground mb-2">
                  Follow Us
                </div>
                <div className="flex gap-3">
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-secondary transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-secondary transition-colors"
                    aria-label="Twitter"
                  >
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-secondary transition-colors"
                    aria-label="Facebook"
                  >
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-secondary transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-foreground/70">
            © 2024 IMPACT VISION. All rights reserved.
          </p>
          <Button
            variant="ghost"
            size="icon"
            onClick={scrollToTop}
            className="text-primary-foreground hover:text-secondary hover:bg-primary-foreground/10"
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </footer>
  );
};
