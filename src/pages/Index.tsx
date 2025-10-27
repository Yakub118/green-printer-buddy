import { useState, useEffect } from "react";
import { Droplet, FileText, Leaf, Recycle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import StatCard from "@/components/StatCard";
import GreenScore from "@/components/GreenScore";
import PrinterStatus from "@/components/PrinterStatus";
import EcoModeToggle from "@/components/EcoModeToggle";
import LowInkAlert from "@/components/LowInkAlert";
import RewardsDisplay from "@/components/RewardsDisplay";
import UsageChart from "@/components/UsageChart";
import heroImage from "@/assets/hero-eco-printer.jpg";

interface PrinterData {
  inkLevel: number;
  paperUsed: number;
  energyUsage: number;
}

const Index = () => {
  const { toast } = useToast();
  const [ecoMode, setEcoMode] = useState(false);
  const [greenScore, setGreenScore] = useState(78);
  const [rewardPoints, setRewardPoints] = useState(650);
  const [printerData, setPrinterData] = useState<PrinterData>({
    inkLevel: 64,
    paperUsed: 125,
    energyUsage: 3.5,
  });

  // Simulate IoT data updates every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setPrinterData((prev) => ({
        inkLevel: Math.max(5, prev.inkLevel - Math.random() * 2),
        paperUsed: prev.paperUsed + Math.floor(Math.random() * 3),
        energyUsage: prev.energyUsage + (Math.random() - 0.5) * 0.3,
      }));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleEcoModeToggle = (enabled: boolean) => {
    setEcoMode(enabled);
    toast({
      title: enabled ? "Eco Mode Enabled" : "Eco Mode Disabled",
      description: enabled
        ? "Now saving 30% ink and 20% energy on every print!"
        : "Switched to standard printing mode",
    });
    if (enabled) {
      setGreenScore((prev) => Math.min(100, prev + 5));
      setRewardPoints((prev) => prev + 10);
    }
  };

  const handleRefill = () => {
    setPrinterData((prev) => ({ ...prev, inkLevel: 100 }));
    setRewardPoints((prev) => prev + 50);
    setGreenScore((prev) => Math.min(100, prev + 8));
    toast({
      title: "Great job! 🎉",
      description: "You earned 50 Green Points for refilling your cartridge!",
    });
  };

  const paperLevel = Math.max(0, 100 - Math.floor((printerData.paperUsed / 500) * 100));
  const inkSaved = ecoMode ? Math.floor(printerData.paperUsed * 0.3) : 0;
  const co2Reduced = Math.floor((printerData.paperUsed * 0.05) + (ecoMode ? 2.5 : 0));

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <div className="relative h-64 overflow-hidden">
        <img 
          src={heroImage} 
          alt="Green Printer Dashboard" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-transparent flex items-center">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-2 text-foreground">
              Smart Printing, Greener Future
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Track your environmental impact in real-time and earn rewards for sustainable printing practices
            </p>
          </div>
        </div>
      </div>

      <main className="container mx-auto px-4 py-8">
        {/* Low Ink Alert */}
        {printerData.inkLevel < 15 && (
          <div className="mb-6">
            <LowInkAlert inkLevel={Math.floor(printerData.inkLevel)} onRefill={handleRefill} />
          </div>
        )}

        {/* Eco Impact Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard
            title="Ink Saved"
            value={inkSaved}
            unit="ml"
            icon={Droplet}
            trend="+8% vs last week"
            color="primary"
          />
          <StatCard
            title="Paper Saved"
            value={Math.floor(printerData.paperUsed * 0.15)}
            unit="sheets"
            icon={FileText}
            trend="+12% vs last week"
            color="success"
          />
          <StatCard
            title="CO₂ Reduced"
            value={co2Reduced}
            unit="kg"
            icon={Leaf}
            trend="+15% vs last week"
            color="accent"
          />
          <StatCard
            title="Cartridges Recycled"
            value={3}
            unit="this month"
            icon={Recycle}
            trend="Next refill in 8 days"
            color="warning"
          />
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="lg:col-span-2 space-y-6">
            <GreenScore score={greenScore} />
            <UsageChart />
          </div>
          <div className="space-y-6">
            <PrinterStatus
              inkLevel={Math.floor(printerData.inkLevel)}
              paperLevel={paperLevel}
              energyUsage={printerData.energyUsage}
              ecoMode={ecoMode}
            />
            <EcoModeToggle enabled={ecoMode} onToggle={handleEcoModeToggle} />
            <RewardsDisplay points={rewardPoints} level="Green Warrior" />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
