'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Share_Tech_Mono, Orbitron } from 'next/font/google';
import { Heart, Clock, Share2, Eye, User, Users, AlertTriangle, Target, Shield, Brain, Zap, Calendar, Terminal } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
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

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  author: string;
  views: number;
  likes: number;
  teams: number;
  image: string;
  pinned?: boolean;
  content: {
    background?: string;
    mainContent: string;
    vision?: string;
    philosophy?: string;
    features?: string[];
    callToAction?: string;
    traces?: string[];
    whispersmith?: {
      name: string;
      role: string;
      specialties: string[];
    };
    weapon?: {
      codename: string;
      location: string;
      deadline: string;
      bidders: string;
    };
    objectives?: string[];
    defenses?: string[];
    intelligence?: string[];
    timeline?: {
      start: string;
      end: string;
    };
  };
  tags: string[];
}

const blogPosts: BlogPost[] = [
  {
    id: 2,
    title: 'Welcome To ALPHA::CTF!',
    excerpt: '🧠 Where Hackers Are Forged - The ultimate cyber battleground where knowledge meets precision.',
    date: '2025-08-07',
    readTime: '5 min read',
    author: 'Admin',
    views: 3789,
    likes: 245,
    teams: 158,
    pinned: true,
    image: '/alpha-logo.png',
    content: {
      mainContent: `Welcome to AlphaCTF – the ultimate cyber battleground where knowledge meets precision, and curiosity fuels conquest. Built for aspiring cyber warriors, ethical hackers, and problem-solvers, AlphaCTF is not just a platform — it's a movement.

Whether you're stepping into the world of cybersecurity or sharpening your red-team skills, AlphaCTF offers realistic, intense, and story-driven Capture The Flag challenges across a wide spectrum of categories, including:

🕸️ Web Exploitation
💾 Binary & Reverse Engineering
📡 Network Forensics
🧩 Cryptography
🔍 OSINT & Recon
⚙️ Smart Contract & Blockchain Security
💣 SCADA & ICS Simulations`,
      vision: '"To build a generation of ethical hackers and cybersecurity defenders who can secure the digital frontier through skill, creativity, and relentless curiosity."',
      philosophy: 'At AlphaCTF, we believe that cybersecurity education should be immersive, accessible, and challenging. We aim to cultivate an elite community of cyber professionals by delivering a platform that blends gamification, real-world attack simulation, and deep technical learning.',
      features: [
        'Challenge-Based Learning: No theory dumps — only hands-on, practical puzzles.',
        'Story-Driven Scenarios: Every challenge is part of a larger cyber-espionage universe.',
        'Team & Solo Modes: Train alone or dominate with your crew.',
        'Ranking & Achievements: Rise through the leaderboard and unlock exclusive hacker titles.',
        'Regular Live Events: Test your skills in time-limited missions and seasonal tournaments.'
      ],
      callToAction: `Whether you're a student, a professional, or a cyber enthusiast — AlphaCTF is your proving ground. Enter the matrix, break the silence, and forge your path in the digital shadows.

Are you ready to become the next Echo Breaker?

Welcome to the shadows. Welcome to AlphaCTF.`
    },
    tags: ['Ethical Hacking', 'Cybersecurity', 'Alpha', 'CTF']
  },
  {
    id: 1,
    title: 'OPERATION BLACK ECHO',
    excerpt: 'A covert arms pipeline so discreet that even elite intelligence agencies question its existence.',
    date: '2025-08-24',
    readTime: '10 min read',
    author: 'ZeroTrace',
    views: 2456,
    likes: 189,
    teams: 2,
    image: '/blog_1.png',
    content: {
      background: 'In the shadowed corners of the world\'s darkest trade routes, whispers travel faster than bullets.',
      mainContent: `One name has begun circulating in encrypted chats and darknet marketplaces: Operation Black Echo — a covert arms pipeline so discreet that even elite intelligence agencies question its existence.

At its core lies Ironshade (Kareem Volkov), a former military engineer turned phantom arms dealer. Once a promising scientist in experimental weapons research, Volkov disappeared from public records after a catastrophic energy weapon test left an entire research facility in ruins.`,
      traces: [
        'Encrypted voice notes sent via single-use darknet nodes',
        'Dismantled tracking devices left in abandoned safehouses',
        'Weapons shipments with erased origins and falsified manifests'
      ],
      whispersmith: {
        name: 'Whispersmith (Elina Draz)',
        role: 'The broker who moves millions without ever touching a bank',
        specialties: [
          'Multi-layered proxy laundering routes',
          'Real-time transaction obfuscation systems',
          'Cold and precise use of coded phrases in negotiations'
        ]
      },
      weapon: {
        codename: 'Aegis Pulse',
        location: 'Abandoned freight warehouse, Eastern Europe',
        deadline: '72 hours',
        bidders: 'Multiple state-backed cyber-mercenary groups'
      },
      objectives: [
        'Infiltrate Whispersmith\'s encrypted darknet network',
        'Locate and extract shipment manifests tied to Ironshade\'s operation',
        'Identify buyers and trace payment laundering channels',
        'Gather weapon specifications for Aegis Pulse',
        'Deliver evidence to the client before the 72-hour deadline'
      ],
      defenses: [
        'Layered darknet gateways',
        'Air-gapped transfer points',
        'Custom security daemons',
        'Honeytoken traps',
        'Cryptographic deadman switches'
      ],
      intelligence: [
        'Known alias servers: blackecho-gateway.onion, whispers-net7.onion',
        'Aegis Pulse\'s schematics may be fragmented across multiple nodes',
        'Several decoy buyer identities exist — cross-verify with transaction fingerprints',
        'Payment routes involve cryptocurrency mixing pools hosted in triple-proxy chains'
      ],
      timeline: {
        start: 'September 22, 2025 8:30 AM',
        end: 'September 22, 2025 4:30 PM'
      }
    },
    tags: ['Operation Black Echo', 'Cybersecurity', 'CTF', 'Advanced']
  },

];

