import { useState, useEffect } from "react";
import perfect from "../assets/perfect.jpg";
import Sri_Ajay_Resume from "../assets/SriAjayResume.pdf";
import TrendyCart from "../assets/TrendyCart.png";
import Headlines from "../assets/Headlines.png";
import Ai from "../assets/Ai.png"
import { BiLogoSpringBoot } from "react-icons/bi";
import job from "../assets/job.png"
import Agent from "../assets/Agent.png";
import Todolist from "../assets/Todolist.png";
import { TiHtml5 } from "react-icons/ti";
import { BiSolidFileCss } from "react-icons/bi";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTailwindcss } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { LiaNode } from "react-icons/lia";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { PiFileSql } from "react-icons/pi";
import { FaGitSquare } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { FaPython } from "react-icons/fa";

const SkillCategory = ({ title, icons, colors, names, isOpen, onClick }) => (
  <div className="mb-4 md:mb-6 overflow-hidden">
    <button
      onClick={onClick}
      className={`w-full py-3 px-4 md:py-4 md:px-6 rounded-xl md:rounded-2xl text-left flex justify-between items-center transition-all duration-500 ${
        isOpen
          ? "bg-gradient-to-r from-red-900/20 to-black shadow-lg md:shadow-2xl shadow-red-500/10 border border-red-500/20"
          : "bg-gradient-to-r from-[#1a1a1a] to-[#131313] hover:from-[#222222] hover:to-[#1a1a1a] border border-gray-800 hover:border-red-500/30 shadow-md md:shadow-lg"
      }`}
    >
      <span className="text-lg md:text-xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
        {title}
      </span>
      <span
        className={`transform transition-transform duration-500 text-red-500 text-sm md:text-base ${
          isOpen ? "rotate-180" : ""
        }`}
      >
        ▼
      </span>
    </button>

    <div
      className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4 mt-3 md:mt-4 transition-all duration-700 ease-in-out overflow-hidden ${
        isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
      }`}
    >
      {icons.map((Icon, idx) => (
        <div
          key={idx}
          className="group flex flex-col items-center p-2 md:p-4 bg-gradient-to-b from-[#1a1a1a] to-[#131313] rounded-xl md:rounded-2xl border border-gray-800 hover:border-red-500/50 transition-all duration-500 transform hover:-translate-y-1 md:hover:-translate-y-2 hover:shadow-lg md:hover:shadow-2xl hover:shadow-red-500/10"
        >
          <Icon
            className={`text-4xl md:text-5xl lg:text-6xl mb-1 md:mb-2 transition-transform duration-500 group-hover:scale-110 ${colors[idx]}`}
          />
          <span className="text-xs md:text-sm text-gray-300 font-medium text-center">{names[idx]}</span>
        </div>
      ))}
    </div>
  </div>
);

const Home = () => {
  const [activeCategory, setActiveCategory] = useState("frontend");
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleCategory = (category) => {
    setActiveCategory(activeCategory === category ? null : category);
  };
  const toggleProjectsView = () => {
    setShowAllProjects(!showAllProjects);
  };

  const categories = [
    {
      id: "frontend",
      title: "Frontend Technologies",
      icons: [
        TiHtml5,
        BiSolidFileCss,
        IoLogoJavascript,
        SiTailwindcss,
        FaReact,
      ],
      colors: [
        "text-orange-500",
        "text-blue-500",
        "text-yellow-500",
        "text-blue-400",
        "text-blue-600",
      ],
      names: ["HTML5", "CSS3", "JavaScript", "Tailwind CSS", "React"],
    },
    {
      id: "backend",
      title: "Backend Technologies",
      icons: [BiLogoSpringBoot,LiaNode, SiExpress],
      colors: ["text-green-500", "text-green-600", "text-gray-400"],
      names: ["Spring Boot","Node.js", "Express"],
    },
    {
      id: "database",
      title: "Database Management",
      icons: [SiMongodb, PiFileSql],
      colors: ["text-green-600", "text-blue-400"],
      names: ["MongoDB", "SQL"],
    },
    {
      id: "programminglanguages",
      title: "Programming Languages",
      icons: [FaJava, IoLogoJavascript, FaPython],
      colors: ["text-orange-600", "text-yellow-500", "text-blue-500"],
      names: ["Java", "JavaScript", "Python"],
    },
    {
      id: "tools",
      title: "Development Tools",
      icons: [FaGitSquare],
      colors: ["text-orange-600"],
      names: ["Git"],
    },
  ];

  const projectsData = [
    {
      id: 1,
      title: "Job Mela",
      description:
        "A full-stack job portal where users can apply for jobs, manage job postings, and analyze resumes using AI.",
      tags: ["React.js", "Spring Boot", "MySQL", "TailwindCSS","JWT"],
      tagColors: [
        "text-blue-400",
        "text-green-400",
        "text-yellow-400",
        "text-cyan-400",
        "text-purple-400",
      ],
      liveDemo: "https://jobmelaclient.netlify.app/",
      sourceCode:
        "https://github.com/Desamsetty-SriAjay/Job-Mela/tree/main",
      image:job,
    },
    {
      id: 2,
      title: "AI prompt gallery",
      description:
        "A web application where users can browse AI prompts with reference images and copy them for use in any AI image generation tool.",
      tags: ["React.js", "Spring Boot", "MySQL", "TailwindCSS"],
      tagColors: [
        "text-blue-400",
        "text-green-400",
        "text-yellow-400",
        "text-cyan-400",
      ],
      liveDemo: "https://aipromptgalleryclient.netlify.app/",
      sourceCode:
        "https://github.com/Desamsetty-SriAjay/AI-prompt-gallery-",
      image: Ai,
    },
    {
      id: 3,
      title: "TrendyCart",
      description:
        "TrendyCart is a full-stack fashion e-commerce web application built with the MERN Stack. It includes a feature-rich user interface and a secure admin panel.",
      tags: ["React", "MongoDB", "JavaScript", "Node.js", "TailwindCSS"],
      tagColors: [
        "text-blue-400",
        "text-green-400",
        "text-yellow-400",
        "text-green-500",
        "text-cyan-400",
      ],
      liveDemo: "https://trendycart-frontend.vercel.app/",
      sourceCode:
        "https://github.com/Desamsetty-SriAjay/TrendyCart--Fashion-E-Commerce-Website",
      image: TrendyCart,
    },
    {
      id: 4,
      title: "Headlines Hub",
      description:
        "In today's fast-paced world, switching between different news channels or websites to stay updated is inconvenient. Headlines Hub solves this by aggregating headlines from multiple sources.",
      tags: ["React", "MongoDB", "JavaScript", "Node.js", "TailwindCSS"],
      tagColors: [
        "text-blue-400",
        "text-green-400",
        "text-yellow-400",
        "text-green-500",
        "text-cyan-400",
      ],
      liveDemo: "https://headlines-hub-beta.vercel.app/",
      sourceCode: "https://github.com/Desamsetty-SriAjay/Headlines-Hub.",
      image: Headlines,
    },
    {
      id: 5,
      title: "AI-Powered Trail Run Assistant",
      description:
        "This project is an AI-powered assistant that recommends trail runs based on calendar events, real-time weather, and hiking trail data using GPT-4o-mini.",
      tags: ["n8n", "OpenWeatherMap API", "OpenAI GPT-4o-mini"],
      tagColors: ["text-purple-400", "text-yellow-400", "text-green-400"],
      liveDemo:
        "https://github.com/Desamsetty-SriAjay/AI-Powered-Trail-Run-Assistant-Built-with-n8n-Orchestration?tab=readme-ov-file",
      sourceCode:
        "https://github.com/Desamsetty-SriAjay/AI-Powered-Trail-Run-Assistant-Built-with-n8n-Orchestration?tab=readme-ov-file",
      image: Agent,
    },
    {
      id: 6,
      title: "Todo List",
      description:
        "A full-featured Todo List application built with the MERN stack and a responsive design that works on all screen sizes.",
      tags: ["React", "MongoDB", "JavaScript", "Node.js", "TailwindCSS"],
      tagColors: [
        "text-blue-400",
        "text-green-400",
        "text-yellow-400",
        "text-green-500",
        "text-cyan-400",
      ],
      liveDemo: "https://todofrontend-henna.vercel.app/",
      sourceCode:
        "https://github.com/Desamsetty-SriAjay/To-Do-List?tab=readme-ov-file",
      image: Todolist,
    },
  ];

  const visibleProjects = showAllProjects
    ? projectsData
    : projectsData.slice(0, 3);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#111111] to-[#0a0a0a] relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-40 h-40 md:-top-40 md:-right-40 md:w-80 md:h-80 bg-red-500/5 rounded-full blur-2xl md:blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-40 h-40 md:-bottom-40 md:-left-40 md:w-80 md:h-80 bg-red-500/5 rounded-full blur-2xl md:blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 md:w-96 md:h-96 bg-red-500/3 rounded-full blur-2xl md:blur-3xl"></div>
      </div>

      {/* Enhanced Mobile Navigation */}
      <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-black/90 backdrop-blur-lg shadow-2xl' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="text-lg md:text-xl font-bold text-white">
            Ajay's <span className="text-red-600 animate-pulse">Portfolio</span>
          </div>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white focus:outline-none p-2 rounded-lg bg-black/20 hover:bg-red-500/20 transition-colors md:hidden"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              />
            </svg>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <a
              href="#skills"
              className="text-white font-semibold hover:text-red-400 transition-colors"
            >
              Skills
            </a>
            <a
              href="#projects"
              className="text-white font-semibold hover:text-red-400 transition-colors"
            >
              Projects
            </a>
            <a
              href="#details"
              className="text-white font-semibold hover:text-red-400 transition-colors"
            >
              Contact
            </a>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="bg-black/95 backdrop-blur-lg py-4 px-6 border-t border-red-500/20 md:hidden">
            <a
              href="#skills"
              className="block py-3 text-white font-semibold hover:text-red-400 transition-colors border-b border-gray-800"
              onClick={() => setIsMenuOpen(false)}
            >
              Skills
            </a>
            <a
              href="#projects"
              className="block py-3 text-white font-semibold hover:text-red-400 transition-colors border-b border-gray-800"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </a>
            <a
              href="#details"
              className="block py-3 text-white font-semibold hover:text-red-400 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
          </div>
        )}
      </div>

      <div className="relative z-10 space-y-16 md:space-y-24 lg:space-y-32 py-6 md:py-12 lg:py-16">
        {/* Hero Section */}
        <section className="min-h-[85vh] md:min-h-[90vh] flex items-center py-4 pt-20 md:pt-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12 lg:gap-16">
              {/* Content Section */}
              <div className="lg:w-7/12 text-center lg:text-left">
                <div className="inline-block mb-3 md:mb-4 px-3 py-1 md:px-4 md:py-2 bg-red-500/10 border border-red-500/20 rounded-full">
                  <span className="text-red-400 text-xs md:text-sm font-semibold">Full Stack Developer</span>
                </div>
                
                <header className="mb-6 md:mb-8">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-3 md:mb-4 leading-tight">
                    Desamsetty{" "}
                    <span className="text-red-600 bg-gradient-to-r from-red-600 to-red-400 bg-clip-text text-transparent animate-pulse">
                      Sri Ajay
                    </span>
                  </h1>
                  <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                    Crafting Digital Experiences That Matter
                  </h2>
                </header>
                
                <p className="text-gray-300 mb-6 md:mb-8 text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl">
                  Java Full Stack Developer with hands-on experience in React, Spring Boot, and backend API development. I
                  learn quickly, adapt fast, and deliver high-quality solutions. I am also integrating AI features into my projects.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center lg:justify-start">
                  <a
                    href={Sri_Ajay_Resume}
                    download="Sri_Ajay_Resume"
                    className="group"
                  >
                    <button className="w-full sm:w-auto bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold py-3 px-6 md:py-4 md:px-8 rounded-xl md:rounded-2xl transition-all duration-500 transform hover:-translate-y-1 hover:shadow-lg md:hover:shadow-2xl hover:shadow-red-500/20 flex items-center gap-2 justify-center">
                      <span>Download Resume</span>
                      <svg className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                      </svg>
                    </button>
                  </a>
                  
                  <a href="#projects" className="group">
                    <button className="w-full sm:w-auto bg-transparent border-2 border-red-500/50 hover:border-red-400 text-white font-bold py-3 px-6 md:py-4 md:px-8 rounded-xl md:rounded-2xl transition-all duration-500 transform hover:-translate-y-1 hover:shadow-lg md:hover:shadow-2xl hover:shadow-red-500/10">
                      View My Work
                    </button>
                  </a>
                </div>
              </div>

              {/* Profile Image Section */}
              <div className="lg:w-5/12 flex justify-center mt-6 lg:mt-0">
                <div className="relative">
                  <div className="absolute -inset-2 md:-inset-4 bg-gradient-to-r from-red-600 to-red-400 rounded-full blur-lg md:blur-xl opacity-20 animate-pulse"></div>
                  <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 overflow-hidden rounded-full border-4 border-red-500/20 shadow-xl md:shadow-2xl">
                    <img
                      src={perfect}
                      alt="Desamsetty Sri Ajay - Full Stack Developer"
                      className="w-full h-full object-cover object-top scale-110 transition-transform duration-700 hover:scale-100"
                    />
                  </div>
                  {/* Floating elements */}
                  <div className="absolute -top-2 -right-2 md:-top-4 md:-right-4 w-4 h-4 md:w-8 md:h-8 bg-red-500 rounded-full animate-bounce"></div>
                  <div className="absolute -bottom-2 -left-2 md:-bottom-4 md:-left-4 w-3 h-3 md:w-6 md:h-6 bg-blue-500 rounded-full animate-bounce delay-1000"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-12 md:py-20 lg:py-24 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-500/5 to-transparent"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-12 md:mb-16 lg:mb-20">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6">
                My <span className="text-red-600 bg-gradient-to-r from-red-600 to-red-400 bg-clip-text text-transparent">Skills</span>
              </h2>
              <p className="text-gray-400 text-base md:text-lg lg:text-xl max-w-2xl mx-auto px-4">
                Technologies I've mastered to create full-stack applications
              </p>
            </div>

            <div className="max-w-4xl lg:max-w-6xl mx-auto">
              {categories.map((category) => (
                <SkillCategory
                  key={category.id}
                  title={category.title}
                  icons={category.icons}
                  colors={category.colors}
                  names={category.names}
                  isOpen={activeCategory === category.id}
                  onClick={() => toggleCategory(category.id)}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-12 md:py-20 lg:py-24">
          <div className="container mx-auto px-4">
            {/* Section Header */}
            <div className="text-center mb-12 md:mb-16 lg:mb-20">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6">
                My <span className="text-red-600 bg-gradient-to-r from-red-600 to-red-400 bg-clip-text text-transparent">Projects</span>
              </h1>
              <p className="text-gray-400 text-base md:text-lg lg:text-xl max-w-2xl mx-auto px-4">
                Here are some of my featured works. Each project was built with
                passion and attention to detail.
              </p>
            </div>

            {/* Project Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
              {visibleProjects.map((project) => (
                <div
                  key={project.id}
                  className="group relative overflow-hidden rounded-2xl md:rounded-3xl bg-gradient-to-br from-[#131313] to-[#0a0a0a] border border-gray-800 hover:border-red-500/50 transition-all duration-700 hover:shadow-lg md:hover:shadow-2xl hover:shadow-red-500/10"
                >
                  {/* Project Image */}
                  <div className="h-40 sm:h-48 bg-gradient-to-r from-[#131313] to-[#1c1c1c] flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <span className="text-gray-400">{project.title}</span>
                      </div>
                    )}
                  </div>

                  {/* Project Content */}
                  <div className="p-4 sm:p-6 md:p-8 relative z-20">
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 md:mb-4 group-hover:text-red-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 mb-4 md:mb-6 text-sm sm:text-base leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-1 md:gap-2 mb-4 md:mb-6">
                      {project.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className={`px-2 py-1 text-xs md:text-sm bg-black/50 border border-gray-800 rounded-full ${project.tagColors[idx]} font-medium`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-3 md:gap-4">
                      <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 md:gap-2 text-red-400 hover:text-red-300 font-semibold transition-all duration-300 group/link text-sm md:text-base"
                      >
                        <svg
                          className="w-4 h-4 md:w-5 md:h-5 group-hover/link:translate-x-1 transition-transform"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          ></path>
                        </svg>
                        Live Demo
                      </a>
                      <a
                        href={project.sourceCode}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 md:gap-2 text-gray-400 hover:text-white font-semibold transition-all duration-300 group/link text-sm md:text-base"
                      >
                        <svg
                          className="w-4 h-4 md:w-5 md:h-5 group-hover/link:scale-110 transition-transform"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                          ></path>
                        </svg>
                        Source Code
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* View More/Less Button */}
            <div className="text-center mt-8 md:mt-12">
              <button
                onClick={toggleProjectsView}
                className="px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold rounded-xl md:rounded-2xl transition-all duration-500 transform hover:scale-105 hover:shadow-lg md:hover:shadow-2xl hover:shadow-red-500/20 text-sm md:text-base"
              >
                {showAllProjects ? "Show Less Projects" : "View All Projects"}
              </button>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="details" className="py-12 md:py-20 lg:py-24 relative">
          <div className="absolute inset-0 bg-gradient-to-t from-transparent via-red-500/5 to-transparent"></div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6">
              Get In <span className="text-red-600 bg-gradient-to-r from-red-600 to-red-400 bg-clip-text text-transparent">Touch</span>
            </h2>
            <p className="text-gray-400 text-base md:text-lg lg:text-xl mb-8 md:mb-12 max-w-xl mx-auto px-4">
              Feel free to connect with me through my social media profiles.
            </p>

            {/* Social Icons */}
            <div className="flex justify-center gap-4 md:gap-6 lg:gap-8 mb-8 md:mb-12">
              <a
                href="https://github.com/Desamsetty-SriAjay"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 md:p-4 bg-gradient-to-br from-[#1a1a1a] to-[#131313] border border-gray-800 rounded-xl md:rounded-2xl hover:border-red-500/50 transition-all duration-500 transform hover:-translate-y-1 md:hover:-translate-y-2 hover:shadow-lg md:hover:shadow-2xl hover:shadow-red-500/10"
                aria-label="GitHub Profile"
              >
                <FaGithub className="text-3xl md:text-4xl lg:text-5xl text-white group-hover:text-red-400 transition-colors" />
              </a>

              <a
                href="https://www.linkedin.com/in/desamsettysriajay/"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 md:p-4 bg-gradient-to-br from-[#1a1a1a] to-[#131313] border border-gray-800 rounded-xl md:rounded-2xl hover:border-red-500/50 transition-all duration-500 transform hover:-translate-y-1 md:hover:-translate-y-2 hover:shadow-lg md:hover:shadow-2xl hover:shadow-red-500/10"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedin className="text-3xl md:text-4xl lg:text-5xl text-blue-500 group-hover:text-blue-400 transition-colors" />
              </a>

              <a
                href="mailto:desamsettysriajay@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 md:p-4 bg-gradient-to-br from-[#1a1a1a] to-[#131313] border border-gray-800 rounded-xl md:rounded-2xl hover:border-red-500/50 transition-all duration-500 transform hover:-translate-y-1 md:hover:-translate-y-2 hover:shadow-lg md:hover:shadow-2xl hover:shadow-red-500/10"
                aria-label="Send Email"
              >
                <BiLogoGmail className="text-3xl md:text-4xl lg:text-5xl text-red-500 group-hover:text-red-400 transition-colors" />
              </a>
            </div>

            <div className="mt-6 md:mt-8">
              <a
                href="mailto:desamsettysriajay@gmail.com"
                className="inline-flex items-center gap-2 md:gap-3 px-4 py-3 md:px-6 md:py-4 bg-gradient-to-r from-[#1a1a1a] to-[#131313] border border-gray-800 hover:border-red-500/50 rounded-xl md:rounded-2xl hover:text-white transition-all duration-500 transform hover:-translate-y-1 text-sm md:text-lg text-gray-200 font-semibold"
              >
                <BiLogoGmail className="text-xl md:text-2xl text-red-500" />
                desamsettysriajay@gmail.com
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;