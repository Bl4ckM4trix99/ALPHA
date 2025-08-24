'use client';

import { Award, Star, Trophy, Medal, Target, Shield } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import { Share_Tech_Mono, Orbitron } from 'next/font/google';
import AchievementsBackground from '@/components/canvas/AchievementsBackground';

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

const achievements = [
  {
    title: '1st Place - National CTF 2024',
    description: 'Secured the top position against 50+ teams nationwide.',
    icon: <Trophy className="h-8 w-8 text-orange-400" />,
    badge: 'National Champions',
    stats: ['50+ Teams', '48 Hours', '1st Place'],
  },
  {
    title: 'Top 5% - Global Cyber Challenge',
    description: 'Ranked among the elite in a 48-hour international competition.',
    icon: <Star className="h-8 w-8 text-orange-400" />,
    badge: 'Elite',
    stats: ['1000+ Teams', 'Global Event', 'Top 5%'],
  },
  {
    title: 'Most Innovative Solution',
    description: 'Awarded for a unique approach to a complex crypto challenge.',
    icon: <Award className="h-8 w-8 text-orange-400" />,
    badge: 'Innovation',
    stats: ['Unique Approach', 'Crypto Challenge', 'Special Award'],
  },
  {
    title: 'Perfect Score - Forensics Round',
    description: 'Achieved maximum points in the digital forensics category.',
    icon: <Medal className="h-8 w-8 text-orange-400" />,
    badge: 'Flawless Victory',
    stats: ['100% Score', 'Forensics', 'Perfect Run'],
  },
  {
    title: 'Advanced Persistence Award',
    description: 'Recognition for exceptional performance in APT analysis.',
    icon: <Target className="h-8 w-8 text-orange-400" />,
    badge: 'APT Expert',
    stats: ['Threat Analysis', 'APT Detection', 'Expert Level'],
  },
  {
    title: 'Security Research Excellence',
    description: 'Contributed significant findings to vulnerability research.',
    icon: <Shield className="h-8 w-8 text-orange-400" />,
    badge: 'Research Elite',
    stats: ['CVE Discovery', 'Zero-day Research', 'Published Work'],
  }
];

