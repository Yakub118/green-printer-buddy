import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Star, Award, Crown } from "lucide-react";

interface RewardsDisplayProps {
  points: number;
  level: string;
}

const RewardsDisplay = ({ points, level }: RewardsDisplayProps) => {
  const badges = [
    { name: "Eco Beginner", icon: Star, unlocked: points >= 0 },
    { name: "Green Warrior", icon: Award, unlocked: points >= 500 },
    { name: "Planet Protector", icon: Crown, unlocked: points >= 1000 },
  ];

  const nextMilestone = points < 500 ? 500 : points < 1000 ? 1000 : 2000;
  const progress = ((points % 500) / 500) * 100;

  return (
    <Card className="p-6 animate-slide-up">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="bg-accent/10 p-2 rounded-lg">
            <Trophy className="h-5 w-5 text-accent" />
          </div>
          <div>
            <h3 className="font-semibold text-foreground">Eco Rewards</h3>
            <p className="text-xs text-muted-foreground">Your achievements</p>
          </div>
        </div>
        <div className="text-right">
          <div className="text-2xl font-bold text-accent">{points}</div>
          <div className="text-xs text-muted-foreground">Green Points</div>
        </div>
      </div>

      <div className="space-y-3 mb-4">
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground">Next milestone</span>
          <span className="font-medium">{nextMilestone} points</span>
        </div>
        <div className="w-full bg-muted rounded-full h-2">
          <div 
            className="bg-gradient-eco h-2 rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div className="space-y-2">
        <h4 className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Badges</h4>
        <div className="grid grid-cols-3 gap-2">
          {badges.map((badge) => {
            const Icon = badge.icon;
            return (
              <div
                key={badge.name}
                className={`p-3 rounded-lg text-center transition-all ${
                  badge.unlocked
                    ? "bg-gradient-eco shadow-eco"
                    : "bg-muted/50 opacity-50"
                }`}
              >
                <Icon className={`h-6 w-6 mx-auto mb-1 ${
                  badge.unlocked ? "text-primary-foreground" : "text-muted-foreground"
                }`} />
                <span className={`text-xs font-medium ${
                  badge.unlocked ? "text-primary-foreground" : "text-muted-foreground"
                }`}>
                  {badge.name.split(" ")[0]}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </Card>
  );
};

export default RewardsDisplay;
