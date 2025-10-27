import { Card } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Leaf, Info } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface EcoModeToggleProps {
  enabled: boolean;
  onToggle: (enabled: boolean) => void;
}

const EcoModeToggle = ({ enabled, onToggle }: EcoModeToggleProps) => {
  return (
    <Card className={`p-6 transition-all duration-300 ${enabled ? 'bg-gradient-eco-soft border-success/20' : ''}`}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className={`p-3 rounded-xl transition-all duration-300 ${
            enabled ? 'bg-success text-success-foreground' : 'bg-muted text-muted-foreground'
          }`}>
            <Leaf className="h-6 w-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-semibold text-foreground">Eco Mode</h3>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <Info className="h-4 w-4 text-muted-foreground" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Eco Mode saves 30% ink and 20% energy</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <p className="text-sm text-muted-foreground">
              {enabled ? "Reducing environmental impact" : "Standard printing mode"}
            </p>
          </div>
        </div>
        <Switch checked={enabled} onCheckedChange={onToggle} />
      </div>
      {enabled && (
        <div className="mt-4 pt-4 border-t border-border">
          <div className="flex items-center gap-4 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-success animate-pulse-eco" />
              <span className="text-muted-foreground">-30% ink</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-success animate-pulse-eco" />
              <span className="text-muted-foreground">-20% energy</span>
            </div>
          </div>
        </div>
      )}
    </Card>
  );
};

export default EcoModeToggle;
