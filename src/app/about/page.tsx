'use client';

import React from 'react';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { TbTarget, TbCertificate, TbBrain, TbRocket, TbWorld, TbShield, TbLock, TbBug, TbCode, TbShieldLock, TbPassword } from 'react-icons/tb';
import { FaGithub, FaFacebook, FaYoutube, FaWhatsapp, FaLinkedin, FaEnvelope, FaTwitter, FaDiscord } from 'react-icons/fa';
import { Button } from '@/components/ui/button';
import CapabilitiesBackground from '@/components/canvas/CapabilitiesBackground';
import CardBackground from '@/components/canvas/CardBackground';
import ManagementBackground from '@/components/canvas/ManagementBackground';
import MissionVisionBackground from '@/components/canvas/MissionVisionBackground';
import HeroBackground from '@/components/canvas/HeroBackground';
import ConnectBackground from '@/components/canvas/ConnectBackground';

const capabilities = [
  { icon: TbBrain, title: 'Advanced Security Research', description: 'Cutting-edge research in threat intelligence and vulnerability analysis' },
  { icon: TbTarget, title: 'Hands-on CTF Challenges', description: 'Real-world capture the flag challenges designed by industry experts' },
  { icon: TbWorld, title: 'Global Expert Network', description: 'Connect with cybersecurity professionals from around the world' },
  { icon: TbCertificate, title: 'Industry Certifications', description: 'Earn recognized certifications that advance your cybersecurity career' },
  { icon: TbRocket, title: 'Career Advancement', description: 'Structured learning paths designed for professional growth' },
  { icon: TbShield, title: 'Real-time Intelligence', description: 'Stay ahead with the latest security threats and defensive strategies' },
];



const researchStats = [
  { number: '50+', label: 'Publications', subtext: 'Peer-reviewed security research papers' },
  { number: '25+', label: 'CVE Discoveries', subtext: 'Critical vulnerabilities discovered and reported' },
  { number: '100+', label: 'Conference Talks', subtext: 'Presentations at global security conferences' },
  { number: '15+', label: 'Industry Awards', subtext: 'Recognitions for security research excellence' },
];

// Import fonts
import { Share_Tech_Mono } from 'next/font/google';
import { Orbitron } from 'next/font/google';

