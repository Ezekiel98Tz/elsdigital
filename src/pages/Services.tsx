import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Code, 
  Palette, 
  Search, 
  Smartphone, 
  ShoppingCart, 
  BarChart3,
  Zap,
  Shield,
  Headphones
} from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Footer from "@/components/Footer";

const Services = () => {
  const services = [
    {
      id: 1,
      icon: <Code />,
      title: "Web Development",
      description: "Custom websites and web applications built with modern technologies like React, TypeScript, and Node.js.",
      features: ["Responsive Design", "Performance Optimization", "SEO-Friendly", "Cross-Browser Compatible"],
      price: "TZS 500,000 - 5M+"
    },
    {
      id: 2,
      icon: <Smartphone />,
      title: "Frontend Design",
      description: "Modern, responsive frontend interfaces that deliver exceptional user experiences across all platforms.",
      features: ["Responsive Design", "Interactive UI", "Performance Optimization", "Cross-Browser Compatibility"],
      price: "TZS 300,000 - 2M+"
    },
    {
      id: 3,
      icon: <ShoppingCart />,
      title: "E-Commerce Solutions",
      description: "Complete online stores with payment processing, inventory management, and conversion optimization.",
      features: ["Payment Integration", "Inventory Management", "Order Tracking", "Analytics Dashboard"],
      price: "TZS 1,000,000 - 5M+"
    },
    {
      id: 4,
      icon: <Palette />,
      title: "UI/UX Design",
      description: "User-centered design that combines aesthetics with functionality to create engaging digital experiences.",
      features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
      price: "TZS 200,000 - 1M+"
    },
    {
      id: 5,
      icon: <Palette />,
      title: "Graphic Design Services",
      description: "Creative visual solutions including branding, marketing materials, and digital graphics that communicate your message effectively.",
      features: ["Logo Design", "Brand Identity", "Marketing Materials", "Digital Graphics"],
      price: "TZS 50,000 - 200,000+"
    },
    {
      id: 6,
      icon: <BarChart3 />,
      title: "Analytics & Insights",
      description: "Data-driven insights and custom dashboards to track performance and make informed business decisions.",
      features: ["Custom Dashboards", "Performance Tracking", "User Behavior Analysis", "Conversion Optimization"],
      price: "TZS 500,000 - 2M+"
    },
    {
      id: 7,
      icon: <Search />,
      title: "Digital Marketing Services",
      description: "Comprehensive digital marketing strategies to boost your online presence and drive targeted traffic to your business.",
      features: ["SEO Optimization", "Social Media Marketing", "Content Strategy", "PPC Campaigns"],
      price: "TZS 400,000 - 1M+"
    }
  ];

  const processSteps = [
    {
      id: 1,
      step: "01",
      title: "Discovery & Strategy",
      description: "We start by understanding your business goals, target audience, and project requirements through detailed consultation."
    },
    {
      id: 2,
      step: "02", 
      title: "Design & Planning",
      description: "Creating wireframes, mockups, and technical specifications that align with your vision and business objectives."
    },
    {
      id: 3,
      step: "03",
      title: "Development & Testing",
      description: "Building your solution with clean, scalable code while conducting thorough testing to ensure quality and performance."
    },
    {
      id: 4,
      step: "04",
      title: "Launch & Support",
      description: "Deploying your project and providing ongoing support, maintenance, and optimization to ensure continued success."
    }
  ];

  const benefits = [
    {
      id: 1,
      icon: <Zap />,
      title: "Fast Delivery",
      description: "Quick turnaround times without compromising on quality or attention to detail."
    },
    {
      id: 2,
      icon: <Shield />,
      title: "Reliable & Secure",
      description: "Built with security best practices and reliable hosting solutions for peace of mind."
    },
    {
      id: 3,
      icon: <Headphones />,
      title: "Ongoing Support",
      description: "Continuous support and maintenance to keep your digital presence running smoothly."
    }
  ];

  return (
    <div className="min-h-screen bg-background pt-24 pb-20">
      <Helmet>
        <title>Services | ELS Digital</title>
        <meta name="description" content="Explore our web development, digital marketing, and UI/UX design services built to elevate your brand." />
        <meta property="og:title" content="ELS Digital Services" />
        <meta property="og:description" content="Explore our professional web and marketing services that help brands grow online." />
        <meta property="og:image" content="/preview.svg" />
        <meta property="og:url" content="https://elsdigital.com/services" />
      </Helmet>
      {/* Hero Section */}
      <section className="px-6 pb-16">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Our <span className="bg-gradient-yellow bg-clip-text text-transparent">Services</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
            Comprehensive digital solutions designed to elevate your business. From custom web development 
            to strategic digital marketing, we deliver results that matter.
          </p>
          <Button 
            asChild
            className="bg-gradient-yellow text-primary-foreground shadow-yellow hover:shadow-glow"
            size="lg"
          >
            <Link to="/contact">Negotiate</Link>
          </Button>
        </div>
      </section>

      {/* Services Grid */}
      <section className="px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card
                key={service.id}
                className="p-8 bg-gradient-card border-border shadow-card hover:shadow-glow transition-all duration-500 group"
              >
                <div className="text-4xl mb-6 text-primary group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, index) => (
                    <li key={index} className="text-sm text-muted-foreground flex items-center">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto">
                  <div className="text-2xl font-bold text-primary mb-2">{service.price}</div>
                  <Button 
                    asChild
                    className="w-full bg-gradient-yellow text-primary-foreground hover:shadow-glow"
                  >
                    <Link to="/contact">Negotiate</Link>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="px-6 mt-20">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our <span className="bg-gradient-yellow bg-clip-text text-transparent">Process</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A proven methodology that delivers exceptional results every time.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={step.id} className="text-center">
                <div className="w-16 h-16 bg-gradient-yellow rounded-full flex items-center justify-center text-2xl font-bold text-primary-foreground mx-auto mb-4">
                  {index + 1}
                </div>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="px-6 mt-20">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Why Choose <span className="bg-gradient-yellow bg-clip-text text-transparent">Us</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit) => (
              <Card key={benefit.id} className="p-6 bg-gradient-card border-border shadow-card hover:shadow-glow transition-all duration-300">
                <div className="text-3xl mb-4 text-primary">{benefit.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
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
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss how our services can help you achieve your goals and drive growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-gradient-yellow text-primary-foreground shadow-yellow hover:shadow-glow"
              >
                <Link to="/contact">Get Free Consultation</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary/20 hover:bg-primary/10"
              >
                <Link to="/portfolio">View Our Work</Link>
              </Button>
            </div>
          </Card>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Services;
