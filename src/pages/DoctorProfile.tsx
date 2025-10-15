import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, Star, MapPin, Clock, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { doctors } from "@/data/mockData";

const DoctorProfile = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const doctor = doctors.find(d => d.id === Number(id));

  if (!doctor) {
    return <div>Doctor no encontrado</div>;
  }

  const availableTimes = [
    "09:00", "10:00", "11:00", "14:00", "15:00", "16:00"
  ];

  const reviews = [
    {
      id: 1,
      name: "Laura P.",
      rating: 5,
      comment: "Excelente atención, muy profesional y empática.",
      date: "Hace 2 días"
    },
    {
      id: 2,
      name: "Miguel R.",
      rating: 5,
      comment: "Muy recomendable, resolvió todas mis dudas.",
      date: "Hace 1 semana"
    }
  ];

  return (
    <div className="min-h-screen bg-background pt-11 pb-6">
      {/* Header */}
      <header className="bg-card border-b px-5 py-4 flex items-center gap-3">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => navigate('/search')}
        >
          <ArrowLeft className="w-5 h-5" />
        </Button>
        <h1 className="text-lg font-semibold flex-1">Perfil</h1>
      </header>

      {/* Doctor Info */}
      <div className="px-5 py-5">
        <div className="flex gap-4 mb-6">
          <img
            src={doctor.image}
            alt={doctor.name}
            className="w-24 h-24 rounded-xl object-cover shadow-card"
          />
          <div className="flex-1">
            <h2 className="text-xl font-bold mb-1">{doctor.name}</h2>
            <p className="text-muted-foreground mb-2">{doctor.specialty}</p>
            <div className="flex items-center gap-2 mb-2">
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span className="font-semibold">{doctor.rating}</span>
              </div>
              <span className="text-sm text-muted-foreground">
                ({doctor.reviews} reseñas)
              </span>
            </div>
            <Badge variant="secondary">{doctor.experience}</Badge>
          </div>
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          <Card className="p-3 flex items-center gap-2">
            <MapPin className="w-5 h-5 text-primary" />
            <div>
              <p className="text-xs text-muted-foreground">Ubicación</p>
              <p className="text-sm font-medium">2.5 km</p>
            </div>
          </Card>
          <Card className="p-3 flex items-center gap-2">
            <DollarSign className="w-5 h-5 text-secondary" />
            <div>
              <p className="text-xs text-muted-foreground">Consulta</p>
              <p className="text-sm font-medium">{doctor.priceRange}</p>
            </div>
          </Card>
        </div>

        {/* About */}
        <div className="mb-6">
          <h3 className="font-semibold mb-2">Acerca de</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {doctor.description}
          </p>
        </div>

        {/* Available Times */}
        <div className="mb-6">
          <h3 className="font-semibold mb-3 flex items-center gap-2">
            <Clock className="w-5 h-5" />
            Horarios disponibles hoy
          </h3>
          <div className="grid grid-cols-3 gap-2">
            {availableTimes.map((time) => (
              <Button
                key={time}
                variant="outline"
                size="sm"
                onClick={() => navigate(`/appointment/${doctor.id}`, { state: { time } })}
              >
                {time}
              </Button>
            ))}
          </div>
        </div>

        {/* Reviews */}
        <div className="mb-6">
          <h3 className="font-semibold mb-3">Reseñas</h3>
          <div className="space-y-3">
            {reviews.map((review) => (
              <Card key={review.id} className="p-4">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <p className="font-medium">{review.name}</p>
                    <p className="text-xs text-muted-foreground">{review.date}</p>
                  </div>
                  <div className="flex">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">{review.comment}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Book Appointment Button */}
        <Button
          className="w-full"
          size="lg"
          onClick={() => navigate(`/appointment/${doctor.id}`)}
        >
          Agendar cita
        </Button>
      </div>
    </div>
  );
};

export default DoctorProfile;
