import React from "react";
import {
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
// import logo from '../assets/Image/logoremovebg.png'

const Footer = () => {
  return (
    <footer className="bg-[#716A5C] text-white pt-16 pb-6">
      <div className="max-w-7xl mx-auto px-6">

        {/* Top Section */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8">
          {/* <h2 className="text-4xl font-bold">LOGO</h2> */}
             {/* <img src={logo} className="h-[50px]"/> */}
             <div className="text-3xl text-white tracking-tighter">
                    Ramot<span className="text-yellow-400 font-normal">LMS</span>
                </div>

          <div className="flex gap-4">
            {[FaFacebookF, FaInstagram, FaTiktok, FaYoutube, FaXTwitter].map(
              (Icon, index) => (
                <div
                  key={index}
                  className="w-10 h-10 border border-white rounded-full flex items-center justify-center hover:bg-white hover:text-[#7c7466] transition cursor-pointer"
                >
                  <Icon size={16} />
                </div>
              )
            )}
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Column 1 */}
          <div>
            <h3 className="font-semibold text-(--text-secondary) mb-4">Quick Links</h3>
            <ul className="space-y-3 text-sm text-(--text-secondary)">
              <li className="hover:text-white cursor-pointer">Home</li>
              <li className="hover:text-white cursor-pointer">About Us</li>
              <li className="hover:text-white cursor-pointer">Services</li>
              <li className="hover:text-white cursor-pointer">Jobs Abroad</li>
              <li className="hover:text-white cursor-pointer">Recruitment</li>
            </ul>

            <div className="flex gap-3 mt-6 text-sm text-gray-200">
              <FaPhoneAlt className="mt-1" />
              <div>
                <p className="text-sm text-gray-300">Tel</p>
                <p>99-XXXX-XXXX</p>
              </div>
            </div>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="font-semibold text-(--text-secondary) mb-4">Company</h3>
            <ul className="space-y-3 text-sm text-(--text-secondary)">
              <li className="hover:text-white cursor-pointer">Gallery</li>
              <li className="hover:text-white cursor-pointer">Contact Us</li>
              <li className="hover:text-white cursor-pointer">Privacy Policy</li>
              <li className="hover:text-white cursor-pointer">Terms of Service</li>
              <li className="hover:text-white cursor-pointer">Refund Policy</li>
            </ul>

            <div className="flex gap-3 mt-6 text-sm text-gray-200">
              <FaEnvelope className="mt-1" />
              <div>
                <p className="text-sm text-gray-300">Mail</p>
                <p>hello@xyzdfd.com</p>
              </div>
            </div>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="font-semibold text-(--text-secondary) mb-4">Explore</h3>
            <ul className="space-y-3 text-sm text-(--text-secondary)">
              <li className="hover:text-white cursor-pointer">
                Overseas Recruitment
              </li>
              <li className="hover:text-white cursor-pointer">
                Visa Stamping & Assistance
              </li>
              <li className="hover:text-white cursor-pointer">
                Emigration & PCC Services
              </li>
              <li className="hover:text-white cursor-pointer">
                Document Attestation & Apostille
              </li>
            </ul>
            <div className="flex gap-3 mt-6 text-sm text-gray-200">
              <FaMapMarkerAlt className="mt-1" />
              <div>
                <p className="text-sm text-gray-300">Address</p>
                <p>
                  ftyfyerghf - hdgj23435b <br />
                  bjhdbgjnvjhfjhgfhjghjgj
                </p>
              </div>
            </div>



          </div>


        </div>

        {/* Bottom */}
        <div className="border-t border-gray-400 mt-12 pt-6 text-center text-sm text-gray-200">
        LMS © 2025 | All Rights Reserved
        </div>

      </div>
    </footer>
  );
};

export default Footer;