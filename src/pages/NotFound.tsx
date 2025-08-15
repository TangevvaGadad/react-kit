import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Home, ArrowLeft, Search, AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const floatingVariants = {
    animate: {
      y: [0, -20, 0],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-red-50 to-orange-100 flex items-center justify-center p-8">
      <motion.div
        className="max-w-4xl mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* 404 Number */}
        <motion.div
          className="relative mb-8"
          variants={itemVariants}
        >
          <motion.div
            className="text-9xl font-black bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 bg-clip-text text-transparent"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            404
          </motion.div>
          
          {/* Floating Elements */}
          <motion.div
            className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-red-400 to-pink-400 rounded-full opacity-60"
            variants={floatingVariants}
            animate="animate"
          />
          <motion.div
            className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full opacity-60"
            variants={floatingVariants}
            animate="animate"
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>

        {/* Main Content */}
        <motion.div variants={itemVariants} className="mb-12">
          <motion.div
            className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 border border-white/30 mb-6"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <AlertTriangle className="w-4 h-4 text-orange-500" />
            <span className="text-sm font-medium text-slate-700">Page Not Found</span>
          </motion.div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Oops! Page Lost in Space
          </h1>
          
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            The page you're looking for seems to have drifted off into the digital cosmos. 
            Don't worry, we'll help you navigate back to familiar territory.
          </p>
        </motion.div>

        {/* Action Cards */}
        <motion.div
          className="grid md:grid-cols-2 gap-6 mb-12"
          variants={itemVariants}
        >
          <Card className="bg-white/60 backdrop-blur-sm border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300 group">
            <CardHeader className="text-center">
              <motion.div
                className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full text-white mb-4 group-hover:scale-110 transition-transform duration-300"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <Home className="w-8 h-8" />
              </motion.div>
              <CardTitle className="text-xl font-bold text-slate-800">Go Home</CardTitle>
              <CardDescription className="text-slate-600">
                Return to the main page and explore our component library
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link to="/">
                <Button className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white">
                  <Home className="w-4 h-4 mr-2" />
                  Take Me Home
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="bg-white/60 backdrop-blur-sm border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300 group">
            <CardHeader className="text-center">
              <motion.div
                className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full text-white mb-4 group-hover:scale-110 transition-transform duration-300"
                whileHover={{ rotate: -360 }}
                transition={{ duration: 0.6 }}
              >
                <Search className="w-8 h-8" />
              </motion.div>
              <CardTitle className="text-xl font-bold text-slate-800">Search Components</CardTitle>
              <CardDescription className="text-slate-600">
                Browse through our extensive collection of UI components
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button 
                variant="outline" 
                className="w-full border-green-200 text-green-700 hover:bg-green-50"
                onClick={() => window.history.back()}
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Go Back
              </Button>
            </CardContent>
          </Card>
        </motion.div>

        {/* Helpful Links */}
        <motion.div
          variants={itemVariants}
          className="bg-white/40 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
        >
          <h3 className="text-lg font-semibold text-slate-800 mb-4">Need Help?</h3>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Button variant="ghost" className="text-slate-600 hover:text-slate-800 hover:bg-white/50">
              Documentation
            </Button>
            <Button variant="ghost" className="text-slate-600 hover:text-slate-800 hover:bg-white/50">
              Support
            </Button>
            <Button variant="ghost" className="text-slate-600 hover:text-slate-800 hover:bg-white/50">
              GitHub
            </Button>
            <Button variant="ghost" className="text-slate-600 hover:text-slate-800 hover:bg-white/50">
              Community
            </Button>
          </div>
        </motion.div>

        {/* Decorative Background Elements */}
        <motion.div
          className="fixed inset-0 pointer-events-none overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-r from-red-200 to-orange-200 rounded-full opacity-20 blur-3xl"
            animate={{ 
              y: [0, -30, 0],
              scale: [1, 1.1, 1],
              rotate: [0, 180, 360]
            }}
            transition={{ 
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-20 left-20 w-48 h-48 bg-gradient-to-r from-yellow-200 to-orange-200 rounded-full opacity-20 blur-3xl"
            animate={{ 
              y: [0, 30, 0],
              scale: [1, 0.9, 1],
              rotate: [0, -180, -360]
            }}
            transition={{ 
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default NotFound;
