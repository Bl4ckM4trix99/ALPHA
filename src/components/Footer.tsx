'use client';

import Link from 'next/link';
import { Shield, Mail, Phone, Lock, Server, Brain, Database, Cloud, Code } from 'lucide-react';
import { motion } from 'framer-motion';

export function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-[#0B1120] to-[#162137] border-t border-orange-500/20">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      {/* Glowing Overlay */}
      <div className="absolute inset-0 bg-gradient-conic from-orange-500/10 via-transparent to-orange-500/10"></div>
      
      <div className="container mx-auto px-6 py-12 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <div className="flex items-center gap-3 group">
              <Shield className="h-8 w-8 text-orange-500 group-hover:text-orange-400 transition-colors duration-300" />
              <h3 className="text-2xl font-bold text-white">ALPHA NET</h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Advanced cybersecurity platform delivering cutting-edge threat intelligence, hands-on training, and professional certifications for the modern security professional.
            </p>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-white mb-4">NAVIGATION</h4>
            <div className="grid grid-cols-1 gap-2">
              {[
                'Threat Intelligence',
                'CTF Challenges',
                'Security Services',
                'Learning Resources',
                'Community',
                'Certifications'
              ].map((item, index) => (
                <Link
                  key={index}
                  href="#"
                  className="text-gray-400 hover:text-orange-400 transition-colors duration-300 text-sm flex items-center gap-2 group"
                >
                  <span className="h-px w-4 bg-orange-500/50 group-hover:w-6 transition-all duration-300"></span>
                  {item}
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Technologies */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-white mb-4 relative inline-block group">
              TECHNOLOGIES
              <div className="absolute -bottom-1 left-0 w-full h-px bg-gradient-to-r from-orange-500 via-orange-400 to-transparent transform origin-left transition-transform duration-300"></div>
              <div className="absolute -bottom-1 right-0 w-0 h-px bg-gradient-to-l from-orange-500 via-orange-400 to-transparent group-hover:w-full transition-all duration-500"></div>
            </h4>
            <div className="grid grid-cols-2 gap-3">
              {[
                { 
                  name: 'Zero Trust', 
                  icon: Lock,
                  description: 'Identity & Access Management'
                },
                { 
                  name: 'AI Security', 
                  icon: Brain,
                  description: 'Machine Learning Defense'
                },
                { 
                  name: 'Pen Testing', 
                  icon: Code,
                  description: 'Vulnerability Assessment'
                },
                { 
                  name: 'Cloud Security', 
                  icon: Cloud,
                  description: 'Infrastructure Protection'
                },
                { 
                  name: 'DevSecOps', 
                  icon: Server,
                  description: 'Secure Development'
                },
                { 
                  name: 'Threat Hunting', 
                  icon: Database,
                  description: 'Advanced Detection'
                }
              ].map((tech, index) => (
                <Link
                  key={index}
                  href="#"
                  className="relative group bg-gradient-to-r from-[#162137]/50 to-transparent p-2 rounded-lg border border-orange-500/10 hover:border-orange-500/30 transition-all duration-300"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                  <div className="relative flex flex-col">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-6 h-6 rounded bg-orange-500/10 flex items-center justify-center group-hover:bg-orange-500/20 transition-colors duration-300">
                        <tech.icon className="h-3 w-3 text-orange-400 group-hover:text-orange-300 transition-colors duration-300" />
                      </div>
                      <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors duration-300">
                        {tech.name}
                      </span>
                    </div>
                    <span className="text-xs text-gray-500 group-hover:text-gray-400 transition-colors duration-300 pl-8">
                      {tech.description}
                    </span>
                  </div>
                  <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-orange-500/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                  <div className="absolute top-0 left-0 h-full w-px bg-gradient-to-b from-orange-500/50 to-transparent scale-y-0 group-hover:scale-y-100 transition-transform duration-500 delay-100"></div>
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-white mb-4">SECURE CONTACT</h4>
            <div className="space-y-3">
              <div className="group">
                <h5 className="text-orange-400 text-sm mb-1">Contact Email</h5>
                <Link href="mailto:info@alphactf.edu.lk" className="text-gray-400 hover:text-orange-400 transition-colors duration-300 text-sm flex items-center gap-2 group">
                  <Mail className="h-4 w-4 group-hover:text-orange-500 transition-colors duration-300" />
                  <span className="relative">
                    info@alphactf.edu.lk
                    <span className="absolute -bottom-px left-0 w-full h-px bg-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                  </span>
                </Link>
              </div>
              <div className="space-y-2">
                <h5 className="text-orange-400 text-sm mb-1">Support Lines</h5>
                <Link href="tel:+94717379273" className="text-gray-400 hover:text-orange-400 transition-colors duration-300 text-sm flex items-center gap-2 group">
                  <Phone className="h-4 w-4 group-hover:text-orange-500 transition-colors duration-300" />
                  <span className="relative">
                    +94 71 737 9273
                    <span className="absolute -bottom-px left-0 w-full h-px bg-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                  </span>
                </Link>
                <Link href="tel:+94763320184" className="text-gray-400 hover:text-orange-400 transition-colors duration-300 text-sm flex items-center gap-2 group">
                  <Phone className="h-4 w-4 group-hover:text-orange-500 transition-colors duration-300" />
                  <span className="relative">
                    +94 76 332 0184
                    <span className="absolute -bottom-px left-0 w-full h-px bg-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                  </span>
                </Link>
              </div>
              <Link href="#" className="text-gray-400 hover:text-orange-400 transition-colors duration-300 text-sm block mt-4">
                Responsible Disclosure Policy
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-orange-500/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-orange-500" />
              <p className="text-sm text-gray-400">
                © {new Date().getFullYear()} ALPHA NET. All rights reserved.
              </p>
            </div>
            <div className="flex items-center gap-6">
              <Link href="#" className="text-gray-400 hover:text-orange-400 transition-colors duration-300 text-sm">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-400 hover:text-orange-400 transition-colors duration-300 text-sm">
                Terms of Service
              </Link>
              <Link href="#" className="text-gray-400 hover:text-orange-400 transition-colors duration-300 text-sm">
                Cookie Policy
              </Link>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm text-gray-400">All systems operational</span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Corner Elements */}
      <div className="absolute top-0 left-0 w-32 h-32 border-l-2 border-t-2 border-orange-500/20"></div>
      <div className="absolute top-0 right-0 w-32 h-32 border-r-2 border-t-2 border-orange-500/20"></div>
      <div className="absolute bottom-0 left-0 w-32 h-32 border-l-2 border-b-2 border-orange-500/20"></div>
      <div className="absolute bottom-0 right-0 w-32 h-32 border-r-2 border-b-2 border-orange-500/20"></div>

      <style jsx>{`
        .bg-grid-pattern {
          background-image: radial-gradient(rgb(249 115 22 / 0.1) 1px, transparent 1px);
          background-size: 24px 24px;
        }
      `}</style>
    </footer>
  );
}
