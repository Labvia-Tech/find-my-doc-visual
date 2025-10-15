import { useNavigate, useLocation } from "react-router-dom";
import { CheckCircle2, Calendar, Clock, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Confirmation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { doctor, date, time } = location.state || {};

  const formatDate = (dateString: string) => {
    const d = new Date(dateString);
    return d.toLocaleDateString('es-ES', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div className="min-h-screen bg-background pt-11 flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-secondary/10 mb-4">
            <CheckCircle2 className="w-10 h-10 text-secondary" />
          </div>
          <h1 className="text-2xl font-bold mb-2">¡Cita confirmada!</h1>
          <p className="text-muted-foreground">
            Tu cita ha sido agendada exitosamente
          </p>
        </div>

        <Card className="p-6 mb-6">
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <User className="w-5 h-5 text-primary mt-0.5" />
              <div>
                <p className="text-sm text-muted-foreground">Profesional</p>
                <p className="font-semibold">{doctor}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Calendar className="w-5 h-5 text-primary mt-0.5" />
              <div>
                <p className="text-sm text-muted-foreground">Fecha</p>
                <p className="font-semibold capitalize">{formatDate(date)}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-primary mt-0.5" />
              <div>
                <p className="text-sm text-muted-foreground">Hora</p>
                <p className="font-semibold">{time}</p>
              </div>
            </div>
          </div>
        </Card>

        <div className="space-y-3">
          <Button
            className="w-full"
            size="lg"
            onClick={() => navigate('/rating', { state: { doctor } })}
          >
            Calificar experiencia (Demo)
          </Button>
          
          <Button
            variant="outline"
            className="w-full"
            size="lg"
            onClick={() => navigate('/')}
          >
            Volver al inicio
          </Button>
        </div>

        <p className="text-center text-sm text-muted-foreground mt-6">
          Recibirás un recordatorio 24 horas antes de tu cita
        </p>
      </div>
    </div>
  );
};

export default Confirmation;
