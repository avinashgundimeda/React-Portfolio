import React from "react";

import { useState, useEffect } from "react";
import animate from "../assets/animate.png";

const Contact = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="min-h-screen bg-[#fafafa] font-sans selection:bg-teal-100">
        <nav className="fixed top-0 w-full z-50 flex justify-center pointer-events-none">
          <div className="w-full max-w-6xl px-8 flex items-center justify-between h-20">
            {/* Morphing Image Container */}
            <div
              className={`transition-opacity duration-300 pointer-events-auto ${isScrolled ? "opacity-100" : "opacity-0"} hidden md:block`}
            >
              <img
                src={animate}
                alt="Avatar"
                className="w-16 h-16 rounded-full border-2 border-white mt-5"
              />
            </div>
            {/* Spacer for symmetry */}
          </div>
        </nav>

        <div className="min-h-screen bg-[#fafafa] flex justify-center">
          <div className="w-full max-w-6xl bg-white px-8 py-24">
            {/* Header */}
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-4">
              Let’s Connect
            </h1>

            <p className="text-gray-600 max-w-2xl leading-relaxed mb-12">
              Whether you have a question, a collaboration idea, or just want to
              say hi — my inbox is always open. I enjoy connecting with
              developers, content creators, and teams working on meaningful
              products.
            </p>

            {/* Contact Blocks */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
              <div className="space-y-1">
                <h3 className="text-sm font-semibold text-gray-900">Email</h3>
                <p className="text-sm text-gray-700">
                  avinashgundimeda@gmail.com
                </p>
              </div>

              <div className="space-y-1">
                <h3 className="text-sm font-semibold text-gray-900">
                  Location
                </h3>
                <p className="text-sm text-gray-700">India (Remote Friendly)</p>
              </div>

              <div className="space-y-1">
                <h3 className="text-sm font-semibold text-gray-900">
                  Availability
                </h3>
                <p className="text-sm text-gray-700">
                  Open for freelance work & collaborations
                </p>
              </div>
            </div>

            {/* Social Links */}
            <div className="mb-20">
              <h3 className="text-sm font-semibold text-gray-900 mb-3">
                Social
              </h3>
               <div className="flex gap-5 text-xl text-zinc-400 ml-4">
                  <a href="https://www.linkedin.com/in/avinash-gundimeda/">
                    <i className="bx bxl-linkedin hover:text-teal-600 transition-colors"></i>
                  </a>
                  <a href="https://github.com/avinashgundimeda">
                    <i className="bx bxl-github hover:text-teal-600 transition-colors"></i>
                  </a>
                  {/* <a href="https://leetcode.com/">
                    <SiLeetcode className="hover:text-teal-600 transition-colors" />
                  </a> */}
                  <a href="https://twitter.com/avinash_2006">
                    <i className="bx bxl-twitter hover:text-teal-600 transition-colors"></i>
                  </a>
                  <a href="https://www.reddit.com/user/avinash_2006/">
                    <i className="bx bxl-reddit hover:text-teal-600 transition-colors"></i>
                  </a>
                </div>
            </div>

            {/* Contact Form */}
            <form className="space-y-6 max-w-xl">
              <div>
                <label className="text-sm text-gray-700 font-medium">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full mt-1 border border-gray-200 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="text-sm text-gray-700 font-medium">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full mt-1 border border-gray-200 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  placeholder="Your email"
                />
              </div>

              <div>
                <label className="text-sm text-gray-700 font-medium">
                  Message
                </label>
                <textarea
                  rows="5"
                  className="w-full mt-1 border border-gray-200 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  placeholder="Write your message..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="px-5 py-2 bg-teal-600 text-white rounded-xl text-sm hover:bg-teal-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
