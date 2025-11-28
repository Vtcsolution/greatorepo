
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { ChevronRight, CheckCircle, Shield, Zap, Cloud, BarChart3, Users } from 'lucide-react';
import { Helmet } from "react-helmet-async";


const ConstructionItservices = () => {
  const [expandedFAQ, setExpandedFAQ] = useState(0);
const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const constructionData = {
    title: "Construction IT Services and Solutions",
    description: "Greatodeal provides innovative IT solutions for the construction industry, empowering firms to streamline project management, enhance collaboration, and ensure safety compliance. Our expertise in BIM, IoT, cloud platforms, and AI-driven analytics drives efficiency, reduces costs, and improves project outcomes.",
    whoWeServe: [
      "General contractors",
      "Architectural and engineering firms",
      "Real estate developers",
      "Construction management companies",
      "Infrastructure project owners",
      "Subcontractors and suppliers",
      "Civil engineering firms",
      "Commercial property developers"
    ],
    solutions: [
      {
        title: "Building Information Modeling (BIM) Platforms",
        description: "Advanced BIM solutions for 3D modeling, clash detection, and collaborative design to improve project accuracy and efficiency."
      },
      {
        title: "Project Management Systems",
        description: "Integrated platforms for scheduling, resource allocation, cost tracking, and progress monitoring to keep projects on time and budget."
      },
      {
        title: "IoT Site Monitoring",
        description: "IoT-enabled systems for real-time monitoring of equipment, worker safety, environmental conditions, and site security."
      },
      {
        title: "Construction Analytics and Reporting",
        description: "AI-powered analytics for project performance, risk assessment, and predictive insights to optimize decision-making."
      },
      {
        title: "Field Collaboration Tools",
        description: "Mobile and cloud-based tools for seamless communication, document sharing, and real-time updates among on-site and office teams."
      },
      {
        title: "Safety Compliance Solutions",
        description: "Automated tools to ensure compliance with OSHA, ISO 45001, and other safety regulations, including incident reporting and audits."
      }
    ],
    services: [
      "BIM Software Development",
      "Construction ERP Integration",
      "IoT and Sensor Integration",
      "Cloud-Based Project Collaboration",
      "AI-Driven Risk Management",
      "Mobile Apps for Field Operations",
      "Digital Twin for Construction Sites"
    ],
    technologies: [
      {
        title: "Building Information Modeling (BIM)",
        description: "BIM platforms for collaborative design, visualization, and lifecycle management of construction projects."
      },
      {
        title: "Internet of Things (IoT)",
        description: "IoT solutions for real-time monitoring of equipment health, worker safety, and site conditions to enhance efficiency."
      },
      {
        title: "Artificial Intelligence (AI)",
        description: "AI-driven tools for predictive analytics, risk assessment, cost estimation, and automated project scheduling."
      },
      {
        title: "Cloud Computing",
        description: "Scalable cloud platforms (AWS, Azure) for secure data storage, real-time collaboration, and project scalability."
      },
      {
        title: "Digital Twins",
        description: "Virtual replicas of construction sites for simulation, progress tracking, and scenario analysis to optimize project outcomes."
      },
      {
        title: "Mobile Technologies",
        description: "Cross-platform mobile apps for on-site data access, reporting, and collaboration to improve field productivity."
      }
    ],
    whyChooseUs: [
      {
        title: "Our construction industry expertise",
        description: "With deep knowledge of construction challenges, we deliver solutions tailored to project complexity and stakeholder needs."
      },
      {
        title: "Cutting-edge technologies",
        description: "We leverage BIM, IoT, AI, and digital twins to drive innovation, efficiency, and precision in construction projects."
      },
      {
        title: "Commitment to safety and compliance",
        description: "Certified in ISO 27001 and compliant with OSHA and ISO 45001, we ensure secure data and safe project environments."
      },
      {
        title: "End-to-end project optimization",
        description: "Our solutions streamline every phase of construction, from design to handover, reducing costs and delays."
      },
      {
        title: "Real-time insights and collaboration",
        description: "We provide tools for real-time project visibility and seamless collaboration across distributed teams."
      },
      {
        title: "Flexible engagement models",
        description: "We offer custom development, SaaS, and managed services to align with your construction IT goals."
      }
    ],
    securityMeasures: [
      {
        category: "Personnel",
        items: [
          "We conduct thorough background checks on all employees.",
          "All employees sign non-disclosure agreements (NDAs) to protect proprietary designs and project data.",
          "We provide regular security awareness training to keep our team informed about the latest threats and best practices.",
          "We have dedicated security personnel who perform regular spot checks and monitor our systems for suspicious activity."
        ]
      },
      {
        category: "Processes and Standards",
        items: [
          "We are ISO 27001:2013 certified, ensuring robust information security management.",
          "We comply with ISO 45001 and OSHA standards for construction safety and data protection.",
          "We conduct annual risk assessments and maintain incident management procedures.",
          "We have a business continuity plan to ensure minimal disruption in project operations.",
          "We implement regular audits to enhance our security practices."
        ]
      },
      {
        category: "Technology and Infrastructure",
        items: [
          "We maintain a highly available and secure network infrastructure to prevent downtime.",
          "We use centralized IT operation management to monitor and control construction systems effectively.",
          "We implement physical security measures to protect facilities and equipment.",
          "We support secure remote access solutions for distributed construction teams."
        ]
      }
    ]
  };

  const faqs = [
    {
      question: "What IT services do you offer for the construction industry?",
      answer: "We provide BIM platforms, project management systems, IoT site monitoring, construction analytics, field collaboration tools, and safety compliance solutions tailored to construction needs."
    },
    {
      question: "How do you ensure the security of construction project data?",
      answer: "We implement ISO 27001 and OSHA-compliant measures, including encryption, multi-factor authentication, and regular audits to protect sensitive project data."
    },
    {
      question: "Can you customize solutions for specific construction projects?",
      answer: "Yes, we offer bespoke and platform-based solutions tailored to the unique requirements of construction projects, from residential to infrastructure."
    },
    {
      question: "What types of construction organizations do you serve?",
      answer: "We serve general contractors, architects, engineers, developers, construction managers, subcontractors, suppliers, and civil engineering firms."
    }
  ];

  // Animation variants (optimized for smooth, non-sticking transitions)
 const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: isMobile ? 50 : 10,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
        staggerChildren: 0.1
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
  <title>Construction IT Services in Lahore Pakistan | BIM, IoT & Project Management Software | Greatodeal</title>

  {/* Meta Description */}
  <meta
    name="description"
    content="Greatodeal delivers advanced construction IT solutions including BIM platforms, IoT site monitoring, digital twins, project management systems, and AI-driven analytics. Serving Lahore, Pakistan and global construction firms."
  />

  {/* SEO Keywords */}
  <meta
    name="keywords"
    content="Construction IT Services Lahore, BIM Software Pakistan, Construction ERP, IoT Construction Monitoring, Digital Twin Construction, Project Management Software for Construction, Construction Technology Pakistan, Construction Analytics, Field Collaboration Tools"
  />

  {/* Canonical URL */}
  <link
    rel="canonical"
    href="https://greatodeal.com/focus-areas/construction"
  />

  {/* Open Graph */}
  <meta property="og:title" content="Construction IT Services & BIM Software | Greatodeal" />
  <meta
    property="og:description"
    content="End-to-end construction IT solutions: BIM, IoT monitoring, digital twins, ERP integration, risk analytics, and project collaboration platforms."
  />
  <meta property="og:type" content="website" />
  <meta
    property="og:url"
    content="https://greatodeal.com/focus-areas/construction"
  />
  <meta
    property="og:image"
    content="https://greatodeal.com/images/construction_site.jpg"
  />
  <meta
    property="og:video"
    content="https://greatodeal.com/images/construction_site.mp4"
  />
  <meta property="og:image:alt" content="Construction IT Solutions by Greatodeal" />

  {/* Twitter */}
  <meta name="twitter:card" content="player" />
  <meta 
    name="twitter:title" 
    content="Construction IT Services | BIM, IoT & Digital Twin Software | Greatodeal" 
  />
  <meta 
    name="twitter:description" 
    content="Innovative IT solutions for construction firms: BIM, IoT monitoring, project management, safety compliance, and analytics." 
  />
  <meta 
    name="twitter:image" 
    content="https://greatodeal.com/images/construction_site.jpg" 
  />
  <meta 
    name="twitter:player" 
    content="https://greatodeal.com/images/construction_site.mp4" 
  />

  {/* JSON-LD Structured Data */}
  <script type="application/ld+json">
    {`
    {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "name": "Construction IT Services",
      "url": "https://greatodeal.com/focus-areas/construction",
      "description": "Greatodeal provides BIM platforms, IoT site monitoring, construction analytics, digital twin solutions, mobile field apps, and cloud-based project management tools for the construction industry.",
      "image": "https://greatodeal.com/images/construction_site.jpg",
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
          "url": "https://greatodeal.com/logo.png"
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
                Construction IT Services and Solutions
              </h1>
              <p className="text-lg max-w-xl text-[#ffffff] mb-8 max-w-3xl mx-auto lg:mx-0 text-left">
                {constructionData.description}
              </p>
              <div className="flex justify-center lg:justify-start gap-4">
                                                                                  
                             <Link to="/contact" className="bg-[#ffffff] text-[#000000] px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                               Get a Cost Estimate
                             </Link>
                           </div>
            </motion.div>
            
            <motion.div className="relative flex justify-center lg:justify-end" variants={childVariants}>
              <div className="relative w-full max-w-md sm:max-w-lg lg:max-w-full h-[300px] sm:h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                  src='/images/construction_site.mp4'
                  poster="https://images.unsplash.com/photo-1503387762-592afbf1a3d7?w=600&h=600&fit=crop"
                >
                  Your browser does not support the video tag.
                </video>
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
            Greatodeal delivers tailored IT solutions to construction stakeholders, enhancing project efficiency, safety, and collaboration.
          </motion.p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {constructionData.whoWeServe.map((client, i) => (
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
          <motion.h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-[#141313]" variants={childVariants}>Our Construction Software Solutions</motion.h2>
          <motion.p className="text-base sm:text-lg text-[#1B211E] mb-12 max-w-3xl mx-auto text-left" variants={childVariants}>
            Greatodeal develops advanced software solutions to streamline construction projects, enhance collaboration, and ensure compliance.
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {constructionData.solutions.map((solution, i) => (
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
          <motion.h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-[#141313]" variants={childVariants}>Comprehensive Construction Software Development Services</motion.h2>
          <motion.p className="text-base sm:text-lg text-[#1B211E] mb-12 max-w-3xl mx-auto text-left" variants={childVariants}>
            Greatodeal offers a full suite of software engineering services to help construction firms innovate and optimize project delivery.
          </motion.p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {constructionData.services.map((service, i) => (
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
          <motion.h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-[#2E7D7B]" variants={childVariants}>Future-Forward Technologies in Construction Software Development</motion.h2>
          <motion.p className="text-base sm:text-lg text-[#000000] mb-12 max-w-3xl mx-auto text-left" variants={childVariants}>
            Greatodeal leverages advanced technologies to deliver innovative, efficient, and secure solutions for the construction industry.
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {constructionData.technologies.map((tech, i) => (
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
          <motion.h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-[#141313]" variants={childVariants}>Why Choose Greatodeal for Construction Solutions</motion.h2>
          <motion.p className="text-base sm:text-lg text-[#141313] mb-12 max-w-3xl mx-auto text-left" variants={childVariants}>
            At Greatodeal, we partner with construction firms to deliver innovative IT solutions that enhance project efficiency, safety, and collaboration.
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {constructionData.whyChooseUs.map((point, i) => (
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
            At Greatodeal, we safeguard your construction intellectual property and sensitive data with enterprise-grade security protocols.
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {constructionData.securityMeasures.map((measure, i) => (
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
            Ready to Build Smarter with Technology?
          </motion.h2>
          <motion.p className="text-lg text-[#B0B7B4] mb-8" variants={childVariants}>
            Partner with Greatodeal to deliver innovative IT solutions that streamline construction projects and enhance collaboration.
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

export default ConstructionItservices;
