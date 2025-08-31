import { motion } from "motion/react";
import { CheckCircle } from "lucide-react";

export function AvailabilityBanner() {
  return (
    <motion.div 
      className="bg-green-500 text-white py-2 px-6 text-center overflow-hidden"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <motion.div 
        className="flex items-center justify-center gap-2"
        animate={{ 
          scale: [1, 1.05, 1],
        }}
        transition={{ 
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        >
          <CheckCircle className="h-4 w-4" />
        </motion.div>
        <span className="text-sm font-medium">
          🎉 Available for new opportunities - Let's build something amazing together!
        </span>
      </motion.div>
    </motion.div>
  );
}