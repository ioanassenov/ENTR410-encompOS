import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp } from "lucide-react";

interface FreshnessScoreProps {
  score?: number;
}

const FreshnessScore = ({ score = 92 }: FreshnessScoreProps) => {
  const getScoreColor = (score: number) => {
    if (score >= 85) return "text-success";
    if (score >= 70) return "text-warning";
    return "text-danger";
  };

  const getScoreBgColor = (score: number) => {
    if (score >= 85) return "bg-success/10";
    if (score >= 70) return "bg-warning/10";
    return "bg-danger/10";
  };

  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle className="text-2xl flex items-center gap-2">
          <TrendingUp className="w-6 h-6" />
          Freshness Score
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className={`p-8 rounded-xl ${getScoreBgColor(score)} text-center transition-all`}>
          <div className={`text-7xl font-bold ${getScoreColor(score)} mb-4`}>
            {score}%
          </div>
          <p className="text-lg text-muted-foreground">
            of your decisions have up-to-date context
          </p>
        </div>
        
        <div className="mt-6 space-y-3 text-sm">
          <div className="flex items-center justify-between p-3 rounded-lg bg-secondary/50">
            <span className="text-muted-foreground">Critical decisions</span>
            <span className="font-semibold text-foreground">18/20 fresh</span>
          </div>
          <div className="flex items-center justify-between p-3 rounded-lg bg-secondary/50">
            <span className="text-muted-foreground">Linked documents</span>
            <span className="font-semibold text-foreground">45/48 current</span>
          </div>
          <div className="flex items-center justify-between p-3 rounded-lg bg-secondary/50">
            <span className="text-muted-foreground">Avg. update time</span>
            <span className="font-semibold text-foreground">3.2 days</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default FreshnessScore;
