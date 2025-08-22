import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import project1Image from "@/assets/project1.jpg";
import project2Image from "@/assets/project2.jpg";
import project3Image from "@/assets/project3.jpg";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "Modern Dashboard",
      description: "A comprehensive web application dashboard with real-time analytics, user management, and intuitive data visualization.",
      image: project1Image,
      technologies: ["React", "TypeScript", "Tailwind CSS", "Chart.js"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 2,
      title: "E-Commerce Platform",
      description: "Mobile-first e-commerce application with seamless shopping experience, payment integration, and inventory management.",
      image: project2Image,
      technologies: ["React Native", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 3,
      title: "Brand Identity System",
      description: "Complete branding and web design system including logo design, style guide, and responsive website implementation.",
      image: project3Image,
      technologies: ["Figma", "CSS", "HTML", "JavaScript"],
      liveUrl: "#",
      githubUrl: "#",
    },
  ];

  return (
    <div className="min-h-screen bg-background pt-24 pb-20">
      {/* Hero Section */}
      <section className="px-6 pb-16">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            My <span className="bg-gradient-yellow bg-clip-text text-transparent">Portfolio</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A selection of projects that showcase my skills in web development, 
            design, and creative problem-solving. Each project represents a unique 
            challenge and innovative solution.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="px-6">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-1 gap-12">
            {projects.map((project) => (
              <Card 
                key={project.id} 
                className="overflow-hidden bg-gradient-card border-border shadow-card hover:shadow-glow transition-all duration-500 group"
              >
                <div className="grid lg:grid-cols-2 gap-0">
                  {/* Image Section */}
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 lg:h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  
                  {/* Content Section */}
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <h3 className="text-2xl lg:text-3xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {project.description}
                    </p>
                    
                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 text-sm bg-primary/10 text-primary border border-primary/20 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    {/* Action Buttons */}
                    <div className="flex gap-4">
                      <Button 
                        asChild
                        className="bg-gradient-yellow text-primary-foreground shadow-yellow hover:shadow-glow"
                      >
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Live Demo
                        </a>
                      </Button>
                      <Button 
                        asChild
                        variant="outline"
                        className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                      >
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-4 w-4" />
                          Code
                        </a>
                      </Button>
                    </div>
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
              Interested in working together?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              I'm always open to discussing new opportunities and creative projects.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-gradient-yellow text-primary-foreground shadow-yellow hover:shadow-glow"
            >
              <a href="/contact">Let's Talk</a>
            </Button>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;