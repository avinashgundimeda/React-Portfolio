import React, { useEffect, useState } from "react";import user from "../data/user";
import SectionTitle from "../Components/SectionTitle";
import "./carousel.css";
import database from "../assets/Skills/Database.svg";
import blender from "../assets/Skills/Blender.svg";
import unity from "../assets/Skills/Unity.svg";
import unreal from "../assets/Skills/Unreal.svg";
import css from "../assets/Skills/CSS3.svg";
import html from "../assets/Skills/HTML5.svg";
import js from "../assets/Skills/JavaScript.svg";
import python from "../assets/Skills/Python.svg";
import react from "../assets/Skills/React.svg";
import vscode from "../assets/Skills/VSCode.svg";
import tailwind from "../assets/Skills/Tailwind.svg";
import linux from "../assets/Skills/Linux.svg";
import git from "../assets/Skills/Git.svg";
import java from "../assets/Skills/Java.svg";
import github from "../assets/Skills/github.svg";
import animate from "../assets/animate.png";



const About = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
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
            <div className={`transition-opacity duration-300 pointer-events-auto ${isScrolled ? "opacity-100" : "opacity-0"} hidden md:block`}>
  <img
    src={animate}
    alt="Avatar"
    className="w-15 h-15 rounded-full border-2 border-white bg-white mt-5"
  />
</div>
 {/* Spacer for symmetry */}
          </div>
        </nav>
    
    <div className="min-h-screen bg-[#fafafa] flex justify-center">
      
      <div className="w-full max-w-6xl px-8 py-24 bg-white">

        {/* <SectionTitle title="About Me" className="mb-12" /> */}

        {/* ABOUT TEXT */}
        <div className="max-w-3xl">
          <h2 className="text-lg font-semibold text-gray-900 mb-6">About Me</h2>
          <p className="text-gray-700 leading-relaxed mb-8">
            I am a frontend developer and cybersecurity student with ongoing interest in game development and digital content creation. My focus is on understanding how technology works, building useful products, and continuously improving through structured learning and hands-on projects. I enjoy exploring new tools, experimenting with ideas, and working on things that challenge me to grow.
          </p>
        </div>

        {/* EDUCATION SECTION */}
        <div className="mt-12">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Education</h3>

          <div className="border-l-2 border-gray-300 pl-6 space-y-6">

            <div>
              <p className="text-sm text-gray-500">2022 — Present</p>
              <h4 className="text-base font-medium text-gray-800">
                B.Tech in Computer Science (Cybersecurity)
              </h4>
              <p className="text-sm text-gray-600">Mohan Babu University, Tirupati</p>
            </div>

            <div>
              <p className="text-sm text-gray-500">2020 — 2022</p>
              <h4 className="text-base font-medium text-gray-800">
                Intermediate (MPC)
              </h4>
              <p className="text-sm text-gray-600">Sri Chaitanya Junior College</p>
            </div>

            <div>
              <p className="text-sm text-gray-500">2019 — 2020</p>
              <h4 className="text-base font-medium text-gray-800">
                Secondary School Education
              </h4>
              <p className="text-sm text-gray-600">Z.P. High School</p>
            </div>

          </div>
        </div>

        {/* WHAT I DO SECTION */}
        <div className="mt-16">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">What I Do</h3>

          <div className="grid md:grid-cols-3 gap-10">

            <div>
              <h4 className="font-medium text-gray-800 mb-2">Frontend Development</h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                Building user interfaces and interactive web experiences. I focus on usability, clarity, and responsive design.
              </p>
            </div>

            <div>
              <h4 className="font-medium text-gray-800 mb-2">Cybersecurity</h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                Learning security fundamentals, system vulnerabilities, and how to protect digital infrastructure.
              </p>
            </div>

            <div>
              <h4 className="font-medium text-gray-800 mb-2">Game Development & Content</h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                Experimenting with game engines and sharing content related to tech, learning, and creative work.
              </p>
            </div>

          </div> 
        </div>

        {/* SKILLS SECTION */}
