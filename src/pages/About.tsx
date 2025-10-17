import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Award, BookOpen, Users } from "lucide-react";
import { Helmet } from "react-helmet-async";
import profileImage from "@/assets/eze.jpeg";
import Footer from "@/components/Footer";

const About = () => {
  const stats = [
    { icon: Award, label: "Years in Digital", value: "3+" },
    { icon: BookOpen, label: "Projects Delivered", value: "20+" },
    { icon: Users, label: "Clients Served", value: "10+" },
  ];

  const skills = [
    { category: "Frontend", items: ["React", "TypeScript", "Next.js", "Tailwind CSS"] },
    { category: "Backend", items: ["Node.js", "Python", "PostgreSQL", "PHP"] },
    { category: "Design", items: ["Figma", "UI/UX", "Brand Systems", "Creative Direction"] },
    { category: "Tools", items: ["Git", "Docker", "AWS", "Vercel"] },
  ];

  return (
    <div className="min-h-screen bg-background pt-24 pb-20">
      <Helmet>
        <title>About | ELS Digital</title>
        <meta name="description" content="Learn about ELS Digital, a web development and creative studio led by Ezekiel Sued, helping brands create effective digital experiences." />
        <meta property="og:title" content="About ELS Digital" />
        <meta property="og:description" content="Meet the team behind ELS Digital and discover our mission to help brands grow through strategic web development." />
        <meta property="og:image" content="/preview.svg" />
        <meta property="og:url" content="https://elsdigital.com/about" />
      </Helmet>
      {/* Intro Section */}
      <section className="px-6 pb-16">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Section */}
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                About <span className="bg-gradient-yellow bg-clip-text text-transparent">Els Digital</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Els Digital is a web development and creative studio led by{" "}
                <span className="font-semibold text-primary">Ezekiel Sued</span> — a
                developer and digital strategist helping brands turn complex ideas into
                simple, effective digital experiences.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                We combine technical precision with strategic design to build web platforms
                that convert, communicate, and scale. From HR and law firms to tech startups,
                our focus remains the same — creating work that’s purposeful, aesthetic,
                and measurable.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Whether it’s a landing page that drives sales or a full digital platform,
                we believe every interaction should build trust and move your business
                forward.
              </p>
            </div>

            {/* Image Section */}
            <div className="relative">
              <div className="relative z-10">
                <img
                  src={profileImage}
                  alt="Ezekiel Sued"
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Capabilities</h2>
            <p className="text-xl text-muted-foreground">
              The tools and disciplines that drive every project
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

      {/* Philosophy Section */}
      <section className="px-6">
        <div className="container mx-auto">
          <Card className="p-12 bg-gradient-dark border-primary/20 shadow-yellow">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Philosophy</h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Technology is only as good as the story it tells. We design experiences that
                feel human, communicate clearly, and inspire action.
              </p>
              <p className="text-lg text-muted-foreground">
                Every project begins with strategy and ends with measurable results.
                Because for us, good design is not just visual — it’s functional, scalable,
                and meaningful.
              </p>
            </div>
          </Card>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default About;
