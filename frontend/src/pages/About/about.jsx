import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronRight, MapPin, Users, Star, Award, Clock, DollarSign, Zap, Shield, Globe, Code, Smartphone, Monitor, Database, Cloud, Settings, ArrowRight, CheckCircle, PlayCircle, ExternalLink } from 'lucide-react';
import Ceo_image from '../../assets/images/CEO_AMOS.png'
import office2 from '../../assets/images/Pak_office.png'
import netherland_office from  '../../assets/images/netherland_office.png'
import Zia_image from '../../assets/images/CEO_ZIA.png'
import umar_image from '../../assets/images/umar_image.png'
import { Helmet } from 'react-helmet-async';
import about1 from '../../../public/images/about1.png'
import about2 from '../../../public/images/about2.png'
const About = () => {
  const [activeSection, setActiveSection] = useState(0);
  const [expandedTech, setExpandedTech] = useState(1);
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(prev => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting
          }));
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[id]').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Image URLs from Unsplash
  const images = {
    team: 'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    coding: about1,
    mission: about2,
    vancouver: 'https://images.unsplash.com/photo-1580048915913-310e45b1b2e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
    hongkong: 'https://images.unsplash.com/photo-1531259683007-016a7b628fc3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
    danang: 'https://images.unsplash.com/photo-1587330979470-3595ac045953?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    hcmc: 'https://images.unsplash.com/photo-1583417319070-4a69db38a482?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    testimonial: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
    cta: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
  };

  const stats = [
    { number: "9+", label: "years in business", icon: Clock },
    { number: "120+", label: "engineers & developers", icon: Users },
    { number: "100%", label: "client satisfaction rate", icon: Star },
    { number: ">60%", label: "cost saved", icon: DollarSign }
  ];

  const principles = [
    {
      title: "Thorough requirements gathering",
      description: "We work closely with you to understand your needs, even if you don't have a detailed specification. We ask the right questions to uncover your objectives and ensure a shared understanding of the project.",
      color: "from-emerald-500 to-emerald-600"
    },
    {
      title: "Accurate cost estimation",
      description: "We provide realistic cost estimates based on a thorough analysis of your project requirements and potential risks. We aim to explore cost optimization opportunities to maximize your budget.",
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Flexible project scoping",
      description: "We adapt to evolving needs and changing requirements while maintaining control over the project scope. We ensure the final product aligns with your current goals, even if they have shifted during development.",
      color: "from-cyan-500 to-cyan-600"
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


  const pricingModels = [
    {
      title: "Time and materials",
      icon: Clock,
      description: "Ideal for projects with evolving requirements or when the scope is not fully defined upfront. This model provides flexibility to adapt to changes and ensures you only pay for the actual work done.",
      perfect: "Agile software development, ongoing support and maintenance, projects with a high degree of uncertainty.",
      color: "border-emerald-500"
    },
    {
      title: "Capped time and materials",
      icon: Shield,
      description: "Similar to time and materials, but with a predefined maximum cost to provide budget predictability. This offers a balance between flexibility and cost control.",
      perfect: "Projects with some flexibility in scope but where a budget ceiling is essential.",
      color: "border-emerald-500"
    },
    {
      title: "Fixed price",
      icon: DollarSign,
      description: "Best suited for well-defined projects with a clear scope and fixed requirements. This model provides cost certainty and predictability upfront.",
      perfect: "Short-term projects, projects with well-documented requirements, and situations where budget certainty is critical.",
      color: "border-emerald-500"
    },
    {
      title: "Subscription-based",
      icon: Zap,
      description: "Ideal for ongoing services and support, providing predictable monthly costs and consistent service delivery.",
      perfect: "IT support and maintenance, managed services (e.g., cloud management, security monitoring), and long-term partnerships.",
      color: "border-emerald-500"
    },
    {
      title: "Per-ticket",
      icon: Settings,
      description: "Suitable for support services where costs are based on the number of support tickets or requests resolved. This model provides flexibility for varying support needs.",
      perfect: "Help desk support, incident management, and ad-hoc support requests.",
      color: "border-emerald-500"
    },
    {
      title: "Mixed model",
      icon: Award,
      description: "For complex projects that involve a combination of services or have different phases with varying requirements. This model offers the flexibility to tailor the pricing structure to each phase.",
      perfect: "Large-scale digital transformation projects, projects with both fixed-scope & evolving requirements.",
      color: "border-emerald-500"
    }
  ];

  

  const techStack = {
  1: {
    title: "Programming Languages",
    items: [
      { name: "Python", icon: "🐍", color: "text-blue-400" },
      { name: "JavaScript", icon: "💛", color: "text-yellow-400" },
      { name: "TypeScript", icon: "🔵", color: "text-sky-400" },
      { name: "Java", icon: "☕", color: "text-orange-400" },
      { name: "Go (Golang)", icon: "🔵", color: "text-cyan-400" },
      { name: "C#", icon: "⚡", color: "text-purple-400" }
    ]
  },
  2: {
    title: "Web & Mobile",
    items: [
      { name: "React.js", color: "text-cyan-400" },
      { name: "Next.js", color: "text-gray-300" },
      { name: "Vue.js", color: "text-green-400" },
      { name: "Angular", color: "text-red-400" },
      { name: "React Native", color: "text-cyan-400" },
      { name: "Flutter", color: "text-blue-400" },
      { name: "Android (Kotlin)", color: "text-green-400" },
      { name: "iOS (Swift)", color: "text-orange-400" }
    ]
  },
  3: {
    title: "AI & Automation",
    items: [
      { name: "TensorFlow", color: "text-yellow-400" },
      { name: "PyTorch", color: "text-red-400" },
      { name: "LangChain", color: "text-blue-400" },
      { name: "OpenAI API", color: "text-green-400" },
      { name: "RPA (UiPath, Automation Anywhere)", color: "text-purple-400" }
    ]
  },
  4: {
    title: "Databases",
    items: [
      { name: "PostgreSQL", color: "text-blue-400" },
      { name: "MySQL", color: "text-orange-400" },
      { name: "MongoDB", color: "text-green-400" },
      { name: "Redis", color: "text-red-400" },
      { name: "Elasticsearch", color: "text-yellow-400" }
    ]
  },
  5: {
    title: "Cloud & DevOps",
    items: [
      { name: "AWS", color: "text-orange-400" },
      { name: "Azure", color: "text-blue-400" },
      { name: "Google Cloud", color: "text-green-400" },
      { name: "Docker", color: "text-cyan-400" },
      { name: "Kubernetes", color: "text-blue-400" },
      { name: "Terraform", color: "text-purple-400" },
      { name: "GitHub Actions", color: "text-gray-300" }
    ]
  },
  6: {
    title: "Enterprise & SaaS",
    items: [
      { name: "Odoo ERP", color: "text-green-400" },
      { name: "SAP", color: "text-blue-400" },
      { name: "Salesforce", color: "text-cyan-400" },
      { name: "Stripe API", color: "text-purple-400" },
      { name: "Shopify / WooCommerce", color: "text-pink-400" }
    ]
  }
};


  const servicesList = [
  "Custom Software Development",
  "Web Application Development",
  "Mobile App Development",
  "Desktop Application Development",
  "Enterprise Software & ERP Solutions",
  "SaaS Platform Development",
  "MVP Development for Startups",
  "AI & Automation Solutions",
  "Machine Learning Model Development",
  "Chatbots & Virtual Assistants",
  "Data Analytics & Business Intelligence",
  "API Development & Integration",
  "Cloud Solutions & Deployment",
  "UI/UX Design",
  "IT Consulting & Digital Strategy",
  "Process Automation & Workflow Optimization",
  "IoT & Smart Device Integration",
  "Blockchain Solutions",
  "AR/VR Applications",
];


  const clients = [
    { name: "Deloitte", logo: "DELOITTE" },
    { name: "Auvenir", logo: "AUVENIR" },
    { name: "GoF&B", logo: "GoF&B" },
    { name: "Vinasa", logo: "vinasa" },
    { name: "GoSell", logo: "GoSell" },
    { name: "Vecom", logo: "VECOM" },
    { name: "Gomya", logo: "GOMYA" }
  ];

  return (
    
    <>
      <Helmet>
    {/* Basic SEO */}
    <title>About Greatodeal | AI SaaS & Automation Experts</title>
    <meta
      name="description"
      content="Learn about Greatodeal — a global IT & AI automation company providing websites, apps, software, ERP systems, and AI SaaS solutions. Discover our mission, services, and team driving innovation worldwide."
    />
    <link rel="canonical" href="https://greatodeal.com/about" />

    {/* Open Graph / Facebook */}
    <meta property="og:type" content="website" />
    <meta property="og:title" content="About Greatodeal | AI SaaS & Automation Experts" />
    <meta
      property="og:description"
      content="Greatodeal is a leading IT & AI automation company delivering web, app, ERP, and SaaS solutions. Explore our story, services, and expertise driving digital transformation worldwide."
    />
    <meta property="og:url" content="https://greatodeal.com/about" />
    <meta property="og:image" content="https://greatodeal.com/public/images/about1.png" />
    <meta property="og:image" content="https://greatodeal.com/public/images/about2.png" />
    <meta property="og:site_name" content="Greatodeal" />

    {/* Twitter */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="About Greatodeal | AI SaaS & Automation Experts" />
    <meta
      name="twitter:description"
      content="Greatodeal is a global IT & AI automation company delivering websites, apps, software, ERP systems, and SaaS solutions. Discover our mission, services, and team."
    />
    <meta name="twitter:image" content="https://greatodeal.com/public/images/about1.png" />
    <meta name="twitter:site" content="@Greatodeal" />

    {/* Optional: Pinterest */}
    <meta name="pinterest-rich-pin" content="true" />
    <meta property="og:image:alt" content="Greatodeal About Page – AI SaaS & IT Automation" />
  </Helmet>

    <div className="min-h-screen bg-gray-900 text-gray-200 overflow-x-hidden">
      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center pt-24 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" />
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-2xl md:text-4xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
                Your Technology Partner
              </span>
              <br />
              <span className="text-gray-200">for Growth</span>
            </h1>
            
            <p className={` text-gray-400 max-w-3xl mx-auto mb-12 mt-8 transition-all duration-1000 delay-200 ${isVisible.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              Greatodeal, founded in 2016, is a leading IT and AI automation company specializing in websites, apps, software, ERP systems, and AI SaaS platforms. We provide comprehensive IT solutions and software development services, focusing on scalable, secure, and innovative technologies to drive digital transformation. Clients value our commitment to quality, cost-effectiveness, and collaborative approach, which delivers exceptional results that drive business success.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className={`text-center p-6 rounded-xl bg-gray-800 border border-gray-700 hover:border-emerald-400 transition-all duration-500 ${isVisible.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: `${300 + index * 100}ms` }}>
                  <IconComponent className="w-8 h-8 text-emerald-400 mx-auto mb-4" />
                  <div className="text-3xl lg:text-4xl font-bold text-emerald-400 mb-2">{stat.number}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              );
            })}
          </div>

         
        </div>
      </section>

      {/* Story Section */}
    <section id="story" className="py-20 px-4 sm:px-6 lg:px-8">
  <div className="max-w-7xl mx-auto">
    <div className="grid lg:grid-cols-2 gap-16 items-center">
      
      {/* Text Section */}
      <div
        className={`transition-all duration-1000 ${
          isVisible.story ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
        }`}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-8 leading-tight">
          <span className="text-emerald-400">Our Story</span>
          <br />Driven by Innovation & Client Success
        </h2>
        <div className="space-y-6 text-gray-400">
          <p className="leading-relaxed">
            Since <span className="text-emerald-400 font-semibold">2016</span>, 
            Greatodeal has been on a mission to deliver technology that transforms 
            businesses. What began as a vision to make cutting-edge software more 
            accessible has grown into a global agency specializing in 
            <span className="text-white"> enterprise software, AI automation 
             and cloud solutions</span>.
          </p>
          <p className="text-lg leading-relaxed">
            Our approach is simple yet powerful: combine technical excellence with 
            a deep commitment to <span className="text-white font-medium">client satisfaction</span>. 
            Every project we deliver is tailored to help organizations achieve growth, 
            efficiency, and long-term scalability. 
          </p>
          <p className="text-lg leading-relaxed">
            Today, Greatodeal partners with startups, enterprises, and global brands. 
            By aligning innovation with business goals, we ensure our clients not only 
            adopt the latest technologies but also gain a strategic advantage in their 
            industries.
          </p>
        </div>
      </div>

      {/* Image Section */}
      <div
        className={`relative transition-all duration-1000 delay-200 ${
          isVisible.story ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
        }`}
      >
        <div className="aspect-w-4 aspect-h-3 rounded-2xl overflow-hidden shadow-lg">
          <img
            src={images.coding}
            alt="Greatodeal team developing innovative solutions"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  </div>
