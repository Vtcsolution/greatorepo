import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { ChevronRight, CheckCircle, Shield, Zap, Cloud, BarChart3, Users } from 'lucide-react';
import { Helmet } from "react-helmet-async";


const SupplyChainItservices = () => {
  const [expandedFAQ, setExpandedFAQ] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const supplyChainData = {
    title: "Supply Chain IT Services and Solutions",
    description: "Greatodeal delivers intelligent and resilient IT solutions for supply chain management, optimizing end-to-end operations from procurement to delivery. Our expertise in real-time tracking, predictive analytics, blockchain transparency, and IoT integration drives efficiency, reduces costs, and enhances supply chain visibility.",
    whoWeServe: [
      "Manufacturers and producers",
      "Retail and e-commerce companies",
      "Logistics and transportation providers",
      "Wholesale distributors",
      "3PL (Third-Party Logistics) providers",
      "Pharmaceutical and healthcare supply chains",
      "Automotive and aerospace suppliers",
      "Food and beverage distributors"
    ],
    solutions: [
      {
        title: "Supply Chain Visibility Platforms",
        description: "Real-time platforms providing end-to-end visibility across suppliers, warehouses, transportation, and delivery for proactive decision-making."
      },
      {
        title: "Warehouse Management Systems (WMS)",
        description: "Advanced WMS solutions for inventory optimization, automated picking, order fulfillment, and labor management to streamline warehouse operations."
      },
      {
        title: "Demand Forecasting and Planning",
        description: "AI-powered tools for accurate demand prediction, inventory planning, and scenario modeling to minimize stockouts and overstock."
      },
      {
        title: "Transportation Management Systems (TMS)",
        description: "Comprehensive TMS platforms for route optimization, carrier management, freight auditing, and real-time shipment tracking."
      },
      {
        title: "Supplier Relationship Management (SRM)",
        description: "Integrated SRM solutions for vendor evaluation, contract management, performance tracking, and collaborative planning with suppliers."
      },
      {
        title: "Sustainability and Traceability Solutions",
        description: "Blockchain and IoT-enabled platforms for product traceability, carbon footprint tracking, and compliance with ESG reporting requirements."
      }
    ],
    services: [
      "Supply Chain Analytics and BI",
      "IoT Integration for Real-Time Tracking",
      "Blockchain Implementation for Traceability",
      "ERP and SCM System Integration",
      "Predictive Maintenance for Assets",
      "Digital Twin Technology for Supply Chains",
      "API Ecosystems for Supply Chain Connectivity"
    ],
    technologies: [
      {
        title: "Internet of Things (IoT)",
        description: "IoT sensors and devices for real-time monitoring of shipments, inventory levels, temperature control, and asset location throughout the supply chain."
      },
      {
        title: "Artificial Intelligence (AI) and Machine Learning",
        description: "AI algorithms for demand forecasting, anomaly detection, route optimization, and automated decision-making to enhance supply chain intelligence."
      },
      {
        title: "Blockchain",
        description: "Immutable blockchain ledgers for transparent transactions, smart contracts, provenance tracking, and fraud prevention across supply chain partners."
      },
      {
        title: "Big Data and Analytics",
        description: "Processing massive supply chain datasets to uncover patterns, predict disruptions, and optimize operations with advanced analytics dashboards."
      },
      {
        title: "Cloud Computing",
        description: "Scalable cloud platforms (AWS, Azure, Google Cloud) for flexible supply chain applications, global collaboration, and cost-effective scalability."
      },
      {
        title: "Digital Twins",
        description: "Virtual replicas of physical supply chain assets and processes for simulation, what-if analysis, and optimization before real-world implementation."
      }
    ],
    whyChooseUs: [
      {
        title: "Our supply chain expertise",
        description: "With deep industry knowledge, we deliver tailored IT solutions that address complex complex supply chain challenges and drive operational excellence."
      },
      {
        title: "Cutting-edge technologies",
        description: "We integrate IoT, AI, blockchain, and digital twins to create intelligent, resilient, and transparent supply chains."
      },
      {
        title: "Commitment to compliance and security",
        description: "Certified in ISO 28000 and ISO 27001, we ensure supply chain data security and regulatory compliance across global operations."
      },
      {
        title: "End-to-end optimization",
        description: "Our solutions optimize every stage of the supply chain, from procurement to delivery, reducing costs and improving service levels."
      },
      {
        title: "Real-time visibility and insights",
        description: "We provide comprehensive visibility and actionable analytics to enable proactive decision-making and rapid response to disruptions."
      },
      {
        title: "Flexible collaboration",
        description: "We offer adaptable engagement models, from custom development to managed services, to fit your supply chain IT needs."
      }
    ],
    securityMeasures: [
      {
        category: "Personnel",
        items: [
          "We conduct thorough background checks on all employees.",
          "All employees sign non-disclosure agreements (NDAs) to protect proprietary supply chain data.",
          "We provide regular security awareness training to keep our team informed about the latest threats and best practices.",
          "We have dedicated security personnel who perform regular spot checks and monitor our systems for suspicious activity."
        ]
      },
      {
        category: "Processes and Standards",
        items: [
          "We are ISO 27001:2013 certified, demonstrating our commitment to information security management.",
          "We comply with ISO 28000 standards for supply chain security management.",
          "We conduct annual risk assessments and have incident management procedures in place.",
          "We have a business continuity plan to ensure minimal disruption in case of unexpected events.",
          "We have an internal audit program to regularly review and improve our security practices."
        ]
      },
      {
        category: "Technology and Infrastructure",
        items: [
          "We maintain a highly available and stable network infrastructure to protect against downtime and ensure data accessibility.",
          "We have centralized IT operation management to monitor and control our systems effectively.",
          "We implement physical security measures to protect our facilities and equipment.",
          "We support a hybrid working model with secure remote access solutions."
        ]
      }
    ]
  };

  const faqs = [
    {
      question: "What IT services do you offer for supply chain management?",
      answer: "We provide supply chain visibility platforms, warehouse management systems, demand forecasting tools, transportation management systems, supplier relationship management, and sustainability solutions."
    },
    {
      question: "How do you ensure supply chain data security?",
      answer: "We implement ISO 27001 and ISO 28000-compliant measures, including encryption, multi-factor authentication, blockchain immutability, and regular audits to protect sensitive supply chain data."
    },
    {
      question: "Can you customize solutions for our supply chain needs?",
      answer: "Yes, we offer custom and platform-based solutions tailored to your specific supply chain requirements, from manufacturing to retail distribution."
    },
    {
      question: "What types of supply chain organizations do you serve?",
      answer: "We serve manufacturers, retailers, logistics providers, wholesalers, 3PL companies, pharmaceutical supply chains, automotive suppliers, and food distributors."
    }
  ];

  // Enhanced animation variants (fixed sticking: unified Framer Motion, no custom observer, staggered children)
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: isMobile ? 30 : 10,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1], // Custom smooth cubic-bezier
        staggerChildren: 0.1 // Stagger child animations
      }
    }
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }
    },
    hover: { 
      scale: 1.03, 
      boxShadow: "0 10px 20px rgba(46, 125, 123, 0.3)",
      transition: { duration: 0.3, ease: "easeOut" }
    }
  };

  const buttonVariants = {
    hover: { 
      scale: 1.05, 
      boxShadow: "0 8px 16px rgba(46, 125, 123, 0.4)", 
      transition: { duration: 0.3, ease: "easeOut" } 
    },
    tap: { scale: 0.95 }
  };

  return (
    <div className="min-h-screen bg-[#1C2526] text-[#F5F6F5] overflow-x-hidden font-sans">
      {/* Hero Section */}
      <Helmet>
  {/* Page Title */}
  <title>Supply Chain & Logistics IT Services in Lahore Pakistan | SCM Software Solutions | Greatodeal</title>

  {/* Meta Description */}
  <meta
    name="description"
    content="Greatodeal provides intelligent supply chain and logistics IT solutions in Lahore, Pakistan and worldwide. We build SCM visibility platforms, WMS, TMS, blockchain traceability, IoT tracking, demand forecasting, and digital twin technology for manufacturers, logistics providers, and retail supply chains."
  />

  {/* SEO Keywords */}
  <meta
    name="keywords"
    content="Supply Chain IT Services Lahore, Logistics Software Pakistan, WMS Development, TMS Solutions, SCM Software House Lahore, Supply Chain Visibility Platform, IoT Supply Chain Tracking, Blockchain Supply Chain, Digital Twin Supply Chain, Inventory Management Pakistan, Logistics Automation Pakistan"
  />

  {/* Canonical URL */}
  <link
    rel="canonical"
    href="https://greatodeal.com/focus-areas/logistics"
  />

  {/* Open Graph */}
  <meta property="og:title" content="Supply Chain & Logistics IT Solutions | Greatodeal" />
  <meta
    property="og:description"
    content="End-to-end supply chain software solutions including visibility platforms, WMS, TMS, IoT tracking, forecasting, and blockchain transparency."
  />
  <meta property="og:type" content="website" />
  <meta
    property="og:url"
    content="https://greatodeal.com/focus-areas/logistics"
  />
  <meta
    property="og:image"
    content="https://greatodeal.com/public/images/supplychain.png"
  />
  <meta
    property="og:image:alt"
    content="Supply Chain and Logistics IT Solutions by Greatodeal"
  />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta 
    name="twitter:title" 
    content="Supply Chain & Logistics IT Services | SCM Software Development | Greatodeal" 
  />
  <meta 
    name="twitter:description" 
    content="SCM visibility, logistics automation, IoT tracking, blockchain traceability, and AI forecasting — built for global supply chains." 
  />
  <meta 
    name="twitter:image" 
    content="https://greatodeal.com/public/images/supplychain.png" 
  />

  {/* JSON-LD Structured Data */}
  <script type="application/ld+json">
    {`
    {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "name": "Supply Chain & Logistics IT Services",
      "url": "https://greatodeal.com/focus-areas/logistics",
      "description": "Greatodeal builds intelligent supply chain software solutions including SCM visibility platforms, warehouse management systems, transportation management systems, blockchain traceability, IoT tracking, AI forecasting, and digital twin technology.",
      "image": "https://greatodeal.com/public/images/supplychain.png",
      "areaServed": [
        { "@type": "City", "name": "Lahore" },
        { "@type": "Country", "name": "Pakistan" },
        { "@type": "Country", "name": "Netherlands" },
        { "@type": "Country", "name": "United States" },
        "Worldwide"
      ],
      "publisher": {
        "@type": "Organization",
        "name": "Greatodeal",
        "url": "https://greatodeal.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://greatodeal.com/public/logo.png"
        },
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Shadman 2, Gulberg",
          "addressLocality": "Lahore",
          "addressRegion": "Punjab",
          "addressCountry": "Pakistan"
        }
      }
    }
    `}
  </script>
</Helmet>

      <motion.section
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#1C2526] to-[#2E7D7B]"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        viewport={{ once: true }}
      >
        <div className="absolute inset-0 opacity-50 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyRTdEREIiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMSIvPjwvZz48L2c+PC9zdmc+')]"></div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <motion.div className="text-center lg:text-left" variants={childVariants}>
              <h1 className="text-2xl md:text-4xl font-bold mb-6 leading-tight text-[#F5F6F5]">
                Supply Chain IT Services and Solutions
              </h1>
              <p className="text-lg max-w-xl text-[#ffffff] mb-8 max-w-3xl mx-auto lg:mx-0 text-left">
                {supplyChainData.description}
              </p>
              <div className="flex justify-center lg:justify-start gap-4">
                                                       
                  <Link to="/contact" className="bg-[#ffffff] text-[#000000] px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                    Get a Cost Estimate
                  </Link>
                </div>
            </motion.div>
            
            <motion.div className="relative flex justify-center lg:justify-end" variants={childVariants}>
              <div className="relative w-full max-w-md sm:max-w-lg lg:max-w-full h-[300px] sm:h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  
                  className="w-full h-full object-cover"
                  src="../public/images/supplychain.png"
                  poster="https://images.unsplash.com/photo-1558618047-3c8c76ca4d0e?w=600&h=600&fit=crop"
                />
                 
                <div className="absolute inset-0 bg-gradient-to-t from-[#1C2526]/50 via-transparent to-transparent"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Who We Serve */}
      <motion.section
        id="who-we-serve"
        className="py-20 bg-[#F5F9F9]"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px 0px -50px 0px" }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-[#141313]" variants={childVariants}>Who We Serve?</motion.h2>
          <motion.p className="text-base sm:text-lg text-[#1B211E] mb-8 max-w-3xl mx-auto text-left" variants={childVariants}>
            Greatodeal provides comprehensive IT solutions tailored to the diverse needs of supply chain stakeholders, enhancing visibility and efficiency across the value chain.
          </motion.p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {supplyChainData.whoWeServe.map((client, i) => (
              <motion.div
                key={i}
                variants={childVariants}
                whileHover="hover"
                className="bg-[#2E7D7B] p-4 rounded-lg border border-[#2E7D7B]/30 hover:border-[#2E7D7B] transition-all duration-300 text-center"
              >
                <span className="text-sm sm:text-base text-[#F5F6F5]">{client}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Solutions */}
      <motion.section
        id="solutions"
        className="py-20 bg-[#E1E1E1]"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px 0px -50px 0px" }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-[#141313]" variants={childVariants}>Our Supply Chain Software Solutions</motion.h2>
          <motion.p className="text-base sm:text-lg text-[#1B211E] mb-12 max-w-3xl mx-auto text-left" variants={childVariants}>
            Greatodeal develops intelligent software solutions to optimize supply chain operations, reduce costs, and improve resilience against disruptions.
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {supplyChainData.solutions.map((solution, i) => (
              <motion.div
                key={i}
                variants={childVariants}
                whileHover="hover"
                className="bg-[#2E7D7B] p-6 rounded-xl border border-[#2E7D7B]/30 hover:border-[#2E7D7B] transition-all duration-300 hover:shadow-lg hover:shadow-[#2E7D7B]/20"
              >
                <h3 className="text-lg font-semibold text-[#F5F6F5] mb-2">{solution.title}</h3>
                <p className="text-sm text-[#EEF4F1]">{solution.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Services */}
      <motion.section
        id="services"
        className="py-20 bg-[#F5F9F9]"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px 0px -50px 0px" }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-[#141313]" variants={childVariants}>Comprehensive Supply Chain Software Development Services</motion.h2>
          <motion.p className="text-base sm:text-lg text-[#1B211E] mb-12 max-w-3xl mx-auto text-left" variants={childVariants}>
            Greatodeal offers end-to-end software engineering services to help supply chain organizations innovate and achieve operational excellence.
          </motion.p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {supplyChainData.services.map((service, i) => (
              <motion.div
                key={i}
                variants={childVariants}
                whileHover="hover"
                className="bg-[#2E7D7B] p-4 rounded-lg border border-[#2E7D7B]/30 hover:border-[#2E7D7B] transition-all duration-300 flex items-center justify-center text-center"
              >
                <span className="text-sm sm:text-base text-[#F5F6F5]">{service}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Technologies */}
      <motion.section
        id="technologies"
        className="py-20 bg-[#E1E1E1]"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px 0px -50px 0px" }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-[#2E7D7B]" variants={childVariants}>Future-Forward Technologies in Supply Chain Software Development</motion.h2>
          <motion.p className="text-base sm:text-lg text-[#000000] mb-12 max-w-3xl mx-auto text-left" variants={childVariants}>
            Greatodeal harnesses emerging technologies to build intelligent, connected supply chains that adapt to changing market dynamics.
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {supplyChainData.technologies.map((tech, i) => (
              <motion.div
                key={i}
                variants={childVariants}
                whileHover="hover"
                className="bg-[#2E7D7B] p-6 rounded-xl border border-[#2E7D7B]/30 hover:border-[#2E7D7B] transition-all duration-300 hover:shadow-lg hover:shadow-[#2E7D7B]/20"
              >
                <h3 className="text-lg font-semibold text-[#F5F6F5] mb-2">{tech.title}</h3>
                <p className="text-sm text-[#B0B7B4]">{tech.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Why Choose Us */}
      <motion.section
        id="why-choose-us"
        className="py-20 bg-[#F5F9F9]"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px 0px -50px 0px" }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-[#141313]" variants={childVariants}>Why Choose Greatodeal for Supply Chain Solutions</motion.h2>
          <motion.p className="text-base sm:text-lg text-[#141313] mb-12 max-w-3xl mx-auto text-left" variants={childVariants}>
            At Greatodeal, we partner with supply chain leaders to deliver resilient IT solutions that drive efficiency, transparency, and competitive advantage.
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {supplyChainData.whyChooseUs.map((point, i) => (
              <motion.div
                key={i}
                variants={childVariants}
                whileHover="hover"
                className="bg-[#1C2526] p-6 rounded-xl border border-[#2E7D7B]/30 hover:border-[#2E7D7B] transition-all duration-300"
              >
                <div className="flex items-start mb-2">
                  <motion.div
                    className="mr-3 mt-1"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    {i === 0 && <Shield className="w-5 h-5 text-[#F5F9F9]" />}
                    {i === 1 && <Zap className="w-5 h-5 text-[#F5F9F9]" />}
                    {i === 2 && <Cloud className="w-5 h-5 text-[#F5F9F9]" />}
                    {i === 3 && <Shield className="w-5 h-5 text-[#F5F9F9]" />}
                    {i === 4 && <BarChart3 className="w-5 h-5 text-[#F5F9F9]" />}
                    {i === 5 && <Users className="w-5 h-5 text-[#F5F9F9]" />}
                  </motion.div>
                  <h3 className="text-lg font-semibold text-[#F5F9F9]">{point.title}</h3>
                </div>
                <p className="text-sm text-[#B0B7B4]">{point.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Security Measures */}
      <motion.section
        id="security-measures"
        className="py-20 bg-[#F5F9F9]"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px 0px -50px 0px" }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-[#141313]" variants={childVariants}>Our Security Measures to Protect Your Intellectual Property</motion.h2>
          <motion.p className="text-base sm:text-lg text-[#141313] mb-12 max-w-3xl mx-auto text-left" variants={childVariants}>
            At Greatodeal, we safeguard your supply chain intellectual property and sensitive data with enterprise-grade security protocols.
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {supplyChainData.securityMeasures.map((measure, i) => (
              <motion.div
                key={i}
                variants={childVariants}
                whileHover="hover"
                className="bg-[#2E7D7B] bg-opacity-30 p-6 rounded-xl border border-[#2E7D7B]/30"
              >
                <h3 className="text-lg font-semibold text-[#141313] mb-4">{measure.category}</h3>
                <ul className="space-y-2">
                  {measure.items.map((item, j) => (
                    <motion.li
                      key={j}
                      variants={childVariants}
                      className="flex items-start text-sm text-[#141313]"
                      transition={{ delay: j * 0.1 }}
                    >
                      <motion.div whileHover={{ scale: 1.2 }} transition={{ duration: 0.3 }}>
                        <CheckCircle className="w-4 h-4 text-[#141313] mr-2 mt-1 flex-shrink-0" />
                      </motion.div>
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* FAQ Section */}
      <motion.section
        id="faq"
        className="py-20 bg-[#F5F9F9]"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px 0px -50px 0px" }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 className="text-2xl sm:text-3xl font-bold mb-12 text-center text-[#141313]" variants={childVariants}>Frequently Asked Questions</motion.h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                variants={childVariants}
                transition={{ delay: index * 0.1 }}
                className="bg-[#2E7D7B] rounded-xl overflow-hidden border border-[#2E7D7B]/30 hover:shadow-lg hover:shadow-[#2E7D7B]/30 transition-all duration-300"
                whileHover={{ scale: 1.01 }}
              >
                <motion.button
                  onClick={() => setExpandedFAQ(expandedFAQ === index ? -1 : index)}
                  className="w-full text-left p-6 hover:bg-[#266966] transition-colors duration-300 flex justify-between items-center"
                  whileHover={{ backgroundColor: "#266966" }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="text-base sm:text-lg font-semibold text-[#F5F6F5]">{faq.question}</span>
                  <motion.div
                    animate={{ rotate: expandedFAQ === index ? 90 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronRight className="w-5 h-5 text-[#F5F6F5]" />
                  </motion.div>
                </motion.button>
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: expandedFAQ === index ? 1 : 0, height: expandedFAQ === index ? "auto" : 0 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="px-6 pb-6 text-[#EEF4F1] text-sm sm:text-base overflow-hidden"
                >
                  {faq.answer}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        className="py-20 bg-gradient-to-br from-[#1C2526] to-[#2E7D7B] text-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px 0px -50px 0px" }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 className="text-2xl sm:text-3xl font-bold mb-6 text-[#F5F6F5]" variants={childVariants}>
            Ready to Optimize Your Supply Chain with Technology?
          </motion.h2>
          <motion.p className="text-lg text-[#B0B7B4] mb-8" variants={childVariants}>
            Partner with Greatodeal for intelligent solutions that enhance visibility, reduce costs, and build supply chain resilience.
          </motion.p>
           <Link
              to="/contact"
              className="bg-[#2E7D7B] hover:bg-[#266966] text-[#F5F6F5] px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 inline-block"
            >
              Get in Touch
            </Link>
        </div>
      </motion.section>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');
        body { font-family: 'Poppins', sans-serif; }
        @keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slide-down { from { opacity: 0; transform: translateY(-20px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fade-in { animation: fade-in 0.8s ease-out forwards; }
        .animate-slide-down { animation: slide-down 0.3s ease-out forwards; }
      `}</style>
    </div>
  );
};

export default SupplyChainItservices;