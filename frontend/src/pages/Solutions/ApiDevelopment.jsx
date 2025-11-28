import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { ChevronRight, ChevronLeft, Search, BarChart3, Settings, Palette, Database, Code, GitBranch, Monitor, Database as DbIcon, Cloud, ArrowRight, CheckCircle, Users, Target, Zap, Shield, Clock, Layers } from 'lucide-react';
import { Helmet } from "react-helmet-async";


const ApiDevelopment = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [expandedFAQ, setExpandedFAQ] = useState(0);
  const [isVisible, setIsVisible] = useState({});
  const [expandedService, setExpandedService] = useState(null);

  const testimonials = [
    {
      text: "Greatodeal's API integration transformed our data flow, reducing latency by 60% and enabling real-time analytics across platforms.",
      name: "Alex R.",
      role: "CTO, DataSync Inc.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=face"
    },
    {
      text: "Seamless REST and GraphQL API development that scaled effortlessly with our growing user base.",
      name: "Jordan L.",
      role: "Head of Engineering, ConnectHub",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=64&h=64&fit=crop&crop=face"
    },
    {
      text: "Their expertise in secure API integrations saved us months of development and ensured compliance.",
      name: "Taylor M.",
      role: "Product Director, SecureNet",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=face"
    }
  ];

  const benefits = [
    {
      title: "Scalable API Architectures",
      description: "Design APIs that handle high traffic and evolve with your business needs.",
      icon: Zap
    },
    {
      title: "Secure Data Exchange",
      description: "Implement robust authentication and encryption for safe integrations.",
      icon: Shield
    },
    {
      title: "Seamless Connectivity",
      description: "Integrate with third-party services, databases, and legacy systems effortlessly.",
      icon: Settings
    },
    {
      title: "Performance Optimized",
      description: "Build efficient APIs with caching, rate limiting, and monitoring.",
      icon: Target
    },
    {
      title: "Future-Proof Solutions",
      description: "Adopt modern standards like GraphQL and microservices for long-term agility.",
      icon: Clock
    }
  ];

  const solutions = [
    "RESTful API Development",
    "GraphQL API Implementation",
    "Microservices Architecture",
    "Third-Party API Integrations",
    "Real-Time API Solutions (WebSockets)",
    "API Gateway & Management",
    "Secure Authentication APIs (OAuth/JWT)",
    "Data Synchronization APIs",
    "Mobile & Web API Backends",
    "Legacy System Modernization"
  ];

  const industries = [
    {
      title: "E-Commerce",
      description: "Payment gateways, inventory sync, and customer data APIs",
      icon: "🛒"
    },
    {
      title: "Finance",
      description: "Secure transaction APIs and compliance integrations",
      icon: "💳"
    },
    {
      title: "Healthcare",
      description: "Patient data exchange and EHR integrations",
      icon: "🏥"
    },
    {
      title: "Logistics",
      description: "Tracking and supply chain management APIs",
      icon: "🚛"
    },
    {
      title: "SaaS",
      description: "Multi-tenant API architectures for scalable platforms",
      icon: "☁️"
    },
    {
      title: "IoT",
      description: "Device communication and data ingestion APIs",
      icon: "🔌"
    }
  ];

  const services = [
    {
      title: "API Design & Planning",
      description: "Collaborate to define API specifications, endpoints, and data models.",
      icon: Search
    },
    {
      title: "Development & Implementation",
      description: "Build custom APIs using modern frameworks and best practices.",
      icon: Code
    },
    {
      title: "Integration & Testing",
      description: "Connect systems securely and test for performance and reliability.",
      icon: Settings
    },
    {
      title: "Documentation & Monitoring",
      description: "Provide comprehensive docs and set up analytics for ongoing success.",
      icon: BarChart3
    },
    {
      title: "Optimization & Scaling",
      description: "Refine APIs for efficiency and handle growth with advanced features.",
      icon: Layers
    }
  ];

  const processSteps = [
    { number: "01", title: "Discovery & Requirements", description: "Understand your integration needs and define API scope with stakeholder input." },
    { number: "02", title: "Design & Specification", description: "Create API blueprints, including schemas, endpoints, and security protocols." },
    { number: "03", title: "Development Sprint", description: "Implement core API functionality using agile iterations and CI/CD pipelines." },
    { number: "04", title: "Integration Testing", description: "Test connections with mock services and real-world scenarios for robustness." },
    { number: "05", title: "Security & Compliance Audit", description: "Apply encryption, auth, and ensure adherence to standards like GDPR." },
    { number: "06", title: "Deployment & Monitoring", description: "Launch APIs with gateways and set up real-time performance tracking." },
    { number: "07", title: "Documentation & Training", description: "Deliver interactive docs and train your team on usage and maintenance." },
    { number: "08", title: "Optimization & Iteration", description: "Analyze usage data and refine for better performance and new features." },
    { number: "09", title: "Ongoing Support", description: "Provide maintenance, updates, and scalability enhancements as needed." }
  ];

  const techStack = [
    {
      category: "API Frameworks",
      technologies: ["Express.js, FastAPI", "Spring Boot, Django REST", "GraphQL with Apollo"],
      icon: Code
    },
    {
      category: "Integration Tools",
      technologies: ["Zapier, MuleSoft", "AWS API Gateway", "Postman for Testing"],
      icon: Settings
    },
    {
      category: "Databases & Storage",
      technologies: ["MongoDB, PostgreSQL", "Redis for Caching", "Elasticsearch for Search"],
      icon: DbIcon
    },
    {
      category: "DevOps & Cloud",
      technologies: ["Docker, Kubernetes", "AWS Lambda, Azure Functions", "CI/CD with GitHub Actions"],
      icon: Cloud
    }
  ];

  const faqs = [
    {
      question: "What types of APIs do you develop?",
      answer: "We specialize in RESTful, GraphQL, SOAP, and WebSocket APIs tailored to your needs."
    },
    {
      question: "How do you ensure API security?",
      answer: "Using OAuth 2.0, JWT, rate limiting, encryption, and regular vulnerability scans."
    },
    {
      question: "What's the typical timeline for API development?",
      answer: "Simple APIs in 2-4 weeks, complex integrations in 1-3 months, depending on scope."
    },
    {
      question: "Can you integrate with legacy systems?",
      answer: "Yes, we use middleware and adapters to bridge old and new systems seamlessly."
    },
    {
      question: "Do you provide API documentation?",
      answer: "Absolutely, using tools like Swagger/OpenAPI for interactive, auto-generated docs."
    },
    {
      question: "How do you handle API scaling?",
      answer: "Through microservices, load balancing, auto-scaling, and cloud-native deployments."
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
      <title>API Development & Integration Services | Greatodeal</title>
      <meta
        name="description"
        content="Greatodeal provides scalable, secure, and high-performance API development and integration services. We build RESTful, GraphQL, and cloud-based APIs to connect systems, automate workflows, and deliver seamless user experiences."
      />
      <link rel="canonical" href="https://greatodeal.com/solutions/api_development" />

      {/* Open Graph / Facebook / LinkedIn */}
      <meta property="og:title" content="API Development & Integration Services | Greatodeal" />
      <meta
        property="og:description"
        content="Empower your software ecosystem with Greatodeal's API development and integration solutions. Secure, scalable, and high-performance APIs for seamless connectivity and workflow automation."
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://greatodeal.com/solutions/api_development" />
      <meta property="og:image" content="https://greatodeal.com/images/api_development.jpg" />
      <meta property="og:image:alt" content="API Development & Integration Services by Greatodeal" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="API Development & Integration Services | Greatodeal" />
      <meta
        name="twitter:description"
        content="Connect your systems and automate workflows with Greatodeal's API development services. We build RESTful, GraphQL, and cloud-based APIs for secure, scalable, and high-performance integrations."
      />
      <meta name="twitter:image" content="https://greatodeal.com/images/api_development.jpg" />
      <meta name="twitter:image:alt" content="API Development & Integration Services by Greatodeal" />

      {/* Structured Data (JSON-LD) */}
      <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "API Development & Integration Services",
            "url": "https://greatodeal.com/solutions/api_development",
            "image": "https://greatodeal.com/images/api_development.jpg",
            "description": "Greatodeal delivers secure, scalable, and high-performance API development and integration services including RESTful, GraphQL, microservices, and third-party API integrations to connect systems and automate workflows.",
            "provider": {
              "@type": "Organization",
              "name": "Greatodeal",
              "url": "https://greatodeal.com",
              "logo": "https://greatodeal.com/images/api_development.jpg"
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
              API development and integration

                <br />
              </h1>
              <p className="text-lg max-w-xl text-[#ffffff] mb-8 max-w-3xl mx-auto lg:mx-0 animate-fade-in-delay">
Our API development and integration services help organizations connect systems, automate workflows, and deliver unified user experiences. We build RESTful, GraphQL, and cloud-based APIs designed for scalability, performance, and security enabling your software ecosystem to work smarter, faster, and more efficiently. </p>  
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
                <img
                  className="w-full h-full object-cover"
                  src="/images/api_development.jpg"
                    poster="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600&h=600&fit=crop"
                />
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
              Why Choose Greatodeal for API Solutions
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
                API Solutions for Seamless Connectivity
              </h2>
            </div>
            <p className="text-center text-base sm:text-lg text-[#9CA3AF] max-w-4xl mx-auto">
              Empower your applications with robust APIs that facilitate efficient data flow and system interoperability.
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
              Industries We Serve
            </h2>
            <p className="text-base sm:text-lg text-[#9CA3AF] max-w-4xl mx-auto">
              Tailored API solutions for diverse sectors.
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
              Our API Development Services
            </h2>       
            <p className="text-base sm:text-lg text-[#9CA3AF] max-w-3xl mx-auto">
              End-to-end services from design to deployment for reliable API ecosystems.
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
                            Detailed phase with tools and methodologies for optimal results.
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
  src="/images/api_testing.png"
  alt="API integration diagram"
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
              Our API Development Process
            </h2>
            <p className="text-[#9CA3AF] max-w-4xl mx-auto animate-fade-in-up" style={{animationDelay: '0.4s'}}>
              A methodical approach to building reliable, high-performance APIs.
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
              Tools for Robust API Development
            </h2>
            <p className="text-base sm:text-lg text-[#9CA3AF] max-w-4xl mx-auto">
              Leveraging industry-leading technologies for secure and efficient APIs.
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
                Connect your systems with Greatodeal's APIs.
              </motion.span>
              <br />
              <motion.span
                className="inline-block"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Let's integrate your future today.
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

export default ApiDevelopment;