</section>


      {/* Mission Section */}
     <section id="mission" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/50">
  <div className="max-w-7xl mx-auto">
    <div className="grid lg:grid-cols-2 gap-16 items-center">
      
      {/* Image Section */}
      <div
        className={`relative transition-all duration-1000 ${
          isVisible.mission
            ? 'opacity-100 translate-x-0'
            : 'opacity-0 -translate-x-10'
        } order-2 lg:order-1`}
      >
        <div className="aspect-w-4 aspect-h-3 rounded-2xl overflow-hidden">
          <img
            src={images.mission}
            alt="Business analytics dashboard"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Text Section */}
      <div
        className={`transition-all duration-1000 delay-200 ${
          isVisible.mission
            ? 'opacity-100 translate-x-0'
            : 'opacity-0 translate-x-10'
        } order-1 lg:order-2`}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-blue-400 leading-tight">
          Our Mission
        </h2>
        <div className="space-y-6 text-gray-400">
          <p className="leading-relaxed">
            At Greatodeal, we believe in the power of technology to transform
            businesses and improve lives. Our top priority is achieving your
            project goals, even with time and budget constraints or changing
            requirements.{' '}
            <span className="text-blue-400 font-semibold">
              You set the vision; we deliver the results.
            </span>
          </p>
          <p className="text-lg leading-relaxed">
            We're not just a vendor; we're your long-term partner in success. We
            actively collaborate with you to deliver exceptional software and
            digital experiences that drive growth and efficiency. Our expertise
            in IT and AI automation includes developing custom websites, mobile
            apps, enterprise software, ERP systems, and AI-powered SaaS
            platforms to streamline operations and enable intelligent
            decision-making.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>


      {/* Global Presence */}
