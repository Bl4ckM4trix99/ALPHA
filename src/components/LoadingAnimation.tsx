'use client';

import { motion } from 'framer-motion';
import { Orbitron } from 'next/font/google';

const orbitron = Orbitron({
  weight: ['400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  display: 'swap',
});

export default function LoadingAnimation() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0B1120]">
      <div className="relative">
        {/* Pulsing Background */}
        <motion.div
          className="absolute -inset-4 bg-orange-500 rounded-full blur-xl"
          animate={{
            opacity: [0.1, 0.3, 0.1],
            scale: [0.9, 1.1, 0.9],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Logo Animation */}
        <div className="relative">
          <motion.div 
            className="w-24 h-24 border-4 border-transparent border-t-orange-500 rounded-full"
            animate={{ 
              rotate: 360,
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          
          {/* Center Text */}
          <motion.div 
            className="absolute inset-0 flex items-center justify-center"
            animate={{
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <span className={`text-orange-500 font-bold text-xl ${orbitron.className}`}>
              α
            </span>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
