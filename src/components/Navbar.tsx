'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigation } from '@/context/navigation';
import { Shield, Award, Target, Brain, Users, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { navItems } from '@/lib/navigation';
import { Share_Tech_Mono, Orbitron } from 'next/font/google';

const techMono = Share_Tech_Mono({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

const orbitron = Orbitron({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const iconMap = {
  Shield,
  Award,
  Target,
  Brain,
  Users,
};

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const { setIsLoading } = useNavigation();

  const NavLink = ({ item, isMobile }: { item: typeof navItems[number], isMobile?: boolean }) => {
    const Icon = iconMap[item.icon];
    const isActive = pathname === item.href;

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      if (isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
      setIsLoading(true);
      router.push(item.href);
    };

    return (
      <Link
        href={item.href}
        onClick={handleClick}
        className={`group relative flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 focus:outline-none ${
          isMobile
            ? 'w-full hover:bg-orange-500/20'
            : ''
        }`}
        aria-current={isActive ? 'page' : undefined}
      >
        <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-orange-500/0 via-orange-500/0 to-orange-500/0 group-hover:via-orange-500/10 transition-all duration-300"></div>
        {isActive && (
          <motion.div
            layoutId="activeTab"
            className="absolute inset-0 rounded-lg bg-orange-500/10 border border-orange-500/20"
            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
          />
        )}
        <Icon className={`w-5 h-5 transition-all duration-300 ${
          isMobile 
            ? 'text-orange-400'
            : `text-orange-400 group-hover:text-orange-300 ${isActive ? 'text-orange-300' : ''}`
        }`} />
        <span className={`${orbitron.className} font-medium relative z-10 ${
          isActive ? 'text-orange-300' : 'text-gray-300 group-hover:text-orange-300'
        }`}>
          {item.name}
        </span>
        {!isMobile && (
          <div className="absolute bottom-0 left-1/2 w-0 h-px bg-orange-500 transform -translate-x-1/2 group-hover:w-full transition-all duration-300"></div>
        )}
      </Link>
    );
  };

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed top-0 w-full z-50 transition-all duration-500`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ 
        y: 0,
        opacity: 1,
        backdropFilter: scrolled ? "blur(16px)" : "blur(0px)",
      }}
      transition={{ 
        duration: 0.6,
        backdropFilter: { duration: 0.3 }
      }}
    >
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-4 max-w-7xl">
        <div className={`relative transition-all duration-500 ${
          scrolled ? 'py-2' : 'py-4'
        }`}>
          {/* Background Effects */}
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 via-transparent to-orange-500/5"></div>
          
          {/* Content */}
          <div className="relative flex justify-between items-center">
            {/* Left: Logo */}
            <motion.div
              className="flex-none"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, type: "spring" }}
            >
              <Link href="/" className="flex items-center space-x-2 group">
                <div className="relative">
                  <div className="absolute -inset-2 bg-orange-500/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <Shield className="w-8 h-8 text-orange-400 relative z-10" />
                </div>
                <span className={`text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-500 ${orbitron.className}`}>
                  ALPHA NET
                </span>
              </Link>
            </motion.div>

            {/* Center: Navigation */}
            <motion.div 
              className="hidden md:flex items-center justify-center flex-1 px-4"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="flex items-center space-x-1">
                {navItems.map((item) => (
                  <NavLink key={item.href} item={item} />
                ))}
              </div>
            </motion.div>

            {/* Right: Buttons */}
            <motion.div 
              className="hidden md:flex items-center space-x-4 flex-none"
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, type: "spring" }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href="https://registration.alphactf.edu.lk" target="_blank" rel="noopener noreferrer">
                  <Button 
                    variant="outline" 
                    className={`border-orange-500/50 text-orange-400 hover:bg-orange-500/10 hover:text-orange-300 transition-all duration-300 ${techMono.className}`}
                  >
                    Register
                  </Button>
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  className={`bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold transition-all duration-300 ${techMono.className}`}
                >
                Join CTF
                </Button>
              </motion.div>
            </motion.div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <motion.button
                whileTap={{ scale: 0.95 }}
                className="relative group"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                <div className="absolute -inset-2 bg-orange-500/20 rounded-lg blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative">
                  {isMobileMenuOpen ? (
                    <X className="w-6 h-6 text-orange-400" />
                  ) : (
                    <Menu className="w-6 h-6 text-orange-400" />
                  )}
                </div>
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#0B1120]/95 backdrop-blur-md border-t border-orange-500/10"
          >
            <div className="max-w-7xl mx-auto px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <NavLink key={item.href} item={item} isMobile />
              ))}
              <div className="pt-4 space-y-2 border-t border-orange-500/10">
                <Link href="https://registration.alphactf.edu.lk" target="_blank" rel="noopener noreferrer" className="w-full">
                  <Button 
                    variant="outline" 
                    className={`w-full border-orange-500/50 text-orange-400 hover:bg-orange-500/10 ${techMono.className}`}
                  >
                    Register
                  </Button>
                </Link>
                <Button 
                  className={`w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white ${techMono.className}`}
                >
                  Join CTF
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bottom Border Effect */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-500/20 to-transparent"></div>
    </motion.nav>
  );
}
