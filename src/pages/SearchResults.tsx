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
  const searchQuery = location.state?.searchQuery || "";
  const category = location.state?.category;
  const specialty = location.state?.specialty;

  const filteredDoctors = useMemo(() => {
    let results = doctors;

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      results = results.filter(doctor => 
        doctor.name.toLowerCase().includes(query) ||
        doctor.specialty.toLowerCase().includes(query) ||
        doctor.category.toLowerCase().includes(query)
      );
    }

    // Filter by category
    if (category) {
      results = results.filter(doctor => doctor.category === category);
    }

    // Filter by specialty
    if (specialty) {
      results = results.filter(doctor => doctor.specialty === specialty);
    }

    // Apply additional filters
    switch (activeFilter) {
      case "nearby":
        return [...results].sort(() => Math.random() - 0.5).slice(0, 4);
      case "rated":
        return [...results].sort((a, b) => b.rating - a.rating);
      case "today":
        return results.filter((_, index) => index % 2 === 0);
      default:
        return results;
    }
  }, [activeFilter, searchQuery, category, specialty]);

  return (
    <div className="min-h-screen bg-background pb-6">
      {/* Header */}
      <header className="bg-gradient-primary text-primary-foreground px-5 py-4 flex items-center gap-3 shadow-card">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => navigate('/')}
          className="text-primary-foreground hover:bg-white/20"
        >
          <ArrowLeft className="w-5 h-5" />
        </Button>
        <div className="flex-1">
          <h1 className="text-lg font-bold">Resultados</h1>
          {searchQuery && <p className="text-xs text-primary-foreground/80">Búsqueda: "{searchQuery}"</p>}
        </div>
        <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-white/20">
          <SlidersHorizontal className="w-5 h-5" />
        </Button>
      </header>

      {/* Filters */}
      <div className="px-5 py-4 flex gap-2 overflow-x-auto bg-muted/20">
        <Badge 
          variant={activeFilter === "all" ? "default" : "outline"}
          className="whitespace-nowrap px-5 py-2 cursor-pointer hover:scale-105 transition-transform"
          onClick={() => setActiveFilter("all")}
        >
          Todos
        </Badge>
        <Badge 
          variant={activeFilter === "nearby" ? "default" : "outline"}
          className="whitespace-nowrap px-5 py-2 cursor-pointer hover:scale-105 transition-transform"
          onClick={() => setActiveFilter("nearby")}
        >
          Cerca de mí
        </Badge>
        <Badge 
          variant={activeFilter === "rated" ? "default" : "outline"}
          className="whitespace-nowrap px-5 py-2 cursor-pointer hover:scale-105 transition-transform"
          onClick={() => setActiveFilter("rated")}
        >
          Mejor valorados
        </Badge>
        <Badge 
          variant={activeFilter === "today" ? "default" : "outline"}
          className="whitespace-nowrap px-5 py-2 cursor-pointer hover:scale-105 transition-transform"
          onClick={() => setActiveFilter("today")}
        >
          Disponibles hoy
        </Badge>
      </div>

      {/* Results List */}
      <div className="px-5 pb-6 space-y-4 mt-4">
        {filteredDoctors.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No se encontraron resultados</p>
            <Button 
              variant="link" 
              onClick={() => navigate('/')}
              className="mt-2"
            >
              Volver al inicio
            </Button>
          </div>
        ) : (
          filteredDoctors.map((doctor) => (
            <Card
              key={doctor.id}
              className="p-5 cursor-pointer hover:shadow-hover hover:scale-[1.02] transition-all active:scale-[0.98] border-2"
              onClick={() => navigate(`/doctor/${doctor.id}`)}
            >
              <div className="flex gap-4">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-24 h-24 rounded-xl object-cover shadow-sm"
                />
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-base truncate">{doctor.name}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{doctor.specialty}</p>
                  
                  <div className="flex items-center gap-2 mb-1">
                    <div className="flex items-center gap-1 bg-yellow-50 dark:bg-yellow-950 px-2 py-0.5 rounded-md">
                      <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-semibold">{doctor.rating}</span>
                    </div>
                    <span className="text-xs text-muted-foreground">
                      ({doctor.reviews} reseñas)
                    </span>
                  </div>

                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>2.5 km</span>
                  </div>
                </div>

                <Button size="sm" className="self-center">
                  Ver
                </Button>
              </div>
            </Card>
          ))
        )}
      </div>
    </div>
  );
};

export default SearchResults;
