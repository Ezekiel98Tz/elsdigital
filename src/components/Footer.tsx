import { Linkedin, Mail, Github, Instagram, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");

  const socialLinks = [
    { icon: Github, href: "https://github.com/Ezekiel98Tz", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/ezekiel-sued-1a9577245", label: "LinkedIn" },
    { icon: Instagram, href: "https://www.instagram.com/_elsdigital", label: "Instagram" },
    { icon: Mail, href: "mailto:Info@elsdigital.com", label: "Email" },
  ];

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle email subscription logic here
    console.log("Email subscription:", email);
    setEmail("");
    alert("Thank you for subscribing to our newsletter!");
  };

  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">ELS Digital</h3>
            <p className="text-muted-foreground mb-4">
              Beyond Perfection. Creating exceptional digital experiences that drive results.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => {
                const IconComponent = link.icon;
                return (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                    aria-label={link.label}
                  >
                    <IconComponent className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="/about" className="hover:text-primary transition-colors">About</a></li>
              <li><a href="/services" className="hover:text-primary transition-colors">Services</a></li>
              <li><a href="/portfolio" className="hover:text-primary transition-colors">Portfolio</a></li>
              <li><a href="/contact" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Newsletter Subscription */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
            <p className="text-muted-foreground mb-4">
              Subscribe to our newsletter for the latest updates and insights.
            </p>
            <form onSubmit={handleEmailSubmit} className="flex gap-2">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1"
              />
              <Button type="submit" size="sm">
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-border text-center">
          <p className="text-muted-foreground">
            © 2025 ELS Digital. Beyond Perfection. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;