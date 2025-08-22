import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Code, Palette, Zap, ArrowRight, Github, Linkedin, Mail } from "lucide-react";

const Home = () => {
  const features = [
    {
      icon: Code,
      title: "Web Development",
      description: "Responsive and scalable websites built with modern technologies.",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Clean, modern interfaces with your brand colors and user-first approach.",
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Fast, optimized builds that deliver exceptional user experiences.",
    },
  ];

  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Mail, href: "mailto:hello@example.com", label: "Email" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-24 pb-20 px-6">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Hi, I'm{" "}
              <span className="bg-gradient-yellow bg-clip-text text-transparent">
                Alex Chen
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              A passionate developer & designer building modern web experiences
              that combine beautiful design with powerful functionality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                asChild
                size="lg"
                className="bg-gradient-yellow text-primary-foreground shadow-yellow hover:shadow-glow transition-all duration-300"
              >
                <Link to="/portfolio">
                  View My Work <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                <Link to="/contact">Get In Touch</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What I Do Best</h2>
            <p className="text-xl text-muted-foreground">
              Combining technical expertise with creative vision
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Card 
                  key={index} 
                  className="p-8 bg-gradient-card border-border shadow-card hover:shadow-glow transition-all duration-300 group"
                >
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-6 bg-gradient-yellow rounded-xl flex items-center justify-center shadow-yellow group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <Card className="p-12 text-center bg-gradient-dark border-primary/20 shadow-yellow">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to build something amazing?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's collaborate on your next project. I'm always excited to work on 
              challenging and creative solutions.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-gradient-yellow text-primary-foreground shadow-yellow hover:shadow-glow"
            >
              <Link to="/contact">
                Start a Project <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground mb-4 md:mb-0">
              © 2025 Alex Chen. Built with passion and modern tech.
            </p>
            <div className="flex space-x-6">
              {socialLinks.map((link, index) => {
                const IconComponent = link.icon;
                return (
                  <a
                    key={index}
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                    aria-label={link.label}
                  >
                    <IconComponent className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;