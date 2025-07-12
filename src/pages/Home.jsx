import { useState } from "react";
import ajayImage from "../assets/ajayImage.jpg";
import Ajay_Resume from "../assets/Ajay_Resume.pdf";
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


const SkillCategory = ({ title, icons, colors, isOpen, onClick }) => (
  <div className="mb-6 overflow-hidden">
    <button
      onClick={onClick}
      className={`w-full py-4 px-6 rounded-xl text-left flex justify-between items-center transition-all duration-300 ${
        isOpen 
          ? "bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg"
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
          <span className="text-sm text-gray-300">{Icon.displayName || Icon.name}</span>
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
      colors: ["text-orange-500", "text-blue-500", "text-yellow-500", "text-blue-400", "text-blue-600"]
    },
    {
      id: "backend",
      title: "Backend Technologies",
      icons: [LiaNode, SiExpress],
      colors: ["text-green-500", "text-yellow-500"]
    },
    {
      id: "database",
      title: "Database Management",
      icons: [SiMongodb, PiFileSql],
      colors: ["text-green-800", "text-white"]
    },
    {
      id: "tools",
      title: "Development Tools",
      icons: [FaGitSquare],
      colors: ["text-orange-600"]
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
                  Desamsetty Sri Ajay
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
      <section id="skills" className="py-16 bg-[#141516] ">
        
        
        {/* bg-radial-[at_25%_25%] from-zinc-700 to-zinc-900 to-75% */}
        
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              My <span className="text-red-700">Skills</span>
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
                isOpen={activeCategory === category.id}
                onClick={() => toggleCategory(category.id)}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