export default function AchievementsPage() {
  return (
    <div className="min-h-screen bg-[#0B1120] relative">
      <AchievementsBackground />
      
      {/* Gradient Overlays */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-radial from-orange-500/5 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-[url('/hero-hacker-bg.svg')] opacity-5 bg-center bg-no-repeat bg-cover mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B1120] via-transparent to-[#0B1120]"></div>
      </div>

      <motion.div 
        className="relative z-10 container mx-auto px-4 py-24"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.header 
          className="text-center mb-20"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative inline-block">
            <motion.h1 
              className={`text-6xl font-bold tracking-tight ${orbitron.className} mb-6`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-500">
                Our Achievements
              </span>
            </motion.h1>
            <div className="absolute -bottom-2 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent"></div>
          </div>
          <motion.p 
            className={`mt-6 text-xl text-gray-300 max-w-3xl mx-auto ${techMono.className}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            A testament to our excellence and innovation in the cybersecurity arena,
            showcasing our commitment to pushing boundaries and achieving greatness.
          </motion.p>
        </motion.header>

        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {achievements.map((ach, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 50,
                  damping: 15
                }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.15,
                    type: "spring",
                    stiffness: 100
                  }}
                  className="relative group"
                >
                  <div className="absolute -inset-4 bg-orange-500 rounded-xl blur-xl opacity-10 group-hover:opacity-20 transition duration-700"></div>
                  <motion.div 
                    className="relative bg-gradient-to-br from-[#162137] to-[#0B1120] p-6 rounded-xl border border-orange-500/10 group-hover:border-orange-500/30 transition-all duration-500 transform preserve-3d hover:-translate-y-2 hover:shadow-2xl hover:shadow-orange-500/20 h-[400px] flex flex-col"
                    whileHover={{
                      rotateX: 5,
                      rotateY: 5,
                    }}
                    style={{
                      transformStyle: "preserve-3d",
                    }}
                  >
                    <div className="flex flex-col h-full">
                      {/* Icon Section */}
                      <div className="relative mb-4">
                        <div className="w-12 h-12 rounded-lg bg-orange-500/10 flex items-center justify-center group-hover:bg-orange-500/20 transition-all duration-300">
                          {ach.icon}
                        </div>
                        <div className="absolute -inset-4 bg-orange-500/20 filter blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-full"></div>
                      </div>

                      {/* Title and Description */}
                      <div className="mb-auto">
                        <h3 className={`text-xl font-bold text-white mb-2 group-hover:text-orange-400 transition-all duration-300 transform group-hover:translate-x-1 ${techMono.className}`}>
                          {ach.title}
                        </h3>
                        <p className="text-gray-300 group-hover:text-gray-200 line-clamp-3">{ach.description}</p>
                      </div>
                      
                      {/* Stats and Badge Section */}
                      <div className="mt-4">
                        <div className="grid grid-cols-3 gap-2 mb-4">
                          {ach.stats.map((stat, idx) => (
                            <div 
                              key={idx} 
                              className="bg-orange-500/5 rounded-lg p-2 group-hover:bg-orange-500/10 transition-all duration-300"
                            >
                              <p className={`text-sm text-orange-400 ${techMono.className}`}>{stat}</p>
                            </div>
                          ))}
                        </div>
                        
                        <Badge 
                          variant="outline" 
                          className="border-orange-500/30 text-orange-400 group-hover:border-orange-500/50 transition-all duration-300"
                        >
                          {ach.badge}
                        </Badge>
                      </div>
                    </div>

                    {/* Corner Decorations */}
                    <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-orange-500/30 rounded-tl-lg transition-all duration-300 group-hover:border-orange-500/60 group-hover:w-12 group-hover:h-12"></div>
                    <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-orange-500/30 rounded-tr-lg transition-all duration-300 group-hover:border-orange-500/60 group-hover:w-12 group-hover:h-12"></div>
                    <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-orange-500/30 rounded-bl-lg transition-all duration-300 group-hover:border-orange-500/60 group-hover:w-12 group-hover:h-12"></div>
                    <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-orange-500/30 rounded-br-lg transition-all duration-300 group-hover:border-orange-500/60 group-hover:w-12 group-hover:h-12"></div>
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Future Challenges Section */}
        <motion.section
          className="mt-32"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <h2 className={`text-4xl font-bold ${orbitron.className} mb-6`}>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-500">
                Future Challenges
              </span>
            </h2>
            <div className="h-px w-32 mx-auto bg-gradient-to-r from-transparent via-orange-500 to-transparent"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              className="relative group"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
            >
              <div className="absolute -inset-4 bg-orange-500 rounded-xl blur-xl opacity-10 group-hover:opacity-20 transition duration-700"></div>
              <div className="relative bg-gradient-to-br from-[#162137] to-[#0B1120] p-8 rounded-xl border border-orange-500/10 group-hover:border-orange-500/30 transition-all duration-500">
                <h3 className={`text-2xl font-bold text-orange-400 mb-4 ${techMono.className}`}>Upcoming Competitions</h3>
                <ul className="space-y-4">
                  <li className="flex items-center text-gray-300">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                    Global CTF Championship 2026
                  </li>
                  <li className="flex items-center text-gray-300">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                    Advanced Threat Hunting Series
                  </li>
                  <li className="flex items-center text-gray-300">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                    International Defense League
                  </li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              className="relative group"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.6 }}
            >
              <div className="absolute -inset-4 bg-orange-500 rounded-xl blur-xl opacity-10 group-hover:opacity-20 transition duration-700"></div>
              <div className="relative bg-gradient-to-br from-[#162137] to-[#0B1120] p-8 rounded-xl border border-orange-500/10 group-hover:border-orange-500/30 transition-all duration-500">
                <h3 className={`text-2xl font-bold text-orange-400 mb-4 ${techMono.className}`}>Training Goals</h3>
                <ul className="space-y-4">
                  <li className="flex items-center text-gray-300">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                    Advanced IoT Security Mastery
                  </li>
                  <li className="flex items-center text-gray-300">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                    Zero-Day Research Program
                  </li>
                  <li className="flex items-center text-gray-300">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                    Quantum Computing Defense
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </motion.section>
      </motion.div>
    </div>
  );
}
