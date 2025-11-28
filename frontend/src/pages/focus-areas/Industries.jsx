import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import {
  Building2, GraduationCap, TrendingUp, Fuel, Landmark, Truck, Hammer, ShoppingCart,
  ArrowRight, CheckCircle, Lightbulb, Target, Rocket, Wrench, Shield, Zap, BarChart3,
  Users, Globe, Database, Layers
} from 'lucide-react';

import { Helmet } from "react-helmet-async";

// Mock Link component - replace with actual react-router-dom Link
const Link = ({ to, children, className }) => (
  <a href={to} className={className}>
    {children}
  </a>
);

// -------------------------------------------------
// 1. INDUSTRY DATA
// -------------------------------------------------
const industries = [
  { name: 'Banking', path: '/focus-areas/banking', Icon: Building2, tagline: 'Secure core-banking, digital portals & fraud-proof solutions.' },
  { name: 'Education', path: '/focus-areas/education', Icon: GraduationCap, tagline: 'LMS, virtual classrooms & student analytics platforms.' },
  { name: 'Investment', path: '/focus-areas/investment', Icon: TrendingUp, tagline: 'Portfolio management, real-time analytics & robo-advisors.' },
  { name: 'Oil & Gas', path: '/focus-areas/oil-gas', Icon: Fuel, tagline: 'Asset monitoring, predictive maintenance & supply-chain optimisation.' },
  { name: 'Public Sector', path: '/focus-areas/public-sector', Icon: Landmark, tagline: 'Citizen portals, e-governance & transparent budgeting tools.' },
  { name: 'Supply Chain & Logistics', path: '/focus-areas/logistics', Icon: Truck, tagline: 'Real-time tracking, warehouse automation & route optimisation.' },
  { name: 'Construction', path: '/focus-areas/construction', Icon: Hammer, tagline: 'BIM integration, project dashboards & safety compliance.' },
  { name: 'Ecommerce', path: '/focus-areas/ecommerce', Icon: ShoppingCart, tagline: 'Scalable storefronts, payment gateways & AI-driven recommendations.' },
];

