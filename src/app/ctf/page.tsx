'use client';

import { useState } from 'react';
import { Clock, FileText, Flag, Trophy, Target, Brain, ChevronRight, Star, Shield, Terminal, Code, Lock, Users } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import { Share_Tech_Mono, Orbitron } from 'next/font/google';
import CTFBackground from '@/components/canvas/CTFBackground';

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

// Note: Metadata export is not allowed in client components.
// We would place this in a parent layout or page if this were a real app.
// export const metadata: Metadata = {
//   title: 'CTF Zone | ALPHA NET',
//   description: 'Engage in CTF challenges, view upcoming events, and read our detailed write-ups.',
// };

const ctfData = {
  upcoming: [
    { title: 'HackTheArchipelago', date: '2025-09-15', type: 'Jeopardy' },
    { title: 'CyberPatriot XV', date: '2025-10-01', type: 'Attack/Defense' },
  ],
  ongoing: [
    { title: 'Internal Weekly #12', ends: '3 days', type: 'Beginner-Friendly' },
  ],
  writeups: [
    { title: 'National CTF 2024 - Web Exploitation', category: 'Web', readTime: '15 min' },
    { title: 'Crypto Challenge - The Unbreakable Cipher', category: 'Cryptography', readTime: '25 min' },
  ],
};

type Tab = 'upcoming' | 'ongoing' | 'writeups';

