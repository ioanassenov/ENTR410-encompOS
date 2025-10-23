import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Mail, Linkedin } from "lucide-react";

const About = () => {
  const team = [
    {
      name: "Sarah Chen",
      role: "CEO & Co-founder",
      initials: "SC",
      bio: "Former VP of Product at a Fortune 500 company. Passionate about decision intelligence and organizational alignment.",
      email: "sarah@encompos.ai",
      linkedin: "#"
    },
    {
      name: "Marcus Rodriguez",
      role: "CTO & Co-founder",
      initials: "MR",
      bio: "Ex-Google engineer with 15 years building AI-powered enterprise solutions. Loves turning complex problems into elegant systems.",
      email: "marcus@encompos.ai",
      linkedin: "#"
    },
    {
      name: "Aisha Patel",
      role: "Head of Product",
      initials: "AP",
      bio: "Previously led product teams at Notion and Asana. Believes great tools should feel invisible while making teams unstoppable.",
      email: "aisha@encompos.ai",
      linkedin: "#"
    },
    {
      name: "David Kim",
      role: "Head of Engineering",
      initials: "DK",
      bio: "Built distributed systems at Scale AI. Obsessed with performance, reliability, and developer experience.",
      email: "david@encompos.ai",
      linkedin: "#"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-24 pb-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              About encompOS
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're building the operating system for organizational decision-making. 
              Our mission is to help teams make better decisions faster by keeping context fresh and aligned.
            </p>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Our Story</h2>
            <div className="prose prose-lg max-w-3xl mx-auto text-muted-foreground">
              <p className="mb-4">
                encompOS was born from a simple frustration: watching brilliant teams make poor decisions 
                because they were working with stale information. We've all been there—a critical document 
                gets updated, but half the team doesn't know, leading to misaligned priorities and wasted effort.
              </p>
              <p>
                We believe decision-making shouldn't be a guessing game. Every team deserves to know when 
                their assumptions are out of date, what changed, and who needs to know about it. That's why 
                we built encompOS—to give teams confidence in their decisions through transparent, 
                always-current context.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Meet the Team</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {team.map((member) => (
                <Card key={member.name} className="overflow-hidden hover:shadow-elegant transition-shadow">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-6">
                      <Avatar className="w-20 h-20 border-2 border-primary/20">
                        <AvatarFallback className="bg-primary/10 text-primary text-xl font-bold">
                          {member.initials}
                        </AvatarFallback>
                      </Avatar>
                      
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-foreground mb-1">{member.name}</h3>
                        <p className="text-sm text-accent font-medium mb-3">{member.role}</p>
                        <p className="text-muted-foreground text-sm mb-4">{member.bio}</p>
                        
                        <div className="flex gap-3">
                          <a 
                            href={`mailto:${member.email}`}
                            className="text-muted-foreground hover:text-accent transition-colors"
                            title={`Email ${member.name}`}
                          >
                            <Mail className="w-5 h-5" />
                          </a>
                          <a 
                            href={member.linkedin}
                            className="text-muted-foreground hover:text-accent transition-colors"
                            title={`${member.name} on LinkedIn`}
                          >
                            <Linkedin className="w-5 h-5" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
