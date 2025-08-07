import React, { useEffect, useState } from 'react';
import doctor from '../../assets/Functional/doctor1.webp';
import { motion } from 'framer-motion';
import logo from '../../assets/Functional/doctor.webp';
import { FaYoutube } from 'react-icons/fa';
import { ChevronDown, ChevronUp } from 'lucide-react';

type SectionCardProps = {
  title: string;
  description: string;
  img: string;
};

interface FAQItemProps {
  question: string;
  answer: string;
}

interface Testimonial {
  name: string;
  text: string;
  date: string;
  initial: string;
  color: string;
  image: string | null;
}

const testimonials = [
  {
    name: "Sarah Johnson",
    text: "Amazing service! The team went above and beyond to exceed our expectations. Highly recommend!",
    date: "2 weeks ago",
    initial: "S",
    color: "bg-purple-500",
    image: null
  },
  {
    name: "Mike Chen",
    text: "Professional, reliable, and outstanding results. Will definitely use their services again.",
    date: "1 month ago",
    initial: "M",
    color: "bg-blue-500",
    image: null
  },
  {
    name: "Emma Davis",
    text: "Exceptional quality and customer service. They made the entire process smooth and enjoyable.",
    date: "3 weeks ago",
    initial: "E",
    color: "bg-pink-500",
    image: null
  },
  {
    name: "Robert Wilson",
    text: "Top-notch professionalism and attention to detail. Couldn't be happier with the results!",
    date: "2 months ago",
    initial: "R",
    color: "bg-green-500",
    image: null
  },
  {
    name: "Lisa Anderson",
    text: "Outstanding experience from start to finish. The team is incredibly talented and dedicated.",
    date: "1 week ago",
    initial: "L",
    color: "bg-indigo-500",
    image: null
  }
];

const faqs: FAQItemProps[] = [
  {
    question: 'What is Functional, Lifestyle, and Integrative Medicine?',
    answer:
      'This approach is a holistic, patient-centered model of healthcare that combines conventional medicine with evidence-based alternative therapies, focusing on treating the root causes of illness rather than just symptoms.',
  },
  {
    question: 'How does this approach differ from conventional medicine?',
    answer:
      'Unlike conventional medicine, which often focuses on symptom management, this approach seeks to identify and address underlying health issues, incorporating lifestyle, environmental, and holistic strategies for overall wellness.',
  },
  {
    question: 'What can I expect during my first consultation?',
    answer:
      'Expect a comprehensive evaluation of your medical history, lifestyle, diet, and environmental factors. The practitioner will aim to understand your unique health needs and develop a personalized care plan.',
  },
  {
    question:
      'Are Functional, Lifestyle, and Integrative Medicine practices evidence-based?',
    answer:
      'Yes, this approach combines the best of conventional medicine with alternative therapies that are supported by scientific research and clinical evidence.',
  },
];

const FAQItem = ({ question, answer }: FAQItemProps) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-[#f9f9f9] p-4 rounded-xl shadow-sm transition-all duration-300 border border-gray-200">
      <button
        className="w-full flex justify-between items-center text-left"
        onClick={() => setOpen(!open)}
      >
        <h4 className="font-semibold text-gray-900">{question}</h4>
        {open ? (
          <ChevronUp className="text-[#9AAE96]" />
        ) : (
          <ChevronDown className="text-[#9AAE96]" />
        )}
      </button>
      {open && <p className="mt-3 text-gray-700">{answer}</p>}
    </div>
  );
};

const SectionCard = ({ title, description, img }: SectionCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
    className="flex flex-col items-center bg-[#9AAE96]/10 rounded-2xl p-6"
  >
    <div className="w-60 h-60 rounded-full overflow-hidden mb-4">
      <img src={img} alt={title} className="w-full h-full object-cover" />
    </div>
    <h3 className="text-2xl font-bold mb-3">{title}</h3>
    <p className="text-center text-gray-700 mb-4">{description}</p>
    <button className="text-[#9AAE96] font-semibold underline">Show More</button>
  </motion.div>
);

