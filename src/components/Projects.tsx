import { Github, Play, ExternalLink } from 'lucide-react';
import { useState } from 'react';
import VideoModal from './VideoModal';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  videoUrl: string;
  githubUrl: string;
  image: string;
}

export default function Projects() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: 'File Organizer Automation',
      description: 'Automated file sorting system that scans a folder, detects file types, and organizes them into structured directories like PDF, Images, Docs, and Videos. Handles duplicates using timestamp renaming and logs all actions.',
      technologies: ['UiPath Studio', 'File System Activities',],
      videoUrl: '1NUNOMKGSGzNqofdbDt0KpgI6opQtlIgs',
       githubUrl: 'https://github.com/Samz0001/FileOrganizerUipath',
       image:"https://thumbs2.imgbox.com/66/56/LEi8QUQm_t.jpg"
    },
    {
      id: 2,
      title: 'Clothing Consultant Bot ',
      description: 'A smart RPA bot that captures real-time city temperature using Google search and recommends suitable outfits. Uses web automation to fetch weather, applies rule-based logic for clothing suggestions.',
      technologies: ['UiPath Studio', 'Data Scraping', 'FlowChart Activity'],
      videoUrl: '1_33tycAqrADWvq9KPBcCqTbRUtat_ZZ-',
      githubUrl: 'https://github.com/Samz0001/Clothing_Consultant',
      image: "https://thumbs2.imgbox.com/38/17/4v6u4gEG_t.jpeg"
    },
    {
      id: 3,
      title: 'The Automation Challenge (RPA Web Form Automation)',
      description: 'Built an RPA bot to complete TheAutomationChallenge.com task, where the bot reads dynamic form data, inputs information into a rapidly changing web interface, handles unpredictable selectors, submits entries, and verifies results. The solution demonstrates advanced selector handling, speed optimization, and robust exception management.',
      technologies: ['UiPath Studio', 'Web Automation', 'Dynamic Selectors'],
      videoUrl: '16v74l7oSaryvwnj_dd2hkjYPF92LGWPE',
      githubUrl: 'https://github.com/Samz0001/Automation_Challenge_Bot3',
      image:"https://thumbs2.imgbox.com/6e/45/84HXMAQ5_t.png"
    },
    {
      id: 4,
      title: 'Zillow Property Data Capture Bot',
      description: 'Developed an RPA bot that scrapes real-estate listings from Zillow, extracts key property details (price, address, beds, baths, area), and exports all records into a structured Excel sheet. Includes dynamic selector handling, pagination automation, and validation of extracted entries.',
      technologies: ['UiPath Studio', 'Web Scraping', 'Dynamic Selectors', 'Excel Automation', 'Data Scraping'],
      videoUrl: '10-0s19UFiAiquby1PxWrQoTq9Y6Ww948',
      githubUrl: 'https://github.com/Samz0001/Robot4_ZillowCapturing',
      image:"https://images2.imgbox.com/7f/9d/aWgpuQD3_o.png"

    },
    {
      id: 5,
      title: 'UiPath ScreenPlay Automation Testing',
      description: 'Explored and tested UiPath’s new ScreenPlay activity to evaluate its performance and usability. Built sample UI workflows to understand how ScreenPlay automates steps without requiring separate Click or Type Into activities. Identified that execution is slower compared to traditional activities but improves workflow readability and simplicity.',
      technologies: ['UiPath Studio', 'ScreenPlay Activity', 'UI Automation', 'Performance Testing'],
      videoUrl: '1jJPowoX8Vtkq9gaCg9NZYi3OQczbA8xD',
      githubUrl: 'https://github.com/Samz0001/ScreenPlayUIPath',
      image:"https://images2.imgbox.com/78/8a/2DWBDWm7_o.png"
    }
    ,
    {
  id: 6,
  title: 'PDF Automation Suite',
  description: 'End-to-end PDF automation using UiPath PDF activities with OCR-based text extraction, image-to-text conversion, form reading, and automatic merging of multi-source PDFs into a unified document. Includes exception handling and structured data export.',
  technologies: ['UiPath Studio', 'PDF Activities', 'OCR (Tesseract/OmniPage)', 'Document Understanding', 'File I/O'],
  videoUrl: '1eKBS2vaSpfkzPSphKroAjNzAaCuJHcS7',
  githubUrl: 'https://github.com/Samz0001/PDFAutomation',
  image:"https://thumbs2.imgbox.com/57/58/8ez8xCqC_t.png"
}

  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">My Projects</h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Explore my portfolio of RPA solutions built with UiPath Studio. Each project demonstrates
            real-world automation challenges and innovative solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <button
                  onClick={() => setSelectedVideo(project.videoUrl)}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-colors shadow-lg"
                >
                  <Play size={28} className="text-white ml-1" fill="white" />
                </button>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-slate-600 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-lg transition-colors text-sm font-medium"
                  >
                    <Github size={18} />
                    GitHub
                  </a>
                  <button
                    onClick={() => setSelectedVideo(project.videoUrl)}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors text-sm font-medium"
                  >
                    <ExternalLink size={18} />
                    Demo
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedVideo && (
        <VideoModal
          videoId={selectedVideo}
          onClose={() => setSelectedVideo(null)}
        />
      )}
    </section>
  );
}
