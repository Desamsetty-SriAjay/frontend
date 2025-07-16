import { useState } from "react";
import perfect from "../assets/perfect.jpg";
import Ajay_Resume from "../assets/Ajay_Resume.pdf";
import TrendyCart from "../assets/TrendyCart.png";
import Headlines from "../assets/Headlines.png";
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
  <div className="mb-6 overflow-hidden">
    <button
      onClick={onClick}
      className={`w-full py-3 px-4 md:py-4 md:px-6 rounded-xl text-left flex justify-between items-center transition-all duration-300 ${
        isOpen
          ? "bg-gradient-to-r from-[#131313] to-black shadow-lg"
          : "bg-[#131313] hover:bg-[#222222]"
      }`}
    >
      <span className="text-base md:text-xl font-bold">{title}</span>
      <span
        className={`transform transition-transform duration-300 ${
          isOpen ? "rotate-180" : ""
        }`}
      >
        ▼
      </span>
    </button>

    <div
      className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 md:gap-4 mt-4 transition-all duration-500 ease-in-out overflow-hidden ${
        isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
      }`}
    >
      {icons.map((Icon, idx) => (
        <div
          key={idx}
          className="flex flex-col items-center p-2 md:p-4 bg-[#141414] rounded-xl hover:bg-[#1f1f1f] transition-all duration-300 transform hover:-translate-y-1"
        >
          <Icon
            className={`text-4xl md:text-6xl mb-1 md:mb-2 ${colors[idx]}`}
          />
          <span className="text-xs md:text-sm text-gray-300">{names[idx]}</span>
        </div>
      ))}
    </div>
  </div>
);

const Home = () => {
  const [activeCategory, setActiveCategory] = useState(null);
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
      icons: [LiaNode, SiExpress],
      colors: ["text-green-500", "text-yellow-500"],
      names: ["Node.js", "Express"],
    },
    {
      id: "database",
      title: "Database Management",
      icons: [SiMongodb, PiFileSql],
      colors: ["text-green-800", "text-white"],
      names: ["MongoDB", "SQL"],
    },
    {
      id: "programminglanguages",
      title: "programming Languages",
      icons: [FaJava, IoLogoJavascript,FaPython],
      colors: ["text-orange-700", "text-yellow-500","text-gray-200"],
      names: ["Java", "JavaScript","Python"],
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
      title: "TrendyCart",
      description:
        "TrendyCart is a full-stack fashion e-commerce web application built with the MERN Stack. It includes a feature-rich user interface and a secure admin panel. Users can browse collections, filter and search products, add items to the cart, place orders, and authenticate using JWT.",
      tags: ["React", "MongoDB", "JavaScript", "Node.js", "TailwindCSS"],
      tagColors: [
        "text-red-400",
        "text-blue-400",
        "text-yellow-400",
        "text-green-400",
      ],
      liveDemo: "https://trendycart-frontend.vercel.app/",
      sourceCode:
        "https://github.com/Desamsetty-SriAjay/TrendyCart--Fashion-E-Commerce-Website",
      image: TrendyCart,
    },
    {
      id: 2,
      title: "Headlines Hub",
      description:
        "In today's fast-paced world, switching between different news channels or websites to stay updated is inconvenient. Headlines Hub solves this by aggregating headlines from multiple sources into one user-friendly platform.",
      tags: ["React", "MongoDB", "JavaScript", "Node.js", "TailwindCSS"],
      tagColors: ["text-blue-400", "text-green-400", "text-purple-400","text-yellow-500"],
      liveDemo: "https://headlines-hub-beta.vercel.app/",
      sourceCode: "https://github.com/Desamsetty-SriAjay/Headlines-Hub.",
      image: Headlines,
    },
    {
      id: 3,
      title: "AI-Powered Trail Run Assistant",
      description:
        " This project is an AI-powered assistant that recommends trail runs based on calendar events, real-time weather, and hiking trail data using GPT-4o-mini, Google APIs, and LangChain-compatible nodes — all orchestrated in n8n.",
      tags: ["n8n", "OpenWeatherMap API", "OpenAI GPT-4o-mini"],
      tagColors: ["text-blue-400", "text-yellow-400", "text-red-400"],
      liveDemo: "https://github.com/Desamsetty-SriAjay/AI-Powered-Trail-Run-Assistant-Built-with-n8n-Orchestration?tab=readme-ov-file",
      sourceCode:
        "https://github.com/Desamsetty-SriAjay/AI-Powered-Trail-Run-Assistant-Built-with-n8n-Orchestration?tab=readme-ov-file",
      image: Agent,
    },
    {
      id: 4,
      title: "Todo List",
      description:
        "A full-featured Todo List application built with the MERN stack (MongoDB, Express, React, Node.js) and a responsive design that works on all screen sizes.",
      tags: ["React", "MongoDB", "JavaScript", "Node.js", "TailwindCSS"],
      tagColors: ["text-blue-400", "text-green-400", "text-purple-400","text-yellow-500"],
      liveDemo: "https://todofrontend-henna.vercel.app/",
      sourceCode: "https://github.com/Desamsetty-SriAjay/To-Do-List?tab=readme-ov-file",
      image: Todolist,
    },
  ];

  //  how many projects to show
  const visibleProjects = showAllProjects
    ? projectsData
    : projectsData.slice(0, 3);
  return (
    <div className="space-y-12 md:space-y-20 py-6 md:py-12">
      {/* Mobile Navigation */}
      <div className="md:hidden fixed top-0 left-0 right-0 bg-[#131313] z-50 shadow-md">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="text-xl font-bold text-white">Ajay's <span className="text-red-600 animate-pulse">Portfolio</span></div>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white focus:outline-none"
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
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <div className="bg-[#131313] py-2 px-4">
            <a
              href="#skills"
              className="block py-2 text-white font-semibold"
              onClick={() => setIsMenuOpen(false)}
            >
              Skills
            </a>
            <hr />
            <a
              href="#projects"
              className="block py-2 text-white font-semibold"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </a>
            <hr />
            <a
              href="#details"
              className="block py-2 text-white font-semibold"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
          </div>
        )}
      </div>

      <section className="min-h-[70vh] md:min-h-[80vh] flex items-center py-8 pt-20 md:pt-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col-reverse md:flex-row items-center gap-8">
            {/* Content Section */}
            <div className="md:w-7/12">
              <header className="mb-6">
                <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold text-gray-100 mb-2">
                  Desamsetty{" "}
                  <span className="text-red-600 animate-pulse">Sri Ajay</span>
                </h1>
                <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold">
                  Full Stack developer
                </h2>
              </header>
              <p className="text-gray-200 mb-6 text-sm md:text-base">
                Full Stack Developer with hands-on experience in building and
                deploying highly scalable web applications using the MERN stack.
                Developed AI-powered automation workflows with n8n, eliminating
                manual tasks through realtime email decision systems. Proficient
                in end-to-end development including secure authentication (JWT),
                cloud deployment (Vercel, Render), RESTful APIs, and Git version
                control.
              </p>

              <div className="mt-6">
                <a
                  href={Ajay_Resume}
                  download="Sri_Ajay_Resume"
                  className="block md:inline-block"
                >
                  <button
                    className="w-full md:w-auto bg-white text-black hover:bg-gray-200 font-bold py-2 px-4 md:py-3 md:px-6 rounded-lg transition-all duration-400 transform hover:-translate-y-1 md:hover:-translate-y-2 
                    focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 focus:outline-none aria-label=Download Resume"
                  >
                    Resume Download
                  </button>
                </a>
              </div>
            </div>

            <div className="md:w-5/12 flex justify-center mb-8 md:mb-0">
              <div className="relative w-50 h-50 md:w-74 md:h-74 overflow-hidden rounded-full border-4 border-black">
                <img
                  src={perfect}
                  alt="Desamsetty Sri Ajay - Full Stack Developer"
                  className="w-full h-full object-cover object-top  scale-130 transition-transform duration-300 transform "
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-12 md:py-16 ">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3">
              My <span className="text-red-700 animate-pulse">Skills</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto text-sm md:text-base">
              Technologies I've mastered to create full-stack applications
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
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
      <section id="projects" className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-12 md:mb-16">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3">
              My <span className="text-red-600 animate-pulse">Projects</span>
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
              Here are some of my featured works. Each project was built with
              passion and attention to detail.
            </p>
          </div>

          {/* Project Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visibleProjects.map((project) => (
              <div
                key={project.id}
                className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-[#131313] to-[#1c1c1c] border border-gray-800 hover:border-red-600 transition-all duration-500 hover:shadow-lg hover:shadow-red-900/20"
              >
                <div className="h-40 md:h-48 bg-gradient-to-r from-[#131313] to-[#1c1c1c] flex items-center justify-center">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="max-h-full max-w-full p-2 object-contain"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="text-gray-400">{project.title}</span>
                    </div>
                  )}
                </div>

                <div className="p-4 md:p-6">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4 text-sm md:text-base">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className={`px-2 py-1 text-xs md:text-sm bg-[#131313] rounded-full ${project.tagColors[idx]}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-4">
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-red-400 hover:text-red-300 font-medium flex items-center transition-colors text-sm md:text-base"
                    >
                      <svg
                        className="w-4 h-4 md:w-5 md:h-5 mr-1"
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
                      className="text-gray-400 hover:text-white font-medium flex items-center transition-colors text-sm md:text-base"
                    >
                      <svg
                        className="w-4 h-4 md:w-5 md:h-5 mr-1"
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
              className="px-6 py-2 md:px-8 md:py-3 bg-red-600 hover:bg-red-700 text-white font-medium rounded-full transition-all duration-300 transform hover:scale-105"
            >
              {showAllProjects ? "Show Less Projects" : "View All Projects"}
            </button>
          </div>
        </div>
      </section>

      {/* Get In Touch */}
      <section id="details" className="py-12 md:py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
            Get In <span className="text-red-600 animate-pulse">Touch</span>
          </h2>
          <p className="text-gray-300 mb-6 md:mb-8 max-w-xl mx-auto text-sm md:text-base">
            Feel free to connect with me through my social media profiles.
          </p>

          {/* Social Icons */}
          <div className="flex justify-center gap-6 mb-6">
            <a
              href="https://github.com/Desamsetty-SriAjay"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-400 transition duration-300"
              aria-label="GitHub Profile"
            >
              <FaGithub className="text-3xl md:text-4xl" />
            </a>

            <a
              href="https://www.linkedin.com/in/desamsettysriajay/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-400 transition duration-300"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin className="text-3xl md:text-4xl" />
            </a>

            <a
              href="mailto:desamsettysriajay@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-500 hover:text-red-400 transition duration-300"
              aria-label="Send Email"
            >
              <BiLogoGmail className="text-3xl md:text-4xl" />
            </a>
          </div>

          <div className="mt-4">
            <a
              href="mailto:desamsettysriajay@gmail.com"
              className=" inline-block px-4 py-2 bg-[#131313] hover:bg-[#302f2f] rounded-lg hover:text-white transition duration-300 text-sm md:text-base text-gray-200"
            >
              desamsettysriajay@gmail.com
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
