import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, User } from "lucide-react";

interface Decision {
  id: string;
  title: string;
  owner: string;
  lastUpdated: string;
  status: "Proposed" | "Accepted" | "Deprecated";
}

const decisions: Decision[] = [
  {
    id: "1",
    title: "Migrate to microservices architecture",
    owner: "Sarah Chen",
    lastUpdated: "2 hours ago",
    status: "Accepted"
  },
  {
    id: "2",
    title: "Launch Q2 marketing campaign",
    owner: "Michael Torres",
    lastUpdated: "5 hours ago",
    status: "Proposed"
  },
  {
    id: "3",
    title: "Sunset legacy API v1",
    owner: "Alex Kumar",
    lastUpdated: "1 day ago",
    status: "Accepted"
  },
  {
    id: "4",
    title: "Use React for new dashboard",
    owner: "Jordan Lee",
    lastUpdated: "3 days ago",
    status: "Deprecated"
  },
  {
    id: "5",
    title: "Implement 2-factor authentication",
    owner: "Emma Wilson",
    lastUpdated: "1 week ago",
    status: "Accepted"
  }
];

const statusColors = {
  Proposed: "bg-warning/20 text-warning border-warning/40",
  Accepted: "bg-success/20 text-success border-success/40",
  Deprecated: "bg-muted text-muted-foreground border-muted-foreground/40"
};

const DecisionFeed = () => {
  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle className="text-2xl">Decision Feed</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {decisions.map((decision) => (
          <div
            key={decision.id}
            className="p-4 rounded-lg border border-border hover:shadow-md transition-all bg-card/50"
          >
            <div className="flex items-start justify-between gap-4 mb-2">
              <h3 className="font-semibold text-foreground flex-1">{decision.title}</h3>
              <Badge variant="outline" className={statusColors[decision.status]}>
                {decision.status}
              </Badge>
            </div>
            
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <User className="w-4 h-4" />
                <span>{decision.owner}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>{decision.lastUpdated}</span>
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default DecisionFeed;
