import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About Section */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold">About Us</h2>
          <p className="text-sm">
            Our platform is dedicated to connecting tech enthusiasts and
            professionals, helping them grow and thrive in the tech industry.
          </p>
        </div>

        {/* Quick Links Section */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold">Quick Links</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/about" className="hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="/services" className="hover:underline">
                Services
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:underline">
                Contact
              </a>
            </li>
            <li>
              <a href="/privacy" className="hover:underline">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold">Contact Us</h2>
          <p className="text-sm">1234 Tech Avenue, Nairobi, Kenya</p>
          <p className="text-sm">Email: info@techconnect.com</p>
          <p className="text-sm">Phone: +254 700 000 000</p>
          <div className="flex space-x-4 mt-4">
            <a
              href="https://facebook.com"
              className="text-gray-400 hover:text-white"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://twitter.com"
              className="text-gray-400 hover:text-white"
            >
              <FaTwitter />
            </a>
            <a
              href="https://instagram.com"
              className="text-gray-400 hover:text-white"
            >
              <FaInstagram />
            </a>
            <a
              href="https://linkedin.com"
              className="text-gray-400 hover:text-white"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-400">
        <p>
          &copy; {new Date().getFullYear()} Tech Connect. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
