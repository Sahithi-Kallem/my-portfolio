import React from 'react';
import { Heart, Code2 } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative py-12 border-t border-slate-800/50">
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 text-slate-400 mb-4">
            <Code2 className="w-5 h-5 text-cyan-400" />
            <span>© </span>
            <span className="font-medium">2025 Sahithi Kallem</span>
          </div>
          <p className="flex items-center justify-center space-x-2 text-slate-500">
            <span>Built with</span>
            <Heart size={16} className="text-red-500 animate-pulse" />
            <span>and</span>
            <span className="text-cyan-400 font-medium">React</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;