import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-10">
      <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        <div>
          <h2 className="text-2xl font-bold mb-4">HungerMithra 🍔</h2>
          <p className="text-gray-400">
            Delicious food delivered at your doorstep. Order now and enjoy
            freshly made meals anytime, anywhere!
          </p>
        </div>

       
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-300">
            <li>
              <Link to="/" className="hover:text-yellow-400">
                Home
              </Link>
            </li>
            <li>
              <Link to="/cart" className="hover:text-yellow-400">
                Cart
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-yellow-400">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-yellow-400">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-yellow-400" aria-label="Facebook">
              
              <FaFacebook size={24} />
            </a>
            <a href="#" className="hover:text-yellow-400" aria-label="Instagram">
              
              <FaInstagram size={24} />
            </a>
            <a href="#" className="hover:text-yellow-400" aria-label="Twitter">
              
              <FaTwitter size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="text-center border-t border-gray-700 py-4 text-gray-400">
        © {new Date().getFullYear()} HungerMithra. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;