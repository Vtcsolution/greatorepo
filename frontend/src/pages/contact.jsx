import React, { useState, useRef, useEffect } from 'react';
import { Mail, Phone, User, Building, MessageSquare, CheckCircle, ChevronDown, MapPin, Clock, Send, X, Brain, MessageCircle, Search } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import contact from '../assets/images/contact.jpg';
import { Helmet } from "react-helmet-async";

const Contact = () => {
  // Form States
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [focusedField, setFocusedField] = useState('');
  const [showCountrySearch, setShowCountrySearch] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [formData, setFormData] = useState({
    fullName: '',
    company: '',
    countryCode: '+31',
    phone: '',
    email: '',
    services: '',
    message: ''
  });
  // Toast States
  const [toasts, setToasts] = useState([]);
  // ALL COUNTRIES WITH CODES (200+ countries)
  const allCountries = [
    { code: '+93', country: 'AF', flag: '🇦🇫', name: 'Afghanistan' },
    { code: '+355', country: 'AL', flag: '🇦🇱', name: 'Albania' },
    { code: '+213', country: 'DZ', flag: '🇩🇿', name: 'Algeria' },
    { code: '+1684', country: 'AS', flag: '🇦🇸', name: 'American Samoa' },
    { code: '+376', country: 'AD', flag: '🇦🇩', name: 'Andorra' },
    { code: '+1268', country: 'AG', flag: '🇦🇬', name: 'Antigua and Barbuda' },
    { code: '+54', country: 'AR', flag: '🇦🇷', name: 'Argentina' },
    { code: '+374', country: 'AM', flag: '🇦🇲', name: 'Armenia' },
    { code: '+61', country: 'AU', flag: '🇦🇺', name: 'Australia' },
    { code: '+43', country: 'AT', flag: '🇦🇹', name: 'Austria' },
    { code: '+994', country: 'AZ', flag: '🇦🇿', name: 'Azerbaijan' },
    { code: '+1242', country: 'BS', flag: '🇧🇸', name: 'Bahamas' },
    { code: '+973', country: 'BH', flag: '🇧🇭', name: 'Bahrain' },
    { code: '+880', country: 'BD', flag: '🇧🇩', name: 'Bangladesh' },
    { code: '+1246', country: 'BB', flag: '🇧🇧', name: 'Barbados' },
    { code: '+375', country: 'BY', flag: '🇧🇾', name: 'Belarus' },
    { code: '+32', country: 'BE', flag: '🇧🇪', name: 'Belgium' },
    { code: '+501', country: 'BZ', flag: '🇧🇿', name: 'Belize' },
    { code: '+229', country: 'BJ', flag: '🇧🇯', name: 'Benin' },
    { code: '+975', country: 'BT', flag: '🇧🇹', name: 'Bhutan' },
    { code: '+591', country: 'BO', flag: '🇧🇴', name: 'Bolivia' },
    { code: '+387', country: 'BA', flag: '🇧🇦', name: 'Bosnia and Herzegovina' },
    { code: '+267', country: 'BW', flag: '🇧🇼', name: 'Botswana' },
    { code: '+55', country: 'BR', flag: '🇧🇷', name: 'Brazil' },
    { code: '+1284', country: 'VG', flag: '🇻🇬', name: 'British Virgin Islands' },
    { code: '+673', country: 'BN', flag: '🇧🇳', name: 'Brunei' },
    { code: '+359', country: 'BG', flag: '🇧🇬', name: 'Bulgaria' },
    { code: '+226', country: 'BF', flag: '🇧🇫', name: 'Burkina Faso' },
    { code: '+95', country: 'MM', flag: '🇲🇲', name: 'Myanmar' },
    { code: '+257', country: 'BI', flag: '🇧🇮', name: 'Burundi' },
    { code: '+855', country: 'KH', flag: '🇰🇭', name: 'Cambodia' },
    { code: '+237', country: 'CM', flag: '🇨🇲', name: 'Cameroon' },
    { code: '+1', country: 'CA', flag: '🇨🇦', name: 'Canada' },
    { code: '+238', country: 'CV', flag: '🇨🇻', name: 'Cape Verde' },
    { code: '+236', country: 'CF', flag: '🇨🇫', name: 'Central African Republic' },
    { code: '+235', country: 'TD', flag: '🇹🇩', name: 'Chad' },
    { code: '+56', country: 'CL', flag: '🇨🇱', name: 'Chile' },
    { code: '+86', country: 'CN', flag: '🇨🇳', name: 'China' },
    { code: '+61', country: 'CX', flag: '🇨🇽', name: 'Christmas Island' },
    { code: '+61', country: 'CC', flag: '🇨🇨', name: 'Cocos Islands' },
    { code: '+57', country: 'CO', flag: '🇨🇴', name: 'Colombia' },
    { code: '+269', country: 'KM', flag: '🇰🇲', name: 'Comoros' },
    { code: '+242', country: 'CG', flag: '🇨🇬', name: 'Congo - Brazzaville' },
    { code: '+243', country: 'CD', flag: '🇨🇩', name: 'Congo - Kinshasa' },
    { code: '+682', country: 'CK', flag: '🇨🇰', name: 'Cook Islands' },
    { code: '+506', country: 'CR', flag: '🇨🇷', name: 'Costa Rica' },
    { code: '+385', country: 'HR', flag: '🇭🇷', name: 'Croatia' },
    { code: '+53', country: 'CU', flag: '🇨🇺', name: 'Cuba' },
    { code: '+357', country: 'CY', flag: '🇨🇾', name: 'Cyprus' },
    { code: '+420', country: 'CZ', flag: '🇨🇿', name: 'Czech Republic' },
    { code: '+45', country: 'DK', flag: '🇩🇰', name: 'Denmark' },
    { code: '+253', country: 'DJ', flag: '🇩🇯', name: 'Djibouti' },
    { code: '+1767', country: 'DM', flag: '🇩🇲', name: 'Dominica' },
    { code: '+1809', country: 'DO', flag: '🇩🇴', name: 'Dominican Republic' },
    { code: '+670', country: 'TL', flag: '🇹🇱', name: 'East Timor' },
    { code: '+593', country: 'EC', flag: '🇪🇨', name: 'Ecuador' },
    { code: '+20', country: 'EG', flag: '🇪🇬', name: 'Egypt' },
    { code: '+503', country: 'SV', flag: '🇸🇻', name: 'El Salvador' },
    { code: '+240', country: 'GQ', flag: '🇬🇶', name: 'Equatorial Guinea' },
    { code: '+291', country: 'ER', flag: '🇪🇷', name: 'Eritrea' },
    { code: '+372', country: 'EE', flag: '🇪🇪', name: 'Estonia' },
    { code: '+268', country: 'SZ', flag: '🇸🇿', name: 'Eswatini' },
    { code: '+251', country: 'ET', flag: '🇪🇹', name: 'Ethiopia' },
    { code: '+679', country: 'FJ', flag: '🇫🇯', name: 'Fiji' },
    { code: '+358', country: 'FI', flag: '🇫🇮', name: 'Finland' },
    { code: '+33', country: 'FR', flag: '🇫🇷', name: 'France' },
    { code: '+241', country: 'GA', flag: '🇬🇦', name: 'Gabon' },
    { code: '+220', country: 'GM', flag: '🇬🇲', name: 'Gambia' },
    { code: '+995', country: 'GE', flag: '🇬🇪', name: 'Georgia' },
    { code: '+49', country: 'DE', flag: '🇩🇪', name: 'Germany' },
    { code: '+233', country: 'GH', flag: '🇬🇭', name: 'Ghana' },
    { code: '+30', country: 'GR', flag: '🇬🇷', name: 'Greece' },
    { code: '+299', country: 'GL', flag: '🇬🇱', name: 'Greenland' },
    { code: '+1473', country: 'GD', flag: '🇬🇩', name: 'Grenada' },
    { code: '+1671', country: 'GU', flag: '🇬🇺', name: 'Guam' },
    { code: '+502', country: 'GT', flag: '🇬🇹', name: 'Guatemala' },
    { code: '+224', country: 'GN', flag: '🇬🇳', name: 'Guinea' },
    { code: '+245', country: 'GW', flag: '🇬🇼', name: 'Guinea-Bissau' },
    { code: '+592', country: 'GY', flag: '🇬🇾', name: 'Guyana' },
    { code: '+509', country: 'HT', flag: '🇭🇹', name: 'Haiti' },
    { code: '+504', country: 'HN', flag: '🇭🇳', name: 'Honduras' },
    { code: '+36', country: 'HU', flag: '🇭🇺', name: 'Hungary' },
    { code: '+354', country: 'IS', flag: '🇮🇸', name: 'Iceland' },
    { code: '+91', country: 'IN', flag: '🇮🇳', name: 'India' },
    { code: '+62', country: 'ID', flag: '🇮🇩', name: 'Indonesia' },
    { code: '+98', country: 'IR', flag: '🇮🇷', name: 'Iran' },
    { code: '+964', country: 'IQ', flag: '🇮🇶', name: 'Iraq' },
    { code: '+353', country: 'IE', flag: '🇮🇪', name: 'Ireland' },
    { code: '+44', country: 'GB', flag: '🇬🇧', name: 'United Kingdom' },
    { code: '+972', country: 'IL', flag: '🇮🇱', name: 'Israel' },
    { code: '+39', country: 'IT', flag: '🇮🇹', name: 'Italy' },
    { code: '+225', country: 'CI', flag: '🇨🇮', name: 'Ivory Coast' },
    { code: '+1876', country: 'JM', flag: '🇯🇲', name: 'Jamaica' },
    { code: '+81', country: 'JP', flag: '🇯🇵', name: 'Japan' },
    { code: '+962', country: 'JO', flag: '🇯🇴', name: 'Jordan' },
    { code: '+7', country: 'KZ', flag: '🇰🇿', name: 'Kazakhstan' },
    { code: '+254', country: 'KE', flag: '🇰🇪', name: 'Kenya' },
    { code: '+686', country: 'KI', flag: '🇰🇮', name: 'Kiribati' },
    { code: '+850', country: 'KP', flag: '🇰🇵', name: 'North Korea' },
    { code: '+82', country: 'KR', flag: '🇰🇷', name: 'South Korea' },
    { code: '+965', country: 'KW', flag: '🇰🇼', name: 'Kuwait' },
    { code: '+996', country: 'KG', flag: '🇰🇬', name: 'Kyrgyzstan' },
    { code: '+856', country: 'LA', flag: '🇱🇦', name: 'Laos' },
    { code: '+371', country: 'LV', flag: '🇱🇻', name: 'Latvia' },
    { code: '+961', country: 'LB', flag: '🇱🇧', name: 'Lebanon' },
    { code: '+266', country: 'LS', flag: '🇱🇸', name: 'Lesotho' },
    { code: '+231', country: 'LR', flag: '🇱🇷', name: 'Liberia' },
    { code: '+218', country: 'LY', flag: '🇱🇾', name: 'Libya' },
    { code: '+423', country: 'LI', flag: '🇱🇮', name: 'Liechtenstein' },
    { code: '+370', country: 'LT', flag: '🇱🇹', name: 'Lithuania' },
    { code: '+352', country: 'LU', flag: '🇱🇺', name: 'Luxembourg' },
    { code: '+853', country: 'MO', flag: '🇲🇴', name: 'Macau' },
    { code: '+389', country: 'MK', flag: '🇲🇰', name: 'North Macedonia' },
    { code: '+261', country: 'MG', flag: '🇲🇬', name: 'Madagascar' },
    { code: '+265', country: 'MW', flag: '🇲🇼', name: 'Malawi' },
    { code: '+60', country: 'MY', flag: '🇲🇾', name: 'Malaysia' },
    { code: '+960', country: 'MV', flag: '🇲🇻', name: 'Maldives' },
    { code: '+223', country: 'ML', flag: '🇲🇱', name: 'Mali' },
    { code: '+356', country: 'MT', flag: '🇲🇹', name: 'Malta' },
    { code: '+692', country: 'MH', flag: '🇲🇭', name: 'Marshall Islands' },
    { code: '+222', country: 'MR', flag: '🇲🇷', name: 'Mauritania' },
    { code: '+230', country: 'MU', flag: '🇲🇺', name: 'Mauritius' },
    { code: '+269', country: 'YT', flag: '🇾🇹', name: 'Mayotte' },
    { code: '+52', country: 'MX', flag: '🇲🇽', name: 'Mexico' },
    { code: '+691', country: 'FM', flag: '🇫🇲', name: 'Micronesia' },
    { code: '+373', country: 'MD', flag: '🇲🇩', name: 'Moldova' },
    { code: '+377', country: 'MC', flag: '🇲🇨', name: 'Monaco' },
    { code: '+976', country: 'MN', flag: '🇲🇳', name: 'Mongolia' },
    { code: '+382', country: 'ME', flag: '🇲🇪', name: 'Montenegro' },
    { code: '+1664', country: 'MS', flag: '🇲🇸', name: 'Montserrat' },
    { code: '+212', country: 'MA', flag: '🇲🇦', name: 'Morocco' },
    { code: '+258', country: 'MZ', flag: '🇲🇿', name: 'Mozambique' },
    { code: '+264', country: 'NA', flag: '🇳🇦', name: 'Namibia' },
    { code: '+674', country: 'NR', flag: '🇳🇷', name: 'Nauru' },
    { code: '+977', country: 'NP', flag: '🇳🇵', name: 'Nepal' },
    { code: '+31', country: 'NL', flag: '🇳🇱', name: 'Netherlands' },
    { code: '+64', country: 'NZ', flag: '🇳🇿', name: 'New Zealand' },
    { code: '+505', country: 'NI', flag: '🇳🇮', name: 'Nicaragua' },
    { code: '+227', country: 'NE', flag: '🇳🇪', name: 'Niger' },
    { code: '+234', country: 'NG', flag: '🇳🇬', name: 'Nigeria' },
    { code: '+683', country: 'NU', flag: '🇳🇺', name: 'Niue' },
    { code: '+47', country: 'NO', flag: '🇳🇴', name: 'Norway' },
    { code: '+968', country: 'OM', flag: '🇴🇲', name: 'Oman' },
    { code: '+92', country: 'PK', flag: '🇵🇰', name: 'Pakistan' },
    { code: '+680', country: 'PW', flag: '🇵🇼', name: 'Palau' },
    { code: '+507', country: 'PA', flag: '🇵🇦', name: 'Panama' },
    { code: '+675', country: 'PG', flag: '🇵🇬', name: 'Papua New Guinea' },
    { code: '+595', country: 'PY', flag: '🇵🇾', name: 'Paraguay' },
    { code: '+51', country: 'PE', flag: '🇵🇪', name: 'Peru' },
    { code: '+63', country: 'PH', flag: '🇵🇭', name: 'Philippines' },
    { code: '+64', country: 'PN', flag: '🇵🇳', name: 'Pitcairn Islands' },
    { code: '+48', country: 'PL', flag: '🇵🇱', name: 'Poland' },
    { code: '+351', country: 'PT', flag: '🇵🇹', name: 'Portugal' },
    { code: '+974', country: 'QA', flag: '🇶🇦', name: 'Qatar' },
    { code: '+262', country: 'RE', flag: '🇷🇪', name: 'Réunion' },
    { code: '+40', country: 'RO', flag: '🇷🇴', name: 'Romania' },
    { code: '+7', country: 'RU', flag: '🇷🇺', name: 'Russia' },
    { code: '+250', country: 'RW', flag: '🇷🇼', name: 'Rwanda' },
    { code: '+590', country: 'BL', flag: '🇧🇱', name: 'Saint Barthélemy' },
    { code: '+685', country: 'WS', flag: '🇼🇸', name: 'Samoa' },
    { code: '+378', country: 'SM', flag: '🇸🇲', name: 'San Marino' },
    { code: '+239', country: 'ST', flag: '🇸🇹', name: 'São Tomé and Príncipe' },
    { code: '+966', country: 'SA', flag: '🇸🇦', name: 'Saudi Arabia' },
    { code: '+221', country: 'SN', flag: '🇸🇳', name: 'Senegal' },
    { code: '+381', country: 'RS', flag: '🇷🇸', name: 'Serbia' },
    { code: '+248', country: 'SC', flag: '🇸🇨', name: 'Seychelles' },
    { code: '+232', country: 'SL', flag: '🇸🇱', name: 'Sierra Leone' },
    { code: '+65', country: 'SG', flag: '🇸🇬', name: 'Singapore' },
    { code: '+421', country: 'SK', flag: '🇸🇰', name: 'Slovakia' },
    { code: '+386', country: 'SI', flag: '🇸🇮', name: 'Slovenia' },
    { code: '+677', country: 'SB', flag: '🇸🇧', name: 'Solomon Islands' },
    { code: '+252', country: 'SO', flag: '🇸🇴', name: 'Somalia' },
    { code: '+27', country: 'ZA', flag: '🇿🇦', name: 'South Africa' },
    { code: '+211', country: 'SS', flag: '🇸🇸', name: 'South Sudan' },
    { code: '+34', country: 'ES', flag: '🇪🇸', name: 'Spain' },
    { code: '+94', country: 'LK', flag: '🇱🇰', name: 'Sri Lanka' },
    { code: '+249', country: 'SD', flag: '🇸🇩', name: 'Sudan' },
    { code: '+597', country: 'SR', flag: '🇸🇷', name: 'Suriname' },
    { code: '+46', country: 'SE', flag: '🇸🇪', name: 'Sweden' },
    { code: '+41', country: 'CH', flag: '🇨🇭', name: 'Switzerland' },
    { code: '+963', country: 'SY', flag: '🇸🇾', name: 'Syria' },
    { code: '+886', country: 'TW', flag: '🇹🇼', name: 'Taiwan' },
    { code: '+992', country: 'TJ', flag: '🇹🇯', name: 'Tajikistan' },
    { code: '+255', country: 'TZ', flag: '🇹🇿', name: 'Tanzania' },
    { code: '+66', country: 'TH', flag: '🇹🇭', name: 'Thailand' },
    { code: '+670', country: 'TL', flag: '🇹🇱', name: 'Timor-Leste' },
    { code: '+228', country: 'TG', flag: '🇹🇬', name: 'Togo' },
    { code: '+690', country: 'TK', flag: '🇹🇰', name: 'Tokelau' },
    { code: '+676', country: 'TO', flag: '🇹🇴', name: 'Tonga' },
    { code: '+993', country: 'TM', flag: '🇹🇲', name: 'Turkmenistan' },
    { code: '+1649', country: 'TC', flag: '🇹🇨', name: 'Turks and Caicos Islands' },
    { code: '+688', country: 'TV', flag: '🇹🇻', name: 'Tuvalu' },
    { code: '+256', country: 'UG', flag: '🇺🇬', name: 'Uganda' },
    { code: '+380', country: 'UA', flag: '🇺🇦', name: 'Ukraine' },
    { code: '+971', country: 'AE', flag: '🇦🇪', name: 'United Arab Emirates' },
    { code: '+1', country: 'US', flag: '🇺🇸', name: 'United States' },
    { code: '+598', country: 'UY', flag: '🇺🇾', name: 'Uruguay' },
    { code: '+998', country: 'UZ', flag: '🇺🇿', name: 'Uzbekistan' },
    { code: '+678', country: 'VU', flag: '🇻🇺', name: 'Vanuatu' },
    { code: '+379', country: 'VA', flag: '🇻🇦', name: 'Vatican City' },
    { code: '+58', country: 'VE', flag: '🇻🇪', name: 'Venezuela' },
    { code: '+84', country: 'VN', flag: '🇻🇳', name: 'Vietnam' },
    { code: '+967', country: 'YE', flag: '🇾🇪', name: 'Yemen' },
    { code: '+260', country: 'ZM', flag: '🇿🇲', name: 'Zambia' },
    { code: '+263', country: 'ZW', flag: '🇿🇼', name: 'Zimbabwe' }
  ];
  // Services (AI/IT focused)
  const services = [
    { value: '', label: 'Select a Service' },
    { value: 'ai-automation', label: 'AI & Automation' },
    { value: 'erp-development', label: 'ERP Development' },
    { value: 'web-development', label: 'Web Development' },
    { value: 'mobile-app', label: 'Mobile App Development' },
    { value: 'ui-ux-design', label: 'UI/UX Design' },
    { value: 'custom-software', label: 'Custom Software Development' },
    { value: 'saas-platform', label: 'SaaS Platforms' },
    { value: 'cloud-security', label: 'Cloud & Security' },
    { value: 'data-analytics', label: 'Data Analytics & API' },
    { value: 'consultation', label: 'General Consultation' },
    { value: 'other', label: 'Other' }
  ];
  // OFFICIAL CONTACT DATA
  const officialContact = {
    company: {
      name: 'GreatOdeal',
      emails: {
        sales: 'sales@greatodeal.com',
        support: 'support@greatodeal.com',
        general: 'info@greatodeal.com'
      },
      phones: {
        netherlands: '+31 6 14996035',
        pakistan: '+92 301 1060841'
      },
      whatsapp: {
        netherlands: 'https://wa.me/31614996035',
        pakistan: 'https://wa.me/923011060841'
      }
    },
    offices: [
      {
        type: 'Head Office',
        flag: '🇳🇱',
        address: 'Jasonstraat 25',
        city: 'Amsterdam',
        country: 'Netherlands',
        phone: '+31 6 14996035',
        whatsapp: 'https://wa.me/31614996035'
      },
      {
        type: 'Development Center',
        flag: '🇵🇰',
        address: 'Shadman 2, Gulberg',
        city: 'Lahore',
        country: 'Pakistan',
        phone: '+92 301 1060841',
        whatsapp: 'https://wa.me/923011060841'
      }
    ]
  };
  const phoneInputRef = useRef(null);
  const searchInputRef = useRef(null);
  // Auto-detect country code from phone number
  useEffect(() => {
    const detectCountryCode = () => {
      const phoneNumber = formData.phone.trim();
      if (phoneNumber.length >= 3) {
        // Clean the number: remove non-digits (already digits, but ensure)
        let cleanNumber = phoneNumber.replace(/\D/g, '');
       
        // Country-specific patterns (prioritized order) - full matches
        const countryPatterns = [
          { country: 'Pakistan', pattern: /^03\d{9}$/, code: '+92' }, // Pakistan: 03xxxxxxxxx (11 digits)
          { country: 'Netherlands', pattern: /^06\d{8}$/, code: '+31' }, // Netherlands: 06xxxxxxxx (10 digits)
          { country: 'United States', pattern: /^[2-9]\d{9}$/, code: '+1' }, // US: 10 digits starting 2-9
          { country: 'United Kingdom', pattern: /^07\d{9}$/, code: '+44' }, // UK: 07xxxxxxxxx (11 digits)
          { country: 'India', pattern: /^[6-9]\d{9}$/, code: '+91' }, // India: 10 digits starting 6-9
          // Add more patterns as needed
        ];
        let detected = false;
        for (const { country: countryName, pattern, code } of countryPatterns) {
          if (pattern.test(cleanNumber)) {
            let localPhone = cleanNumber;
            const needsTrunkPrefixRemoval = (code === '+92' || code === '+31' || code === '+44') && cleanNumber.startsWith('0');
            if (needsTrunkPrefixRemoval) {
              localPhone = cleanNumber.substring(1);
            }
            const needsUpdate = formData.countryCode !== code || formData.phone !== localPhone;
            if (needsUpdate) {
              setFormData(prev => ({
                ...prev,
                countryCode: code,
                phone: localPhone
              }));
              if (formData.countryCode !== code) {
              }
            }
            detected = true;
            break;
          }
        }
        if (!detected) {
          // Local prefix detection for partial numbers
          const localPrefixes = [
            { prefix: '03', code: '+92', country: 'Pakistan' },
            { prefix: '06', code: '+31', country: 'Netherlands' },
            { prefix: '07', code: '+44', country: 'United Kingdom' }
            // Add more local prefixes as needed
          ];
          for (const { prefix, code, country: countryName } of localPrefixes) {
            if (cleanNumber.startsWith(prefix) && cleanNumber.length > prefix.length) {
              if (formData.countryCode !== code) {
                setFormData(prev => ({
                  ...prev,
                  countryCode: code
                  // Do not adjust phone here; let full pattern handle trunk removal
                }));
              }
              detected = true;
              break;
            }
          }
        }
        if (!detected) {
          // Fallback to prefix matching for country codes
          for (let i = 4; i >= 3; i--) {
            const prefix = phoneNumber.substring(0, i);
            const country = allCountries.find(c => c.code === `+${prefix}`);
            if (country) {
              if (formData.countryCode !== country.code) {
                setFormData(prev => ({
                  ...prev,
                  countryCode: country.code,
                  phone: cleanNumber
                }));
              }
              return;
            }
          }
         
          // Specific prefix patterns (e.g., for partial codes)
          const prefixPatterns = {
            '92': '+92', // Pakistan
            '30': '+30', // Greece
            '31': '+31', // Netherlands
            '32': '+32', // Belgium
            '33': '+33', // France
            '34': '+34', // Spain
            '39': '+39', // Italy
            '41': '+41', // Switzerland
            '44': '+44', // UK
            '49': '+49', // Germany
            '1': '+1', // USA/Canada
            '234': '+234' // Nigeria
          };
          for (const [pattern, code] of Object.entries(prefixPatterns)) {
            if (phoneNumber.startsWith(pattern) && formData.countryCode !== code) {
              const localPhone = cleanNumber.replace(pattern, '');
              setFormData(prev => ({
                ...prev,
                countryCode: code,
                phone: localPhone
              }));
              const country = allCountries.find(c => c.code === code);
              if (country) {

              }
              break;
            }
          }
        }
      }
    };
    const timeoutId = setTimeout(detectCountryCode, 500);
    return () => clearTimeout(timeoutId);
  }, [formData.phone]);
  // Filter countries for search
  const filteredCountries = allCountries.filter(country =>
    country.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    country.code.includes(searchTerm) ||
    country.country.toLowerCase().includes(searchTerm.toLowerCase())
  );
  // Input Change Handler
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    let processedValue = value;
    // For phone: only allow digits
    if (name === 'phone') {
      processedValue = value.replace(/\D/g, ''); // Remove non-digits
    }
    setFormData(prev => ({
      ...prev,
      [name]: processedValue
    }));
   
    if (name === 'searchTerm') {
      setSearchTerm(value);
    }
  };
  // Select Country
  const selectCountry = (country) => {
    setFormData(prev => ({
      ...prev,
      countryCode: country.code
    }));
    setShowCountrySearch(false);
    setSearchTerm('');
  };
  // Focus/Blur Handlers
  const handleFocus = (fieldName) => {
    setFocusedField(fieldName);
    if (fieldName === 'phone') {
      setShowCountrySearch(true);
    }
  };
  const handleBlur = (e) => {
    // Delay blur to allow clicking on country list
    setTimeout(() => {
      if (!searchInputRef.current?.contains(document.activeElement)) {
        setShowCountrySearch(false);
        setFocusedField('');
      }
    }, 200);
  };
  // Toast Functions
  const showToast = (message, type = 'info') => {
    const id = Date.now();
    const toast = { id, message, type };
    setToasts(prev => [...prev, toast]);
   
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, 3000);
  };
  const removeToast = (id) => {
    setToasts(prev => prev.filter(t => t.id !== id));
  };
  // Form Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
   
    if (!formData.fullName || !formData.phone || !formData.email || !formData.services || !formData.message) {
      showToast('Please fill in all required fields!', 'error');
      return;
    }
    setIsSubmitting(true);
    showToast('Sending your message...', 'info');
    try {
      const response = await fetch(`${import.meta.env.VITE_BASE_URL}/api/contact/send`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullName: formData.fullName,
          company: formData.company || 'N/A',
          phone: `${formData.countryCode}${formData.phone}`,
          email: formData.email,
          services: formData.services,
          message: formData.message
        }),
      });
      const data = await response.json();
      if (response.ok) {
        setIsSuccess(true);
        showToast(data.message || 'Message saved! Check dashboard to reply.', 'success');
       
        setTimeout(() => {
          setIsSuccess(false);
          setFormData({
            fullName: '',
            company: '',
            countryCode: '+31',
            phone: '',
            email: '',
            services: '',
            message: ''
          });
        }, 3000);
      } else {
        throw new Error(data.message || 'Something went wrong!');
      }
    } catch (error) {
      console.error('Submission error:', error);
      showToast(error.message || 'Failed to send message. Please try again.', 'error');
    } finally {
      setIsSubmitting(false);
    }
  };
  const scrollToForm = () => {
    document.getElementById('contact-form').scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <>
      <Helmet>
        <title>About Greatodeal | AI SaaS & Automation Experts</title>
        <meta
          name="description"
          content="Learn about Greatodeal — experts in AI SaaS, automation, and web development solutions worldwide."
        />
        <link rel="canonical" href="https://greatodeal.com/contact" />
      </Helmet>
    <div className="min-h-screen bg-gray-900 text-gray-200 overflow-x-hidden font-inter" style={{ backgroundColor: '#0A0A0A' }}>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#121212] via-[#1E1E1E] to-[#121212]">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM2RUU3QjciIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMSIvPjwvZz48L2c+PC9zdmc+')] opacity-50"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/80 via-transparent to-[#0A0A0A]/80"></div>
       
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center lg:text-left"
            >
             
              <h1 className="text-2xl md:text-4xl font-bold mb-6 leading-tight animate-slide-up">
  Let's Build Your AI Vision Together
</h1>
<p className="text-gray-300 max-w-2xl animate-fade-in">
  Have a project in mind or want to discuss a custom AI, automation, or web solution?
  Fill out the form below or reach us directly — our team will get back to you within 24 hours.
</p>
<br></br>
             
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  onClick={scrollToForm}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-[#6EE7B7] to-[#34D399] text-gray-900 px-8 py-3 rounded-xl font-semibold flex items-center space-x-2"
                >
                  <Send className="w-5 h-5" />
                  <span>Get Started</span>
                </motion.button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative flex justify-center lg:justify-end"
            >
             <div className="relative w-full max-w-md sm:max-w-lg lg:max-w-xl h-[300px] sm:h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl bg-black flex items-center justify-center">
  <img
    className="w-full h-full "
    src={contact}
    alt="Greatodeal Team"
  />
  <div className="absolute inset-0 bg-gradient-to-t from-[#121212]/60 via-transparent to-transparent"></div>
</div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-8"
          >
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">Get In Touch</h2>
             
            </div>
            {/* Email Cards */}
            <div className="space-y-4">
              <motion.div
                whileHover={{ y: -2 }}
                className="p-6 rounded-2xl border border-gray-800 bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm hover:border-emerald-500/30 transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-xl bg-emerald-500/10">
                    <Mail className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">📧 Email</h3>
                    <p className="text-gray-400 mb-1">
                      <a href={`mailto:${officialContact.company.emails.sales}`} className="hover:text-emerald-400 transition-colors">
                        sales@greatodeal.com
                      </a>
                    </p>
                    <p className="text-gray-400">
                      <a href={`mailto:${officialContact.company.emails.support}`} className="hover:text-emerald-400 transition-colors">
                        support@greatodeal.com
                      </a>
                    </p>
                  </div>
                </div>
              </motion.div>
              {/* Office Cards */}
              {officialContact.offices.map((office, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -2 }}
                  className="p-6 rounded-2xl border border-gray-800 bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm hover:border-blue-500/30 transition-all duration-300 cursor-pointer"
                >
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 rounded-xl ${index === 0 ? 'bg-blue-500/10' : 'bg-purple-500/10'}`}>
                      <MessageCircle className={`w-6 h-6 ${index === 0 ? 'text-blue-400' : 'text-purple-400'}`} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="font-semibold text-white">{office.flag}</span>
                        <h3 className="text-white font-semibold">{office.type}</h3>
                      </div>
                      <p className="text-gray-400 mb-2 truncate">{office.address}, {office.city}</p>
                      <div className="flex items-center gap-3">
                        <a
                          href={`tel:${office.phone.replace(/\s/g, '')}`}
                          className="text-sm text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-1"
                        >
                          <Phone className="w-4 h-4" />
                          {office.phone}
                        </a>
                        <a
                          href={office.whatsapp}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-green-400 hover:text-green-300 transition-colors flex items-center gap-1"
                          title={`WhatsApp ${office.type}`}
                        >
                          <MessageCircle className="w-4 h-4" />
                          WhatsApp
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
              {/* Dashboard Card */}
             
            </div>
          </motion.div>
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
            id="contact-form"
          >
            <div className="rounded-3xl border border-gray-800 bg-gradient-to-br from-gray-900/80 to-gray-800/50 backdrop-blur-xl p-8 lg:p-10 shadow-2xl">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-white mb-3">Send Inquiry</h2>
               
              </div>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Full Name */}
                <div className="relative group">
                  <label className="block text-sm font-medium text-gray-300 mb-2">Full Name *</label>
                  <div className={`absolute left-4 top-[46px] transform -translate-y-1/2 w-5 h-5 transition-all duration-300 ${
                    focusedField === 'fullName' || formData.fullName ? 'text-emerald-400' : 'text-gray-500'
                  }`}>
                    <User className="w-5 h-5" />
                  </div>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    onFocus={() => handleFocus('fullName')}
                    onBlur={handleBlur}
                    className="w-full pl-12 pr-4 py-3.5 bg-gray-800/50 border border-gray-700 rounded-xl text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all duration-300"
                    placeholder="John Doe"
                    required
                  />
                </div>
                {/* Company */}
                <div className="relative group">
                  <label className="block text-sm font-medium text-gray-300 mb-2">Company</label>
                  <div className={`absolute left-4 top-[46px] transform -translate-y-1/2 w-5 h-5 transition-all duration-300 ${
                    focusedField === 'company' || formData.company ? 'text-emerald-400' : 'text-gray-500'
                  }`}>
                    <Building className="w-5 h-5" />
                  </div>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    onFocus={() => handleFocus('company')}
                    onBlur={handleBlur}
                    className="w-full pl-12 pr-4 py-3.5 bg-gray-800/50 border border-gray-700 rounded-xl text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all duration-300"
                    placeholder="Your Company"
                  />
                </div>
                {/* Phone Number with Auto-Detection */}
                <div className="relative group">
                  <label className="block text-sm font-medium text-gray-300 mb-2">Phone Number * </label>
                  <div className="relative">
                    {/* Current Country Code Display */}
                    <div
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-transparent pointer-events-none flex items-center gap-2 text-emerald-400 font-medium"
                    >
                      <span className="text-sm">{formData.countryCode}</span>
                      {allCountries.find(c => c.code === formData.countryCode)?.flag}
                    </div>
                   
                    {/* Phone Input */}
                    <input
                      ref={phoneInputRef}
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      onFocus={() => handleFocus('phone')}
                      onBlur={handleBlur}
                      className="w-full pl-20 pr-4 py-3.5 bg-gray-800/50 border border-gray-700 rounded-xl text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all duration-300"
                      placeholder="Type your number (302 → Pakistan, 31 → Netherlands...)"
                      required
                    />
                   
                    {/* Country Search Dropdown */}
                    <AnimatePresence>
                      {showCountrySearch && (
                        <motion.div
                          initial={{ opacity: 0, y: -10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: -10, scale: 0.95 }}
                          className="absolute top-full left-0 right-0 mt-2 bg-gray-800/95 backdrop-blur-sm border border-gray-700 rounded-xl shadow-2xl z-20 max-h-60 overflow-y-auto"
                        >
                          {/* Search Input */}
                          <div className="p-3 border-b border-gray-700 sticky top-0 bg-gray-800/50">
                            <div className="relative">
                              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                              <input
                                ref={searchInputRef}
                                type="text"
                                name="searchTerm"
                                value={searchTerm}
                                onChange={handleInputChange}
                                placeholder="Search country..."
                                className="w-full pl-9 pr-4 py-2 bg-gray-700/50 border border-gray-600 rounded-lg text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-emerald-500/30"
                              />
                            </div>
                          </div>
                         
                          {/* Country List */}
                          <div className="py-2">
                            {filteredCountries.length > 0 ? (
                              filteredCountries.slice(0, 10).map((country) => (
                                <motion.button
                                  key={country.code}
                                  onClick={() => selectCountry(country)}
                                  whileHover={{ backgroundColor: '#374151' }}
                                  whileTap={{ scale: 0.98 }}
                                  className="w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-gray-700/50 transition-colors duration-200"
                                >
                                  <span className="text-lg">{country.flag}</span>
                                  <span className="font-medium text-gray-100">{country.code}</span>
                                  <span className="text-gray-400 flex-1 truncate">{country.name}</span>
                                </motion.button>
                              ))
                            ) : (
                              <div className="px-4 py-6 text-center text-gray-400">
                                No countries found
                              </div>
                            )}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                 
                  {/* Hint Text */}
                  <p className="mt-1 text-xs text-gray-500">
                    Examples: 0304...→Pakistan, 06...→Netherlands, 202...→USA, 071...→UK
                  </p>
                </div>
                {/* Email Address */}
                <div className="relative group">
                  <label className="block text-sm font-medium text-gray-300 mb-2">Email Address *</label>
                  <div className={`absolute left-4 top-[46px] transform -translate-y-1/2 w-5 h-5 transition-all duration-300 ${
                    focusedField === 'email' || formData.email ? 'text-emerald-400' : 'text-gray-500'
                  }`}>
                    <Mail className="w-5 h-5" />
                  </div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    onFocus={() => handleFocus('email')}
                    onBlur={handleBlur}
                    className="w-full pl-12 pr-4 py-3.5 bg-gray-800/50 border border-gray-700 rounded-xl text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all duration-300"
                    placeholder="john@example.com"
                    required
                  />
                </div>
                {/* Services Dropdown */}
                <div className="relative group">
                  <label className="block text-sm font-medium text-gray-300 mb-2">Service Interested In *</label>
                  <select
                    name="services"
                    value={formData.services}
                    onChange={handleInputChange}
                    onFocus={() => handleFocus('services')}
                    onBlur={handleBlur}
                    className="appearance-none w-full px-4 py-3.5 bg-gray-800/50 border border-gray-700 rounded-xl text-gray-100 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all duration-300 pr-10"
                    style={{ color: formData.services ? '#E5E7EB' : '#9CA3AF' }}
                    required
                  >
                    {services.map(({ value, label }) => (
                      <option key={value} value={value} disabled={!value} className="bg-gray-800">
                        {label}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-4 top-[46px] transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                </div>
                {/* Message Textarea */}
                <div className="relative group">
                  <label className="block text-sm font-medium text-gray-300 mb-2">Project Details *</label>
                  <div className={`absolute left-4 top-[46px] w-5 h-5 transition-all duration-300 ${
                    focusedField === 'message' || formData.message ? 'text-emerald-400' : 'text-gray-500'
                  }`}>
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    onFocus={() => handleFocus('message')}
                    onBlur={handleBlur}
                    rows="5"
                    className="w-full pl-12 pr-4 py-3.5 bg-gray-800/50 border border-gray-700 rounded-xl text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all duration-300 resize-none"
                    placeholder="Tell us about your AI/IT project..."
                    required
                  />
                </div>
                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting || isSuccess}
                  className="w-full py-4 px-6 rounded-xl font-bold text-lg text-gray-900 transition-all duration-500 transform hover:scale-[1.02] focus:outline-none focus:ring-4 focus:ring-emerald-500/30 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-3 relative overflow-hidden group shadow-xl"
                  style={{
                    backgroundColor: isSuccess ? '#10B981' : '#6EE7B7',
                    background: isSuccess ? '#10B981' : 'linear-gradient(135deg, #6EE7B7 0%, #34D399 50%, #10B981 100%)'
                  }}
                >
                  <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                  <div className="relative z-10 flex items-center space-x-3">
                    {isSubmitting ? (
                      <>
                        <div className="w-6 h-6 border-3 border-gray-900/30 border-t-gray-900 rounded-full animate-spin"></div>
                        <span>Sending...</span>
                      </>
                    ) : isSuccess ? (
                      <>
                        <CheckCircle className="w-6 h-6 animate-bounce" />
                        <span>Saved!</span>
                      </>
                    ) : (
                      <>
                        <span className="tracking-wide">SEND INQUIRY</span>
                        <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </div>
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
      {/* Footer Section */}
   
      {/* Toast Notifications */}
      <AnimatePresence>
        {toasts.map(toast => (
          <motion.div
            key={toast.id}
            initial={{ opacity: 0, y: -50, x: 300 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            exit={{ opacity: 0, y: -50, x: 300 }}
            className={`fixed top-4 right-4 z-50 p-4 rounded-xl shadow-lg max-w-sm flex items-center space-x-3 ${
              toast.type === 'success' ? 'bg-green-500 text-white' :
              toast.type === 'error' ? 'bg-red-500 text-white' : 'bg-blue-500 text-white'
            }`}
          >
            {toast.type === 'success' && <CheckCircle className="w-5 h-5 flex-shrink-0" />}
            {toast.type === 'error' && <X className="w-5 h-5 flex-shrink-0" />}
            <span className="flex-1">{toast.message}</span>
            <button onClick={() => removeToast(toast.id)} className="ml-2">
              <X className="w-4 h-4" />
            </button>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
    </>
  );
};

export default Contact;
