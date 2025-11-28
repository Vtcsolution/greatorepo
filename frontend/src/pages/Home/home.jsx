import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet-async";

import {
    Code,
    Database,
    Smartphone,
    Play,
    CheckCircle,
    ArrowRight,
    ChevronDown,
    ChevronRight,
    Zap,
    Cpu,
    Cloud,
    Briefcase,
    
} from 'lucide-react';
import timImg from '../../assets/images/Tim bakker.png'
import ElenaImg from '../../assets/images/Elena Smits.png'
import video_home from '../../assets/images/video_home.webm'
import naveed from '../../assets/images/naveed_marketing.png'
import haseeb from '../../assets/images/Haseeb.jpg'
const Home = () => {
    const [activeService, setActiveService] = useState(null); // Track active service for mobile dropdown and desktop panel
    const [isVisible, setIsVisible] = useState({});
    const [activeTestimonial, setActiveTestimonial] = useState(0);

    // Intersection Observer for animations
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(prev => ({
                            ...prev,
                            [entry.target.id]: true
                        }));
                    }
                });
            },
            { threshold: 0.1 }
        );

        const elements = document.querySelectorAll('[id^="section-"]');
        elements.forEach(el => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    // Auto-rotate testimonials
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveTestimonial(prev => (prev + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    // Toggle dropdown for mobile and update active service for desktop
    const toggleService = (index) => {
        setActiveService(activeService === index ? null : index);
    };

const services = [
  {
    icon: Code,
    title: "Enterprise Software & App Development",
    description: "At Greatodeal, we engineer game-changing enterprise software and cross-platform mobile apps tailored to your business needs. Our focus is on scalability, security, and innovation using the latest technologies.",
    features: [
      "Custom web applications with React, Angular, or Vue.js",
      "Cross-platform mobile apps using Flutter and React Native",
      "ERP, CRM, and SaaS platforms designed for workflow optimization",
      "Cloud-native solutions on AWS, Azure, and Google Cloud",
      "Blockchain & Web3 integrations for next-gen businesses",
      "High-performance, scalable database architecture",
      "Third-party API integrations (Salesforce, SAP, etc.)",
      "Agile development with CI/CD & DevOps practices"
    ]
  },
  {
    icon: Zap,
    title: "Website & App Automation with AI",
    description: "We leverage AI-powered automation to streamline workflows, enhance customer experiences, and minimize repetitive tasks across apps and websites.",
    features: [
      "Automated QA testing and deployment pipelines",
      "AI-driven content personalization and recommendations",
      "Smart chatbots and virtual assistants (NLP-based)",
      "Business process workflow automation",
      "Predictive analytics for user behavior and engagement",
      "Cross-platform automation across web, iOS, and Android",
      "Real-time monitoring with AI-powered error detection",
      "Seamless CI/CD pipeline integration"
    ]
  },
  {
    icon: Cpu,
    title: "AI & Agentic Automation Solutions",
    description: "We build advanced AI solutions and autonomous agents that optimize operations, deliver insights, and enable intelligent business decision-making.",
    features: [
      "AI agents for autonomous process execution",
      "ML/DL models for forecasting and analytics",
      "Robotic Process Automation (RPA) for repetitive tasks",
      "NLP chatbots, sentiment analysis & voice AI",
      "AI-powered dashboards & decision intelligence",
      "ERP/CRM/SaaS platform integrations",
      "Ethical AI with bias detection & explainability",
      "Continuous model retraining and performance optimization"
    ]
  },
  {
    icon: Database,
    title: "API Development, Integration & Cloud Solutions",
    description: "We ensure seamless connectivity and reliable cloud solutions by building secure APIs and scalable SaaS integrations for businesses of all sizes.",
    features: [
      "Custom REST & GraphQL API development",
      "Integration with Stripe, HubSpot, Twilio & other SaaS",
      "Cloud infrastructure architecture & migration",
      "API authentication & security (OAuth2, JWT, API keys)",
      "Real-time data sync & event-driven workflows",
      "Middleware for enterprise-scale systems",
      "Detailed developer-friendly API documentation",
      "Monitoring, optimization & continuous updates"
    ]
  },
 
  {
    icon: Cloud,
    title: "Cloud & DevOps Engineering",
    description: "We help businesses embrace cloud computing and modern DevOps to achieve agility, reliability, and faster innovation cycles.",
    features: [
      "Cloud migration to AWS, Azure, or GCP",
      "Kubernetes & Docker containerization",
      "CI/CD automation for faster deployments",
      "Infrastructure as Code (Terraform, Ansible)",
      "Serverless architecture for cost optimization",
      "Monitoring, logging & observability solutions",
      "Scalable microservices-based architectures",
      "24/7 cloud support & cost management"
    ]
  },
  {
    icon: Briefcase,
    title: "IT Consulting & Digital Transformation",
    description: "Our consultants help enterprises reimagine digital strategies, optimize operations, and drive growth with modern technology adoption.",
    features: [
      "Technology stack evaluation & roadmapping",
      "Business process re-engineering",
      "Digital transformation & modernization strategies",
      "Cloud adoption & IT infrastructure planning",
      "Data strategy & governance consulting",
      "Agile/DevOps coaching & implementation",
      "Cost optimization for IT operations",
      "End-to-end digital advisory services"
    ]
  }
];


  const industries = [
  { name: "E-Commerce", icon: "🛒" },
  { name: "Fintech & Banking", icon: "💳" },
  { name: "Insurance", icon: "📋" },
  { name: "Healthcare", icon: "🏥" },
  { name: "Education & E-Learning", icon: "🎓" },
  { name: "Manufacturing & Industry 4.0", icon: "⚙️" },
  { name: "Supply Chain & Logistics", icon: "📦" },
  { name: "Retail & Marketplaces", icon: "🏪" },
  { name: "Real Estate & PropTech", icon: "🏠" },
  { name: "Travel & Hospitality", icon: "✈️" },
  { name: "Telecommunications", icon: "📡" },
  { name: "Energy & Utilities", icon: "⚡" },

  // Modern high-demand
  { name: "SaaS Platforms", icon: "☁️" },
  { name: "AI & Automation", icon: "🤖" },
  { name: "Startups & MVPs", icon: "🚀" },
  { name: "Gaming & AR/VR", icon: "🎮" },
  { name: "Professional Services", icon: "⭐" },
  { name: "Public Sector & Government", icon: "🏛️" }
];
   const solutions = [
  "ERP Systems",
  "CRM Platforms",
  "HR Software",
  "Financial Management Solutions",
  "Project Management Tools",
  "Document Management Systems",
  "Asset Management",
  "Fleet Management",
  "Custom Software Development",
  "Web Application Development",
  "Mobile App Development",
  "AI & Automation Solutions",
  "SaaS Platforms",
  "Startup MVP Development",
  "Cloud Solutions & Integration",
  "Business Intelligence & Data Analytics",
 
  "Enterprise Software Development",
  "API Development & Integration"
];


    const techStack = [
        { name: "Java", icon: "☕" },
        { name: "Python", icon: "🐍" },
        { name: ".NET", icon: "🔷" },
        { name: "JavaScript", icon: "📜" },
        { name: "PHP", icon: "🐘" },
        { name: "Ruby", icon: "💎" },
        { name: "Swift", icon: "🚀" },
        { name: "Kotlin", icon: "🎯" },
        { name: "Golang", icon: "🐹" },
        { name: "Node.js", icon: "💚" },
        { name: "CSS", icon: "🎨" },
        { name: "HTML5", icon: "🌐" }
    ];

   const testimonials = [
  {
    text: "Greatodeal exceeded our expectations. They not only delivered robust software solutions but also provided strategic guidance that helped optimize our workflows. The team is collaborative, professional, and extremely reliable.",
    author: "Tim Bakker",
    position: "CEO, Tech Innovators Inc.",
    company: "Tech Innovators Inc.",
    image: timImg,

  },
  {
    text: "Partnering with Greatodeal allowed us to streamline complex processes with AI and automation. Their attention to detail and deep technical expertise have made a tangible impact on our business efficiency.",
    author: "Sarah Johnson",
    position: "CTO, FinSecure",
    company: "FinSecure",
    image:ElenaImg

  },
  {
    text: "Greatodeal team developed a highly intuitive e-commerce platform for us. Their solution enhanced our customer experience and improved our internal operations significantly.",
    author: "Muhammad Naveed",
    position: "Founder, E-Shop Global",
    company: "E-Shop Global",
    image: naveed,
  },
  {
    text: "Working with Greatodeal has been a game-changer. From SaaS platforms to mobile apps, their expertise in AI and automation has consistently delivered innovative and scalable solutions.",
    author: "Haseeb",
    position: "Product Manager, AI Dynamics",
    company: "AI Dynamics",
    image: haseeb,
  }
];

    

    return (

      <div>
      <Helmet>
        <title>About Greatodeal | AI SaaS & Automation Experts</title>
        <meta
          name="description"
          content="Learn about Greatodeal — experts in AI SaaS, automation, and web development solutions worldwide."
        />
        <link rel="canonical" href="https://greatodeal.com" />
      </Helmet>

        <div className="min-h-screen bg-[#121212] text-[#E5E7EB] overflow-x-hidden">
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover opacity-20"
                    >
                        <source src={video_home} type="video/webm" />
                    </video>
                </div>

                <div className="container mx-auto max-w-6xl relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-8 animate-fadeInUp">
                            <div className="space-y-6">
                                <h1 className="text-2xl md:text-4xl font-bold leading-tight">
                                    We Build Custom Software
                                    <br />
                                    & <span className="bg-gradient-to-r from-[#6EE7B7] to-[#3B82F6] bg-clip-text text-transparent">
                                        SaaS Solutions
                                    </span>
                                </h1>
                                <p className="text-lg  max-w-xl leading-relaxed">
                                    Your trusted technology partner in the digital age. We build solutions for today and tomorrow,
                                    ensuring your business stays ahead of the curve and achieves lasting success.
                                </p>
                            </div>
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

                        </div>
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-[#6EE7B7] to-[#93C5FD] rounded-3xl blur-3xl opacity-20 animate-pulse" />
                            <div className="relative bg-[#1E1E1E] p-8 rounded-3xl border border-[#374151] shadow-2xl">
                                <div className="space-y-4">
                                    <div className="flex gap-3">
                                        <div className="w-3 h-3 rounded-full bg-[#EF4444]" />
                                        <div className="w-3 h-3 rounded-full bg-[#F59E0B]" />
                                        <div className="w-3 h-3 rounded-full bg-[#10B981]" />
                                    </div>
                                    <div className="space-y-3 font-mono text-sm">
  <div className="text-[#6EE7B7]">// Empowering businesses with technology</div>
  <div className="text-[#93C5FD]">function Greatodeal Solutions() &#123; </div>
  <div className="pl-4 text-[#E5E7EB]">return "AI. Cloud. Security. Innovation.";</div>
  <div className="text-[#93C5FD]">&#125;</div>
</div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
           <section id="section-services" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className={`mb-16 ${isVisible['section-services'] ? 'animate-slide-up' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl font-bold mb-4">Services We Offer</h2>
          <p className="text-[#9CA3AF] max-w-2xl">
            Reduce your IT costs and achieve your business goals with our efficient and affordable software solutions.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Service List */}
          <div className={`space-y-4 ${isVisible['section-services'] ? 'animate-slide-up' : 'opacity-0 translate-y-10'}`} style={{ animationDelay: '100ms' }}>
            {services.map((service, index) => (
              <div key={index} className="border-[#374151]">
                <div
                  className={`p-6 rounded-lg border cursor-pointer transition-all duration-300 ${
                    activeService === index
                      ? 'bg-[#1E1E1E] border-[#6EE7B7] shadow-lg'
                      : 'bg-transparent border-[#374151] hover:border-[#6EE7B7] hover:bg-[#1E1E1E]'
                  }`}
                  onClick={() => toggleService(index)}
                  role="button"
                  aria-expanded={activeService === index}
                  aria-controls={`dropdown-${index}`}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`p-3 rounded-lg ${
                        activeService === index ? 'bg-[#6EE7B7] text-[#121212]' : 'bg-[#374151] text-[#6EE7B7]'
                      }`}
                    >
                      <service.icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold mb-1">{service.title}</h3>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 transition-transform lg:hidden ${
                        activeService === index ? 'rotate-180' : ''
                      }`}
                    />
                    <ChevronRight className="w-5 h-5 hidden lg:block" />
                  </div>
                </div>
                {/* Mobile Dropdown */}
                <div
                  id={`dropdown-${index}`}
                  className={`lg:hidden overflow-hidden transition-all duration-500 ease-out ${
                    activeService === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="p-6 bg-[#1E1E1E] rounded-b-xl border border-t-0 border-[#374151]">
                    <p className="text-[#9CA3AF] leading-relaxed mb-4">{service.description}</p>
                    {service.features && (
                      <div className="space-y-4">
                        <div className="grid grid-cols-1 gap-3">
                          {service.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center gap-2">
                              <CheckCircle className="w-4 h-4 text-[#6EE7B7] flex-shrink-0" />
                              <span className="text-sm">{feature}</span>
                            </div>
                          ))}
                        </div>
                        <Link
                          to="/contact"
                          className="text-[#6EE7B7] font-medium flex items-center gap-2 group mt-6"
                        >
                          VIEW MORE
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Desktop Details Panel */}
          <div
            className={`hidden lg:block ${isVisible['section-services'] ? 'animate-slide-up' : 'opacity-0 translate-y-10'}`}
            style={{ animationDelay: '200ms' }}
          >
            <div className="bg-[#1E1E1E] p-8 rounded-xl border border-[#374151] h-full">
              <div className="space-y-6">
                <p className="text-[#9CA3AF] leading-relaxed">
                  {services[activeService !== null ? activeService : 0].description}
                </p>
                {services[activeService !== null ? activeService : 0].features && (
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {services[activeService !== null ? activeService : 0].features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-[#6EE7B7] flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                   
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

            {/* Industries Section */}
            <section id="section-industries" className="py-20 px-4 bg-[#0F1419]">
                <div className="container mx-auto max-w-6xl">
                    <div className={`text-center mb-16 ${isVisible['section-industries'] ? 'animate-fadeInUp' : 'opacity-0'}`}>
                        <h2 className="text-3xl font-bold mb-4">Industries We Serve</h2>
                        <p className="text-[#9CA3AF] max-w-3xl mx-auto">
                            Industry-specific IT solutions tailored to your sector's unique challenges and opportunities.
                            We have a proven track record of success across a diverse range of industries.
                        </p>
                    </div>
                    <div className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-7 gap-4 sm:gap-6 mb-16 ${isVisible['section-industries'] ? 'animate-fadeInUp' : 'opacity-0'}`}>
                        {industries.map((industry, index) => (
                            <div
                                key={index}
                                className="bg-[#1E1E1E] p-4 sm:p-6 rounded-lg border border-[#374151] text-center hover:border-[#6EE7B7] hover:bg-[#262626] transition-all duration-300 transform hover:scale-105 min-h-[80px] flex flex-col justify-center"
                            >
                                <div className="text-2xl mb-2 sm:mb-3">{industry.icon}</div>
<div className="text-[10px] sm:text-xs font-medium leading-normal break-normal">
  {industry.name}
</div>                            </div>
                        ))}
                    </div>
                    <div className={`${isVisible['section-industries'] ? 'animate-fadeInUp' : 'opacity-0'}`}>
                        <h3 className="text-2xl font-bold mb-8 text-center">Solutions We Deliver</h3>
                        
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {solutions.map((solution, index) => (
                                <div
                                    key={index}
                                    className="bg-[#1E1E1E] p-4 rounded-lg border border-[#6EE7B7] text-center font-medium hover:bg-[#262626] transition-all duration-300"
                                >
                                    {solution}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            
            

            {/* Testimonials */}
            <section id="section-testimonials" className="py-20 px-4">
  <div className="container mx-auto max-w-6xl">
   

    <div
      className={`text-center mb-16 ${
        isVisible["section-testimonials"] ? "animate-fadeInUp" : "opacity-0"
      }`}
    >
      <h3 className="text-2xl font-bold mb-8">
        Greatodeal in the Eyes of Clients
      </h3>
      <div className="relative max-w-4xl mx-auto">
        <div className="bg-[#1E1E1E] p-8 rounded-xl border border-[#374151]">
          <div className="flex justify-between items-start mb-6">
            <div className="text-6xl text-[#374151]">"</div>
            <div className="text-2xl font-bold text-[#6EE7B7]">
              {testimonials[activeTestimonial].company}
            </div>
          </div>

          <blockquote className=" text-[#E5E7EB] leading-relaxed mb-8">
            {testimonials[activeTestimonial].text}
          </blockquote>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#6EE7B7] flex-shrink-0">
              <img
                src={testimonials[activeTestimonial].image}
                alt={testimonials[activeTestimonial].author}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="font-semibold text-[#6EE7B7]">
                {testimonials[activeTestimonial].author}
              </div>
              <div className="text-[#9CA3AF] text-sm">
                {testimonials[activeTestimonial].position}
              </div>
            </div>
          </div>
        </div>

        {/* Dots navigation */}
        <div className="flex justify-center gap-2 mt-6">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === activeTestimonial ? "bg-[#6EE7B7]" : "bg-[#374151]"
              }`}
              onClick={() => setActiveTestimonial(index)}
            />
          ))}
        </div>
      </div>
    </div>
  </div>
</section>


            {/* Why Choose Us */}
           <section id="section-why" className="py-20 px-4 bg-[#0F1419] relative overflow-hidden">
  <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
    <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-[#6EE7B7] blur-3xl animate-pulse animation-delay-1000"></div>
    <div className="absolute bottom-1/3 right-1/3 w-96 h-96 rounded-full bg-[#3B82F6] blur-3xl animate-pulse"></div>
  </div>
  <div className="container mx-auto max-w-6xl relative z-10">
    <div className={`mb-16 ${isVisible['section-why'] ? 'animate-fadeInUp' : 'opacity-0'}`}>
      <h2 className="text-3xl font-bold mb-8">Why Choose Us</h2>
      <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
        {/* Video Section */}
        <div className="bg-[#1E1E1E] p-4 rounded-xl border border-[#374151] hover:border-[#6EE7B7] transition-all duration-300 group overflow-hidden relative">
          <div className="aspect-video bg-[#121212] rounded-lg flex items-center justify-center relative overflow-hidden">
            <video
              className="w-full h-full object-cover absolute inset-0"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src={video_home} type="video/webm" />
            </video>
            <div className="absolute inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm group-hover:opacity-0 transition-opacity duration-300">
              <div className="w-20 h-20 bg-[#6EE7B7]/90 rounded-full flex items-center justify-center animate-pulse">
                <Play className="w-10 h-10 text-[#121212] ml-1" />
              </div>
            </div>
          </div>
          <div className="absolute -top-4 -right-4 w-8 h-8 bg-[#3B82F6] rounded-full opacity-70 animate-float1"></div>
          <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-[#6EE7B7] rounded-full opacity-70 animate-float2"></div>
          <div className="absolute top-8 -right-6 w-5 h-5 bg-[#9333EA] rounded-full opacity-70 animate-float3"></div>
        </div>

        {/* Text Section */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold">Your Strategic Technology Partner</h3>
          <p className="text-[#9CA3AF] leading-relaxed">
            <span className="text-xl font-semibold text-[#6EE7B7] tracking-wide animate-pulse">
              Greatodeal
            </span>{" "}
            is more than just a service provider — we’re your long-term technology partner. 
            Our mission is to deliver scalable websites, mobile apps, SaaS platforms, and 
            AI-driven automation tools that not only meet but exceed your expectations. 
            With a proven track record of client satisfaction, we combine innovation, 
            reliability, and dedicated support to help your business grow faster and smarter.
          </p>
          <div className="flex flex-wrap gap-2 mt-6">
            {[
              "AI & Automation",
              "SaaS Platforms",
              "Custom Software",
              "Mobile Apps",
              "Cloud & DevOps",
            ].map((tech, i) => (
              <span
                key={i}
                className="px-3 py-1.5 bg-[#1E1E1E] border border-[#374151] rounded-full text-xs text-[#9CA3AF] hover:text-[#6EE7B7] hover:border-[#6EE7B7] transition-all duration-300"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>

    {/* Features */}
    <div className="grid md:grid-cols-3 gap-8">
      {[
        {
          icon: "💡",
          title: "Client-First Approach",
          description:
            "We put client satisfaction at the heart of everything we do, ensuring transparent communication, timely delivery, and measurable results.",
          animation: "hover:-translate-y-2"
        },
        {
          icon: "⚡",
          title: "Future-Ready Tech",
          description:
            "We leverage cutting-edge technologies like AI, SaaS, blockchain, and automation to build solutions that grow with your business.",
          animation: "hover:-translate-y-2"
        },
        {
          icon: "🤝",
          title: "Trusted Partnerships",
          description:
            "We build long-term partnerships, offering ongoing support and maintenance so your systems remain secure, reliable, and up to date.",
          animation: "hover:-translate-y-2"
        },
        {
          icon: "🛠️",
          title: "Tailored Solutions",
          description:
            "Every business is unique. Our websites, apps, and software are custom-built to match your exact goals and industry requirements.",
          animation: "hover:rotate-1"
        },
        {
          icon: "🔒",
          title: "Security & Reliability",
          description:
            "We follow strict development standards and best practices to ensure your data is always safe and your solutions are always reliable.",
          animation: "hover:rotate-1"
        },
        {
          icon: "🚀",
          title: "Proven Track Record",
          description:
            "With a high client retention rate and successful projects across industries, we deliver excellence that businesses can count on.",
          animation: "hover:rotate-1"
        }
      ].map((feature, index) => (
        <div
          key={index}
          className={`bg-[#1E1E1E] p-6 rounded-xl border border-[#374151] hover:border-[#6EE7B7] transition-all duration-300 ${feature.animation} ${isVisible['section-why'] ? 'animate-fadeInUp' : 'opacity-0'}`}
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <div className="text-3xl mb-4 hover:scale-110 transition-transform duration-300 inline-block">
            {feature.icon}
          </div>
          <h4 className="font-semibold mb-3">{feature.title}</h4>
          <p className="text-[#9CA3AF] text-sm leading-relaxed">{feature.description}</p>
        </div>
      ))}
    </div>
  </div>
</section>


            {/* Tech Stack */}
            <section id="section-tech" className="py-20 px-4">
                <div className="container mx-auto max-w-6xl">
                    <div className={`text-center mb-16 ${isVisible['section-tech'] ? 'animate-fadeInUp' : 'opacity-0'}`}>
                        <h2 className="text-3xl font-bold mb-4">Our Technology Stack</h2>
                        <p className="text-[#9CA3AF] max-w-3xl mx-auto">
                            We work with a wide range of technologies to deliver the best solutions for your business needs.
                        </p>
                    </div>
                    <div className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 ${isVisible['section-tech'] ? 'animate-fadeInUp' : 'opacity-0'}`}>
                        {techStack.map((tech, index) => (
                            <div
                                key={index}
                                className="bg-[#1E1E1E] p-6 rounded-xl border border-[#374151] text-center hover:border-[#6EE7B7] transition-all duration-300 transform hover:scale-105"
                            >
                                <div className="text-3xl mb-3">{tech.icon}</div>
                                <div className="font-medium">{tech.name}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
           <section id="section-cta" className="py-20 px-4 bg-gradient-to-br from-[#6EE7B7]/10 to-[#3B82F6]/10">
  <div className="container mx-auto max-w-6xl">
    <div className={`text-center ${isVisible['section-cta'] ? 'animate-fadeInUp' : 'opacity-0'}`}>
      <h2 className="text-3xl md:text-4xl font-bold mb-6">
        Partner with Greatodeal for Your Next Project
      </h2>
      <p className="text-[#9CA3AF] max-w-2xl mx-auto mb-8 leading-relaxed">
        We specialize in <span className="font-semibold text-white">enterprise software, AI-driven automation and 
        cloud solutions</span>. Whether you’re looking to modernize existing systems or 
        launch an innovative digital product, our expert team ensures scalable, secure, and future-ready solutions.
      </p>
      <Link
        to="/Contact"
        className="inline-block bg-[#6EE7B7] text-[#121212] px-8 py-4 rounded-lg font-semibold hover:bg-[#5CD7A5] transition-all duration-300 transform hover:scale-105 shadow-lg"
      >
        Schedule a Consultation
      </Link>
    </div>
  </div>
</section>

        </div>
        </div>
    );
};

export default Home;