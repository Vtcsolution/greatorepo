import React, { useState } from 'react';
import { Facebook, Linkedin, Twitter, MessageCircle, ChevronDown, Instagram, MapPin, Phone, Mail } from 'lucide-react';
import logo from '../assets/images/logo.png';
import { Link } from 'react-router-dom';

const Footer = () => {
  const [openSections, setOpenSections] = useState({
    brand: false,
    company: false,
    services: false,
    contact: false,
  });

  const toggleSection = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const AnimatedLink = ({ children, href = "#" }) => (
    <a
      href={href}
      className="text-gray-400 hover:text-teal-400 transition-colors duration-300 relative group flex items-center gap-2"
    >
      {children}
      <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-teal-400 group-hover:w-full transition-all duration-300"></span>
    </a>
  );

  const SocialIcon = ({ icon: Icon, label, href = "#" }) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="text-gray-400 hover:text-teal-400 p-2 rounded-full transition-all duration-300 hover:bg-teal-900/20"
    >
      <Icon className="w-5 h-5" />
    </a>
  );

  const SectionToggle = ({ title, isOpen, onToggle }) => (
    <button
      onClick={onToggle}
      className="flex items-center justify-between w-full p-3 bg-gray-700 rounded-lg text-white transition-all duration-300 hover:bg-gray-600"
    >
      <span className="font-medium">{title}</span>
      <ChevronDown
        className={`w-5 h-5 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
      />
    </button>
  );

  // Contact Office Component
  const OfficeInfo = ({ title, address, phone, countryFlag }) => (
    <div className="space-y-2 border-b border-gray-700 pb-3 last:border-b-0 last:pb-0">
      <div className="flex items-center gap-2 text-teal-300 font-medium text-sm">
        <span className="w-1.5 h-1.5 bg-teal-400 rounded-full"></span>
        {title}
      </div>
      <div className="flex items-start gap-3 p-2 bg-gray-700/50 rounded-lg">
        <MapPin className="w-4 h-4 mt-0.5 text-gray-400 flex-shrink-0" />
        <div className="text-sm text-gray-300 min-w-0">
          <p className="font-medium">{address}</p>
          <div className="flex items-center gap-2 mt-1">
            <Phone className="w-3.5 h-3.5 text-gray-500" />
            <AnimatedLink href={`tel:${phone.replace(/\s/g, '')}`}>
              {phone}
            </AnimatedLink>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <footer className="bg-gray-800 text-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Mobile Dropdowns */}
        <div className="lg:hidden space-y-4">
          {/* Brand Section Toggle */}
          <div>
            <SectionToggle
              title="GreatDeals Software"
              isOpen={openSections.brand}
              onToggle={() => toggleSection('brand')}
            />
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                openSections.brand ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="pt-4 space-y-4">
                <img
                  src={logo}
                  alt="GreatDeals Software Logo"
                  className="h-10 w-auto max-w-[200px] object-contain"
                />
                <p className="text-gray-400 text-sm leading-relaxed">
                  Empowering businesses with innovative software solutions and digital transformation services.
                </p>
                <div className="flex space-x-4">
                  <SocialIcon 
                    icon={Facebook} 
                    label="Facebook" 
                    href="https://www.facebook.com/greatodealofficial" 
                  />
                  <SocialIcon 
                    icon={Linkedin} 
                    label="LinkedIn" 
                    href="https://www.linkedin.com/company/greatodeal" 
                  />
                  <SocialIcon 
                    icon={Instagram} 
                    label="Instagram" 
                    href="https://www.instagram.com/greatodeal" 
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Company Section Toggle */}
          <div>
            <SectionToggle
              title="Company"
              isOpen={openSections.company}
              onToggle={() => toggleSection('company')}
            />
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                openSections.company ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <ul className="pt-4 space-y-2">
                {['About Us', 'Contact', 'How we Work', 'Blogs'].map((item) => (
                  <li key={item}>
                    <AnimatedLink href={`/${item.toLowerCase().replace(' ', '-')}`}>
                      {item}
                    </AnimatedLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Services Section Toggle */}
          <div>
            <SectionToggle
              title="AI Services"
              isOpen={openSections.services}
              onToggle={() => toggleSection('services')}
            />
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                openSections.services ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <ul className="pt-4 space-y-2">
                {[
                  'Machine Learning & AI Automation',
                  'AI & Automation Web',
                  'AI Mobile App',
                  'AI Custom Software',
                  'AI Saas Platform',
                ].map((item) => (
                  <li key={item}>
                    <AnimatedLink href={`/solutions/${item.toLowerCase().replace(/ & | /g, '_')}`}>
                      {item}
                    </AnimatedLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Section Toggle */}
          <div>
            <SectionToggle
              title="Contact"
              isOpen={openSections.contact}
              onToggle={() => toggleSection('contact')}
            />
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                openSections.contact ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="pt-4 space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-2 p-2 bg-gray-700/50 rounded-lg">
                    <Mail className="w-4 h-4 text-gray-400 flex-shrink-0" />
                    <AnimatedLink href="mailto:sales@greatodeal.com">
                      sales@greatodeal.com
                    </AnimatedLink>
                  </div>
                  
                  <OfficeInfo
                    title="🇳🇱 Head Office"
                    address="Jasonstraat 25, Amsterdam, Netherlands"
                    phone="+31 6 14996035"
                  />
                  
                  <OfficeInfo
                    title="🇵🇰 Development Center"
                    address="Shadman 2, Gulberg, Lahore, Pakistan"
                    phone="+92 301 1060841"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Footer Content */}
        <div className="hidden lg:block">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="space-y-4">
              <div className="flex items-center">
                <img
                  src={logo}
                  alt="GreatDeals Software Logo"
                  className="h-10 sm:h-12 md:h-14 w-auto max-w-[200px] object-contain"
                />
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Empowering businesses with innovative software solutions and digital transformation services.
              </p>
              <div className="flex space-x-4">
                <SocialIcon 
                  icon={Facebook} 
                  label="Facebook" 
                  href="https://www.facebook.com/greatodealofficial" 
                />
                <SocialIcon 
                  icon={Linkedin} 
                  label="LinkedIn" 
                  href="https://www.linkedin.com/company/greatodeal" 
                />
                <SocialIcon 
                  icon={Instagram} 
                  label="Instagram" 
                  href="https://www.instagram.com/greatodeal" 
                />
              </div>
            </div>

            {/* Company Links */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Company</h3>
              <ul className="space-y-2">
                <li><AnimatedLink href="/about">About</AnimatedLink></li>
                <li><AnimatedLink href="/contact">Contact</AnimatedLink></li>
                <li><AnimatedLink href="/howwork">How we Work</AnimatedLink></li>
                <li><AnimatedLink href="/blogs">Blogs</AnimatedLink></li>
              </ul>
            </div>

            {/* Services Links */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">AI Services</h3>
              <ul className="space-y-2">
                <li><AnimatedLink href="/solutions/machine_learning">Machine Learning & AI Automation</AnimatedLink></li>
                <li><AnimatedLink href="/solutions/webapps">AI & Automation Web</AnimatedLink></li>
                <li><AnimatedLink href="/solutions/mobileapps">AI Mobile App</AnimatedLink></li>
                <li><AnimatedLink href="/solutions/custom_software">AI Custom Software</AnimatedLink></li>
                <li><AnimatedLink href="/solutions/saasplatform">AI Saas Platform</AnimatedLink></li>
              </ul>
            </div>

            {/* Contact Info - Compact Layout */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Contact</h3>
              
              {/* Email */}
              <div className="flex items-center gap-2 p-2 bg-gray-700/50 rounded-lg">
                <Mail className="w-4 h-4 text-gray-400 flex-shrink-0" />
                <AnimatedLink href="mailto:sales@greatodeal.com">
                  sales@greatodeal.com
                </AnimatedLink>
              </div>

              {/* Offices */}
              <div className="space-y-2">
                {/* Head Office */}
                <div className="p-2 bg-gray-700/30 rounded-lg">
                  <div className="flex items-center gap-2 text-teal-300 font-medium text-sm mb-1">
                    <span className="w-1.5 h-1.5 bg-teal-400 rounded-full"></span>
                    🇳🇱 Head Office
                  </div>
                  <div className="text-sm space-y-1">
                    <p className="text-gray-300">Jasonstraat 25<br/>Amsterdam, Netherlands</p>
                    <AnimatedLink href="tel:+31614996035" className="text-xs block">
                      +31 6 14996035
                    </AnimatedLink>
                  </div>
                </div>

                {/* Development Center */}
                <div className="p-2 bg-gray-700/30 rounded-lg">
                  <div className="flex items-center gap-2 text-teal-300 font-medium text-sm mb-1">
                    <span className="w-1.5 h-1.5 bg-teal-400 rounded-full"></span>
                    🇵🇰 Development Center
                  </div>
                  <div className="text-sm space-y-1">
                    <p className="text-gray-300">Shadman 2, Gulberg<br/>Lahore, Pakistan</p>
                    <AnimatedLink href="tel:+923011060841" className="text-xs block">
                      +92 301 1060841
                    </AnimatedLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <span className="text-gray-400 text-sm">
             © 2025 Greatodeal Software. All rights reserved.
Building Scalable AI-Powered SaaS & Automation Platforms.
            </span>
           
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;