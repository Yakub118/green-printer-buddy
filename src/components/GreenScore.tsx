import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Leaf, TrendingUp } from "lucide-react";

interface GreenScoreProps {
  score: number;
}

const GreenScore = ({ score }: GreenScoreProps) => {
  const getScoreLabel = (score: number) => {
    if (score >= 90) return { label: "Planet Protector", color: "text-success" };
    if (score >= 70) return { label: "Green Warrior", color: "text-primary" };
    if (score >= 50) return { label: "Eco Enthusiast", color: "text-accent" };
    return { label: "Eco Beginner", color: "text-warning" };
  };

  const { label, color } = getScoreLabel(score);

  return (
    <Card className="p-8 bg-gradient-eco-soft relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-eco-radial opacity-50" />
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-1">Green Score</h3>
            <p className="text-sm text-muted-foreground">Your eco-impact rating</p>
          </div>
          <div className="bg-gradient-eco p-3 rounded-full animate-pulse-eco">
            <Leaf className="h-8 w-8 text-primary-foreground" />
          </div>
        </div>
        
        <div className="flex items-baseline gap-3 mb-4">
          <span className="text-6xl font-bold bg-gradient-eco bg-clip-text text-transparent">
            {score}
          </span>
          <span className="text-3xl text-muted-foreground">/100</span>
        </div>

        <Progress value={score} className="h-3 mb-4" />

        <div className="flex items-center justify-between">
          <span className={`text-lg font-semibold ${color}`}>{label}</span>
          <div className="flex items-center gap-1 text-success">
            <TrendingUp className="h-4 w-4" />
            <span className="text-sm font-medium">+12 this week</span>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default GreenScore;
