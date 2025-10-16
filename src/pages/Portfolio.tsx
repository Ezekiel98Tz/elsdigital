import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  ExternalLink, 
  Github, 
  ArrowRight,
  Code,
  Palette,
  Smartphone,
  ShoppingCart,
  BarChart3,
  Globe,
  Filter
} from "lucide-react";
import Footer from "@/components/Footer";

// Import images
import ecommerceImg from "@/assets/e-commerce.png";
import analyticsImg from "@/assets/analytics-dashboard.png";
import mobileBankingImg from "@/assets/Mobile-banking.png";
import brandkitImg from "@/assets/brandkit.png";
import saasImg from "@/assets/saas-platform.png";
import corporateImg from "@/assets/corporate.png";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Built with React and TypeScript for the frontend, Node.js backend with PostgreSQL database. Integrated payment processing and deployed on AWS for scalability.",
      image: ecommerceImg,
      technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "AWS"],
      category: "Web Development",
      icon: <ShoppingCart />,
      liveUrl: "https://example-ecommerce.com",
      githubUrl: "https://github.com/example/ecommerce",
      featured: true,
      implementation: "Frontend developed using React with TypeScript for type safety. Backend API built with Node.js, data stored in PostgreSQL. Deployed on AWS with Docker containers for reliable scaling."
    },
    {
      id: 2,
      title: "Analytics Dashboard",
      description: "Data visualization platform using React frontend with Python backend. PostgreSQL handles data storage while custom charts provide real-time business insights.",
      image: analyticsImg,
      technologies: ["React", "Python", "PostgreSQL", "Tailwind CSS"],
      category: "Data Visualization",
      icon: <BarChart3 />,
      liveUrl: "https://example-analytics.com",
      githubUrl: "https://github.com/example/analytics",
      featured: true,
      implementation: "React frontend styled with Tailwind CSS for responsive design. Python backend processes data analytics, PostgreSQL stores metrics. Git version control throughout development."
    },
    {
      id: 3,
      title: "Mobile Banking App",
      description: "Secure mobile banking solution with React-based frontend, Node.js API, and PostgreSQL database. Deployed on AWS with comprehensive security measures.",
      image: mobileBankingImg,
      technologies: ["React", "Node.js", "PostgreSQL", "AWS"],
      category: "Mobile Development",
      icon: <Smartphone />,
      liveUrl: "https://example-banking.com",
      githubUrl: "https://github.com/example/banking",
      featured: false,
      implementation: "Mobile-responsive React application with Node.js backend API. PostgreSQL manages user data securely. AWS deployment ensures high availability and security compliance."
    },
    {
      id: 4,
      title: "Brand Identity System",
      description: "Complete brand design created in Figma with comprehensive design systems. Includes logo design, color palettes, and brand guidelines for consistent identity.",
      image: brandkitImg,
      technologies: ["Figma", "UI/UX", "Brand Systems"],
      category: "UI/UX Design",
      icon: <Palette />,
      liveUrl: "https://example-brand.com",
      githubUrl: null,
      featured: false,
      implementation: "Designed entirely in Figma using systematic approach to brand identity. Created comprehensive design systems with reusable components and detailed brand guidelines."
    },
    {
      id: 5,
      title: "SaaS Platform",
      description: "Project management platform built with Next.js and TypeScript. PostgreSQL database with Tailwind CSS styling, deployed on Vercel for optimal performance.",
      image: saasImg,
      technologies: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS", "Vercel"],
      category: "Web Development",
      icon: <Code />,
      liveUrl: "https://example-saas.com",
      githubUrl: "https://github.com/example/saas",
      featured: true,
      implementation: "Next.js framework with TypeScript for full-stack development. PostgreSQL database integration, Tailwind CSS for styling. Git workflow with Vercel deployment pipeline."
    },
    {
      id: 6,
      title: "Corporate Website",
      description: "Professional corporate website using Next.js with TypeScript. Tailwind CSS for styling and Vercel deployment for fast, reliable hosting.",
      image: corporateImg,
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
      category: "Web Development",
      icon: <Globe />,
      liveUrl: "https://example-corporate.com",
      githubUrl: "https://github.com/example/corporate",
      featured: false,
      implementation: "Built with Next.js and TypeScript for performance and maintainability. Tailwind CSS provides responsive design. Git version control with automated Vercel deployment."
    }
  ];

  const categories = ["All", "Web Development", "Mobile Development", "UI/UX Design", "Data Visualization"];
  const [selectedCategory, setSelectedCategory] = React.useState("All");

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const featuredProjects = projects.filter(project => project.featured);

  return (
    <div className="min-h-screen bg-background pt-24 pb-20">
      {/* Hero Section */}
      <section className="px-6 pb-16">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Our <span className="bg-gradient-yellow bg-clip-text text-transparent">Portfolio</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
            Explore our collection of successful projects that showcase our expertise in web development, 
            mobile applications, and digital design. Each project represents our commitment to quality and innovation.
          </p>
          <Button 
            className="bg-gradient-yellow text-primary-foreground shadow-yellow hover:shadow-glow"
            size="lg"
          >
            Start Your Project
          </Button>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="px-6 mb-20">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Featured <span className="bg-gradient-yellow bg-clip-text text-transparent">Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Highlighting our most impactful and innovative work
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {featuredProjects.map((project) => (
              <Card
                key={project.id}
                className="overflow-hidden bg-gradient-card border-border shadow-card hover:shadow-glow transition-all duration-500 group"
              >
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="secondary" className="bg-primary/10 text-primary">
                      {project.category}
                    </Badge>
                    <div className="text-2xl text-primary/60">
                      {project.icon}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="bg-background/50 p-4 rounded-lg border border-border">
                    <h4 className="text-sm font-semibold text-primary mb-2">Implementation:</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {project.implementation}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* All Projects */}
      <section className="px-6">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              All <span className="bg-gradient-yellow bg-clip-text text-transparent">Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Browse through our complete portfolio of work
            </p>
            
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category)}
                  className={selectedCategory === category 
                    ? "bg-gradient-yellow text-primary-foreground" 
                    : "border-primary/20 hover:bg-primary/10"
                  }
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Card
                key={project.id}
                className="overflow-hidden bg-gradient-card border-border shadow-card hover:shadow-glow transition-all duration-500 group"
              >
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="secondary" className="bg-primary/10 text-primary text-xs">
                      {project.category}
                    </Badge>
                    <div className="text-lg text-primary/60">
                      {project.icon}
                    </div>
                  </div>
                  <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-3 leading-relaxed">
                    {project.description.length > 80 
                      ? `${project.description.substring(0, 80)}...` 
                      : project.description
                    }
                  </p>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {project.technologies.slice(0, 3).map((tech, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{project.technologies.length - 3}
                      </Badge>
                    )}
                  </div>
                  <div className="bg-background/50 p-3 rounded-lg border border-border">
                    <h4 className="text-xs font-semibold text-primary mb-1">Implementation:</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {project.implementation.length > 120 
                        ? `${project.implementation.substring(0, 120)}...` 
                        : project.implementation
                      }
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 mt-20">
        <div className="container mx-auto">
          <Card className="p-12 text-center bg-gradient-dark border-primary/20 shadow-yellow">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's collaborate to bring your vision to life. From concept to deployment, 
              we'll guide you through every step of the development process.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-gradient-yellow text-primary-foreground shadow-yellow hover:shadow-glow"
              >
                <Link to="/contact">Start Your Project</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary/20 hover:bg-primary/10"
              >
                <a href="/services">View Our Services</a>
              </Button>
            </div>
          </Card>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Portfolio;