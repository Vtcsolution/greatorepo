import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { ChevronRight, CheckCircle, Shield, Zap, Cloud, BarChart3, Users } from 'lucide-react';
import { Helmet } from "react-helmet-async";


const EducationItservices = () => {
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
  const educationData = {
    title: "Education IT Services and Solutions",
    description: "Greatodeal provides innovative and secure IT solutions for the education sector, empowering institutions to deliver exceptional learning experiences. Our expertise in learning management systems, virtual classrooms, student analytics, and edtech integration drives digital transformation, personalized learning, and administrative efficiency.",
    whoWeServe: [
      "K-12 schools and districts",
      "Universities and colleges",
      "EdTech companies",
      "Online learning platforms",
      "Vocational training institutes",
      "Corporate training programs",
      "Special education providers",
      "Higher education research centers"
    ],
    solutions: [
      {
        title: "Learning Management Systems (LMS)",
        description: "Comprehensive LMS platforms for course creation, content delivery, assessments, and progress tracking to enhance teaching and learning outcomes."
      },
      {
        title: "Student Information Systems (SIS)",
        description: "Integrated systems for managing student records, enrollment, grading, attendance, and communication between students, parents, and administrators."
      },
      {
        title: "Virtual Classroom Solutions",
        description: "Interactive virtual classroom tools with video conferencing, real-time collaboration, and immersive learning experiences for remote and hybrid education."
      },
      {
        title: "Assessment and Analytics Platforms",
        description: "Advanced tools for creating adaptive assessments, generating insights, and providing personalized learning recommendations based on student performance."
      },
      {
        title: "Campus Management Software",
        description: "End-to-end solutions for managing campus operations, including facility scheduling, resource allocation, and administrative workflows."
      },
      {
        title: "EdTech Integration Services",
        description: "Seamless integration of third-party educational tools, apps, and content platforms to create a unified learning ecosystem."
      }
    ],
    services: [
      "Digital Learning Platform Development",
      "Student Data Management Systems",
      "Virtual Reality (VR) Learning Experiences",
      "AI-Powered Personalized Learning",
      "Cloud Migration for Educational Institutions",
      "Mobile Learning App Development",
      "Learning Analytics and Reporting"
    ],
    technologies: [
      {
        title: "Artificial Intelligence (AI)",
        description: "AI-driven tools for personalized learning paths, adaptive assessments, and predictive analytics to improve student engagement and outcomes."
      },
      {
        title: "Cloud Computing",
        description: "Scalable cloud solutions on AWS, Azure, and Google Cloud for secure data storage, accessibility, and collaboration across educational environments."
      },
      {
        title: "Virtual Reality (VR) and Augmented Reality (AR)",
        description: "Immersive VR/AR experiences for interactive learning, virtual field trips, and skill-based simulations in science, history, and vocational training."
      },
      {
        title: "Big Data and Learning Analytics",
        description: "Processing educational data to provide actionable insights on student performance, engagement trends, and institutional effectiveness."
      },
      {
        title: "Mobile Learning Technologies",
        description: "Cross-platform mobile apps and responsive web solutions for anytime, anywhere learning access on smartphones and tablets."
      },
      {
        title: "Blockchain for Credentialing",
        description: "Secure blockchain platforms for issuing, verifying, and managing digital diplomas, certificates, and academic credentials."
      }
    ],
    whyChooseUs: [
      {
        title: "Our education technology expertise",
        description: "With deep knowledge of the education sector, we deliver solutions that address the unique challenges of teaching, learning, and administration."
      },
      {
        title: "Cutting-edge edtech innovations",
        description: "We integrate AI, VR/AR, and cloud technologies to create engaging, personalized, and accessible learning experiences."
      },
      {
        title: "Commitment to compliance and security",
        description: "Certified in ISO 27001 and compliant with FERPA and GDPR, we ensure the privacy and security of student data."
      },
      {
        title: "Student-centered solutions",
        description: "Our platforms prioritize user experience, accessibility, and inclusivity to support diverse learners and educators."
      },
      {
        title: "Data-driven educational insights",
        description: "We transform student data into actionable analytics to improve teaching effectiveness and institutional outcomes."
      },
      {
        title: "Flexible collaboration",
        description: "We offer adaptable engagement models, from custom development to SaaS solutions, to meet educational IT needs."
      }
    ],
    securityMeasures: [
      {
        category: "Personnel",
        items: [
          "We conduct thorough background checks on all employees.",
          "All employees sign non-disclosure agreements (NDAs) to protect sensitive educational data.",
          "We provide regular security awareness training to keep our team informed about the latest threats and best practices.",
          "We have dedicated security personnel who perform regular spot checks and monitor our systems for suspicious activity."
        ]
      },
      {
        category: "Processes and Standards",
        items: [
          "We are ISO 27001:2013 certified, ensuring robust information security management.",
          "We comply with FERPA, COPPA, and GDPR standards for student data privacy.",
          "We conduct annual risk assessments and maintain incident management procedures.",
          "We have a business continuity plan to ensure minimal disruption in educational operations.",
          "We implement regular audits to enhance our security practices."
        ]
      },
      {
        category: "Technology and Infrastructure",
        items: [
          "We maintain a highly available and secure network infrastructure to prevent downtime.",
          "We use centralized IT operation management to monitor and control educational systems effectively.",
          "We implement physical security measures to protect facilities and equipment.",
          "We support secure remote access solutions for hybrid learning environments."
        ]
      }
    ]
  };

  const faqs = [
    {
      question: "What IT services do you offer for educational institutions?",
      answer: "We provide learning management systems, student information systems, virtual classrooms, assessment platforms, campus management software, and edtech integration services tailored to education needs."
    },
    {
      question: "How do you ensure student data security?",
      answer: "We implement ISO 27001 and FERPA-compliant measures, including encryption, multi-factor authentication, and regular audits to protect sensitive student information."
    },
    {
      question: "Can you customize solutions for specific educational needs?",
      answer: "Yes, we offer bespoke and platform-based solutions designed to meet the unique requirements of K-12, higher education, and corporate training programs."
    },
    {
      question: "What types of educational organizations do you serve?",
      answer: "We serve K-12 schools, universities, edtech companies, online platforms, vocational institutes, corporate training programs, special education providers, and research centers."
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
  {/* Basic Meta Tags */}
  <title>Education IT Services & EdTech Solutions | Greatodeal Lahore Pakistan</title>
  <meta
    name="description"
    content="Greatodeal delivers innovative Education IT Services in Lahore Pakistan, including LMS development, virtual classrooms, SIS systems, AI learning tools, VR learning, campus management software, and complete EdTech solutions for schools, universities, and training institutes."
  />
  <link rel="canonical" href="https://greatodeal.com/focus-areas/education" />

  {/* Keywords */}
  <meta
    name="keywords"
    content="Education IT Services Lahore, EdTech Solutions Pakistan, LMS development Lahore, Student Information System Pakistan, Virtual Classroom Software, Educational Software Development Lahore, AI learning systems Pakistan, School management software Lahore, University software Pakistan, Greatodeal Education IT"
  />

  {/* Open Graph / Facebook / LinkedIn */}
  <meta property="og:title" content="Education IT Services & EdTech Solutions | Greatodeal Lahore Pakistan" />
  <meta
    property="og:description"
    content="Greatodeal provides LMS systems, SIS platforms, virtual classrooms, AI-powered learning tools, VR/AR education apps, and digital transformation solutions for schools, universities, and EdTech companies."
  />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://greatodeal.com/focus-areas/education" />
  <meta property="og:image" content="https://greatodeal.com/images/education.png" />
  <meta property="og:image:alt" content="Education IT Services & EdTech Solutions by Greatodeal" />

  {/* Twitter Card */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Education IT Services & EdTech Solutions | Greatodeal Lahore Pakistan" />
  <meta
    name="twitter:description"
    content="Top Education IT & EdTech Software Company in Lahore. LMS, SIS, AI learning platforms, VR learning, mobile learning, and complete education transformation solutions."
  />
  <meta name="twitter:image" content="https://greatodeal.com/images/education.png" />
  <meta name="twitter:image:alt" content="Education IT Solutions - Greatodeal" />

  {/* Structured Data (JSON-LD) */}
  <script type="application/ld+json">
    {`
      {
        "@context": "https://schema.org",
        "@type": "EducationalOrganization",
        "name": "Education IT Services & EdTech Solutions",
        "url": "https://greatodeal.com/focus-areas/education",
        "image": "https://greatodeal.com/images/education.png",
        "description": "Greatodeal provides innovative Education IT solutions including LMS development, SIS systems, virtual classrooms, campus management, AI-powered learning, analytics platforms, and VR/AR training tools.",
        "provider": {
          "@type": "Organization",
          "name": "Greatodeal",
          "url": "https://greatodeal.com",
          "logo": "https://greatodeal.com/images/education.png",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Shadman 2, Gulberg",
            "addressLocality": "Lahore",
            "addressCountry": "Pakistan"
          }
        },
        "areaServed": ["Pakistan", "Lahore", "Netherlands", "UAE", "USA", "UK"],
        "serviceType": [
          "LMS Development",
          "Student Information Systems",
          "Virtual Classroom Development",
          "Campus Management Software",
          "AI-powered Learning Platforms",
          "EdTech Software Development",
          "Mobile Learning Apps",
          "VR/AR Learning Solutions"
        ]
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
        <div className="absolute inset-0 opacity-50 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyRTdEREIiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMSIvPjwvZz48L2c+PC9zdmc+')]"></div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left: Text */}
            <motion.div
              className="text-center lg:text-left"
              variants={sectionVariants}
            >
              <h1 className="text-2xl md:text-4xl font-bold mb-6 leading-tight text-[#F5F6F5]">
                Education IT Services and Solutions
              </h1>
              <p className="text-lg max-w-xl text-[#ffffff] mb-8 text-[#B0B7B4] mb-8 max-w-3xl mx-auto lg:mx-0 text-left">
                {educationData.description}
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
                  src='/images/education.png'
                  poster="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&h=600&fit=crop"
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
          <p className="text-base sm:text-lg text-[#1B211E] mb-8 max-w-3xl mx-auto text-left">Greatodeal delivers tailored IT solutions to educational institutions and edtech providers, enhancing learning experiences and operational efficiency.</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {educationData.whoWeServe.map((client, i) => (
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
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-[#141313]">Our Education Software Solutions</h2>
          <p className="text-base sm:text-lg text-[#1B211E] mb-12 max-w-3xl mx-auto text-left">Greatodeal develops cutting-edge software solutions to transform education through personalized learning, efficient administration, and innovative edtech tools.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {educationData.solutions.map((solution, i) => (
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
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-[#141313]">Comprehensive Education Software Development Services</h2>
          <p className="text-base sm:text-lg text-[#1B211E] mb-12 max-w-3xl mx-auto text-left">Greatodeal offers a full suite of software engineering services to help educational institutions innovate, streamline operations, and enhance learning experiences.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {educationData.services.map((service, i) => (
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
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-[#2E7D7B]">Future-Forward Technologies in Education Software Development</h2>
          <p className="text-base sm:text-lg text-[#000000] mb-12 max-w-3xl mx-auto text-left">Greatodeal integrates cutting-edge technologies to deliver engaging, accessible, and data-driven educational solutions.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {educationData.technologies.map((tech, i) => (
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
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-[#141313]">Why Choose Greatodeal for Education Solutions</h2>
          <p className="text-base sm:text-lg text-[#141313] mb-12 max-w-3xl mx-auto text-left">At Greatodeal, we partner with educational institutions to deliver innovative IT solutions that transform teaching, learning, and administration.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {educationData.whyChooseUs.map((point, i) => (
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
          <p className="text-base sm:text-lg text-[#141313] mb-12 max-w-3xl mx-auto text-left">At Greatodeal, we prioritize the security of sensitive educational data with comprehensive measures tailored to comply with privacy regulations.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {educationData.securityMeasures.map((measure, i) => (
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
            Ready to Transform Education with Technology?
          </h2>
          <p className="text-lg text-[#B0B7B4] mb-8">Partner with Greatodeal to build innovative edtech solutions that enhance learning experiences and streamline educational operations.</p>
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

export default EducationItservices;