// -------------------------------------------------
// 2. COMPONENT
// -------------------------------------------------
const Industries = () => {
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.15 }
    );
    document.querySelectorAll('[id]').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const container = { 
    hidden: { opacity: 0 }, 
    visible: { 
      opacity: 1, 
      transition: { 
        staggerChildren: 0.08,
        delayChildren: 0.1
      } 
    } 
  };
  
  const item = { 
    hidden: { opacity: 0, y: 30, scale: 0.95 }, 
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    } 
  };

  // Process Steps
  const processSteps = [
    { step: '01', title: 'Discovery & Strategy', desc: 'Deep dive into your industry challenges, goals, and competitive landscape to build a tailored roadmap.', icon: Lightbulb },
    { step: '02', title: 'Design & Prototyping', desc: 'User-centric wireframes, UI/UX mockups, and interactive prototypes to validate ideas fast.', icon: Target },
    { step: '03', title: 'Development & Testing', desc: 'Agile sprints, clean code, CI/CD pipelines, and rigorous QA for flawless delivery.', icon: Rocket },
    { step: '04', title: 'Support & Growth', desc: 'Ongoing maintenance, performance optimization, and feature expansion as you scale.', icon: Wrench },
  ];

  // Tech Stack
  const techStack = [
    'React / Next.js', 'Node.js / NestJS', 'Python / FastAPI', 'Flutter / React Native',
    'AWS / GCP / Azure', 'Docker / Kubernetes', 'PostgreSQL / MongoDB',
    'TensorFlow / PyTorch', 'GraphQL / REST', 'Figma / Tailwind'
  ];

  // Stats
  const stats = [
    { value: '150+', label: 'Enterprise Clients' },
    { value: '8', label: 'Industries Served' },
    { value: '99.9%', label: 'Uptime SLA' },
    { value: '24/7', label: 'Global Support' },
  ];

  return (
    <div className="min-h-screen bg-[#1C2526] text-[#F5F6F5] overflow-x-hidden font-sans">
<Helmet>
      {/* Basic Meta Tags */}
      <title>Industries We Serve | Greatodeal</title>
      <meta
        name="description"
        content="Greatodeal delivers secure, scalable, and future-ready digital solutions for multiple industries including banking, education, investment, oil & gas, public sector, supply chain, construction, and e-commerce."
      />
      <link rel="canonical" href="https://greatodeal.com/industries" />

      {/* Open Graph / Facebook / LinkedIn */}
      <meta property="og:title" content="Industries We Serve | Greatodeal" />
      <meta
        property="og:description"
        content="From banking to logistics, Greatodeal provides tailored digital solutions for your industry's unique challenges. Modernize infrastructure, unify data, ensure compliance, and scale with secure, innovative technology."
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://greatodeal.com/industries" />
      <meta property="og:image" content="https://greatodeal.com/images/industries_overview.jpg" />
      <meta property="og:image:alt" content="Industries served by Greatodeal" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Industries We Serve | Greatodeal" />
      <meta
        name="twitter:description"
        content="Greatodeal empowers multiple industries with secure, scalable, and future-ready digital solutions. Tailored services for banking, education, investment, oil & gas, public sector, logistics, construction, and e-commerce."
      />
      <meta name="twitter:image" content="https://greatodeal.com/images/industries_overview.jpg" />
      <meta name="twitter:image:alt" content="Industries served by Greatodeal" />

      {/* Structured Data (JSON-LD) */}
      <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Greatodeal",
            "url": "https://greatodeal.com",
            "logo": "https://greatodeal.com/images/industries_overview.jpg",
            "sameAs": [],
            "department": [
              {
                "@type": "Organization",
                "name": "Industries We Serve",
                "url": "https://greatodeal.com/industries",
                "description": "Greatodeal delivers secure, scalable, and future-ready digital solutions tailored for multiple industries including banking, education, investment, oil & gas, public sector, supply chain, construction, and e-commerce.",
                "image": "https://greatodeal.com/images/industries_overview.jpg"
              }
            ]
          }
        `}
      </script>
    </Helmet>
      {/* ====================== HERO ====================== */}
      <section className="relative py-24 min-h-screen flex items-center justify-center bg-gradient-to-br from-[#1C2526] via-[#2E7D7B] to-[#1C2526]">
        <div className="absolute inset-0 opacity-40 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyRTdENEIiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMSIvPjwvZz48L2c+PC9zdmc+')]"></div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 80 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight"
          >
            Industries We Power
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-lg md:text-xl max-w-3xl mx-auto mb-10 text-[#EEF4F1]"
          >
            From banking to logistics, we deliver secure, scalable and future-ready digital solutions
            tailored to the unique challenges of each sector.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, type: 'spring', stiffness: 100 }}
          >
            <Link
              to="/contact"
              className="group inline-block bg-[#2E7D7B] hover:bg-[#266966] text-[#F5F6F5] px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
            >
              Start a Project
              <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ====================== INDUSTRY GRID ====================== */}
      <section id="industry-grid" className="py-20 bg-[#F5F9F9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={container}
            initial="hidden"
            animate={isVisible['industry-grid'] ? 'visible' : 'hidden'}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {industries.map((industry, i) => {
              const Icon = industry.Icon;
              return (
                <motion.div
                  key={i}
                  variants={item}
                  whileHover={{ 
                    scale: 1.05, 
                    y: -12,
                    transition: { type: "spring", stiffness: 300, damping: 20 }
                  }}
                  className="group relative bg-gradient-to-br from-[#2E7D7B] to-[#266966] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <Link 
                    to={industry.path} 
                    className="block p-6 h-full w-full flex flex-col justify-between text-left relative z-10"
                  >
                    <div>
                      <div className="flex items-center mb-4">
                        <motion.div 
                          className="p-3 bg-white rounded-xl mr-4 shadow-md group-hover:shadow-lg"
                          whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                          transition={{ duration: 0.5 }}
                        >
                          <Icon className="w-7 h-7 text-[#2E7D7B]" />
                        </motion.div>
                        <h3 className="text-xl font-bold text-white">{industry.name}</h3>
                      </div>
                      <p className="text-sm text-white/90 leading-relaxed">{industry.tagline}</p>
                    </div>
                    <div className="mt-6 flex items-center text-white font-medium text-sm group-hover:text-white transition-colors">
                      Explore 
                      <ArrowRight className="ml-2 w-4 h-4 opacity-70 group-hover:opacity-100 translate-x-0 group-hover:translate-x-2 transition-all duration-300" />
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ====================== CHALLENGES & SOLUTIONS ====================== */}
      <section id="challenges" className="py-20 bg-[#1C2526]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-[#F5F6F5] mb-4">
              Industry Challenges We Solve
            </h2>
            <p className="text-lg text-[#B0B7B4] max-w-4xl mx-auto">
              Every sector faces unique digital hurdles. We turn complexity into competitive advantage.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: 'Legacy Systems', desc: 'Modernize outdated infrastructure without disrupting operations.' },
              { title: 'Data Silos', desc: 'Unify fragmented data for real-time insights and decision-making.' },
              { title: 'Regulatory Compliance', desc: 'Built-in audit trails, encryption, and compliance reporting.' },
              { title: 'Scalability', desc: 'Cloud-native architecture that grows with your business.' },
              { title: 'User Adoption', desc: 'Intuitive UX/UI that drives engagement and reduces training time.' },
            ].map((c, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                whileHover={{ scale: 1.03, x: 5 }}
                transition={{ delay: i * 0.1, type: "spring", stiffness: 100 }}
                viewport={{ once: true }}
                className="flex items-start space-x-4 bg-gradient-to-r from-[#2E7D7B]/20 to-[#2E7D7B]/10 p-6 rounded-xl border border-[#2E7D7B]/30 hover:border-[#2E7D7B]/60 hover:shadow-lg transition-all duration-300"
              >
                <CheckCircle className="w-6 h-6 text-[#2E7D7B] mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-[#F5F6F5] text-lg">{c.title}</h3>
                  <p className="text-sm text-[#B0B7B4] mt-1">{c.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================== OUR APPROACH ====================== */}
      <section id="approach" className="py-20 bg-[#F5F9F9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-[#141313] mb-4">
              How We Deliver Excellence
            </h2>
            <p className="text-lg text-[#1B211E] max-w-3xl mx-auto">
              A proven, transparent process from idea to launch and beyond.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ 
                    y: -10,
                    boxShadow: "0 20px 40px rgba(46, 125, 123, 0.3)"
                  }}
                  transition={{ delay: i * 0.1, type: "spring", stiffness: 100 }}
                  viewport={{ once: true }}
                  className="group bg-gradient-to-br from-[#2E7D7B] to-[#266966] p-6 rounded-2xl border border-[#2E7D7B]/30 text-center shadow-lg hover:shadow-2xl transition-all duration-300"
                >
                  <div className="text-5xl font-bold text-white/30 mb-2 group-hover:text-white/50 transition-colors">{step.step}</div>
                  <motion.div 
                    className="bg-white p-3 rounded-full w-fit mx-auto mb-4 shadow-md"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Icon className="w-6 h-6 text-[#2E7D7B]" />
                  </motion.div>
                  <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-sm text-white/90">{step.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ====================== TECH STACK ====================== */}
      <section id="tech-stack" className="py-20 bg-[#1C2526]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-[#F5F6F5] mb-4">
              Built With Cutting-Edge Tech
            </h2>
            <p className="text-lg text-[#B0B7B4] max-w-3xl mx-auto">
              We use the best tools to deliver fast, secure, and scalable solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {techStack.map((tech, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ 
                  scale: 1.08,
                  backgroundColor: "rgba(46, 125, 123, 0.8)",
                  boxShadow: "0 10px 30px rgba(46, 125, 123, 0.3)"
                }}
                transition={{ delay: i * 0.03, type: "spring", stiffness: 200 }}
                viewport={{ once: true }}
                className="bg-[#2E7D7B]/60 p-6 rounded-xl border border-[#2E7D7B]/30 hover:border-[#2E7D7B] transition-all flex items-center justify-center text-center group cursor-pointer"
              >
                <span className="text-sm font-medium text-white group-hover:font-semibold transition-all">{tech}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================== STATS ====================== */}
      <section className="py-20 bg-gradient-to-r from-[#2E7D7B] to-[#266966]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                whileHover={{ scale: 1.1 }}
                transition={{ delay: i * 0.1, type: "spring", stiffness: 150 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl sm:text-5xl font-bold text-white">{stat.value}</div>
                <div className="text-sm sm:text-base text-white/80 mt-2">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================== WHY CHOOSE US ====================== */}
      <section id="why-us" className="py-20 bg-[#F5F9F9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-[#141313] mb-4">
              Why Greatodeal?
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Industry Expertise', icon: Shield, desc: 'Deep domain knowledge across 8+ sectors.' },
              { title: 'Agile & Transparent', icon: Zap, desc: 'Weekly demos, clear roadmaps, no surprises.' },
              { title: 'Scalable Architecture', icon: Layers, desc: 'Built to grow from MVP to enterprise.' },
              { title: 'Security First', icon: Database, desc: 'ISO 27001, SOC 2, GDPR compliant.' },
              { title: '24/7 Support', icon: Globe, desc: 'Global teams, always-on monitoring.' },
              { title: 'Proven Results', icon: BarChart3, desc: '150+ successful digital transformations.' },
            ].map((b, i) => {
              const Icon = b.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ 
                    scale: 1.05, 
                    y: -5,
                    boxShadow: "0 15px 30px rgba(46, 125, 123, 0.2)"
                  }}
                  transition={{ delay: i * 0.08, type: "spring", stiffness: 150 }}
                  viewport={{ once: true }}
                  className="group flex items-center space-x-4 bg-gradient-to-br from-[#2E7D7B] to-[#266966] p-6 rounded-2xl border border-[#2E7D7B]/30 hover:border-[#2E7D7B] shadow-md hover:shadow-xl transition-all duration-300"
                >
                  <motion.div 
                    className="bg-white p-3 rounded-xl shadow-md"
                    whileHover={{ rotate: [0, -15, 15, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <Icon className="w-6 h-6 text-[#2E7D7B]" />
                  </motion.div>
                  <div>
                    <h3 className="font-semibold text-white text-lg">{b.title}</h3>
                    <p className="text-sm text-white/90">{b.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ====================== FINAL CTA ====================== */}
      <section className="py-20 bg-gradient-to-br from-[#1C2526] via-[#2E7D7B] to-[#1C2526] text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            className="text-3xl sm:text-4xl font-bold mb-6 text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Ready to Transform Your Industry?
          </motion.h2>
          <motion.p 
            className="text-lg text-white/80 mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Let's discuss how our expertise can drive growth in your sector.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, type: "spring", stiffness: 150 }}
            viewport={{ once: true }}
          >
            <Link
              to="/contact"
              className="group inline-block bg-white text-[#2E7D7B] px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/90 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              Get in Touch
              <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Industries;
