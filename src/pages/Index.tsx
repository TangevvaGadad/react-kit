import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { InputField } from '@/components/InputField';
import { DataTable, Column } from '@/components/DataTable';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import AnimatedNav from '@/components/AnimatedNav';
import { 
  Users, 
  Settings, 
  Shield, 
  Zap, 
  Palette, 
  Code, 
  Sparkles,
  ArrowRight,
  CheckCircle,
  Star,
  TrendingUp,
  Heart,
  Download,
  Star as StarIcon
} from 'lucide-react';

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  status: 'active' | 'inactive' | 'pending';
  joinDate: string;
}

const sampleData: User[] = [
  { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'active', joinDate: '2024-01-15' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Editor', status: 'active', joinDate: '2024-02-01' },
  { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'Viewer', status: 'inactive', joinDate: '2024-01-30' },
  { id: 4, name: 'Alice Brown', email: 'alice@example.com', role: 'Editor', status: 'pending', joinDate: '2024-03-10' },
  { id: 5, name: 'Charlie Wilson', email: 'charlie@example.com', role: 'Admin', status: 'active', joinDate: '2024-02-15' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const cardVariants = {
  hidden: { scale: 0.95, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: "easeOut"
    }
  },
  hover: {
    scale: 1.02,
    y: -5,
    transition: {
      duration: 0.2,
      ease: "easeOut"
    }
  }
};

const Index = () => {
  const [inputValue, setInputValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [selectedUsers, setSelectedUsers] = useState<User[]>([]);
  const [activeTab, setActiveTab] = useState('components');

  const columns: Column<User>[] = [
    {
      key: 'name',
      header: 'Name',
      sortable: true,
    },
    {
      key: 'email',
      header: 'Email',
      sortable: true,
    },
    {
      key: 'role',
      header: 'Role',
      sortable: true,
      render: (value) => (
        <Badge variant={value === 'Admin' ? 'default' : 'secondary'}>
          {value}
        </Badge>
      ),
    },
    {
      key: 'status',
      header: 'Status',
      sortable: true,
      render: (value) => (
        <Badge 
          variant={
            value === 'active' ? 'default' : 
            value === 'inactive' ? 'destructive' : 
            'secondary'
          }
        >
          {value}
        </Badge>
      ),
    },
    {
      key: 'joinDate',
      header: 'Join Date',
      sortable: true,
      render: (value) => new Date(value).toLocaleDateString(),
    },
  ];

  const features = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "TypeScript First",
      description: "Built with comprehensive TypeScript support for better developer experience and type safety.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Accessible by Default",
      description: "Components follow WCAG guidelines with proper ARIA attributes and keyboard navigation.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "Customizable Design",
      description: "Design system built with CSS variables and semantic tokens for easy theming.",
      color: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <AnimatedNav />
      
      {/* Hero Section */}
      <motion.div 
        className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 text-white pt-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        
        <div className="relative max-w-7xl mx-auto px-8 py-24">
          <motion.div 
            className="text-center space-y-6"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Sparkles className="w-4 h-4 text-yellow-400" />
              <span className="text-sm font-medium">React Component Library</span>
            </motion.div>
            
            <h1 className="text-6xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
              Build Beautiful UIs
            </h1>
            
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              A comprehensive collection of reusable React components built with TypeScript, 
              TailwindCSS, and modern design patterns. Create stunning interfaces with ease.
            </p>
            
            <motion.div 
              className="flex items-center justify-center space-x-4 pt-4"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Button size="lg" className="bg-white text-slate-900 hover:bg-blue-50 transition-all duration-200">
                Get Started
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                View Components
              </Button>
            </motion.div>

            {/* Stats Row */}
            <motion.div 
              className="flex items-center justify-center space-x-8 pt-8 text-blue-100"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <div className="flex items-center space-x-2">
                <Download className="w-4 h-4" />
                <span className="text-sm">10k+ Downloads</span>
              </div>
              <div className="flex items-center space-x-2">
                <StarIcon className="w-4 h-4 text-yellow-400" />
                <span className="text-sm">4.9/5 Rating</span>
              </div>
              <div className="flex items-center space-x-2">
                <Heart className="w-4 h-4 text-red-400" />
                <span className="text-sm">Made with Love</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Floating Elements */}
        <motion.div
          className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20 blur-xl"
          animate={{ 
            y: [0, -20, 0],
            scale: [1, 1.1, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-24 h-24 bg-gradient-to-r from-pink-400 to-red-400 rounded-full opacity-20 blur-xl"
          animate={{ 
            y: [0, 20, 0],
            scale: [1, 0.9, 1],
            rotate: [0, -180, -360]
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.div>

      <div className="max-w-7xl mx-auto px-8 py-16">
        {/* Stats Section */}
        <motion.div 
          className="grid md:grid-cols-4 gap-6 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {[
            { number: "50+", label: "Components", icon: <Zap className="w-6 h-6" /> },
            { number: "100%", label: "TypeScript", icon: <Code className="w-6 h-6" /> },
            { number: "WCAG", label: "Accessible", icon: <Shield className="w-6 h-6" /> },
            { number: "∞", label: "Customizable", icon: <Palette className="w-6 h-6" /> }
          ].map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="text-center p-6 rounded-2xl bg-white/60 backdrop-blur-sm border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-white mb-4">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-slate-800 mb-2">{stat.number}</div>
              <div className="text-slate-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Content Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <TabsList className="grid w-full grid-cols-3 bg-white/60 backdrop-blur-sm border border-white/20">
              <TabsTrigger value="components" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-purple-500 data-[state=active]:text-white">
                Components
              </TabsTrigger>
              <TabsTrigger value="features" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-purple-500 data-[state=active]:text-white">
                Features
              </TabsTrigger>
              <TabsTrigger value="showcase" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-purple-500 data-[state=active]:text-white">
                Showcase
              </TabsTrigger>
            </TabsList>
          </motion.div>

          <TabsContent value="components" className="space-y-8">
            {/* InputField Examples */}
            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true }}
            >
              <Card className="bg-white/60 backdrop-blur-sm border-white/20 shadow-xl">
                <CardHeader className="text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-white mb-4"
                  >
                    <Users className="w-8 h-8" />
                  </motion.div>
                  <CardTitle className="text-3xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
                    InputField Component
                  </CardTitle>
                  <CardDescription className="text-lg text-slate-600">
                    Flexible input component with validation states, variants, and interactive features.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <motion.div 
                      className="space-y-6"
                      initial={{ x: -20, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      viewport={{ once: true }}
                    >
                      <h3 className="text-xl font-semibold text-slate-800 flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                        Basic Examples
                      </h3>
                      
                      <InputField
                        label="Standard Input"
                        placeholder="Enter your name"
                        helperText="This is a helper text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        clearable
                        onClear={() => setInputValue('')}
                      />

                      <InputField
                        label="Email Address"
                        type="email"
                        placeholder="your@email.com"
                        variant="filled"
                        size="lg"
                        required
                      />

                      <InputField
                        label="Password"
                        type="password"
                        placeholder="Enter your password"
                        value={passwordValue}
                        onChange={(e) => setPasswordValue(e.target.value)}
                        showPasswordToggle
                        clearable
                        onClear={() => setPasswordValue('')}
                      />
                    </motion.div>

                    <motion.div 
                      className="space-y-6"
                      initial={{ x: 20, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                      viewport={{ once: true }}
                    >
                      <h3 className="text-xl font-semibold text-slate-800 flex items-center">
                        <Star className="w-5 h-5 text-yellow-500 mr-2" />
                        States & Variants
                      </h3>
                      
                      <InputField
                        label="Success State"
                        placeholder="Valid input"
                        state="valid"
                        helperText="Looks good!"
                      />

                      <InputField
                        label="Error State"
                        placeholder="Invalid input"
                        errorMessage="This field is required"
                      />

                      <InputField
                        label="Loading State"
                        placeholder="Processing..."
                        loading
                      />

                      <InputField
                        label="Ghost Variant"
                        placeholder="Subtle styling"
                        variant="ghost"
                        size="sm"
                      />
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* DataTable Example */}
            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true }}
            >
              <Card className="bg-white/60 backdrop-blur-sm border-white/20 shadow-xl">
                <CardHeader className="text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full text-white mb-4"
                  >
                    <TrendingUp className="w-8 h-8" />
                  </motion.div>
                  <CardTitle className="text-3xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
                    DataTable Component
                  </CardTitle>
                  <CardDescription className="text-lg text-slate-600">
                    Advanced data table with sorting, selection, and customizable rendering.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <motion.div 
                      className="flex items-center justify-between"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      viewport={{ once: true }}
                    >
                      <p className="text-sm text-slate-600">
                        {selectedUsers.length} of {sampleData.length} users selected
                      </p>
                      {selectedUsers.length > 0 && (
                        <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                          {selectedUsers.length} selected
                        </Badge>
                      )}
                    </motion.div>
                    
                    <DataTable
                      data={sampleData}
                      columns={columns}
                      selectable
                      onRowSelect={setSelectedUsers}
                      stickyHeader
                    />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>

          <TabsContent value="features" className="space-y-8">
            <motion.div
              className="grid md:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -10, scale: 1.05 }}
                  className="group"
                >
                  <Card className="bg-white/60 backdrop-blur-sm border-white/20 shadow-xl h-full transition-all duration-300 group-hover:shadow-2xl">
                    <CardHeader className="text-center">
                      <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${feature.color} rounded-full text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        {feature.icon}
                      </div>
                      <CardTitle className="text-xl font-bold text-slate-800">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-slate-600 text-center leading-relaxed">
                        {feature.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>

          <TabsContent value="showcase" className="space-y-8">
            <motion.div
              className="text-center space-y-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
                Component Showcase
              </h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                Explore our comprehensive collection of UI components designed for modern web applications.
              </p>
            </motion.div>
            
            <motion.div
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                { name: "Buttons", count: "12 variants", color: "from-blue-500 to-cyan-500" },
                { name: "Forms", count: "8 components", color: "from-green-500 to-emerald-500" },
                { name: "Navigation", count: "6 patterns", color: "from-purple-500 to-pink-500" },
                { name: "Data Display", count: "15 components", color: "from-orange-500 to-red-500" },
                { name: "Feedback", count: "10 components", color: "from-indigo-500 to-blue-500" },
                { name: "Layout", count: "8 components", color: "from-teal-500 to-green-500" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="group cursor-pointer"
                >
                  <div className="bg-white/60 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center transition-all duration-300 group-hover:bg-white/80 group-hover:shadow-xl">
                    <div className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-2xl mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}></div>
                    <h3 className="font-semibold text-slate-800 mb-2">{item.name}</h3>
                    <p className="text-sm text-slate-600">{item.count}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>
        </Tabs>

        {/* Call to Action */}
        <motion.div
          className="text-center py-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl p-12 text-white">
            <h2 className="text-4xl font-bold mb-4">Ready to Build Something Amazing?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Start building beautiful, accessible, and performant user interfaces with our component library.
            </p>
            <div className="flex items-center justify-center space-x-4">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                Get Started
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                View Documentation
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Index;