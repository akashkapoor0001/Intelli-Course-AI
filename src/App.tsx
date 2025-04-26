
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserCountProvider } from "./contexts/UserCountContext";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import LearnMore from "./pages/LearnMore";
import NotFound from "./pages/NotFound";
import Community from "./pages/Community";
import Company from "./pages/Company";
import Contact from "./pages/Contact";
import IntelliCourseAI from "./pages/IntelliCourseAI";
import LearningPlatform from "./pages/LearningPlatform";
import AlumniEmployment from "./pages/AlumniEmployment";
import TermsOfService from "./pages/TermsOfService";
import PrivacyPolicy from "./pages/PrivacyPolicy";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <UserCountProvider>
      <TooltipProvider>
        <div className="min-h-screen bg-background text-foreground">
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/login" element={<Login />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/learn-more" element={<LearnMore />} />
              <Route path="/community" element={<Community />} />
              <Route path="/company" element={<Company />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/ai-plus" element={<IntelliCourseAI />} />
              <Route path="/learning-platform" element={<LearningPlatform />} />
              <Route path="/alumni-employment-assistance" element={<AlumniEmployment />} />
              <Route path="*" element={<NotFound />} />
              <Route path="/terms-of-service" element={<TermsOfService />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            </Routes>
          </BrowserRouter>
        </div>
      </TooltipProvider>
    </UserCountProvider>
  </QueryClientProvider>
);

export default App;
