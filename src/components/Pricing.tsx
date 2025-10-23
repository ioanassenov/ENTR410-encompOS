import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Slack, MessageSquare, Ticket, Mail, Github, FileText, Calendar } from "lucide-react";

const Pricing = () => {
  const features = [
    "Unlimited decisions tracked",
    "Team collaboration",
    "Freshness monitoring",
    "AI-powered insights",
    "Priority support"
  ];

  const integrations = [
    { name: "Slack", icon: Slack },
    { name: "Teams", icon: MessageSquare },
    { name: "Jira", icon: Ticket },
    { name: "Google", icon: Calendar },
    { name: "Outlook", icon: Mail },
    { name: "GitHub", icon: Github },
    { name: "Notion", icon: FileText }
  ];

  return (
    <section id="pricing" className="py-24 px-6 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-xl text-muted-foreground">
            One plan. All features. Scale with your team.
          </p>
        </div>
        
        <div className="max-w-md mx-auto">
          <Card className="border-2 border-accent/20 shadow-xl hover:shadow-2xl transition-all">
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-3xl font-bold mb-2">encompOS' DecisionOS</CardTitle>
              <CardDescription className="text-lg">A united source of truth for your teams</CardDescription>
              <div className="mt-6">
                <span className="text-5xl font-bold text-accent">$15</span>
                <span className="text-muted-foreground text-lg">/user/month</span>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-success flex-shrink-0" />
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
              
              <div className="pt-2">
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-success flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <span className="text-foreground block mb-3">Integrations with:</span>
                    <div className="flex flex-wrap gap-3">
                      {integrations.map((integration) => (
                        <div key={integration.name} className="flex items-center gap-2 text-muted-foreground" title={integration.name}>
                          <integration.icon className="w-5 h-5" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
            
            <CardFooter className="pt-8">
              <Button asChild variant="hero" size="lg" className="w-full">
                <a href="mailto:hello@compros.ai">Start Free Trial</a>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