const techMono = Share_Tech_Mono({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

const orbitron = Orbitron({
  weight: ['400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  display: 'swap',
});

export default function AboutPage() {
  return (
    <div className="bg-[#0B1120] text-white w-full">
      <header className="min-h-screen flex items-center justify-center bg-[#0B1120] relative overflow-hidden">
        <HeroBackground />
        
        {/* Gradient Overlays */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-radial from-orange-500/5 via-transparent to-transparent"></div>
          <div className="absolute inset-0 bg-[url('/hero-hacker-bg.svg')] opacity-5 bg-center bg-no-repeat bg-cover mix-blend-overlay"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B1120] via-transparent to-[#0B1120]"></div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 container mx-auto px-4 py-24">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-center"
          >
            {/* Title Section */}
            <div className="relative mb-12">


              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className={`text-7xl font-black ${orbitron.className} relative`}
              >
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600">
                  ALPHA NET
                </span>
                <div className="absolute -inset-2 bg-orange-500/20 blur-xl opacity-50 group-hover:opacity-75 transition duration-500"></div>
              </motion.h1>

              {/* Decorative Lines */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-full max-w-3xl">
                <div className="absolute -top-4 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent"></div>
                <div className="absolute -bottom-4 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent"></div>
              </div>
            </div>

            {/* Logo Section */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="relative w-full h-[300px] mb-12 group"
            >
              <div className="absolute inset-0 bg-gradient-conic from-orange-500/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_transparent_45%,_#f97316_100%)] opacity-5"></div>
              <Image
                src="/alpha-logo2.png"
                alt="ALPHA NET Logo"
                fill
                className="object-contain transform group-hover:scale-105 transition-all duration-700 filter drop-shadow-[0_0_15px_rgba(249,115,22,0.3)]"
              />
              
              {/* Rotating Border Effect */}
              <div className="absolute inset-0 border-2 border-orange-500/20 rounded-full animate-[spin_20s_linear_infinite] opacity-50"></div>
              <div className="absolute inset-2 border-2 border-orange-500/10 rounded-full animate-[spin_25s_linear_infinite_reverse] opacity-30"></div>
            </motion.div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="relative max-w-4xl mx-auto"
            >
              <div className="absolute -inset-4 bg-orange-500/5 blur-xl rounded-xl"></div>
              <p className={`${techMono.className} text-2xl text-gray-300 leading-relaxed relative`}>
                A premier cybersecurity platform built by industry experts to empower professionals through 
                <span className="text-orange-400"> cutting-edge training</span>,
                <span className="text-orange-400"> advanced research</span>, and
                <span className="text-orange-400"> real-world challenges</span>.
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Decorative Corner Elements */}
        <div className="absolute top-0 left-0 w-32 h-32 border-l-2 border-t-2 border-orange-500/20"></div>
        <div className="absolute top-0 right-0 w-32 h-32 border-r-2 border-t-2 border-orange-500/20"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 border-l-2 border-b-2 border-orange-500/20"></div>
        <div className="absolute bottom-0 right-0 w-32 h-32 border-r-2 border-b-2 border-orange-500/20"></div>
      </header>

      <section className="relative min-h-screen bg-[#0B1120] overflow-hidden">
        <MissionVisionBackground />
        <div className="absolute inset-0 bg-gradient-conic from-orange-500/10 via-transparent to-transparent"></div>
        
        <div className="container mx-auto px-4 py-24">
          <div className="grid md:grid-cols-2 gap-8 items-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex flex-col items-start"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative group"
              >
                <div className="relative z-10 bg-gradient-to-br from-[#162137] to-[#0B1120] rounded-2xl p-8 shadow-2xl hover:shadow-orange-500/20 transition-all duration-500">
                  <div className="absolute inset-0 rounded-2xl">
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute inset-0 rounded-2xl border-2 border-orange-500/10 group-hover:border-orange-500/30 transition-colors duration-500"></div>
                    <div className="absolute top-0 left-0 w-32 h-1 bg-gradient-to-r from-orange-500/50 to-transparent"></div>
                    <div className="absolute bottom-0 right-0 w-32 h-1 bg-gradient-to-l from-orange-500/50 to-transparent"></div>
                    <div className="absolute left-0 top-0 h-32 w-1 bg-gradient-to-b from-orange-500/50 to-transparent"></div>
                    <div className="absolute right-0 bottom-0 h-32 w-1 bg-gradient-to-t from-orange-500/50 to-transparent"></div>
                  </div>
                  <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
                    <div className="relative">
                      <div className="absolute inset-0 bg-orange-500 rounded-full blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
                      <div className="bg-gradient-to-br from-[#1C2841] to-[#0B1120] p-4 rounded-full border-2 border-orange-500/30 group-hover:border-orange-500/50 transition-colors duration-500">
                        <motion.div
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 1, ease: "easeInOut" }}
                        >
                          <Image
                            src="/globe.svg"
                            alt="Mission Icon"
                            width={60}
                            height={60}
                            className="relative z-10"
                          />
                        </motion.div>
                      </div>
                    </div>
                  </div>
                  
                  <motion.h2 
                    className={`text-4xl font-bold text-center mt-8 mb-8 text-white relative mission-title ${techMono.className}`}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    Our Mission
                    <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent group-hover:w-32 transition-all duration-500"></div>
                  </motion.h2>
                  
                  <div className="space-y-6">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      className="relative"
                    >
                      <div className="bg-gradient-to-r from-orange-500/5 to-transparent p-6 rounded-lg border border-orange-500/10 hover:border-orange-500/30 transition-all duration-300">
                        <p className="text-gray-300 leading-relaxed">
                          At ALPHA NET, we&apos;re dedicated to closing the cybersecurity skills gap through innovative, hands-on education. We combine academic rigor with real-world threat intelligence to create the most effective training platform.
                        </p>
                        <div className="mt-4 text-xs text-orange-400/70 font-mono text-right">[ ALPHA NET MISSION PROTOCOL ]</div>
                      </div>
                      <div className="absolute -inset-px bg-gradient-to-r from-orange-500/20 to-transparent opacity-0 group-hover:opacity-10 rounded-lg transition-opacity duration-500"></div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="flex flex-col items-start"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative group"
              >
                <div className="relative z-10 bg-gradient-to-br from-[#162137] to-[#0B1120] rounded-2xl p-8 shadow-2xl hover:shadow-orange-500/20 transition-all duration-500">
                  <div className="absolute inset-0 rounded-2xl">
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute inset-0 rounded-2xl border-2 border-orange-500/10 group-hover:border-orange-500/30 transition-colors duration-500"></div>
                    <div className="absolute top-0 left-0 w-32 h-1 bg-gradient-to-r from-orange-500/50 to-transparent"></div>
                    <div className="absolute bottom-0 right-0 w-32 h-1 bg-gradient-to-l from-orange-500/50 to-transparent"></div>
                    <div className="absolute left-0 top-0 h-32 w-1 bg-gradient-to-b from-orange-500/50 to-transparent"></div>
                    <div className="absolute right-0 bottom-0 h-32 w-1 bg-gradient-to-t from-orange-500/50 to-transparent"></div>
                  </div>
                  <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
                    <div className="relative">
                      <div className="absolute inset-0 bg-orange-500 rounded-full blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
                      <div className="bg-gradient-to-br from-[#1C2841] to-[#0B1120] p-4 rounded-full border-2 border-orange-500/30 group-hover:border-orange-500/50 transition-colors duration-500">
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.3 }}
                        >
                          <Image
                            src="/window.svg"
                            alt="Vision Icon"
                            width={60}
                            height={60}
                            className="relative z-10"
                          />
                        </motion.div>
                      </div>
                    </div>
                  </div>
                  
                  <motion.h2 
                    className={`text-4xl font-bold text-center mt-8 mb-8 text-white relative vision-title ${techMono.className}`}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    Our Vision
                    <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent group-hover:w-32 transition-all duration-500"></div>
                  </motion.h2>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="relative"
                  >
                    <div className="bg-gradient-to-r from-orange-500/5 to-transparent p-6 rounded-lg border border-orange-500/10 hover:border-orange-500/30 transition-all duration-300">
                      <p className="text-gray-300 leading-relaxed">
                        To establish a global cybersecurity ecosystem where knowledge sharing, practical skills development, and cutting-edge research converge to create the next generation of security leaders.
                      </p>
                      <div className="mt-4 text-xs text-orange-400/70 font-mono text-right">[ ALPHA NET VISION PROTOCOL ]</div>
                    </div>
                    <div className="absolute -inset-px bg-gradient-to-r from-orange-500/20 to-transparent opacity-0 group-hover:opacity-10 rounded-lg transition-opacity duration-500"></div>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Tech Slider Section */}
          <div className="mt-24 mb-8 relative overflow-hidden">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              {/* Title Section */}
              <div className="text-center mb-12 relative">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent"></div>
                <h2 className={`text-3xl uppercase tracking-[0.2em] ${techMono.className} font-bold relative inline-block my-6`}>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-400 relative z-10">
                    Core Technologies
                  </span>
                  <div className="absolute -top-4 left-0 w-full text-[0.6rem] text-orange-500/70 tracking-[0.3em] overflow-hidden">
                    &lt;SYSTEM_COMPONENTS&gt;
                  </div>
                  <div className="absolute -bottom-4 right-0 w-full text-[0.6rem] text-orange-500/70 tracking-[0.3em] overflow-hidden text-right">
                    &lt;/SYSTEM_COMPONENTS&gt;
                  </div>
                </h2>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent"></div>
              </div>

              {/* Border Decorations */}
              <div className="relative">
                {/* Top Border */}
                <div className="absolute -top-6 left-0 w-full h-12 flex items-center justify-between px-8">
                  <div className="w-32 h-px bg-gradient-to-r from-orange-500 to-transparent"></div>
                  <div className="h-full flex items-center">
                    <div className="w-2 h-2 bg-orange-500 transform rotate-45"></div>
                  </div>
                  <div className="w-32 h-px bg-gradient-to-l from-orange-500 to-transparent"></div>
                </div>

                {/* Bottom Border */}
                <div className="absolute -bottom-6 left-0 w-full h-12 flex items-center justify-between px-8">
                  <div className="w-32 h-px bg-gradient-to-r from-orange-500 to-transparent"></div>
                  <div className="h-full flex items-center">
                    <div className="w-2 h-2 bg-orange-500 transform rotate-45"></div>
                  </div>
                  <div className="w-32 h-px bg-gradient-to-l from-orange-500 to-transparent"></div>
                </div>

                {/* Side Gradients */}
                <div className="absolute left-0 top-1/2 w-20 h-1/2 bg-gradient-to-r from-[#0B1120] to-transparent z-20"></div>
                <div className="absolute right-0 top-1/2 w-20 h-1/2 bg-gradient-to-l from-[#0B1120] to-transparent z-20"></div>
              
                {/* Container for infinite scroll */}
                <div className="flex space-x-8 animate-scroll py-8 relative">
                  {/* First set of items */}
                  {[
                    { 
                      icon: <TbLock className="text-3xl" />,
                      name: "HashCat",
                      type: "Crypto",
                      color: "from-purple-500/20 to-purple-600/20"
                    },
                    { 
                      icon: <TbBug className="text-3xl" />,
                      name: "Burp Suite",
                      type: "Web Sec",
                      color: "from-blue-500/20 to-blue-600/20"
                    },
                    { 
                      icon: <TbCode className="text-3xl" />,
                      name: "Ghidra",
                      type: "RE",
                      color: "from-green-500/20 to-green-600/20"
                    },
                    { 
                      icon: <TbShieldLock className="text-3xl" />,
                      name: "Snort",
                      type: "IDS",
                      color: "from-red-500/20 to-red-600/20"
                    },
                    { 
                      icon: <TbPassword className="text-3xl" />,
                      name: "John",
                      type: "Password",
                      color: "from-yellow-500/20 to-yellow-600/20"
                    }
                  ].map((tool, idx) => (
                    <motion.div
                      key={idx}
                      className="flex-none group"
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className={`bg-gradient-to-br from-[#162137] to-[#0B1120] px-6 py-4 rounded-lg border border-orange-500/10 group-hover:border-orange-500/30 transition-all duration-300 relative overflow-hidden`}>
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className={`absolute inset-0 bg-gradient-to-br ${tool.color}`}></div>
                        </div>
                        <div className="flex items-center space-x-4 relative z-10">
                          <div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center group-hover:bg-orange-500/20 transition-colors duration-300">
                            <div className="text-orange-400 group-hover:text-orange-300 transition-colors duration-300">
                              {tool.icon}
                            </div>
                          </div>
                          <div>
                            <p className={`text-orange-400 font-bold ${techMono.className} group-hover:text-orange-300 transition-colors duration-300`}>
                              {tool.name}
                            </p>
                            <p className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                              {tool.type}
                            </p>
                          </div>
                        </div>
                        <div className="absolute -bottom-px left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                      </div>
                    </motion.div>
                  ))}
                  {/* Duplicate set for seamless loop */}
                  {[
                    { 
                      icon: <TbLock className="text-3xl" />,
                      name: "HashCat",
                      type: "Crypto",
                      color: "from-purple-500/20 to-purple-600/20"
                    },
                    { 
                      icon: <TbBug className="text-3xl" />,
                      name: "Burp Suite",
                      type: "Web Sec",
                      color: "from-blue-500/20 to-blue-600/20"
                    },
                    { 
                      icon: <TbCode className="text-3xl" />,
                      name: "Ghidra",
                      type: "RE",
                      color: "from-green-500/20 to-green-600/20"
                    },
                    { 
                      icon: <TbShieldLock className="text-3xl" />,
                      name: "Snort",
                      type: "IDS",
                      color: "from-red-500/20 to-red-600/20"
                    },
                    { 
                      icon: <TbPassword className="text-3xl" />,
                      name: "John",
                      type: "Password",
                      color: "from-yellow-500/20 to-yellow-600/20"
                    }
                  ].map((tool, idx) => (
                    <motion.div
                      key={`duplicate-${idx}`}
                      className="flex-none group"
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className={`bg-gradient-to-br from-[#162137] to-[#0B1120] px-6 py-4 rounded-lg border border-orange-500/10 group-hover:border-orange-500/30 transition-all duration-300 relative overflow-hidden`}>
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className={`absolute inset-0 bg-gradient-to-br ${tool.color}`}></div>
                        </div>
                        <div className="flex items-center space-x-4 relative z-10">
                          <div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center group-hover:bg-orange-500/20 transition-colors duration-300">
                            <div className="text-orange-400 group-hover:text-orange-300 transition-colors duration-300">
                              {tool.icon}
                            </div>
                          </div>
                          <div>
                            <p className={`text-orange-400 font-bold ${techMono.className} group-hover:text-orange-300 transition-colors duration-300`}>
                              {tool.name}
                            </p>
                            <p className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                              {tool.type}
                            </p>
                          </div>
                        </div>
                        <div className="absolute -bottom-px left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                      </div>
                    </motion.div>
                  ))}
                </div>
                
                {/* Ambient Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-orange-500/5 to-transparent pointer-events-none"></div>
              </div>

              {/* Corner Decorations */}
              <div className="absolute -left-2 top-1/2 transform -translate-y-1/2">
                <div className="w-1 h-16 bg-gradient-to-b from-orange-500/50 to-transparent"></div>
              </div>
              <div className="absolute -right-2 top-1/2 transform -translate-y-1/2">
                <div className="w-1 h-16 bg-gradient-to-b from-orange-500/50 to-transparent"></div>
              </div>
            </motion.div>
          </div>
        </div>

        <style jsx>{`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }

          .animate-scroll {
            animation: scroll 20s linear infinite;
            display: flex;
            width: max-content;
            will-change: transform;
          }

          .animate-scroll > div {
            flex-shrink: 0;
          }

          .animate-scroll:hover {
            animation-play-state: paused;
          }

          @media (prefers-reduced-motion: reduce) {
            .animate-scroll {
              animation: none;
            }
          }
          .bg-grid-pattern {
            background-image: radial-gradient(rgb(0 0 0 / 0.1) 1px, transparent 1px);
            background-size: 24px 24px;
          }

          .platform-title {
            text-shadow: 2px 2px 0px #fb923c,
                        -2px -2px 0px #c2410c;
            letter-spacing: 0.2em;
            position: relative;
          }

          .platform-title::before,
          .platform-title::after {
            content: 'Platform Capabilities';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: transparent;
          }

          .platform-title::before {
            left: 2px;
            text-shadow: -2px 0 #fb923c;
            animation: glitch-1 2s infinite linear alternate-reverse;
          }

          .platform-title::after {
            left: -2px;
            text-shadow: 2px 0 #c2410c;
            animation: glitch-2 3s infinite linear alternate-reverse;
          }

          @keyframes glitch-1 {
            0%, 100% { clip-path: inset(50% 0 30% 0); }
            20% { clip-path: inset(20% 0 60% 0); }
            40% { clip-path: inset(40% 0 40% 0); }
            60% { clip-path: inset(70% 0 10% 0); }
            80% { clip-path: inset(10% 0 70% 0); }
          }

          @keyframes glitch-2 {
            0%, 100% { clip-path: inset(30% 0 50% 0); }
            20% { clip-path: inset(60% 0 20% 0); }
            40% { clip-path: inset(40% 0 40% 0); }
            60% { clip-path: inset(10% 0 70% 0); }
            80% { clip-path: inset(70% 0 10% 0); }
          }

          .security-team-title {
            background: linear-gradient(to right, #f97316, #fb923c);
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
            text-shadow: 
              3px 3px 0px rgba(251, 146, 60, 0.2),
              -3px -3px 0px rgba(194, 65, 12, 0.2);
            position: relative;
            letter-spacing: 0.15em;
          }

          .security-team-title::before {
            content: '';
            position: absolute;
            top: -2px;
            left: -2px;
            right: -2px;
            bottom: -2px;
            background: linear-gradient(45deg, 
              rgba(251, 146, 60, 0.1) 0%,
              rgba(251, 146, 60, 0) 100%
            );
            z-index: -1;
            filter: blur(8px);
          }

          .security-team-title::after {
            content: 'ALPHA FORCE';
            position: absolute;
            top: -0.5em;
            left: 50%;
            transform: translateX(-50%);
            font-size: 0.2em;
            color: #f97316;
            letter-spacing: 0.5em;
            text-shadow: none;
            opacity: 0.7;
          }

          .management-title {
            background: linear-gradient(45deg, #f97316, #fb923c);
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
            text-shadow: 
              2px 2px 0px rgba(251, 146, 60, 0.2),
              -2px -2px 0px rgba(194, 65, 12, 0.2);
            position: relative;
          }

          .management-title::before {
            content: '<ALPHA_ELITE>';
            position: absolute;
            top: -1.5em;
            left: 50%;
            transform: translateX(-50%);
            font-size: 0.2em;
            color: #f97316;
            letter-spacing: 0.5em;
            text-shadow: none;
            opacity: 0.7;
          }

          .management-title::after {
            content: '';
            position: absolute;
            bottom: -0.5em;
            left: 50%;
            transform: translateX(-50%);
            width: 60px;
            height: 2px;
            background: linear-gradient(90deg, 
              transparent 0%,
              #f97316 50%,
              transparent 100%
            );
          }

          .about-title {
            background: linear-gradient(45deg, #f97316, #fb923c);
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
            text-shadow: 
              3px 3px 0px rgba(251, 146, 60, 0.2),
              -3px -3px 0px rgba(194, 65, 12, 0.2);
            position: relative;
          }

          .about-title::before {
            content: '[ SYSTEM INITIALIZED ]';
            position: absolute;
            top: -1em;
            left: 50%;
            transform: translateX(-50%);
            font-size: 0.2em;
            color: #f97316;
            letter-spacing: 0.5em;
            text-shadow: none;
            opacity: 0.7;
          }

          .mission-title, .vision-title {
            text-shadow: 0 0 10px rgba(249, 115, 22, 0.3);
            position: relative;
          }

          @keyframes pulse-glow {
            0%, 100% { text-shadow: 0 0 10px rgba(249, 115, 22, 0.3); }
            50% { text-shadow: 0 0 20px rgba(249, 115, 22, 0.5); }
          }

          .vision-title, .mission-title {
            animation: pulse-glow 3s infinite;
          }

          .bg-grid-pattern {
            background-size: 30px 30px;
            background-image: 
              linear-gradient(to right, rgba(249, 115, 22, 0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(249, 115, 22, 0.1) 1px, transparent 1px);
          }
        `}</style>
      </section>


      <section className="py-12 bg-gradient-to-b from-[#1C2841] to-[#0B1120] relative">
        <CapabilitiesBackground />
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="glitch-container relative mb-12">
            <h2 className={`text-4xl text-center text-orange-400 uppercase tracking-wider platform-title ${techMono.className}`}>
              Platform Capabilities
            </h2>
            <div className="glitch-effect"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="relative group overflow-hidden hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-[#162137] to-[#0B1120] border-[#2A3A5A] hover:border-orange-500/50">
                  <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity">
                    <Image
                      src={`/capabilities/sss.png`}
                      alt={capability.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120] via-transparent to-transparent"></div>
                  </div>
                  <div className="relative p-6">
                    <div className="flex items-center justify-between mb-4">
                      <capability.icon className="w-12 h-12 text-orange-400" />
                      <div className="h-8 w-8 rounded-full bg-orange-500/20 flex items-center justify-center">
                        <span className="text-orange-400 text-sm font-bold">0{index + 1}</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-orange-400 transition-colors">{capability.title}</h3>
                    <p className="text-gray-300">{capability.description}</p>
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500/0 via-orange-500/50 to-orange-500/0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      <section className="py-12 bg-gradient-to-b from-[#0B1120] to-[#162137]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="glitch-container relative mb-16">
            <h2 className={`text-5xl text-center uppercase tracking-widest security-team-title ${techMono.className} font-bold`}>
              Security Research Team
            </h2>
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Patta ALPHA */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="group"
            >
              <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-br from-[#162137] to-[#0B1120] border-[#2A3A5A] hover:border-orange-500/50 relative">
                <CardBackground />
                <div className="relative z-10 p-6">
                  <div className="flex justify-center mb-6">
                    <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-orange-500 shadow-lg">
                      <Image
                        src="/Alpha-bg.jpg"
                        alt="Patta ALPHA"
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                  </div>
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold mb-2 text-white">Lakshitha Perera</h3>
                    <p className="text-orange-400 font-semibold mb-2">Chairman/Founder of ALPHA Network</p>
                    <p className="text-gray-300 mb-4 font-mono text-sm">Beng(Hons) in Network Security & Cloud Computing | CISSP | CEH | CCNA | CRTA | MCBTA | CFFA | CFJD | CC</p>
                  </div>
                  <div className="grid grid-cols-2 gap-2 mb-6">
                    {['Network Security', 'Active DIrectory', 'Web Security', 'Penetration Testing'].map((skill, idx) => (
                      <Badge key={idx} variant="secondary" className="bg-orange-900/30 text-orange-400 justify-center border border-orange-500/20">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                  <blockquote className="border-l-4 border-orange-500 pl-4 italic text-gray-300">
                    &ldquo;Be The Person No One Can Ever Be&rdquo;
                  </blockquote>
                </div>
              </Card>
            </motion.div>

            {/* Patta Shenal */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="group"
            >
              <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-br from-[#162137] to-[#0B1120] border-[#2A3A5A] hover:border-orange-500/50 relative">
                <CardBackground />
                <div className="relative z-10 p-6">
                  <div className="flex justify-center mb-6">
                    <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-orange-500 shadow-lg">
                      <Image
                        src="/patta4.jpg"
                        alt="Patta Shenal"
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                  </div>
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold mb-2 text-white">Kavish Shenal</h3>
                    <p className="text-orange-400 font-semibold mb-2">CEO & Senior CTF Engineer</p>
                    <p className="text-gray-300 mb-4 font-mono text-sm">Beng(Hons) in Network Security & Cloud Computing | Jr.Pentester | CC | CEH(cisco) | CCNT | CRTA</p>
                  </div>
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    {['Cloud Security', 'Forensics' , 'Networking', 'Mobile Security'].map((skill, idx) => (
                      <Badge key={idx} variant="secondary" className="bg-orange-900/30 text-orange-400 justify-center border border-orange-500/20">
                        {skill}
                      </Badge>
                    ))}
                    
                  </div>
                  <blockquote className="border-l-4 border-orange-500 pl-4 italic text-gray-300">
                    &ldquo;Your Mindset will Be the Entrypoint for Cyber Security&rdquo;
                  </blockquote>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Senior Management Section */}
      <section className="py-16 bg-gradient-to-b from-[#162137] to-[#0B1120] relative overflow-hidden">
        <ManagementBackground />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="glitch-container relative mb-8">
              <h2 className={`text-5xl uppercase tracking-widest management-title ${techMono.className} font-bold`}>
                Our Senior Management
              </h2>
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent"></div>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <p className={`text-gray-300 text-lg max-w-2xl mx-auto ${techMono.className} tracking-wide`}>
                Meet the exceptional leaders driving innovation and excellence in cybersecurity
              </p>
            </motion.div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              {
                name: "Sanjula Kahandawa",
                role: "Chief Operational Officer",
                image: "/eeeee.jpg",
                expertise: "networking",
                certifications: "CC | CRT-ID | Jr.Pentester | CCNT | Beng(Hons) in Network Security & Cloud Computing London Met(UK)"
              },
              {
                name: "Sethum Ranathunga",
                role: "Chief Technology Officer",
                image: "/djsethum.jpg",
                expertise: "Linux & Hardware",
                certifications: "Beng(Hons) in Network Security & Cloud Computing London Met(UK) | Dip In IT | CRT-ID"
              },
              {
                name: "Manisha Dilshan",
                role: "Senior CTF Engineer",
                image: "/djmaniza.jpg",
                expertise: "Web & Network Security",
                certifications: "CISSP | CCNA | HOF In SL CERT & Indian Gov | Hnd in Cyber Security & Ethical Hacking"
              },
              {
                name: "Shalitha Maduwantha",
                role: "Senior CTF Engineer",
                image: "/sec.jpg",
                expertise: "Active Directory & Web Application",
                certifications: "BICT (Hons), UG, RUSL | MLSA β | AZ-900 | Dip. Cyber Sec (ABE UK) | CNSP"
              },
              {
                name: "Pavani Kariyawasam",
                role: "Head of Digital Marketing",
                image: "/dddd.jpg",
                expertise: "IT & Content Creating",
                certifications: "Bsc(Hons) in Sofware Engineering London Met(UK) | Dip in IT | IELTS"
              }
            ].map((member, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Card className="overflow-hidden h-full bg-gradient-to-br from-[#162137] to-[#0B1120] hover:shadow-xl transition-all duration-300 border-[#2A3A5A] hover:border-orange-500/50">
                  <div className="p-4">
                    <div className="relative w-full pt-[100%] overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-orange-600/20 opacity-30 group-hover:opacity-70 transition-all duration-500" />
                      <div className="absolute inset-0 border-2 border-orange-500/0 group-hover:border-orange-500/50 transition-all duration-500" />
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover transition-all duration-500 transform group-hover:scale-105"
                      />
                    </div>
                    <div className="text-center">
                      <h3 className="font-semibold text-lg mb-1 text-white">{member.name}</h3>
                      <p className="text-orange-400 text-sm mb-2">{member.role}</p>
                      <Badge variant="secondary" className="mb-2 bg-orange-900/30 text-orange-400 border border-orange-500/20">
                        {member.expertise}
                      </Badge>
                      <p className="text-xs text-gray-300 font-mono mt-2">{member.certifications}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12 text-center"
          >
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-[#162137] to-[#0B1120] relative overflow-hidden">
        {/* Ambient Background Effects */}
        <div className="absolute inset-0 bg-gradient-conic from-orange-500/10 via-transparent to-orange-500/10"></div>
        <div className="absolute inset-0 bg-[url('/hero-hacker-bg.svg')] opacity-5 mix-blend-overlay"></div>
        
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          {/* Section Title */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16 relative"
          >
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent"></div>
            <h2 className={`text-4xl font-bold ${techMono.className} relative inline-block`}>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-500">
                Research Impact
              </span>
              
            </h2>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent"></div>
          </motion.div>

          {/* Stats Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {researchStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                <div className="relative z-10 bg-gradient-to-br from-[#162137] to-[#0B1120] rounded-lg p-6 border border-orange-500/10 group-hover:border-orange-500/30 transition-colors duration-300">
                  {/* Top Border Gradient */}
                  <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                  
                  {/* Corner Decorations */}
                  <div className="absolute top-0 left-0 w-8 h-8">
                    <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-orange-500/50 to-transparent transform origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-300"></div>
                    <div className="absolute top-0 left-0 h-2 w-full bg-gradient-to-r from-orange-500/50 to-transparent transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                  </div>
                  
                  <div className="absolute bottom-0 right-0 w-8 h-8">
                    <div className="absolute bottom-0 right-0 w-2 h-full bg-gradient-to-t from-orange-500/50 to-transparent transform origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-300"></div>
                    <div className="absolute bottom-0 right-0 h-2 w-full bg-gradient-to-l from-orange-500/50 to-transparent transform origin-right scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                  </div>

                  {/* Number with animated counting */}
                  <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center justify-center mb-4"
                  >
                    <div className="relative">
                      <div className="absolute -inset-4 bg-orange-500 rounded-full blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                      <h3 className={`text-5xl font-bold ${orbitron.className} text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-500 group-hover:to-orange-400 transition-colors duration-300`}>
                        {stat.number}
                      </h3>
                    </div>
                  </motion.div>

                  {/* Label and Description */}
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                  >
                    <p className={`text-xl font-semibold mb-2 text-white group-hover:text-orange-400 transition-colors duration-300 ${techMono.className}`}>
                      {stat.label}
                    </p>
                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 text-sm">
                      {stat.subtext}
                    </p>
                  </motion.div>

                  {/* Bottom Decorative Line */}
                  <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Connect With Us / Social Media Section */}
      <section className="py-24 bg-gradient-to-b from-[#0B1120] to-[#162137] text-white relative overflow-hidden">
        {/* Interactive Background Canvas */}
        <ConnectBackground />
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-conic from-orange-500/10 via-transparent to-orange-500/10"></div>
        <div className="absolute inset-0 bg-[url('/hero-hacker-bg.svg')] opacity-5 mix-blend-overlay"></div>
        
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 relative"
          >
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent"></div>
            <h2 className={`text-3xl ${techMono.className} relative inline-block`}>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-500">
                Connect With Us
              </span>
            </h2>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-wrap justify-center gap-6"
          >
            {[
              { icon: FaGithub, label: 'GitHub', href: '#', color: 'from-gray-600 to-gray-700' },
              { icon: FaFacebook, label: 'Facebook', href: '#', color: 'from-blue-600 to-blue-700' },
              { icon: FaYoutube, label: 'YouTube', href: '#', color: 'from-red-600 to-red-700' },
              { icon: FaWhatsapp, label: 'WhatsApp', href: '#', color: 'from-green-600 to-green-700' },
              { icon: FaLinkedin, label: 'LinkedIn', href: '#', color: 'from-blue-500 to-blue-600' },
              { icon: FaEnvelope, label: 'Email', href: '#', color: 'from-orange-500 to-orange-600' },
              { icon: FaTwitter, label: 'Twitter', href: '#', color: 'from-blue-400 to-blue-500' },
              { icon: FaDiscord, label: 'Discord', href: '#', color: 'from-indigo-500 to-indigo-600' },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
                whileHover={{ y: -5 }}
              >
                <div className="relative">
                  {/* Card Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${social.color} opacity-20 group-hover:opacity-30 rounded-xl transition-all duration-300`}></div>
                  
                  {/* Main Content */}
                  <div className="relative bg-[#162137] border border-orange-500/10 group-hover:border-orange-500/30 rounded-xl p-4 transition-all duration-300">
                    {/* Icon Container */}
                    <div className="relative w-12 h-12 mx-auto mb-2">
                      {/* Glowing Background */}
                      <div className={`absolute inset-0 bg-gradient-to-r ${social.color} opacity-20 group-hover:opacity-40 blur-lg transition-opacity duration-300`}></div>
                      
                      {/* Icon */}
                      <div className="relative z-10 w-full h-full rounded-lg bg-[#0B1120]/50 flex items-center justify-center group-hover:bg-[#0B1120]/30 transition-all duration-300">
                        {React.createElement(social.icon, {
                          className: "text-2xl text-orange-400 group-hover:text-orange-300 transition-colors duration-300"
                        })}
                      </div>
                    </div>

                    {/* Label */}
                    <p className={`${techMono.className} text-sm text-orange-400 group-hover:text-orange-300 transition-colors duration-300`}>
                      {social.label}
                    </p>

                    {/* Animated Borders */}
                    <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                    <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                    <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-transparent via-orange-500 to-transparent transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500"></div>
                    <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-orange-500 to-transparent transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500"></div>
                  </div>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-32 h-32 border-l-2 border-t-2 border-orange-500/20"></div>
        <div className="absolute top-0 right-0 w-32 h-32 border-r-2 border-t-2 border-orange-500/20"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 border-l-2 border-b-2 border-orange-500/20"></div>
        <div className="absolute bottom-0 right-0 w-32 h-32 border-r-2 border-b-2 border-orange-500/20"></div>
      </section>

      {/* Contact Form Section */}
      <section className="py-24 bg-gradient-to-b from-[#162137] to-[#0B1120] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-conic from-orange-500/10 via-transparent to-orange-500/10"></div>
        <div className="absolute inset-0 bg-[url('/hero-hacker-bg.svg')] opacity-5 mix-blend-overlay"></div>

        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className={`text-4xl font-bold ${techMono.className} relative inline-block`}>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-500">
                Send Us a Message
              </span>
              
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-orange-500/20 via-transparent to-orange-500/20 rounded-lg blur"></div>
            <div className="relative bg-gradient-to-br from-[#162137] to-[#0B1120] rounded-lg p-8 border border-orange-500/20">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Name Field */}
                  <div className="relative group">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500/50 to-orange-600/50 rounded opacity-0 group-hover:opacity-10 transition duration-300"></div>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full bg-[#0B1120] border border-orange-500/20 rounded px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 transition duration-300"
                    />
                    <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                  </div>

                  {/* Email Field */}
                  <div className="relative group">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500/50 to-orange-600/50 rounded opacity-0 group-hover:opacity-10 transition duration-300"></div>
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="w-full bg-[#0B1120] border border-orange-500/20 rounded px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 transition duration-300"
                    />
                    <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                  </div>
                </div>

                {/* Subject Field */}
                <div className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500/50 to-orange-600/50 rounded opacity-0 group-hover:opacity-10 transition duration-300"></div>
                  <input
                    type="text"
                    placeholder="Subject"
                    className="w-full bg-[#0B1120] border border-orange-500/20 rounded px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 transition duration-300"
                  />
                  <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                </div>

                {/* Message Field */}
                <div className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500/50 to-orange-600/50 rounded opacity-0 group-hover:opacity-10 transition duration-300"></div>
                  <textarea
                    rows={6}
                    placeholder="Your Message"
                    className="w-full bg-[#0B1120] border border-orange-500/20 rounded px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 transition duration-300 resize-none"
                  ></textarea>
                  <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                </div>

                {/* Submit Button */}
                <motion.div
                  className="flex justify-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <button
                    type="submit"
                    className="group relative px-8 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg overflow-hidden transition duration-300 hover:from-orange-600 hover:to-orange-700"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                    <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                    <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                    <span className={`relative z-10 ${techMono.className}`}>Send Message</span>
                    <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-transparent via-white to-transparent transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500"></div>
                    <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-white to-transparent transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500"></div>
                  </button>
                </motion.div>
              </form>

              {/* Additional Features */}
              <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
               
                
                
              </div>
            </div>
          </motion.div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-500/20 to-transparent"></div>
        <div className="absolute top-0 left-0 w-32 h-32 border-l-2 border-t-2 border-orange-500/20"></div>
        <div className="absolute top-0 right-0 w-32 h-32 border-r-2 border-t-2 border-orange-500/20"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 border-l-2 border-b-2 border-orange-500/20"></div>
        <div className="absolute bottom-0 right-0 w-32 h-32 border-r-2 border-b-2 border-orange-500/20"></div>
      </section>
     
    </div>
  );
}
