import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Download } from "lucide-react";
import { motion } from "motion/react";
import { Logo } from "./Logo";

export function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDownloadResume = () => {
    // You can replace this with actual resume download logic
    // Option 1: Direct download from public folder
    // const link = document.createElement('a');
    // link.href = '/resume-meet-patel.pdf';
    // link.download = 'Meet_Patel_iOS_Developer_Resume.pdf';
    // link.click();
    
    // Option 2: Google Drive or cloud storage link
    window.open('https://drive.google.com/file/d/YOUR_RESUME_FILE_ID/view', '_blank');
    
    // Option 3: Generate PDF dynamically (requires additional library)
    alert('Resume download will be available soon! Please contact me directly for now.');
  };

  return (
    <section className="py-32 px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-purple-50/50 dark:from-blue-950/20 dark:to-purple-950/20"></div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Logo and Greeting */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-8"
        >
          <Logo size="xl" variant="gradient" animated className="mx-auto mb-6" />
          <p className="text-muted-foreground mb-2">Hello, I'm</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="relative mb-6">
            <motion.h1 
              className="bg-gradient-to-r from-primary via-blue-600 to-purple-600 bg-clip-text text-transparent mb-2 text-4xl md:text-6xl font-bold"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              Meet Patel
            </motion.h1>
            <motion.div
              className="absolute -inset-2 bg-gradient-to-r from-primary/10 via-blue-600/10 to-purple-600/10 rounded-lg blur-xl opacity-30"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.3 }}
              transition={{ duration: 1, delay: 0.6 }}
            />
          </div>
          
          <motion.p 
            className="text-xl text-muted-foreground mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            Senior iOS Developer
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="flex flex-wrap justify-center gap-2 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <Badge variant="secondary" className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 hover:scale-105 transition-transform">
            Swift
          </Badge>
          <Badge variant="secondary" className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200 hover:scale-105 transition-transform">
            SwiftUI
          </Badge>
          <Badge variant="secondary" className="bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-200 hover:scale-105 transition-transform">
            Flutter
          </Badge>
          <Badge variant="secondary" className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 hover:scale-105 transition-transform">
            React Native
          </Badge>
          <Badge variant="secondary" className="bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200 hover:scale-105 transition-transform">
            FlutterFlow
          </Badge>
        </motion.div>
        
        <motion.p 
          className="mb-10 text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
        >
          Passionate iOS developer with 7+ years of experience creating exceptional mobile applications. 
          I specialize in Swift, SwiftUI, Flutter, FlutterFlow, and React Native, delivering high-quality, 
          scalable solutions for startups, SMBs, and enterprises worldwide.
        </motion.p>
        
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.1 }}
        >
          <Button 
            size="lg" 
            onClick={() => scrollToSection('portfolio')}
            className="bg-gradient-to-r from-primary via-blue-600 to-purple-600 hover:opacity-90 transform hover:scale-105 transition-all duration-200"
          >
            View Portfolio
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            onClick={handleDownloadResume}
            className="hover:bg-primary/5 transform hover:scale-105 transition-all duration-200"
          >
            <Download className="h-4 w-4 mr-2" />
            Download Resume
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            onClick={() => scrollToSection('contact')}
            className="hover:bg-primary/5 transform hover:scale-105 transition-all duration-200"
          >
            Get In Touch
          </Button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.5 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full mx-auto relative"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-primary rounded-full absolute left-1/2 top-2 transform -translate-x-1/2"
            />
          </motion.div>
          <p className="text-xs text-muted-foreground mt-2">Scroll to explore</p>
        </motion.div>
      </div>
    </section>
  );
}