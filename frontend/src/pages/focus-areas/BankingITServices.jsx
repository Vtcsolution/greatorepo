import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { ChevronRight, CheckCircle, Shield, Zap, Cloud, BarChart3, Users } from 'lucide-react';

const BankingITServices = () => {
  const [expandedFAQ, setExpandedFAQ] = useState(0);
  const [isVisible, setIsVisible] = useState({});

  const bankingData = {
    title: "Banking IT Services and Solutions",
    description: "Greatodeal provides secure and scalable banking IT solutions, helping banks enhance customer trust, streamline operations, and achieve digital transformation. We specialize in custom and platform-based software, seamless integration, and continuous support to drive innovation and operational excellence.",
    whoWeServe: [
      "Retail banks",
      "Commercial banks",
      "Investment banks",
      "Credit unions",
      "Private banks",
      "Exchange banks",
      "Central banks",
      "Virtual banks"
    ],
    solutions: [
      {
        title: "Core Banking Systems",
        description: "We develop robust and secure core banking systems that streamline your bank's primary functions, including account management, payments processing, loan management, and more. Our solutions are tailored to your specific needs and can be deployed on-premises or in the cloud."
      },
      {
        title: "Digital Banking Portals",
        description: "We create user-friendly online banking portals that empower your customers to manage their accounts, make transactions, and access financial services with ease. Our portals offer features like personal finance management tools, spending reports, and financial education resources."
      },
      {
        title: "Mobile Banking Apps",
        description: "We develop intuitive and secure mobile banking apps for iOS and Android that provide customers with convenient access to their accounts and banking services on the go. Our apps integrate seamlessly with your core banking systems and offer features like biometric authentication and wearable device integration."
      },
      {
        title: "Banking CRM",
        description: "We build custom or platform-based CRM solutions that help you attract and retain customers, identify cross-selling opportunities, and provide personalized service. Our CRM solutions can be integrated with loyalty management systems to automate rewards and engagement programs."
      },
      {
        title: "ATM Software",
        description: "We develop secure and engaging ATM software that allows you to remotely control your ATM network and provide customers with a seamless self-service experience. Our solutions offer location-based personalization and user-friendly interfaces."
      },
      {
        title: "Investment Management Solutions",
        description: "We build investment management tools that provide real-time market data, analytics, and forecasting capabilities to empower both corporate and individual investors."
      }
    ],
    services: [
      "Application Rationalization",
      "Core Banking Modernization",
      "Regulatory Compliance",
      "Back-Office Automation",
      "Risk and Valuation",
      "Customer Lifecycle Management (CLM)",
      "API Banking Connectivity"
    ],
    technologies: [
      {
        title: "Artificial Intelligence (AI)",
        description: "We develop AI-powered solutions to enhance various aspects of banking, including customer service, fraud detection, and risk management. This includes AI-driven chatbots, personalized financial advice, and intelligent automation of banking processes."
      },
      {
        title: "Open Banking APIs",
        description: "We leverage Open Banking APIs to enable secure data sharing and integration with third-party services, fostering innovation and creating new opportunities for customer-centric solutions."
      },
      {
        title: "Cloud Computing",
        description: "We utilize cloud platforms like AWS to build scalable and reliable banking solutions, ensuring high availability, cost-efficiency, and enhanced security for your data and applications."
      },
     
      {
        title: "Microservices Architecture",
        description: "We adopt a microservices architecture to build modular and scalable banking software, enabling faster development cycles, increased flexibility, and improved system resilience."
      },
      {
        title: "Robotic Process Automation (RPA)",
        description: "We integrate RPA into your banking workflows to automate repetitive tasks, such as data entry and report generation, improving efficiency and reducing operational costs."
      }
    ],
    whyChooseUs: [
      {
        title: "Our industry expertise",
        description: "With years of experience, we focus on creating tailored IT solutions for banks. Whether it's upgrading core banking systems or guiding digital transformation, we understand the challenges financial institutions face."
      },
      {
        title: "Cutting-edge technologies",
        description: "We carefully implement technologies like AI, Blockchain, and data analytics to help streamline operations and enhance customer experience. Our goal is to provide solutions that are not only advanced but also practical for your needs."
      },
      {
        title: "Commitment to compliance and security",
        description: "Certified for ISO 27001, ISO 9001, we emphasize protecting your banking systems while ensuring full regulatory compliance."
      },
      {
        title: "Fraud prevention and risk mitigation",
        description: "Our advanced fraud detection tools use AI to identify threats in real-time, protect sensitive transactions, and minimize risks. We help you safeguard your institution and maintain the trust of your customers."
      },
      {
        title: "Insights through banking analytics",
        description: "Our data analytics solutions turn raw data into valuable insights, helping your bank understand customer behavior, optimize marketing strategies, and manage risks effectively."
      },
      {
        title: "Flexible collaboration",
        description: "We adapt to your specific needs with project-based engagements, dedicated teams, or managed services, making it easy to work together effectively."
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
      question: "What banking services do you offer?",
      answer: "We provide core banking systems, digital portals, mobile apps, CRM, ATM software, and investment management solutions tailored to banking needs."
    },
    {
      question: "How do you ensure security?",
      answer: "We implement ISO 27001-certified security measures, including encryption, multi-factor authentication, and regular audits."
    },
    {
      question: "Can you customize solutions?",
      answer: "Yes, we offer custom and platform-based solutions tailored to your specific banking requirements."
    },
    {
      question: "What types of banks do you serve?",
      answer: "We serve retail banks, commercial banks, investment banks, credit unions, private banks, exchange banks, central banks, and virtual banks."
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

  return (
    <div className="min-h-screen bg-[#1C2526] text-[#F5F6F5] overflow-x-hidden font-sans"> {/* New dark teal theme */}
      {/* Hero Section with Video */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#1C2526] to-[#2E7D7B]">
        <div className="absolute inset-0 opacity-50 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyRTdENEIiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMSIvPjwvZz48L2c+PC9zdmc+')]"></div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left: Text */}
            <div className="text-center lg:text-left">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight text-[#F5F6F5]">
                Banking IT Services and Solutions
              </h1>
              <p className="text-lg sm:text-xl text-[#B0B7B4] mb-8 max-w-3xl mx-auto lg:mx-0">
                {bankingData.description}
              </p>
              <div className="flex justify-center lg:justify-start gap-4">
                <Link to="/contact" className="bg-[#2E7D7B] hover:bg-[#266966] text-[#F5F6F5] px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                  Request a Demo
                </Link>
                <Link to="/contact" className="bg-[#1C2526] hover:bg-[#151A1B] text-[#F5F6F5] px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                  Get a Cost Estimate
                </Link>
              </div>
            </div>
            
            {/* Right: Video */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md sm:max-w-lg lg:max-w-full h-[300px] sm:h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                  src="https://videos.pexels.com/video-files/3199039/3199039-hd_1920_1080_30fps.mp4"
                  poster="https://images.unsplash.com/photo-1570549717489-465d94495d1c?w=600&h=600&fit=crop"
                >
                  Your browser does not support the video tag.
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-[#1C2526]/50 via-transparent to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section id="who-we-serve" className="py-20 bg-[#2E7D7B]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-[#F5F6F5]">Who We Serve?</h2>
          <p className="text-base sm:text-lg text-[#B0B7B4] mb-8 max-w-3xl mx-auto text-center">Greatodeal develops secure and innovative banking software solutions tailored to the specific needs of various financial institutions. We serve a wide range of clients in the banking sector, including:</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {bankingData.whoWeServe.map((client, i) => (
              <div key={i} className="bg-[#1C2526] p-4 rounded-lg border border-[#2E7D7B]/30 hover:border-[#2E7D7B] transition-all duration-300 text-center">
                <span className="text-sm sm:text-base text-[#F5F6F5]">{client}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section id="solutions" className="py-20 bg-[#1C2526]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-[#F5F6F5]">Our Banking Software Solutions</h2>
          <p className="text-base sm:text-lg text-[#B0B7B4] mb-12 max-w-3xl mx-auto text-center">Greatodeal develops cutting-edge banking software solutions that address the evolving needs of modern financial institutions. We combine deep industry knowledge with technical expertise to deliver innovative solutions that enhance customer experiences, streamline operations, and drive growth.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {bankingData.solutions.map((solution, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-[#2E7D7B] p-6 rounded-xl border border-[#2E7D7B]/30 hover:border-[#2E7D7B] transition-all duration-300 hover:shadow-lg hover:shadow-[#2E7D7B]/20"
              >
                <h3 className="text-lg font-semibold text-[#F5F6F5] mb-2">{solution.title}</h3>
                <p className="text-sm text-[#B0B7B4]">{solution.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 bg-[#2E7D7B]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-[#F5F6F5]">Comprehensive Banking Software Development Services</h2>
          <p className="text-base sm:text-lg text-[#B0B7B4] mb-12 max-w-3xl mx-auto text-center">Greatodeal offers a full range of software engineering services to help banks and financial institutions innovate, optimize their operations, and enhance the customer experience.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {bankingData.services.map((service, i) => (
              <div key={i} className="bg-[#1C2526] p-4 rounded-lg border border-[#2E7D7B]/30 hover:border-[#2E7D7B] transition-all duration-300 flex items-center justify-center text-center">
                <span className="text-sm sm:text-base text-[#F5F6F5]">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section id="technologies" className="py-20 bg-[#1C2526]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-[#F5F6F5]">Future-Forward Technologies in Banking Software Development</h2>
          <p className="text-base sm:text-lg text-[#B0B7B4] mb-12 max-w-3xl mx-auto text-center">Greatodeal stays at the forefront of technological advancements, integrating cutting-edge solutions into our banking software development services to help you stay ahead of the curve and meet the evolving needs of the financial industry.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {bankingData.technologies.map((tech, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-[#2E7D7B] p-6 rounded-xl border border-[#2E7D7B]/30 hover:border-[#2E7D7B] transition-all duration-300 hover:shadow-lg hover:shadow-[#2E7D7B]/20"
              >
                <h3 className="text-lg font-semibold text-[#F5F6F5] mb-2">{tech.title}</h3>
                <p className="text-sm text-[#B0B7B4]">{tech.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="why-choose-us" className="py-20 bg-[#2E7D7B]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-[#F5F6F5]">Why Choose Greatodeal for Banking Solutions</h2>
          <p className="text-base sm:text-lg text-[#B0B7B4] mb-12 max-w-3xl mx-auto text-center">At Greatodeal, we aim to be a supportive partner in your growth journey, offering practical and secure banking IT solutions tailored to your goals.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {bankingData.whyChooseUs.map((point, i) => (
              <div key={i} className="bg-[#1C2526] p-6 rounded-xl border border-[#2E7D7B]/30 hover:border-[#2E7D7B] transition-all duration-300">
                <div className="flex items-start mb-2">
                  <div className="mr-3 mt-1">
                    {i === 0 && <Shield className="w-5 h-5 text-[#2E7D7B]" />}
                    {i === 1 && <Zap className="w-5 h-5 text-[#2E7D7B]" />}
                    {i === 2 && <Cloud className="w-5 h-5 text-[#2E7D7B]" />}
                    {i === 3 && <Shield className="w-5 h-5 text-[#2E7D7B]" />}
                    {i === 4 && <BarChart3 className="w-5 h-5 text-[#2E7D7B]" />}
                    {i === 5 && <Users className="w-5 h-5 text-[#2E7D7B]" />}
                  </div>
                  <h3 className="text-lg font-semibold text-[#F5F6F5]">{point.title}</h3>
                </div>
                <p className="text-sm text-[#B0B7B4]">{point.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Measures */}
      <section id="security-measures" className="py-20 bg-[#1C2526]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-[#F5F6F5]">Our Security Measures to Protect Your Intellectual Property</h2>
          <p className="text-base sm:text-lg text-[#B0B7B4] mb-12 max-w-3xl mx-auto text-center">At Greatodeal, we understand the critical importance of protecting your intellectual property (IP) and sensitive data. We have implemented comprehensive security measures throughout our operations to ensure the confidentiality, integrity, and availability of your information.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {bankingData.securityMeasures.map((measure, i) => (
              <div key={i} className="bg-[#2E7D7B] p-6 rounded-xl border border-[#2E7D7B]/30">
                <h3 className="text-lg font-semibold text-[#F5F6F5] mb-4">{measure.category}</h3>
                <ul className="space-y-2">
                  {measure.items.map((item, j) => (
                    <li key={j} className="flex items-start text-sm text-[#B0B7B4]">
                      <CheckCircle className="w-4 h-4 text-[#2E7D7B] mr-2 mt-1 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section id="certifications" className="py-20 bg-[#2E7D7B]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-[#F5F6F5]">Certifications</h2>
          <div className="flex flex-wrap justify-center gap-6">
            <span className="bg-[#1C2526] text-sm px-4 py-2 rounded-full border border-[#2E7D7B]/30">ISO 27001:2013</span>
            <span className="bg-[#1C2526] text-sm px-4 py-2 rounded-full border border-[#2E7D7B]/30">ISO 9001</span>
            <span className="bg-[#1C2526] text-sm px-4 py-2 rounded-full border border-[#2E7D7B]/30">SOC 2</span>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-[#1C2526]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-12 text-center text-[#F5F6F5]">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`bg-[#2E7D7B] rounded-xl overflow-hidden border border-[#2E7D7B]/30 ${
                  isVisible.faq ? 'animate-fade-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <button
                  onClick={() => setExpandedFAQ(expandedFAQ === index ? -1 : index)}
                  className="w-full text-left p-6 hover:bg-[#266966] transition-colors duration-300 flex justify-between items-center"
                >
                  <span className="text-base sm:text-lg font-semibold text-[#F5F6F5]">{faq.question}</span>
                  <ChevronRight
                    className={`w-5 h-5 text-[#2E7D7B] transform transition-transform duration-300 ${
                      expandedFAQ === index ? 'rotate-90' : ''
                    }`}
                  />
                </button>
                {expandedFAQ === index && (
                  <div className="px-6 pb-6 text-[#B0B7B4] text-sm sm:text-base animate-slide-down">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#1C2526] to-[#2E7D7B] text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-[#F5F6F5]">
            Ready to Transform Your Bank with Technology?
          </h2>
          <p className="text-lg text-[#B0B7B4] mb-8">Don't get left behind in the digital age. Partner with Greatodeal to build innovative banking solutions that enhance the customer experience, streamline operations, and drive growth.</p>
          <Link to="/contact" className="bg-[#2E7D7B] hover:bg-[#266966] text-[#F5F6F5] px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 inline-block">
            Get in Touch
          </Link>
        </div>
      </section>

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

export default BankingITServices;