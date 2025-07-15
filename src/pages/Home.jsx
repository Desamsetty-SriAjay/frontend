import { useState } from "react";
import ajayImage from "../assets/ajayImage.jpg";
import Ajay_Resume from "../assets/Ajay_Resume.pdf";
import TrendyCart from "../assets/TrendyCart.png";
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
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";




const SkillCategory = ({ title, icons, colors,names, isOpen, onClick }) => (
  <div className="mb-6 overflow-hidden">
    <button
      onClick={onClick}
      className={`w-full py-4 px-6 rounded-xl text-left flex justify-between items-center transition-all duration-300 ${
        isOpen 
          ? "bg-gradient-to-r from-gray-900 to-black shadow-lg"
          : "bg-gray-800 hover:bg-gray-700"
          // : "bg-gray-800 hover:bg-gray-700"
      }`}
    >
      <span className="text-xl font-bold">{title}</span>
      <span className={`transform transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}>
        ▼
      </span>
    </button>
    
    <div className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mt-4 transition-all duration-500 ease-in-out overflow-hidden ${
      isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
    }`}>
      {icons.map((Icon, idx) => (
        <div 
          key={idx}
          className="flex flex-col items-center p-4 bg-gray-800 rounded-xl hover:bg-gray-700 transition-all duration-300 transform hover:-translate-y-1"
        >
          <Icon className={`text-6xl mb-2 ${colors[idx]}`} />
          <span className="text-sm text-gray-300">{names[idx]}</span>
        </div>
      ))}
    </div>
  </div>
);



