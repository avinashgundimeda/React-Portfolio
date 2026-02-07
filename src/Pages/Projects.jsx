import js from "../assets/skillsLogos/js.png";
import animate from "../assets/animate.png";
import react from "../assets/skillsLogos/reactjs.png";
import { useState, useEffect } from "react";
import python from "../assets/skillsLogos/python.png";
import java from "../assets/skillsLogos/java.png";

const Projects = () => {
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
          </div>
        </nav>
        <div className="min-h-screen bg-[#fafafa] flex justify-center">
          <div className="w-full max-w-6xl px-8 py-24 bg-white">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-6">
              Things I’ve made trying to put my dent in the universe.
            </h1>

            <p className="text-gray-600 max-w-2xl leading-relaxed mb-16">
              I’ve worked on a variety of projects over the years and I’m proud
              of the progress I’ve made. Many of these projects are open-source.
              If you're interested, feel free to check out the code and suggest
              any improvements. Collaborating with others is a great way to grow
              and learn.
            </p>

            {/* PROJECTS GRID */}
            <section className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-16 mb-32">
              {/* Project 1 */}
              <div className="group cursor-pointer p-6 rounded-2xl bg-white transition-all duration-300 hover:shadow-xl">
                <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-xl transition-transform duration-300 group-hover:scale-110">
                  <img
                    src={react}
                    alt="JS"
                    className="w-10 h-10 rounded-[4px]"
                  />
                </div>
                <h3 className="text-base font-semibold text-zinc-900 mb-1">
                  An Ecommerce Website
                </h3>
                <span className="inline-block px-2 py-0.5 text-xs font-medium rounded-full bg-amber-100 text-amber-700 mb-3">
                  Tailwind
                </span>
                <span className="inline-block px-2 py-0.5 text-xs font-medium rounded-full bg-amber-100 text-amber-700 mb-3">
                  React
                </span>
                <p className="text-sm text-zinc-600 leading-relaxed mb-5">
                  A fully functional ecommerce website built with React and
                  Tailwind CSS. Features include product listings, shopping
                  cart, and checkout process.
                </p>

                <div className="flex items-center gap-4 px-2 py-0.5">
                  <div className="flex items-center gap-2 text-sm font-medium text-teal-600 opacity-80 group-hover:opacity-100 transition-all cursor-pointer">
                    <i className="bx bx-link"></i>
                    <span>View Project</span>
                  </div>

                  <i className="bx bxl-github text-lg text-zinc-500 hover:text-zinc-700 transition-colors cursor-pointer"></i>
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
                <span className="inline-block px-2 py-0.5 text-xs font-medium rounded-full bg-amber-100 text-amber-700 mb-3">
                  JavaScript
                </span>
                <span className="inline-block px-2 py-0.5 text-xs font-medium rounded-full bg-amber-100 text-amber-700 mb-3">
                  Tailwind
                </span>
                <span className="inline-block px-2 py-0.5 text-xs font-medium rounded-full bg-amber-100 text-amber-700 mb-3">
                  HTML
                </span>
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

                  <i className="bx bxl-github text-lg text-zinc-500 hover:text-zinc-700 transition-colors cursor-pointer"></i>
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
                <span className="inline-block px-2 py-0.5 text-xs font-medium rounded-full bg-amber-100 text-amber-700 mb-3">
                  Tailwind
                </span>
                <span className="inline-block px-2 py-0.5 text-xs font-medium rounded-full bg-amber-100 text-amber-700 mb-3">
                  React
                </span>
                <p className="text-sm text-zinc-600 leading-relaxed mb-5">
                  A personal portfolio website to showcase projects and skills,
                  built with React and Tailwind CSS.
                </p>

                <div className="flex items-center gap-4 px-2 py-0.5">
                  <div className="flex items-center gap-2 text-sm font-medium text-teal-600 opacity-80 group-hover:opacity-100 transition-all cursor-pointer">
                    <i className="bx bx-link"></i>
                    <span>View Project</span>
                  </div>

                  <i className="bx bxl-github text-lg text-zinc-500 hover:text-zinc-700 transition-colors cursor-pointer"></i>
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
                <span className="inline-block px-2 py-0.5 text-xs font-medium rounded-full bg-amber-100 text-amber-700 mb-3">
                  Python
                </span>
                <span className="inline-block px-2 py-0.5 text-xs font-medium rounded-full bg-amber-100 text-amber-700 mb-3">
                  Pandas
                </span>
                <span className="inline-block px-2 py-0.5 text-xs font-medium rounded-full bg-amber-100 text-amber-700 mb-3">
                  Matplotlib
                </span>
                <p className="text-sm text-zinc-600 leading-relaxed mb-5">
                  A data analysis tool that processes and visualizes datasets
                  using Python libraries like Pandas and Matplotlib.
                </p>

                <div className="flex items-center gap-4 px-2 py-0.5">
                  <div className="flex items-center gap-2 text-sm font-medium text-teal-600 opacity-80 group-hover:opacity-100 transition-all cursor-pointer">
                    <i className="bx bx-link"></i>
                    <span>View Project</span>
                  </div>

                  <i className="bx bxl-github text-lg text-zinc-500 hover:text-zinc-700 transition-colors cursor-pointer"></i>
                </div>
              </div>
              {/* Project  5*/}
              <div className="group cursor-pointer p-6 rounded-2xl bg-white transition-all duration-300 hover:shadow-xl">
                <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-xl transition-transform duration-300 group-hover:scale-110">
                  <img
                    src={react}
                    alt="JS"
                    className="w-10 h-10 rounded-[4px]"
                  />
                </div>
                <h3 className="text-base font-semibold text-zinc-900 mb-1">
                  chat application
                </h3>

                <span className="inline-block px-2 py-0.5 text-xs font-medium rounded-full bg-amber-100 text-amber-700 mb-3">
                  Tailwind
                </span>
                <span className="inline-block px-2 py-0.5 text-xs font-medium rounded-full bg-amber-100 text-amber-700 mb-3">
                  React
                </span>
                <p className="text-sm text-zinc-600 leading-relaxed mb-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et
                  incidunt voluptatem ex tempore repellendus.
                </p>

                <div className="flex items-center gap-4 px-2 py-0.5">
                  <div className="flex items-center gap-2 text-sm font-medium text-teal-600 opacity-80 group-hover:opacity-100 transition-all cursor-pointer">
                    <i className="bx bx-link"></i>
                    <span>View Project</span>
                  </div>

                  <i className="bx bxl-github text-lg text-zinc-500 hover:text-zinc-700 transition-colors cursor-pointer"></i>
                </div>
              </div>
              <div className="group cursor-pointer p-6 rounded-2xl bg-white transition-all duration-300 hover:shadow-xl">
                <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-xl transition-transform duration-300 group-hover:scale-110">
                  <img
                    src={react}
                    alt="JS"
                    className="w-10 h-10 rounded-[4px]"
                  />
                </div>
                <h3 className="text-base font-semibold text-zinc-900 mb-1">
                  An Ecommerce Website
                </h3>
                <span className="inline-block px-2 py-0.5 text-xs font-medium rounded-full bg-amber-100 text-amber-700 mb-3">
                  Tailwind
                </span>
                <span className="inline-block px-2 py-0.5 text-xs font-medium rounded-full bg-amber-100 text-amber-700 mb-3">
                  React
                </span>
                <p className="text-sm text-zinc-600 leading-relaxed mb-5">
                  A fully functional ecommerce website built with React and
                  Tailwind CSS. Features include product listings, shopping
                  cart, and checkout process.
                </p>

                <div className="flex items-center gap-4 px-2 py-0.5">
                  <div className="flex items-center gap-2 text-sm font-medium text-teal-600 opacity-80 group-hover:opacity-100 transition-all cursor-pointer">
                    <i className="bx bx-link"></i>
                    <span>View Project</span>
                  </div>

                  <i className="bx bxl-github text-lg text-zinc-500 hover:text-zinc-700 transition-colors cursor-pointer"></i>
                </div>
              </div>
              {/* Project 7 */}
              <div className="group cursor-pointer p-6 rounded-2xl bg-white transition-all duration-300 hover:shadow-xl">
                <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-xl transition-transform duration-300 group-hover:scale-110">
                  <img
                    src={java}
                    alt="JS"
                    className="w-10 h-10 rounded-[4px]"
                  />
                </div>
                <h3 className="text-base font-semibold text-zinc-900 mb-1">
                  Password Generator
                </h3>
                <span className="inline-block px-2 py-0.5 text-xs font-medium rounded-full bg-amber-100 text-amber-700 mb-3">
                  Java
                </span>
                <span className="inline-block px-2 py-0.5 text-xs font-medium rounded-full bg-amber-100 text-amber-700 mb-3">
                  Swing
                </span>
                <span className="inline-block px-2 py-0.5 text-xs font-medium rounded-full bg-amber-100 text-amber-700 mb-3">
                  AWT
                </span>
                <p className="text-sm text-zinc-600 leading-relaxed mb-5">
                  A password generator application built using Java Swing and
                  AWT. It allows users to create secure passwords with
                  customizable options.
                </p>

                <div className="flex items-center gap-4 px-2 py-0.5">
                  <div className="flex items-center gap-2 text-sm font-medium text-teal-600 opacity-80 group-hover:opacity-100 transition-all cursor-pointer">
                    <i className="bx bx-link"></i>
                    <span>View Project</span>
                  </div>

                  <i className="bx bxl-github text-lg text-zinc-500 hover:text-zinc-700 transition-colors cursor-pointer"></i>
                </div>
              </div>
              <div className="group cursor-pointer p-6 rounded-2xl bg-white transition-all duration-300 hover:shadow-xl">
                <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-xl transition-transform duration-300 group-hover:scale-110">
                  <img
                    src={react}
                    alt="JS"
                    className="w-10 h-10 rounded-[4px]"
                  />
                </div>
                <h3 className="text-base font-semibold text-zinc-900 mb-1">
                  Libary Management System
                </h3>
                <span className="inline-block px-2 py-0.5 text-xs font-medium rounded-full bg-amber-100 text-amber-700 mb-3">
                  Tailwind
                </span>
                <span className="inline-block px-2 py-0.5 text-xs font-medium rounded-full bg-amber-100 text-amber-700 mb-3">
                  React
                </span>
                <p className="text-sm text-zinc-600 leading-relaxed mb-5">
                  A library management system built with React and Tailwind CSS.
                  It includes features for managing book inventory, user
                  accounts, and borrowing records.
                </p>

                <div className="flex items-center gap-4 px-2 py-0.5">
                  <div className="flex items-center gap-2 text-sm font-medium text-teal-600 opacity-80 group-hover:opacity-100 transition-all cursor-pointer">
                    <i className="bx bx-link"></i>
                    <span>View Project</span>
                  </div>

                  <i className="bx bxl-github text-lg text-zinc-500 hover:text-zinc-700 transition-colors cursor-pointer"></i>
                </div>
              </div>
              {/* Project 8 */}
              <div className="group cursor-pointer p-6 rounded-2xl bg-white transition-all duration-300 hover:shadow-xl">
                <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-xl transition-transform duration-300 group-hover:scale-110">
                  <img src={js} alt="JS" className="w-10 h-10 rounded-[4px]" />
                </div>
                <h3 className="text-base font-semibold text-zinc-900 mb-1">
                  Task Manager App
                </h3>
                <span className="inline-block px-2 py-0.5 text-xs font-medium rounded-full bg-amber-100 text-amber-700 mb-3">
                  JavaScript
                </span>
                <span className="inline-block px-2 py-0.5 text-xs font-medium rounded-full bg-amber-100 text-amber-700 mb-3">
                  Tailwind
                </span>

                <p className="text-sm text-zinc-600 leading-relaxed mb-5">
                  A task manager application that helps users organize and track
                  their tasks using JavaScript and Tailwind CSS.
                </p>

                <div className="flex items-center gap-4 px-2 py-0.5">
                  <div className="flex items-center gap-2 text-sm font-medium text-teal-600 opacity-80 group-hover:opacity-100 transition-all cursor-pointer">
                    <i className="bx bx-link"></i>
                    <span>View Project</span>
                  </div>

                  <i className="bx bxl-github text-lg text-zinc-500 hover:text-zinc-700 transition-colors cursor-pointer"></i>
                </div>
              </div>
              <div className="group cursor-pointer p-6 rounded-2xl bg-white transition-all duration-300 hover:shadow-xl">
                <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-xl transition-transform duration-300 group-hover:scale-110">
                  <img
                    src={python}
                    alt="JS"
                    className="w-10 h-10 rounded-[4px]"
                  />
                </div>
                <h3 className="text-base font-semibold text-zinc-900 mb-1">
                  Data Visualization Dashboard
                </h3>
                <span className="inline-block px-2 py-0.5 text-xs font-medium rounded-full bg-amber-100 text-amber-700 mb-3">
                  python
                </span>
                <span className="inline-block px-2 py-0.5 text-xs font-medium rounded-full bg-amber-100 text-amber-700 mb-3">
                  Matplotlib
                </span>
                <span className="inline-block px-2 py-0.5 text-xs font-medium rounded-full bg-amber-100 text-amber-700 mb-3">
                  Pandas
                </span>
                <p className="text-sm text-zinc-600 leading-relaxed mb-5">
                  A data visualization dashboard built with Python, Matplotlib,
                  and Pandas. It provides interactive charts and graphs to
                  analyze complex datasets.
                </p>

                <div className="flex items-center gap-4 px-2 py-0.5">
                  <div className="flex items-center gap-2 text-sm font-medium text-teal-600 opacity-80 group-hover:opacity-100 transition-all cursor-pointer">
                    <i className="bx bx-link"></i>
                    <span>View Project</span>
                  </div>

                  <i className="bx bxl-github text-lg text-zinc-500 hover:text-zinc-700 transition-colors cursor-pointer"></i>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
