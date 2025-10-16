import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Send, Github, Linkedin, Twitter, Instagram } from "lucide-react";
import Footer from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple form validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Please fill in all fields",
        description: "All fields are required to send your message.",
        variant: "destructive",
      });
      return;
    }

    try {
      // EmailJS configuration
      const serviceId = 'service_ztm2u4p';
      const templateId = 'template_5orqjmf';
      const publicKey = 'UMZDYizejvTcEPU7A';

      // Template parameters for EmailJS
      const templateParams = {
        name: formData.name,        // Changed from 'from_name' to match EmailJS template
        email: formData.email,      // Changed from 'from_email' to match EmailJS template
        message: formData.message,  // This matches the EmailJS template
        title: formData.subject || 'Contact Form Submission', // Added title parameter for EmailJS template
      };

      // Send email using EmailJS
      const response = await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      );

      if (response.status === 200) {
        toast({
          title: "Message sent successfully!",
          description: "Thank you for your message. I'll get back to you soon.",
        });

        // Reset form
        setFormData({ name: "", email: "", message: "" });
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      toast({
        title: "Failed to send message",
        description: "There was an error sending your message. Please try again or contact me directly.",
        variant: "destructive",
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "Info@elsdigital.com",
      href: "mailto:hello@alexchen.dev",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+255 (620)-535-592",
      href: "tel:+255620535592",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Tanzania, Dar es salaam",
      href: "#",
    },
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com/Ezekiel98Tz", label: "GitHub", handle: "@elsdigital" },
    { icon: Linkedin, href: "https://linkedin.com/in/ezekiel-sued-1a9577245", label: "LinkedIn", handle: "Ezekiel Sued" },
    { icon: Instagram, href: "https://www.instagram.com/_elsdigital", label: "Instagram", handle: "@_elsdigital" },
  ];

  return (
    <div className="min-h-screen bg-background pt-24 pb-20">
      {/* Hero Section */}
      <section className="px-6 pb-16">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Let's <span className="bg-gradient-yellow bg-clip-text text-transparent">Connect</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Have a project in mind or want to discuss opportunities? 
            I'd love to hear from you. Let's build something amazing together.
            I'd love to hear from you. Let's build something amazing together.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="px-6">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="p-8 bg-gradient-card border-border shadow-card">
              <h2 className="text-2xl font-bold mb-6">Send me a message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Your Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className="bg-background/50 border-border"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className="bg-background/50 border-border"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or idea..."
                    rows={6}
                    className="bg-background/50 border-border resize-none"
                  />
                </div>
                
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-yellow text-primary-foreground shadow-yellow hover:shadow-glow"
                >
                  <Send className="mr-2 h-5 w-5" />
                  Send Message
                </Button>
              </form>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Contact Details */}
              <Card className="p-8 bg-gradient-card border-border shadow-card">
                <h2 className="text-2xl font-bold mb-6">Get in touch</h2>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => {
                    const IconComponent = info.icon;
                    return (
                      <div key={index} className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-yellow rounded-lg flex items-center justify-center shadow-yellow">
                          <IconComponent className="h-6 w-6 text-primary-foreground" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">{info.label}</p>
                          <a 
                            href={info.href}
                            className="text-lg font-medium hover:text-primary transition-colors"
                          >
                            {info.value}
                          </a>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </Card>

              {/* Social Links */}
              <Card className="p-8 bg-gradient-card border-border shadow-card">
                <h3 className="text-xl font-bold mb-6">Follow me</h3>
                <div className="space-y-4">
                  {socialLinks.map((social, index) => {
                    const IconComponent = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.href}
                        className="flex items-center space-x-4 p-3 rounded-lg hover:bg-primary/5 transition-colors group"
                      >
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-gradient-yellow group-hover:shadow-yellow transition-all">
                          <IconComponent className="h-5 w-5 text-primary group-hover:text-primary-foreground" />
                        </div>
                        <div>
                          <p className="font-medium">{social.label}</p>
                          <p className="text-sm text-muted-foreground">{social.handle}</p>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </Card>

              {/* Availability */}
              <Card className="p-8 bg-gradient-dark border-primary/20 shadow-yellow">
                <h3 className="text-xl font-bold mb-4">Currently Available</h3>
                <p className="text-muted-foreground mb-4">
                  I'm currently accepting new projects and collaborations. 
                  Response time is typically within 24 hours.
                </p>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-sm text-green-400 font-medium">Available for work</span>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;