import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Award, BookOpen, Users } from "lucide-react";
import profileImage from "@/assets/profile.jpg";

const About = () => {
  const stats = [
    { icon: Award, label: "Years Experience", value: "5+" },
    { icon: BookOpen, label: "Projects Completed", value: "50+" },
    { icon: Users, label: "Happy Clients", value: "30+" },
  ];

  const skills = [
    { category: "Frontend", items: ["React", "TypeScript", "Tailwind CSS", "Next.js"] },
    { category: "Backend", items: ["Node.js", "Python", "PostgreSQL", "MongoDB"] },
    { category: "Design", items: ["Figma", "Adobe Creative Suite", "UI/UX Design", "Prototyping"] },
    { category: "Tools", items: ["Git", "Docker", "AWS", "Vercel"] },
  ];

  return (
    <div className="min-h-screen bg-background pt-24 pb-20">
      {/* Hero Section */}
      <section className="px-6 pb-16">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                About <span className="bg-gradient-yellow bg-clip-text text-transparent">Me</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                I'm Alex Chen, a passionate full-stack developer and designer based in San Francisco. 
                I specialize in creating beautiful, functional web experiences that solve real-world problems.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                With over 5 years of experience in web development, I've had the privilege of working 
                with startups and established companies to bring their digital visions to life. 
                I believe in the power of clean code, thoughtful design, and collaborative teamwork.
              </p>
              <Button
                className="bg-gradient-yellow text-primary-foreground shadow-yellow hover:shadow-glow"
                size="lg"
              >
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </Button>
            </div>
            <div className="relative">
              <div className="relative z-10">
                <img
                  src={profileImage}
                  alt="Alex Chen"
                  className="w-full max-w-md mx-auto rounded-2xl shadow-card"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-yellow opacity-20 rounded-2xl blur-xl transform translate-x-4 translate-y-4" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-6 pb-16">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <Card 
                  key={index}
                  className="p-8 text-center bg-gradient-card border-border shadow-card hover:shadow-glow transition-all duration-300"
                >
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-yellow rounded-xl flex items-center justify-center shadow-yellow">
                    <IconComponent className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-3xl font-bold text-primary mb-2">{stat.value}</h3>
                  <p className="text-muted-foreground">{stat.label}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="px-6 pb-16">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Expertise</h2>
            <p className="text-xl text-muted-foreground">
              Technologies and tools I use to bring ideas to life
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skillGroup, index) => (
              <Card 
                key={index}
                className="p-6 bg-gradient-card border-border shadow-card hover:shadow-glow transition-all duration-300"
              >
                <h3 className="text-xl font-semibold mb-4 text-primary">{skillGroup.category}</h3>
                <div className="space-y-2">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <div 
                      key={skillIndex}
                      className="px-3 py-2 bg-background/50 rounded-lg text-sm border border-border"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Personal Section */}
      <section className="px-6">
        <div className="container mx-auto">
          <Card className="p-12 bg-gradient-dark border-primary/20 shadow-yellow">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Beyond the Code</h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                When I'm not coding, you can find me exploring the latest design trends, 
                contributing to open-source projects, or hiking the beautiful trails around 
                the Bay Area. I'm passionate about continuous learning and staying at the 
                forefront of web technology.
              </p>
              <p className="text-lg text-muted-foreground">
                I believe that great software is built by great teams, and I'm always excited 
                to collaborate with other passionate developers and designers.
              </p>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default About;