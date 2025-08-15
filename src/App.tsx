import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Sparkles, Zap, Code, Shield } from "lucide-react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const LoadingScreen = () => (
  <motion.div
    className="fixed inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center z-50"
    initial={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5 }}
  >
    <div className="text-center space-y-8">
      {/* Logo Animation */}
      <motion.div
        className="relative"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl mx-auto mb-6 flex items-center justify-center">
          <Code className="w-12 h-12 text-white" />
        </div>
        
        {/* Floating Elements */}
        <motion.div
          className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full"
          animate={{ 
            y: [0, -10, 0],
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute -bottom-2 -left-2 w-4 h-4 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full"
          animate={{ 
            y: [0, 10, 0],
            scale: [1, 0.8, 1],
            rotate: [0, -180, -360]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.div>

      {/* Title */}
      <motion.h1
        className="text-4xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        React Kit Core
      </motion.h1>

      {/* Loading Bar */}
      <motion.div
        className="w-64 h-2 bg-white/20 rounded-full overflow-hidden mx-auto"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 2, delay: 0.5 }}
      >
        <motion.div
          className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{ 
            duration: 1.5, 
            delay: 0.8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.div>

      {/* Loading Text */}
      <motion.p
        className="text-blue-100 text-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        Loading amazing components...
      </motion.p>

      {/* Feature Icons */}
      <motion.div
        className="flex justify-center space-x-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        {[
          { icon: <Zap className="w-6 h-6" />, color: "from-yellow-400 to-orange-500" },
          { icon: <Code className="w-6 h-6" />, color: "from-blue-400 to-cyan-500" },
          { icon: <Shield className="w-6 h-6" />, color: "from-green-400 to-emerald-500" }
        ].map((item, index) => (
          <motion.div
            key={index}
            className={`w-12 h-12 bg-gradient-to-r ${item.color} rounded-full flex items-center justify-center text-white`}
            animate={{ 
              y: [0, -5, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              duration: 2,
              delay: index * 0.2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            {item.icon}
          </motion.div>
        ))}
      </motion.div>
    </div>
  </motion.div>
);

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <AnimatePresence mode="wait">
          {isLoading ? (
            <LoadingScreen key="loading" />
          ) : (
            <motion.div
              key="app"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Toaster />
              <Sonner />
              <BrowserRouter>
                <Routes>
                  <Route path="/" element={<Index />} />
                  {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </BrowserRouter>
            </motion.div>
          )}
        </AnimatePresence>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
