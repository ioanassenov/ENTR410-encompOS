import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle, Bell, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface Alert {
  id: string;
  type: "warning" | "info" | "update";
  title: string;
  description: string;
  time: string;
}

const initialAlerts: Alert[] = [
  {
    id: "1",
    type: "update",
    title: "Roadmap v3 updated",
    description: "Sales playbook references outdated Q1 goals",
    time: "10 min ago"
  },
  {
    id: "2",
    type: "warning",
    title: "Stale assumption detected",
    description: "Pricing strategy doc hasn't been reviewed in 60 days",
    time: "2 hours ago"
  },
  {
    id: "3",
    type: "info",
    title: "New dependency created",
    description: "Feature launch now depends on API v2 migration",
    time: "5 hours ago"
  }
];

const AlertsPanel = () => {
  const [alerts, setAlerts] = useState(initialAlerts);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleSimulateUpdate = () => {
    setIsAnimating(true);
    
    // Add a new alert at the top
    const newAlert: Alert = {
      id: Date.now().toString(),
      type: "update",
      title: "Dashboard refreshed",
      description: "All metrics have been recalculated with latest data",
      time: "Just now"
    };
    
    setAlerts([newAlert, ...alerts]);
    
    setTimeout(() => setIsAnimating(false), 500);
  };

  const getAlertIcon = (type: Alert["type"]) => {
    switch (type) {
      case "warning":
        return <AlertTriangle className="w-5 h-5 text-warning" />;
      case "info":
        return <Info className="w-5 h-5 text-primary" />;
      case "update":
        return <Bell className="w-5 h-5 text-accent" />;
    }
  };

  return (
    <Card className="shadow-lg">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
        <CardTitle className="text-2xl">Alerts</CardTitle>
        <Button 
          variant="hero" 
          size="sm"
          onClick={handleSimulateUpdate}
          className={isAnimating ? "animate-pulse" : ""}
        >
          Simulate Update
        </Button>
      </CardHeader>
      <CardContent className="space-y-3">
        {alerts.map((alert, index) => (
          <div
            key={alert.id}
            className={`p-4 rounded-lg border border-border hover:shadow-md transition-all bg-card/50 ${
              index === 0 && isAnimating ? "animate-[scale-in_0.3s_ease-out]" : ""
            }`}
          >
            <div className="flex items-start gap-3">
              {getAlertIcon(alert.type)}
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2 mb-1">
                  <h4 className="font-semibold text-foreground">{alert.title}</h4>
                  <span className="text-xs text-muted-foreground whitespace-nowrap">{alert.time}</span>
                </div>
                <p className="text-sm text-muted-foreground">{alert.description}</p>
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default AlertsPanel;
