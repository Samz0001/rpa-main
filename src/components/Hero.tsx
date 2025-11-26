import { Github, Linkedin, Mail } from 'lucide-react';
import profileImg from  '../images/SHYAM.jpg';

export default function Hero() {
  return (
    <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-4">
              RPA Developer
            </h1>
            <h2 className="text-2xl md:text-3xl text-blue-600 mb-6">
              Automation Specialist
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Transforming business processes through intelligent automation with UiPath Studio.
              Specialized in building robust, scalable RPA solutions that drive efficiency and innovation.
            </p>
            <div className="flex gap-4 justify-center md:justify-start">
              <a
                href="#contact"
                className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                Get in Touch
              </a>
              <a
                href="#projects"
                className="px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg font-medium hover:bg-blue-50 transition-colors"
              >
                View Projects
              </a>
            </div>
            <div className="flex gap-4 mt-8 justify-center md:justify-start">
              <a
                href="https://github.com/Samz0001"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-200 hover:bg-slate-300 rounded-full transition-colors"
              >
                <Github size={24} className="text-slate-700" />
              </a>
              <a
                href="https://www.linkedin.com/in/shyam-dua-a3513b301/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-200 hover:bg-slate-300 rounded-full transition-colors"
              >
                <Linkedin size={24} className="text-slate-700" />
              </a>
              {/* <a
                href="mailto:shyamdua234@gmail.com"
                className="p-3 bg-slate-200 hover:bg-slate-300 rounded-full transition-colors"
              >
                <Mail size={24} className="text-slate-700" />
              </a> */}
            </div>
          </div>

          <div className="flex-1 flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden border-8 border-white shadow-2xl">
                <img
                  src={profileImg}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* <div className="absolute -bottom-4 -right-4 bg-blue-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg">
                UiPath Certified
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
