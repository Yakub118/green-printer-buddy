import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import Header from '@/components/Header';
import { MapPin } from 'lucide-react';

// Fix for default marker icon issue in React Leaflet
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

// @ts-ignore
delete Icon.Default.prototype._getIconUrl;
Icon.Default.mergeOptions({
  iconUrl: markerIcon,
  iconRetinaUrl: markerIcon2x,
  shadowUrl: markerShadow,
});

const recyclingCenters = [
  {
    id: 1,
    name: "EcoRecycle Hub",
    address: "123 Green Street, Downtown",
    phone: "+1-234-567-8901",
    coordinates: [37.7749, -122.4194] as [number, number],
  },
  {
    id: 2,
    name: "Planet Cartridge Center",
    address: "456 Eco Avenue, Midtown",
    phone: "+1-234-567-8902",
    coordinates: [37.7849, -122.4094] as [number, number],
  },
  {
    id: 3,
    name: "Green Waste Solutions",
    address: "789 Sustainability Road, Uptown",
    phone: "+1-234-567-8903",
    coordinates: [37.7649, -122.4294] as [number, number],
  },
  {
    id: 4,
    name: "PrintCare Recycling",
    address: "321 Printer Lane, Westside",
    phone: "+1-234-567-8904",
    coordinates: [37.7549, -122.4394] as [number, number],
  },
];

const EWasteLocator = () => {
  const centerPosition: [number, number] = [37.7749, -122.4194];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-eco-light/20 to-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8 animate-fade-in">
          <div className="flex items-center gap-3 mb-2">
            <MapPin className="w-8 h-8 text-eco-primary" />
            <h1 className="text-4xl font-bold text-foreground">E-Waste Recycling Centers</h1>
          </div>
          <p className="text-muted-foreground">
            Find certified cartridge recycling centers near you and earn Green Points for every drop-off!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Map Section */}
          <div className="lg:col-span-2 rounded-xl overflow-hidden shadow-eco border border-eco-primary/20 animate-slide-up">
            <MapContainer
              // @ts-ignore - React Leaflet props are correct
              center={centerPosition}
              zoom={13}
              style={{ height: '600px', width: '100%' }}
              className="z-0"
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                // @ts-ignore - React Leaflet props are correct
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              {recyclingCenters.map((center) => (
                <Marker key={center.id} position={center.coordinates}>
                  <Popup>
                    <div className="p-2">
                      <h3 className="font-bold text-eco-primary mb-1">{center.name}</h3>
                      <p className="text-sm text-muted-foreground mb-1">{center.address}</p>
                      <p className="text-sm text-muted-foreground">{center.phone}</p>
                    </div>
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          </div>

          {/* Centers List */}
          <div className="space-y-4 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <h2 className="text-2xl font-bold text-foreground mb-4">Nearby Centers</h2>
            {recyclingCenters.map((center) => (
              <div
                key={center.id}
                className="bg-card border border-eco-primary/20 rounded-lg p-4 hover:shadow-eco transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-eco-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-eco-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-foreground mb-1">{center.name}</h3>
                    <p className="text-sm text-muted-foreground mb-1">{center.address}</p>
                    <p className="text-sm text-eco-primary font-medium">{center.phone}</p>
                  </div>
                </div>
              </div>
            ))}
            
            <div className="bg-gradient-eco rounded-lg p-4 text-white mt-6">
              <h3 className="font-bold mb-2">🌱 Earn Green Points!</h3>
              <p className="text-sm opacity-90">
                Recycle your cartridges at any certified center and earn 50 Green Points per cartridge!
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default EWasteLocator;
