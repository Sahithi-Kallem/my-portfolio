import React from 'react';
import { GraduationCap, MapPin, Award, Sparkles } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/50 to-transparent"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-full text-cyan-400 text-sm font-medium border border-cyan-500/30 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 inline mr-2" />
              Get to know me
            </span>
          </div>
          <h2 className="text-5xl font-bold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <p className="text-lg text-slate-300 leading-relaxed">
                I'm a highly motivated engineering student with an insatiable passion for{' '}
                <span className="text-cyan-400 font-semibold">continuous learning</span> and{' '}
                <span className="text-purple-400 font-semibold">innovation</span>. 
                My journey is driven by the desire to enhance my skill set and apply knowledge 
                to build meaningful, real-world solutions.
              </p>
              
              <p className="text-lg text-slate-300 leading-relaxed">
                I thrive on staying updated with emerging technologies and find joy in transforming 
                abstract ideas into{' '}
                <span className="text-gradient bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent font-semibold">
                  impactful products
                </span>{' '}
                that add genuine value to society. My expertise spans AI/ML integration, 
                full-stack development, and creating user-centric applications.
              </p>
            </div>
            
            <div className="flex items-center space-x-4 p-4 bg-slate-800/30 backdrop-blur-sm rounded-2xl border border-slate-700/50">
              <MapPin className="text-cyan-400 flex-shrink-0" size={20} />
              <span className="text-slate-300">Hyderabad, Telangana, India</span>
            </div>
          </div>
          
          <div className="space-y-8">
            <div className="group p-8 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-3xl border border-slate-700/50 hover:border-cyan-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/10">
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-3 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl">
                  <GraduationCap className="text-cyan-400" size={28} />
                </div>
                <h3 className="text-2xl font-bold text-white">Education</h3>
              </div>
              
              <div className="space-y-6">
                <div className="relative">
                  <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-cyan-400 to-purple-500 rounded-full"></div>
                  <div className="pl-6">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-bold text-white text-lg">Bachelor of Technology</h4>
                      <div className="flex items-center space-x-2">
                        <Award className="w-4 h-4 text-yellow-400" />
                        <span className="text-yellow-400 font-semibold text-sm">9.32 GPA</span>
                      </div>
                    </div>
                    <p className="text-cyan-400 font-medium">Computer Science Engineering</p>
                    <p className="text-slate-400">Gokaraju Rangaraju Institute of Technology</p>
                    <p className="text-sm text-slate-500">2026</p>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-purple-400 to-pink-400 rounded-full"></div>
                  <div className="pl-6">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-bold text-white">Intermediate (MPC)</h4>
                      <div className="flex items-center space-x-2">
                        <Award className="w-4 h-4 text-yellow-400" />
                        <span className="text-yellow-400 font-semibold text-sm">97.9%</span>
                      </div>
                    </div>
                    <p className="text-purple-400 font-medium">Mathematics, Physics, Chemistry</p>
                    <p className="text-slate-400">Narayana Junior College</p>
                    <p className="text-sm text-slate-500">2022</p>
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

export default About;
