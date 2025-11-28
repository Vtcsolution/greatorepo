import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { ChevronRight, CheckCircle, Shield, Zap, Cloud, BarChart3, Users } from 'lucide-react';
import { Helmet } from "react-helmet-async";


const OilGasItservices = () => {
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
  const oilGasData = {
    title: "Oil & Gas IT Services and Solutions",
    description: "Greatodeal delivers innovative and secure IT solutions for the oil and gas industry, optimizing exploration, production, and distribution processes. We specialize in digital transformation, data analytics, IoT integration reduce costs, and ensure regulatory compliance.",
    whoWeServe: [
      "Upstream exploration companies",
      "Midstream transportation and storage operators",
      "Downstream refining and marketing firms",
      "Offshore drilling operators",
      "Oilfield service providers",
      "Natural gas producers",
      "Energy trading companies",
      "Renewable energy integrators in oil & gas"
    ],
    solutions: [
      {
        title: "Reservoir Management Systems",
        description: "We develop advanced systems for reservoir simulation, data analysis, and resource optimization, helping you maximize recovery rates and minimize risks in exploration and production."
      },
      {
        title: "Drilling Optimization Software",
        description: "Our software solutions use real-time data and AI to optimize drilling operations, reduce downtime, and improve safety and efficiency on rigs and platforms."
      },
      {
        title: "Pipeline Monitoring and Integrity",
        description: "We create monitoring systems with IoT sensors and predictive analytics to detect leaks, ensure integrity, and manage pipeline networks effectively."
      },
      {
        title: "Supply Chain Management Platforms",
        description: "Custom platforms for end-to-end supply chain visibility, inventory management, and logistics optimization in the oil and gas value chain."
      },
      {
        title: "HSE Compliance Tools",
        description: "Health, Safety, and Environment software that automates compliance tracking, incident reporting, and risk assessments to meet industry standards."
      },
      {
        title: "Asset Management Solutions",
        description: "Integrated tools for asset tracking, maintenance scheduling, and performance analytics to extend equipment life and reduce operational costs."
      }
    ],
    services: [
      "Digital Oilfield Implementation",
      "IoT and Sensor Integration",
      "Big Data Analytics for Exploration",
      "Cloud Migration and Management",
      "Predictive Maintenance Solutions",
      "API Integration for Energy Ecosystems"
    ],
    technologies: [
      {
        title: "Artificial Intelligence (AI)",
        description: "We leverage AI for predictive maintenance, seismic data interpretation, and operational optimization in oil and gas processes."
      },
      {
        title: "Internet of Things (IoT)",
        description: "IoT solutions for real-time monitoring of equipment, pipelines, and rigs, enabling data-driven decision-making and remote operations."
      },
      {
        title: "Big Data and Analytics",
        description: "Handling vast datasets from exploration and production to provide actionable insights and improve resource management."
      },
      {
        title: "Blockchain",
        description: "Secure and transparent blockchain applications for supply chain tracking, contract management, and emissions reporting."
      },
      {
        title: "Cloud Computing",
        description: "Scalable cloud solutions on platforms like AWS and Azure for data storage, processing, and collaboration in remote oil & gas environments."
      },
      {
        title: "Augmented Reality (AR) and Virtual Reality (VR)",
        description: "AR/VR tools for training, maintenance simulations, and virtual site inspections to enhance safety and efficiency."
      }
    ],
    whyChooseUs: [
      {
        title: "Our industry expertise",
        description: "With extensive experience in the energy sector, we deliver tailored IT solutions that address the unique challenges of oil and gas operations."
      },
      {
        title: "Cutting-edge technologies",
        description: "We integrate AI, IoT, and blockchain to drive efficiency, sustainability, and innovation in your oil and gas projects."
      },
      
      {
        title: "Risk management and sustainability",
        description: "Our solutions incorporate advanced risk assessment tools and support for ESG reporting to minimize environmental impact and operational risks."
      },
      {
        title: "Insights through energy analytics",
        description: "Transform raw data into strategic insights for better decision-making, cost reduction, and improved asset performance."
      },
      {
        title: "Flexible collaboration",
        description: "We offer adaptable engagement models, from project-based to managed services, to fit your oil and gas IT needs."
      }
    ],
    securityMeasures: [
      {
        category: "Personnel",
        items: [
          "We conduct thorough background checks on all employees.",
          "All employees sign non-disclosure agreements (NDAs) to protect your confidential information.",
          "We provide regular security awareness training to keep our team informed about the latest threats and best practices.",
          "We have dedicated security personnel who perform regular spot checks and monitor our systems for any suspicious activity."
        ]
      },
      {
        category: "Processes and Standards",
        items: [
          "We are ISO 27001:2013 certified, demonstrating our commitment to information security management.",
          "We comply with SOC 2 standards for security, availability, processing integrity, confidentiality, and privacy.",
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
      question: "What IT services do you offer for the oil and gas industry?",
      answer: "We provide reservoir management systems, drilling optimization software, pipeline monitoring, supply chain platforms, HSE tools, and asset management solutions tailored to oil and gas needs."
    },
    {
      question: "How do you ensure security in energy systems?",
      answer: "We implement ISO 27001-certified measures, including encryption, multi-factor authentication, OT/IT convergence security, and regular audits to protect critical infrastructure."
    },
    {
      question: "Can you customize solutions for our operations?",
      answer: "Yes, we offer custom and platform-based solutions designed to meet your specific oil and gas requirements, from upstream to downstream."
    },
    {
      question: "What types of oil and gas companies do you serve?",
      answer: "We serve upstream exploration, midstream operators, downstream refineries, offshore drillers, oilfield services, natural gas producers, energy traders, and renewable integrators."
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
  <title>Oil & Gas Software Development | Energy Digital Solutions | Greatodeal</title>

  <meta
    name="description"
    content="Greatodeal delivers advanced Oil & Gas software development, energy automation systems, AI dashboards, ERP solutions, and field service platforms for upstream, midstream, and downstream companies worldwide."
  />

  <meta
    name="keywords"
    content="Oil & Gas Software Development Pakistan, Energy Software House Lahore, Oilfield Software Solutions, Petroleum ERP Systems, Oil & Gas Automation, Energy AI Solutions, Midstream Software, Upstream Digital Solutions, Energy SaaS Pakistan, Oilfield Analytics"
  />

  {/* Canonical */}
  <link
    rel="canonical"
    href="https://greatodeal.com/focus-areas/oil-gas"
  />

  {/* Open Graph */}
  <meta property="og:title" content="Oil & Gas Software Development | Greatodeal" />
  <meta
    property="og:description"
    content="Custom Oil & Gas digital solutions including AI dashboards, automation, ERP, pipeline monitoring systems, and production intelligence platforms."
  />
  <meta
    property="og:image"
    content="https://greatodeal.com/public/images/Oilgas.png"
  />
  <meta property="og:url" content="https://greatodeal.com/focus-areas/oil-gas" />
  <meta property="og:type" content="website" />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta
    name="twitter:title"
    content="Oil & Gas Digital Solutions | Greatodeal"
  />
  <meta
    name="twitter:description"
    content="AI-powered digital transformation & software systems for Oil & Gas companies worldwide."
  />
  <meta
    name="twitter:image"
    content="https://greatodeal.com/public/images/Oilgas.png"
  />

  {/* JSON-LD Structured Data */}
  <script type="application/ld+json">
    {`
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Oil & Gas Software Development | Greatodeal",
      "url": "https://greatodeal.com/focus-areas/oil-gas",
      "description": "Greatodeal builds digital systems, AI dashboards, ERP solutions, and energy automation platforms for Oil & Gas companies worldwide.",
      "publisher": {
        "@type": "Organization",
        "name": "Greatodeal",
        "url": "https://greatodeal.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://greatodeal.com/public/logo.png"
        }
      },
      "image": "https://greatodeal.com/public/images/Oilgas.png"
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
            {/* Left: Text */}
            <motion.div
              className="text-center lg:text-left"
              variants={sectionVariants}
            >
              <h1 className="text-2xl md:text-4xl font-bold mb-6 leading-tight text-[#F5F6F5]">
                Oil & Gas IT Services and Solutions
              </h1>
              <p className="text-lg max-w-xl text-[#ffffff] text-[#B0B7B4] mb-8 max-w-3xl mx-auto lg:mx-0 text-left">
                {oilGasData.description}
              </p>
              <div className="flex justify-center lg:justify-start gap-4">
                                                                    
                             <Link to="/contact" className="bg-[#ffffff] text-[#000000] px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                               Get a Cost Estimate
                             </Link>
                           </div>
            </motion.div>
            
            {/* Right: Video */}
            <motion.div
              className="relative flex justify-center lg:justify-end"
              variants={sectionVariants}
            >
              <div className="relative w-full max-w-md sm:max-w-lg lg:max-w-full h-[300px] sm:h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                 <img
                  className="w-full h-full object-cover"
                  src='../public/images/Oilgas.png'
                  poster="https://images.unsplash.com/photo-1546629796-8c484bb096e9?w=600&h=600&fit=crop"
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
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-[#141313]">Who We Serve?</h2>
          <p className="text-base sm:text-lg text-[#1B211E] mb-8 max-w-3xl mx-auto text-left">Greatodeal develops secure and innovative IT solutions tailored to the specific needs of various entities in the oil and gas sector. We serve a wide range of clients, including:</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {oilGasData.whoWeServe.map((client, i) => (
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
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-[#141313]">Our Oil & Gas Software Solutions</h2>
          <p className="text-base sm:text-lg text-[#1B211E] mb-12 max-w-3xl mx-auto text-left">Greatodeal develops cutting-edge software solutions that address the evolving needs of the oil and gas industry. We combine deep domain knowledge with technical expertise to deliver innovative tools that enhance efficiency, safety, and sustainability.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {oilGasData.solutions.map((solution, i) => (
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
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-[#141313]">Comprehensive Oil & Gas Software Development Services</h2>
          <p className="text-base sm:text-lg text-[#1B211E] mb-12 max-w-3xl mx-auto text-left">Greatodeal offers a full suite of software engineering services to help oil and gas companies innovate, optimize operations, and achieve sustainable growth.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {oilGasData.services.map((service, i) => (
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
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-[#2E7D7B]">Future-Forward Technologies in Oil & Gas Software Development</h2>
          <p className="text-base sm:text-lg text-[#000000] mb-12 max-w-3xl mx-auto text-left">Greatodeal integrates the latest technologies into our oil and gas software services to help you navigate industry challenges and seize new opportunities.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {oilGasData.technologies.map((tech, i) => (
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
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-[#141313]">Why Choose Greatodeal for Oil & Gas Solutions</h2>
          <p className="text-base sm:text-lg text-[#141313] mb-12 max-w-3xl mx-auto text-left">At Greatodeal, we partner with you to deliver reliable IT solutions that drive efficiency and innovation in the energy sector.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {oilGasData.whyChooseUs.map((point, i) => (
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
          <p className="text-base sm:text-lg text-[#141313] mb-12 max-w-3xl mx-auto text-left">At Greatodeal, we prioritize the protection of your intellectual property and sensitive data in the oil and gas industry with robust security protocols.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {oilGasData.securityMeasures.map((measure, i) => (
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
            Ready to Optimize Your Oil & Gas Operations with Technology?
          </h2>
          <p className="text-lg text-[#B0B7B4] mb-8">Stay ahead in the energy sector. Partner with Greatodeal for IT solutions that boost efficiency, ensure safety, and drive sustainable growth.</p>
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

export default OilGasItservices;