import React from 'react';
import { ExternalLink, Github, Sparkles, Rocket } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Travel Time Optimizer",
      description: "A Flask web app to optimize travel times in Hyderabad, India, using TomTom APIs for routing and Weatherstack for weather data. Calculates the best departure time to reach your destination by a specified arrival time, factoring in traffic and weather.",
      technologies: ["Flask", "Python", "TomTom API", "Weatherstack API", "HTML/CSS"],
      github: "https://github.com/Sahithi-Kallem/TravelTimeOptimiser",
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-500/10 to-cyan-500/10"
    },
    {
      title: "Hyderabad Metro Congestion Predictor",
      description: "Developed a Hyderabad Metro Congestion Predictor app using Python and Streamlit, integrating XGBoost machine learning to predict congestion levels based on historical GTFS data, weather, events, and holidays, with a user-friendly interface featuring dynamic theme support.",
      technologies: ["Python", "Streamlit", "XGBoost", "Machine Learning", "GTFS Data"],
      github: "https://github.com/Sahithi-Kallem/HydMetroCongestion_pred",
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-500/10 to-pink-500/10"
    },
    {
      title: "Smart PDF Analyzer – AI-Powered EdTech Tool",
      description: "Built a full-stack web application that summarizes academic PDFs and generates interactive quizzes using Google Gemini AI (Gemini 1.5 Flash). Implemented PDF parsing, JSON-based quiz formatting, and dynamic quiz flow with score tracking and explanations.",
      technologies: ["React", "Node.js", "Google Gemini AI", "PDF Processing", "Full-Stack"],
      github: "https://github.com/Sahithi-Kallem/smart-pdf-quiz",
      gradient: "from-green-500 to-emerald-500",
      bgGradient: "from-green-500/10 to-emerald-500/10"
    },
    {
      title: "Help Bot – AI-Powered Chrome Extension",
      description: "Currently developing a Chrome Extension that enables users to ask natural language questions about the webpage they're viewing and receive intelligent, context-aware answers powered by a local LLM (gemma:2b) via Ollama.",
      technologies: ["Chrome Extension", "JavaScript", "Ollama", "Local LLM", "Gemma 2B"],
      github: null,
      gradient: "from-orange-500 to-red-500",
      bgGradient: "from-orange-500/10 to-red-500/10",
      inProgress: true
    }
  ];

  return (
    <section id="projects" className="py-32 relative">
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/6 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/6 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-full text-cyan-400 text-sm font-medium border border-cyan-500/30 backdrop-blur-sm">
              <Rocket className="w-4 h-4 inline mr-2" />
              Featured Work
            </span>
          </div>
          <h2 className="text-5xl font-bold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent mb-6">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden bg-slate-800/30 backdrop-blur-sm rounded-3xl border border-slate-700/50 hover:border-slate-600/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl"
              style={{
                animationDelay: `${index * 150}ms`
              }}
            >
              {/* Animated background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              {/* Content */}
              <div className="relative z-10 p-8">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="text-xl font-bold text-white group-hover:text-white transition-colors duration-300">
                        {project.title}
                      </h3>
                      {project.inProgress && (
                        <span className="px-2 py-1 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 text-yellow-400 text-xs font-medium rounded-full border border-yellow-500/30">
                          In Progress
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex space-x-3">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-slate-700/50 hover:bg-slate-600/50 rounded-xl text-slate-400 hover:text-white transition-all duration-300 hover:scale-110 group/icon"
                      >
                        <Github size={20} className="group-hover/icon:animate-pulse" />
                      </a>
                    )}
                  </div>
                </div>
                
                <p className="text-slate-300 leading-relaxed mb-6 group-hover:text-slate-200 transition-colors duration-300">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className={`px-3 py-1 bg-gradient-to-r ${project.gradient} bg-opacity-20 text-white rounded-full text-sm font-medium border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105`}
                      style={{
                        animationDelay: `${(index * 150) + (techIndex * 50)}ms`
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Hover effect overlay */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;