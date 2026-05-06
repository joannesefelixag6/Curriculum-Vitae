/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import profilePic from "./assets/images/regenerated_image_1778087600693.jpg";
import { 
  Github, 
  Linkedin, 
  Mail, 
  MapPin, 
  Phone, 
  ExternalLink, 
  Code2, 
  Database, 
  Cpu, 
  Briefcase, 
  GraduationCap, 
  User, 
  Languages, 
  CheckCircle2,
  Globe
} from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function App() {
  const skills = {
    frontend: ["HTML5", "CSS3", "JavaScript (ES6+)", "React.js", "Bootstrap", "Tailwind CSS"],
    backend: ["Node.js", "Express.js", "RESTful APIs", "JWT Authentication"],
    tools: ["MySQL", "MongoDB", "Git & GitHub", "VS Code", "Postman", "Render / Vercel"]
  };

  const projects = [
    {
      title: "E-Commerce Web App",
      description: "Fullstack e-commerce application with product listing, cart, user authentication, and order management.",
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
      github: "github.com/joanaghedo/ecommerce-app"
    },
    {
      title: "Task Management App",
      description: "A task management application with user authentication, create/update/delete tasks, and tracking progress.",
      tech: ["React.js", "Node.js", "Express.js", "MongoDB"],
      github: "github.com/joanaghedo/task-management-app"
    },
    {
      title: "Portfolio Website",
      description: "Personal portfolio to showcase projects, skills and experience.",
      tech: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
      github: "github.com/joanaghedo/portfolio"
    }
  ];

  return (
    <div className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-sans selection:bg-[#388bfd] selection:text-white">
      {/* Search/Header Bar Mockup */}
      <header className="border-b border-[#30363d] bg-[#161b22] px-4 py-3 flex items-center justify-between sticky top-0 z-50">
        <div className="flex items-center gap-4">
          <div className="bg-[#c9d1d9] p-1.5 rounded-full text-black">
            <Github size={20} />
          </div>
          <nav className="hidden md:flex gap-4 text-sm font-semibold">
            <a href="#" className="hover:text-white transition-colors">Dashboard</a>
            <a href="#" className="text-white border-b-2 border-[#f78166] pb-1">Portfolio</a>
            <a href="#" className="hover:text-white transition-colors">Projects</a>
            <a href="#" className="hover:text-white transition-colors">Contributions</a>
          </nav>
        </div>
        <div className="flex items-center gap-3">
          <div className="hidden sm:block">
            <div className="bg-[#0d1117] border border-[#30363d] rounded-md px-3 py-1 flex items-center gap-2 text-xs text-[#8b949e]">
              <span>Search or jump to...</span>
              <kbd className="border border-[#30363d] rounded px-1">/</kbd>
            </div>
          </div>
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 overflow-hidden border border-[#30363d]">
            {/* User Profile Pic Placeholder */}
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Sidebar - Profile Info */}
        <motion.aside 
          className="lg:col-span-3 space-y-6"
          initial="initial"
          animate="animate"
          variants={fadeIn}
        >
          <div className="relative group">
            <div className="w-full aspect-square rounded-full border border-[#30363d] overflow-hidden bg-[#161b22]">
              <img 
                src={profilePic} 
                alt="Joan Aghedo" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-1 -right-1 bg-[#161b22] border border-[#30363d] rounded-full p-2 group-hover:scale-110 transition-transform">
              <User size={16} />
            </div>
          </div>

          <div className="space-y-4 pt-4">
            <div>
              <h1 className="text-2xl font-bold text-white tracking-tight">Joan Aghedo</h1>
              <p className="text-[#8b949e] font-mono text-sm uppercase tracking-wider mt-1">Fullstack Web Developer Student</p>
            </div>

            <button className="w-full bg-[#21262d] hover:bg-[#30363d] border border-[#30363d] rounded-md py-1.5 text-sm font-medium transition-colors text-[#c9d1d9]">
              Edit profile
            </button>

            <div className="text-sm space-y-2.5">
              <p className="flex items-center gap-2">
                <MapPin size={16} className="text-[#8b949e]" />
                <span>Las Palmas de Gran Canaria, Spain</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail size={16} className="text-[#8b949e]" />
                <a href="mailto:joanfelixag6@gmail.com" className="hover:text-blue-400">joanfelixag6@gmail.com</a>
              </p>
              <p className="flex items-center gap-2">
                <Phone size={16} className="text-[#8b949e]" />
                <span>+34 603 302 378</span>
              </p>
              <div className="flex items-center gap-2">
                <Linkedin size={16} className="text-[#8b949e]" />
                <a href="https://linkedin.com/in/joan-aghedo" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">linkedin.com/in/joan-aghedo</a>
              </div>
              <div className="flex items-center gap-2">
                <Github size={16} className="text-[#8b949e]" />
                <a href="https://github.com/joanaghedo" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">github.com/joanaghedo</a>
              </div>
            </div>

            <div className="pt-4 border-t border-[#30363d]">
              <h3 className="text-sm font-semibold mb-3">Languages</h3>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between items-center bg-[#161b22] p-2 rounded border border-[#30363d]/50">
                  <span className="flex items-center gap-2"><Globe size={14} className="text-blue-400"/> Spanish</span>
                  <span className="text-[#8b949e] italic">Native</span>
                </div>
                <div className="flex justify-between items-center bg-[#161b22] p-2 rounded border border-[#30363d]/50">
                  <span className="flex items-center gap-2"><Globe size={14} className="text-green-400"/> English</span>
                  <span className="text-[#8b949e] italic">Intermediate</span>
                </div>
              </div>
            </div>
          </div>
        </motion.aside>

        {/* Main Content Area */}
        <div className="lg:col-span-9 space-y-8">
          
          {/* Summary Section */}
          <motion.section 
            className="border border-[#30363d] rounded-lg bg-[#161b22] overflow-hidden"
            initial="initial"
            animate="animate"
            variants={fadeIn}
          >
            <div className="border-b border-[#30363d] bg-[#1c2128] px-4 py-2 flex items-center gap-2">
              <User size={16} className="text-[#8b949e]" />
              <span className="text-sm font-mono uppercase tracking-widest text-[#8b949e]">Professional Summary</span>
            </div>
            <div className="p-6">
              <p className="leading-relaxed text-lg">
                Fullstack Web Development student with strong interest in building <span className="text-white font-medium">efficient, scalable, and user-focused</span> web applications. Proficient in both frontend and backend technologies. Committed to writing clean code and continuously improving skills. Ready to bring value to a company and grow as a developer.
              </p>
            </div>
          </motion.section>

          {/* Projects Section */}
          <section className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold flex items-center gap-2">
                <Briefcase size={20} className="text-[#f78166]" />
                Pinned Projects
              </h2>
              <span className="text-sm text-[#8b949e] hover:text-blue-400 cursor-pointer">View all repositories</span>
            </div>
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
              variants={staggerChildren}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {projects.map((project, index) => (
                <motion.div 
                  key={index}
                  variants={fadeIn}
                  className="bg-[#161b22] border border-[#30363d] rounded-lg p-5 hover:border-blue-500/50 transition-all group flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2 text-blue-400 font-semibold group-hover:underline">
                        <Code2 size={18} />
                        <h3>{project.title}</h3>
                      </div>
                      <span className="text-[10px] border border-[#30363d] rounded-full px-2 py-0.5 text-[#8b949e]">Public</span>
                    </div>
                    <p className="text-sm text-[#8b949e] mb-4 line-clamp-2">
                      {project.description}
                    </p>
                  </div>
                  <div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((t, i) => (
                        <span key={i} className="text-[10px] font-mono bg-[#0d1117] text-[#58a6ff] px-2 py-0.5 rounded border border-[#30363d]">
                          {t}
                        </span>
                      ))}
                    </div>
                    <a 
                      href={`https://${project.github}`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-xs text-[#8b949e] flex items-center gap-1 hover:text-white"
                    >
                      <Github size={12} />
                      {project.github}
                    </a>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </section>

          {/* Skills Grid */}
          <section className="space-y-4">
            <h2 className="text-lg font-semibold flex items-center gap-2">
              <Cpu size={20} className="text-[#238636]" />
              Technical Skills
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {Object.entries(skills).map(([category, items], idx) => (
                <motion.div 
                  key={category}
                  className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <h3 className="text-sm font-mono text-[#8b949e] uppercase tracking-widest mb-4 border-b border-[#30363d] pb-2 flex items-center justify-between">
                    {category}
                    {category === 'frontend' && <Globe size={14} />}
                    {category === 'backend' && <Database size={14} />}
                    {category === 'tools' && <Code2 size={14} />}
                  </h3>
                  <ul className="space-y-2">
                    {items.map((skill, i) => (
                      <li key={i} className="text-sm flex items-center gap-2 group cursor-default">
                        <CheckCircle2 size={14} className="text-[#238636] opacity-50 group-hover:opacity-100 transition-opacity" />
                        <span className="group-hover:text-white transition-colors">{skill}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Education & About */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <section className="space-y-4">
              <h2 className="text-lg font-semibold flex items-center gap-2">
                <GraduationCap size={20} className="text-[#8957e5]" />
                Education
              </h2>
              <div className="space-y-4">
                <div className="relative pl-6 border-l border-[#30363d]">
                  <div className="absolute left-[-5px] top-1 w-2 h-2 rounded-full bg-[#8957e5]" />
                  <h3 className="font-semibold text-white">Fullstack Web Development</h3>
                  <p className="text-sm text-blue-400">Online Course / Bootcamp</p>
                  <p className="text-xs text-[#8b949e] mt-1">2024 - Present</p>
                  <p className="text-xs mt-2 italic text-[#8b949e]">Focusing on modern web technologies, databases, and best practices.</p>
                </div>
                <div className="relative pl-6 border-l border-[#30363d]">
                  <div className="absolute left-[-5px] top-1 w-2 h-2 rounded-full bg-[#30363d]" />
                  <h3 className="font-semibold text-white">Tecnico en Cuidado de Auxiliar de Enfermeria</h3>
                  <p className="text-sm text-blue-400">Technical Education</p>
                  <p className="text-xs text-[#8b949e] mt-1">Completed 2018</p>
                </div>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-lg font-semibold flex items-center gap-2">
                <User size={20} className="text-[#d29922]" />
                Soft Skills
              </h2>
              <div className="flex flex-wrap gap-2">
                {["Problem Solving", "Communication", "Teamwork", "Time Management", "Adaptability", "Attention to Detail", "Willingness to Learn"].map(skill => (
                  <span key={skill} className="text-xs bg-[#21262d] border border-[#30363d] px-3 py-1.5 rounded-full hover:bg-[#30363d] transition-colors">
                    {skill}
                  </span>
                ))}
              </div>
              <div className="pt-4 border-t border-[#30363d] mt-4">
                <p className="text-xs text-[#8b949e]">
                  Available for: <code className="text-blue-400 bg-blue-400/10 px-1 rounded">Full-time</code> / <code className="text-purple-400 bg-purple-400/10 px-1 rounded">Remote</code> / <code className="text-teal-400 bg-teal-400/10 px-1 rounded">Hybrid</code>
                </p>
              </div>
            </section>
          </div>

        </div>
      </main>

      <footer className="mt-20 border-t border-[#30363d] py-10 px-4 bg-[#161b22]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4 text-xs text-[#8b949e]">
            <Github size={20} />
            <span>&copy; {new Date().getFullYear()} Joan Aghedo</span>
            <a href="#" className="hover:text-blue-400 underline decoration-[#30363d] underline-offset-4">Terms</a>
            <a href="#" className="hover:text-blue-400 underline decoration-[#30363d] underline-offset-4">Privacy</a>
            <a href="#" className="hover:text-blue-400 underline decoration-[#30363d] underline-offset-4">Security</a>
          </div>
          <div className="flex gap-4">
            <a href="https://github.com/joanaghedo" className="text-[#8b949e] hover:text-[#c9d1d9]"><Github size={18} /></a>
            <a href="https://linkedin.com/in/joan-aghedo" className="text-[#8b949e] hover:text-[#c9d1d9]"><Linkedin size={18} /></a>
            <a href="mailto:joanfelixag6@gmail.com" className="text-[#8b949e] hover:text-[#c9d1d9]"><Mail size={18} /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}

