import { Search, Building2, Hospital, Stethoscope, Sparkles, Heart, Smile, Brain, MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { categories, specialties } from "@/data/mockData";
import heroImage from "@/assets/clinica-dental.jpg";

const Home = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const getIcon = (iconName: string) => {
    const icons: Record<string, any> = {
      "building-2": Building2,
      "hospital": Hospital,
      "stethoscope": Stethoscope,
      "sparkles": Sparkles,
      "heart": Heart,
      "smile": Smile,
      "brain": Brain,
    };
    return icons[iconName] || Stethoscope;
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate('/search', { state: { searchQuery } });
    }
  };

  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Hero Section */}
      <div className="relative h-64 overflow-hidden">
        <img 
          src={heroImage} 
          alt="Clínica dental profesional" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/70 via-primary/50 to-background"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-5">
          <h1 className="text-3xl font-bold text-white mb-2 drop-shadow-lg">SaludDirecta</h1>
          <p className="text-white/90 text-sm mb-4 drop-shadow">Tu salud, a un clic de distancia</p>
        </div>
      </div>

      {/* Search Bar */}
      <div className="px-5 -mt-6 mb-6">
        <form onSubmit={handleSearch} className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground z-10" />
          <Input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Buscar médicos, clínicas, especialidades..."
            className="pl-12 h-14 bg-card border-0 shadow-hover rounded-2xl text-base"
          />
        </form>
      </div>

      {/* Categories */}
      <section className="px-5 py-6">
        <h2 className="text-xl font-bold mb-4 text-foreground">Categorías</h2>
        <div className="grid grid-cols-2 gap-4 mb-1">
          {categories.map((category) => {
            const Icon = getIcon(category.icon);
            return (
              <Card
                key={category.value}
                className="p-6 flex flex-col items-center gap-3 cursor-pointer hover:shadow-hover hover:scale-105 transition-all border-2 border-border/50"
                onClick={() => navigate('/search', { state: { category: category.value } })}
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-primary flex items-center justify-center shadow-card">
                  <Icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <span className="text-sm font-semibold text-center text-foreground">{category.name}</span>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Popular Specialties */}
      <section className="px-5 py-6 bg-muted/30">
        <h2 className="text-xl font-bold mb-4 text-foreground">Especialidades populares</h2>
        <div className="grid grid-cols-3 gap-4">
          {specialties.map((specialty) => {
            const Icon = getIcon(specialty.icon);
            return (
              <Card
                key={specialty.name}
                className="p-4 flex flex-col items-center gap-3 cursor-pointer hover:shadow-hover hover:scale-105 transition-all bg-card"
                onClick={() => navigate('/search', { state: { specialty: specialty.name } })}
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-secondary flex items-center justify-center shadow-sm">
                  <Icon className="w-6 h-6 text-secondary-foreground" />
                </div>
                <span className="text-xs font-semibold text-center text-foreground leading-tight">{specialty.name}</span>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Map Button */}
      <div className="fixed bottom-8 right-6 z-50">
        <Button
          size="lg"
          className="rounded-full shadow-hover hover:shadow-lg hover:scale-105 transition-all bg-gradient-primary border-0"
          onClick={() => navigate('/search')}
        >
          <MapPin className="w-5 h-5 mr-2" />
          Ver en mapa
        </Button>
      </div>
    </div>
  );
};

export default Home;
