import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

import "./Home.css"; // optional

import img1 from "../../assets/Home/home1.jpg";
import img2 from "../../assets/Home/home2.webp";
import img3 from "../../assets/Home/home2.jpg";
// import type { Variants } from "framer-motion";
const images = [img1, img2, img3];

const Home = () => {
  const [[current, direction], setCurrent] = useState([0, 0]);
  const slideInVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeOut" } },
  };
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(([prev]) => [(prev + 1) % images.length, 1]);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 1 },
    },
    exit: (direction) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      transition: { duration: 1 },
    }),
  };
  const handleClick = () => {
    const to = "soniyateddy9791@gmail.com";
    const subject = encodeURIComponent(`Inquiry from ${name}`);

    const body = encodeURIComponent(
      `Dear Zadroit Team,\n\n` +
      `I hope this message finds you well.\n\n` +
      `${description}\n\n` +
      `Email : ${email}\n` +
      `Mobile Number : ${phone}\n\n` +
      `Best regards,\n` +
      `${name}\n` +
      `${phone}`
    );

    const mailtoLink = `mailto:${to}?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;
  };

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [description, setDescription] = useState('');
  return (
    <div className="w-full">
      {/* --------- Slider Section --------- */}
      <div id="home" className="relative h-screen overflow-hidden ">
        {/* Image Slider */}
        <div className="absolute inset-0 z-0">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={current}
              className="absolute w-full h-full bg-cover bg-center"
              style={{
                backgroundImage: `url(${images[current]})`,
              }}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
            />
          </AnimatePresence>
        </div>

        {/* Overlay Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center text-white bg-black/40">
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-sm uppercase tracking-widest"
          >
            BEST SERVICE GOOD HEALTH
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-4xl md:text-5xl font-bold leading-tight mt-4"
          >
            Expert <span className="text-cyan-400">medical</span> <br />
            care for good <span className="text-cyan-400">health</span>
          </motion.h1>

          <motion.div
            className="mt-8 flex space-x-4 flex-wrap justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2 rounded-md shadow-lg transition">
              Get Started
            </button>
            <button className="bg-white text-cyan-600 px-6 py-2 rounded-md shadow-lg transition hover:bg-gray-100">
              Learn More
            </button>
          </motion.div>
        </div>
      </div>

      {/* --------- Why Choose Us Section --------- */}
      <div id="about" className="bg-[#AEC3AE] py-12 px-6 md:px-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="flex justify-center"
          >
            <img
              src={img3}
              alt="Why Choose Us"
              className="rounded-lg shadow-lg max-w-full h-auto"
            />
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2 }}
          >
            <p className="text-teal-700 font-semibold mb-2 uppercase">
              Why Choose Us
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Best medical & <br /> health care services
            </h2>
            <p className="text-gray-800 mb-6 leading-relaxed">
              Offering confined entrance no. Nay rapturous him see something
              residence. Highly talked do so vulgar. Her use behaved spirits
              and natural attempt say feeling. Exquisite mr incommode immediate
              he something ourselves it of. Law conduct yet chiefly beloved.
            </p>

            {/* Feature 1 */}
            <div className="flex items-start space-x-4 mb-4">
              <FaCheckCircle className="text-teal-600 text-xl mt-1" />
              <div>
                <h4 className="text-lg font-semibold text-gray-900">
                  Qualified Facilities
                </h4>
                <p className="text-gray-800">
                  Consider may dwelling old him her surprise finished families
                  graceful. Gave led past poor met fine was new.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex items-start space-x-4">
              <FaCheckCircle className="text-teal-600 text-xl mt-1" />
              <div>
                <h4 className="text-lg font-semibold text-gray-900">
                  Dedicated Patient Care
                </h4>
                <p className="text-gray-800">
                  Believing neglected so so allowance existence departure in.
                  Injustice sentiments nor occasional.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
        {/* ---------------------------------------------------- */}
        <section id="services" how-it-works className="bg-[#F3F4F6] mt-20 py-16 px-6 md:px-10">
          <div className="max-w-6xl mx-auto">
            {/* Section Heading */}
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-center mb-12"
            >
              <h3 className="text-xl md:text-2xl font-bold text-[#16A085] uppercase tracking-widest">
                Seamless Health Management
              </h3>
              <h2 className="text-3xl md:text-4xl lg:text-5xl mt-4 font-bold text-[#07332F]">
                How Wellthgreen Works for You
              </h2>
              <p className="mt-4 text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
                Wellthgreen offers a connected, intelligent health platform — from
                scanning to family care — designed for your convenience.
              </p>
            </motion.div>

            {/* Process Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {/* Card 1 */}
              <motion.div
                className="bg-white p-8 rounded-lg shadow-md hover:bg-[#E5B8A8] transition duration-300 text-center group"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6 }}
              >
                <img
                  src="/icons/scan.svg"
                  alt="Scan Reports"
                  className="w-16 h-16 mx-auto mb-4 group-hover:brightness-0 group-hover:invert"
                />
                <h4 className="text-xl font-semibold text-[#16A085] mb-2 group-hover:text-white">
                  Scan Reports & Upload
                </h4>
                <p className="text-gray-700 group-hover:text-white">
                  Upload your diagnostic or lab reports easily. AI helps you interpret your scans with insights & visual graphs.
                </p>
              </motion.div>


              {/* Card 2 */}
              <motion.div
                className="bg-white p-8 rounded-lg shadow-md hover:bg-[#E5B8A8] transition duration-300 text-center group"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6 }}
              >
                <img
                  src="/icons/connect.svg"
                  alt="Connect Centers"
                  className="w-16 h-16  mx-auto mb-4 group-hover:brightness-0 group-hover:invert"
                />
                <h4 className="text-xl font-semibold text-[#16A085] mb-2">
                  Connect with Scan Centers
                </h4>
                <p className="text-gray-700">
                  Book scans or health checks directly via partnered scan centers.
                  Real-time integration ensures zero wait-time & verified results.
                </p>
              </motion.div>

              {/* Card 3 */}
              <motion.div
                className="bg-white p-8 rounded-lg shadow-md hover:bg-[#E5B8A8] transition duration-300 text-center group"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6 }}
              >
                <img
                  src="/icons/family.svg"
                  alt="360 Health View"
                  className="w-16 h-16  mx-auto mb-4 group-hover:brightness-0 group-hover:invert"
                />
                <h4 className="text-xl font-semibold text-[#16A085] mb-2">
                  360° Family Health
                </h4>
                <p className="text-gray-700">
                  View and manage medical data for your entire family. Stay informed
                  with periodic health summaries, alerts & doctor advice.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
      {/* -------------------------- */}
      <section
        id="contact"
        className="relative bg-cover bg-center py-16 px-6"
        style={{
          backgroundImage: `url(${img3})`,
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h2 className="text-3xl font-bold text-white text-center mb-10">
          Get in Touch
        </h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={slideInVariants}
          className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 rounded-2xl overflow-hidden shadow-2xl backdrop-blur-md bg-white/10 border border-white/30"
        >
          {/* LEFT - Contact Info */}
          <div className="bg-[#E5B8A8] text-white p-10 flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-4">Contact Us</h3>
            <p className="mb-4 leading-relaxed">
              📍 32, Avenue ve Newyork<br />
              321994 Newyork
            </p>
            <p className="mb-2">✉️ hello@loremipsum.com</p>
            <p className="mb-2">📞 +3356 1589 2105</p>
            <p className="mb-2">☎️ +3356 1589 2100</p>
          </div>

          {/* RIGHT - Glass Form */}
          <div className="p-8">
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full p-3 bg-white/30 text-white placeholder-white border border-white/30 rounded focus:outline-none focus:ring-2 focus:ring-[#E5B8A8]"
                />
                <input
                  type="text"
                  placeholder="Phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full p-3 bg-white/30 text-white placeholder-white border border-white/30 rounded focus:outline-none focus:ring-2 focus:ring-[#E5B8A8]"
                />
              </div>

              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 bg-white/30 text-white placeholder-white border border-white/30 rounded focus:outline-none focus:ring-2 focus:ring-[#E5B8A8]"
              />

              <textarea
                rows={4}
                placeholder="Your Message"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full p-3 bg-white/30 text-white placeholder-white border border-white/30 rounded focus:outline-none focus:ring-2 focus:ring-[#E5B8A8]"
              ></textarea>

              <button
                onClick={handleClick}
                className="px-6 py-3 bg-transparent border-2 border-[#E5B8A8] text-[#E5B8A8] rounded-full font-semibold hover:bg-white hover:text-[#E5B8A8] transition duration-300"
              >
                Send
              </button>
            </form>
          </div>
        </motion.div>
      </section>


    </div>
  );
};

export default Home;
