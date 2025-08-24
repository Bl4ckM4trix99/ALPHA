'use client';

import { motion } from 'framer-motion';
import { Shield, Target, Users, Award, Zap, Brain, Globe, ChevronRight, Lock, Code, Check, Terminal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Share_Tech_Mono, Orbitron } from 'next/font/google';
import MainHeroBackground from '@/components/canvas/MainHeroBackground';
import Image from 'next/image';

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

export default function Home() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-black to-black text-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-[#0B1120]">
        <MainHeroBackground />
        
        {/* Gradient Overlays */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-radial from-orange-500/5 via-transparent to-transparent"></div>
          <div className="absolute inset-0 bg-[url('/hero-hacker-bg.svg')] opacity-5 bg-center bg-no-repeat bg-cover mix-blend-overlay"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B1120] via-transparent to-[#0B1120]"></div>
        </div>

        <div className="relative z-10 w-full flex flex-col items-center justify-center py-24 px-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-12 relative">
            <div className="relative group">
              <div className="absolute -inset-1 bg-orange-500 rounded-full blur-xl opacity-25 group-hover:opacity-40 transition duration-1000"></div>
              <div className="relative w-[450px] h-[450px]">
                <Image 
                  src="/alpha-logo2.png" 
                  alt="ALPHA NET Logo" 
                  width={450}
                  height={450}
                  className="object-contain drop-shadow-xl transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500 to-orange-600 opacity-0 group-hover:opacity-10 rounded-full blur-xl transition duration-1000"></div>
              </div>
            </div>

            <div className="text-center md:text-left max-w-2xl flex flex-col justify-center">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className={`mb-4 text-lg font-semibold tracking-widest text-orange-400 flex items-center gap-3 ${techMono.className}`}
              >
                &lt;WORLD-CLASS CYBERSECURITY PLATFORM /&gt;
              </motion.div>

              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className={`text-5xl md:text-7xl font-bold mb-6 ${orbitron.className}`}
              >
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-orange-500">
                  ALPHA NET
                </span>
              </motion.h1>

              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className={`text-2xl mb-3 text-orange-400 ${techMono.className}`}
              >
                &gt; Be The Person No One Can Ever Be !!!
              </motion.h2>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-lg md:text-xl mb-12 text-gray-300 leading-relaxed"
              >
                Master cybersecurity with cutting-edge threat intelligence, competitive CTF challenges, and comprehensive hands-on learning experiences designed by industry experts.
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-6 justify-center md:justify-start items-center"
              >
                <Button 
                  size="lg" 
                  className="bg-orange-500 hover:bg-orange-600 text-white font-bold text-lg px-8 py-4 shadow-lg group relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  <span className="relative z-10">Start Your Journey</span>
                  <ChevronRight className="ml-2 w-5 h-5 text-white relative z-10" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-white text-lg px-8 py-4 relative group overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  <span className="relative z-10">Explore Challenges</span>
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

{/* Stats Section */}
      <section className="py-20 bg-[#0B1120] relative">
        <div className="absolute inset-0 bg-gradient-to-b from-orange-500/5 via-transparent to-orange-500/5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              { value: '10K+', label: 'Security Professionals', icon: Users },
              { value: '500+', label: 'CTF Challenges', icon: Target },
              { value: '2K+', label: 'Research Articles', icon: Brain },
              { value: '98%', label: 'Success Rate', icon: Award }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center group"
                variants={fadeInUp}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="relative">
                  <div className="absolute -inset-4 bg-orange-500 rounded-xl blur-xl opacity-10 group-hover:opacity-20 transition duration-700"></div>
                  <div className="relative">
                    <stat.icon className="w-12 h-12 text-orange-400 mx-auto mb-4" />
                    <div className={`text-4xl md:text-5xl font-bold text-orange-400 mb-2 ${orbitron.className}`}>
                      {stat.value}
                    </div>
                    <div className={`text-gray-300 text-sm md:text-base ${techMono.className}`}>
                      {stat.label}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-[#0B1120] to-[#162137] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/hero-hacker-bg.svg')] opacity-5 bg-center bg-no-repeat bg-cover mix-blend-overlay"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            className="text-center mb-16 relative"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent"></div>
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${orbitron.className}`}>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-orange-500">
                Why Choose ALPHA NET?
              </span>
            </h2>
            <p className={`text-xl text-gray-300 max-w-3xl mx-auto ${techMono.className}`}>
              Experience the most comprehensive cybersecurity platform designed for modern security professionals
            </p>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent"></div>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              {
                icon: Brain,
                title: 'Advanced Threat Intelligence',
                description: 'Real-time security insights and comprehensive threat analysis to stay ahead of evolving cybersecurity challenges.',
                image: '/capabilities/rrr-3.jpeg'
              },
              {
                icon: Target,
                title: 'Interactive CTF Challenges',
                description: 'Hands-on capture the flag competitions designed to test and enhance your practical cybersecurity skills.',
                image: '/capabilities/rrr-3.jpeg'
              },
              {
                icon: Users,
                title: 'Expert Community',
                description: 'Connect with industry professionals and collaborate with a global network of cybersecurity experts.',
                image: '/capabilities/rrr-3.jpeg'
              },
              {
                icon: Award,
                title: 'Professional Certifications',
                description: 'Earn industry-recognized certifications that validate your cybersecurity expertise and career growth.',
                image: '/capabilities/rrr-3.jpeg'
              },
              {
                icon: Globe,
                title: 'Comprehensive Learning',
                description: 'Access cutting-edge courses and resources covering all aspects of modern cybersecurity practices.',
                image: '/capabilities/rrr-3.jpeg'
              },
              {
                icon: Zap,
                title: 'Real-time Updates',
                description: 'Stay current with the latest security trends, vulnerabilities, and protective measures in real-time.',
                image: '/capabilities/rrr-3.jpeg'
              }
            ].map((feature, index) => (
              <motion.div key={index} variants={fadeInUp} className="group">
                <Card className="bg-gradient-to-br from-[#162137] to-[#0B1120] border-orange-500/10 hover:border-orange-500/30 transition-all duration-500 h-full relative overflow-hidden">
                  <div className="absolute inset-0">
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      fill
                      className="object-cover opacity-60 group-hover:opacity-70 transition-opacity duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#162137]/70 to-[#0B1120]/70"></div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500/0 to-orange-600/0 opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
                  
                  <CardHeader className="relative z-10">
                    <div className="w-12 h-12 rounded-lg bg-orange-500/10 flex items-center justify-center mb-4 group-hover:bg-orange-500/20 transition-colors duration-300 backdrop-blur-sm">
                      <feature.icon className="w-6 h-6 text-orange-400" />
                    </div>
                    <CardTitle className={`text-xl text-white group-hover:text-orange-400 transition-colors duration-300 ${techMono.className}`}>
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent className="relative z-10">
                    <CardDescription className="text-gray-300 text-base leading-relaxed">
                      {feature.description}
                    </CardDescription>
                  </CardContent>

                  {/* Decorative Elements */}
                  <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                  <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                  <div className="absolute top-0 left-0 h-full w-px bg-gradient-to-b from-transparent via-orange-500/50 to-transparent transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500"></div>
                  <div className="absolute top-0 right-0 h-full w-px bg-gradient-to-b from-transparent via-orange-500/50 to-transparent transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500"></div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#0B1120] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-radial from-orange-500/5 via-transparent to-transparent"></div>
          <div className="absolute inset-0 bg-[url('/hero-hacker-bg.svg')] opacity-5 bg-center bg-no-repeat bg-cover mix-blend-overlay"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-orange-500 rounded-3xl blur-xl opacity-10"></div>
            <div className="relative bg-gradient-to-br from-[#162137] to-[#0B1120] rounded-2xl p-12 border border-orange-500/10">
              <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${orbitron.className}`}>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-orange-500">
                  Ready to Advance Your Career?
                </span>
              </h2>
              <p className={`text-xl text-gray-300 mb-12 ${techMono.className}`}>
                Join thousands of cybersecurity professionals who trust ALPHA NET for their continuous learning and career advancement.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button 
                  size="lg" 
                  className="bg-orange-500 hover:bg-orange-600 text-white font-bold text-lg px-12 py-4 relative group overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  <span className="relative z-10">Get Started Now</span>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-white text-lg px-12 py-4 relative group overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  <span className="relative z-10">View Pricing</span>
                </Button>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-0 left-0 w-32 h-1 bg-gradient-to-r from-orange-500 to-transparent"></div>
              <div className="absolute top-0 right-0 w-32 h-1 bg-gradient-to-l from-orange-500 to-transparent"></div>
              <div className="absolute bottom-0 left-0 w-32 h-1 bg-gradient-to-r from-orange-500 to-transparent"></div>
              <div className="absolute bottom-0 right-0 w-32 h-1 bg-gradient-to-l from-orange-500 to-transparent"></div>
              <div className="absolute top-0 left-0 w-1 h-32 bg-gradient-to-b from-orange-500 to-transparent"></div>
              <div className="absolute top-0 right-0 w-1 h-32 bg-gradient-to-b from-orange-500 to-transparent"></div>
              <div className="absolute bottom-0 left-0 w-1 h-32 bg-gradient-to-t from-orange-500 to-transparent"></div>
              <div className="absolute bottom-0 right-0 w-1 h-32 bg-gradient-to-t from-orange-500 to-transparent"></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 bg-gradient-to-b from-[#162137] to-[#0B1120] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-radial from-orange-500/5 via-transparent to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="relative inline-block">
              <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${orbitron.className}`}>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-orange-500">
                  Your Journey to Excellence
                </span>
              </h2>
              <div className="absolute -bottom-2 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent"></div>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Join ALPHA NET',
                description: 'Create your account and become part of our elite cybersecurity community.',
                icon: Lock
              },
              {
                step: '02',
                title: 'Start Training',
                description: 'Access our comprehensive learning resources and hands-on challenges.',
                icon: Code
              },
              {
                step: '03',
                title: 'Practice & Compete',
                description: 'Participate in CTF competitions and improve your skills.',
                icon: Target
              },
              {
                step: '04',
                title: 'Master & Lead',
                description: 'Achieve expertise and mentor others in the community.',
                icon: Award
              }
            ].map((item, index) => (
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
                className="relative group perspective-1000"
              >
                <div className="absolute -inset-4 bg-orange-500 rounded-xl blur-xl opacity-10 group-hover:opacity-30 transition-all duration-700"></div>
                <motion.div 
                  className="relative bg-gradient-to-br from-[#162137] to-[#0B1120] p-6 rounded-xl border border-orange-500/10 group-hover:border-orange-500/30 transition-all duration-500 transform preserve-3d hover:-translate-y-2 hover:shadow-2xl hover:shadow-orange-500/20"
                  whileHover={{
                    rotateX: 5,
                    rotateY: 5,
                  }}
                  style={{
                    transformStyle: "preserve-3d",
                  }}
                >
                  {/* Corner Decorations */}
                  <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-orange-500/30 rounded-tl-lg transition-all duration-300 group-hover:border-orange-500/60 group-hover:w-12 group-hover:h-12"></div>
                  <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-orange-500/30 rounded-tr-lg transition-all duration-300 group-hover:border-orange-500/60 group-hover:w-12 group-hover:h-12"></div>
                  <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-orange-500/30 rounded-bl-lg transition-all duration-300 group-hover:border-orange-500/60 group-hover:w-12 group-hover:h-12"></div>
                  <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-orange-500/30 rounded-br-lg transition-all duration-300 group-hover:border-orange-500/60 group-hover:w-12 group-hover:h-12"></div>

                  {/* Step Number with Glow Effect */}
                  <div className="relative mb-6">
                    <div className={`text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-orange-500 ${orbitron.className} relative z-10`}>
                      {item.step}
                    </div>
                    <div className="absolute -inset-4 bg-orange-500/20 filter blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-full"></div>
                  </div>

                  {/* Icon */}
                  <div className="mb-4 relative">
                    <div className="w-12 h-12 rounded-lg bg-orange-500/10 flex items-center justify-center group-hover:bg-orange-500/20 transition-colors duration-300 backdrop-blur-sm">
                      <item.icon className="w-6 h-6 text-orange-400 transform group-hover:scale-110 transition-transform duration-300" />
                    </div>
                  </div>

                  {/* Title with Hover Effect */}
                  <h3 className={`text-xl font-bold text-white mb-3 group-hover:text-orange-400 transition-all duration-300 transform group-hover:translate-x-1 ${techMono.className}`}>
                    {item.title}
                  </h3>

                  {/* Description with Fade Effect */}
                  <div className="relative">
                    <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                      {item.description}
                    </p>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-orange-500/0 to-orange-500/0 opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                      animate={{ x: ["-100%", "100%"] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    />
                  </div>

                  {/* Pulse Effect */}
                  <div className="absolute inset-0 rounded-xl">
                    <div className="absolute inset-0 bg-orange-500/0 group-hover:bg-orange-500/5 transition-colors duration-300"></div>
                    <div className="absolute inset-0 transform scale-0 group-hover:scale-100 transition-transform duration-700">
                      <div className="absolute inset-0 bg-orange-500/10 animate-pulse rounded-xl"></div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}