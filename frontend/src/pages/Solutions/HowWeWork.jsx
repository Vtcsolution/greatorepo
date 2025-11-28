import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight, ChevronLeft, Search, BarChart3, Settings, Palette, Database, Code, GitBranch, Monitor, Database as DbIcon, Cloud, ArrowRight, CheckCircle, Users, Target, Zap, Shield, Clock, Layers, Brain, Smartphone, Globe, Bot, Rocket, TrendingUp, Award, MessageSquare, FileText, Sparkles, Eye, Lightbulb, Activity } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const HowWeWork = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [expandedFAQ, setExpandedFAQ] = useState(0);
  const [isVisible, setIsVisible] = useState({});
  const [expandedService, setExpandedService] = useState(null);
  const [activePhase, setActivePhase] = useState(0);

  const testimonials = [
    {
      text: "Greatodeal transformed our enterprise operations with custom AI-driven software. Their expertise in automation saved us 40% in processing time and increased our productivity beyond expectations.",
      name: "Michael T.",
      role: "CTO, TechCorp",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=face",
      company: "TechCorp International"
    },
    {
      text: "Seamless mobile app and SaaS platform development. Greatodeal's team delivered innovative solutions that scaled with our growth. Their attention to detail and commitment to excellence is unmatched.",
      name: "Clara N.",
      role: "CEO, FinSecure",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=64&h=64&fit=crop&crop=face",
      company: "FinSecure Solutions"
    },
    {
      text: "From website redesign to full AI automation integration, Greatodeal exceeded expectations with cost-effective, high-quality results. They truly understand business needs.",
      name: "James K.",
      role: "Operations Director, Global Retail",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=face",
      company: "Global Retail Corp"
    }
  ];

  const workingPhases = [
    {
      phase: "Phase 1",
      title: "Discovery & Strategic Planning",
      duration: "1-2 Weeks",
      icon: Lightbulb,
      color: "#6EE7B7",
      description: "We dive deep into understanding your business, challenges, and goals through comprehensive discovery sessions.",
      activities: [
        "Initial consultation and requirement gathering",
        "Business process analysis and workflow mapping",
        "Technology stack assessment and recommendations",
        "Competitive analysis and market research",
        "Risk assessment and mitigation planning",
        "Budget allocation and resource planning"
      ],
      deliverables: [
        "Detailed project scope document",
        "Technology architecture proposal",
        "Timeline and milestone roadmap",
        "Cost breakdown and ROI projections"
      ]
    },
    {
      phase: "Phase 2",
      title: "Design & Prototyping",
      duration: "2-3 Weeks",
      icon: Palette,
      color: "#3B82F6",
      description: "We create intuitive designs and interactive prototypes that bring your vision to life with pixel-perfect precision.",
      activities: [
        "User experience (UX) research and persona development",
        "Information architecture and user flow mapping",
        "Wireframing and low-fidelity prototypes",
        "High-fidelity UI design with brand integration",
        "Interactive prototypes for stakeholder review",
        "Design system creation for consistency"
      ],
      deliverables: [
        "Complete UI/UX design mockups",
        "Interactive clickable prototypes",
        "Design system documentation",
        "Accessibility compliance report"
      ]
    },
    {
      phase: "Phase 3",
      title: "Development & Integration",
      duration: "6-12 Weeks",
      icon: Code,
      color: "#8B5CF6",
      description: "Our expert developers build robust, scalable solutions using cutting-edge technologies and best practices.",
      activities: [
        "Agile sprint planning and task breakdown",
        "Frontend development with responsive design",
        "Backend API development and database design",
        "AI/ML model integration and training",
        "Third-party service integration (payment, analytics, etc.)",
        "Continuous integration and automated testing",
        "Code reviews and quality assurance",
        "Performance optimization and security hardening"
      ],
      deliverables: [
        "Fully functional MVP or complete application",
        "API documentation and technical guides",
        "Test coverage reports",
        "Performance benchmarks"
      ]
    },
    {
      phase: "Phase 4",
      title: "Testing & Quality Assurance",
      duration: "2-3 Weeks",
      icon: Shield,
      color: "#F59E0B",
      description: "Rigorous testing across all devices, browsers, and scenarios to ensure flawless performance and security.",
      activities: [
        "Unit testing and integration testing",
        "User acceptance testing (UAT) with stakeholders",
        "Cross-browser and cross-device compatibility testing",
        "Performance and load testing",
        "Security penetration testing and vulnerability scanning",
        "Accessibility testing (WCAG compliance)",
        "Bug tracking and resolution",
        "Final quality assurance review"
      ],
      deliverables: [
        "Comprehensive test reports",
        "Bug fix documentation",
        "Performance optimization report",
        "Security audit certificate"
      ]
    },
    {
      phase: "Phase 5",
      title: "Deployment & Launch",
      duration: "1 Week",
      icon: Rocket,
      color: "#EF4444",
      description: "Smooth deployment to production with zero downtime, monitoring, and immediate support readiness.",
      activities: [
        "Production environment setup and configuration",
        "Database migration and data integrity checks",
        "Deployment automation and rollback planning",
        "SSL certificate installation and security setup",
        "Monitoring and analytics integration",
        "Launch checklist execution",
        "Go-live coordination and stakeholder communication"
      ],
      deliverables: [
        "Live production application",
        "Deployment documentation",
        "Monitoring dashboard setup",
        "Launch report and analytics baseline"
      ]
    },
    {
      phase: "Phase 6",
      title: "Training & Support",
      duration: "Ongoing",
      icon: Users,
      color: "#10B981",
      description: "Comprehensive training for your team and continuous support to ensure long-term success and growth.",
      activities: [
        "Admin panel and system training sessions",
        "User documentation and video tutorials",
        "Knowledge base creation",
        "24/7 technical support setup",
        "Regular maintenance and updates",
        "Performance monitoring and optimization",
        "Feature enhancement planning",
        "Monthly progress reports and consultations"
      ],
      deliverables: [
        "Training materials and documentation",
        "Support ticket system access",
        "Maintenance schedule",
        "Enhancement roadmap"
      ]
    }
  ];

  const methodologies = [
    {
      title: "Agile Development",
      description: "We use agile methodologies with 2-week sprints, daily stand-ups, and continuous delivery to ensure flexibility and rapid iteration based on your feedback.",
      icon: Activity,
      benefits: ["Faster time to market", "Continuous feedback loops", "Adaptive to changes", "Regular deliverables"]
    },
    {
      title: "AI-First Approach",
      description: "Every solution we build considers AI integration opportunities from the ground up, ensuring your product is future-ready and leverages machine learning for competitive advantage.",
      icon: Brain,
      benefits: ["Intelligent automation", "Predictive analytics", "Personalized experiences", "Data-driven insights"]
    },
    {
      title: "Security by Design",
      description: "Security isn't an afterthought—it's built into every layer. We follow OWASP guidelines, implement encryption, and conduct regular security audits.",
      icon: Shield,
      benefits: ["GDPR & HIPAA compliant", "End-to-end encryption", "Regular security audits", "Penetration testing"]
    },
    {
      title: "Scalable Architecture",
      description: "We architect solutions that grow with your business, using cloud-native technologies, microservices, and containerization for unlimited scalability.",
      icon: Cloud,
      benefits: ["Auto-scaling infrastructure", "Microservices architecture", "Load balancing", "99.9% uptime SLA"]
    }
  ];

  const qualityMetrics = [
    { metric: "Code Quality", value: "98%", description: "Test coverage and clean code standards" },
    { metric: "Client Satisfaction", value: "4.9/5", description: "Average rating from 200+ projects" },
    { metric: "On-Time Delivery", value: "95%", description: "Projects delivered within timeline" },
    { metric: "Bug-Free Launch", value: "92%", description: "Products with zero critical bugs at launch" }
  ];

  const tools = [
    { name: "GitHub", category: "Version Control" },
    { name: "Jira", category: "Project Management" },
    { name: "Figma", category: "Design" },
    { name: "Docker", category: "DevOps" },
    { name: "AWS", category: "Cloud" },
    { name: "Slack", category: "Communication" },
    { name: "Postman", category: "API Testing" },
    { name: "TensorFlow", category: "AI/ML" }
  ];

  const faqs = [
    {
      question: "What is your typical project timeline from start to finish?",
      answer: "Project timelines vary based on complexity, but a typical custom software project takes 3-6 months from discovery to launch. We provide detailed timelines during the planning phase, with milestone-based delivery to ensure transparency. MVP projects can be completed in 6-8 weeks, while enterprise-scale solutions may take 6-12 months. We use agile methodology for flexibility and can adjust scope as needed."
    },
    {
      question: "How do you ensure the quality and security of the software?",
      answer: "Quality and security are our top priorities. We implement comprehensive testing strategies including unit testing, integration testing, user acceptance testing, and security penetration testing. We follow OWASP security guidelines, implement encryption at rest and in transit, conduct regular code reviews, and maintain 95%+ test coverage. All projects undergo security audits before deployment, and we provide ongoing monitoring and updates."
    },
    {
      question: "What happens after the project is launched?",
      answer: "Post-launch, we provide comprehensive support including bug fixes, performance monitoring, security updates, and feature enhancements. We offer flexible maintenance packages with 24/7 support options. You'll receive training documentation, access to our support ticketing system, and regular health check reports. We also schedule quarterly review meetings to discuss optimization opportunities and future enhancements."
    },
    {
      question: "Can you work with our existing systems and integrate with third-party services?",
      answer: "Absolutely! We specialize in seamless integration with existing systems, whether it's ERP, CRM, payment gateways, analytics platforms, or custom APIs. We have extensive experience with REST APIs, GraphQL, webhooks, and various integration patterns. During discovery, we audit your current tech stack and design integration strategies that minimize disruption and maximize efficiency."
    },
    {
      question: "How do you handle changes or new requirements during development?",
      answer: "Our agile methodology is built for flexibility. We conduct sprint planning every two weeks where we can reprioritize features based on your evolving needs. Major scope changes are documented with impact analysis on timeline and budget. We maintain transparent communication through daily updates and weekly demos, ensuring you're always in control and can make informed decisions about adjustments."
    },
    {
      question: "What makes Greatodeal different from other development agencies?",
      answer: "We combine technical excellence with business understanding. Unlike agencies that just code to specifications, we act as strategic partners, providing insights on market trends, technology choices, and growth opportunities. Our AI-first approach, agile methodology, and focus on scalable architecture ensure your investment delivers long-term value. We have a 95% client retention rate and maintain relationships long after project completion."
    }
  ];

  const processSteps = [
    { 
      number: "01", 
      title: "Discovery & Vision Alignment", 
      description: "We begin with immersive sessions to understand your business challenges, goals, market position, and competitive landscape. Our team conducts stakeholder interviews, process mapping workshops, and technology assessments to create a comprehensive understanding of your needs. We identify AI opportunities, automation potential, and integration requirements to build a solid foundation for success.",
      icon: Eye,
      highlights: ["Stakeholder interviews", "Process mapping", "Technology audit", "Opportunity analysis"]
    },
    { 
      number: "02", 
      title: "Challenge Identification & Analysis", 
      description: "Through detailed analysis, we uncover hidden challenges in your workflows, technical debt, scalability issues, and user pain points. We examine existing systems, interview end-users, analyze data flows, and identify bottlenecks. This phase ensures our solutions address real-world problems effectively, whether it's complex AI integration, mobile app optimization, or SaaS platform scalability.",
      icon: Search,
      highlights: ["Pain point analysis", "Technical debt assessment", "User research", "System audit"]
    },
    { 
      number: "03", 
      title: "Strategic Blueprint Creation", 
      description: "We craft a precise, actionable blueprint that outlines technology architecture, feature prioritization, and development phases. Our design team creates wireframes and prototypes while our architects plan database structures, API designs, and AI/ML model integration. We align every technical decision with your business evolution and growth trajectory, ensuring scalability from day one.",
      icon: FileText,
      highlights: ["Architecture design", "Prototype development", "Feature prioritization", "Scalability planning"]
    },
    { 
      number: "04", 
      title: "Precision Development & Innovation", 
      description: "Our developers bring the blueprint to life using cutting-edge technologies and best practices. We set strict standards for code quality, security, and performance. Each sprint delivers working features with comprehensive testing, documentation, and quality assurance. We implement AI/ML models, automate workflows, and build responsive interfaces that delight users across all devices.",
      icon: Code,
      highlights: ["Agile sprints", "Quality assurance", "Security implementation", "Performance optimization"]
    },
    { 
      number: "05", 
      title: "Building Your Digital Future", 
      description: "We develop innovative AI SaaS platforms, responsive websites, and native-quality mobile apps that position you for long-term success. Our focus on scalability, maintainability, and user experience ensures your digital products grow with your business. We implement analytics, monitoring, and AI-driven insights to continuously improve performance and user engagement.",
      icon: Rocket,
      highlights: ["Scalable solutions", "AI integration", "Analytics setup", "User experience focus"]
    },
    { 
      number: "06", 
      title: "Seamless Delivery & Deployment", 
      description: "We deliver robust, user-centric solutions with AI-driven features that meet and exceed your business objectives. Our deployment process includes comprehensive testing, staging environment validation, and zero-downtime production launches. We set up monitoring, alerting, and backup systems to ensure reliability and provide detailed documentation for your team.",
      icon: CheckCircle,
      highlights: ["Zero-downtime deployment", "Monitoring setup", "Documentation", "Team training"]
    },
    { 
      number: "07", 
      title: "Agile Iteration & Refinement", 
      description: "Using agile methods and continuous feedback loops, we refine AI algorithms, automation workflows, and software features through iterative development. Each sprint incorporates user feedback, performance data, and market insights. We conduct A/B testing, analyze user behavior, and optimize features to maximize ROI and user satisfaction.",
      icon: TrendingUp,
      highlights: ["Continuous feedback", "A/B testing", "Performance tuning", "Feature optimization"]
    },
    { 
      number: "08", 
      title: "Launch, Support & Long-Term Success", 
      description: "We launch your secure, scalable system with comprehensive support infrastructure. Our team provides 24/7 monitoring, regular maintenance updates, security patches, and feature enhancements. We schedule regular review meetings, provide analytics reports, and work with you on future roadmap planning to ensure sustained business impact and continuous growth.",
      icon: Award,
      highlights: ["24/7 support", "Regular updates", "Performance monitoring", "Growth planning"]
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
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

    <>
      <Helmet>
      {/* Page Title */}
      <title>How We Work | Greatodeal - AI SaaS & Software Development Experts</title>

      {/* Meta Description */}
      <meta
        name="description"
        content="Discover Greatodeal's structured 8-step development process, combining agile, AI-first thinking, and top-quality standards to deliver scalable software, websites, apps, and AI SaaS solutions for businesses worldwide."
      />

      {/* Canonical URL */}
      <link rel="canonical" href="https://greatodeal.com/howwork" />

      {/* Open Graph / Facebook */}
      <meta property="og:title" content="How We Work | Greatodeal - AI SaaS & Software Development Experts" />
      <meta
        property="og:description"
        content="From discovery to deployment, Greatodeal follows a proven methodology with 8 steps to deliver innovative software, apps, and AI SaaS solutions. See how we transform business ideas into reality."
      />
      <meta property="og:url" content="https://greatodeal.com/howwork" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://greatodeal.com/images/howwork.png" />
      <meta property="og:image:alt" content="How Greatodeal Works - 8 Step Development Process" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="How We Work | Greatodeal - AI SaaS & Software Development Experts" />
      <meta
        name="twitter:description"
        content="Follow Greatodeal's 8-step methodology to deliver innovative and scalable software, apps, and AI SaaS solutions for businesses worldwide."
      />
      <meta name="twitter:image" content="https://greatodeal.com/images/howwork.png" />
      <meta name="twitter:image:alt" content="How Greatodeal Works - 8 Step Development Process" />

      {/* Optional: Robots */}
      <meta name="robots" content="index, follow" />
    </Helmet>

    <div className="min-h-screen bg-gray-900 text-gray-200 overflow-x-hidden font-inter">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0A0F1E] via-[#1E1E1E] to-[#0A0F1E]">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM2RUU3QjciIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMSIvPjwvZz48L2c+PC9zdmc+')]"></div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#6EE7B7]/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#3B82F6]/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column: Text Content */}
            <div className="text-center lg:text-left">
              <motion.div 
                className="mb-6 inline-block"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
               
              </motion.div>
              
              <motion.h1 
                className="text-2xl md:text-5xl font-bold mb-8 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Our Dynamic
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6EE7B7] via-[#3B82F6] to-[#8B5CF6]">
                  Development Journey
                </span>
              </motion.h1>
              
              <motion.p 
                className="text-lg  max-w-xl text-[#ffffff] mb-12 mx-auto lg:mx-0 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                From initial discovery to final deployment, we follow a structured, transparent process to deliver innovative solutions that meet your business goals. Our proven methodology combines agile development, AI-first thinking, and unwavering quality standards.
              </motion.p>

              <motion.div 
                className="flex flex-wrap gap-6 justify-center lg:justify-start mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <div className="flex items-center gap-3 bg-[#1E1E1E] px-6 py-3 rounded-lg border border-[#374151]">
                  <CheckCircle className="w-5 h-5 text-[#6EE7B7]" />
                  <span className="text-sm font-medium">95% On-Time Delivery</span>
                </div>
                <div className="flex items-center gap-3 bg-[#1E1E1E] px-6 py-3 rounded-lg border border-[#374151]">
                  <CheckCircle className="w-5 h-5 text-[#6EE7B7]" />
                  <span className="text-sm font-medium">200+ Projects Completed</span>
                </div>
                <div className="flex items-center gap-3 bg-[#1E1E1E] px-6 py-3 rounded-lg border border-[#374151]">
                  <CheckCircle className="w-5 h-5 text-[#6EE7B7]" />
                  <span className="text-sm font-medium">4.9/5 Client Rating</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8, type: "spring", stiffness: 100 }}
              >
                   <div className="flex flex-col sm:flex-row gap-4">
                 
               
                 {/* Get a Cost Estimate Button */}
                 <Link
                   to="/contact"
                   className="relative group px-8 py-4 rounded-lg font-semibold text-[#6EE7B7] flex items-center justify-center gap-2 
                              border border-[#6EE7B7] overflow-hidden transition-all duration-300"
                 >
                   {/* Animated Border */}
                   <span className="absolute inset-0 rounded-lg border-2 border-transparent
                                    bg-gradient-to-r from-[#6EE7B7] via-[#34D399] to-[#6EE7B7]
                                    opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></span>
               
                   <span className="relative z-10 flex items-center gap-2">
                     Get a cost estimate
                     <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                   </span>
                 </Link>
               </div>
              </motion.div>
            </div>

            {/* Right Column: Video */}
            <motion.div 
              className="relative flex justify-center lg:justify-end"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
             <div className="relative w-full max-w-lg lg:max-w-full h-[400px] sm:h-[500px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl border-4 border-[#6EE7B7]/20">
  <img
    className="w-full h-full object-cover"
    src="/images/howwork.png"
    alt="How It Works"
  />
</div>


            </motion.div>
          </div>
        </div>
      </section>

      {/* Detailed Process Overview */}
      <section id="process-overview" className="py-32 bg-gradient-to-b from-[#0A0F1E] to-[#1E1E1E] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <motion.span 
              className="text-[#6EE7B7] text-sm font-bold tracking-widest uppercase mb-4 block"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              OUR METHODOLOGY
            </motion.span>
            <motion.h2 
              className="text-3xl sm:text-5xl lg:text-5xl font-bold mb-6 text-[#E5E7EB]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              8-Step Development Process
            </motion.h2>
            <motion.p 
              className="text-xl text-[#9CA3AF] max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Every great product starts with a great process. Here's how we transform your vision into reality through our battle-tested methodology that has delivered 200+ successful projects.
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  className="group relative"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="bg-gradient-to-br from-[#1E1E1E] to-[#0F1419] p-8 rounded-2xl h-full relative overflow-hidden border border-[#374151]/50 hover:border-[#6EE7B7]/40 transition-all duration-500 hover:shadow-2xl hover:shadow-[#6EE7B7]/10 hover:transform hover:scale-[1.02]">
                    {/* Background effects */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#6EE7B7]/5 via-transparent to-[#3B82F6]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Step number badge */}
                    <div className="absolute top-6 right-6 w-16 h-16 rounded-full bg-gradient-to-br from-[#6EE7B7]/20 to-[#3B82F6]/20 flex items-center justify-center border-2 border-[#6EE7B7]/30 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-2xl font-bold text-[#6EE7B7]">{step.number}</span>
                    </div>

                    {/* Icon */}
                    <div className="mb-6 inline-block">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#6EE7B7]/20 to-[#3B82F6]/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-7 h-7 text-[#6EE7B7]" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="relative z-10">
                      <h3 className="text-2xl font-bold text-[#E5E7EB] mb-3 group-hover:text-[#6EE7B7] transition-colors duration-300">
                        {step.title}
                      </h3>
                      <p className="text-[#9CA3AF] mb-6 leading-relaxed">
                        {step.description}
                      </p>

                      {/* Highlights */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {step.highlights.map((highlight, hIndex) => (
                          <span 
                            key={hIndex}
                            className="text-xs px-3 py-1 bg-[#6EE7B7]/10 text-[#6EE7B7] rounded-full border border-[#6EE7B7]/30"
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#6EE7B7]/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Detailed Working Phases Section */}
      <section className="py-32 bg-gradient-to-b from-[#1E1E1E] to-[#0A0F1E] relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#6EE7B7]/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-[#3B82F6]/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <motion.span 
              className="text-[#6EE7B7] text-sm font-bold tracking-widest uppercase mb-4 block"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              DETAILED BREAKDOWN
            </motion.span>
            <motion.h2 
              className="text-4xl sm:text-5xl lg:text-5xl font-bold mb-6 text-[#E5E7EB]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Deep Dive Into Each Phase
            </motion.h2>
            <motion.p 
              className="text-xl text-[#9CA3AF] max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              Click on any phase to explore the detailed activities, deliverables, and timeline involved in bringing your project to life.
            </motion.p>
          </div>

          <div className="space-y-6">
            {workingPhases.map((phase, index) => {
              const Icon = phase.icon;
              const isExpanded = activePhase === index;
              
              return (
                <motion.div
                  key={index}
                  className="bg-gradient-to-br from-[#1E1E1E] to-[#0F1419] rounded-2xl border border-[#374151]/50 overflow-hidden hover:border-[#6EE7B7]/40 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <button
                    onClick={() => setActivePhase(isExpanded ? null : index)}
                    className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-[#6EE7B7]/5 transition-colors duration-300"
                  >
                    <div className="flex items-center gap-6">
                      <div 
                        className="w-16 h-16 rounded-xl flex items-center justify-center transition-all duration-300"
                        style={{ backgroundColor: `${phase.color}20` }}
                      >
                        <Icon className="w-8 h-8" style={{ color: phase.color }} />
                      </div>
                      <div>
                        <div className="flex items-center gap-4 mb-2">
                          <span className="text-sm font-bold text-[#6EE7B7] uppercase tracking-wider">
                            {phase.phase}
                          </span>
                          <span className="text-xs px-3 py-1 bg-[#6EE7B7]/10 text-[#6EE7B7] rounded-full border border-[#6EE7B7]/30">
                            {phase.duration}
                          </span>
                        </div>
                        <h3 className="text-2xl font-bold text-[#E5E7EB] mb-2">
                          {phase.title}
                        </h3>
                        <p className="text-[#9CA3AF]">
                          {phase.description}
                        </p>
                      </div>
                    </div>
                    <ChevronRight 
                      className={`w-6 h-6 text-[#6EE7B7] transition-transform duration-300 ${isExpanded ? 'rotate-90' : ''}`}
                    />
                  </button>

                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-8 pb-8"
                    >
                      <div className="grid md:grid-cols-2 gap-8 pt-6 border-t border-[#374151]/50">
                        {/* Activities */}
                        <div>
                          <h4 className="text-lg font-bold text-[#E5E7EB] mb-4 flex items-center gap-2">
                            <Activity className="w-5 h-5 text-[#6EE7B7]" />
                            Key Activities
                          </h4>
                          <ul className="space-y-3">
                            {phase.activities.map((activity, aIndex) => (
                              <li key={aIndex} className="flex items-start gap-3 text-[#9CA3AF]">
                                <CheckCircle className="w-5 h-5 text-[#6EE7B7] flex-shrink-0 mt-0.5" />
                                <span>{activity}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Deliverables */}
                        <div>
                          <h4 className="text-lg font-bold text-[#E5E7EB] mb-4 flex items-center gap-2">
                            <FileText className="w-5 h-5 text-[#3B82F6]" />
                            Deliverables
                          </h4>
                          <ul className="space-y-3">
                            {phase.deliverables.map((deliverable, dIndex) => (
                              <li key={dIndex} className="flex items-start gap-3 text-[#9CA3AF]">
                                <Sparkles className="w-5 h-5 text-[#3B82F6] flex-shrink-0 mt-0.5" />
                                <span>{deliverable}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Methodologies */}
      <section className="py-32 bg-gradient-to-b from-[#0A0F1E] to-[#1E1E1E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <motion.span 
              className="text-[#6EE7B7] text-sm font-bold tracking-widest uppercase mb-4 block"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              OUR APPROACH
            </motion.span>
            <motion.h2 
              className="text-4xl sm:text-5xl lg:text-5xl font-bold mb-6 text-[#E5E7EB]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              What Makes Us Different
            </motion.h2>
            <motion.p 
              className="text-xl text-[#9CA3AF] max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              We combine proven methodologies with innovative approaches to deliver exceptional results that stand the test of time.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {methodologies.map((method, index) => {
              const Icon = method.icon;
              return (
                <motion.div
                  key={index}
                  className="group bg-gradient-to-br from-[#1E1E1E] to-[#0F1419] p-8 rounded-2xl border border-[#374151]/50 hover:border-[#6EE7B7]/40 transition-all duration-500 hover:shadow-2xl hover:shadow-[#6EE7B7]/10"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#6EE7B7]/20 to-[#3B82F6]/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-[#6EE7B7]" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-[#E5E7EB] mb-4 group-hover:text-[#6EE7B7] transition-colors duration-300">
                    {method.title}
                  </h3>
                  
                  <p className="text-[#9CA3AF] mb-6 leading-relaxed">
                    {method.description}
                  </p>

                  <div className="space-y-2">
                    {method.benefits.map((benefit, bIndex) => (
                      <div key={bIndex} className="flex items-center gap-3 text-sm">
                        <CheckCircle className="w-4 h-4 text-[#6EE7B7] flex-shrink-0" />
                        <span className="text-[#9CA3AF]">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quality Metrics */}
      <section className="py-32 bg-gradient-to-b from-[#1E1E1E] to-[#0A0F1E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <motion.span 
              className="text-[#6EE7B7] text-sm font-bold tracking-widest uppercase mb-4 block"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              PROVEN RESULTS
            </motion.span>
            <motion.h2 
              className="text-4xl sm:text-5xl lg:text-5xl font-bold mb-6 text-[#E5E7EB]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Our Track Record Speaks
            </motion.h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {qualityMetrics.map((metric, index) => (
              <motion.div
                key={index}
                className="text-center group"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="bg-gradient-to-br from-[#1E1E1E] to-[#0F1419] p-8 rounded-2xl border border-[#374151]/50 hover:border-[#6EE7B7]/40 transition-all duration-500 hover:shadow-2xl hover:shadow-[#6EE7B7]/10 hover:transform hover:scale-105">
                  <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6EE7B7] to-[#3B82F6] mb-2">
                    {metric.value}
                  </div>
                  <div className="text-xl font-bold text-[#E5E7EB] mb-2">
                    {metric.metric}
                  </div>
                  <div className="text-sm text-[#9CA3AF]">
                    {metric.description}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools & Technologies */}
      <section className="py-32 bg-gradient-to-b from-[#0A0F1E] to-[#1E1E1E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <motion.span 
              className="text-[#6EE7B7] text-sm font-bold tracking-widest uppercase mb-4 block"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              OUR TOOLKIT
            </motion.span>
            <motion.h2 
              className="text-4xl sm:text-5xl lg:text-5xl font-bold mb-6 text-[#E5E7EB]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Tools We Use Daily
            </motion.h2>
            <motion.p 
              className="text-xl text-[#9CA3AF] max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              Industry-leading tools and platforms that power our development process and ensure seamless collaboration.
            </motion.p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {tools.map((tool, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-[#1E1E1E] to-[#0F1419] p-6 rounded-xl border border-[#374151]/50 hover:border-[#6EE7B7]/40 transition-all duration-300 hover:transform hover:scale-105 text-center group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <div className="text-xl font-bold text-[#E5E7EB] mb-2 group-hover:text-[#6EE7B7] transition-colors duration-300">
                  {tool.name}
                </div>
                <div className="text-xs text-[#9CA3AF]">
                  {tool.category}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    
      {/* FAQ Section */}
      <section className="py-32 bg-gradient-to-b from-[#0A0F1E] to-[#1E1E1E]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <motion.span 
              className="text-[#6EE7B7] text-sm font-bold tracking-widest uppercase mb-4 block"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              FAQ
            </motion.span>
            <motion.h2 
              className="text-4xl sm:text-5xl lg:text-5xl font-bold mb-6 text-[#E5E7EB]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Frequently Asked Questions
            </motion.h2>
            <motion.p 
              className="text-xl text-[#9CA3AF]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              Everything you need to know about our development process
            </motion.p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-[#1E1E1E] to-[#0F1419] rounded-xl border border-[#374151]/50 overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <button
                  onClick={() => setExpandedFAQ(expandedFAQ === index ? null : index)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-[#6EE7B7]/5 transition-colors duration-300"
                >
                  <span className="text-lg font-bold text-[#E5E7EB] pr-4">
                    {faq.question}
                  </span>
                  <ChevronRight 
                    className={`w-5 h-5 text-[#6EE7B7] flex-shrink-0 transition-transform duration-300 ${
                      expandedFAQ === index ? 'rotate-90' : ''
                    }`}
                  />
                </button>
                
                {expandedFAQ === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-8 pb-6"
                  >
                    <p className="text-[#9CA3AF] leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-br from-[#1E1E1E] via-[#0A0F1E] to-[#1E1E1E] overflow-hidden relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#6EE7B7]/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#3B82F6]/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block text-[#6EE7B7] text-sm font-bold tracking-widest uppercase mb-6 px-4 py-2 bg-[#6EE7B7]/10 rounded-full border border-[#6EE7B7]/30">
              LET'S BUILD SOMETHING AMAZING
            </span>
            
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#E5E7EB] mb-8 leading-tight">
              
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6EE7B7] to-[#3B82F6]">
                Let's Transform Your Vision Into Reality
              </span>
            </h2>

            <p className="text-xl text-[#9CA3AF] mb-12 max-w-3xl mx-auto leading-relaxed">
              Join 200+ successful clients who trusted us with their digital transformation. Get a free consultation and project estimate today.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-wrap gap-6 justify-center"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Link 
              to="/contact" 
              className="inline-flex items-center gap-3 bg-gradient-to-r from-[#6EE7B7] to-[#5CD7A5] hover:from-[#5CD7A5] hover:to-[#4BC795] text-[#0A0F1E] px-10 py-5 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg shadow-[#6EE7B7]/30 text-lg"
            >
              Let's Discuss Ideas
              <Rocket className="w-5 h-5" />
            </Link>
            
          </motion.div>

          <motion.div 
            className="mt-16 flex flex-wrap justify-center gap-8 text-sm text-[#9CA3AF]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
          >
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-[#6EE7B7]" />
              <span>Free Consultation</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-[#6EE7B7]" />
              <span>No Obligation Quote</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-[#6EE7B7]" />
              <span>24/7 Support Available</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Global Styles */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
        
        .font-inter {
          font-family: 'Inter', sans-serif;
        }

        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
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

        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }

        .animate-slide-up {
          animation: slide-up 0.8s ease-out forwards;
        }

        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }

        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 10px;
        }

        ::-webkit-scrollbar-track {
          background: #0A0F1E;
        }

        ::-webkit-scrollbar-thumb {
          background: #374151;
          border-radius: 5px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: #6EE7B7;
        }
      `}</style>
    </div>
    </>
  );
};

export default HowWeWork;
