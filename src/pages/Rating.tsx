import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Star, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const Rating = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { doctor } = location.state || {};
  
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [hoveredRating, setHoveredRating] = useState(0);

  const handleSubmit = () => {
    if (rating === 0) {
      toast.error("Por favor selecciona una calificación");
      return;
    }
    
    toast.success("¡Gracias por tu calificación!");
    navigate('/');
  };

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
        <h1 className="text-lg font-semibold flex-1">Calificar atención</h1>
      </header>

      <div className="px-6 py-8">
        <div className="text-center mb-8">
          <h2 className="text-xl font-bold mb-2">
            ¿Cómo fue tu experiencia con {doctor}?
          </h2>
          <p className="text-muted-foreground">
            Tu opinión nos ayuda a mejorar
          </p>
        </div>

        {/* Star Rating */}
        <div className="flex justify-center gap-3 mb-8">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              onClick={() => setRating(star)}
              onMouseEnter={() => setHoveredRating(star)}
              onMouseLeave={() => setHoveredRating(0)}
              className="transition-transform hover:scale-110"
            >
              <Star
                className={`w-12 h-12 ${
                  star <= (hoveredRating || rating)
                    ? "fill-yellow-400 text-yellow-400"
                    : "text-gray-300"
                }`}
              />
            </button>
          ))}
        </div>

        {/* Rating Text */}
        {rating > 0 && (
          <p className="text-center text-lg font-semibold mb-6 animate-fade-in">
            {rating === 5 && "¡Excelente!"}
            {rating === 4 && "Muy bueno"}
            {rating === 3 && "Bueno"}
            {rating === 2 && "Regular"}
            {rating === 1 && "Necesita mejorar"}
          </p>
        )}

        {/* Comment */}
        <div className="mb-6">
          <label className="block text-sm font-medium mb-2">
            Cuéntanos más (opcional)
          </label>
          <Textarea
            placeholder="¿Qué te gustó o qué podría mejorar?"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            rows={4}
            className="resize-none"
          />
        </div>

        {/* Submit Button */}
        <Button
          className="w-full"
          size="lg"
          onClick={handleSubmit}
          disabled={rating === 0}
        >
          Enviar calificación
        </Button>
      </div>
    </div>
  );
};

export default Rating;