<div className="mt-20">
  <h3 className="text-lg font-semibold text-gray-900 mb-6">Skills</h3>

  <div className="overflow-hidden w-full">
    <div className="flex items-center gap-18 animate-skill-carousel whitespace-nowrap">

      {/* Skill items with hover effects */}
      <div className="flex flex-col items-center group">
        <div className="h-14 w-14 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          <img src={react} className="h-14 group-hover:brightness-110 transition-all duration-300" alt="React"/>
        </div>
        <span className="text-xs font-medium text-gray-600 mt-2 group-hover:text-blue-600 transition-colors duration-300">React</span>
      </div>

      <div className="flex flex-col items-center group">
        <div className="h-14 w-14 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          <img src={tailwind} className="h-14 group-hover:brightness-110 transition-all duration-300" alt="TailwindCSS"/>
        </div>
        <span className="text-xs font-medium text-gray-600 mt-2 group-hover:text-cyan-600 transition-colors duration-300">Tailwind</span>
      </div>

      <div className="flex flex-col items-center group">
        <div className="h-14 w-14 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          <img src={js} className="h-14 group-hover:brightness-110 transition-all duration-300" alt="JavaScript"/>
        </div>
        <span className="text-xs font-medium text-gray-600 mt-2 group-hover:text-yellow-500 transition-colors duration-300">JavaScript</span>
      </div>

      <div className="flex flex-col items-center group">
        <div className="h-14 w-14 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          <img src={java} className="h-14 group-hover:brightness-110 transition-all duration-300" alt="Java"/>
        </div>
        <span className="text-xs font-medium text-gray-600 mt-2 group-hover:text-red-600 transition-colors duration-300">Java</span>
      </div>

      <div className="flex flex-col items-center group">
        <div className="h-14 w-14 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          <img src={python} className="h-14 group-hover:brightness-110 transition-all duration-300" alt="Python"/>
        </div>
        <span className="text-xs font-medium text-gray-600 mt-2 group-hover:text-blue-500 transition-colors duration-300">Python</span>
      </div>

      <div className="flex flex-col items-center group">
        <div className="h-14 w-14 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          <img src={html} className="h-14 group-hover:brightness-110 transition-all duration-300" alt="HTML5"/>
        </div>
        <span className="text-xs font-medium text-gray-600 mt-2 group-hover:text-orange-600 transition-colors duration-300">HTML5</span>
      </div>

      <div className="flex flex-col items-center group">
        <div className="h-14 w-14 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          <img src={css} className="h-14 group-hover:brightness-110 transition-all duration-300" alt="CSS3"/>
        </div>
        <span className="text-xs font-medium text-gray-600 mt-2 group-hover:text-blue-400 transition-colors duration-300">CSS3</span>
      </div>

      <div className="flex flex-col items-center group">
        <div className="h-14 w-14 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          <img src={git} className="h-14 group-hover:brightness-110 transition-all duration-300" alt="Git"/>
        </div>
        <span className="text-xs font-medium text-gray-600 mt-2 group-hover:text-red-500 transition-colors duration-300">Git</span>
      </div>

      <div className="flex flex-col items-center group">
        <div className="h-14 w-14 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          <img src={database} className="h-14 group-hover:brightness-110 transition-all duration-300" alt="Database"/>
        </div>
        <span className="text-xs font-medium text-gray-600 mt-2 group-hover:text-blue-700 transition-colors duration-300">Database</span>
      </div>

      <div className="flex flex-col items-center group">
        <div className="h-14 w-14 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          <img src={vscode} className="h-14 group-hover:brightness-110 transition-all duration-300" alt="VSCode"/>
        </div>
        <span className="text-xs font-medium text-gray-600 mt-2 group-hover:text-blue-600 transition-colors duration-300">VSCode</span>
      </div>

      <div className="flex flex-col items-center group">
        <div className="h-14 w-14 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          <img src={linux} className="h-14 group-hover:brightness-110 transition-all duration-300" alt="Linux"/>
        </div>
        <span className="text-xs font-medium text-gray-600 mt-2 group-hover:text-yellow-800 transition-colors duration-300">Linux</span>
      </div>

      <div className="flex flex-col items-center group">
        <div className="h-14 w-14 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          <img src={blender} className="h-14 group-hover:brightness-110 transition-all duration-300" alt="Blender"/>
        </div>
        <span className="text-xs font-medium text-gray-600 mt-2 group-hover:text-orange-500 transition-colors duration-300">Blender</span>
      </div>

      <div className="flex flex-col items-center group">
        <div className="h-14 w-14 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          <img src={unity} className="h-14 group-hover:brightness-110 transition-all duration-300" alt="Unity"/>
        </div>
        <span className="text-xs font-medium text-gray-600 mt-2 group-hover:text-gray-800 transition-colors duration-300">Unity</span>
      </div>

      <div className="flex flex-col items-center group">
        <div className="h-14 w-14 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          <img src={unreal} className="h-14 group-hover:brightness-110 transition-all duration-300" alt="Unreal Engine"/>
        </div>
        <span className="text-xs font-medium text-gray-600 mt-2 group-hover:text-purple-600 transition-colors duration-300">Unreal</span>
      </div>
      <div className="flex flex-col items-center group">
        <div className="h-14 w-14 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          <img src={github} className="h-14 group-hover:brightness-110 transition-all duration-300" alt="GitHub"/>
        </div>
        <span className="text-xs font-medium text-gray-600 mt-2 group-hover:text-purple-600 transition-colors duration-300">GitHub</span>
      </div>

      {/* Duplicate for infinite looping - copy the same structure above */}
      <div className="flex flex-col items-center group">
        <div className="h-14 w-14 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          <img src={react} className="h-14 group-hover:brightness-110 transition-all duration-300" alt="React"/>
        </div>
        <span className="text-xs font-medium text-gray-600 mt-2 group-hover:text-blue-600 transition-colors duration-300">React</span>
      </div>
            <div className="flex flex-col items-center group">
        <div className="h-14 w-14 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          <img src={react} className="h-14 group-hover:brightness-110 transition-all duration-300" alt="React"/>
        </div>
        <span className="text-xs font-medium text-gray-600 mt-2 group-hover:text-blue-600 transition-colors duration-300">React</span>
      </div>

      <div className="flex flex-col items-center group">
        <div className="h-14 w-14 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          <img src={tailwind} className="h-14 group-hover:brightness-110 transition-all duration-300" alt="TailwindCSS"/>
        </div>
        <span className="text-xs font-medium text-gray-600 mt-2 group-hover:text-cyan-600 transition-colors duration-300">Tailwind</span>
      </div>

      <div className="flex flex-col items-center group">
        <div className="h-14 w-14 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          <img src={js} className="h-14 group-hover:brightness-110 transition-all duration-300" alt="JavaScript"/>
        </div>
        <span className="text-xs font-medium text-gray-600 mt-2 group-hover:text-yellow-500 transition-colors duration-300">JavaScript</span>
      </div>

      <div className="flex flex-col items-center group">
        <div className="h-14 w-14 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          <img src={java} className="h-14 group-hover:brightness-110 transition-all duration-300" alt="Java"/>
        </div>
        <span className="text-xs font-medium text-gray-600 mt-2 group-hover:text-red-600 transition-colors duration-300">Java</span>
      </div>

      <div className="flex flex-col items-center group">
        <div className="h-14 w-14 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          <img src={python} className="h-14 group-hover:brightness-110 transition-all duration-300" alt="Python"/>
        </div>
        <span className="text-xs font-medium text-gray-600 mt-2 group-hover:text-blue-500 transition-colors duration-300">Python</span>
      </div>

      <div className="flex flex-col items-center group">
        <div className="h-14 w-14 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          <img src={html} className="h-14 group-hover:brightness-110 transition-all duration-300" alt="HTML5"/>
        </div>
        <span className="text-xs font-medium text-gray-600 mt-2 group-hover:text-orange-600 transition-colors duration-300">HTML5</span>
      </div>

      <div className="flex flex-col items-center group">
        <div className="h-14 w-14 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          <img src={css} className="h-14 group-hover:brightness-110 transition-all duration-300" alt="CSS3"/>
        </div>
        <span className="text-xs font-medium text-gray-600 mt-2 group-hover:text-blue-400 transition-colors duration-300">CSS3</span>
      </div>

      <div className="flex flex-col items-center group">
        <div className="h-14 w-14 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          <img src={git} className="h-14 group-hover:brightness-110 transition-all duration-300" alt="Git"/>
        </div>
        <span className="text-xs font-medium text-gray-600 mt-2 group-hover:text-red-500 transition-colors duration-300">Git</span>
      </div>

      <div className="flex flex-col items-center group">
        <div className="h-14 w-14 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          <img src={database} className="h-14 group-hover:brightness-110 transition-all duration-300" alt="Database"/>
        </div>
        <span className="text-xs font-medium text-gray-600 mt-2 group-hover:text-blue-700 transition-colors duration-300">Database</span>
      </div>

      <div className="flex flex-col items-center group">
        <div className="h-14 w-14 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          <img src={vscode} className="h-14 group-hover:brightness-110 transition-all duration-300" alt="VSCode"/>
        </div>
        <span className="text-xs font-medium text-gray-600 mt-2 group-hover:text-blue-600 transition-colors duration-300">VSCode</span>
      </div>

      <div className="flex flex-col items-center group">
        <div className="h-14 w-14 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          <img src={linux} className="h-14 group-hover:brightness-110 transition-all duration-300" alt="Linux"/>
        </div>
        <span className="text-xs font-medium text-gray-600 mt-2 group-hover:text-yellow-800 transition-colors duration-300">Linux</span>
      </div>

      <div className="flex flex-col items-center group">
        <div className="h-14 w-14 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          <img src={blender} className="h-14 group-hover:brightness-110 transition-all duration-300" alt="Blender"/>
        </div>
        <span className="text-xs font-medium text-gray-600 mt-2 group-hover:text-orange-500 transition-colors duration-300">Blender</span>
      </div>

      <div className="flex flex-col items-center group">
        <div className="h-14 w-14 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          <img src={unity} className="h-14 group-hover:brightness-110 transition-all duration-300" alt="Unity"/>
        </div>
        <span className="text-xs font-medium text-gray-600 mt-2 group-hover:text-gray-800 transition-colors duration-300">Unity</span>
      </div>

      <div className="flex flex-col items-center group">
        <div className="h-14 w-14 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          <img src={unreal} className="h-14 group-hover:brightness-110 transition-all duration-300" alt="Unreal Engine"/>
        </div>
        <span className="text-xs font-medium text-gray-600 mt-2 group-hover:text-purple-600 transition-colors duration-300">Unreal</span>
      </div>
      
      {/* Repeat the same structure for all duplicated items... */}
      
    </div>
  </div>
</div>

    </div>
  </div>
  </div>
  </>
   
  );
};

export default About;
