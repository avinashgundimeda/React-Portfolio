import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#fafafa] border-t">
      {/* CENTERED CONTAINER */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        
        <div className="flex flex-col md:flex-row justify-between gap-12 text-gray-600">

          {/* COLUMN 1 */}
          <div className="max-w-xs">
            <h2 className="text-lg font-semibold text-gray-900 mb-2">Avinash Gundimeda</h2>
            <p className="text-sm leading-relaxed">
              Frontend Developer | Cybersecurity Student <br /> Game Developer<br />
              "If you want to shine like sun first you have to burn like it" <br /> ― Adolf Hitler
            </p>
          </div>

          {/* COLUMN 2 */}
          <div>
            <h3 className="font-medium text-gray-900 text-sm mb-2">Navigation</h3>
            <div className="flex flex-col gap-1 text-sm">
              <Link className="hover:text-gray-900" to="/">Home</Link>
              <Link className="hover:text-gray-900" to="/about">About</Link>
              <Link className="hover:text-gray-900" to="/projects">Projects</Link>
              <Link className="hover:text-gray-900" to="/contact">Contact</Link>
            </div>
          </div>

          {/* COLUMN 3 */}
          <div>
            <h3 className="font-medium text-gray-900 text-sm mb-2">Connect</h3>
            <div className="flex gap-4 text-lg">
              <a href="https://www.linkedin.com/in/avinash-gundimeda/">
              <i className="bx bxl-linkedin hover:text-gray-900 cursor-pointer"></i>
              </a>
              <a href="https://twitter.com/avinash_2006/">
              <i className="bx bxl-twitter hover:text-gray-900 cursor-pointer"></i>
              </a>
              <a href="https://www.instagram.com/avinash_2006/">
              <i className="bx bxl-instagram hover:text-gray-900 cursor-pointer"></i>
              </a>
            </div>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="border-t mt-12 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 gap-4">
          <p>© {new Date().getFullYear()} Avinash Gundimeda. All rights reserved.</p>
          <p className="text-xs">Designed & Built by Avinash..</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
