import { Link } from "react-router-dom";
import logo from "../../assets/logowell.jpg";
import { FaInstagram, FaFacebook, FaMapMarkerAlt, FaEnvelope, FaClock } from "react-icons/fa";
import { IoCall } from "react-icons/io5";

export default function Footer() {
  return (
    <footer className="bg-[#9AAE96] text-[#FFA377] py-12 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-y-12 md:gap-x-16">
        {/* Left Section - Logo & About */}
        <div>
          <div className="flex items-center mb-4">
            <img src={logo} alt="Logo" className="h-[72px]" />
          </div>
          <p className="text-white text-sm leading-relaxed">
            Our family-centered approach to healthcare ensures that each member
            of your family receives personalized attention.
          </p>
          <div className="flex gap-4 mt-6 text-[#E5B8A8]">
            <a
              href="https://www.instagram.com/medpredit/?utm_source=ig_web_button_share_sheet"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook size={20} />
            </a>
          </div>
        </div>

        {/* Middle Section - Quick Links */}
        <div>
          <h3 className="text-xl text-[#E5B8A8] font-semibold mb-6">Quick Links</h3>
          <ul className="text-white text-sm space-y-3">
            <li><Link to="/home#home" className="hover:text-[#E5B8A8]">Home</Link></li>
            <li><Link to="/home#about" className="hover:text-[#E5B8A8]">About Us</Link></li>
            <li className="font-semibold">Services</li>
            <ul className="ml-4 space-y-2 text-sm">
              <li><Link to="/functional" className="hover:text-[#E5B8A8]">Functional Medicine</Link></li>
              <li><Link to="/teleradiology" className="hover:text-[#E5B8A8]">Teleradiology</Link></li>
            </ul>
            <li><Link to="/home#pages" className="hover:text-[#E5B8A8]">Blogs</Link></li>
            <li><Link to="/home#contact" className="hover:text-[#E5B8A8]">Contact Us</Link></li>
            {/* <li><Link to="/terms#terms" className="hover:text-[#F7A582]">Terms & Refund Policy</Link></li>
            <li><Link to="/privacy-policy#privacy" className="hover:text-[#F7A582]">Privacy Policy</Link></li> */}
          </ul>
        </div>

        {/* Right Section - Contact Details */}
        <div>
          <h3 className="text-xl text-[#E5B8A8] font-semibold mb-6">Contact Details</h3>
          <ul className="text-white text-sm space-y-4">
            <li className="flex items-start gap-2">
              <FaMapMarkerAlt className="text-[#E5B8A8] mt-1 text-xl" />
              <span>
                ZAdroit IT Solutions Private Limited,<br />
                38/37B, Logi Chetty Street No. 1,<br />
                Logi Street, Gugai, Salem, Tamil Nadu 636006
              </span>
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-[#E5B8A8]" />
              info@zadroit.com
            </li>
            <li className="flex items-center gap-2">
              <FaClock className="text-[#E5B8A8]" />
              9.30 AM - 6.30 PM, Mon–Fri
            </li>
            <li className="flex items-center gap-2">
              <IoCall className="text-[#E5B8A8]" />
              0427-356-2462
            </li>
          </ul>
        </div>
      </div>

      {/* Divider & Copyright */}
      <hr className="border-[#FFA377] my-6" />
      <p className="text-center text-white">
        Copyright 2025 © <span className="text-[#E5B8A8]">Wellthgreen</span> All Rights Reserved.
      </p>
    </footer>
  );
}
