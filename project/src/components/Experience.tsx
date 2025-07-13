import React from 'react';
import { Briefcase, Calendar, MapPin, Sparkles, Zap } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/30 to-transparent"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-full text-cyan-400 text-sm font-medium border border-cyan-500/30 backdrop-blur-sm">
              <Zap className="w-4 h-4 inline mr-2" />
              Professional Journey
            </span>
          </div>
          <h2 className="text-5xl font-bold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent mb-6">
            Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Animated timeline line */}
            <div className="absolute left-12 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-400 via-purple-500 to-pink-500 rounded-full"></div>
            
            <div className="relative flex items-start space-x-8 group">
              {/* Animated icon */}
              <div className="flex-shrink-0 relative">
                <div className="w-24 h-24 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center shadow-2xl shadow-purple-500/25 group-hover:shadow-purple-500/40 transition-all duration-500 group-hover:scale-110">
                  <Briefcase className="text-white" size={32} />
                </div>
                {/* Pulsing ring */}
                <div className="absolute inset-0 rounded-full border-4 border-cyan-400/30 animate-ping"></div>
              </div>
              
              <div className="flex-1 group-hover:transform group-hover:translate-x-2 transition-transform duration-500">
                <div className="p-8 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-3xl border border-slate-700/50 group-hover:border-cyan-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/10">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                    <div className="space-y-2">
                      <h3 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                        AI Developer Intern
                      </h3>
                      <p className="text-xl text-purple-400 font-semibold">Viswam.AI</p>
                    </div>
                    <div className="flex flex-col space-y-2 mt-4 lg:mt-0">
                      <div className="flex items-center space-x-2 text-slate-400">
                        <Calendar size={16} />
                        <span className="text-sm font-medium">June 2025 - July 2025</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-slate-300 leading-relaxed mb-6 text-lg">
                    Fine-tuning AI models which contributes to building a{' '}
                    <span className="text-cyan-400 font-semibold">Telugu Large Language Model (LLM)</span>. 
                    Gained hands-on experience in model optimization, training processes, and working with 
                    multilingual AI systems.
                  </p>
                  
                  <div className="flex flex-wrap gap-3">
                    {[
                      "AI Model Fine-tuning",
                      "LLM Development", 
                      "Telugu Language Processing",
                      "Model Optimization"
                    ].map((skill, index) => (
                      <span 
                        key={index}
                        className="px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 rounded-full text-sm font-medium border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;