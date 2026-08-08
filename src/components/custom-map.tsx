import { useState, useEffect, useRef } from "react";
import { Map, MapMarker, MarkerContent, MarkerLabel, MarkerPopup, type MapRef } from "@/components/ui/map";
import { RiMedicineBottleFill } from "@remixicon/react";
import { Clock, Star } from "lucide-react";
import { Button } from "./ui/button";

const styles = {
  default: undefined,
  openstreetmap: "https://tiles.openfreemap.org/styles/bright",
  openstreetmap3d: "https://tiles.openfreemap.org/styles/liberty",
};

type StyleKey = keyof typeof styles;

//posso puxar do maps depois
const FARMACIA_COORDS = [ 
    {
    id: 1,
    name: "Farmácia Dois Corações - Unidade 1",
    label: "Farmácia 1",
    category: "Farmácia",
    rating: 4.9,
    reviews: 12453,
    hours: "07:00 AM - 20:30 PM",
    image:
      "/20260417_175856.jpg",
    lng: -35.2927,
    lat: -8.0010,
    mapLink: "https://maps.app.goo.gl/svagNnZY5stUsLL88"
  },
    {
    id: 2,
    name: "Farmácia Dois Corações - Unidade 2",
    label: "Farmácia 2",
    category: "Farmácia",
    rating: 5.0,
    reviews: 12453,
    hours: "07:00 AM - 19:30 PM",
    image:
      "/frenteee.jpg",
    lng: -35.2928,
    lat: -8.0007,
    mapLink: "https://maps.app.goo.gl/RqfM8yJexUW8KeW66"
  },
]

export function CustomMap() {
  const mapRef = useRef<MapRef>(null);
  const [style] = useState<StyleKey>("default");
  const selectedStyle = styles[style];
  const is3D = style === "openstreetmap3d";

  useEffect(() => {
    mapRef.current?.easeTo({ pitch: is3D ? 60 : 0, duration: 500 });
  }, [is3D]);

  

  const handleClick = (link: string) => {
    window.open(link, "_blank");
  }





  return (
    <div id="localizacao" className="relative h-[420px] w-full overflow-hidden rounded-xl border border-border">
        <Map
        ref={mapRef}
        center={[-35.2927553358233, -8.001043194607634]}
        zoom={17}
        styles={
            selectedStyle
            ? { light: selectedStyle, dark: selectedStyle }
            : undefined
        }
        >
        {FARMACIA_COORDS.map((farmacia) => (
            <MapMarker key={farmacia.id} longitude={farmacia.lng} latitude={farmacia.lat}>
            <MarkerContent>
                <div className="size-5 cursor-pointer rounded-full border-2 border-white bg-rose-500 shadow-lg transition-transform hover:scale-110 flex items-center justify-center"><RiMedicineBottleFill className="text-white size-auto" /></div>
                <MarkerLabel position="bottom">{farmacia.label}</MarkerLabel>
            </MarkerContent>
            <MarkerPopup className="w-62 p-0">
                <div className="relative h-32 overflow-hidden rounded-t-md">
                <img
                    src={farmacia.image}
                    alt={farmacia.name}
                    className="h-full w-full object-cover"
                />
                </div>
                <div className="space-y-2 p-3">
                <div>
                    <p className="text-muted-foreground pb-0.5 text-[11px] font-medium tracking-wide uppercase">
                    {farmacia.category}
                    </p>
                    <h3 className="text-foreground leading-tight font-semibold">
                    {farmacia.name}
                    </h3>
                </div>
                <div className="flex items-center gap-3 text-sm">
                    <div className="flex items-center gap-1">
                    <Star className="size-3.5 fill-amber-400 text-amber-400" />
                    <span className="font-medium">{farmacia.rating}</span>
                    <span className="text-muted-foreground">
                    ({farmacia.reviews.toLocaleString()})
                    </span>
                </div>
                </div>
                <div className="text-muted-foreground flex items-center gap-1.5 text-sm">
                    <Clock className="size-3.5" />
                    <span>{farmacia.hours}</span>
                </div>
                <div className="flex gap-2 pt-1">
                    <Button size="sm" className="flex-1" onClick={() => handleClick(farmacia.mapLink)}>
                    Ver no Maps
                    </Button>
                </div>
            </div>
            </MarkerPopup>
        </MapMarker>
        ))}

      </Map>

    </div>
  );
}