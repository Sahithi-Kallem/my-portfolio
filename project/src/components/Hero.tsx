import React from 'react';
import { ChevronDown, Linkedin, Mail, Phone, Download, Sparkles, Code, Brain } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-purple-500/5 to-cyan-500/5 rounded-full blur-3xl animate-spin-slow"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="space-y-12">
          {/* Floating icons */}
          <div className="relative">
            <Code className="absolute -top-16 -left-16 w-8 h-8 text-cyan-400/60 animate-float" />
            <Brain className="absolute -top-20 -right-12 w-10 h-10 text-purple-400/60 animate-float-delayed" />
            <Sparkles className="absolute -bottom-8 left-8 w-6 h-6 text-pink-400/60 animate-pulse" />
            
            <div className="space-y-6">
              <div className="inline-block">
                <span className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-full text-cyan-400 text-sm font-medium border border-cyan-500/30 backdrop-blur-sm">
                  ✨ AI Developer & Full-Stack Engineer
                </span>
              </div>
              
              <h1 className="text-6xl md:text-8xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-white via-cyan-200 to-purple-300 bg-clip-text text-transparent animate-gradient">
                  Sahithi
                </span>
                <br />
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent animate-gradient-reverse">
                  Kallem
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                Crafting intelligent solutions with{' '}
                <span className="text-cyan-400 font-semibold">AI innovation</span> and{' '}
                <span className="text-purple-400 font-semibold">full-stack expertise</span>
              </p>
              
              <p className="text-lg text-slate-400 max-w-4xl mx-auto leading-relaxed">
                Passionate about building the future through code, turning complex problems into elegant solutions, 
                and creating meaningful impact with cutting-edge technology.
              </p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a
              href="#contact"
              className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full font-semibold text-white shadow-2xl shadow-purple-500/25 hover:shadow-purple-500/40 transition-all duration-300 transform hover:scale-105"
            >
              <span className="relative z-10">Let's Connect</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
            
            <a
              href="#projects"
              className="group px-8 py-4 border-2 border-cyan-500/50 hover:border-cyan-400 text-cyan-400 hover:text-white rounded-full font-semibold transition-all duration-300 hover:bg-cyan-500/10 backdrop-blur-sm"
            >
              <span className="flex items-center space-x-2">
                <span>Explore Projects</span>
                <Sparkles className="w-4 h-4 group-hover:animate-spin" />
              </span>
            </a>
          </div>
          
          <div className="flex items-center justify-center space-x-8 pt-8">
            {[
              { icon: Linkedin, href: "https://linkedin.com/in/sahithi-kallem", color: "hover:text-blue-400" },
              { icon: Mail, href: "mailto:sahithi.kallem@gmail.com", color: "hover:text-green-400" },
              { icon: Phone, href: "tel:+917093547897", color: "hover:text-purple-400" }
            ].map(({ icon: Icon, href, color }, index) => (
              <a
                key={index}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className={`group p-4 bg-slate-800/50 backdrop-blur-sm rounded-2xl shadow-xl border border-slate-700/50 text-slate-400 ${color} transition-all duration-300 hover:scale-110 hover:shadow-2xl`}
              >
                <Icon size={24} className="group-hover:animate-pulse" />
              </a>
            ))}
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-cyan-400/60" />
        </div>
      </div>
    </section>
  );
};

export default Hero;