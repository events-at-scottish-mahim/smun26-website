import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { useState, useEffect } from "react";
import CinematicIntro from "./components/CinematicIntro";
import Landing from "./pages/Landing";
import Home from "./pages/Home";
import About from "./pages/About";
import Committees from "./pages/Committees";
import Preparation from "./pages/Preparation";
import Contact from "./pages/Contact";
import DelegationPortal from "./pages/DelegationPortal";
import ScrollToTop from "./components/ScrollToTop";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "wouter";

function Router() {
   const [location] = useLocation();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location}
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -15 }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
      >
        <Switch location={location}>
          <Route path="/" component={Landing} />
          <Route path="/home" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/committees" component={Committees} />
          <Route path="/preparation" component={Preparation} />
          <Route path="/contact" component={Contact} />
          <Route path="/delegation-portal" component={DelegationPortal} />
          <Route path="/404" component={NotFound} />
          <Route component={NotFound} />
        </Switch>
      </motion.div>
    </AnimatePresence>
  );
}

function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [location] = useLocation();
  const handleIntroComplete = () => {
    setShowIntro(false);
  };

  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <Toaster />
          {showIntro && <CinematicIntro onComplete={handleIntroComplete} />}
        <ScrollToTop />

              <Router />

        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
