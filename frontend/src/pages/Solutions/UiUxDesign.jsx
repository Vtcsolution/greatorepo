import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { ChevronRight, ChevronLeft, Search, BarChart3, Settings, Palette, Database, Code, GitBranch, Monitor, Database as DbIcon, Cloud, ArrowRight, CheckCircle, Users, Target, Zap, Shield, Clock, Layers } from 'lucide-react';
import { Helmet } from "react-helmet-async";

const UiUxDesign = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [expandedFAQ, setExpandedFAQ] = useState(0);
  const [isVisible, setIsVisible] = useState({});
  const [expandedService, setExpandedService] = useState(null);

  const testimonials = [
    {
      text: "Greatodeal's UI/UX team redesigned our app interface, boosting user satisfaction by 45% and reducing bounce rates.",
      name: "Lisa M.",
      role: "Product Manager, AppFlow",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&h=64&fit=crop&crop=face"
    },
    {
      text: "Their user-centered approach transformed our website, making it more intuitive and engaging for our customers.",
      name: "Robert K.",
      role: "CEO, DigitalEdge",
      avatar: "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=64&h=64&fit=crop&crop=face"
    },
    {
      text: "From wireframes to final design, Greatodeal delivered exceptional UI/UX that aligned perfectly with our brand.",
      name: "Anna S.",
      role: "Design Lead, CreativeCo",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&fit=crop&crop=face"
    }
  ];

  const benefits = [
    {
      title: "User-Centered Design",
      description: "Create interfaces that prioritize user needs and enhance satisfaction.",
      icon: Target
    },
    {
      title: "Responsive Layouts",
      description: "Designs that adapt seamlessly to all devices and screen sizes.",
      icon: Monitor
    },
    {
      title: "Accessibility Compliance",
      description: "Ensure inclusive designs that meet WCAG standards for all users.",
      icon: Users
    },
    {
      title: "Brand Consistency",
      description: "Maintain visual coherence across all digital touchpoints.",
      icon: Palette
    },
    {
      title: "Conversion Optimization",
      description: "Design elements that drive user actions and business goals.",
      icon: Zap
    }
  ];

  const solutions = [
    "Wireframing & Prototyping",
    "User Research & Personas",
    "Interaction Design",
    "Visual Design Systems",
    "Usability Testing",
    "Information Architecture",
    "Micro-Interactions",
    "Design Systems",
    "A/B Testing",
    "User Journey Mapping"
  ];

  const industries = [
    {
      title: "E-Commerce",
      description: "Intuitive shopping experiences that boost conversions",
      icon: "🛒"
    },
    {
      title: "Healthcare",
      description: "User-friendly patient portals and medical apps",
      icon: "🏥"
    },
    {
      title: "Finance",
      description: "Secure and intuitive banking interfaces",
      icon: "💳"
    },
    {
      title: "Education",
      description: "Engaging learning platforms and e-learning tools",
      icon: "🎓"
    },
    {
      title: "Entertainment",
      description: "Immersive media and streaming interfaces",
      icon: "🎥"
    },
    {
      title: "SaaS",
      description: "Efficient dashboards for software applications",
      icon: "☁️"
    }
  ];

  const services = [
    {
      title: "User Research",
      description: "Conduct interviews and surveys to understand user needs.",
      icon: Search
    },
    {
      title: "Wireframing",
      description: "Create low-fidelity sketches of user interfaces.",
      icon: Palette
    },
    {
      title: "Prototyping",
      description: "Build interactive mockups for user testing.",
      icon: Layers
    },
    {
      title: "Visual Design",
      description: "Craft high-fidelity designs with color, typography, and imagery.",
      icon: Code
    },
    {
      title: "Usability Testing",
      description: "Evaluate designs with real users for improvements.",
      icon: BarChart3
    }
  ];

  const processSteps = [
    { number: "01", title: "What is UI/UX Design?", description: "UI/UX design focuses on creating intuitive interfaces and seamless user experiences for digital products." },
    { number: "02", title: "How We Start: Discovery Phase", description: "Gather requirements, research users, and define project goals." },
    { number: "03", title: "What is the Process?", description: "Our process includes research, design, prototyping, testing, and iteration." },
    { number: "04", title: "How We Do It: Iterative Design", description: "Use agile methods with continuous feedback loops." },
    { number: "05", title: "What Problems We Face?", description: "Balancing aesthetics with functionality, handling diverse user needs, technical constraints." },
    { number: "06", title: "How We Solve Problems: User Testing", description: "Conduct iterative testing to identify and resolve issues early." },
    { number: "07", title: "How We Collaborate?", description: "Regular reviews, shared tools like Figma, and close client communication." },
    { number: "08", title: "What Tech We Use?", description: "Figma, Sketch, Adobe XD, InVision for design and prototyping." },
    { number: "09", title: "What Solutions We Provide?", description: "Custom UI/UX designs that improve user engagement and satisfaction." },
    { number: "10", title: "What We Deliver?", description: "Complete design assets, prototypes, and implementation guidelines." },
    { number: "11", title: "How We Ensure Success: Metrics Tracking", description: "Measure success through user analytics and feedback post-launch." }
  ];

  const techStack = [
    {
      category: "Design Tools",
      technologies: ["Figma", "Sketch", "Adobe XD"],
      icon: Palette
    },
    {
      category: "Prototyping",
      technologies: ["InVision", "Proto.io", "Marvel"],
      icon: Layers
    },
    {
      category: "User Testing",
      technologies: ["UserTesting", "Lookback", "Optimal Workshop"],
      icon: BarChart3
    },
    {
      category: "Collaboration",
      technologies: ["Miro", "Zeplin", "Slack"],
      icon: Users
    }
  ];

  const faqs = [
    {
      question: "What is the difference between UI and UX?",
      answer: "UI focuses on visual elements, while UX emphasizes overall user experience and journey."
    },
    {
      question: "How long does a UI/UX design project take?",
      answer: "Typically 4-12 weeks, depending on project complexity and scope."
    },
    {
      question: "Do you conduct user research?",
      answer: "Yes, we perform in-depth user research to inform our designs."
    },
    {
      question: "Can you redesign existing applications?",
      answer: "Absolutely, we specialize in UI/UX audits and redesigns."
    },
    {
      question: "What tools do you use for prototyping?",
      answer: "We primarily use Figma and Adobe XD for interactive prototypes."
    },
    {
      question: "How do you ensure mobile responsiveness?",
      answer: "We design with mobile-first principles and test across devices."
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
    <div className="min-h-screen bg-gray-900 text-gray-200 overflow-x-hidden">
      {/* Hero Section */}

      <Helmet>
      {/* Basic Meta Tags */}
      <title>UI/UX Design Services | Greatodeal</title>
      <meta
        name="description"
        content="Greatodeal creates data-driven, user-focused UI/UX designs. From wireframing to prototyping, we craft seamless, accessible, and visually stunning interfaces that boost user engagement and conversions."
      />
      <link rel="canonical" href="https://greatodeal.com/solutions/uiux" />

      {/* Open Graph / Facebook / LinkedIn */}
      <meta property="og:title" content="UI/UX Design Services | Greatodeal" />
      <meta
        property="og:description"
        content="Elevate your digital presence with Greatodeal's UI/UX services. Expert user research, interaction design, and visual design systems for intuitive and engaging experiences."
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://greatodeal.com/solutions/uiux" />
      <meta property="og:image" content="https://greatodeal.com/public/images/uiux_design2.jpg" />
      <meta property="og:image:alt" content="UI/UX Design Services by Greatodeal" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="UI/UX Design Services | Greatodeal" />
      <meta
        name="twitter:description"
        content="Transform your user experience with Greatodeal. We provide UI/UX design services including wireframing, prototyping, usability testing, and responsive, accessible designs."
      />
      <meta name="twitter:image" content="https://greatodeal.com/public/images/uiux_design2.jpg" />
      <meta name="twitter:image:alt" content="UI/UX Design Services by Greatodeal" />

      {/* Structured Data (JSON-LD) */}
      <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "UI/UX Design Services",
            "url": "https://greatodeal.com/solutions/uiux",
            "image": "https://greatodeal.com/public/images/uiux_design2.jpg",
            "description": "Greatodeal delivers user-centered, responsive, and accessible UI/UX design services including wireframing, prototyping, visual design, and usability testing to enhance user engagement and conversions.",
            "provider": {
              "@type": "Organization",
              "name": "Greatodeal",
              "url": "https://greatodeal.com",
              "logo": "https://greatodeal.com/public/images/uiux_design2.jpg"
            }
          }
        `}
      </script>
    </Helmet>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#121212] via-[#1E1E1E] to-[#121212]">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM2RUU3QjciIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMSIvPjwvZz48L2c+PC9zdmc+')]"></div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left Column: Text Content */}
           <div className="text-center lg:text-left">
               <div className="mb-6 inline-block">
                <span className="text-[#6EE7B7] text-xs sm:text-sm font-semibold tracking-wider uppercase animate-fade-in">
                  SERVICES
                </span>
              </div>
              <h1 className="text-2xl md:text-4xl font-bold mb-6 leading-tight animate-slide-up">
              UI/UX Design

                <br />
                <span className="text-[#6EE7B7]">Services</span>
              </h1>
              <p className="text-lg max-w-xl text-[#ffffff] mb-8 max-w-3xl mx-auto lg:mx-0 animate-fade-in-delay">
We create data-driven, user-focused designs that elevate your digital presence. Our UI/UX experts blend strategy, design thinking, and technology to craft interfaces that are not only visually striking but also highly functional. Every design decision is guided by usability, accessibility, and business goals — ensuring your users enjoy a seamless and intuitive journey across all devices.</p>
  
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
            </div>

            {/* Right Column: Video */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md sm:max-w-lg lg:max-w-full h-[300px] sm:h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                  src="https://videos.pexels.com/video-files/1350205/1350205-hd_1920_1080_30fps.mp4"
                  poster="https://images.unsplash.com/photo-1618005182384-a83a8bd9424b?w=600&h=600&fit=crop"
                >
                  Your browser does not support the video tag.
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-[#121212]/40 via-transparent to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 bg-[#1E1E1E]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 text-[#E5E7EB]">
              Why Choose Greatodeal for UI/UX Design
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  className={`bg-[#1E1E1E] p-6 sm:p-8 rounded-xl border border-[#374151] hover:border-[#6EE7B7] transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl ${
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
      <section id="solutions" className="py-20 bg-[#121212]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <div className="text-center mb-16">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 text-[#E5E7EB]">
                UI/UX Solutions for Exceptional Experiences
              </h2>
            </div>
            <p className="text-center text-base sm:text-lg text-[#9CA3AF] max-w-4xl mx-auto">
              We deliver designs that captivate users and drive business success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className={`flex items-center p-4 bg-[#1E1E1E] rounded-lg border border-[#374151] hover:border-[#6EE7B7] transition-all duration-300 ${
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
              Expertise Across Industries
            </h2>
            <p className="text-base sm:text-lg text-[#9CA3AF] max-w-4xl mx-auto">
              Tailored UI/UX for various sectors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <div
                key={index}
                className={`bg-[#1E1E1E] p-6 sm:p-8 rounded-xl border border-[#374151] hover:border-[#6EE7B7] transition-all duration-500 transform hover:-translate-y-2 ${
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
     <section id="services" className="py-20 bg-[#121212]">
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 text-[#E5E7EB]">
        Our UI/UX Design Services
      </h2>
      <p className="text-sm sm:text-base text-[#9CA3AF] max-w-3xl mx-auto">
        Comprehensive services to create outstanding user experiences.
      </p>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
      {/* Services List - Left Column */}
      <div className="space-y-3 lg:space-y-4">
        {services.map((service, index) => {
          const Icon = service.icon;
          const isExpanded = expandedService === index;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.06 }}
              className="group bg-[#1E1E1E] p-3 sm:p-6 rounded-xl border border-[#374151] hover:border-[#6EE7B7]/50 transition-all duration-400 hover:shadow-xl hover:shadow-[#6EE7B7]/10 overflow-hidden"
            >
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="bg-[#6EE7B7] p-2 sm:p-3 rounded-lg flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-[#121212]" />
                </div>

                <div className="flex-1 min-w-0">
                  {/* Title: smaller on mobile, larger on sm+ */}
                  <h3 className="text-sm sm:text-lg md:text-xl font-bold text-[#E5E7EB] group-hover:text-[#6EE7B7] transition-colors duration-300 truncate">
                    {service.title}
                  </h3>
                </div>

                <button
                  onClick={() => setExpandedService(isExpanded ? null : index)}
                  className="flex items-center gap-2 text-[11px] sm:text-xs text-[#6EE7B7] hover:text-[#5CD7A5] transition-colors duration-300"
                >
                  <span className="hidden sm:inline">{isExpanded ? 'Show less' : 'Show more'}</span>
                  <ChevronRight
                    className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? 'rotate-90' : ''}`}
                  />
                </button>
              </div>

              {/* Expanded Content */}
              {isExpanded && (
                <motion.div
                  initial={{ opacity: 0, height: 0, marginTop: 0 }}
                  animate={{ opacity: 1, height: 'auto', marginTop: '0.75rem' }}
                  exit={{ opacity: 0, height: 0, marginTop: 0 }}
                  className="overflow-hidden"
                  transition={{ duration: 0.28, ease: 'easeInOut' }}
                >
                  <div className="pt-3 sm:pt-4 border-t border-[#374151]/50">
                    <p className="text-xs sm:text-sm text-[#9CA3AF] leading-relaxed mb-2">
                      {service.description}
                    </p>
                    <p className="text-[11px] sm:text-xs text-[#9CA3AF] leading-relaxed mb-3">
                      In-depth process with industry best practices.
                    </p>
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 text-[11px] sm:text-sm text-[#6EE7B7] hover:text-[#5CD7A5] font-medium transition-colors duration-300"
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
      <div className="relative order-first lg:order-last flex items-center justify-center">
        <img
          src='../public/images/uiux_design2.jpg'
          alt="UI/UX design workspace"
          className="rounded-2xl shadow-2xl w-full h-[200px] sm:h-[500px] lg:h-[600px] object-contain bg-[#0b0b0b]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#121212]/20 via-transparent to-transparent rounded-2xl pointer-events-none" />
      </div>
    </div>
  </div>
</section>


      {/* Process Section */}
      <section id="process" className="py-20 bg-[#0F1419] relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-1/2 -right-1/2 w-96 h-96 bg-[#6EE7B7]/5 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-1/2 -left-1/2 w-96 h-96 bg-[#3B82F6]/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
          </div>
          
          <div className="text-center mb-16">
            <span className="text-[#6EE7B7] text-xs sm:text-sm font-semibold tracking-wider uppercase mb-4 block animate-fade-in">
              PROCESS
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold mb-6 text-[#E5E7EB] animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              Our UI/UX Design Process
            </h2>
            <p className="text-[#9CA3AF] max-w-4xl mx-auto animate-fade-in-up" style={{animationDelay: '0.4s'}}>
              A user-centered approach to creating exceptional designs.
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
                <div className="bg-gradient-to-br from-[#1E1E1E] via-[#1E1E1E] to-[#1E1E1E] p-6 sm:p-8 rounded-2xl h-full relative overflow-hidden border border-[#374151]/50 hover:border-[#6EE7B7]/40 transition-all duration-500 hover:shadow-2xl hover:shadow-[#6EE7B7]/20 hover:transform hover:scale-105 hover:-translate-y-2">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#6EE7B7]/5 via-transparent to-[#3B82F6]/5 rounded-2xl transition-all duration-500 group-hover:from-[#6EE7B7]/10 group-hover:to-[#3B82F6]/10"></div>
                  
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-[#6EE7B7] rounded-full animate-bounce" style={{animationDelay: '0s'}}></div>
                    <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-[#3B82F6] rounded-full animate-bounce" style={{animationDelay: '0.5s'}}></div>
                    <div className="absolute bottom-1/4 left-3/4 w-1 h-1 bg-[#6EE7B7] rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
                  </div>
                  
                  <div className="absolute top-4 left-4 text-4xl sm:text-6xl font-bold text-[#6EE7B7]/20 transition-all duration-500 group-hover:text-[#6EE7B7]/30 group-hover:scale-110">
                    {step.number}
                  </div>
                  
                  <div className="relative z-10 pt-12">
                    <h3 className="text-lg sm:text-xl font-bold text-[#E5E7EB] mb-2 transition-all duration-300 group-hover:text-[#6EE7B7]">{step.title}</h3>
                    <p className="text-xs sm:text-sm text-[#9CA3AF] leading-relaxed transition-all duration-300 group-hover:text-[#E5E7EB]">{step.description}</p>
                  </div>
                  
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute -right-4 top-1/2 transform -translate-y-1/2 z-20 animate-pulse">
                      <div className="bg-[#1E1E1E] rounded-full p-2 border border-[#374151] transition-all duration-300 hover:border-[#6EE7B7] hover:bg-[#1E1E1E] hover:shadow-lg hover:shadow-[#6EE7B7]/30">
                        <ArrowRight className="w-6 h-6 text-[#6EE7B7] transition-transform duration-300 hover:translate-x-1" />
                      </div>
                    </div>
                  )}
                  
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#6EE7B7]/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#6EE7B7]/20 via-[#3B82F6]/20 to-[#6EE7B7]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section id="technology" className="py-20 bg-[#121212]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <span className="text-[#6EE7B7] text-xs sm:text-sm font-semibold tracking-wider uppercase mb-4 block">
              TECHNOLOGY STACK
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold mb-6 text-[#E5E7EB]">
              Tools for Exceptional UI/UX
            </h2>
            <p className="text-base sm:text-lg text-[#9CA3AF] max-w-4xl mx-auto">
              We use industry-leading tools to create stunning designs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {techStack.map((stack, index) => {
              const Icon = stack.icon;
              return (
                <div
                  key={index}
                  className={`bg-[#1E1E1E] p-6 sm:p-8 rounded-2xl border border-[#374151] hover:border-[#6EE7B7] transition-all duration-500 ${
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
      <section id="faq" className="py-20 bg-[#1E1E1E]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-3xl font-bold text-center mb-16 text-[#6EE7B7]">
            Frequently Asked Questions
          </h2>

          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`bg-[#1E1E1E] rounded-xl overflow-hidden border border-[#374151] ${
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
      <section className="py-20 bg-gradient-to-br from-[#1E1E1E] to-[#121212] overflow-hidden">
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
                Elevate your digital presence with Greatodeal's UI/UX.
              </motion.span>
              <br />
              <motion.span
                className="inline-block"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Let's design your success story.
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

        @media (max-width: 1024px) {
          .lg\\:text-left {
            text-align: center;
          }
          .lg\\:mx-0 {
            margin-left: auto;
            margin-right: auto;
          }
          .lg\\:justify-end {
            justify-content: center;
          }
        }
      `}</style>
    </div>
  );
};

export default UiUxDesign;