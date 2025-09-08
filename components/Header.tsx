import { Logo, LogoMini } from "./Logo";
import { Button } from "./ui/button";
import { Menu, X, User, Zap, Briefcase, MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const navigationItems = [
    { label: "About", sectionId: "about", icon: User },
    { label: "Skills", sectionId: "skills", icon: Zap },
    { label: "Portfolio", sectionId: "portfolio", icon: Briefcase },
    { label: "Contact", sectionId: "contact", icon: MessageCircle }
  ];

  // Track active section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5, rootMargin: "-100px 0px -50% 0px" }
    );

    navigationItems.forEach((item) => {
      const element = document.getElementById(item.sectionId);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-xl border-b border-border/30 shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          {/* Logo and Name */}
          <div className="flex items-center gap-3">
            <Logo size="sm" animated />
            <div className="hidden sm:block">
              <h4 className="text-lg font-semibold text-primary">Meet Patel</h4>
              <p className="text-xs text-muted-foreground -mt-1">iOS Developer</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 bg-muted/50 backdrop-blur-sm rounded-full p-1 border border-border/30">
            {navigationItems.map((item) => {
              const IconComponent = item.icon;
              const isActive = activeSection === item.sectionId;
              
              return (
                <motion.button
                  key={item.sectionId}
                  onClick={() => scrollToSection(item.sectionId)}
                  className={`
                    relative flex items-center gap-2 px-4 py-2.5 rounded-full transition-all duration-300 group z-10
                    ${isActive 
                      ? 'text-primary-foreground shadow-sm' 
                      : 'text-muted-foreground hover:text-foreground'
                    }
                  `}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  layout
                >
                  <IconComponent 
                    className={`h-4 w-4 transition-all duration-300 ${
                      isActive ? 'text-primary-foreground' : 'text-muted-foreground group-hover:text-foreground'
                    }`} 
                  />
                  <span className="font-medium text-sm whitespace-nowrap">{item.label}</span>
                  
                  {/* Active background indicator */}
                  {isActive && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-primary via-blue-600 to-purple-600 rounded-full shadow-lg"
                      layoutId="activeNavBg"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ 
                        type: "spring",
                        stiffness: 300,
                        damping: 30
                      }}
                      style={{ zIndex: -1 }}
                    />
                  )}
                  
                  {/* Hover background effect */}
                  <motion.div
                    className="absolute inset-0 bg-background/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ scale: 0.8 }}
                    whileHover={{ scale: 1 }}
                    transition={{ duration: 0.2 }}
                    style={{ zIndex: -1 }}
                  />
                  
                  {/* Ripple effect on click */}
                  <motion.div
                    className="absolute inset-0 bg-primary/20 rounded-full"
                    initial={{ scale: 0, opacity: 0 }}
                    whileTap={{ scale: 1.2, opacity: [0, 0.3, 0] }}
                    transition={{ duration: 0.4 }}
                    style={{ zIndex: -1 }}
                  />
                </motion.button>
              );
            })}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                size="sm" 
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-to-r from-primary via-blue-600 to-purple-600 hover:opacity-90 shadow-md hover:shadow-lg transition-all duration-300 font-medium"
              >
                Let's Talk
              </Button>
            </motion.div>
          </div>

          {/* Mobile Actions */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden mt-4 pt-4 border-t border-border/50"
            >
              <nav className="flex flex-col gap-2">
                {navigationItems.map((item) => {
                  const IconComponent = item.icon;
                  const isActive = activeSection === item.sectionId;
                  
                  return (
                    <motion.button
                      key={item.sectionId}
                      onClick={() => scrollToSection(item.sectionId)}
                      className={`
                        relative flex items-center gap-3 text-left py-3 px-4 rounded-xl transition-all duration-300 group
                        ${isActive 
                          ? 'bg-gradient-to-r from-primary via-blue-600 to-purple-600 text-primary-foreground shadow-md' 
                          : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                        }
                      `}
                      whileTap={{ scale: 0.98 }}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: navigationItems.indexOf(item) * 0.1 }}
                    >
                      <IconComponent 
                        className={`h-5 w-5 transition-all duration-300 ${
                          isActive ? 'text-primary-foreground' : 'text-muted-foreground group-hover:text-foreground'
                        }`} 
                      />
                      <span className="font-medium">{item.label}</span>
                      
                      {/* Mobile active indicator */}
                      {isActive && (
                        <motion.div
                          className="absolute right-3 w-2 h-2 bg-primary-foreground rounded-full"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.2 }}
                        />
                      )}
                    </motion.button>
                  );
                })}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: navigationItems.length * 0.1 + 0.2 }}
                  className="mt-4 pt-4 border-t border-border/50"
                >
                  <Button 
                    size="sm" 
                    onClick={() => scrollToSection('contact')}
                    className="bg-gradient-to-r from-primary via-blue-600 to-purple-600 hover:opacity-90 w-full font-medium shadow-md"
                  >
                    Let's Talk
                  </Button>
                </motion.div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}