const Functional = () => {
  // All hooks must be declared at the top of the component
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // All functions should be defined inside the component
  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const nextSlide = () => {
    setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1);
  };

  const prevSlide = () => {
    setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1);
  };

  // Effects should be declared after state and functions
  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        );
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [isHovered, currentIndex]);

  return (
    <div className="bg-[#E5B8A8] text-gray-800">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row min-h-screen bg-[#1e1e1e] text-white">
        <motion.div
          className="w-full md:w-1/2 h-96 md:h-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut', repeatType: 'reverse' }}
        >
          <img src={logo} alt="Creative Portfolio" className="object-cover w-full h-full" />
        </motion.div>

        <motion.div
          className="w-full bg-[#CDE0CD] md:w-1/2 flex items-center justify-center p-10 md:p-20"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        >
          <div className="text-center px-4 md:px-10 lg:px-20">
            <h2 className="text-sm md:text-base uppercase tracking-widest text-gray-800 mb-4">
              Welcome
            </h2>
            <p className="text-2xl md:text-4xl lg:text-5xl font-bold text-black leading-snug mb-6">
              Futuristic Medicine.<br />Integrative Wellness.<br />Virtual Consultation.
            </p>
            <p className="text-base md:text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
              A novel approach to wellness and longevity looking at the root causes with precision diagnostics targeting optimal function.
            </p>
            <button className="bg-black text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-800 transition duration-300">
              BOOK APPOINTMENT
            </button>
            <p className="mt-6 text-gray-800 font-medium">
              Dr. Mythri Shankar, M.D. – Nuclear Radiologist
            </p>
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="py-16 px-6 md:px-20 bg-[#FDFDFC]">
        <h2 className="text-4xl font-bold text-center mb-12">
          Dr. Mythri Shankar, M.D. Nuclear Radiologist
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <SectionCard
            title="Mission"
            description="An apple a day keeps the doctor away. Dr. Mythri Shankar leverages 30 years of experience across the US and India to champion wellness through Functional, Lifestyle, and Integrative Medicine."
            img={doctor}
          />
          <SectionCard
            title="Ethos"
            description="A holistic and personalized model that prioritizes individual care, integrating Ayurvedic and evidence-based systems to support long-term balance and vitality."
            img={doctor}
          />
          <SectionCard
            title="Services"
            description="Comprehensive care: individualized planning, root cause resolution, lab testing, education, empowerment, and sustainable health strategies."
            img={doctor}
          />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-6 md:px-20 bg-white">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="flex justify-center">
            <img src={doctor} alt="FAQ visual" className="w-full max-w-md rounded-xl" />
          </div>
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Frequently asked <span className="text-[#9AAE96]">Questions</span>
            </h2>
            <p className="text-gray-600 mb-8">
              Learn more about Functional, Lifestyle, and Integrative Medicine, and what you can expect from our approach.
            </p>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <FAQItem key={index} question={faq.question} answer={faq.answer} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* YouTube Section */}
      <section className="py-16 px-6 md:px-20 bg-[#F5F8F3]">
        <div className="max-w-4xl mx-auto text-center">
          <a
            href="https://www.youtube.com/watch?v=SqdYJ0aleSA&t=21s"
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-block group mb-8"
          >
            <img
              src="https://img.youtube.com/vi/SqdYJ0aleSA/maxresdefault.jpg"
              alt="What is Integrative Medicine?"
              className="rounded-lg shadow-md w-full"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <FaYoutube className="text-white text-6xl bg-red-600 rounded-full p-2 group-hover:scale-110 transition-transform duration-300" />
            </div>
          </a>
          <h2 className="text-3xl font-bold text-[#4A5A47] mb-4">What is Integrative Medicine?</h2>
          <p className="text-gray-700 text-lg">
            Integrative, Lifestyle, and Functional Medicine is a holistic and patient-centered approach that blends modern medical practices with evidence-based traditional healing. Dr. Mythri Shankar, MD (USA), leverages decades of experience to empower your health journey.
          </p>
        </div>
      </section>

      {/* Testimonials */}
      <section 
        className="relative py-16 px-4 md:px-20 overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        {/* Background pattern overlay */}
        <div className="absolute inset-0 opacity-20">
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: `url('data:image/svg+xml,${encodeURIComponent(`
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                  <circle cx="20" cy="20" r="2" fill="rgba(255,255,255,0.3)"/>
                  <circle cx="80" cy="40" r="1.5" fill="rgba(255,255,255,0.2)"/>
                  <circle cx="40" cy="70" r="2" fill="rgba(255,255,255,0.25)"/>
                  <circle cx="90" cy="90" r="1" fill="rgba(255,255,255,0.3)"/>
                  <circle cx="10" cy="50" r="1.5" fill="rgba(255,255,255,0.2)"/>
                </svg>
              `)}')`
            }}
          />
        </div>

        <div className="relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
              Read Our Rave Reviews
            </h2>
            <p className="text-xl text-gray-200 flex items-center justify-center gap-2">
              <span>Google rating:</span>
              <span className="text-yellow-400">⭐ 5.0</span>
              <span className="text-gray-300">(7 Reviews)</span>
            </p>
          </div>

          <div 
            className="relative max-w-6xl mx-auto"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Carousel container */}
            <div className="overflow-hidden rounded-2xl">
              <div 
                className="flex transition-all duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {testimonials.map((review, idx) => (
                  <div key={idx} className="w-full flex-shrink-0 px-4">
                    <a
                      href="https://www.google.com/maps?cid=16371058459784652550"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block group"
                    >
                      <div className="bg-[#CDE0CD]/95 backdrop-blur-sm shadow-2xl rounded-2xl p-8 text-center transform group-hover:scale-105 transition-all duration-300 border border-white/20">
                        <div className="mb-6">
                          {review.image ? (
                            <img
                              src={review.image}
                              alt="avatar"
                              className="w-20 h-20 rounded-full object-cover mx-auto shadow-lg"
                            />
                          ) : (
                            <div
                              className={`w-20 h-20 flex items-center justify-center rounded-full text-white text-2xl font-bold mx-auto shadow-lg ${review.color} transform group-hover:rotate-12 transition-transform duration-300`}
                            >
                              {review.initial}
                            </div>
                          )}
                        </div>
                        
                        <div className="text-yellow-500 text-2xl mb-4 animate-pulse">
                          ★★★★★
                        </div>
                        
                        <p className="text-gray-700 text-lg mb-6 leading-relaxed italic">
                          "{review.text}"
                        </p>
                        
                        <div className="text-green-600 font-semibold mb-4 group-hover:text-green-700 transition-colors duration-300">
                          Read full review →
                        </div>
                        
                        <div className="text-gray-500 border-t border-gray-200 pt-4">
                          <p className="font-medium text-gray-700">{review.name}</p>
                          <p className="text-sm">{review.date}</p>
                        </div>
                      </div>
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110 z-20"
              aria-label="Previous testimonial"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110 z-20"
              aria-label="Next testimonial"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Dots indicator */}
            <div className="flex justify-center mt-8 space-x-3">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => goToSlide(idx)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    idx === currentIndex 
                      ? 'bg-white scale-125 shadow-lg' 
                      : 'bg-white/50 hover:bg-white/70'
                  }`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Progress bar */}
          <div className="max-w-6xl mx-auto mt-6">
            <div className="w-full bg-white/20 rounded-full h-1">
              <div 
                className="bg-white h-1 rounded-full transition-all duration-300"
                style={{ width: `${((currentIndex + 1) / testimonials.length) * 100}%` }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* TEDx and Imaging */}
      <section className="py-16 px-6 md:px-20">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">TEDx Talk: Revolutionizing Health</h2>
        <p>
          Discover a transformative perspective on wellness and disease reversal in Dr. Mythri Shankar's TEDx talk. Dive into the principles of Functional, Lifestyle, and Integrative Medicine, blending personal insights and clinical experience. Learn how lifestyle modifications and holistic practices reverse chronic diseases and redefine health.
        </p>
        <p className="mt-4 font-semibold">
          Click the link to watch, learn, and transform your approach to health!
        </p>
      </section>

      <section className="py-16 px-6 md:px-20 bg-[#F5F5F5]">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Functional Imaging – Nuclear Medicine</h2>
        <p>
          Nuclear Medicine includes functional imaging and theranostics, enabling both diagnosis and treatment. Functional imaging (e.g., PET and SPECT scans) shows how organs work, not just how they look. Theranostics combines imaging and targeted treatment, especially effective in cancer care, using radiopharmaceuticals to personalize therapy and diagnosis.
        </p>
      </section>
    </div>
  );
};

export default Functional;