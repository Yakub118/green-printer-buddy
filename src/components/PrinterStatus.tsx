import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Printer, Droplet, FileText, Zap, Leaf } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface PrinterStatusProps {
  inkLevel: number;
  paperLevel: number;
  energyUsage: number;
  ecoMode: boolean;
}

const PrinterStatus = ({ inkLevel, paperLevel, energyUsage, ecoMode }: PrinterStatusProps) => {
  const getStatusColor = (level: number) => {
    if (level < 15) return "text-warning";
    if (level < 40) return "text-accent";
    return "text-success";
  };

  return (
    <Card className="p-6 animate-slide-up">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="bg-primary/10 p-2 rounded-lg">
            <Printer className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h3 className="font-semibold text-foreground">Printer Status</h3>
            <p className="text-xs text-muted-foreground">Real-time monitoring</p>
          </div>
        </div>
        {ecoMode && (
          <Badge variant="outline" className="bg-success/10 text-success border-success/20">
            <Leaf className="h-3 w-3 mr-1" />
            Eco Mode
          </Badge>
        )}
      </div>

      <div className="space-y-6">
        <div>
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <Droplet className={`h-4 w-4 ${getStatusColor(inkLevel)}`} />
              <span className="text-sm font-medium">Ink Level</span>
            </div>
            <span className={`text-sm font-bold ${getStatusColor(inkLevel)}`}>
              {inkLevel}%
            </span>
          </div>
          <Progress value={inkLevel} className="h-2" />
        </div>

        <div>
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <FileText className={`h-4 w-4 ${getStatusColor(paperLevel)}`} />
              <span className="text-sm font-medium">Paper Stock</span>
            </div>
            <span className={`text-sm font-bold ${getStatusColor(paperLevel)}`}>
              {paperLevel}%
            </span>
          </div>
          <Progress value={paperLevel} className="h-2" />
        </div>

        <div>
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <Zap className="h-4 w-4 text-accent" />
              <span className="text-sm font-medium">Energy Usage</span>
            </div>
            <span className="text-sm font-bold text-accent">
              {energyUsage.toFixed(1)} kWh
            </span>
          </div>
          <div className="text-xs text-muted-foreground mt-1">
            {ecoMode ? "Saving 20% energy" : "Normal consumption"}
          </div>
        </div>
      </div>
    </Card>
  );
};

export default PrinterStatus;