<section id="locations" className="py-20 px-4 sm:px-6 lg:px-8">
  <div className="max-w-7xl mx-auto text-center">
    <h2
      className={`text-3xl md:text-4xl font-bold mb-8 leading-tight transition-all duration-1000 ${
        isVisible.locations ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <span className="text-blue-400">Where We Are</span>
    </h2>

    <p
      className={`text-lg text-gray-400 mb-16 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-200 ${
        isVisible.locations ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      We’re proud to have a global presence. Our head office is in the Netherlands, and we also
      operate a sub-office in Pakistan to collaborate with clients worldwide.
    </p>

    <div
      className={`relative bg-gray-800 rounded-2xl p-8 mb-16 transition-all duration-1000 delay-400 ${
        isVisible.locations ? "opacity-100 scale-100" : "opacity-0 scale-95"
      }`}
    >
      <div className="grid md:grid-cols-2 gap-6">
        {[
          {
            city: "Amsterdam",
            country: "Netherlands (Head Office)",
            image:
              netherland_office,
            address: "Jasonstraat 25, Amsterdam, Netherlands",
          },
          {
            city: "Lahore",
            country: "Pakistan (Sub Office)",
            image:
              office2,
            address: "Shadman 2, Shadman, Lahore, Pakistan",
          },
        ].map((location, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-lg h-64 bg-gradient-to-br from-[#6EE7B7]/20 to-[#93C5FD]/20"
          >
            <img
              src={location.image}
              alt={`${location.city} skyline`}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F1419]/80 to-transparent flex items-end p-4">
              <div className="text-left">
                <div className="flex items-center space-x-2">
                  <MapPin className="w-5 h-5 text-blue-400" />
                  <span className="font-semibold text-white">{location.city}</span>
                </div>
                <div className="text-sm text-gray-400">{location.country}</div>
                <div className="text-xs text-gray-500 mt-1">{location.address}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>

 <section
  id="founders"
  className="min-h-screen flex flex-col items-center justify-center py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/50"
>
  <div className="max-w-6xl w-full text-center">
    {/* Heading */}
    <h2
      className={`text-3xl md:text-4xl font-bold mb-8 text-emerald-400 leading-tight transition-all duration-1000 ${
        isVisible["founders"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      Founders & Coordinators
    </h2>

    {/* Subtitle */}
    <p
      className={`text-lg text-gray-400 mb-16 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-200 ${
        isVisible["founders"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      Meet the leadership of <span className="text-emerald-400 font-semibold">Greatodeal </span> 
      driving innovation across AI SaaS, enterprise systems, and global tech solutions.
    </p>

    {/* Responsive Grid: 1 on mobile, 2 on tablet, 3 on large screens */}
    <div
      className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 transition-all duration-1000 ${
        isVisible["founders"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
       <div
        className="relative p-8 rounded-2xl bg-gray-800 border border-gray-700 hover:border-emerald-400 hover:shadow-xl transition-all duration-500 group"
        style={{ transitionDelay: "600ms" }}
      >
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-400 to-blue-400 rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="relative w-40 h-40 mx-auto mb-6 overflow-hidden rounded-full">
          <img
            src={Ceo_image}
            alt="Amos Sint-jago"
            className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
          />
        </div>
        <h3 className="text-xl font-bold text-emerald-400">Amos Sint-jago</h3>
        <p className="text-gray-400 text-base">Co-Founder & Director (International Operations)</p>
        <p className="text-gray-300 mt-4 text-base leading-relaxed">
          Amos Sint-jago is Co-Founder & Director at <span className="text-emerald-400 font-semibold">Greatodeal</span>, 
          managing international operations, partnerships, and enterprise-scale projects 
          while ensuring global alignment and quality delivery.
        </p>
      </div>
      {/* Umar Farooq - CEO */}
      <div
        className="relative p-8 rounded-2xl bg-gray-800 border border-gray-700 hover:border-emerald-400 hover:shadow-xl transition-all duration-500 group"
        style={{ transitionDelay: "300ms" }}
      >
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-400 to-blue-400 rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="relative w-40 h-40 mx-auto mb-6 overflow-hidden rounded-full">
          <img
            src={umar_image}
            alt="Umar Farooq"
            className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
          />
        </div>
        <h3 className="text-xl font-bold text-emerald-400">Umar Farooq</h3>
        <p className="text-gray-400 text-base">CEO & Global Founder</p>
        <p className="text-gray-300 mt-4 text-base leading-relaxed">
          Umar Farooq is the Founder & CEO of <span className="text-emerald-400 font-semibold">Greatodeal</span>. 
          Based in Pakistan, he leads global strategy, management, and partnerships
          ensuring Greatodeal delivers impactful innovation worldwide.
        </p>
      </div>

      {/* Zia Rana - CTO */}
      <div
        className="relative p-8 rounded-2xl bg-gray-800 border border-gray-700 hover:border-emerald-400 hover:shadow-xl transition-all duration-500 group"
        style={{ transitionDelay: "400ms" }}
      >
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-emerald-400 rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="relative w-40 h-40 mx-auto mb-6 overflow-hidden rounded-full">
          <img
            src={Zia_image}
            alt="Zia Rana"
            className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
          />
        </div>
        <h3 className="text-xl font-bold text-emerald-400">Zia Rana</h3>
        <p className="text-gray-400 text-base">Co-Founder & Chief Technology Officer (CTO)</p>
        <p className="text-gray-300 mt-4 text-base leading-relaxed">
          Zia Rana is Co-Founder and CTO of <span className="text-emerald-400 font-semibold">Greatodeal</span>. 
          An AI & Automation specialist, he leads innovation in SaaS architecture, full-stack development, 
          and intelligent business systems driving digital transformation.
        </p>
      </div>

      
     
    </div>
  </div>
</section>




      {/* Services Grid */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <h2 className={`text-3xl md:text-4xl font-bold text-center mb-16 leading-tight transition-all duration-1000 ${isVisible.services ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <span className="text-emerald-400">Our Services</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesList.map((service, index) => (
              <div key={index} className={`p-6 rounded-xl bg-gray-800 border border-gray-700 hover:border-emerald-400 hover:shadow-lg transition-all duration-300 group cursor-pointer ${isVisible.services ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: `${index * 50}ms` }}>
                <div className="flex items-center justify-between">
                  <span className="text-gray-200 group-hover:text-white transition-colors">{service}</span>
                  <ArrowRight className="w-4 h-4 text-emerald-400 opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-1" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Principles */}
      <section id="principles" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className={`text-3xl md:text-4xl font-bold text-center mb-8 leading-tight transition-all duration-1000 ${isVisible.principles ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Our Key Principles for <span className="text-emerald-400">Project Success</span>
          </h2>
          <p className={`text-lg text-gray-400 text-center mb-16 max-w-4xl mx-auto leading-relaxed transition-all duration-1000 delay-200 ${isVisible.principles ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            We're committed to delivering successful projects that meet your goals and exceed your expectations. We achieve this through proven methodologies, best practices, and a collaborative approach.
          </p>

          <div className="grid lg:grid-cols-3 gap-8">
            {principles.map((principle, index) => (
              <div key={index} className={`relative p-8 rounded-2xl bg-gray-800 border border-gray-700 hover:border-emerald-400 transition-all duration-500 group ${isVisible.principles ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: `${300 + index * 150}ms` }}>
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${principle.color} rounded-t-2xl`} />
                <div className="flex items-center mb-6">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${principle.color} flex items-center justify-center mr-4`}>
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-emerald-400">{principle.title}</h3>
                </div>
                <p className="text-gray-400 leading-relaxed">{principle.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      {/* <section id="industries" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <h2 className={`text-3xl md:text-4xl font-bold text-center mb-8 leading-tight transition-all duration-1000 ${isVisible.industries ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <span className="text-blue-400">Industries We Serve</span>
          </h2>
          <p className={`text-lg text-gray-400 text-center mb-16 max-w-4xl mx-auto leading-relaxed transition-all duration-1000 delay-200 ${isVisible.industries ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Industry-specific IT solutions tailored to your sector's unique challenges and opportunities. We have a proven track record of success across a diverse range of industries.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-4">
            {industries.map((industry, index) => (
              <div key={index} className={`p-6 rounded-xl bg-gray-800 border border-gray-700 hover:border-blue-400 hover:shadow-lg transition-all duration-300 text-center group cursor-pointer ${isVisible.industries ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: `${index * 30}ms` }}>
                <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">{industry.icon}</div>
                <div className="text-sm text-gray-300 group-hover:text-white transition-colors">{industry.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Pricing Models */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className={`text-3xl md:text-4xl font-bold text-center mb-8 leading-tight transition-all duration-1000 ${isVisible.pricing ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <span className="text-emerald-400">Pricing Models</span>
          </h2>
          <p className={`text-lg text-gray-400 text-center mb-16 max-w-4xl mx-auto leading-relaxed transition-all duration-1000 delay-200 ${isVisible.pricing ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            We understand that every project is unique, and your pricing model should reflect that. We offer flexible pricing options to ensure you get the best value for your investment.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pricingModels.map((model, index) => {
              const IconComponent = model.icon;
              return (
                <div key={index} className={`p-8 rounded-2xl bg-gray-800 border-2 ${model.color} hover:shadow-xl transition-all duration-500 group ${isVisible.pricing ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: `${index * 100}ms` }}>
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 rounded-lg bg-emerald-400/20 flex items-center justify-center mr-4">
                      <IconComponent className="w-6 h-6 text-emerald-400" />
                    </div>
                    <h3 className="text-xl font-bold text-emerald-400">{model.title}</h3>
                  </div>
                  <p className="text-gray-400 mb-6 leading-relaxed">{model.description}</p>
                  <div className="space-y-3">
                    <div className="text-sm font-semibold text-emerald-400">Perfect for:</div>
                    <div className="text-sm text-gray-300">{model.perfect}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      
      {/* Tech Stack Section */}
      <section id="tech-stack" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <h2 className={`text-3xl md:text-4xl font-bold text-center mb-8 leading-tight transition-all duration-1000 ${isVisible['tech-stack'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <span className="text-emerald-400">Our Technology Stack</span>
          </h2>
          <p className={`text-lg text-gray-400 text-center mb-16 max-w-4xl mx-auto leading-relaxed transition-all duration-1000 delay-200 ${isVisible['tech-stack'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            We leverage cutting-edge technologies and proven frameworks to build robust, scalable, and high-performance solutions.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {Object.keys(techStack).map((key) => (
              <button
                key={key}
                onClick={() => setExpandedTech(parseInt(key))}
                className={`px-6 py-3 rounded-full flex items-center transition-all ${expandedTech === parseInt(key) ? 'bg-emerald-400 text-gray-900 font-semibold' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'}`}
              >
                {expandedTech === parseInt(key) ? <ChevronDown className="w-4 h-4 mr-2" /> : <ChevronRight className="w-4 h-4 mr-2" />}
                {techStack[key].title}
              </button>
            ))}
          </div>

          <div className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 transition-all duration-500 ${isVisible['tech-stack'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {techStack[expandedTech].items.map((tech, index) => (
              <div key={index} className="p-4 rounded-xl bg-gray-800 border border-gray-700 hover:border-emerald-400 hover:shadow-lg transition-all duration-300 text-center">
                <div className={`text-3xl mb-2 ${tech.color || 'text-gray-300'}`}>{tech.icon || <Code className="inline-block" />}</div>
                <div className="text-sm text-gray-300">{tech.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Section */}
      {/* <section id="clients" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className={`text-3xl md:text-4xl font-bold text-center mb-8 leading-tight transition-all duration-1000 ${isVisible.clients ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <span className="text-blue-400">Our Clients</span>
          </h2>
          <p className={`text-lg text-gray-400 text-center mb-16 max-w-4xl mx-auto leading-relaxed transition-all duration-1000 delay-200 ${isVisible.clients ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            We're proud to partner with innovative companies across industries to deliver transformative technology solutions.
          </p>

          <div className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 transition-all duration-1000 ${isVisible.clients ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {clients.map((client, index) => (
              <div key={index} className="flex items-center justify-center p-8 rounded-xl bg-gray-800 border border-gray-700 hover:border-blue-400 hover:shadow-lg transition-all duration-300">
                <div className="text-2xl font-bold text-gray-300">{client.logo}</div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section
  id="cta"
  className="relative py-32 px-4 sm:px-6 lg:px-8"
>
  {/* Background Image + Overlay */}
  <div className="absolute inset-0">
    <img
      src={images.cta}
      alt="Team collaborating"
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-gradient-to-br from-gray-900/95 via-gray-900/80 to-gray-900/95" />
  </div>

  {/* Content */}
  <div className="relative z-10 max-w-3xl mx-auto text-center">
    <h2
      className={`text-3xl md:text-5xl font-extrabold mb-6 leading-tight text-white transition-all duration-1000 ${
        isVisible.cta
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10"
      }`}
    >
      <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
        Ready to Build Something Amazing?
      </span>
    </h2>

    <p
      className={`text-lg md:text-xl text-gray-300 mb-10 leading-relaxed transition-all duration-1000 delay-200 ${
        isVisible.cta
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10"
      }`}
    >
      Let’s collaborate to transform your ideas into powerful software
      solutions that drive growth, innovation, and lasting success.
    </p>

    <div
      className={`transition-all duration-1000 delay-400 ${
        isVisible.cta
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10"
      }`}
    >
      <Link to="/Contact">
        <button className="group px-10 py-4 bg-emerald-400 hover:bg-emerald-500 text-gray-900 font-bold rounded-full flex items-center mx-auto shadow-lg shadow-emerald-400/30 transition-all duration-300">
          Let’s Start
          <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
        </button>
      </Link>
    </div>
  </div>
</section>

    </div>
    </>
  );
};

export default About;