export default function BlogPage() {
  const [likedPosts, setLikedPosts] = useState<number[]>([]);

  const handleLike = (postId: number, e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (likedPosts.includes(postId)) {
      setLikedPosts(likedPosts.filter(id => id !== postId));
    } else {
      setLikedPosts([...likedPosts, postId]);
    }
  };

  return (
    <div className="min-h-screen bg-[#0B1120] relative">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-radial from-orange-500/5 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-[url('/hero-hacker-bg.svg')] opacity-5 bg-center bg-no-repeat bg-cover mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B1120] via-transparent to-[#0B1120]"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-24 space-y-24">
        {/* Header */}
        <motion.header 
          className="text-center space-y-6"
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
                ALPHA Intel
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
            Field notes, strategies, and deep dives from our cybersecurity experts
          </motion.p>
        </motion.header>

        {/* Blog Posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Dialog key={post.id}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative group h-full"
              >
                <div className="absolute -inset-4 bg-orange-500 rounded-3xl blur-xl opacity-10 group-hover:opacity-20 transition-opacity duration-500"></div>
                <Card className="relative bg-gradient-to-br from-[#162137] to-[#0B1120] border-orange-500/10 group-hover:border-orange-500/30 transition-all duration-500 h-full flex flex-col">
                  <div className="relative w-full h-48 overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120] to-transparent"></div>
                    <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-orange-500/20 rounded-full flex items-center justify-center border border-orange-500/30 backdrop-blur-sm group-hover:scale-110 transition-transform duration-500">
                      <Terminal className="w-5 h-5 text-orange-400 group-hover:text-orange-300 transition-colors duration-300" />
                    </div>
                    {post.pinned && (
                      <div className="absolute top-4 right-4 px-2 py-1 bg-orange-500/20 rounded-full border border-orange-500/30 backdrop-blur-sm">
                        <span className={`text-xs text-orange-400 ${techMono.className}`}>PINNED</span>
                      </div>
                    )}
                  </div>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <CardTitle className={`text-2xl text-white group-hover:text-orange-400 transition-colors duration-300 ${orbitron.className}`}>
                          {post.title}
                        </CardTitle>
                        <CardDescription className={`text-gray-400 ${techMono.className}`}>
                          {post.excerpt}
                        </CardDescription>
                      </div>
                      <Button
                        variant="outline"
                        size="icon"
                        className={`border-orange-500/30 ${likedPosts.includes(post.id) ? 'bg-orange-500/20 text-orange-400' : 'text-gray-400'} hover:bg-orange-500/20 hover:text-orange-400 transition-all duration-300`}
                        onClick={(e) => {
                          e.stopPropagation();
                          handleLike(post.id);
                        }}
                      >
                        <Heart className={`w-5 h-5 ${likedPosts.includes(post.id) ? 'fill-orange-400' : ''}`} />
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <div className="flex flex-wrap gap-2 text-sm text-gray-400">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Eye className="w-4 h-4" />
                        <span>{post.views} views</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4" />
                        <span>{post.teams} teams</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <DialogTrigger asChild>
                      <Button 
                        className="w-full bg-orange-500 hover:bg-orange-600 text-white relative group overflow-hidden"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                        <span className="relative z-10">Read More</span>
                      </Button>
                    </DialogTrigger>
                  </CardFooter>
                </Card>
              </motion.div>

              <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-[#0B1120] text-white border border-orange-500/20">
                <DialogHeader>
                  <DialogTitle className={`text-3xl text-orange-400 ${orbitron.className}`}>
                    {post.title}
                  </DialogTitle>
                  <DialogDescription className={`text-gray-400 ${techMono.className}`}>
                    {post.excerpt}
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-6 mt-6">
                  {/* Meta Information */}
                  <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Eye className="w-4 h-4" />
                      <span>{post.views} views</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      <span>{post.teams} teams joined</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-6">
                    {post.content.timeline && (
                      <div className="grid md:grid-cols-2 gap-4 p-4 bg-orange-500/5 rounded-lg border border-orange-500/10">
                        <div className="space-y-2">
                          <div className="text-gray-400">Start Time</div>
                          <div className="text-orange-400 font-bold">{post.content.timeline.start}</div>
                        </div>
                        <div className="space-y-2">
                          <div className="text-gray-400">End Time</div>
                          <div className="text-orange-400 font-bold">{post.content.timeline.end}</div>
                        </div>
                      </div>
                    )}

                    <div className="space-y-4">
                      <h3 className={`text-2xl text-orange-400 ${techMono.className}`}>
                        {post.id === 1 ? 'Silent Trade: ' : ''}{post.title}
                      </h3>
                      {post.id === 1 && (
                        <p className="text-gray-300 italic">
                          &#34;In the wrong hands, silence is the deadliest weapon.&#34;
                        </p>
                      )}
                      {post.id === 2 && post.content.vision && (
                        <p className="text-gray-300 italic">
                          {post.content.vision}
                        </p>
                      )}
                    </div>

                    {/* Background and Main Content */}
                    <div className="space-y-4">
                      {post.content.background && (
                        <>
                          <h4 className={`text-xl text-orange-400 flex items-center gap-2 ${techMono.className}`}>
                            <AlertTriangle className="w-5 h-5" /> Background
                          </h4>
                          <p className="text-gray-300">{post.content.background}</p>
                        </>
                      )}
                      <p className="text-gray-300 whitespace-pre-wrap">{post.content.mainContent}</p>
                    </div>

                    {/* Welcome Post Specific Content */}
                    {post.id === 2 && (
                      <>
                        {post.content.philosophy && (
                          <div className="space-y-4">
                            <h4 className={`text-xl text-orange-400 flex items-center gap-2 ${techMono.className}`}>
                              <Brain className="w-5 h-5" /> Our Philosophy
                            </h4>
                            <p className="text-gray-300">{post.content.philosophy}</p>
                          </div>
                        )}
                        
                        {post.content.features && (
                          <div className="space-y-4">
                            <h4 className={`text-xl text-orange-400 flex items-center gap-2 ${techMono.className}`}>
                              <Target className="w-5 h-5" /> Why AlphaCTF?
                            </h4>
                            <div className="grid md:grid-cols-2 gap-4">
                              {post.content.features.map((feature, index) => (
                                <div key={index} className="flex items-center gap-3 bg-orange-500/5 p-3 rounded-lg">
                                  <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                                  <span className="text-gray-300">{feature}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {post.content.callToAction && (
                          <div className="space-y-4">
                            <h4 className={`text-xl text-orange-400 flex items-center gap-2 ${techMono.className}`}>
                              <Zap className="w-5 h-5" /> Join the Operation
                            </h4>
                            <p className="text-gray-300 whitespace-pre-wrap">{post.content.callToAction}</p>
                          </div>
                        )}
                      </>
                    )}

                    {/* Operation Black Echo Specific Content */}
                    {post.id === 1 && (
                      <>
                        {post.content.traces && (
                          <div className="space-y-4">
                            <div className="space-y-2">
                              {post.content.traces.map((trace, index) => (
                                <div key={index} className="flex items-start gap-3">
                                  <div className="w-2 h-2 rounded-full bg-orange-500 mt-2"></div>
                                  <span className="text-gray-300">{trace}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {post.content.weapon && (
                          <div className="space-y-4">
                            <h4 className={`text-xl text-orange-400 flex items-center gap-2 ${techMono.className}`}>
                              <Zap className="w-5 h-5" /> The Stakes
                            </h4>
                            <div className="p-4 bg-orange-500/5 rounded-lg border border-orange-500/10">
                              <div className="grid gap-4">
                                <div className="space-y-2">
                                  <div className="text-gray-400">Weapon Codename</div>
                                  <div className="text-orange-400">{post.content.weapon.codename}</div>
                                </div>
                                <div className="space-y-2">
                                  <div className="text-gray-400">Location</div>
                                  <div className="text-orange-400">{post.content.weapon.location}</div>
                                </div>
                                <div className="space-y-2">
                                  <div className="text-gray-400">Time Remaining</div>
                                  <div className="text-orange-400">{post.content.weapon.deadline}</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}

                        {post.content.objectives && (
                          <div className="space-y-4">
                            <h4 className={`text-xl text-orange-400 flex items-center gap-2 ${techMono.className}`}>
                              <Target className="w-5 h-5" /> Mission Parameters
                            </h4>
                            <div className="space-y-2">
                              {post.content.objectives.map((objective, index) => (
                                <div key={index} className="flex items-start gap-3">
                                  <div className="w-2 h-2 rounded-full bg-orange-500 mt-2"></div>
                                  <span className="text-gray-300">{objective}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {post.content.defenses && (
                          <div className="space-y-4">
                            <h4 className={`text-xl text-orange-400 flex items-center gap-2 ${techMono.className}`}>
                              <Shield className="w-5 h-5" /> Network Defenses
                            </h4>
                            <div className="grid md:grid-cols-2 gap-4">
                              {post.content.defenses.map((defense, index) => (
                                <div key={index} className="flex items-center gap-3 bg-orange-500/5 p-3 rounded-lg">
                                  <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                                  <span className="text-gray-300">{defense}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {post.content.intelligence && (
                          <div className="space-y-4">
                            <h4 className={`text-xl text-orange-400 flex items-center gap-2 ${techMono.className}`}>
                              <Brain className="w-5 h-5" /> Intelligence Hints
                            </h4>
                            <div className="space-y-2">
                              {post.content.intelligence.map((hint, index) => (
                                <div key={index} className="flex items-start gap-3">
                                  <div className="w-2 h-2 rounded-full bg-orange-500 mt-2"></div>
                                  <span className="text-gray-300">{hint}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </>
                    )}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag, index) => (
                      <Badge
                        key={index}
                        variant="outline"
                        className="border-orange-500/30 text-orange-400 group-hover:border-orange-500/50 transition-all duration-300"
                      >
                        #{tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4">
                    <Button 
                      className="bg-orange-500 hover:bg-orange-600 text-white relative group overflow-hidden flex-1"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                      <span className="relative z-10">Register for Operation</span>
                    </Button>
                    <Button
                      variant="outline"
                      className="border-orange-500/30 text-orange-400 hover:bg-orange-500/20 transition-all duration-300"
                    >
                      <Share2 className="w-4 h-4 mr-2" />
                      Share
                    </Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </div>
  );
}
