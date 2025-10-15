import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PhoneFrame from "./components/PhoneFrame";
import Home from "./pages/Home";
import SearchResults from "./pages/SearchResults";
import DoctorProfile from "./pages/DoctorProfile";
import Appointment from "./pages/Appointment";
import Confirmation from "./pages/Confirmation";
import Rating from "./pages/Rating";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <PhoneFrame>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<SearchResults />} />
            <Route path="/doctor/:id" element={<DoctorProfile />} />
            <Route path="/appointment/:id" element={<Appointment />} />
            <Route path="/confirmation" element={<Confirmation />} />
            <Route path="/rating" element={<Rating />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </PhoneFrame>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
