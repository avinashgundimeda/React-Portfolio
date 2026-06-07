import React from "react";

import { useState, useEffect } from "react";
import animate from "../assets/animate.png";
import Resume from '../assets/resume/avinash.pdf';

const faqs = [
  {
    q: "What kind of projects do you take on?",
    a: "I work on full-stack web apps, cybersecurity tools, and freelance development projects. If it involves React, Node.js, or security — I'm in.",
  },
  {
    q: "Are you open to remote work?",
    a: "Yes, fully remote friendly. I'm based in India and comfortable working across time zones.",
  },
  {
    q: "How long does it take to hear back?",
    a: "I typically reply within 24 hours on weekdays. For urgent queries, mention it in your message.",
  },
  {
    q: "Do you take on internships or part-time roles?",
    a: "Yes — currently open to internships, part-time, and freelance work alongside my studies.",
  },
];

const testimonials = [
  {
    name: "Ravi Kumar",
    role: "Full Stack Developer",
    text: "Avinash is sharp, self-driven, and delivers clean code. Worked with him on a React project — zero handholding needed.",
  },
  {
    name: "Priya Sharma",
    role: "UI/UX Designer",
    text: "He takes feedback well and actually implements it properly. Rare quality in a developer.",
  },
  {
    name: "Sai Charan",
    role: "Classmate & Collaborator",
    text: "Dude just figures things out. Whether it's a new library or a broken API — he'll debug it till it works.",
  },
];

const Contact = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] font-sans selection:bg-teal-100 transition-colors duration-300">
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
          </div>
        </nav>

        <div className="min-h-screen bg-[var(--bg-primary)] flex justify-center transition-colors duration-300">
          <div className="w-full max-w-6xl bg-[var(--bg-surface)] px-8 py-24 transition-colors duration-300">
            {/* Header */}
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-4">
              Let's Connect
            </h1>

            <p className="text-gray-600 max-w-2xl leading-relaxed mb-12">
              Whether you have a question, a collaboration idea, or just want to
              say hi — my inbox is always open. I enjoy connecting with
              developers, content creators, and teams working on meaningful
              products.
            </p>

            {/* Response Time Badge */}
            <div className="inline-flex items-center gap-2 bg-teal-50 border border-teal-100 rounded-full px-4 py-1.5 mb-12">
              <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse"></span>
              <span className="text-xs font-medium text-teal-700">
                Usually responds within 24 hours
              </span>
            </div>

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
                <a href="https://twitter.com/avinash_2006">
                  <i className="bx bxl-twitter hover:text-teal-600 transition-colors"></i>
                </a>
                <a href="https://www.reddit.com/user/avinash_2006/">
                  <i className="bx bxl-reddit hover:text-teal-600 transition-colors"></i>
                </a>
              </div>
            </div>

            {/* Resume Download */}
            <div className="mb-20">
              <h3 className="text-sm font-semibold text-gray-900 mb-3">
                Resume
              </h3>
              <p className="text-sm text-gray-600 mb-4 max-w-md">
                Want a quick overview of my skills and experience? Grab my
                latest resume below.
              </p>
              <a
                href={Resume}
                download
                className="inline-flex items-center gap-2 px-5 py-2 border border-gray-200 rounded-xl text-sm text-gray-700 hover:border-teal-500 hover:text-teal-600 transition-colors"
              >
                <i className="bx bx-download text-base"></i>
                Download Resume
              </a>
            </div>

            {/* Testimonials */}
            <div className="mb-20">
              <h3 className="text-sm font-semibold text-gray-900 mb-6">
                Kind Words
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {testimonials.map((t, i) => (
                  <div key={i} className="border border-gray-100 rounded-2xl p-5 space-y-3 bg-[#fafafa]">
                    <p className="text-sm text-gray-600 leading-relaxed">
                      "{t.text}"
                    </p>
                    <div>
                      <p className="text-sm font-semibold text-gray-900">{t.name}</p>
                      <p className="text-xs text-gray-400">{t.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ Section */}
            <div className="mb-20 max-w-xl">
              <h3 className="text-sm font-semibold text-gray-900 mb-6">
                FAQs
              </h3>
              <div className="space-y-3">
                {faqs.map((faq, i) => (
                  <div
                    key={i}
                    className="border border-gray-100 rounded-xl overflow-hidden"
                  >
                    <button
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      className="w-full flex items-center justify-between px-5 py-3 text-left text-sm font-medium text-gray-900 hover:bg-gray-50 transition-colors"
                    >
                      <span>{faq.q}</span>
                      <i
                        className={`bx bx-chevron-down text-gray-400 text-lg transition-transform duration-200 ${
                          openFaq === i ? "rotate-180" : ""
                        }`}
                      ></i>
                    </button>
                    {openFaq === i && (
                      <div className="px-5 pb-4 text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-3">
                        {faq.a}
                      </div>
                    )}
                  </div>
                ))}
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