import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Send, Sparkles } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail size={24} />,
      label: "Email",
      value: "sahithi.kallem@gmail.com",
      href: "mailto:sahithi.kallem@gmail.com",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Phone size={24} />,
      label: "Phone",
      value: "+91 7093547897",
      href: "tel:+917093547897",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: <MapPin size={24} />,
      label: "Location",
      value: "Hyderabad, Telangana, India",
      href: null,
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: <Linkedin size={24} />,
      label: "LinkedIn",
      value: "sahithi-kallem",
      href: "https://linkedin.com/in/sahithi-kallem",
      gradient: "from-indigo-500 to-blue-500"
    }
  ];

  return (
    <section id="contact" className="py-32 relative">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-full text-cyan-400 text-sm font-medium border border-cyan-500/30 backdrop-blur-sm">
              <Send className="w-4 h-4 inline mr-2" />
              Let's Connect
            </span>
          </div>
          <h2 className="text-5xl font-bold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent mb-6">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            I'm always open to discussing new opportunities, innovative projects, or potential collaborations. 
            Let's create something amazing together!
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {contactInfo.map((item, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden"
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              <div className="p-8 bg-slate-800/30 backdrop-blur-sm rounded-3xl border border-slate-700/50 hover:border-slate-600/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl text-center">
                {/* Animated background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`}></div>
                
                <div className="relative z-10">
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${item.gradient} text-white rounded-2xl mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{item.label}</h3>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="text-slate-300 hover:text-cyan-400 transition-colors duration-300 break-words font-medium"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-slate-300 break-words font-medium">{item.value}</p>
                  )}
                </div>
                
                {/* Hover effect overlay */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <a
            href="mailto:sahithi.kallem@gmail.com"
            className="group relative inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full font-semibol text-white shadow-2xl shadow-purple-500/25 hover:shadow-purple-500/40 transition-all duration-300 transform hover:scale-105"
          >
            <span className="relative z-10">Send Message</span>
            <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;