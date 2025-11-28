import React, { useState } from 'react';
import { ArrowRight, ChevronDown, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CaseStudies = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [expandedCase, setExpandedCase] = useState(null);

  const filters = ['All', 'E-commerce', 'F&B', 'Finance', 'Logistics', 'Mobile app'];
  
  const caseStudies = [
    {
      id: 1,
      category: 'Finance',
      title: 'QMG Cloud and Custom Solutions for Audit Firms',
      client: 'Auvenir',
      description: 'Auvenir is a Canadian technology company headquartered in Toronto that provides innovative audit solutions. We developed a cloud-based platform that automates audit workflows, reduces manual processes by 60%, and improves accuracy through AI-powered document analysis.',
      results: [
        '60% reduction in manual audit processes',
        '40% faster audit completion times',
        '99.8% document processing accuracy'
      ]
    },
    {
      id: 2,
      category: 'Finance',
      title: 'A Cloud-Based Digital Platform to Streamline Audits',
      client: 'Deloitte',
      description: 'Our client needed a modern solution to transform their audit processes. We built the Levvia Audit Platform with real-time collaboration features, automated data validation, and customizable reporting dashboards that integrate with existing enterprise systems.',
      results: [
        '75% reduction in audit preparation time',
        '50% decrease in client follow-up requests',
        'Seamless integration with 5+ enterprise systems'
      ]
    },
    {
      id: 3,
      category: 'Logistics',
      title: 'Comprehensive Logistic and Warehouse Leasing Platform',
      client: 'Beecow',
      description: 'Beecow needed a digital transformation of their logistics operations. We delivered a comprehensive platform connecting shippers with warehouse providers, featuring real-time inventory tracking, automated billing, and predictive analytics for space utilization.',
      results: [
        '30% increase in warehouse space utilization',
        'Automated 90% of billing processes',
        'Reduced booking time from days to minutes'
      ]
    },
    {
      id: 4,
      category: 'E-commerce',
      title: 'E-Commerce Mobile App for Retailers',
      client: 'GoMUA',
      description: 'GoMUA wanted to empower small retailers with mobile selling capabilities. We created a white-label e-commerce app with inventory management, payment processing, and customer analytics that retailers could customize with their branding.',
      results: [
        '500+ retailers onboarded in first 6 months',
        '30% average increase in retailer sales',
        '4.8/5 app store rating'
      ]
    },
    {
      id: 5,
      category: 'E-commerce',
      title: 'A Global B2B Platform for Vietnamese Goods',
      client: 'SourceVietnam.com',
      description: 'This project involved building a wholesale marketplace connecting international buyers with Vietnamese manufacturers. Key features included multi-language support, secure escrow payments, logistics integration, and quality assurance workflows.',
      results: [
        '$50M+ in annual transaction volume',
        '1,200+ verified suppliers',
        '95% buyer satisfaction rate'
      ]
    },
    {
      id: 6,
      category: 'F&B',
      title: 'Restaurants Management System with POS',
      client: 'GoF&B',
      description: 'We developed an all-in-one restaurant management solution including POS, inventory management, staff scheduling, and customer loyalty programs. The system works offline and syncs when connection is restored, crucial for busy restaurant environments.',
      results: [
        '20% faster table turnover',
        '15% reduction in food waste',
        '30% increase in repeat customers'
      ]
    }
  ];

  const filteredCases = activeFilter === 'All' 
    ? caseStudies 
    : caseStudies.filter(caseStudy => caseStudy.category === activeFilter);

  return (
    <div className="min-h-screen bg-[#121212] text-[#E5E7EB] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl pt-16 sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-[#6EE7B7] to-[#93C5FD] bg-clip-text text-transparent">
              Client Success Stories
            </span>
          </h1>
          <p className="text-lg text-[#9CA3AF] max-w-3xl mx-auto">
            Explore how we've helped businesses across various industries achieve their goals with our innovative IT solutions.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map(filter => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-[#6EE7B7] text-[#121212]'
                  : 'bg-[#1E1E1E] text-[#E5E7EB] hover:bg-[#2E2E2E]'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Case Studies Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCases.map((caseStudy) => (
            <div 
              key={caseStudy.id} 
              className={`bg-[#1E1E1E] rounded-xl overflow-hidden border border-[#2E2E2E] transition-all duration-300 hover:border-[#6EE7B7]/50 hover:shadow-lg hover:shadow-[#6EE7B7]/10 ${
                expandedCase === caseStudy.id ? 'lg:col-span-2' : ''
              }`}
            >
              <div 
                className="p-6 cursor-pointer"
                onClick={() => setExpandedCase(expandedCase === caseStudy.id ? null : caseStudy.id)}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full mb-3 bg-[#6EE7B7]/10 text-[#6EE7B7]">
                      {caseStudy.category}
                    </span>
                    <h3 className="text-xl font-bold mb-2">{caseStudy.title}</h3>
                    <p className="text-sm text-[#9CA3AF] mb-4">Client: {caseStudy.client}</p>
                  </div>
                  <button className="text-[#6EE7B7]">
                    {expandedCase === caseStudy.id ? <ChevronDown /> : <ChevronRight />}
                  </button>
                </div>
                
                {expandedCase === caseStudy.id && (
                  <div className="mt-4 space-y-4 animate-fadeIn">
                    <p className="text-[#E5E7EB]">{caseStudy.description}</p>
                    <div className="pt-4 border-t border-[#2E2E2E]">
                      <h4 className="font-semibold text-[#93C5FD] mb-3">Key Results:</h4>
                      <ul className="space-y-2">
                        {caseStudy.results.map((result, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-[#6EE7B7] mr-2">✓</span>
                            <span className="text-[#E5E7EB]">{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <button className="mt-4 flex items-center text-[#6EE7B7] hover:text-[#93C5FD] transition-colors">
                      View full case study
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
<div className="mt-20 text-center">
  <h3 className="text-2xl font-bold mb-4">Ready to start your success story?</h3>
  <p className="text-[#9CA3AF] mb-8 max-w-2xl mx-auto">
    Let's discuss how we can help your business achieve its goals with custom technology solutions.
  </p>
  <Link to="/Contact">
    <button className="px-8 py-3 bg-gradient-to-r from-[#6EE7B7] to-[#93C5FD] text-[#121212] font-bold rounded-full hover:opacity-90 transition-opacity">
      Let's Start
    </button>
  </Link>
</div>
      </div>
    </div>
  );
};

export default CaseStudies;

