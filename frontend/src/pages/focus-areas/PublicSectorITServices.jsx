import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { ChevronRight, CheckCircle, Shield, Zap, Cloud, BarChart3, Users } from 'lucide-react';
import { Helmet } from "react-helmet-async";

const PublicSectorItservices = () => {
  const [expandedFAQ, setExpandedFAQ] = useState(0);
  const [isVisible, setIsVisible] = useState({});
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const publicSectorData = {
    title: "Public Sector IT Services and Solutions",
    description: "Greatodeal delivers secure and innovative IT solutions for the public sector, enabling government agencies to enhance citizen services, streamline operations, and achieve digital transformation. Our expertise in cloud solutions, and data analytics ensures compliance, transparency, and efficiency.",
    whoWeServe: [
      "Federal government agencies",
      "State and local governments",
      "Public utilities",
      "Healthcare authorities",
      "Education institutions",
      "Defense and security agencies",
      "Public transportation authorities",
      "Municipal service providers"
    ],
    solutions: [
      {
        title: "Citizen Service Portals",
        description: "We develop user-friendly portals that enable citizens to access government services, submit applications, and engage with agencies seamlessly."
      },
      {
        title: "Smart City Solutions",
        description: "Our IoT and analytics-driven platforms optimize urban infrastructure, traffic management, and public safety for smarter, sustainable cities."
      },
      {
        title: "Data Management Systems",
        description: "Secure systems for managing sensitive government data, ensuring compliance with regulations and enabling data-driven decision-making."
      },
      {
        title: "E-Government Platforms",
        description: "Comprehensive platforms to digitize government processes, improve transparency, and enhance service delivery to citizens."
      },
     
      {
        title: "Case Management Systems",
        description: "Custom solutions for managing public sector cases, from social services to legal proceedings, with automated workflows and reporting."
      }
    ],
    services: [
      "Digital Transformation Consulting",
      "Cloud Infrastructure Management",
      "IoT for Smart Governance",
      "Data Analytics and Visualization",
      "Legacy System Modernization",
      "API Integration for Public Services"
    ],
    technologies: [
      {
        title: "Cloud Computing",
        description: "Scalable cloud solutions on platforms like AWS GovCloud and Azure Government for secure data storage and efficient operations."
      },
      {
        title: "Artificial Intelligence (AI)",
        description: "AI-powered tools for predictive analytics, citizen sentiment analysis, and automated public service processes."
      },
      {
        title: "Internet of Things (IoT)",
        description: "IoT solutions for real-time monitoring of public infrastructure, such as utilities, transportation, and smart city systems."
      },
      {
        title: "Big Data and Analytics",
        description: "Handling large datasets to provide insights for policy-making, resource allocation, and public service optimization."
      },
      {
        title: "Blockchain",
        description: "Secure blockchain applications for transparent public records, contract management, and fraud prevention."
      },
      {
        title: "Low-Code Development",
        description: "Rapid development of custom applications using low-code platforms to meet unique public sector needs."
      }
    ],
    whyChooseUs: [
      {
        title: "Our public sector expertise",
        description: "With extensive experience in government IT, we deliver solutions tailored to the unique challenges of public sector agencies."
      },
      {
        title: "Cutting-edge technologies",
        description: "We leverage AI, IoT, and blockchain to drive efficiency, transparency, and innovation in public services."
      },
      {
        title: "Commitment to compliance and security",
        description: "Certified in ISO 27001 and compliant with FISMA and FedRAMP, we ensure secure and compliant IT systems."
      },
      {
        title: "Citizen-centric solutions",
        description: "Our solutions prioritize user experience, making public services accessible, efficient, and transparent for citizens."
      },
      {
        title: "Data-driven governance",
        description: "We transform data into actionable insights to support evidence-based policy-making and resource management."
      },
      {
        title: "Flexible collaboration",
        description: "We offer adaptable engagement models, from project-based to managed services, to meet public sector IT needs."
      }
    ],
    securityMeasures: [
      {
        category: "Personnel",
        items: [
          "We conduct thorough background checks on all employees.",
          "All employees sign non-disclosure agreements (NDAs) to protect sensitive government data.",
          "We provide regular security awareness training to keep our team informed about the latest threats and best practices.",
          "We have dedicated security personnel who perform regular spot checks and monitor our systems for suspicious activity."
        ]
      },
      {
        category: "Processes and Standards",
        items: [
          "We are ISO 27001:2013 certified, ensuring robust information security management.",
          "We comply with FISMA and FedRAMP standards for federal IT systems.",
          "We conduct annual risk assessments and maintain incident management procedures.",
          "We have a business continuity plan to ensure minimal disruption in case of unexpected events.",
          "We implement regular audits to enhance our security practices."
        ]
      },
      {
        category: "Technology and Infrastructure",
        items: [
          "We maintain a highly available and secure network infrastructure to prevent downtime.",
          "We use centralized IT operation management to monitor and control systems effectively.",
          "We implement physical security measures to protect facilities and equipment.",
          "We support secure remote access solutions for hybrid government operations."
        ]
      }
    ]
  };

  const faqs = [
    {
      question: "What IT services do you offer for the public sector?",
      answer: "We provide citizen service portals, smart city solutions, data management systems, e-government platforms, and case management systems tailored to public sector needs."
    },
    {
      question: "How do you ensure security for government systems?",
      answer: "We implement ISO 27001 and FISMA-compliant measures, including encryption, multi-factor authentication, and regular audits to protect sensitive public sector data."
    },
    {
      question: "Can you customize solutions for specific government agencies?",
      answer: "Yes, we offer tailored and platform-based solutions designed to meet the unique requirements of government agencies at all levels."
    },
    {
      question: "What types of public sector organizations do you serve?",
      answer: "We serve federal and state governments, public utilities, healthcare authorities, education institutions, defense agencies, transportation authorities, and municipal service providers."
    }
  ];

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

  // Animation variants for smooth transitions
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: isMobile ? 30 : 10, transition: { duration: 0.8, ease: "easeInOut" } }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" }
    }),
    hover: { scale: 1.03, boxShadow: "0 10px 20px rgba(46, 125, 123, 0.3)" }
  };

  const buttonVariants = {
    hover: { scale: 1.05, boxShadow: "0 8px 16px rgba(46, 125, 123, 0.4)", transition: { duration: 0.3, ease: "easeOut" } },
    tap: { scale: 0.95 }
  };

  return (
    <div className="min-h-screen bg-[#1C2526] text-[#F5F6F5] overflow-x-hidden font-sans">
      {/* Hero Section with Video */}

      <Helmet>
  {/* Page Title */}
  <title>Public Sector IT Services in Lahore Pakistan | Government Software Solutions | Greatodeal</title>

  {/* Meta Description */}
  <meta
    name="description"
    content="Greatodeal provides secure and innovative public sector IT services in Lahore, Pakistan and worldwide. We build citizen portals, smart city systems, e-government platforms, data management systems, and AI-powered digital transformation solutions for federal, state, and local government agencies."
  />

  {/* SEO Keywords (Local + Global) */}
  <meta
    name="keywords"
    content="Public Sector IT Services Lahore, Government Software Pakistan, E-Government Solutions, Citizen Portal Development, Smart City Software Pakistan, Public Sector Software House Lahore, Government Automation Pakistan, GovTech Solutions, Government ERP Systems, AI for Public Sector, Public Utility Software Pakistan"
  />

  {/* Canonical URL */}
  <link
    rel="canonical"
    href="https://greatodeal.com/focus-areas/public-sector"
  />

  {/* Open Graph */}
  <meta property="og:title" content="Public Sector IT Solutions | Government Software Development | Greatodeal" />
  <meta
    property="og:description"
    content="Secure, scalable and innovative IT solutions for the public sector — including smart city platforms, citizen portals, government data systems, e-governance, and AI-powered analytics."
  />
  <meta
    property="og:type"
    content="website"
  />
  <meta
    property="og:url"
    content="https://greatodeal.com/focus-areas/public-sector"
  />
  <meta
    property="og:image"
    content="https://greatodeal.com/public/images/Technology_Construction.mp4"
  />
  <meta
    property="og:image:alt"
    content="Public Sector IT Solutions by Greatodeal"
  />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta
    name="twitter:title"
    content="Public Sector IT Services & Digital Transformation | Greatodeal"
  />
  <meta
    name="twitter:description"
    content="AI-powered public sector software development including smart city systems, citizen services, and e-government platforms."
  />
  <meta
    name="twitter:image"
    content="https://greatodeal.com/public/images/Technology_Construction.mp4"
  />

  {/* JSON-LD Structured Data */}
  <script type="application/ld+json">
    {`
    {
      "@context": "https://schema.org",
      "@type": "GovernmentService",
      "name": "Public Sector IT Services & Solutions",
      "url": "https://greatodeal.com/focus-areas/public-sector",
      "description": "Greatodeal delivers government-grade IT solutions including e-government platforms, smart city systems, data management, cloud, AI, and citizen service portals.",
      "areaServed": [
        { "@type": "City", "name": "Lahore" },
        { "@type": "Country", "name": "Pakistan" },
        { "@type": "Country", "name": "Netherlands" },
        { "@type": "Country", "name": "United States" },
        "Worldwide"
      ],
      "image": "https://greatodeal.com/public/images/Technology_Construction.mp4",
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
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
      >
        <div className="absolute inset-0 opacity-50 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyRTdENEIiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMSIvPjwvZz48L2c+PC9zdmc+')]"></div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-8 animate-fadeInUp">
            {/* Left: Text */}
            <motion.div
              className="text-center lg:text-left"
              variants={sectionVariants}
            >
              <h1 className="text-2xl md:text-4xl font-bold mb-6 leading-tight text-[#F5F6F5]">
                Public Sector IT Services and Solutions
              </h1>
              <p className="text-lg max-w-xl text-[#ffffff] mb-8 max-w-3xl mx-auto lg:mx-0 text-left">
                {publicSectorData.description}
              </p>
               <div className="flex justify-center lg:justify-start gap-4">
                                                       
                <Link to="/contact" className="bg-[#ffffff] text-[#000000] px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                  Get a Cost Estimate
                </Link>
              </div>
            </motion.div>
            </div>
            {/* Right: Video */}
            <motion.div
              className="relative flex justify-center lg:justify-end"
              variants={sectionVariants}
            >
              <div className="relative w-full max-w-md sm:max-w-lg lg:max-w-full h-[300px] sm:h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                  src='../public/images/Technology_Construction.mp4'
                  poster="https://images.unsplash.com/photo-1586771107445-d3ca5fb02e76?w=600&h=600&fit=crop"
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
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-[#141313]">Who We Serve?</h2>
          <p className="text-base sm:text-lg text-[#1B211E] mb-8 max-w-3xl mx-auto text-left">Greatodeal provides tailored IT solutions to meet the diverse needs of public sector organizations, enhancing service delivery and operational efficiency.</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {publicSectorData.whoWeServe.map((client, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                variants={cardVariants}
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
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-[#141313]">Our Public Sector Software Solutions</h2>
          <p className="text-base sm:text-lg text-[#1B211E] mb-12 max-w-3xl mx-auto text-left">Greatodeal develops innovative software solutions to address the evolving needs of the public sector, enhancing efficiency, security, and citizen engagement.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {publicSectorData.solutions.map((solution, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                variants={cardVariants}
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
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-[#141313]">Comprehensive Public Sector Software Development Services</h2>
          <p className="text-base sm:text-lg text-[#1B211E] mb-12 max-w-3xl mx-auto text-left">Greatodeal offers a full suite of software engineering services to help public sector organizations modernize and deliver citizen-focused solutions.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {publicSectorData.services.map((service, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                variants={cardVariants}
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
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-[#2E7D7B]">Future-Forward Technologies in Public Sector Software Development</h2>
          <p className="text-base sm:text-lg text-[#000000] mb-12 max-w-3xl mx-auto text-left">Greatodeal integrates advanced technologies to deliver secure, scalable solutions for public sector challenges.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {publicSectorData.technologies.map((tech, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                variants={cardVariants}
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
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-[#141313]">Why Choose Greatodeal for Public Sector Solutions</h2>
          <p className="text-base sm:text-lg text-[#141313] mb-12 max-w-3xl mx-auto text-left">At Greatodeal, we partner with public sector organizations to deliver secure, innovative IT solutions that enhance service delivery and governance.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {publicSectorData.whyChooseUs.map((point, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                variants={cardVariants}
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
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-[#141313]">Our Security Measures to Protect Your Intellectual Property</h2>
          <p className="text-base sm:text-lg text-[#141313] mb-12 max-w-3xl mx-auto text-left">At Greatodeal, we prioritize the security of sensitive public sector data with robust protocols tailored to government needs.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {publicSectorData.securityMeasures.map((measure, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                variants={cardVariants}
                className="bg-[#2E7D7B] bg-opacity-30 p-6 rounded-xl border border-[#2E7D7B]/30"
              >
                <h3 className="text-lg font-semibold text-[#141313] mb-4">{measure.category}</h3>
                <ul className="space-y-2">
                  {measure.items.map((item, j) => (
                    <motion.li
                      key={j}
                      custom={j}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: j * 0.1 }}
                      className="flex items-start text-sm text-[#141313]"
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
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-12 text-center text-[#141313]">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`bg-[#2E7D7B] rounded-xl overflow-hidden border border-[#2E7D7B]/30 hover:shadow-lg hover:shadow-[#2E7D7B]/30 transition-all duration-300 ${
                  isVisible.faq ? 'animate-fade-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <motion.button
                  onClick={() => setExpandedFAQ(expandedFAQ === index ? -1 : index)}
                  className="w-full text-left p-6 hover:bg-[#266966] transition-colors duration-300 flex justify-between items-center"
                  whileHover={{ backgroundColor: "#266966", scale: 1.01 }}
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
                {expandedFAQ === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="px-6 pb-6 text-[#EEF4F1] text-sm sm:text-base"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        className="py-20 bg-gradient-to-br from-[#1C2526] to-[#2E7D7B] text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-[#F5F6F5]">
            Ready to Transform Public Services with Technology?
          </h2>
          <p className="text-lg text-[#B0B7B4] mb-8">Partner with Greatodeal to build secure, innovative solutions that enhance citizen services and streamline government operations.</p>
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

        body {
          font-family: 'Poppins', sans-serif;
        }

        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slide-down {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }

        .animate-slide-down {
          animation: slide-down 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default PublicSectorItservices;