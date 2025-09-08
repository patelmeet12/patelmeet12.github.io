import { motion } from "motion/react";

interface LogoProps {
  size?: "sm" | "md" | "lg" | "xl";
  variant?: "default" | "gradient" | "monochrome";
  animated?: boolean;
  className?: string;
}

export function Logo({ 
  size = "md", 
  variant = "default", 
  animated = false,
  className = "" 
}: LogoProps) {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-12 h-12", 
    lg: "w-16 h-16",
    xl: "w-24 h-24"
  };

  const LogoSVG = () => (
    <svg 
      viewBox="0 0 120 120" 
      className={`${sizeClasses[size]} ${className}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Gradient definitions */}
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#030213" />
          <stop offset="50%" stopColor="#2563eb" />
          <stop offset="100%" stopColor="#7c3aed" />
        </linearGradient>
        
        <linearGradient id="logoGradientReverse" x1="100%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#7c3aed" />
          <stop offset="50%" stopColor="#2563eb" />
          <stop offset="100%" stopColor="#030213" />
        </linearGradient>

        {/* Shadow filter */}
        <filter id="logoShadow" x="-50%" y="-50%" width="200%" height="200%">
          <feDropShadow dx="2" dy="4" stdDeviation="3" floodColor="rgba(0,0,0,0.1)" />
        </filter>
      </defs>

      {/* Background circle with subtle gradient */}
      <circle 
        cx="60" 
        cy="60" 
        r="55" 
        fill={variant === "gradient" ? "url(#logoGradient)" : 
              variant === "monochrome" ? "currentColor" : 
              "#030213"}
        filter="url(#logoShadow)"
      />
      
      {/* Inner accent circle */}
      <circle 
        cx="60" 
        cy="60" 
        r="48" 
        fill="none" 
        stroke={variant === "gradient" ? "rgba(255,255,255,0.2)" : 
                variant === "monochrome" ? "rgba(255,255,255,0.2)" : 
                "rgba(255,255,255,0.1)"}
        strokeWidth="1"
      />

      {/* Letter M */}
      <path 
        d="M25 45 L25 75 L30 75 L30 55 L40 70 L45 70 L55 55 L55 75 L60 75 L60 45 L52 45 L42.5 62 L32.5 45 Z" 
        fill={variant === "gradient" ? "url(#logoGradientReverse)" : 
              variant === "monochrome" ? "white" : 
              "white"}
        style={{ fontWeight: 'bold' }}
      />

      {/* Letter P */}
      <path 
        d="M70 45 L70 75 L75 75 L75 62.5 L88 62.5 C92 62.5 95 59.5 95 55.5 L95 52 C95 48 92 45 88 45 Z M75 50 L87 50 C89 50 90 51 90 52 L90 55.5 C90 56.5 89 57.5 87 57.5 L75 57.5 Z" 
        fill={variant === "gradient" ? "url(#logoGradientReverse)" : 
              variant === "monochrome" ? "white" : 
              "white"}
        style={{ fontWeight: 'bold' }}
      />

      {/* iOS-inspired accent elements */}
      <circle cx="35" cy="25" r="3" fill="rgba(255,255,255,0.6)" />
      <circle cx="85" cy="25" r="2" fill="rgba(255,255,255,0.4)" />
      <circle cx="25" cy="85" r="2" fill="rgba(255,255,255,0.4)" />
      <circle cx="95" cy="90" r="3" fill="rgba(255,255,255,0.6)" />

      {/* App icon-like border radius indicator */}
      <rect 
        x="15" 
        y="15" 
        width="8" 
        height="8" 
        rx="2" 
        fill="none" 
        stroke="rgba(255,255,255,0.3)" 
        strokeWidth="1"
      />
      
      <rect 
        x="97" 
        y="97" 
        width="8" 
        height="8" 
        rx="2" 
        fill="none" 
        stroke="rgba(255,255,255,0.3)" 
        strokeWidth="1"
      />
    </svg>
  );

  if (animated) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ 
          duration: 0.6, 
          ease: "easeOut",
          type: "spring",
          stiffness: 100
        }}
        whileHover={{ 
          scale: 1.05,
          rotate: 5,
          transition: { duration: 0.2 }
        }}
      >
        <LogoSVG />
      </motion.div>
    );
  }

  return <LogoSVG />;
}

// Alternative minimal version for smaller spaces
export function LogoMini({ className = "" }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 40 40" 
      className={`w-8 h-8 ${className}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="miniGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#030213" />
          <stop offset="100%" stopColor="#2563eb" />
        </linearGradient>
      </defs>
      
      <rect 
        width="40" 
        height="40" 
        rx="8" 
        fill="url(#miniGradient)"
      />
      
      <text 
        x="20" 
        y="28" 
        textAnchor="middle" 
        fill="white" 
        fontSize="18" 
        fontWeight="bold"
        fontFamily="system-ui, -apple-system, sans-serif"
      >
        MP
      </text>
    </svg>
  );
}