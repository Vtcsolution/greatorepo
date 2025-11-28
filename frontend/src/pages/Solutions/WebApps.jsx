import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { ChevronRight, ChevronLeft, Search, BarChart3, Settings, Palette, Database, Code, GitBranch, Monitor, Database as DbIcon, Cloud, ArrowRight, CheckCircle, Users, Target, Zap, Shield, Clock, Layers } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const WebApplicationDevelopment = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [expandedFAQ, setExpandedFAQ] = useState(0);
  const [isVisible, setIsVisible] = useState({});
  const [expandedService, setExpandedService] = useState(null);

  const testimonials = [
    {
      text: "Greatodeal built our enterprise web application with seamless AI integration. Their expertise reduced our load times by 50% and improved user engagement.",
      name: "Sarah L.",
      role: "Product Manager, InnovateTech",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&h=64&fit=crop&crop=face"
    },
    {
      text: "From concept to launch, Greatodeal delivered a scalable web app that handles millions of users effortlessly.",
      name: "David M.",
      role: "Founder, ScaleUp Ventures",
      avatar: "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=64&h=64&fit=crop&crop=face"
    },
    {
      text: "Their web development team integrated automation tools that streamlined our operations and boosted efficiency.",
      name: "Emily R.",
      role: "Operations Lead, Global Solutions",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&fit=crop&crop=face"
    }
  ];

  const benefits = [
    {
      title: "Scalable Web Architectures",
      description: "Build web applications that grow with your business, handling increased traffic and data without performance issues.",
      icon: Zap
    },
    {
      title: "User-Centric Design",
      description: "Intuitive interfaces that enhance user experience and drive engagement through modern web technologies.",
      icon: Target
    },
    {
      title: "Secure & Compliant",
      description: "Implement robust security measures to protect data and ensure compliance with industry standards.",
      icon: Shield
    },
    {
      title: "Seamless Integrations",
      description: "Connect your web app with third-party services, APIs, and existing systems for enhanced functionality.",
      icon: Settings
    },
    {
      title: "Ongoing Optimization",
      description: "Continuous updates and performance tuning to keep your web application efficient and up-to-date.",
      icon: Clock
    }
  ];

  const solutions = [
    "Progressive Web Apps (PWAs)",
    "Single Page Applications (SPAs)",
    "E-Commerce Platforms",
    "Content Management Systems (CMS)",
    "Dashboard & Analytics Tools",
    "API-Driven Web Services",
    "Real-Time Collaboration Apps",
    "Custom Web Portals",
    "Web-Based SaaS Solutions",
    "Responsive Web Applications"
  ];

  const industries = [
    {
      title: "E-Commerce",
      description: "Scalable online stores with personalized user experiences",
      icon: "🛒"
    },
    {
      title: "Healthcare",
      description: "Secure patient portals and telemedicine web apps",
      icon: "🏥"
    },
    {
      title: "Finance",
      description: "Banking dashboards with real-time data visualization",
      icon: "💳"
    },
    {
      title: "Education",
      description: "Online learning platforms with interactive features",
      icon: "🎓"
    },
    {
      title: "Real Estate",
      description: "Property management systems and virtual tour apps",
      icon: "🏠"
    },
    {
      title: "Media",
      description: "Content delivery networks and streaming web platforms",
      icon: "🎥"
    }
  ];

  const services = [
    {
      title: "Requirements Gathering & Planning",
      description: "We analyze your needs to create a detailed plan for your web application development.",
      icon: Search
    },
    {
      title: "UI/UX Design",
      description: "Crafting responsive and intuitive designs optimized for web browsers and devices.",
      icon: Palette
    },
    {
      title: "Frontend Development",
      description: "Building interactive user interfaces with modern frameworks and libraries.",
      icon: Code
    },
    {
      title: "Backend Development",
      description: "Creating robust server-side logic and database integrations for data management.",
      icon: Monitor
    },
    {
      title: "Testing & Quality Assurance",
      description: "Rigorous testing to ensure reliability, security, and performance across browsers.",
      icon: Settings
    }
  ];

  const processSteps = [
    { number: "01", title: "What is Web Application Development?", description: "Web application development involves creating dynamic, interactive applications that run in web browsers, providing users with rich experiences similar to desktop software." },
    { number: "02", title: "How We Start: Discovery Phase", description: "We begin by understanding your requirements, target audience, and business objectives to define the scope." },
    { number: "03", title: "What is the Process?", description: "Our process includes planning, design, development, testing, deployment, and maintenance in an agile manner." },
    { number: "04", title: "How We Do It: Agile Methodology", description: "We use iterative development with sprints, allowing for flexibility and continuous feedback." },
    { number: "05", title: "What Problems We Face?", description: "Common challenges include browser compatibility, performance optimization, security vulnerabilities, and scalability issues." },
    { number: "06", title: "How We Solve Problems: Innovative Approaches", description: "We employ best practices like progressive enhancement, code reviews, and automated testing to mitigate risks." },
    { number: "07", title: "How We Collaborate?", description: "Through regular meetings, shared tools like Slack and Jira, and transparent communication for seamless partnership." },
    { number: "08", title: "What Tech We Use?", description: "Modern stacks including React/Vue for frontend, Node.js/Python for backend, and cloud services for hosting." },
    { number: "09", title: "What Solutions We Provide?", description: "Custom web apps tailored to solve specific business problems with features like real-time updates and integrations." },
    { number: "10", title: "What We Deliver?", description: "A fully functional, deployed web application with documentation, training, and ongoing support." },
    { number: "11", title: "How We Ensure Success: Post-Launch Support", description: "Monitoring, updates, and optimizations to keep your web app performing at its best." }
  ];

  const techStack = [
    {
      category: "Frontend Technologies",
      technologies: ["React, Vue.js, Angular", "HTML5, CSS3, Tailwind CSS", "JavaScript/TypeScript"],
      icon: Code
    },
    {
      category: "Backend Technologies",
      technologies: ["Node.js, Express", "Python (Django/Flask)", "PHP (Laravel), Ruby on Rails"],
      icon: Monitor
    },
    {
      category: "Databases & Storage",
      technologies: ["MongoDB, PostgreSQL", "Redis for caching", "Firebase for real-time"],
      icon: DbIcon
    },
    {
      category: "DevOps & Cloud",
      technologies: ["AWS, Heroku, Vercel", "Docker, Kubernetes", "CI/CD with Jenkins/GitHub Actions"],
      icon: Cloud
    }
  ];

  const faqs = [
    {
      question: "What is the difference between a website and a web application?",
      answer: "A website is typically static or informational, while a web application is interactive and allows users to perform actions like data manipulation."
    },
    {
      question: "How long does it take to develop a web application?",
      answer: "Timelines vary from 2-3 months for MVPs to 6-12 months for complex apps, depending on features and requirements."
    },
    {
      question: "What security measures do you implement?",
      answer: "We use HTTPS, input validation, OAuth, regular security audits, and compliance with standards like GDPR."
    },
    {
      question: "Can you integrate third-party services?",
      answer: "Yes, we specialize in API integrations for payments, social media, analytics, and more."
    },
    {
      question: "How do you ensure cross-browser compatibility?",
      answer: "Through extensive testing on major browsers and using polyfills where necessary."
    },
    {
      question: "What is your approach to mobile responsiveness?",
      answer: "We use responsive design principles and frameworks to ensure optimal viewing on all devices."
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
  {/* Primary Meta Tags */}
  <title>Web Application Development Services | Scalable, Secure & Modern Web Apps – Greatodeal</title>
  <meta
    name="description"
    content="Greatodeal builds high-performance, scalable web applications using modern technologies. From PWAs and SPAs to e-commerce platforms and SaaS systems — we design, develop, and deploy secure, user-centric web apps tailored to your business needs."
  />
  <meta
    name="keywords"
    content="web application development, custom web apps, PWA development, SPA development, web app services, web app development company, SaaS development, business web apps, scalable web applications, secure web apps"
  />

  {/* Canonical */}
  <link
    rel="canonical"
    href="https://greatodeal.com/solutions/webapps"
  />

  {/* Open Graph / Facebook */}
  <meta property="og:type" content="website" />
  <meta
    property="og:title"
    content="Web Application Development Services | Modern, Scalable & Secure – Greatodeal"
  />
  <meta
    property="og:description"
    content="We develop powerful, scalable and secure web applications using the latest technologies. PWAs, SPAs, dashboards, CMS, e-commerce platforms, SaaS — tailored to transform your digital presence."
  />
  <meta
    property="og:image"
    content="https://greatodeal.com/images/webapps.png"
  />
  <meta
    property="og:url"
    content="https://greatodeal.com/solutions/webapps"
  />
  <meta property="og:site_name" content="Greatodeal" />

  {/* Twitter Card */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta
    name="twitter:title"
    content="Web Application Development Services | Scalable & Secure Web Apps – Greatodeal"
  />
  <meta
    name="twitter:description"
    content="Build modern, scalable, and secure web applications with Greatodeal. From planning to deployment — we deliver exceptional digital products with top-tier performance."
  />
  <meta
    name="twitter:image"
    content="https://greatodeal.com/images/webapps.png"
  />

  {/* Additional SEO Tags */}
  <meta name="robots" content="index, follow" />
  <meta name="author" content="Greatodeal" />
  <meta name="language" content="English" />
  <meta name="theme-color" content="#10B981" />
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
                Web Application
                <br />
                <span className="text-[#6EE7B7]">Development</span>
              </h1>
              <p className="text-lg max-w-xl text-[#ffffff] mb-8 max-w-3xl mx-auto lg:mx-0 animate-fade-in-delay">
We design and develop robust, scalable web applications that combine modern technologies with intuitive user experiences. Our solutions are built to perform seamlessly under scale, ensuring security, speed, and adaptability that empower businesses to innovate, streamline operations, and achieve sustainable growth.              </p>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6, type: "spring", stiffness: 100 }}
              >
               <Link
  to="/contact"
  className="inline-block bg-[#6EE7B7] hover:bg-gradient-to-r hover:from-[#6EE7B7] hover:to-[#34D399] text-[#121212] px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_20px_rgba(110,231,183,0.6)] text-sm sm:text-base"
>
  Get Started
</Link>

              </motion.div>
            </div>

            {/* Right Column: Video/Image */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md sm:max-w-lg lg:max-w-full h-[300px] sm:h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                  src="/images/website_design.mp4"
                  poster="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=600&fit=crop"
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
              Why Choose Greatodeal for Web App Development
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
                Web App Solutions for Your Business Needs
              </h2>
            </div>
            <p className="text-center text-base sm:text-lg text-[#9CA3AF] max-w-4xl mx-auto">
              At Greatodeal, we create web applications that are performant, secure, and tailored to transform your digital presence.
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
              We deliver specialized web applications for various sectors.
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
              Our Web App Development Services
            </h2>       
            <p className="text-base sm:text-lg text-[#9CA3AF] max-w-3xl mx-auto">
              Comprehensive services covering every aspect of web application creation and maintenance.
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
                    className="group bg-[#1E1E1E] p-6 sm:p-8 rounded-xl border border-[#374151] hover:border-[#6EE7B7]/50 transition-all duration-500 hover:shadow-xl hover:shadow-[#6EE7B7]/10 overflow-hidden"
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
                          <p className="text-xs sm:text-sm text-[#9CA3AF] leading-relaxed mb-3">
                            {service.details ||
                              'This phase includes stakeholder interviews, feature prioritization, and creating user stories for clear project direction.'}
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
                src="/images/webapps.png"
                alt="Team developing web application"
                className="rounded-2xl shadow-2xl w-full h-[400px] sm:h-[500px] lg:h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#121212]/20 via-transparent to-transparent rounded-2xl" />
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
              Our Web App Development Process
            </h2>
            <p className="text-[#9CA3AF] max-w-4xl mx-auto animate-fade-in-up" style={{animationDelay: '0.4s'}}>
              A structured approach ensuring high-quality web applications delivered efficiently.
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
              Technologies for Modern Web Apps
            </h2>
            <p className="text-base sm:text-lg text-[#9CA3AF] max-w-4xl mx-auto">
              We leverage the latest web technologies to build fast, secure, and scalable applications.
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
                Elevate your business with Greatodeal's web apps.
              </motion.span>
              <br />
              <motion.span
                className="inline-block"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Let's create your digital solution today.
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

export default WebApplicationDevelopment;
