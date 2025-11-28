// src/pages/Solutions/Services.jsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Code, Smartphone, Settings, Cloud, Brain, Palette, GitBranch, Zap,
  ArrowRight, CheckCircle, Globe, Bot, Database, Layers, BarChart3,
  Lightbulb, Target, Rocket, Shield, Wrench,
} from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const Services = () => {
  const [isVisible, setIsVisible] = useState({});

  // ── Intersection observer (scroll-in animation) ─────────────────────
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[id]').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // ── BENEFITS (still mapped – they are tiny) ────────────────────────
  const benefits = [
    { title: 'End-to-End Solutions', icon: CheckCircle },
    { title: 'Expert Team', icon: CheckCircle },
    { title: 'Agile Process', icon: CheckCircle },
    { title: 'Scalable Architecture', icon: CheckCircle },
    { title: '24/7 Support', icon: CheckCircle },
    { title: 'Proven Results', icon: CheckCircle },
  ];

  // ── PROCESS STEPS ────────────────────────
  const processSteps = [
    { step: '01', title: 'Discovery & Strategy', desc: 'We dive deep into your business goals, challenges, and vision to craft a tailored roadmap.', icon: Lightbulb },
    { step: '02', title: 'Design & Prototyping', desc: 'User-centric wireframes, UI/UX mockups, and interactive prototypes to validate ideas fast.', icon: Palette },
    { step: '03', title: 'Development & Testing', desc: 'Agile sprints, clean code, CI/CD pipelines, and rigorous QA for flawless delivery.', icon: Code },
    { step: '04', title: 'Deployment & Scale', desc: 'Seamless launch on cloud infrastructure with auto-scaling, monitoring, and zero downtime.', icon: Rocket },
    { step: '05', title: 'Support & Growth', desc: 'Ongoing maintenance, performance optimization, and feature expansion as you grow.', icon: Wrench },
  ];

  // ── TECH STACK ────────────────────────
  const techStack = [
    { name: 'React / Next.js' },
    { name: 'Node.js / NestJS' },
    { name: 'Python / FastAPI' },
    { name: 'Flutter / React Native' },
    { name: 'AWS / GCP / Azure' },
    { name: 'Docker / Kubernetes' },
    { name: 'PostgreSQL / MongoDB' },
    { name: 'TensorFlow / PyTorch' },
    { name: 'GraphQL / REST' },
    { name: 'Figma / Tailwind' },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 overflow-x-hidden">


<Helmet>
      {/* Page Title */}
      <title>Our Services | Greatodeal - AI SaaS & Software Development Solutions</title>

      {/* Meta Description */}
      <meta
        name="description"
        content="Explore Greatodeal's services including web & mobile apps, AI SaaS platforms, custom software, automation, and AI-driven solutions to scale your business."
      />

      {/* Canonical URL */}
      <link rel="canonical" href="https://greatodeal.com/services" />

      {/* Open Graph / Facebook */}
      <meta property="og:title" content="Our Services | Greatodeal - AI SaaS & Software Development Solutions" />
      <meta
        property="og:description"
        content="From websites and mobile apps to AI-powered SaaS platforms, Greatodeal delivers innovative, scalable, and secure solutions tailored to your business vision."
      />
      <meta property="og:url" content="https://greatodeal.com/services" />
      <meta property="og:type" content="website" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content="Our Services | Greatodeal - AI SaaS & Software Development Solutions" />
      <meta
        name="twitter:description"
        content="Discover Greatodeal's services: AI SaaS, web & mobile apps, custom software, automation, and business intelligence solutions designed to accelerate growth."
      />

      {/* Robots */}
      <meta name="robots" content="index, follow" />
    </Helmet>
      {/* ────────────────────── HERO ────────────────────── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#121212] via-[#1E1E1E] to-[#121212]">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM2RUU3QjciIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMSIvPjwvZz48L2c+PC9zdmc+')]"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6 inline-block"
            >
              <span className="text-[#6EE7B7] text-xs sm:text-sm font-semibold tracking-wider uppercase">
                OUR SERVICES
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight"
            >
              Build the Future
              <br />
              <span className="text-[#6EE7B7]">With Greatodeal</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl text-[#D1D5DB] mb-10 max-w-4xl mx-auto"
            >
              From cutting-edge web apps to AI-driven SaaS platforms — we deliver
              scalable, secure, and innovative solutions tailored to your vision.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, type: 'spring' }}
            >
              <Link
                to="/contact"
                className="inline-block bg-[#6EE7B7] hover:bg-[#5CD7A5] text-[#121212] px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
              >
                Start Your Project
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ────────────────────── SERVICE CARDS (MANUAL) ────────────────────── */}
      

      {/* ────────────────────── HOW WE WORK ────────────────────── */}
      <section id="process" className="py-20 bg-[#121212]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#E5E7EB] mb-4">
              How We Deliver Excellence
            </h2>
            <p className="text-[#9CA3AF] text-lg max-w-3xl mx-auto">
              A proven, transparent process from idea to launch and beyond.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {processSteps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="relative group"
                >
                  <div className="bg-[#1E1E1E] p-6 rounded-2xl border border-[#374151] hover:border-[#6EE7B7] transition-all h-full flex flex-col items-center text-center">
                    <div className="text-5xl font-bold text-[#6EE7B7] mb-2">{step.step}</div>
                    <div className="bg-[#6EE7B7] p-3 rounded-full mb-4">
                      <Icon className="w-6 h-6 text-[#121212]" />
                    </div>
                    <h3 className="text-lg font-bold text-[#E5E7EB] mb-2">{step.title}</h3>
                    <p className="text-sm text-[#9CA3AF] flex-1">{step.desc}</p>
                  </div>
                  {i < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-[#374151] group-hover:bg-[#6EE7B7] transition-colors -translate-y-1/2"></div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ────────────────────── TECH STACK ────────────────────── */}
      <section id="tech-stack" className="py-20 bg-[#1E1E1E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#E5E7EB] mb-4">
              Built With Cutting-Edge Tech
            </h2>
            <p className="text-[#9CA3AF] text-lg max-w-3xl mx-auto">
              We use the best tools to deliver fast, secure, and scalable solutions.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {techStack.map((tech, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05 }}
                className="bg-[#121212] p-6 rounded-xl border border-[#374151] hover:border-[#6EE7B7] transition-all flex flex-col items-center text-center group"
              >
                <span className="text-sm font-medium text-[#E5E7EB] group-hover:text-[#6EE7B7] transition-colors">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ────────────────────── SOLUTIONS LIST (MANUAL) ────────────────────── */}
      <section id="solutions-tailored" className="py-20 bg-[#121212]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#E5E7EB] mb-4">
              Solutions Tailored for Your Digital Transformation
            </h2>
            <p className="text-[#9CA3AF] text-lg max-w-4xl mx-auto">
              At Greatodeal, we don&apos;t just build software — we create digital experiences
              that empower businesses to scale, adapt, and thrive in a competitive world.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* ── ITEM 1 ── */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isVisible['solutions-tailored'] ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0 }}
              className="group"
            >
              <Link
                to="/solutions/webapps"
                className="flex items-center p-5 bg-[#1E1E1E] rounded-xl border border-[#374151] hover:border-[#6EE7B7] transition-all duration-300 hover:shadow-lg hover:shadow-[#6EE7B7]/10"
              >
                <div className="bg-[#6EE7B7] p-3 rounded-lg mr-4 flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Globe className="w-6 h-6 text-[#121212]" />
                </div>
                <span className="text-base sm:text-lg font-medium text-[#E5E7EB] group-hover:text-[#6EE7B7] transition-colors">
                  Website Development
                </span>
                <ArrowRight className="ml-auto w-5 h-5 text-[#6EE7B7] opacity-0 group-hover:opacity-100 translate-x-0 group-hover:translate-x-2 transition-all duration-300" />
              </Link>
            </motion.div>

            {/* ── ITEM 2 ── */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isVisible['solutions-tailored'] ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.08 }}
              className="group"
            >
              <Link
                to="/solutions/mobileapps"
                className="flex items-center p-5 bg-[#1E1E1E] rounded-xl border border-[#374151] hover:border-[#6EE7B7] transition-all duration-300 hover:shadow-lg hover:shadow-[#6EE7B7]/10"
              >
                <div className="bg-[#6EE7B7] p-3 rounded-lg mr-4 flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Smartphone className="w-6 h-6 text-[#121212]" />
                </div>
                <span className="text-base sm:text-lg font-medium text-[#E5E7EB] group-hover:text-[#6EE7B7] transition-colors">
                  Mobile Applications (Android/iOS)
                </span>
                <ArrowRight className="ml-auto w-5 h-5 text-[#6EE7B7] opacity-0 group-hover:opacity-100 translate-x-0 group-hover:translate-x-2 transition-all duration-300" />
              </Link>
            </motion.div>

            {/* ── ITEM 3 ── */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isVisible['solutions-tailored'] ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.16 }}
              className="group"
            >
              <Link
                to="/solutions/webapps"
                className="flex items-center p-5 bg-[#1E1E1E] rounded-xl border border-[#374151] hover:border-[#6EE7B7] transition-all duration-300 hover:shadow-lg hover:shadow-[#6EE7B7]/10"
              >
                <div className="bg-[#6EE7B7] p-3 rounded-lg mr-4 flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Bot className="w-6 h-6 text-[#121212]" />
                </div>
                <span className="text-base sm:text-lg font-medium text-[#E5E7EB] group-hover:text-[#6EE7B7] transition-colors">
                  AI-Powered Websites
                </span>
                <ArrowRight className="ml-auto w-5 h-5 text-[#6EE7B7] opacity-0 group-hover:opacity-100 translate-x-0 group-hover:translate-x-2 transition-all duration-300" />
              </Link>
            </motion.div>

            {/* ── ITEM 4 ── */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isVisible['solutions-tailored'] ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.24 }}
              className="group"
            >
              <Link
                to="/solutions/mobileapps"
                className="flex items-center p-5 bg-[#1E1E1E] rounded-xl border border-[#374151] hover:border-[#6EE7B7] transition-all duration-300 hover:shadow-lg hover:shadow-[#6EE7B7]/10"
              >
                <div className="bg-[#6EE7B7] p-3 rounded-lg mr-4 flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Brain className="w-6 h-6 text-[#121212]" />
                </div>
                <span className="text-base sm:text-lg font-medium text-[#E5E7EB] group-hover:text-[#6EE7B7] transition-colors">
                  AI-Driven Mobile Apps
                </span>
                <ArrowRight className="ml-auto w-5 h-5 text-[#6EE7B7] opacity-0 group-hover:opacity-100 translate-x-0 group-hover:translate-x-2 transition-all duration-300" />
              </Link>
            </motion.div>

            {/* ── ITEM 5 ── */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isVisible['solutions-tailored'] ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.32 }}
              className="group"
            >
              <Link
                to="/solutions/custom_software"
                className="flex items-center p-5 bg-[#1E1E1E] rounded-xl border border-[#374151] hover:border-[#6EE7B7] transition-all duration-300 hover:shadow-lg hover:shadow-[#6EE7B7]/10"
              >
                <div className="bg-[#6EE7B7] p-3 rounded-lg mr-4 flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Settings className="w-6 h-6 text-[#121212]" />
                </div>
                <span className="text-base sm:text-lg font-medium text-[#E5E7EB] group-hover:text-[#6EE7B7] transition-colors">
                  Custom Software Development
                </span>
                <ArrowRight className="ml-auto w-5 h-5 text-[#6EE7B7] opacity-0 group-hover:opacity-100 translate-x-0 group-hover:translate-x-2 transition-all duration-300" />
              </Link>
            </motion.div>

            {/* ── ITEM 6 ── */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isVisible['solutions-tailored'] ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.40 }}
              className="group"
            >
              <Link
                to="/solutions/saasplatform"
                className="flex items-center p-5 bg-[#1E1E1E] rounded-xl border border-[#374151] refed border-[#6EE7B7] transition-all duration-300 hover:shadow-lg hover:shadow-[#6EE7B7]/10"
              >
                <div className="bg-[#6EE7B7] p-3 rounded-lg mr-4 flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Zap className="w-6 h-6 text-[#121212]" />
                </div>
                <span className="text-base sm:text-lg font-medium text-[#E5E7EB] group-hover:text-[#6EE7B7] transition-colors">
                  AI SaaS Platforms
                </span>
                <ArrowRight className="ml-auto w-5 h-5 text-[#6EE7B7] opacity-0 group-hover:opacity-100 translate-x-0 group-hover:translate-x-2 transition-all duration-300" />
              </Link>
            </motion.div>

            {/* ── ITEM 7 ── */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isVisible['solutions-tailored'] ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.48 }}
              className="group"
            >
              <Link
                to="/solutions/machine_learning"
                className="flex items-center p-5 bg-[#1E1E1E] rounded-xl border border-[#374151] hover:border-[#6EE7B7] transition-all duration-300 hover:shadow-lg hover:shadow-[#6EE7B7]/10"
              >
                <div className="bg-[#6EE7B7] p-3 rounded-lg mr-4 flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Database className="w-6 h-6 text-[#121212]" />
                </div>
                <span className="text-base sm:text-lg font-medium text-[#E5E7EB] group-hover:text-[#6EE7B7] transition-colors">
                  AI & Machine Learning Solutions
                </span>
                <ArrowRight className="ml-auto w-5 h-5 text-[#6EE7B7] opacity-0 group-hover:opacity-100 translate-x-0 group-hover:translate-x-2 transition-all duration-300" />
              </Link>
            </motion.div>

            {/* ── ITEM 8 ── */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isVisible['solutions-tailored'] ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.56 }}
              className="group"
            >
              <Link
                to="/solutions/custom_software"
                className="flex items-center p-5 bg-[#1E1E1E] rounded-xl border border-[#374151] hover:border-[#6EE7B7] transition-all duration-300 hover:shadow-lg hover:shadow-[#6EE7B7]/10"
              >
                <div className="bg-[#6EE7B7] p-3 rounded-lg mr-4 flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Layers className="w-6 h-6 text-[#121212]" />
                </div>
                <span className="text-base sm:text-lg font-medium text-[#E5E7EB] group-hover:text-[#6EE7B7] transition-colors">
                  Automation & RPA
                </span>
                <ArrowRight className="ml-auto w-5 h-5 text-[#6EE7B7] opacity-0 group-hover:opacity-100 translate-x-0 group-hover:translate-x-2 transition-all duration-300" />
              </Link>
            </motion.div>

            {/* ── ITEM 9 ── */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isVisible['solutions-tailored'] ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.64 }}
              className="group"
            >
              <Link
                to="/solutions/machine_learning"
                className="flex items-center p-5 bg-[#1E1E1E] rounded-xl border border-[#374151] hover:border-[#6EE7B7] transition-all duration-300 hover:shadow-lg hover:shadow-[#6EE7B7]/10"
              >
                <div className="bg-[#6EE7B7] p-3 rounded-lg mr-4 flex-shrink-0 group-hover:scale-110 transition-transform">
                  <BarChart3 className="w-6 h-6 text-[#121212]" />
                </div>
                <span className="text-base sm:text-lg font-medium text-[#E5E7EB] group-hover:text-[#6EE7B7] transition-colors">
                  Business Intelligence & Analytics
                </span>
                <ArrowRight className="ml-auto w-5 h-5 text-[#6EE7B7] opacity-0 group-hover:opacity-100 translate-x-0 group-hover:translate-x-2 transition-all duration-300" />
              </Link>
            </motion.div>

            {/* ── ITEM 10 ── */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isVisible['solutions-tailored'] ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.72 }}
              className="group"
            >
              <Link
                to="/solutions/infrastructure"
                className="flex items-center p-5 bg-[#1E1E1E] rounded-xl border border-[#374151] hover:border-[#6EE7B7] transition-all duration-300 hover:shadow-lg hover:shadow-[#6EE7B7]/10"
              >
                <div className="bg-[#6EE7B7] p-3 rounded-lg mr-4 flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Cloud className="w-6 h-6 text-[#121212]" />
                </div>
                <span className="text-base sm:text-lg font-medium text-[#E5E7EB] group-hover:text-[#6EE7B7] transition-colors">
                  Cloud-Native Integrations
                </span>
                <ArrowRight className="ml-auto w-5 h-5 text-[#6EE7B7] opacity-0 group-hover:opacity-100 translate-x-0 group-hover:translate-x-2 transition-all duration-300" />
              </Link>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ────────────────────── BENEFITS (still mapped) ────────────────────── */}
      <section className="py-20 bg-[#121212]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#E5E7EB] mb-4">
              Why Partner With Us
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((b, i) => {
              const Icon = b.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center space-x-4 bg-[#1E1E1E] p-6 rounded-xl border border-[#374151] hover:border-[#6EE7B7] transition-all"
                >
                  <div className="bg-[#6EE7B7] p-3 rounded-lg">
                    <Icon className="w-6 h-6 text-[#121212]" />
                  </div>
                  <span className="text-lg font-semibold text-[#E5E7EB]">{b.title}</span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ────────────────────── CTA ────────────────────── */}
      <section className="py-20 bg-gradient-to-br from-[#1E1E1E] to-[#121212]">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#E5E7EB] mb-6">
            Ready to Build Something Great?
          </h2>
          <p className="text-[#9CA3AF] mb-8 text-lg">
            Let’s discuss how our services can accelerate your growth.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-[#6EE7B7] hover:bg-[#5CD7A5] text-[#121212] px-8 py-4 rounded-lg font-bold text-lg transition-all transform hover:scale-105 hover:shadow-xl"
          >
            Get in Touch
          </Link>
        </div>
      </section>

      {/* ────────────────────── CUSTOM ANIMATIONS ────────────────────── */}
      <style jsx>{`
        @keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slide-up { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fade-in { animation: fade-in 0.8s ease-out forwards; }
        .animate-slide-up { animation: slide-up 0.8s ease-out forwards; }
      `}</style>
    </div>
  );
};

export default Services;