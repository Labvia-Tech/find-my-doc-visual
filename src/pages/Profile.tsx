import { useNavigate } from "react-router-dom";
import { ArrowLeft, User, Calendar, Heart, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Profile = () => {
  const navigate = useNavigate();

  const upcomingAppointments = [
    {
      id: 1,
      doctor: "Dra. María González",
      specialty: "Cardiología",
      date: "20 Oct 2025",
      time: "10:00"
    }
  ];

  const favorites = [
    {
      id: 1,
      name: "Dr. Carlos Ramírez",
      specialty: "Dermatología"
    },
    {
      id: 2,
      name: "Dra. Ana Martínez",
      specialty: "Psicología"
    }
  ];

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
        <h1 className="text-lg font-semibold flex-1">Mi Perfil</h1>
        <Button variant="ghost" size="icon">
          <Settings className="w-5 h-5" />
        </Button>
      </header>

      {/* User Info */}
      <div className="px-5 py-5 text-center">
        <Avatar className="w-24 h-24 mx-auto mb-4">
          <AvatarImage src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop" />
          <AvatarFallback>JP</AvatarFallback>
        </Avatar>
        <h2 className="text-xl font-bold mb-1">Julia Pérez</h2>
        <p className="text-muted-foreground">julia.perez@email.com</p>
      </div>

      {/* Upcoming Appointments */}
      <div className="px-5 py-4">
        <h3 className="font-semibold mb-3 flex items-center gap-2">
          <Calendar className="w-5 h-5" />
          Próximas citas
        </h3>
        <div className="space-y-2">
          {upcomingAppointments.map((appointment) => (
            <Card key={appointment.id} className="p-4">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h4 className="font-semibold">{appointment.doctor}</h4>
                  <p className="text-sm text-muted-foreground">{appointment.specialty}</p>
                </div>
                <Button variant="ghost" size="sm">Ver</Button>
              </div>
              <div className="flex gap-4 text-sm text-muted-foreground">
                <span>{appointment.date}</span>
                <span>{appointment.time}</span>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Favorites */}
      <div className="px-5 py-4">
        <h3 className="font-semibold mb-3 flex items-center gap-2">
          <Heart className="w-5 h-5" />
          Favoritos
        </h3>
        <div className="space-y-2">
          {favorites.map((fav) => (
            <Card key={fav.id} className="p-4 flex justify-between items-center">
              <div>
                <h4 className="font-semibold">{fav.name}</h4>
                <p className="text-sm text-muted-foreground">{fav.specialty}</p>
              </div>
              <Button variant="ghost" size="sm">Ver perfil</Button>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
