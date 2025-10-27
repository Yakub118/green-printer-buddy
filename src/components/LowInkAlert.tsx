import { AlertCircle, Droplet, Gift } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";

interface LowInkAlertProps {
  inkLevel: number;
  onRefill: () => void;
}

const LowInkAlert = ({ inkLevel, onRefill }: LowInkAlertProps) => {
  if (inkLevel >= 15) return null;

  return (
    <Alert className="border-warning bg-warning/5 animate-slide-up">
      <AlertCircle className="h-5 w-5 text-warning" />
      <AlertTitle className="text-warning font-semibold">Low Ink Detected</AlertTitle>
      <AlertDescription>
        <p className="text-sm text-foreground mb-3">
          Your ink level is at {inkLevel}%. Refill or recycle your cartridge to earn Green Points!
        </p>
        <div className="flex items-center gap-2">
          <Button 
            size="sm" 
            onClick={onRefill}
            className="bg-gradient-eco"
          >
            <Droplet className="h-4 w-4 mr-2" />
            Refill Now
          </Button>
          <Button size="sm" variant="outline">
            <Gift className="h-4 w-4 mr-2" />
            +50 Points
          </Button>
        </div>
      </AlertDescription>
    </Alert>
  );
};

export default LowInkAlert;
