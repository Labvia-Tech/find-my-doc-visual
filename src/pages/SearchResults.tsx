import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ArrowLeft, Star, MapPin, SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { doctors, Doctor } from "@/data/mockData";

const SearchResults = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [filteredDoctors] = useState<Doctor[]>(doctors);

  return (
    <div className="min-h-screen bg-background pt-11">
      {/* Header */}
      <header className="bg-card border-b px-6 py-4 flex items-center gap-3">
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
      <div className="px-6 py-4 flex gap-2 overflow-x-auto">
        <Badge variant="secondary" className="whitespace-nowrap">
          Todos
        </Badge>
        <Badge variant="outline" className="whitespace-nowrap">
          Cerca de mí
        </Badge>
        <Badge variant="outline" className="whitespace-nowrap">
          Mejor valorados
        </Badge>
        <Badge variant="outline" className="whitespace-nowrap">
          Disponibles hoy
        </Badge>
      </div>

      {/* Results List */}
      <div className="px-6 pb-6 space-y-3">
        {filteredDoctors.map((doctor) => (
          <Card
            key={doctor.id}
            className="p-4 cursor-pointer hover:shadow-hover transition-all"
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
