import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { ChevronRight, ChevronLeft, Search, BarChart3, Settings, Palette, Database, Code, GitBranch, Monitor, Database as DbIcon, Cloud, ArrowRight, CheckCircle, Users, Target, Zap, Shield, Clock, Layers } from 'lucide-react';
import { Helmet } from "react-helmet-async";


const AiSaasPlatform = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [expandedFAQ, setExpandedFAQ] = useState(0);
  const [isVisible, setIsVisible] = useState({});
  const [expandedService, setExpandedService] = useState(null);

  const testimonials = [
    {
      text: "Greatodeal's AI SaaS platform revolutionized our customer service with intelligent chatbots, reducing response times by 70%.",
      name: "Sarah K.",
      role: "CEO, SmartSupport Co.",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&h=64&fit=crop&crop=face"
    },
    {
      text: "Their predictive analytics tools helped us forecast demand accurately, optimizing inventory and boosting profits.",
      name: "Michael T.",
      role: "Data Scientist, PredictPro",
      avatar: "https://images.unsplash.com/photo-1556155092-490a1ba11484?w=64&h=64&fit=crop&crop=face"
    },
    {
      text: "Seamless integration of computer vision into our security systems enhanced threat detection without complex setups.",
      name: "Emma W.",
      role: "Security Manager, VigilantTech",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&fit=crop&crop=face"
    }
  ];

  const benefits = [
    {
      title: "Scalable AI Models",
      description: "Deploy AI that grows with your data and user demands effortlessly.",
      icon: Zap
    },
    {
      title: "Secure AI Processing",
      description: "Protect sensitive data with advanced encryption and compliance standards.",
      icon: Shield
    },
    {
      title: "Easy Integration",
      description: "Plug into existing systems with minimal disruption and maximum impact.",
      icon: Settings
    },
    {
      title: "High Performance",
      description: "Optimized algorithms for real-time insights and fast processing.",
      icon: Target
    },
    {
      title: "Future-Ready AI",
      description: "Leverage cutting-edge tech for evolving AI capabilities.",
      icon: Clock
    }
  ];

  const solutions = [
    "Machine Learning Model Deployment",
    "Natural Language Processing Services",
    "Computer Vision Solutions",
    "Predictive Analytics Platforms",
    "AI-Powered Chatbots & Assistants",
    "Recommendation Engines",
    "Anomaly Detection Systems",
    "Automated Data Processing",
    "Sentiment Analysis Tools",
    "Custom AI Workflows"
  ];

  const industries = [
    {
      title: "E-Commerce",
      description: "Personalized recommendations and inventory forecasting",
      icon: "🛒"
    },
    {
      title: "Finance",
      description: "Fraud detection and risk assessment models",
      icon: "💳"
    },
    {
      title: "Healthcare",
      description: "Diagnostic aids and patient monitoring AI",
      icon: "🏥"
    },
    {
      title: "Logistics",
      description: "Route optimization and predictive maintenance",
      icon: "🚛"
    },
    {
      title: "SaaS",
      description: "Intelligent features for user engagement and retention",
      icon: "☁️"
    },
    {
      title: "Manufacturing",
      description: "Quality control and process automation AI",
      icon: "🏭"
    }
  ];

  const services = [
    {
      title: "AI Strategy & Consulting",
      description: "Define AI roadmaps and identify high-impact use cases.",
      icon: Search
    },
    {
      title: "Model Development & Training",
      description: "Build and train custom AI models using your data.",
      icon: Code
    },
    {
      title: "Integration & Deployment",
      description: "Deploy AI into your apps with seamless integration.",
      icon: Settings
    },
    {
      title: "Monitoring & Analytics",
      description: "Track AI performance and optimize for better results.",
      icon: BarChart3
    },
    {
      title: "Scaling & Maintenance",
      description: "Scale AI solutions and provide ongoing support.",
      icon: Layers
    }
  ];

  const processSteps = [
    { number: "01", title: "Discovery & AI Assessment", description: "Evaluate your needs and data to identify AI opportunities." },
    { number: "02", title: "Data Preparation & Modeling", description: "Clean data and design AI models tailored to your goals." },
    { number: "03", title: "Development & Training", description: "Implement and train models using agile methodologies." },
    { number: "04", title: "Testing & Validation", description: "Rigorous testing for accuracy and bias mitigation." },
    { number: "05", title: "Security & Ethics Review", description: "Ensure ethical AI with privacy and compliance checks." },
    { number: "06", title: "Deployment & Integration", description: "Launch AI via SaaS with API integrations." },
    { number: "07", title: "Documentation & Training", description: "Provide guides and train teams on AI usage." },
    { number: "08", title: "Performance Optimization", description: "Monitor and refine AI for continuous improvement." },
    { number: "09", title: "Ongoing AI Support", description: "Updates, scaling, and new feature additions." }
  ];

  const techStack = [
    {
      category: "AI Frameworks",
      technologies: ["TensorFlow, PyTorch", "Scikit-learn, Hugging Face", "Keras, ONNX"],
      icon: Code
    },
    {
      category: "Cloud Platforms",
      technologies: ["AWS SageMaker, Google AI", "Azure ML, IBM Watson", "Vertex AI"],
      icon: Cloud
    },
    {
      category: "Data Tools",
      technologies: ["Pandas, NumPy", "Apache Spark, Databricks", "BigQuery for Analytics"],
      icon: DbIcon
    },
    {
      category: "DevOps for AI",
      technologies: ["Docker, Kubernetes", "MLflow, Kubeflow", "CI/CD with GitHub Actions"],
      icon: Settings
    }
  ];

  const faqs = [
    {
      question: "What AI services do you offer in your SaaS platform?",
      answer: "We provide ML, NLP, computer vision, and custom AI tools via scalable SaaS."
    },
    {
      question: "How secure is your AI SaaS platform?",
      answer: "We use encryption, access controls, and comply with GDPR and HIPAA standards."
    },
    {
      question: "What's the timeline for implementing an AI solution?",
      answer: "Basic setups in 2-4 weeks, complex custom AI in 1-3 months based on requirements."
    },
    {
      question: "Can your AI integrate with existing systems?",
      answer: "Yes, via APIs and connectors for seamless compatibility."
    },
    {
      question: "Do you handle AI model training?",
      answer: "Absolutely, with custom datasets and automated retraining options."
    },
    {
      question: "How do you ensure AI scalability?",
      answer: "Using cloud auto-scaling, distributed computing, and efficient architectures."
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
        <title>SaaS & AI-Powered Platform Development | Greatodeal</title>
        <meta
          name="description"
          content="Greatodeal builds scalable SaaS and AI-powered platforms. We deliver intelligent solutions using machine learning, predictive analytics, NLP, computer vision, and automation for enhanced business performance and user experience."
        />
        <link rel="canonical" href="https://greatodeal.com/solutions/saasplatform" />

        {/* Open Graph / Facebook / LinkedIn */}
        <meta property="og:title" content="SaaS & AI-Powered Platform Development | Greatodeal" />
        <meta
          property="og:description"
          content="Transform your business with Greatodeal's SaaS and AI solutions. Build scalable platforms with machine learning, NLP, computer vision, predictive analytics, and intelligent automation."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://greatodeal.com/solutions/saasplatform" />
        <meta property="og:image" content="https://greatodeal.com/images/saas.png" />
        <meta property="og:image:alt" content="SaaS & AI-Powered Platforms by Greatodeal" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="SaaS & AI-Powered Platform Development | Greatodeal" />
        <meta
          name="twitter:description"
          content="Greatodeal provides SaaS & AI-powered platforms that scale effortlessly. Leverage AI, machine learning, automation, and predictive analytics for smarter operations and superior user experiences."
        />
        <meta name="twitter:image" content="https://greatodeal.com/images/saas.png" />
        <meta name="twitter:image:alt" content="SaaS & AI-Powered Platforms by Greatodeal" />

        {/* Structured Data (JSON-LD) */}
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "SaaS & AI-Powered Platform Development",
            "url": "https://greatodeal.com/solutions/saasplatform",
            "image": "https://greatodeal.com/images/saas.png",
            "description": "Greatodeal builds scalable SaaS and AI-powered platforms using machine learning, NLP, predictive analytics, computer vision, and automation to deliver intelligent solutions and exceptional user experiences.",
            "provider": {
              "@type": "Organization",
              "name": "Greatodeal",
              "url": "https://greatodeal.com",
              "logo": "https://greatodeal.com/images/saas.png"
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
SaaS & AI-Powered Platforms
                <br />
              </h1>
              <p className="text-lg max-w-xl text-[#ffffff] mb-8 max-w-3xl mx-auto lg:mx-0 animate-fade-in-delay">
We help businesses turn ideas into powerful SaaS and AI platforms that scale effortlessly in the cloud. By blending modern technologies, machine learning, and seamless UX, we create intelligent solutions that automate operations, uncover insights, and give your users the experience they expect from world-class products. </p>           
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
                  src='/images/saas.png'
                      poster="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=600&fit=crop"
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
              Why Choose Greatodeal for AI SaaS
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
                AI Solutions for Intelligent Automation
              </h2>
            </div>
            <p className="text-center text-base sm:text-lg text-[#9CA3AF] max-w-4xl mx-auto">
              Empower your business with AI tools that automate processes and deliver actionable insights.
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
              Industries We Empower
            </h2>
            <p className="text-base sm:text-lg text-[#9CA3AF] max-w-4xl mx-auto">
              Customized AI SaaS for various sectors.
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
              Our AI SaaS Services
            </h2>       
            <p className="text-base sm:text-lg text-[#9CA3AF] max-w-3xl mx-auto">
              Comprehensive AI services from strategy to scalable deployment.
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
                            Expert guidance with proven AI methodologies.
                          </p>
                          <Link
                            to="/contact"
                            className="inline-flex items-center gap-2 text-[#6EE7B7] hover:text-[#5CD7A5] text-xs sm:text-sm font-medium transition-colors duration-300"
                          >
                            Discuss your AI needs
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
                src='../public/images/saas_team.png'
                 alt="AI platform visualization"
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
              Our AI SaaS Development Process
            </h2>
            <p className="text-[#9CA3AF] max-w-4xl mx-auto animate-fade-in-up" style={{animationDelay: '0.4s'}}>
              A structured approach to delivering powerful AI solutions.
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
              Tools for Advanced AI SaaS
            </h2>
            <p className="text-base sm:text-lg text-[#9CA3AF] max-w-4xl mx-auto">
              Utilizing top-tier AI technologies for innovative solutions.
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
                Transform your business with Greatodeal's AI SaaS.
              </motion.span>
              <br />
              <motion.span
                className="inline-block"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Innovate smarter today.
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

export default AiSaasPlatform;
