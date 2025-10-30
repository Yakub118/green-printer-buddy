import { Leaf, MapPin, LayoutDashboard } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/logo.png";
import { Button } from "./ui/button";

const Header = () => {
  const location = useLocation();
  
  return (
    <header className="bg-gradient-eco shadow-eco">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Green Printer" className="w-10 h-10" />
            <div>
              <h1 className="text-3xl font-bold text-white">Green Printer</h1>
              <p className="text-white/90 text-sm">Smart E-Waste Management</p>
            </div>
          </div>
          
          <nav className="flex items-center gap-2">
            <Link to="/">
              <Button 
                variant={location.pathname === "/" ? "secondary" : "ghost"}
                className={location.pathname === "/" ? "" : "text-white hover:bg-white/10"}
              >
                <LayoutDashboard className="w-4 h-4 mr-2" />
                Dashboard
              </Button>
            </Link>
            <Link to="/locator">
              <Button 
                variant={location.pathname === "/locator" ? "secondary" : "ghost"}
                className={location.pathname === "/locator" ? "" : "text-white hover:bg-white/10"}
              >
                <MapPin className="w-4 h-4 mr-2" />
                Recycling Centers
              </Button>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
