import React, { useState, useEffect } from "react";
import { SiLeetcode } from "react-icons/si";

import avinash from "../assets/avi.png"; // Verify this exists, otherwise comment out
import js from "../assets/skillsLogos/js.png";
import animate from "../assets/animate.png";
import react from "../assets/skillsLogos/reactjs.png";
import python from "../assets/skillsLogos/python.png";

const Home = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#fafafa] font-sans selection:bg-teal-100">
      <nav className="fixed top-0 w-full z-50 flex justify-center pointer-events-none">
        <div className="w-full max-w-6xl px-8 flex items-center justify-between h-20">
          {/* Morphing Image Container */}
          <div
            className={`transition-opacity duration-300 pointer-events-auto ${
              isScrolled ? "opacity-100" : "opacity-0"
            } hidden md:block`}
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

      <div className="flex justify-center">
        <div className="w-full max-w-6xl px-8 pt-32 pb-24 bg-white">
          {/* HERO SECTION */}
          <header className="mb-24">
            {/* Main Avatar (Disappears on scroll if you prefer, or just stays there) */}
            <div
              className={`mb-5 transition-opacity duration-300 ${
                isScrolled ? "opacity-0" : "opacity-100"
              }`}
            >
              <img
                src={animate}
                alt="Profile"
                className="w-28 h-28 rounded-full border border-gray-200"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
              <div>
                <h1 className="text-4xl md:text-4xl leading-[20px] font-bold leading-[1.1] text-zinc-800 mb-6 ml-4">
                  Full stack developer, Cyber Security, Game developer, and
                  Content creator.
                </h1>
                <p className="text-[18px] leading-[1.7] tracking-[0.2px] text-gray-600 font-normal mb-8 text-base ml-4">
                  I am a Full stack developer and cybersecurity student with
                  ongoing interest in game development and digital content
                  creation. My focus is on understanding how technology works,
                  building useful products, and continuously improving through
                  structured learning and hands-on projects.
                </p>
                <div className="flex gap-5 text-3xl text-zinc-400 ml-4">
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

              <div className="flex md:justify-end">
                <div className="relative rotate-4 hover:rotate-0 transition-transform duration-500">
                  <img
                    src={avinash}
                    alt="Profile"
                    className="w-80 h-96 object-cover rounded-3xl shadow-xl grayscale hover:grayscale-0 transition duration-500 mr-19"
                  />
                </div>
              </div>
            </div>
          </header>

          {/* PROJECTS GRID */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-16 mb-32">
            {/* Project 1 */}
            <div className="group cursor-pointer p-6 rounded-2xl bg-white transition-all duration-300 hover:shadow-xl">
              <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-xl transition-transform duration-300 group-hover:scale-110">
                <img src={react} alt="JS" className="w-10 h-10 rounded-[4px]" />
              </div>
              <h3 className="text-base font-semibold text-zinc-900 mb-1">
                An Ecommerce Website
              </h3>
              <p className="text-sm text-zinc-600 leading-relaxed mb-5">
                A fully functional ecommerce website built with React and
                Tailwind CSS. Features include product listings, shopping cart,
                and checkout process.
              </p>

              <div className="flex items-center gap-4 px-2 py-0.5">
                <div className="flex items-center gap-2 text-sm font-medium text-teal-600 opacity-80 group-hover:opacity-100 transition-all cursor-pointer">
                  <i className="bx bx-link"></i>
                  <span>View Project</span>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="group cursor-pointer p-6 rounded-2xl bg-white transition-all duration-300 hover:shadow-xl">
              <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-xl transition-transform duration-300 group-hover:scale-110">
                <img src={js} alt="JS" className="w-10 h-10 rounded-[4px]" />
              </div>
              <h3 className="text-base font-semibold text-zinc-900 mb-1">
                A Weather App
              </h3>

              <p className="text-sm text-zinc-600 leading-relaxed mb-5">
                A weather application that provides real-time weather updates
                and forecasts using JavaScript and Tailwind CSS. incidunt
                voluptatem ex tempore repellendus.
              </p>

              <div className="flex items-center gap-4 px-2 py-0.5">
                <div className="flex items-center gap-2 text-sm font-medium text-teal-600 opacity-80 group-hover:opacity-100 transition-all cursor-pointer">
                  <i className="bx bx-link"></i>
                  <span>View Project</span>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="group cursor-pointer p-6 rounded-2xl bg-white transition-all duration-300 hover:shadow-xl">
              <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-xl transition-transform duration-300 group-hover:scale-110">
                <img src={js} alt="JS" className="w-10 h-10 rounded-[4px]" />
              </div>
              <h3 className="text-base font-semibold text-zinc-900 mb-1">
                A Portfolio Website
              </h3>

              <p className="text-sm text-zinc-600 leading-relaxed mb-5">
                A personal portfolio website to showcase projects and skills,
                built with React and Tailwind CSS.
              </p>

              <div className="flex items-center gap-4 px-2 py-0.5">
                <div className="flex items-center gap-2 text-sm font-medium text-teal-600 opacity-80 group-hover:opacity-100 transition-all cursor-pointer">
                  <i className="bx bx-link"></i>
                  <span>View Project</span>
                </div>
              </div>
            </div>

            {/* Project 4 */}
            <div className="group cursor-pointer p-6 rounded-2xl bg-white transition-all duration-300 hover:shadow-xl">
              <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-xl transition-transform duration-300 group-hover:scale-110">
                <img
                  src={python}
                  alt="JS"
                  className="w-10 h-10 rounded-[4px]"
                />
              </div>
              <h3 className="text-base font-semibold text-zinc-900 mb-1">
                A Data Analysis Tool
              </h3>
              <p className="text-sm text-zinc-600 leading-relaxed mb-5">
                A data analysis tool that processes and visualizes datasets
                using Python libraries like Pandas and Matplotlib.
              </p>

              <div className="flex items-center gap-4 px-2 py-0.5">
                <div className="flex items-center gap-2 text-sm font-medium text-teal-600 opacity-80 group-hover:opacity-100 transition-all cursor-pointer">
                  <i className="bx bx-link"></i>
                  <span>View Project</span>
                </div>
              </div>
            </div>

            {/* Project 5 */}
            <div className="group cursor-pointer p-6 rounded-2xl bg-white transition-all duration-300 hover:shadow-xl">
              <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-xl transition-transform duration-300 group-hover:scale-110">
                <img src={js} alt="JS" className="w-10 h-10 rounded-[4px]" />
              </div>
              <h3 className="text-base font-semibold text-zinc-900 mb-1">
                Task Manager App
              </h3>
              <p className="text-sm text-zinc-600 leading-relaxed mb-5">
                A task manager application that helps users organize and track
                their tasks using JavaScript and Tailwind CSS.
              </p>

              <div className="flex items-center gap-4 px-2 py-0.5">
                <div className="flex items-center gap-2 text-sm font-medium text-teal-600 opacity-80 group-hover:opacity-100 transition-all cursor-pointer">
                  <i className="bx bx-link"></i>
                  <span>View Project</span>
                </div>
              </div>
            </div>
          </section>

          {/* ARTICLES & WORK SECTION */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Articles */}
            <div className="space-y-12">
              {[1, 2].map((i) => (
                <article
                  key={i}
                  className="group relative flex flex-col items-start"
                >
                  <time className="text-sm text-zinc-400 border-l-2 border-zinc-200 pl-4 mb-3">
                    {/* Feb 12, 2024 */}Date : -
                  </time>
                  <h4 className="text-base font-semibold text-zinc-800 mb-2 group-hover:text-teal-500">
                    Internships
                  </h4>
                  <p className="text-sm text-zinc-600 leading-relaxed mb-4">
                    I've no interns please give me or select me to an intern...
                  </p>
                  <span className="text-teal-500 text-sm font-medium">
                    View More →
                  </span>
                </article>
              ))}
            </div>

            {/* Work Widget */}
            <div className="border border-zinc-100 p-6 rounded-2xl shadow-sm self-start">
              <h3 className="flex items-center gap-3 font-semibold text-zinc-800 mb-6">
                <i className="bx bx-briefcase text-zinc-400 text-xl"></i> Resume
              </h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-4xl border border-zinc-100 flex items-center justify-center shadow-sm ">
                    <img src={animate} alt="Profile" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-zinc-900">
                      Avinash Gundimeda
                    </p>
                    <p className="text-xs text-zinc-500">Engineering Student</p>
                  </div>
                </div>
                {/* Repeat for other jobs */}
              </div>
              <button className="w-full mt-6 py-2 px-4 bg-zinc-50 text-zinc-900 rounded-md text-sm font-semibold hover:bg-zinc-100 transition">
                Download Resume <i className="bx bx-download ml-2"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