const Home = () => {
  const [activeCategory, setActiveCategory] = useState(null);

  const toggleCategory = (category) => {
    setActiveCategory(activeCategory === category ? null : category);
  };

  const categories = [
    {
      id: "frontend",
      title: "Frontend Technologies",
      icons: [TiHtml5, BiSolidFileCss, IoLogoJavascript, SiTailwindcss, FaReact],
      colors: ["text-orange-500", "text-blue-500", "text-yellow-500", "text-blue-400", "text-blue-600"],
      names: ["HTML5", "CSS3", "JavaScript", "Tailwind CSS", "React"]
    },
    {
      id: "backend",
      title: "Backend Technologies",
      icons: [LiaNode, SiExpress],
      colors: ["text-green-500", "text-yellow-500"],
      names: ["Node.js", "Express"]
    },
    {
      id: "database",
      title: "Database Management",
      icons: [SiMongodb, PiFileSql],
      colors: ["text-green-800", "text-white"],
      names: ["MongoDB", "SQL"]
    },
    {
      id: "tools",
      title: "Development Tools",
      icons: [FaGitSquare],
      colors: ["text-orange-600"],
      names: ["Git"]
    }
  ];
  return (
    <div className="space-y-20 py-12">
      <section className="min-h-[80vh] flex items-center py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col-reverse md:flex-row items-center gap-5">
            {/* Content Section */}
            <div className="md:w-7/12">
              <header className="mb-6">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-100 mb-2">
                  Desamsetty <span className="text-red-600 animate-pulse">Sri Ajay</span>
                </h1>
                <h2 className="text-2xl md:text-3xl font-semibold">
                  Full Stack developer
                </h2>
              </header>
              <p className="prose prose-lg text-gray-200 mb-8 text-justify">
                Full Stack Developer with hands-on experience in building and
                deploying highly scalable web applications using the MERN stack.
                Developed AI-powered automation workflows with n8n,eliminating
                manual tasks through realtime email decision systems. Proficient
                in end-to-end development including secure authentication (JWT),
                cloud deployment (Vercel, Render),RESTful APIs, and Git version
                control.
              </p>

              <div className="mt-9">
                <a href={Ajay_Resume} download="Sri_Ajay_Resume">
                  <button
                    className="inline-block bg-white text-black hover:bg-gray-200 hover:text-gray-900 font-bold py-3 px-6 rounded-lg transition-all duration-400 transform hover:-translate-y-3 
                focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 focus:outline-none aria-label=Download Resume "
                  >
                    Resume Download
                  </button>
                </a>
              </div>
            </div>

            <div className="md:w-5/12 flex justify-center ">
              <div className="relative w-64 h-64 overflow-hidden rounded-full border-4 border-black bg-gradient-to-br from-gray-700 to-gray-900 shadow-xl">
                <img
                  src={ajayImage}
                  alt="Desamsetty Sri Ajay - Full Stack Developer"
                  className="w-full h-full object-cover object-center filter grayscale"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Skills Section */}
      <section id="skills" className="py-16 bg-[#141516]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              My <span className="text-red-700 animate-pulse">Skills</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
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
<section id="projects" className="py-20 bg-[#141516]">
  <div className="container mx-auto px-4">
    {/* Section Header */}
    <div className="text-center mb-16">
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
        My <span className="text-red-600 animate-pulse">Projects</span>
      </h1>
      <p className="text-gray-400 max-w-2xl mx-auto">
        Here are some of my featured works. Each project was built with passion and attention to detail.
      </p>
    </div>

    {/* Project Cards */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Project 1 */}
      <div className="group relative overflow-hidden rounded-xl bg-gray-900 border border-gray-800 hover:border-red-600 transition-all duration-500 hover:shadow-lg hover:shadow-red-900/20">
        <div className="h-48 bg-gradient-to-r from-gray-800 to-gray-700 flex items-center justify-center">
          <span className="text-gray-500 text-lg"><img src={TrendyCart} alt="TrendyCart"/></span>
        </div>
        
        <div className="p-6">
          <h3 className="text-2xl font-bold text-white mb-2">TrendyCart</h3>
          <p className="text-gray-400 mb-4">
            Full-stack e-commerce platform with product listings, category filtering, 
            cart functionality, and JWT authentication.
          </p>
          
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="px-3 py-1 bg-gray-800 text-red-400 rounded-full text-sm">React</span>
            <span className="px-3 py-1 bg-gray-800 text-blue-400 rounded-full text-sm">MongoDB</span>
            <span className="px-3 py-1 bg-gray-800 text-yellow-400 rounded-full text-sm">JavaScript</span>
            <span className="px-3 py-1 bg-gray-800 text-green-400 rounded-full text-sm">Node.js</span>
          </div>
          
          <div className="flex space-x-4">
            <a href="#" className="text-red-400 hover:text-red-300 font-medium flex items-center transition-colors">
              <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
              </svg>
              <a href="https://trendycart-frontend.vercel.app/" target="_blank">Live Demo</a>
            </a>
            <a href="#" className="text-gray-400 hover:text-white font-medium flex items-center transition-colors">
              <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
              </svg>
              <a href="https://github.com/Desamsetty-SriAjay/TrendyCart--Fashion-E-Commerce-Website" target="_blank">Source Code</a>
            </a>
          </div>
        </div>
      </div>

      {/* Project 2 */}
      <div className="group relative overflow-hidden rounded-xl bg-gray-900 border border-gray-800 hover:border-red-600 transition-all duration-500 hover:shadow-lg hover:shadow-red-900/20">
        <div className="h-48 bg-gradient-to-r from-gray-800 to-gray-700 flex items-center justify-center">
          <span className="text-gray-500 text-lg">Project Image</span>
        </div>
        
        <div className="p-6">
          <h3 className="text-2xl font-bold text-white mb-2">TaskMaster</h3>
          <p className="text-gray-400 mb-4">
            Productivity application with real-time collaboration, task management, 
            and deadline tracking features.
          </p>
          
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="px-3 py-1 bg-gray-800 text-blue-500 rounded-full text-sm">React</span>
            <span className="px-3 py-1 bg-gray-800 text-purple-400 rounded-full text-sm">Firebase</span>
            <span className="px-3 py-1 bg-gray-800 text-green-400 rounded-full text-sm">Tailwind CSS</span>
          </div>
          
          <div className="flex space-x-4">
            <a href="#" className="text-red-400 hover:text-red-300 font-medium flex items-center transition-colors">
              <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
              </svg>
              Live Demo
            </a>
            <a href="#" className="text-gray-400 hover:text-white font-medium flex items-center transition-colors">
              <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
              </svg>
              Source Code
            </a>
          </div>
        </div>
      </div>

      {/* Project 3 */}
      <div className="group relative overflow-hidden rounded-xl bg-gray-900 border border-gray-800 hover:border-red-600 transition-all duration-500 hover:shadow-lg hover:shadow-red-900/20">
        <div className="h-48 bg-gradient-to-r from-gray-800 to-gray-700 flex items-center justify-center">
          <span className="text-gray-500 text-lg">Project Image</span>
        </div>
        
        <div className="p-6">
          <h3 className="text-2xl font-bold text-white mb-2">WeatherWise</h3>
          <p className="text-gray-400 mb-4">
            Weather forecasting application with location detection, 5-day forecasts, 
            and severe weather alerts.
          </p>
          
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="px-3 py-1 bg-gray-800 text-blue-400 rounded-full text-sm">React</span>
            <span className="px-3 py-1 bg-gray-800 text-yellow-400 rounded-full text-sm">JavaScript</span>
            <span className="px-3 py-1 bg-gray-800 text-red-400 rounded-full text-sm">API Integration</span>
          </div>
          
          <div className="flex space-x-4">
            <a href="#" className="text-red-400 hover:text-red-300 font-medium flex items-center transition-colors">
              <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
              </svg>
              Live Demo
            </a>
            <a href="#" className="text-gray-400 hover:text-white font-medium flex items-center transition-colors">
              <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
              </svg>
              Source Code
            </a>
          </div>
        </div>
      </div>
    </div>

    {/* View More Button */}
    <div className="text-center mt-12">
      <button className="px-8 py-3 bg-red-600 hover:bg-red-700 text-white font-medium rounded-full transition-all duration-300 transform hover:scale-105">
        View All Projects
      </button>
    </div>
  </div>
</section>
{/* Get In Touch */}
<section id="details" className="py-16 bg-[#141516]">
  <div className="container mx-auto px-4 text-center">
    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
      Get In <span className="text-red-600 animate-pulse ">Touch</span>
    </h2>
    <p className="text-gray-300 mb-8 max-w-xl mx-auto">
      Feel free to connect with me through my social media profiles.
    </p>
    
    <div className="flex justify-center gap-6">
      <a
        href="https://github.com/Desamsetty-SriAjay"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-gray-400 transition duration-300"
        aria-label="GitHub Profile"
      >
        <FaGithub className="text-4xl" />
      </a>

      <a
        href="https://www.linkedin.com/in/desamsettysriajay/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:text-blue-400 transition duration-300"
        aria-label="LinkedIn Profile"
      >
        <FaLinkedin className="text-4xl" />
      </a>
    </div>
  </div>
</section>

    </div>
  );
};

export default Home;
