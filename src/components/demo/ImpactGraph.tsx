import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Network } from "lucide-react";

interface TeamImpact {
  team: string;
  count: number;
  color: string;
}

const teamImpacts: TeamImpact[] = [
  { team: "Engineering", count: 12, color: "bg-accent" },
  { team: "Product", count: 8, color: "bg-primary" },
  { team: "Sales", count: 6, color: "bg-success" },
  { team: "Customer Success", count: 4, color: "bg-warning" }
];

const ImpactGraph = () => {
  const maxCount = Math.max(...teamImpacts.map(t => t.count));

  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle className="text-2xl flex items-center gap-2">
          <Network className="w-6 h-6" />
          Impact Graph
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <p className="text-sm text-muted-foreground mb-6">
            Teams affected by recent decisions
          </p>
          
          {teamImpacts.map((impact) => (
            <div key={impact.team} className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="font-medium text-foreground">{impact.team}</span>
                <span className="text-muted-foreground">{impact.count} decisions</span>
              </div>
              
              <div className="w-full bg-secondary rounded-full h-3 overflow-hidden">
                <div
                  className={`${impact.color} h-full rounded-full transition-all duration-500 ease-out`}
                  style={{ width: `${(impact.count / maxCount) * 100}%` }}
                />
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 p-4 rounded-lg bg-gradient-card border border-border">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-foreground">Cross-team dependencies</span>
            <span className="text-2xl font-bold text-accent">24</span>
          </div>
          <p className="text-xs text-muted-foreground">
            Active connections requiring coordination
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default ImpactGraph;
