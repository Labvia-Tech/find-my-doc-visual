import { Search, Building2, Hospital, Stethoscope, Sparkles, Heart, Smile, Brain, MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { categories, specialties } from "@/data/mockData";

const Home = () => {
  const navigate = useNavigate();

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

  return (
    <div className="min-h-screen bg-background pt-11 pb-24">
      {/* Header */}
      <header className="bg-gradient-primary text-primary-foreground px-5 py-6 rounded-b-3xl shadow-card mb-1">
        <h1 className="text-2xl font-bold mb-4">SaludDirecta</h1>
        
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <Input
            placeholder="Buscar médicos, clínicas..."
            className="pl-10 bg-white/95 border-0 shadow-sm"
            onClick={() => navigate('/search')}
          />
        </div>
      </header>

      {/* Categories */}
      <section className="px-5 py-5">
        <h2 className="text-lg font-semibold mb-3">Categorías</h2>
        <div className="grid grid-cols-2 gap-3 mb-1">
          {categories.map((category) => {
            const Icon = getIcon(category.icon);
            return (
              <Card
                key={category.value}
                className="p-5 flex flex-col items-center gap-3 cursor-pointer hover:shadow-hover transition-shadow"
                onClick={() => navigate('/search', { state: { category: category.value } })}
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <span className="text-sm font-medium text-center">{category.name}</span>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Popular Specialties */}
      <section className="px-5 py-5">
        <h2 className="text-lg font-semibold mb-3">Especialidades populares</h2>
        <div className="grid grid-cols-3 gap-3">
          {specialties.map((specialty) => {
            const Icon = getIcon(specialty.icon);
            return (
              <Card
                key={specialty.name}
                className="p-4 flex flex-col items-center gap-2 cursor-pointer hover:shadow-hover transition-shadow"
                onClick={() => navigate('/search', { state: { specialty: specialty.name } })}
              >
                <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-secondary" />
                </div>
                <span className="text-xs font-medium text-center">{specialty.name}</span>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Map Button */}
      <div className="fixed bottom-6 right-6">
        <Button
          size="lg"
          className="rounded-full shadow-lg hover:shadow-xl transition-shadow"
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