export default function CtfPage() {
  const [activeTab, setActiveTab] = useState<Tab>('upcoming');

  const renderContent = () => {
    switch (activeTab) {
      case 'upcoming':
        return ctfData.upcoming.map((item, i) => (
          <motion.div
            key={i}
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0 }
            }}
            whileHover={{ y: -5 }}
            className="group"
          >
            <Card className="bg-gradient-to-br from-[#162137] to-[#0B1120] border-orange-500/10 hover:border-orange-500/30 transition-all duration-500 overflow-hidden">
              <div className="relative p-6">
                <CardHeader className="p-0">
                  <CardTitle className={`text-xl text-white group-hover:text-orange-400 transition-colors duration-300 ${techMono.className}`}>
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex items-center gap-4 text-gray-400 mt-4 p-0">
                  <Clock className="w-4 h-4" /> <span>Starts: {item.date}</span>
                </CardContent>
                <CardFooter className="p-0 mt-4">
                  <Badge 
                    variant="outline" 
                    className="border-orange-500/30 text-orange-400 group-hover:border-orange-500/50 transition-all duration-300"
                  >
                    {item.type}
                  </Badge>
                </CardFooter>

                {/* Decorative Elements */}
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                <div className="absolute top-0 left-0 h-full w-px bg-gradient-to-b from-transparent via-orange-500/50 to-transparent transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500"></div>
                <div className="absolute top-0 right-0 h-full w-px bg-gradient-to-b from-transparent via-orange-500/50 to-transparent transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500"></div>
              </div>
            </Card>
          </motion.div>
        ));
      case 'ongoing':
        return ctfData.ongoing.map((item, i) => (
          <motion.div
            key={i}
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0 }
            }}
            whileHover={{ y: -5 }}
            className="group"
          >
            <Card className="bg-gradient-to-br from-[#162137] to-[#0B1120] border-orange-500/20 transition-all duration-500 overflow-hidden relative">
              <div className="absolute inset-0 bg-orange-500/5"></div>
              <div className="relative p-6">
                <CardHeader className="p-0">
                  <CardTitle className={`text-xl text-orange-400 ${techMono.className}`}>
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex items-center gap-4 text-gray-300 mt-4 p-0">
                  <Clock className="w-4 h-4" /> <span>Ends in: {item.ends}</span>
                </CardContent>
                <CardFooter className="p-0 mt-4">
                  <Button 
                    className="bg-orange-500 hover:bg-orange-600 text-white font-bold relative group overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                    <span className="relative z-10">Join Now</span>
                  </Button>
                </CardFooter>

                {/* Decorative Elements */}
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                <div className="absolute top-0 left-0 h-full w-px bg-gradient-to-b from-transparent via-orange-500/50 to-transparent transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500"></div>
                <div className="absolute top-0 right-0 h-full w-px bg-gradient-to-b from-transparent via-orange-500/50 to-transparent transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500"></div>
              </div>
            </Card>
          </motion.div>
        ));
      case 'writeups':
        return ctfData.writeups.map((item, i) => (
          <motion.div
            key={i}
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0 }
            }}
            whileHover={{ y: -5 }}
            className="group"
          >
            <Card className="bg-gradient-to-br from-[#162137] to-[#0B1120] border-orange-500/10 hover:border-orange-500/30 transition-all duration-500 overflow-hidden">
              <div className="relative p-6">
                <CardHeader className="p-0">
                  <CardTitle className={`text-xl text-white group-hover:text-orange-400 transition-colors duration-300 ${techMono.className}`}>
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex items-center gap-4 text-gray-400 mt-4 p-0">
                  <FileText className="w-4 h-4" /> <span>{item.readTime} read</span>
                </CardContent>
                <CardFooter className="flex justify-between p-0 mt-4">
                  <Badge 
                    variant="outline" 
                    className="border-orange-500/30 text-orange-400 group-hover:border-orange-500/50 transition-all duration-300"
                  >
                    {item.category}
                  </Badge>
                  <Button 
                    variant="outline" 
                    className="border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-white relative group overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                    <span className="relative z-10">Read More</span>
                  </Button>
                </CardFooter>

                {/* Decorative Elements */}
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                <div className="absolute top-0 left-0 h-full w-px bg-gradient-to-b from-transparent via-orange-500/50 to-transparent transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500"></div>
                <div className="absolute top-0 right-0 h-full w-px bg-gradient-to-b from-transparent via-orange-500/50 to-transparent transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500"></div>
              </div>
            </Card>
          </motion.div>
        ));
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-[#0B1120] relative">
      <CTFBackground />
      
      {/* Gradient Overlays */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-radial from-orange-500/5 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-[url('/hero-hacker-bg.svg')] opacity-5 bg-center bg-no-repeat bg-cover mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B1120] via-transparent to-[#0B1120]"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-24 space-y-24">
        {/* Header Section */}
        <motion.header 
          className="text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative inline-block mb-6">
            <motion.h1 
              className={`text-6xl font-bold tracking-tight ${orbitron.className}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-orange-500">
                CTF Zone
              </span>
            </motion.h1>
            <div className="absolute -bottom-2 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent"></div>
          </div>
          <motion.p 
            className={`text-xl text-gray-300 max-w-3xl mx-auto ${techMono.className}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Sharpen your skills. Compete. Learn from the best.
          </motion.p>
        </motion.header>

        {/* Challenge Categories */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {[
            { icon: Terminal, title: 'Binary Exploitation', count: '25+' },
            { icon: Lock, title: 'Cryptography', count: '30+' },
            { icon: Code, title: 'Web Exploitation', count: '40+' },
            { icon: Shield, title: 'Reverse Engineering', count: '35+' }
          ].map((category, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="group"
            >
              <Card className="bg-gradient-to-br from-[#162137] to-[#0B1120] border-orange-500/10 hover:border-orange-500/30 transition-all duration-500">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-orange-500/10 flex items-center justify-center mb-4 group-hover:bg-orange-500/20 transition-colors duration-300">
                    <category.icon className="w-6 h-6 text-orange-400" />
                  </div>
                  <CardTitle className={`text-xl text-white group-hover:text-orange-400 transition-colors duration-300 ${techMono.className}`}>
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className={`text-3xl font-bold text-orange-400 ${orbitron.className}`}>{category.count}</p>
                  <p className="text-gray-400">Active Challenges</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.section>

        {/* Navigation Tabs */}
        <div className="flex justify-center">
          <div className="bg-gradient-to-br from-[#162137] to-[#0B1120] rounded-lg border border-orange-500/10 p-1">
            {(['upcoming', 'ongoing', 'writeups'] as Tab[]).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-8 py-3 rounded-md transition-all duration-300 ${techMono.className}
                  ${activeTab === tab 
                    ? 'bg-orange-500/10 text-orange-400' 
                    : 'text-gray-400 hover:text-white hover:bg-orange-500/5'}`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Content Section */}
        <motion.section 
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
          initial="hidden"
          animate="show"
        >
          {renderContent()}
        </motion.section>

        {/* Leaderboard Preview */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="absolute -inset-4 bg-orange-500 rounded-3xl blur-xl opacity-10"></div>
          <Card className="relative bg-gradient-to-br from-[#162137] to-[#0B1120] border-orange-500/10">
            <CardHeader>
              <CardTitle className={`text-3xl text-center ${orbitron.className}`}>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-orange-500">
                  Top Players
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { rank: '1st', name: 'CyberNinja', points: '15,420', icon: Trophy },
                  { rank: '2nd', name: 'ByteMaster', points: '14,850', icon: Star },
                  { rank: '3rd', name: 'SecurityPro', points: '14,320', icon: Target }
                ].map((player, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="bg-gradient-to-br from-[#162137] to-[#0B1120] p-6 rounded-xl border border-orange-500/10 group hover:border-orange-500/30 transition-all duration-300"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-lg bg-orange-500/10 flex items-center justify-center group-hover:bg-orange-500/20 transition-colors duration-300">
                        <player.icon className="w-6 h-6 text-orange-400" />
                      </div>
                      <div>
                        <p className={`text-sm text-orange-400 ${techMono.className}`}>{player.rank}</p>
                        <p className="text-white font-bold">{player.name}</p>
                        <p className="text-gray-400">{player.points} pts</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.section>
        {/* Platform Features Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="text-center mb-16">
            <motion.h2 
              className={`text-4xl md:text-5xl font-bold mb-6 ${orbitron.className}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-orange-500">
                How It Works
              </span>
            </motion.h2>
            <motion.p 
              className={`text-xl text-gray-300 max-w-3xl mx-auto ${techMono.className}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Experience our cutting-edge CTF platform designed for both beginners and experts
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Dynamic Challenges",
                description: "Our platform features real-world scenarios with varying difficulty levels. Challenges auto-scale based on your skill level.",
                features: ["Auto-scaling Difficulty", "Real-time Updates", "Multiple Categories"],
                icon: Target
              },
              {
                title: "Secure Environment",
                description: "Dedicated infrastructure for each challenge. Practice offensive security techniques in an isolated, legal environment.",
                features: ["Isolated Instances", "Safe Testing Environment", "Automated Reset"],
                icon: Shield
              },
              {
                title: "Learning Resources",
                description: "Access comprehensive guides, tutorials, and hints. Learn from detailed write-ups after solving challenges.",
                features: ["Detailed Write-ups", "Video Tutorials", "Hint System"],
                icon: Brain
              },
              {
                title: "Live Events",
                description: "Participate in scheduled CTF competitions. Compete against teams worldwide in real-time events.",
                features: ["Live Scoreboard", "Team Collaboration", "Global Rankings"],
                icon: Flag
              },
              {
                title: "Progress Tracking",
                description: "Track your progress with detailed statistics. Earn badges and certificates as you advance.",
                features: ["Skill Analytics", "Achievement System", "Learning Path"],
                icon: ChevronRight
              },
              {
                title: "Community Features",
                description: "Connect with other security enthusiasts. Share knowledge and collaborate on challenges.",
                features: ["Discussion Forums", "Team Formation", "Private Messaging"],
                icon: Users
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <Card className="bg-gradient-to-br from-[#162137] to-[#0B1120] border-orange-500/10 hover:border-orange-500/30 transition-all duration-500 h-full relative overflow-hidden">
                  <div className="relative p-6">
                    <div className="w-12 h-12 rounded-lg bg-orange-500/10 flex items-center justify-center mb-4 group-hover:bg-orange-500/20 transition-colors duration-300">
                      <feature.icon className="w-6 h-6 text-orange-400" />
                    </div>
                    <CardTitle className={`text-xl text-white group-hover:text-orange-400 transition-colors duration-300 mb-4 ${techMono.className}`}>
                      {feature.title}
                    </CardTitle>
                    <CardDescription className="text-gray-300 mb-6">
                      {feature.description}
                    </CardDescription>
                    <div className="space-y-2">
                      {feature.features.map((item, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div>
                          <span className="text-sm text-gray-400">{item}</span>
                        </div>
                      ))}
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                    <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                    <div className="absolute top-0 left-0 h-full w-px bg-gradient-to-b from-transparent via-orange-500/50 to-transparent transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500"></div>
                    <div className="absolute top-0 right-0 h-full w-px bg-gradient-to-b from-transparent via-orange-500/50 to-transparent transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500"></div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Special Features Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="absolute -inset-4 bg-orange-500 rounded-3xl blur-xl opacity-10"></div>
          <Card className="relative bg-gradient-to-br from-[#162137] to-[#0B1120] border-orange-500/10">
            <CardHeader>
              <CardTitle className={`text-3xl text-center mb-6 ${orbitron.className}`}>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-orange-500">
                  Special Platform Features
                </span>
              </CardTitle>
              <CardDescription className={`text-center text-gray-300 max-w-3xl mx-auto ${techMono.className}`}>
                Discover unique features that make ALPHA NET stand out
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8 mt-8">
                <motion.div 
                  className="relative group"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="absolute -inset-2 bg-orange-500 rounded-xl blur-lg opacity-10 group-hover:opacity-20 transition-opacity duration-500"></div>
                  <div className="relative bg-gradient-to-br from-[#162137] to-[#0B1120] p-6 rounded-xl border border-orange-500/10 group-hover:border-orange-500/30 transition-all duration-300">
                    <h3 className={`text-2xl font-bold text-orange-400 mb-4 ${techMono.className}`}>Operation Black Echo</h3>
                    <p className="text-gray-300 mb-4">
                      A story-driven CTF competition where players step into the role of cyber operatives racing against time. Infiltrate the dark web, expose nuclear weapon deals, and uncover the truth behind MasterHead.
                    </p>
                    <div className="flex items-center gap-4">
                      <div className="flex-1">
                        <div className="text-sm text-gray-400">Starts at</div>
                        <div className="text-orange-400">09/22/2025 8:30 AM</div>
                      </div>
                      <a href="https://registration.alphactf.edu.lk" target="_blank" rel="noopener noreferrer">
                        <Button 
                          className="bg-orange-500 hover:bg-orange-600 text-white relative group overflow-hidden"
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                          <span className="relative z-10">Register Now</span>
                        </Button>
                      </a>
                    </div>
                  </div>
                </motion.div>

                <motion.div 
                  className="relative group"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="absolute -inset-2 bg-orange-500 rounded-xl blur-lg opacity-10 group-hover:opacity-20 transition-opacity duration-500"></div>
                  <div className="relative bg-gradient-to-br from-[#162137] to-[#0B1120] p-6 rounded-xl border border-orange-500/10 group-hover:border-orange-500/30 transition-all duration-300">
                    <h3 className={`text-2xl font-bold text-orange-400 mb-4 ${techMono.className}`}>Platform Highlights</h3>
                    <div className="space-y-4">
                      {[
                        "Real-time Scoring System",
                        "Interactive Challenge Map",
                        "AI-Powered Hint System",
                        "Custom Virtual Labs",
                        "Team Collaboration Tools",
                        "Advanced Analytics Dashboard"
                      ].map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                          <span className="text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </CardContent>
          </Card>
        </motion.section>

        {/* Contact Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className={`text-orange-400 mb-8 ${techMono.className} max-w-md mx-auto`}>
            <div className="text-2xl mb-6 font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-orange-500">Contact Information</div>
            <div className="space-y-6 text-left">
              <div className="border border-orange-500/10 rounded-lg p-4 bg-gradient-to-br from-[#162137] to-[#0B1120] hover:border-orange-500/30 transition-all duration-300">
                <div className="text-lg font-semibold mb-2 flex items-center">
                  <span className="mr-2">📧</span>
                  Contact Email
                </div>
                <div className="text-orange-400/90 pl-7">info@alphactf.edu.lk</div>
              </div>
              <div className="border border-orange-500/10 rounded-lg p-4 bg-gradient-to-br from-[#162137] to-[#0B1120] hover:border-orange-500/30 transition-all duration-300">
                <div className="text-lg font-semibold mb-2 flex items-center">
                  <span className="mr-2">📞</span>
                  Support Lines
                </div>
                <div className="space-y-2 pl-7">
                  <div className="text-orange-400/90">+94 71 737 9273</div>
                  <div className="text-orange-400/90">+94 76 332 0184</div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {['#EthicalHacking', '#CaptureTheFlag', '#Cybersecurity'].map((tag, index) => (
              <Badge 
                key={index}
                variant="outline" 
                className="border-orange-500/30 text-orange-400 group-hover:border-orange-500/50 transition-all duration-300"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
}
