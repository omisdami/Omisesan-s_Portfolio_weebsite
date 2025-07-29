import React from 'react';
import { Github, Linkedin, Mail, Download, ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const downloadResume = () => {
    // You'll need to add your actual resume file to the public folder
    const link = document.createElement('a');
    link.href = '/resume.pdf'; // Add your resume file here
    link.download = 'Your_Name_Resume.pdf';
    link.click();
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-6 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="w-32 h-32 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6 flex items-center justify-center text-white text-4xl font-bold">
              AO
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6 leading-tight">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Abdul-rasaq Omisesan
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
            Data Scientist & AI Developer
          </p>
          
          <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto">
            Building relevant Ml solutions that make impact. 
            Transforming data into actionable insights and creating AI architectures that tackle real world problems.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button
              onClick={downloadResume}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-medium transition-all duration-200 flex items-center gap-2 hover:scale-105"
            >
              <Download size={20} />
              Download Resume
            </button>
            
            <a
              href="mailto:omisdami@gmail.com"
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-full font-medium transition-all duration-200 flex items-center gap-2 hover:scale-105"
            >
              <Mail size={20} />
              Get In Touch
            </a>
          </div>
          
          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/omisdami"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 transition-colors duration-200 hover:scale-110 transform"
            >
              <Github size={28} />
            </a>
            <a
              href="https://www.linkedin.com/in/abdul-rasaq-omisesan-2b3a121b5/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 transition-colors duration-200 hover:scale-110 transform"
            >
              <Linkedin size={28} />
            </a>
          </div>
          
          <button
            onClick={scrollToProjects}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 hover:text-blue-600 transition-colors duration-200 animate-bounce"
          >
            <ChevronDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;