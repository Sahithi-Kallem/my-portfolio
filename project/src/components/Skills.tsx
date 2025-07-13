import React from 'react';
import { Code, Database, Cloud, Wrench, Users, Brain, Sparkles, Zap } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: <Code size={32} />,
      title: "Languages & Frameworks",
      skills: ["Java", "Python", "JavaScript", "HTML", "CSS", "React.js", "Flask", "FastAPI"],
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-500/10 to-cyan-500/10"
    },
    {
      icon: <Brain size={32} />,
      title: "AI & Machine Learning",
      skills: ["Generative AI", "Prompt Engineering", "LLM Integration", "Model Deployment", "Data Analysis"],
      color: "from-purple-500 to-pink-500",
      bgColor: "from-purple-500/10 to-pink-500/10"
    },
    {
      icon: <Zap size={32} />,
      title: "Web Development",
      skills: ["REST API Integration", "Chrome Extension Development", "Interactive UI Design", "Real-time Data Handling"],
      color: "from-green-500 to-emerald-500",
      bgColor: "from-green-500/10 to-emerald-500/10"
    },
    {
      icon: <Database size={32} />,
      title: "Databases & Cloud",
      skills: ["MySQL", "Firebase", "Google Cloud Platform"],
      color: "from-orange-500 to-red-500",
      bgColor: "from-orange-500/10 to-red-500/10"
    },
    {
      icon: <Wrench size={32} />,
      title: "Tools & Platforms",
      skills: ["Git & GitHub", "Ollama", "Streamlit"],
      color: "from-indigo-500 to-purple-500",
      bgColor: "from-indigo-500/10 to-purple-500/10"
    },
    {
      icon: <Users size={32} />,
      title: "Soft Skills",
      skills: ["Communication", "Presentation", "Time Management", "Teamwork", "Leadership"],
      color: "from-teal-500 to-cyan-500",
      bgColor: "from-teal-500/10 to-cyan-500/10"
    }
  ];

  return (
    <section id="skills" className="py-32 relative">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-full text-cyan-400 text-sm font-medium border border-cyan-500/30 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 inline mr-2" />
              Technical Arsenal
            </span>
          </div>
          <h2 className="text-5xl font-bold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent mb-6">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="group relative p-8 bg-slate-800/30 backdrop-blur-sm rounded-3xl border border-slate-700/50 hover:border-slate-600/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl"
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              {/* Animated background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.bgColor} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              <div className="relative z-10">
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`p-4 bg-gradient-to-r ${category.color} rounded-2xl text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-white transition-colors duration-300">
                    {category.title}
                  </h3>
                </div>
                
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className="px-4 py-2 bg-slate-700/50 hover:bg-slate-600/50 text-slate-300 hover:text-white rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 cursor-default border border-slate-600/30 hover:border-slate-500/50"
                      style={{
                        animationDelay: `${(index * 100) + (skillIndex * 50)}ms`
                      }}
                    >
                      {skill}
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

export default Skills;