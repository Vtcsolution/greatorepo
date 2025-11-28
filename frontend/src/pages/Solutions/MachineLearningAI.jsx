import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { ChevronRight, ChevronLeft, Search, BarChart3, Settings, Palette, Database, Code, GitBranch, Monitor, Database as DbIcon, Cloud, ArrowRight, CheckCircle, Users, Target, Zap, Shield, Clock, Layers } from 'lucide-react';
import { Helmet } from "react-helmet-async";


const MachineLearningAI = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [expandedFAQ, setExpandedFAQ] = useState(0);
  const [isVisible, setIsVisible] = useState({});
  const [expandedService, setExpandedService] = useState(null);

  const testimonials = [
    {
      text: "Greatodeal's AI solutions transformed our data analytics, increasing prediction accuracy by 40%.",
      name: "Emily R.",
      role: "Data Scientist, AnalyticsPro",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&h=64&fit=crop&crop=face"
    },
    {
      text: "Their machine learning models automated our workflows, saving us countless hours and resources.",
      name: "Mark T.",
      role: "CTO, SmartSystems",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=face"
    },
    {
      text: "The AI-driven chatbot Greatodeal built for us boosted customer engagement by 50%.",
      name: "Sophie K.",
      role: "CEO, CustomerConnect",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&fit=crop&crop=face"
    }
  ];

  const benefits = [
    {
      title: "Predictive Analytics",
      description: "Leverage data to forecast trends and make informed decisions.",
      icon: BarChart3
    },
    {
      title: "Automation",
      description: "Streamline processes with intelligent automation solutions.",
      icon: Zap
    },
    {
      title: "Scalable AI Models",
      description: "Build models that grow with your data and business needs.",
      icon: Cloud
    },
    {
      title: "Enhanced Security",
      description: "Secure AI systems with robust data protection measures.",
      icon: Shield
    },
    {
      title: "Personalized Experiences",
      description: "Deliver tailored user experiences with AI-driven insights.",
      icon: Users
    }
  ];

  const solutions = [
    "Predictive Modeling",
    "Natural Language Processing (NLP)",
    "Computer Vision",
    "Recommendation Systems",
    "Chatbots & Virtual Assistants",
    "Anomaly Detection",
    "Automated Machine Learning (AutoML)",
    "Deep Learning Solutions",
    "AI-Powered IoT",
    "Data Analytics & Insights"
  ];

  const industries = [
    {
      title: "Healthcare",
      description: "AI for diagnostics and personalized treatment plans",
      icon: "🏥"
    },
    {
      title: "Finance",
      description: "Fraud detection and risk assessment models",
      icon: "💳"
    },
    {
      title: "Retail",
      description: "Personalized recommendations and inventory optimization",
      icon: "🛒"
    },
    {
      title: "Manufacturing",
      description: "Predictive maintenance and quality control",
      icon: "🏭"
    },
    {
      title: "Logistics",
      description: "Route optimization and supply chain analytics",
      icon: "🚛"
    },
    {
      title: "Marketing",
      description: "Customer segmentation and campaign automation",
      icon: "📣"
    }
  ];

  const services = [
    {
      title: "Data Preparation",
      description: "Clean and preprocess data for optimal AI model performance.",
      icon: Database
    },
    {
      title: "Model Development",
      description: "Design and train custom ML models for specific use cases.",
      icon: Code
    },
    {
      title: "AI Integration",
      description: "Seamlessly integrate AI solutions into existing systems.",
      icon: Settings
    },
    {
      title: "Model Optimization",
      description: "Fine-tune models for accuracy and efficiency.",
      icon: Zap
    },
    {
      title: "Support & Maintenance",
      description: "Ongoing monitoring and updates for AI systems.",
      icon: Monitor
    }
  ];

  const processSteps = [
    { number: "01", title: "What is ML/AI Services?", description: "Machine Learning and AI services involve developing intelligent systems that learn from data to solve complex problems." },
    { number: "02", title: "How We Start: Data Analysis", description: "Analyze data sources and define project objectives." },
    { number: "03", title: "What is the Process?", description: "From data collection to deployment: preparation, modeling, training, testing, and integration." },
    { number: "04", title: "How We Do It: Agile AI", description: "Iterative development with continuous testing and refinement." },
    { number: "05", title: "What Problems We Face?", description: "Data quality issues, model overfitting, and scalability challenges." },
    { number: "06", title: "How We Solve Problems: Robust Testing", description: "Use cross-validation and real-world testing to ensure reliability." },
    { number: "07", title: "How We Collaborate?", description: "Work closely with clients using shared tools and regular updates." },
    { number: "08", title: "What Tech We Use?", description: "TensorFlow, PyTorch, Scikit-learn, AWS SageMaker for AI/ML solutions." },
    { number: "09", title: "What Solutions We Provide?", description: "Custom AI models for automation, prediction, and insights." },
    { number: "10", title: "What We Deliver?", description: "Deployed models, APIs, and documentation for seamless adoption." },
    { number: "11", title: "How We Ensure Success: Performance Monitoring", description: "Track model performance with KPIs and analytics." }
  ];

  const techStack = [
    {
      category: "Machine Learning Frameworks",
      technologies: ["TensorFlow", "PyTorch", "Scikit-learn"],
      icon: Code
    },
    {
      category: "Cloud AI Platforms",
      technologies: ["AWS SageMaker", "Google AI Platform", "Azure ML"],
      icon: Cloud
    },
    {
      category: "Data Processing",
      technologies: ["Pandas", "NumPy", "Apache Spark"],
      icon: Database
    },
    {
      category: "Visualization & Tools",
      technologies: ["Matplotlib", "Tableau", "Jupyter"],
      icon: BarChart3
    }
  ];

  const faqs = [
    {
      question: "What types of AI solutions do you offer?",
      answer: "We provide solutions for predictive analytics, NLP, computer vision, and more."
    },
    {
      question: "How long does an AI project take?",
      answer: "Typically 3-6 months for initial deployment, depending on complexity."
    },
    {
      question: "Do you handle data privacy?",
      answer: "Yes, we ensure compliance with GDPR, CCPA, and other regulations."
    },
    {
      question: "Can you integrate AI with existing systems?",
      answer: "Absolutely, we specialize in seamless integrations."
    },
    {
      question: "What kind of data is needed for AI?",
      answer: "Structured or unstructured data, which we help clean and prepare."
    },
    {
      question: "Do you offer ongoing support for AI models?",
      answer: "Yes, we provide maintenance and updates for optimal performance."
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
      <title>Agentic AI & Machine Learning Services | Greatodeal</title>
      <meta
        name="description"
        content="Greatodeal delivers scalable AI & Machine Learning solutions including predictive analytics, NLP, computer vision, recommendation systems, and AI automation to transform your business."
      />
      <link rel="canonical" href="https://greatodeal.com/solutions/machine_learning" />

      {/* Open Graph / Facebook / LinkedIn */}
      <meta property="og:title" content="Agentic AI & Machine Learning Services | Greatodeal" />
      <meta
        property="og:description"
        content="Build intelligent, data-driven solutions with Greatodeal. AI & Machine Learning services for predictive modeling, automation, NLP, computer vision, and personalized experiences."
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://greatodeal.com/solutions/machine_learning" />
      <meta property="og:image" content="https://greatodeal.com/images/machine_learning.jpg" />
      <meta property="og:image:alt" content="Agentic AI & Machine Learning Services by Greatodeal" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Agentic AI & Machine Learning Services | Greatodeal" />
      <meta
        name="twitter:description"
        content="Transform your business with AI & Machine Learning solutions from Greatodeal. Predictive analytics, NLP, computer vision, and AI automation for smarter decisions."
      />
      <meta name="twitter:image" content="https://greatodeal.com/images/machine_learning.jpg" />
      <meta name="twitter:image:alt" content="Agentic AI & Machine Learning Services by Greatodeal" />

      {/* Video Metadata for Social Sharing */}
      <meta property="og:video" content="https://greatodeal.com/images/Artificial_Intelligence_Brain.mp4" />
      <meta property="og:video:type" content="video/mp4" />
      <meta property="og:video:width" content="1280" />
      <meta property="og:video:height" content="720" />

      {/* Structured Data (JSON-LD) */}
      <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Agentic AI & Machine Learning Services",
            "url": "https://greatodeal.com/solutions/machine_learning",
            "image": "https://greatodeal.com/images/machine_learning.jpg",
            "description": "Scalable AI & Machine Learning solutions by Greatodeal including predictive analytics, NLP, computer vision, recommendation systems, and automation to drive business outcomes.",
            "provider": {
              "@type": "Organization",
              "name": "Greatodeal",
              "url": "https://greatodeal.com",
              "logo": "https://greatodeal.com/images/machine_learning.jpg"
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
               Agentic AI & Machine Learning

                <br />
                
              </h1>
              <p className="text-lg max-w-xl text-[#ffffff] mb-8 max-w-3xl mx-auto lg:mx-0 animate-fade-in-delay">
We design and deliver Machine Learning and AI solutions that turn your data into reliable business outcomes. From data strategy and model development to MLOps and production monitoring, our team builds scalable, explainable models and integrates them into your systems to automate decisions, personalize experiences, and uncover new revenue opportunities.</p>  
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
                  src='/images/Artificial_Intelligence_Brain.mp4'
                  poster="https://images.unsplash.com/photo-1516321310762-479437144403?w=600&h=600&fit=crop"
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
              Why Choose Greatodeal for ML/AI Services
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
                ML/AI Solutions for Your Business
              </h2>
            </div>
            <p className="text-center text-base sm:text-lg text-[#9CA3AF] max-w-4xl mx-auto">
              We deliver AI-driven solutions that transform data into actionable insights and automation.
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
              Tailored AI solutions for sector-specific challenges.
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
              Our ML/AI Services
            </h2>       
            <p className="text-base sm:text-lg text-[#9CA3AF] max-w-3xl mx-auto">
              Comprehensive AI services to unlock the potential of your data.
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
                            Built with cutting-edge AI technologies and best practices.
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
                src='/images/machine_learning.jpg'
                alt="AI and machine learning workspace"
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
              Our ML/AI Development Process
            </h2>
            <p className="text-[#9CA3AF] max-w-4xl mx-auto animate-fade-in-up" style={{animationDelay: '0.4s'}}>
              A structured approach to deliver intelligent, data-driven solutions.
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
              Tools for Cutting-Edge AI Solutions
            </h2>
            <p className="text-base sm:text-lg text-[#9CA3AF] max-w-4xl mx-auto">
              We use industry-leading frameworks and platforms to build robust AI systems.
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
                Unlock the power of AI with Greatodeal.
              </motion.span>
              <br />
              <motion.span
                className="inline-block"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Let's innovate together.
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

export default MachineLearningAI;
     

