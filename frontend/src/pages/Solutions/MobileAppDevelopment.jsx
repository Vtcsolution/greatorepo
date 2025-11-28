import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { ChevronRight, ChevronLeft, Search, BarChart3, Settings, Palette, Database, Code, GitBranch, Monitor, Database as DbIcon, Cloud, ArrowRight, CheckCircle, Users, Target, Zap, Shield, Clock, Layers } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const MobileAppDevelopment = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [expandedFAQ, setExpandedFAQ] = useState(0);
  const [isVisible, setIsVisible] = useState({});
  const [expandedService, setExpandedService] = useState(null);

  const testimonials = [
    {
      text: "Greatodeal delivered a stunning mobile app that boosted our user engagement by 60%. Their expertise in cross-platform development was invaluable.",
      name: "Sarah L.",
      role: "Product Manager, AppWorld",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&h=64&fit=crop&crop=face"
    },
    {
      text: "From concept to launch, Greatodeal's team created a seamless iOS and Android app with AI features that transformed our business.",
      name: "David M.",
      role: "Founder, MobileInnovate",
      avatar: "https://images.unsplash.com/photo-1552058540-fc50e719206b?w=64&h=64&fit=crop&crop=face"
    },
    {
      text: "Their mobile app development process was efficient and collaborative, resulting in a high-performance app that exceeded our expectations.",
      name: "Emma R.",
      role: "CEO, TechStart",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&fit=crop&crop=face"
    }
  ];

  const benefits = [
    {
      title: "Cross-Platform Expertise",
      description: "Develop once, deploy everywhere with frameworks that ensure consistent performance across iOS and Android.",
      icon: Target
    },
    {
      title: "User-Centric Design",
      description: "Intuitive UI/UX that drives user adoption and retention in mobile environments.",
      icon: Zap
    },
    {
      title: "Performance Optimization",
      description: "Apps built for speed, efficiency, and battery life to provide superior user experiences.",
      icon: Shield
    },
    {
      title: "Seamless Integration",
      description: "Connect with APIs, hardware features, and third-party services effortlessly.",
      icon: Settings
    },
    {
      title: "Scalable Architecture",
      description: "Future-proof designs that handle growth in users and features without compromise.",
      icon: Clock
    }
  ];

  const solutions = [
    "Native iOS Development (Swift/Objective-C)",
    "Native Android Development (Kotlin/Java)",
    "Cross-Platform Apps (Flutter/React Native)",
    "Hybrid Mobile Applications",
    "Progressive Web Apps (PWAs)",
    "Mobile E-Commerce Solutions",
    "AR/VR Mobile Experiences",
    "IoT-Connected Mobile Apps",
    "Enterprise Mobility Solutions",
    "Mobile Game Development"
  ];

  const industries = [
    {
      title: "Healthcare",
      description: "Secure mobile apps for telemedicine and patient monitoring",
      icon: "🏥"
    },
    {
      title: "Finance",
      description: "Secure banking apps with biometric authentication",
      icon: "💳"
    },
    {
      title: "Logistics",
      description: "Real-time tracking apps for supply chain management",
      icon: "🚛"
    },
    {
      title: "Education",
      description: "Interactive learning apps with offline capabilities",
      icon: "🎓"
    },
    {
      title: "Hospitality",
      description: "Booking and loyalty apps for enhanced guest experiences",
      icon: "🏨"
    },
    {
      title: "Retail",
      description: "AR-enabled shopping apps for virtual try-ons",
      icon: "🛒"
    }
  ];

  const services = [
    {
      title: "App Concept & Research",
      description: "Validate ideas through market research and user analysis to ensure viability.",
      icon: Search
    },
    {
      title: "UI/UX Design",
      description: "Create wireframes and prototypes focused on mobile-specific interactions.",
      icon: Palette
    },
    {
      title: "Development & Coding",
      description: "Build robust code with best practices for mobile platforms.",
      icon: Code
    },
    {
      title: "Testing & QA",
      description: "Comprehensive testing across devices, networks, and scenarios.",
      icon: Settings
    },
    {
      title: "Deployment & Launch",
      description: "Handle app store submissions and initial rollout strategies.",
      icon: Layers
    }
  ];

  const processSteps = [
    { number: "01", title: "What is Mobile App Development?", description: "Mobile app development is the process of creating software applications that run on mobile devices, leveraging device-specific features like touch interfaces, cameras, and GPS." },
    { number: "02", title: "Our Steps in Mobile App Development", description: "We follow a structured approach: discovery, design, development, testing, deployment, and maintenance." },
    { number: "03", title: "How We Do Mobile App Development", description: "Using agile methodologies, we iterate quickly, incorporating feedback at every stage to deliver high-quality apps." },
    { number: "04", title: "The Process We Follow", description: "From ideation to launch: requirements gathering, prototyping, coding, QA, beta testing, and app store optimization." },
    { number: "05", title: "Common Problems We Face and Solve", description: "We address challenges like device fragmentation, performance issues, security concerns, and battery optimization through expert strategies." },
    { number: "06", title: "How We Collaborate with Clients", description: "Through regular meetings, shared tools, and transparent communication to ensure alignment with your vision." },
    { number: "07", title: "Technologies We Use", description: "Flutter for cross-platform, Swift for iOS, Kotlin for Android, with cloud integrations and AI enhancements." },
    { number: "08", title: "Solutions We Provide", description: "Custom solutions for scalability, user engagement, monetization, and integration with existing systems." },
    { number: "09", title: "Our Delivery Approach", description: "We deliver MVPs for quick market entry, followed by iterative updates based on user feedback and analytics." },
    { number: "10", title: "Post-Launch Support", description: "Ongoing maintenance, updates, and performance monitoring to ensure long-term success." }
  ];

  const techStack = [
    {
      category: "Mobile Frameworks",
      technologies: ["Flutter", "React Native", "Xamarin"],
      icon: Code
    },
    {
      category: "Native Development",
      technologies: ["Swift / Objective-C (iOS)", "Kotlin / Java (Android)", "NativeScript"],
      icon: Monitor
    },
    {
      category: "Backend & Cloud",
      technologies: ["Firebase", "AWS Amplify", "Azure Mobile Apps"],
      icon: Cloud
    },
    {
      category: "Databases & Tools",
      technologies: ["SQLite", "Realm", "GraphQL / REST APIs"],
      icon: DbIcon
    }
  ];

  const faqs = [
    {
      question: "What platforms do you develop for?",
      answer: "We specialize in iOS, Android, and cross-platform development to reach the widest audience."
    },
    {
      question: "How long does it take to develop a mobile app?",
      answer: "Typically 3-6 months for an MVP, depending on complexity and features."
    },
    {
      question: "What is the cost of mobile app development?",
      answer: "Costs vary based on scope; we provide custom quotes after initial consultation."
    },
    {
      question: "How do you ensure app security?",
      answer: "We implement encryption, secure authentication, and follow best practices like OWASP mobile guidelines."
    },
    {
      question: "Do you provide post-launch support?",
      answer: "Yes, we offer maintenance packages including updates, bug fixes, and feature additions."
    },
    {
      question: "How do you handle app store submissions?",
      answer: "We manage the entire process, including compliance with Apple and Google guidelines."
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

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

    document.querySelectorAll('[id]').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="min-h-screen bg-gray-800 text-gray-100 overflow-x-hidden"> {/* Changed bg-gray-900 to bg-gray-800 for a slightly lighter dark theme */}
      {/* Hero Section */}
<Helmet>
  {/* Primary Meta Tags */}
  <title>Mobile Application Development Services | iOS, Android & Cross-Platform Apps – Greatodeal</title>
  <meta
    name="description"
    content="Greatodeal develops high-performance mobile apps for iOS, Android, and cross-platform frameworks like Flutter & React Native. Scalable, secure, cloud-ready apps built with modern UI/UX, seamless integrations, and enterprise-level performance."
  />
  <meta
    name="keywords"
    content="mobile app development, iOS app development, Android app development, Flutter apps, React Native apps, mobile solutions, cross-platform apps, enterprise mobile apps, app development company"
  />

  {/* Canonical */}
  <link
    rel="canonical"
    href="https://greatodeal.com/solutions/mobileapps"
  />

  {/* Open Graph / Facebook */}
  <meta property="og:type" content="website" />
  <meta
    property="og:title"
    content="Mobile App Development Services | High-Performance iOS & Android Apps – Greatodeal"
  />
  <meta
    property="og:description"
    content="We build powerful, secure, and scalable mobile applications for startups and enterprises. Native iOS/Android apps, Flutter/React Native, PWAs, IoT apps, and more. Transform your mobile strategy with Greatodeal."
  />
  <meta
    property="og:image"
    content="https://greatodeal.com/images/mobileapp.png"
  />
  <meta
    property="og:image:alt"
    content="Mobile Application Development Services – Greatodeal"
  />
  <meta
    property="og:url"
    content="https://greatodeal.com/solutions/mobileapps"
  />
  <meta property="og:site_name" content="Greatodeal" />

  {/* Twitter Card */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta
    name="twitter:title"
    content="Mobile App Development Services | Scalable iOS & Android Apps – Greatodeal"
  />
  <meta
    name="twitter:description"
    content="Cross-platform, native, and enterprise mobile apps built for speed, security, and scalability. Get a world-class mobile application with Greatodeal’s expert development team."
  />
  <meta
    name="twitter:image"
    content="https://greatodeal.com/images/mobileapp.png"
  />

  {/* Extra fallback image */}
  <meta
    property="og:image:secure"
    content="https://greatodeal.com/images/mobileservices.JPG"
  />

  {/* Additional SEO Tags */}
  <meta name="robots" content="index, follow" />
  <meta name="author" content="Greatodeal" />
  <meta name="language" content="English" />
  <meta name="theme-color" content="#10B981" />
</Helmet>


      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#101010] via-[#1A1A1A] to-[#101010]"> {/* Slightly adjusted gradient colors */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM2RUU3QjciIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMSIvPjwvZz48L2c+PC9zdmc+')]"></div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Left: Heading and Text */}
            <div>
                <div className="text-center lg:text-left">
               <div className="mb-6 inline-block">
                <span className="text-[#6EE7B7] text-xs sm:text-sm font-semibold tracking-wider uppercase animate-fade-in">
                  SERVICES
                </span>
              </div>
              <h1 className="text-2xl md:text-4xl font-bold mb-6 leading-tight animate-slide-up">
                Mobile Application
                <br />
                <span className="text-[#6EE7B7]">Development</span>
              </h1>
              <p className="text-lg max-w-xl text-[#ffffff] mb-8 max-w-3xl mx-auto lg:mx-0 animate-fade-in-delay">
We design and develop high-performance mobile applications that blend innovation, scalability, and seamless user experiences. Built using modern frameworks and cloud-ready architectures, our apps deliver speed, security, and reliability across all devices. From concept to deployment, we create intuitive, engaging mobile solutions that help businesses connect with customers, streamline operations, and drive lasting growth.
          </p>
</div>
            </div>
            {/* Right: Video */}
            <motion.div
                         className="relative flex justify-center lg:justify-end"
                         
                       >
                         <div className="relative w-full max-w-md sm:max-w-lg lg:max-w-full h-[300px] sm:h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                          <img
                 className="w-full h-full object-cover"
                 src='/images/mobileapp.png'
                 alt="Banking illustration"
               />
                           <div className="absolute inset-0 bg-gradient-to-t from-[#1C2526]/50 via-transparent to-transparent"></div>
                         </div>
                       </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 bg-[#1A1A1A]"> {/* Changed bg-[#1E1E1E] to bg-[#1A1A1A] */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 text-[#E5E7EB]">
              Why Choose Greatodeal for Mobile App Development
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  className={`bg-[#1A1A1A] p-6 sm:p-8 rounded-xl border border-[#374151] hover:border-[#6EE7B7] transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl ${
                    isVisible.benefits ? 'animate-slide-up' : 'opacity-0'
                  }`} 
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center mb-4">
                    <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-[#6EE7B7] mr-3 flex-shrink-0" />
                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-[#6EE7B7]">{benefit.title}</h3>
                  </div>
                  <p className="text-sm sm:text-base text-[#9CA3AF] leading-relaxed">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-20 bg-[#101010]"> {/* Changed bg-[#121212] to bg-[#101010] */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <div className="text-center mb-16">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 text-[#E5E7EB]">
                Mobile Solutions for Your Business Needs
              </h2>
            </div>
            <p className="text-center text-base sm:text-lg text-[#9CA3AF] max-w-4xl mx-auto">
              At Greatodeal, we create mobile experiences that connect, engage, and convert in the palm of your users' hands.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className={`flex items-center p-4 bg-[#1A1A1A] rounded-lg border border-[#374151] hover:border-[#6EE7B7] transition-all duration-300 ${
                  isVisible.solutions ? 'animate-fade-in' : 'opacity-0'
                }`} 
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <CheckCircle className="w-5 h-5 text-[#6EE7B7] mr-3 flex-shrink-0" />
                <span className="text-sm sm:text-base text-[#E5E7EB]">{solution}</span>
              </div>
            ))}
          </div>

          <div className="text-center mb-16">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 text-[#E5E7EB]">
              Mobile Expertise Across Industries
            </h2>
            <p className="text-base sm:text-lg text-[#9CA3AF] max-w-4xl mx-auto">
              We deliver mobile solutions tailored to specific sector needs and challenges.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <div
                key={index}
                className={`bg-[#1A1A1A] p-6 sm:p-8 rounded-xl border border-[#374151] hover:border-[#6EE7B7] transition-all duration-500 transform hover:-translate-y-2 ${
                  isVisible.solutions ? 'animate-slide-up' : 'opacity-0'
                }`} 
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-3xl sm:text-4xl mb-4">{industry.icon}</div>
                <h4 className="text-lg sm:text-xl font-bold text-[#6EE7B7] mb-2">{industry.title}</h4>
                <p className="text-sm sm:text-base text-[#9CA3AF]">{industry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-[#101010]"> {/* Changed bg-[#121212] to bg-[#101010] */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 text-[#E5E7EB]">
              Our Mobile Development Services
            </h2>       
            <p className="text-base sm:text-lg text-[#9CA3AF] max-w-3xl mx-auto">
              End-to-end mobile app services from concept to market, focused on innovation and quality.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Services List - Left Column */}
            <div className="space-y-2 lg:space-y-4">
              {services.map((service, index) => {
                const Icon = service.icon;
                const isExpanded = expandedService === index;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="group bg-[#1A1A1A] p-6 sm:p-8 rounded-xl border border-[#374151] hover:border-[#6EE7B7]/50 transition-all duration-500 hover:shadow-xl hover:shadow-[#6EE7B7]/10 overflow-hidden" 
                  >
                    <div className="flex items-center gap-4">
                      <div className="bg-[#6EE7B7] p-3 rounded-lg flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-6 h-6 text-[#121212]" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg sm:text-xl md:text-xl lg:text-1xl font-bold text-[#E5E7EB] group-hover:text-[#6EE7B7] transition-colors duration-300">
                          {service.title}
                        </h3>
                      </div>
                      <button
                        onClick={() => setExpandedService(isExpanded ? null : index)}
                        className="flex items-center gap-2 text-xs sm:text-sm text-[#6EE7B7] hover:text-[#5CD7A5] transition-colors duration-300"
                      >
                        {isExpanded ? 'Show less' : 'Show more'}
                        <ChevronRight
                          className={`w-4 h-4 transition-transform duration-300 ${
                            isExpanded ? 'rotate-90' : ''
                          }`}
                        />
                      </button>
                    </div>

                    {/* Expanded Content */}
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0, marginTop: 0 }}
                        animate={{ opacity: 1, height: 'auto', marginTop: '1rem' }}
                        exit={{ opacity: 0, height: 0, marginTop: 0 }}
                        className="overflow-hidden"
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                      >
                        <div className="pt-4 border-t border-[#374151]/50">
                          <p className="text-sm sm:text-base text-[#9CA3AF] leading-relaxed mb-3">
                            {service.description}
                          </p>
                          <Link
                            to="/contact"
                            className="inline-flex items-center gap-2 text-[#6EE7B7] hover:text-[#5CD7A5] text-xs sm:text-sm font-medium transition-colors duration-300"
                          >
                            Discuss your project
                            <ArrowRight className="w-3 h-3" />
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </motion.div>
                );
              })}
            </div>

            {/* Main Image - Right Column */}
            <div className="relative order-first lg:order-last">
             <img
  src="/images/mobileservices.jpg"
  alt="Team developing mobile apps"
  className="rounded-2xl shadow-2xl w-full h-[400px] sm:h-[500px] lg:h-[600px] object-cover"
/>

              <div className="absolute inset-0 bg-gradient-to-t from-[#101010]/20 via-transparent to-transparent rounded-2xl" /> {/* Adjusted gradient */}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20 bg-[#0D1217] relative overflow-hidden"> {/* Changed bg-[#0F1419] to bg-[#0D1217] */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-1/2 -right-1/2 w-96 h-96 bg-[#6EE7B7]/5 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-1/2 -left-1/2 w-96 h-96 bg-[#3B82F6]/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
          </div>
          
          <div className="text-center mb-16">
            <span className="text-[#6EE7B7] text-xs sm:text-sm font-semibold tracking-wider uppercase mb-4 block animate-fade-in">
              PROCESS
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold mb-6 text-[#E5E7EB] animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              Our Mobile Development Process
            </h2>
            <p className="text-[#9CA3AF] max-w-4xl mx-auto animate-fade-in-up" style={{animationDelay: '0.4s'}}>
              A comprehensive journey from concept to launch, addressing every aspect of mobile app creation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className={`relative group ${
                  isVisible.process ? 'animate-slide-up' : 'opacity-0 translate-y-8'
                }`}
                style={{ animationDelay: `${0.6 + index * 0.2}s` }}
              >
                <div className="bg-gradient-to-br from-[#1A1A1A] via-[#1A1A1A] to-[#1A1A1A] p-6 sm:p-8 rounded-2xl h-full relative overflow-hidden border border-[#374151]/50 hover:border-[#6EE7B7]/40 transition-all duration-500 hover:shadow-2xl hover:shadow-[#6EE7B7]/20 hover:transform hover:scale-105 hover:-translate-y-2"> {/* Changed from-[#1E1E1E] to from-[#1A1A1A] */}
                  {/* Animated gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#6EE7B7]/5 via-transparent to-[#3B82F6]/5 rounded-2xl transition-all duration-500 group-hover:from-[#6EE7B7]/10 group-hover:to-[#3B82F6]/10"></div>
                  
                  {/* Floating particles effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-[#6EE7B7] rounded-full animate-bounce" style={{animationDelay: '0s'}}></div>
                    <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-[#3B82F6] rounded-full animate-bounce" style={{animationDelay: '0.5s'}}></div>
                    <div className="absolute bottom-1/4 left-3/4 w-1 h-1 bg-[#6EE7B7] rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
                  </div>
                  
                  {/* Step number with enhanced animation */}
                  <div className="absolute top-4 left-4 text-4xl sm:text-6xl font-bold text-[#6EE7B7]/20 transition-all duration-500 group-hover:text-[#6EE7B7]/30 group-hover:scale-110">
                    {step.number}
                  </div>
                  
                  {/* Content area with staggered animation */}
                  <div className="relative z-10 pt-12">
                    <h3 className="text-lg sm:text-xl font-bold text-[#E5E7EB] mb-2 transition-all duration-300 group-hover:text-[#6EE7B7]">{step.title}</h3>
                    <p className="text-xs sm:text-sm text-[#9CA3AF] leading-relaxed transition-all duration-300 group-hover:text-[#E5E7EB]">{step.description}</p>
                  </div>
                  
                  {/* Enhanced arrow connector with animation */}
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute -right-4 top-1/2 transform -translate-y-1/2 z-20 animate-pulse">
                      <div className="bg-[#1A1A1A] rounded-full p-2 border border-[#374151] transition-all duration-300 hover:border-[#6EE7B7] hover:bg-[#1A1A1A] hover:shadow-lg hover:shadow-[#6EE7B7]/30"> {/* Changed bg-[#1E1E1E] to bg-[#1A1A1A] */}
                        <ArrowRight className="w-6 h-6 text-[#6EE7B7] transition-transform duration-300 hover:translate-x-1" />
                      </div>
                    </div>
                  )}
                  
                  {/* Enhanced shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#6EE7B7]/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  
                  {/* Glowing border effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#6EE7B7]/20 via-[#3B82F6]/20 to-[#6EE7B7]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section id="technology" className="py-20 bg-[#101010]"> {/* Changed bg-[#121212] to bg-[#101010] */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <span className="text-[#6EE7B7] text-xs sm:text-sm font-semibold tracking-wider uppercase mb-4 block">
              TECHNOLOGY STACK
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold mb-6 text-[#E5E7EB]">
              Technologies for Mobile Innovation
            </h2>
            <p className="text-base sm:text-lg text-[#9CA3AF] max-w-4xl mx-auto">
              Our mobile tech stack ensures high-performance, secure, and feature-rich applications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {techStack.map((stack, index) => {
              const Icon = stack.icon;
              return (
                <div
                  key={index}
                  className={`bg-[#1A1A1A] p-6 sm:p-8 rounded-2xl border border-[#374151] hover:border-[#6EE7B7] transition-all duration-500 ${
                    isVisible.technology ? 'animate-slide-up' : 'opacity-0'
                  }`} 
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="text-center mb-8">
                    <Icon className="w-12 h-12 sm:w-16 sm:h-16 text-[#6EE7B7] mx-auto mb-4" />
                    <h3 className="text-lg sm:text-2xl font-bold text-[#6EE7B7]">{stack.category}</h3>
                  </div>
                  <div className="space-y-3">
                    {stack.technologies.map((tech, techIndex) => (
                      <div key={techIndex} className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-[#6EE7B7] mr-3 flex-shrink-0" />
                        <span className="text-sm sm:text-base text-[#9CA3AF]">{tech}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

     
      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-[#1A1A1A]"> {/* Changed bg-[#1E1E1E] to bg-[#1A1A1A] */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-3xl font-bold text-center mb-16 text-[#6EE7B7]">
            Frequently Asked Questions
          </h2>

          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`bg-[#1A1A1A] rounded-xl overflow-hidden border border-[#374151] ${
                  isVisible.faq ? 'animate-fade-in' : 'opacity-0'
                }`} 
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <button
                  onClick={() => setExpandedFAQ(expandedFAQ === index ? -1 : index)}
                  className="w-full text-left p-6 hover:bg-[#262626] transition-colors duration-300 flex justify-between items-center"
                >
                  <span className="text-base sm:text-lg font-semibold text-[#E5E7EB]">{faq.question}</span>
                  <ChevronRight
                    className={`w-5 h-5 text-[#6EE7B7] transform transition-transform duration-300 ${
                      expandedFAQ === index ? 'rotate-90' : ''
                    }`}
                  />
                </button>
                {expandedFAQ === index && (
                  <div className="px-6 pb-6 text-[#9CA3AF] leading-relaxed text-sm sm:text-base animate-slide-down">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#1A1A1A] to-[#101010] overflow-hidden"> {/* Adjusted gradient */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold text-[#E5E7EB] mb-8">
              <motion.span 
                className="inline-block"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Bring your mobile app idea to life with Greatodeal.
              </motion.span>
              <br />
              <motion.span
                className="inline-block"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Let's create something extraordinary.
              </motion.span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6, type: "spring", stiffness: 100 }}
          >
            <Link 
              to="/contact" 
              className="inline-block bg-[#6EE7B7] hover:bg-[#5CD7A5] text-[#121212] px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl text-sm sm:text-base"
            >
              Get Started
            </Link>
          </motion.div>

          {/* Subtle floating circles as decorative elements */}
          <motion.div 
            className="absolute top-1/4 left-1/4 w-3 h-3 rounded-full bg-[#6EE7B7]/20"
            animate={{
              y: [0, -15, 0],
              opacity: [0.2, 0.5, 0.2]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="absolute bottom-1/3 right-1/4 w-4 h-4 rounded-full bg-[#E5E7EB]/10"
            animate={{
              y: [0, 20, 0],
              x: [0, 10, 0]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
      </section>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
        
        .font-inter {
          font-family: 'Inter', sans-serif;
        }

        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-left {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slide-down {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }

        .animate-fade-in-delay {
          animation: fade-in 0.8s ease-out 0.3s forwards;
          opacity: 0;
        }

        .animate-slide-up {
          animation: slide-up 0.8s ease-out forwards;
        }

        .animate-slide-up-delay {
          animation: slide-up 0.8s ease-out 0.5s forwards;
          opacity: 0;
        }

        .animate-slide-left {
          animation: slide-left 0.8s ease-out forwards;
        }

        .animate-slide-down {
          animation: slide-down 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default MobileAppDevelopment;
