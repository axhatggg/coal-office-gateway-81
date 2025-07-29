
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import QualityManual from "./pages/QualityManual";
import StandardProcess from "./pages/StandardProcess";
import AshContent from "./pages/AshContent";
import MoistureContent from "./pages/MoistureContent";
import VolatileMatter from "./pages/VolatileMatter";
import JobRoles from "./pages/JobRoles";
import Equipments from "./pages/Equipments";
import Calculations from "./pages/Calculations";
import History from "./pages/History";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/quality-manual" element={<QualityManual />} />
          <Route path="/standard-process" element={<StandardProcess />} />
          <Route path="/ash-content" element={<AshContent />} />
          <Route path="/moisture-content" element={<MoistureContent />} />
          <Route path="/volatile-matter" element={<VolatileMatter />} />
          <Route path="/job-roles" element={<JobRoles />} />
          <Route path="/equipments" element={<Equipments />} />
          <Route path="/calculations" element={<Calculations />} />
          <Route path="/history" element={<History />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
