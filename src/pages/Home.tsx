import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Code, Palette, Zap, ArrowRight } from "lucide-react";
import { Helmet } from "react-helmet-async";
import Footer from "@/components/Footer";

const Home = () => {
  const features = [
    {
      icon: Code,
      title: "Web Design & Development",
      description: "Custom, high-performing websites built for growth, not just looks.",
    },
    {
      icon: Palette,
      title: "Brand & UI/UX Strategy",
      description: "Clean, on-brand design that connects emotionally and converts logically.",
    },
    {
      icon: Zap,
      title: "Performance & Optimization",
      description: "Fast, scalable digital experiences powered by modern technologies.",
    },
  ];



  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>ELS DIGITAL — Web Development & Marketing That Converts</title>
        <meta name="description" content="We design and develop high-impact websites and digital marketing solutions that help brands grow online. Simple. Strategic. Smart." />
        <meta property="og:title" content="ELS Digital — Web Development & Marketing That Converts" />
        <meta property="og:description" content="We create modern, fast, and beautiful websites designed to turn visitors into clients." />
        <meta property="og:image" content="/preview.svg" />
        <meta property="og:url" content="https://elsdigital.com/" />
      </Helmet>
      {/* Hero Section */}
      <section className="pt-24 pb-20 px-6">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              We Build{" "}
              <span className="bg-gradient-yellow bg-clip-text text-transparent">
                Digital Experiences
              </span>{" "}
              That Convert & Inspire
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              ELS Digital blends design, code, and strategy to help brands grow through creativity and technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                asChild
                size="lg"
                className="bg-gradient-yellow text-primary-foreground shadow-yellow hover:shadow-glow transition-all duration-300"
              >
                <Link to="/services">
                  Explore Services <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                <Link to="/contact">Let's Talk</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What We Do</h2>
            <p className="text-xl text-muted-foreground">
              We combine design, development, and digital strategy to create experiences that move people.
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
              Let’s Build Your Next Digital Experience
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              From landing pages to full-scale web platforms, ELS Digital helps brands grow through creative technology and strategy.
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

      <Footer />
    </div>
  );
};

export default Home;
