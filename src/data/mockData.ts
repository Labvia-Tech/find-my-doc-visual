export interface Doctor {
  id: number;
  name: string;
  specialty: string;
  rating: number;
  reviews: number;
  image: string;
  experience: string;
  description: string;
  priceRange: string;
  category: 'medico' | 'clinica' | 'hospital' | 'cosmeatria';
}

export const doctors: Doctor[] = [
  {
    id: 1,
    name: "Dra. María González",
    specialty: "Cardiología",
    rating: 4.9,
    reviews: 127,
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop",
    experience: "15 años de experiencia",
    description: "Especialista en enfermedades cardiovasculares con amplia trayectoria en hospitales de primer nivel.",
    priceRange: "$500 - $800",
    category: 'medico'
  },
  {
    id: 2,
    name: "Dr. Carlos Ramírez",
    specialty: "Dermatología",
    rating: 4.8,
    reviews: 98,
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop",
    experience: "12 años de experiencia",
    description: "Experto en tratamientos dermatológicos y procedimientos estéticos avanzados.",
    priceRange: "$400 - $700",
    category: 'medico'
  },
  {
    id: 3,
    name: "Clínica Dental Sonrisa",
    specialty: "Odontología",
    rating: 4.7,
    reviews: 203,
    image: new URL('../assets/clinica-dental.jpg', import.meta.url).href,
    experience: "20 años de experiencia",
    description: "Clínica dental integral con tecnología de última generación y equipo altamente calificado.",
    priceRange: "$300 - $1200",
    category: 'clinica'
  },
  {
    id: 4,
    name: "Dra. Ana Martínez",
    specialty: "Psicología",
    rating: 4.9,
    reviews: 156,
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
    experience: "10 años de experiencia",
    description: "Psicóloga clínica especializada en terapia cognitivo-conductual y manejo de ansiedad.",
    priceRange: "$600 - $900",
    category: 'medico'
  },
  {
    id: 5,
    name: "Centro de Estética Belleza Natural",
    specialty: "Cosmeatría",
    rating: 4.8,
    reviews: 89,
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=400&h=400&fit=crop",
    experience: "8 años de experiencia",
    description: "Centro especializado en tratamientos faciales, corporales y rejuvenecimiento.",
    priceRange: "$200 - $600",
    category: 'cosmeatria'
  },
  {
    id: 6,
    name: "Dr. Roberto Silva",
    specialty: "Traumatología",
    rating: 4.7,
    reviews: 142,
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&h=400&fit=crop",
    experience: "18 años de experiencia",
    description: "Cirujano traumatólogo especializado en lesiones deportivas y reconstrucción.",
    priceRange: "$700 - $1000",
    category: 'medico'
  }
];

export const specialties = [
  { name: "Cardiología", icon: "heart" },
  { name: "Dermatología", icon: "sparkles" },
  { name: "Odontología", icon: "smile" },
  { name: "Psicología", icon: "brain" },
  { name: "Traumatología", icon: "bone" },
  { name: "Cosmeatría", icon: "star" }
];

export const categories = [
  { name: "Clínicas", icon: "building-2", value: 'clinica' },
  { name: "Hospitales", icon: "hospital", value: 'hospital' },
  { name: "Médicos", icon: "stethoscope", value: 'medico' },
  { name: "Cosmeatría", icon: "sparkles", value: 'cosmeatria' }
];
