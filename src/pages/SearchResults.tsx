import { useState, useMemo } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ArrowLeft, Star, MapPin, SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { doctors, Doctor } from "@/data/mockData";

type FilterType = "all" | "nearby" | "rated" | "today";

const SearchResults = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeFilter, setActiveFilter] = useState<FilterType>("all");

  const filteredDoctors = useMemo(() => {
    switch (activeFilter) {
      case "nearby":
        return [...doctors].sort(() => Math.random() - 0.5).slice(0, 4);
      case "rated":
        return [...doctors].sort((a, b) => b.rating - a.rating);
      case "today":
        return doctors.filter((_, index) => index % 2 === 0);
      default:
        return doctors;
    }
  }, [activeFilter]);

  return (
    <div className="min-h-screen bg-background pt-11 pb-6">
      {/* Header */}
      <header className="bg-card border-b px-5 py-4 flex items-center gap-3">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => navigate('/')}
        >
          <ArrowLeft className="w-5 h-5" />
        </Button>
        <h1 className="text-lg font-semibold flex-1">Resultados</h1>
        <Button variant="ghost" size="icon">
          <SlidersHorizontal className="w-5 h-5" />
        </Button>
      </header>

      {/* Filters */}
      <div className="px-5 py-3 flex gap-2 overflow-x-auto">
        <Badge 
          variant={activeFilter === "all" ? "secondary" : "outline"}
          className="whitespace-nowrap px-4 py-1.5 cursor-pointer"
          onClick={() => setActiveFilter("all")}
        >
          Todos
        </Badge>
        <Badge 
          variant={activeFilter === "nearby" ? "secondary" : "outline"}
          className="whitespace-nowrap px-4 py-1.5 cursor-pointer"
          onClick={() => setActiveFilter("nearby")}
        >
          Cerca de mí
        </Badge>
        <Badge 
          variant={activeFilter === "rated" ? "secondary" : "outline"}
          className="whitespace-nowrap px-4 py-1.5 cursor-pointer"
          onClick={() => setActiveFilter("rated")}
        >
          Mejor valorados
        </Badge>
        <Badge 
          variant={activeFilter === "today" ? "secondary" : "outline"}
          className="whitespace-nowrap px-4 py-1.5 cursor-pointer"
          onClick={() => setActiveFilter("today")}
        >
          Disponibles hoy
        </Badge>
      </div>

      {/* Results List */}
      <div className="px-5 pb-6 space-y-3 mt-2">
        {filteredDoctors.map((doctor) => (
          <Card
            key={doctor.id}
            className="p-4 cursor-pointer hover:shadow-hover transition-all active:scale-[0.98]"
            onClick={() => navigate(`/doctor/${doctor.id}`)}
          >
            <div className="flex gap-3">
              <img
                src={doctor.image}
                alt={doctor.name}
                className="w-20 h-20 rounded-lg object-cover"
              />
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold truncate">{doctor.name}</h3>
                <p className="text-sm text-muted-foreground">{doctor.specialty}</p>
                
                <div className="flex items-center gap-2 mt-2">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">{doctor.rating}</span>
                  </div>
                  <span className="text-xs text-muted-foreground">
                    ({doctor.reviews} reseñas)
                  </span>
                </div>

                <div className="flex items-center gap-1 mt-1 text-xs text-muted-foreground">
                  <MapPin className="w-3 h-3" />
                  <span>2.5 km</span>
                </div>
              </div>

              <Button size="sm" variant="outline">
                Ver perfil
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
