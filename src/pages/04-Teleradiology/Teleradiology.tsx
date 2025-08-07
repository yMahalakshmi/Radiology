import React, { useEffect, useRef } from "react";
// Import Font Awesome icons
import { 
  FaHospitalAlt, FaUsers, FaStethoscope, FaUserMd, 
  FaCalendarCheck, FaFileAlt, FaUpload, FaMicroscope, FaFileMedicalAlt,
  FaShieldAlt, FaLock, FaUserShield, FaKey,
  FaImages, FaChartBar, FaCheckCircle
} from "react-icons/fa";
// import { Calendar, FileText, Upload, Microscope, FileCheck } from 'lucide-react';
import './teleradiology.css'
// Assuming you have this image in your assets folder
import teleradiologyImage from "../../assets/Home/home2.jpg"; 
// import { jsxDEV } from "react/jsx-dev-runtime";
import logo from '../../assets/Home/home2.webp'
const Teleradiology = () => {


  // Intersection Observer for scroll animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('section-visible');
          // Apply loading animation to direct children that have 'loading-child' class
          const loadingElements = entry.target.querySelectorAll('.loading-child');
          loadingElements.forEach((el, index) => {
            setTimeout(() => {
              el.classList.add('loading-child-loaded');
            }, index * 200);
          });
        }
      });
    }, observerOptions);

    // Observe all sections added to refs
    sectionRefs.current.forEach(section => {
      if (section) {
        observer.observe(section);
      }
    });

    // Cleanup observer on component unmount
    return () => {
      sectionRefs.current.forEach(section => {
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, []);

  // Function to add elements to the ref array
 
const sectionRefs = useRef<HTMLElement[]>([]);

const addToRefs = (el: HTMLElement | null) => {
  if (el && !sectionRefs.current.includes(el)) {
    sectionRefs.current.push(el);
  }
};

  // Particle animation for Hero section
  useEffect(() => {
    const hero = document.getElementById('hero-bg-particles');
    if (hero) {
      for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.className = 'absolute w-1 h-1 bg-white/30 rounded-full animate-float';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDuration = `${3 + Math.random() * 4}s`;
        particle.style.animationDelay = `${Math.random() * 2}s`;
        hero.appendChild(particle);
      }
    }
  }, []);
   const steps = [
    {
      number: "01",
      icon: < FaCalendarCheck className="w-8 h-8" />,
      title: "Book Appointment",
      description: "Patient schedules scan at nearest center with preferred timing and location",
      side: "right"
    },
    {
      number: "02",
      icon: <FaFileAlt className="w-8 h-8" />,
      title: "Submit Intake Form",
      description: "Digital forms capture comprehensive medical history and patient information",
      side: "left"
    },
    {
      number: "03",
      icon: <FaUpload className="w-8 h-8" />,
      title: "Upload DICOM",
      description: "Technician adds high-quality scan data and medical images to system",
      side: "right"
    },
    {
      number: "04",
      icon: <FaMicroscope className="w-8 h-8" />,
      title: "Radiologist Review",
      description: "Expert radiologist performs detailed analysis and generates report",
      side: "left"
    },
    {
      number: "05",
      icon: <FaFileMedicalAlt className="w-8 h-8" />,
      title: "Report Delivery",
      description: "Secure and timely delivery of results to patient and referring doctor",
      side: "right"
    },
  ];

   const routePath = `
    M 15 25 
    Q 25 45, 35 65
    Q 45 50, 60 40
    Q 75 55, 85 75
    Q 88 50, 95 30
  `;

  const featureSectionsData = [
    {
      id: "scan-center",
      title: "Scan Center Integration",
      description: "Empower your scan center with comprehensive digital tools that streamline operations and improve patient experience.",
      features: [
        "Quick onboarding & admin dashboard",
        "Appointment scheduling & tracking",
        "Patient intake digitization",
        "DICOM upload support",
        "Secure communication with radiologists"
      ],
      imageIcon: <FaHospitalAlt />,
      imageOnRight: true,
    },
    {
      id: "technician",
      title: "Technician Workflow",
      description: "Streamlined tools designed specifically for radiology technicians to enhance productivity and accuracy.",
      features: [
        "Access patient intake forms",
        "Add scan notes & observations",
        "Upload high-res DICOM images",
        "Mark for radiologist review",
        "Track report status"
      ],
      imageIcon: <FaStethoscope />,
      imageOnRight: false,
    },
    {
      id: "radiologist",
      title: "Radiologist Panel",
      description: "Advanced diagnostic tools that enable radiologists to provide accurate diagnoses from anywhere in the world.",
      features: [
        "Access all case data remotely",
        "View DICOMs in 360° viewer",
        "Add diagnostic notes & conclusions",
        "Digitally sign reports",
        "Secure sharing with patients/doctors"
      ],
      imageIcon: <FaUserMd />,
      imageOnRight: true,
    },
    {
      id: "patient-experience",
      title: "Patient Experience",
      description: "User-friendly interface designed to make the diagnostic journey as smooth as possible for patients.",
      features: [
        "Scan booking made easy",
        "Digital form with symptoms",
        "Reports delivered to mobile/email",
        "Option to consult doctors online",
        "Private & secure health data"
      ],
      imageIcon: <FaUsers />,
      imageOnRight: false,
    },
    {
      id: "dicom-viewer",
      title: "DICOM Upload & Viewer",
      description: "State-of-the-art imaging technology that ensures quality and precision in diagnostic imaging.",
      features: [
        "Supports standard DICOM uploads",
        "AI-enhanced 360° image viewer",
        "Zoom, annotate, and compare features",
        "Web-accessible with no install needed"
      ],
      imageIcon: <FaImages />,
      imageOnRight: true,
    },
    {
      id: "reports",
      title: "Reports & Analytics",
      description: "Comprehensive analytics dashboard to track performance and optimize operations.",
      features: [
        "Real-time reporting dashboard",
        "Track number of scans, reports, delays",
        "Export reports for audit or review",
        "Performance metrics and insights"
      ],
      imageIcon: <FaChartBar />,
      imageOnRight: false,
    },
  ];

  const securityFeatures = [
    { icon: <FaShieldAlt />, title: "HIPAA Compliant", description: "Full compliance with healthcare data regulations" },
    { icon: <FaLock />, title: "Encrypted Storage", description: "End-to-end encryption for all data transmission" },
    { icon: <FaUserShield />, title: "Role-Based Access", description: "Granular permissions for different user types" },
    { icon: <FaKey />, title: "Secure Login", description: "Multi-factor authentication and session tracking" },
  ];

  const testimonials = [
    { text: "MediScan has revolutionized our workflow. We can now process 3x more scans with the same staff.", author: "Dr. Sarah Johnson, Radiology Center Director" },
    { text: "The patient experience is so much smoother now. They love getting their reports instantly on their phones.", author: "Mark Thompson, Scan Center Manager" },
    { text: "As a radiologist, the 360° viewer and remote access capabilities have made my work so much more efficient.", author: "Dr. Michael Chen, Senior Radiologist" },
  ];

  return (
    <div className="bg-[#E5B8A8] text-gray-800">
      {/* Hero Section */}
    <section 
  className="min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-16 text-white relative overflow-hidden"
>
  {/* 🔳 Background Image Layer */}
  <div
    className="absolute inset-0 z-0"
    style={{
      backgroundImage: `url(${logo})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }}
  ></div>

  {/* 🔲 Dimming Overlay */}
  <div className="absolute inset-0 bg-black opacity-50 z-0"></div>

  {/* ✅ Content */}
  <div className="md:w-1/2 mb-10 md:mb-0 relative z-10 animate-fade-in-left">
    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
      Teleradiology Services
    </h1>
    <p className="text-lg leading-relaxed text-white">
      We specialize in breast cancer diagnostics through a complete
      teleradiology workflow. Our application connects scan centers,
      technicians, and radiologists to provide fast, accurate, and
      accessible results.
    </p>
    <div className="flex gap-4 justify-start flex-wrap mt-8">
      <a
        href="#contact-section"
        className="px-8 py-3 bg-white text-[#E5B8A8] rounded-full text-lg font-semibold transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-xl hover:shadow-[#E5B8A8]/30"
      >
        Get Started
      </a>
      <a
        href="#workflow-section"
        className="px-8 py-3 bg-transparent text-white border-2 border-white rounded-full text-lg font-semibold transition-all duration-300 hover:bg-white hover:text-[#E5B8A8]"
      >
        Book a Scan
      </a>
    </div>
  </div>

  <div className="md:w-1/2 relative z-10 animate-fade-in-right">
    <img
      src={teleradiologyImage}
      alt="Teleradiology"
      className="rounded-xl shadow-lg w-full h-auto object-cover"
    />
  </div>
</section>

      {/* Who We Help Section */}
   <section ref={addToRefs} className="py-20 section-loading" id="services-section">
  <div className="container mx-auto px-8">
    <div className="text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Who We Help</h2>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
        Our platform connects all stakeholders in the teleradiology ecosystem
      </p>
    </div>

    <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {[
        {
          icon: <FaHospitalAlt />,
          title: "Scan Centers",
          description: "Streamline appointments, intake forms, and uploads with our comprehensive dashboard",
          x: "-60px",
          y: "-30px",
        },
        {
          icon: <FaUsers />,
          title: "Patients",
          description: "Easy digital access to scan results with secure, mobile-friendly interfaces",
          x: "60px",
          y: "-30px",
        },
        {
          icon: <FaStethoscope />,
          title: "Technicians",
          description: "Fill technical data and upload DICOMs efficiently with our streamlined tools",
          x: "-40px",
          y: "30px",
        },
        {
          icon: <FaUserMd />,
          title: "Radiologists",
          description: "Securely access and report from anywhere with our advanced viewer platform",
          x: "40px",
          y: "30px",
        },
      ].map((audience, index) => (
        <div
          key={index}
          className="bg-[#F9F4EC] p-8 rounded-2xl text-center shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#E5B8A8]/20 border border-transparent hover:border-[#E5B8A8]/10 card-animate"
          style={
            {
              "--x": audience.x,
              "--y": audience.y,
            } as React.CSSProperties
          }
        >
          <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#E5B8A8] to-[#9AAE96] text-white flex items-center justify-center text-4xl">
            {audience.icon}
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">{audience.title}</h3>
          <p className="text-gray-600">{audience.description}</p>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* How It Works Section */}
      <section>
      {/* <div className="min-h-screen p-6" style={{ backgroundColor: '#f8f9f8' }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4" style={{ color: '#AEC3AE' }}>
            Medical Scan Journey Map
          </h1>
          <p className="text-lg" style={{ color: '#7a8b7a' }}>
            Follow the path from appointment to delivery
          </p>
        </div>

      
        <div className="relative w-full h-96 lg:h-[500px] bg-white rounded-2xl shadow-lg overflow-hidden border-2" style={{ borderColor: '#AEC3AE' }}>
          
        
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          
            <path
              d={routePath}
              fill="none"
              stroke="#AEC3AE"
              strokeWidth="0.8"
              strokeDasharray="2,1"
              className="animate-pulse"
            />
            
            <g stroke="#E5B8A8" strokeWidth="0.4" opacity="0.7">
            
              <path d="M 13 23 L 17 27" strokeDasharray="1,0.5" />
              <path d="M 17 23 L 13 27" strokeDasharray="1,0.5" />
              
              <path d="M 28 58 L 32 62" strokeDasharray="1,0.5" />
              <path d="M 32 58 L 28 62" strokeDasharray="1,0.5" />
              
              <path d="M 63 33 L 67 37" strokeDasharray="1,0.5" />
              <path d="M 67 33 L 63 37" strokeDasharray="1,0.5" />
              
              <path d="M 78 68 L 82 72" strokeDasharray="1,0.5" />
              <path d="M 82 68 L 78 72" strokeDasharray="1,0.5" />
              
              <path d="M 88 23 L 92 27" strokeDasharray="1,0.5" />
              <path d="M 92 23 L 88 27" strokeDasharray="1,0.5" />
            </g>

            <g fill="none" stroke="#E5B8A8" strokeWidth="0.3" opacity="0.4">
              <path d="M 5 10 Q 20 15, 25 5" strokeDasharray="1,1" />
              <path d="M 40 80 Q 55 85, 60 75" strokeDasharray="1,1" />
              <path d="M 75 15 Q 85 10, 95 20" strokeDasharray="1,1" />
            </g>
          </svg>

          {steps.map((step, index) => (
            <div
              key={step.number}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 group cursor-pointer"
              style={{
                left: `${step.position.x}%`,
                top: `${step.position.y}%`,
              }}
            >
              
              <div 
                className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg relative z-10 transition-all duration-300 group-hover:scale-110"
                style={{ backgroundColor: '#AEC3AE' }}
              >
                <div className="text-white">
                  {step.icon}
                </div>
                
                <div 
                  className="absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white"
                  style={{ backgroundColor: '#E5B8A8' }}
                >
                  {step.number}
                </div>
              </div>

              <div className="absolute top-16 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-20">
                <div 
                  className="bg-white rounded-lg shadow-xl p-4 w-56 border-2"
                  style={{ borderColor: '#AEC3AE' }}
                >
                  <div className="text-center">
                    <h3 className="font-semibold text-gray-800 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {step.description}
                    </p>
                  </div>
                  
                  <div 
                    className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-b-8 border-l-transparent border-r-transparent"
                    style={{ borderBottomColor: '#AEC3AE' }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
          <div className="absolute bottom-4 right-4 flex items-center space-x-2 text-sm" style={{ color: '#7a8b7a' }}>
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#AEC3AE' }}></div>
            <span>Follow the route</span>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-5 gap-4">
          {steps.map((step) => (
            <div 
              key={step.number}
              className="bg-white rounded-lg p-4 shadow-md border-l-4 hover:shadow-lg transition-shadow"
              style={{ borderLeftColor: step.number % 2 === 1 ? '#AEC3AE' : '#E5B8A8' }}
            >
              <div className="flex items-center mb-2">
                <div 
                  className="w-8 h-8 rounded-full flex items-center justify-center mr-3"
                  style={{ backgroundColor: '#AEC3AE' }}
                >
                  <span className="text-white text-sm font-bold">{step.number}</span>
                </div>
                <h4 className="font-semibold text-gray-800 text-sm">{step.title}</h4>
              </div>
              <p className="text-xs text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>

      </div>
    </div> */}
    <div className="min-h-screen p-8" style={{ backgroundColor: '#f8f9f8' }}>
      <div className="max-w-4xl mx-auto">
        
        <div className="text-center mb-16">
          <p className="text-lg mb-2" style={{ color: '#AEC3AE' }}>
            
          </p>
          <h1 className="text-4xl font-bold text-gray-800">
            Our Streamlined{' '}
            <span style={{ color: '#AEC3AE' }}>Workflow</span>
          </h1>
        </div>
        <div className="relative">
          <svg className="absolute inset-0 w-full h-full" style={{ height: `${steps.length * 200}px` }}>
            <path
              d="M 200 80 Q 300 120, 200 200 Q 100 280, 200 360 Q 300 440, 200 520 Q 100 600, 200 680 Q 300 760, 200 840"
              fill="none"
              stroke="#AEC3AE"
              strokeWidth="3"
              strokeDasharray="8,6"
              opacity="0.4"
            />
            {steps.map((_, index) => (
              <circle
                key={index}
                cx="200"
                cy={80 + (index * 180)}
                r="4"
                fill="#E5B8A8"
                opacity="0.6"
              />
            ))}
          </svg>

          {/* Step Cards */}
          {steps.map((step, index) => (
            <div
              key={step.number}
              className={`relative mb-12 flex ${step.side === 'left' ? 'justify-start' : 'justify-end'}`}
              style={{ minHeight: '120px' }}
            >
              <div className={`absolute top-8 z-20 ${step.side === 'left' ? 'right-4' : 'left-4'}`}>
                <div className="text-center">
                  <div className="text-sm text-gray-500 font-medium mb-1">STEP</div>
                  <div 
                    className="text-4xl font-bold"
                    style={{ color: index % 2 === 0 ? '#AEC3AE' : '#E5B8A8' }}
                  >
                    {step.number}
                  </div>
                  <div 
                    className="w-4 h-4 rounded-full mx-auto mt-2 border-4 border-white shadow-md"
                    style={{ backgroundColor: index % 2 === 0 ? '#AEC3AE' : '#E5B8A8' }}
                  ></div>
                </div>
              </div>
              <div 
                className={`rounded-full shadow-lg p-6 max-w-md ${step.side === 'left' ? 'mr-20' : 'ml-20'}`}
                style={{ 
                  backgroundColor: index % 2 === 0 ? '#AEC3AE' : '#E5B8A8',
                  minHeight: '120px'
                }}
              >
                <div className={`flex items-center ${step.side === 'left' ? 'flex-row' : 'flex-row-reverse'}`}>
                  
                  <div className="bg-white rounded-full p-4 shadow-md flex-shrink-0 mx-4">
                    <div style={{ color: index % 2 === 0 ? '#AEC3AE' : '#E5B8A8' }}>
                      {step.icon}
                    </div>
                  </div>
                  <div className={`flex-grow ${step.side === 'left' ? 'pr-4' : 'pl-4'}`}>
                    <h3 className="text-white font-bold text-lg mb-2">
                      {step.title}
                    </h3>
                    <p className="text-white opacity-90 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-4 bg-white rounded-full px-8 py-4 shadow-lg">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#AEC3AE' }}></div>
              <span className="text-sm text-gray-600">Primary Steps</span>
            </div>
            <div className="w-px h-6 bg-gray-300"></div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#E5B8A8' }}></div>
              <span className="text-sm text-gray-600">Review Steps</span>
            </div>
          </div>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl p-6 text-center shadow-md">
            <div className="text-3xl font-bold mb-2" style={{ color: '#AEC3AE' }}>5</div>
            <p className="text-gray-600">Process Steps</p>
          </div>
          <div className="bg-white rounded-2xl p-6 text-center shadow-md">
            <div className="text-3xl font-bold mb-2" style={{ color: '#E5B8A8' }}>Digital</div>
            <p className="text-gray-600">Workflow</p>
          </div>
          <div className="bg-white rounded-2xl p-6 text-center shadow-md">
            <div className="text-3xl font-bold mb-2" style={{ color: '#AEC3AE' }}>Secure</div>
            <p className="text-gray-600">Delivery</p>
          </div>
        </div>

      </div>
    </div>
  </section>
      {/* Feature Sections */}
      {featureSectionsData.map((sectionData, index) => (
        <section key={sectionData.id} ref={addToRefs} className={`py-16 section-loading ${!sectionData.imageOnRight ? 'bg-gray-100' : ''}`}>
          <div className="container mx-auto px-8">
            <div className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center`}>
              {!sectionData.imageOnRight && (
               <div className={`bg-gradient-to-br from-[#E5B8A8] to-[#9AAE96] rounded-2xl h-[300px] flex items-center justify-center text-white text-5xl relative overflow-hidden slide-in-right 
    transition duration-300 transform hover:scale-105 hover:shadow-2xl hover:ring-4 hover:ring-white/40`}
>
                  {sectionData.imageIcon}
                </div>
              )}
              <div className={sectionData.imageOnRight ? "slide-in-left" : "slide-in-right"}>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{sectionData.title}</h2>
                <p className="text-gray-700">{sectionData.description}</p>
                <ul className="mt-8 space-y-4">
                  {sectionData.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#9AAE96] text-white flex items-center justify-center text-sm font-bold">
                        <FaCheckCircle />
                      </span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              {sectionData.imageOnRight && (
                <div className="bg-gradient-to-br from-[#E5B8A8] to-[#9AAE96] rounded-2xl h-[300px] flex items-center justify-center text-white text-5xl relative overflow-hidden slide-in-right">
                  {/* <div className="absolute inset-0 bg-white/10 [mask-image:url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="20" cy="20" r="2" fill="rgba(255,255,255,0.2)"/><circle cx="80" cy="20" r="1.5" fill="rgba(255,255,255,0.15)"/><circle cx="50" cy="50" r="2.5" fill="rgba(255,255,255,0.1)"/><circle cx="20" cy="80" r="1" fill="rgba(255,255,255,0.2)"/><circle cx="80" cy="80" r="2" fill="rgba(255,255,255,0.15)"/></svg>')]" style={{ animation: 'float 6s ease-in-out infinite' }}></div> */}
                  {sectionData.imageIcon}
                </div>
              )}
            </div>
          </div>
        </section>
      ))}

      {/* Security & Compliance Section */}
      <section ref={addToRefs} className="py-20 section-loading" id="security-section">
        <div className="container mx-auto px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Security & Compliance</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Your data security is our top priority with enterprise-grade protection</p>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {securityFeatures.map((feature, index) => (
              <div key={index} className="bg-[#F9F4EC] p-6 rounded-xl text-center border-2 border-[#E5B8A8]/10 transition-all duration-300 hover:border-[#E5B8A8] hover:transform hover:-translate-y-1 loading-child">
                <div className="text-4xl text-gray-700 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-1">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section ref={addToRefs} className="py-20 bg-gray-900 text-white section-loading" id="testimonials-section">
        <div className="container mx-auto px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">What Our Users Say</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">Trusted by healthcare professionals worldwide</p>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 p-8 rounded-xl backdrop-blur-md loading-child">
                <p className="italic text-lg text-gray-200 mb-4">"{testimonial.text}"</p>
                <p className="font-semibold text-[#E5B8A8]">{testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Call to Action Section */}
      <section className="bg-[#E5B8A8] text-white py-20 text-center" id="contact-section">
        <div className="container mx-auto px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Radiology Practice?</h2>
          <p className="text-lg mb-8 opacity-90">Join thousands of healthcare professionals already using MediScan</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="#" className="px-8 py-3 bg-white text-[#E5B8A8] rounded-full text-lg font-semibold transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-xl hover:shadow-[#E5B8A8]/30">
              Book Demo
            </a>
            <a href="#" className="px-8 py-3 bg-transparent text-white border-2 border-white rounded-full text-lg font-semibold transition-all duration-300 hover:bg-white hover:text-[#E5B8A8]">
              Schedule a Call
            </a>
            <a href="#" className="px-8 py-3 bg-transparent text-white border-2 border-white rounded-full text-lg font-semibold transition-all duration-300 hover:bg-white hover:text-[#E5B8A8]">
              Contact Us
            </a>
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default Teleradiology;