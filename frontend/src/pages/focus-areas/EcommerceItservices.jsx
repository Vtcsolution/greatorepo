import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { ChevronRight, CheckCircle, Shield, Zap, Cloud, BarChart3, Users } from 'lucide-react';
import { Helmet } from "react-helmet-async";


const EcommerceItservices = () => {
  const [expandedFAQ, setExpandedFAQ] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const ecommerceData = {
    title: "E-commerce IT Services and Solutions",
    description: "Greatodeal delivers cutting-edge IT solutions for e-commerce businesses, enabling seamless online shopping experiences, secure transactions, and data-driven growth. Our expertise in scalable platforms, AI personalization, and omnichannel integration helps businesses boost conversions and customer loyalty.",
    whoWeServe: [
      "Online retailers",
      "E-commerce marketplaces",
      "B2B e-commerce platforms",
      "D2C (Direct-to-Consumer) brands",
      "Retail chains with online stores",
      "Payment service providers",
      "E-commerce logistics providers",
      "Subscription-based businesses"
    ],
    solutions: [
      {
        title: "E-commerce Platforms",
        description: "Custom and scalable storefronts with intuitive UI/UX, product catalogs, and seamless checkout for enhanced customer experiences."
      },
      {
        title: "Payment Gateway Integration",
        description: "Secure and reliable payment solutions supporting multiple methods, ensuring PCI DSS compliance and fraud protection."
      },
      {
        title: "Recommendation Engines",
        description: "AI-powered personalization tools to deliver tailored product suggestions, increasing engagement and conversion rates."
      },
      {
        title: "Customer Analytics Platforms",
        description: "Advanced analytics for tracking user behavior, purchase patterns, and campaign performance to drive data-driven decisions."
      },
      {
        title: "Omnichannel Integration",
        description: "Unified solutions for integrating online stores, mobile apps, and physical retail for a cohesive customer journey."
      },
      {
        title: "Inventory and Order Management",
        description: "Real-time systems for inventory tracking, order fulfillment, and logistics coordination to optimize operations."
      }
    ],
    services: [
      "E-commerce Website Development",
      "Mobile Commerce Apps",
      "AI-Powered Personalization",
      "Payment System Integration",
      "Cloud-Based E-commerce Solutions",
      "Customer Data Platform (CDP) Development",
      "E-commerce SEO and Marketing Tools"
    ],
    technologies: [
      {
        title: "Artificial Intelligence (AI)",
        description: "AI-driven tools for personalized recommendations, dynamic pricing, and customer behavior analytics to boost sales."
      },
      {
        title: "Cloud Computing",
        description: "Scalable cloud platforms (AWS, Azure, Google Cloud) for high-traffic e-commerce sites and seamless global operations."
      },
      {
        title: "Blockchain",
        description: "Secure blockchain solutions for transparent transactions, fraud prevention, and loyalty program management."
      },
      {
        title: "Big Data and Analytics",
        description: "Processing large-scale customer and sales data to uncover insights, optimize marketing, and improve inventory management."
      },
      {
        title: "Mobile Technologies",
        description: "Responsive mobile apps and PWAs (Progressive Web Apps) for seamless shopping experiences on any device."
      },
      {
        title: "API and Microservices",
        description: "Flexible APIs and microservices for integrating third-party tools, third-party payment systems, and logistics providers."
      }
    ],
    whyChooseUs: [
      {
        title: "Our e-commerce expertise",
        description: "With deep knowledge of online retail, we deliver solutions that enhance customer experiences and drive revenue growth."
      },
      {
        title: "Cutting-edge technologies",
        description: "We leverage AI, blockchain, and cloud solutions to create scalable, secure, and personalized e-commerce platforms."
      },
      {
        title: "Commitment to security and compliance",
        description: "Certified in ISO 27001 and compliant with PCI DSS and GDPR, we ensure secure transactions and data privacy."
      },
      {
        title: "Customer-centric solutions",
        description: "Our platforms prioritize seamless UX, fast load times, and personalized experiences to boost conversions."
      },
      {
        title: "Data-driven growth",
        description: "We provide actionable analytics to optimize marketing, inventory, and customer retention strategies."
      },
      {
        title: "Flexible engagement models",
        description: "We offer custom development, SaaS, and managed services to meet your e-commerce IT needs."
      }
    ],
    securityMeasures: [
      {
        category: "Personnel",
        items: [
          "We conduct thorough background checks on all employees.",
          "All employees sign non-disclosure agreements (NDAs) to protect sensitive e-commerce data.",
          "We provide regular security awareness training to keep our team informed about the latest threats and best practices.",
          "We have dedicated security personnel who perform regular spot checks and monitor systems for suspicious activity."
        ]
      },
      {
        category: "Processes and Standards",
        items: [
          "We are ISO 27001:2013 certified, ensuring robust information security management.",
          "We comply with PCI DSS and GDPR standards for secure transactions and customer data protection.",
          "We conduct annual risk assessments and maintain incident management procedures.",
          "We have a business continuity plan to ensure minimal disruption in e-commerce operations.",
          "We implement regular audits to enhance our security practices."
        ]
      },
      {
        category: "Technology and Infrastructure",
        items: [
          "We maintain a highly available and secure network infrastructure to prevent downtime.",
          "We use centralized IT operation management to monitor and control e-commerce systems effectively.",
          "We implement physical security measures to protect facilities and equipment.",
          "We support secure, high-performance cloud solutions for global e-commerce scalability."
        ]
      }
    ]
  };

  const faqs = [
    {
      question: "What IT services do you offer for e-commerce businesses?",
      answer: "We provide e-commerce platforms, payment gateway integration, recommendation engines, customer analytics, omnichannel solutions, and inventory management systems."
    },
    {
      question: "How do you ensure the security of e-commerce transactions?",
      answer: "We implement PCI DSS and GDPR-compliant measures, including encryption, multi-factor authentication, and blockchain for secure, transparent transactions."
    },
    {
      question: "Can you customize solutions for specific e-commerce needs?",
      answer: "Yes, we offer bespoke and platform-based solutions tailored to the unique requirements of online retailers, marketplaces, and D2C brands."
    },
    {
      question: "What types of e-commerce organizations do you serve?",
      answer: "We serve online retailers, marketplaces, B2B platforms, D2C brands, retail chains, payment providers, logistics providers, and subscription businesses."
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
  {/* Basic Meta Tags */}
  <title>E-commerce IT Services & Solutions in Lahore Pakistan | Greatodeal</title>
  <meta
    name="description"
    content="Greatodeal delivers enterprise-grade e-commerce IT solutions in Lahore, Pakistan — scalable online stores, AI personalization, payment gateway integration, omnichannel systems, and secure cloud-based e-commerce platforms."
  />
  <link rel="canonical" href="https://greatodeal.com/focus-areas/ecommerce" />

  {/* Primary Keywords */}
  <meta
    name="keywords"
    content="ecommerce IT services Pakistan, ecommerce software development Lahore, ecommerce solutions company Lahore, ecommerce development Pakistan, AI ecommerce solutions, payment gateway integration Pakistan, ecommerce platform developers Lahore"
  />

  {/* Open Graph / Facebook / LinkedIn */}
  <meta property="og:title" content="E-commerce IT Services & Solutions | Greatodeal" />
  <meta
    property="og:description"
    content="Greatodeal builds scalable e-commerce platforms — AI personalization, payment gateway integration, mobile commerce, cloud systems and omnichannel e-commerce solutions."
  />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://greatodeal.com/focus-areas/ecommerce" />
  <meta property="og:image" content="https://greatodeal.com/images/shopping.mp4" />
  <meta property="og:image:alt" content="E-commerce IT Services & Solutions by Greatodeal" />

  {/* Twitter Card */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="E-commerce IT Services & Solutions | Greatodeal" />
  <meta
    name="twitter:description"
    content="Greatodeal builds secure and scalable e-commerce software — storefronts, AI personalization, analytics, cloud commerce, payment systems and omnichannel platforms."
  />
  <meta name="twitter:image" content="https://greatodeal.com/images/shopping.mp4" />
  <meta name="twitter:image:alt" content="E-commerce Solutions by Greatodeal" />

  {/* Local SEO Targeting */}
  <meta name="geo.region" content="PK-PB" />
  <meta name="geo.placename" content="Lahore" />
  <meta name="geo.position" content="31.5204;74.3587" />
  <meta name="ICBM" content="31.5204, 74.3587" />

  {/* Structured Data (JSON-LD) */}
  <script type="application/ld+json">
    {`
      {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "E-commerce IT Services and Solutions",
        "url": "https://greatodeal.com/focus-areas/ecommerce",
        "image": "https://greatodeal.com/images/shopping.mp4",
        "description": "Greatodeal delivers cutting-edge e-commerce software solutions including storefront development, payment gateway integration, AI personalization, analytics, omnichannel systems, and cloud-based e-commerce platforms.",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Shadman 2, Gulberg",
          "addressLocality": "Lahore",
          "addressRegion": "Punjab",
          "addressCountry": "Pakistan"
        },
        "provider": {
          "@type": "Organization",
          "name": "Greatodeal",
          "url": "https://greatodeal.com",
          "logo": "https://greatodeal.com/images/shopping.mp4"
        },
        "areaServed": ["Pakistan", "Netherlands", "UAE", "Worldwide"],
        "serviceType": [
          "E-commerce Website Development",
          "Payment Gateway Integration",
          "AI-Powered Personalization",
          "Mobile Commerce Apps",
          "Cloud Commerce Solutions",
          "Omnichannel Integration"
        ]
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
                E-commerce IT Services and Solutions
              </h1>
              <p className="text-lg max-w-xl text-[#ffffff] text-[#B0B7B4] mb-8 max-w-3xl mx-auto lg:mx-0 text-left">
                {ecommerceData.description}
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
                  src='/images/shopping.mp4'
                  poster="https://images.unsplash.com/photo-1556742524-750f2bb6e36f?w=600&h=600&fit=crop"
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
            Greatodeal delivers tailored IT solutions to e-commerce businesses, enhancing online shopping experiences and operational efficiency.
          </motion.p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {ecommerceData.whoWeServe.map((client, i) => (
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
          <motion.h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-[#141313]" variants={childVariants}>Our E-commerce Software Solutions</motion.h2>
          <motion.p className="text-base sm:text-lg text-[#1B211E] mb-12 max-w-3xl mx-auto text-left" variants={childVariants}>
            Greatodeal develops scalable and secure software solutions to enhance e-commerce operations, customer engagement, and revenue growth.
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ecommerceData.solutions.map((solution, i) => (
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
          <motion.h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-[#141313]" variants={childVariants}>Comprehensive E-commerce Software Development Services</motion.h2>
          <motion.p className="text-base sm:text-lg text-[#1B211E] mb-12 max-w-3xl mx-auto text-left" variants={childVariants}>
            Greatodeal offers a full suite of software engineering services to help e-commerce businesses innovate and scale effectively.
          </motion.p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {ecommerceData.services.map((service, i) => (
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
          <motion.h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-[#2E7D7B]" variants={childVariants}>Future-Forward Technologies in E-commerce Software Development</motion.h2>
          <motion.p className="text-base sm:text-lg text-[#000000] mb-12 max-w-3xl mx-auto text-left" variants={childVariants}>
            Greatodeal leverages advanced technologies to deliver scalable, secure, and customer-centric e-commerce solutions.
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ecommerceData.technologies.map((tech, i) => (
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
          <motion.h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-[#141313]" variants={childVariants}>Why Choose Greatodeal for E-commerce Solutions</motion.h2>
          <motion.p className="text-base sm:text-lg text-[#141313] mb-12 max-w-3xl mx-auto text-left" variants={childVariants}>
            At Greatodeal, we partner with e-commerce businesses to deliver innovative IT solutions that drive growth, engagement, and customer satisfaction.
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ecommerceData.whyChooseUs.map((point, i) => (
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
            At Greatodeal, we safeguard your e-commerce data and intellectual property with enterprise-grade security protocols.
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ecommerceData.securityMeasures.map((measure, i) => (
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
            Ready to Grow Your Online Business with Technology?
          </motion.h2>
          <motion.p className="text-lg text-[#B0B7B4] mb-8" variants={childVariants}>
            Partner with Greatodeal for innovative solutions that enhance customer experiences, streamline operations, and drive e-commerce growth.
          </motion.p>
          <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-[#2E7D7B] to-[#4CAF50] hover:from-[#266966] hover:to-[#43A047] text-[#F5F6F5] px-4 sm:px-8 py-2 sm:py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg min-w-fit whitespace-normal text-center text-sm sm:text-base inline-block"
            >
              Get in Touch
            </Link>
          </motion.div>
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

export default EcommerceItservices;
