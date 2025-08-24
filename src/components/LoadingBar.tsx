'use client';

import { useNavigation } from '@/context/navigation';
import { motion, AnimatePresence } from 'framer-motion';

export function LoadingBar() {
  const { isLoading } = useNavigation();

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed top-0 left-0 w-full z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="h-1 bg-gradient-to-r from-orange-500 to-orange-600"
            initial={{ width: "0%" }}
            animate={{ 
              width: "100%",
              transition: { duration: 1.5, ease: "easeInOut" }
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
