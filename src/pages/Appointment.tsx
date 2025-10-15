import { useState } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { doctors } from "@/data/mockData";
import { toast } from "sonner";

const Appointment = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const location = useLocation();
  const doctor = doctors.find(d => d.id === Number(id));
  
  const [selectedDate, setSelectedDate] = useState("2025-10-20");
  const [selectedTime, setSelectedTime] = useState(location.state?.time || "09:00");

  if (!doctor) {
    return <div>Doctor no encontrado</div>;
  }

  const dates = [
    { date: "2025-10-20", day: "Lun", dayNum: "20" },
    { date: "2025-10-21", day: "Mar", dayNum: "21" },
    { date: "2025-10-22", day: "Mié", dayNum: "22" },
    { date: "2025-10-23", day: "Jue", dayNum: "23" },
    { date: "2025-10-24", day: "Vie", dayNum: "24" },
  ];

  const times = [
    "09:00", "10:00", "11:00", "12:00",
    "14:00", "15:00", "16:00", "17:00"
  ];

  const handleConfirm = () => {
    navigate('/confirmation', {
      state: {
        doctor: doctor.name,
        date: selectedDate,
        time: selectedTime
      }
    });
  };

  return (
    <div className="min-h-screen bg-background pt-11">
      {/* Header */}
      <header className="bg-card border-b px-6 py-4 flex items-center gap-3">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => navigate(`/doctor/${id}`)}
        >
          <ArrowLeft className="w-5 h-5" />
        </Button>
        <h1 className="text-lg font-semibold flex-1">Agendar cita</h1>
      </header>

      {/* Doctor Summary */}
      <div className="px-6 py-4">
        <Card className="p-4 flex gap-3">
          <img
            src={doctor.image}
            alt={doctor.name}
            className="w-16 h-16 rounded-lg object-cover"
          />
          <div>
            <h3 className="font-semibold">{doctor.name}</h3>
            <p className="text-sm text-muted-foreground">{doctor.specialty}</p>
          </div>
        </Card>
      </div>

      {/* Date Selection */}
      <div className="px-6 py-4">
        <h3 className="font-semibold mb-3 flex items-center gap-2">
          <Calendar className="w-5 h-5" />
          Selecciona una fecha
        </h3>
        <div className="flex gap-2 overflow-x-auto pb-2">
          {dates.map((d) => (
            <Button
              key={d.date}
              variant={selectedDate === d.date ? "default" : "outline"}
              className="flex-col h-auto py-3 px-4 min-w-[60px]"
              onClick={() => setSelectedDate(d.date)}
            >
              <span className="text-xs">{d.day}</span>
              <span className="text-lg font-bold">{d.dayNum}</span>
            </Button>
          ))}
        </div>
      </div>

      {/* Time Selection */}
      <div className="px-6 py-4">
        <h3 className="font-semibold mb-3 flex items-center gap-2">
          <Clock className="w-5 h-5" />
          Selecciona una hora
        </h3>
        <div className="grid grid-cols-4 gap-2">
          {times.map((time) => (
            <Button
              key={time}
              variant={selectedTime === time ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedTime(time)}
            >
              {time}
            </Button>
          ))}
        </div>
      </div>

      {/* Confirm Button */}
      <div className="fixed bottom-0 left-0 right-0 p-6 bg-background border-t">
        <Button
          className="w-full"
          size="lg"
          onClick={handleConfirm}
        >
          Confirmar cita
        </Button>
      </div>
    </div>
  );
};

export default Appointment;
