import { useState } from 'react';
import ProjectModal from './ProjectModal';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const projects = [
    {
      id: 1,
      title: 'E-commerce Website',
      description: 'A fully responsive e-commerce platform built with React and Node.js.',
      technologies: ['React', 'Node.js', 'MongoDB'],
      image: 'http://static.photos/technology/640x360/1',
      demoLink: '#',
      githubLink: '#'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A productivity application for managing tasks and projects with team collaboration.',
      technologies: ['Vue.js', 'Firebase', 'Tailwind CSS'],
      image: 'http://static.photos/technology/640x360/2',
      demoLink: '#',
      githubLink: '#'
    },
    {
      id: 3,
      title: 'Portfolio Website',
      description: 'A minimalist portfolio website for a photographer with image gallery.',
      technologies: ['HTML/CSS', 'JavaScript', 'GSAP'],
      image: 'http://static.photos/technology/640x360/3',
      demoLink: '#',
      githubLink: '#'
    },
    {
      id: 4,
      title: 'Weather Dashboard',
      description: 'Real-time weather forecasting application with interactive maps.',
      technologies: ['React', 'API', 'Chart.js'],
      image: 'http://static.photos/technology/640x360/4',
      demoLink: '#',
      githubLink: '#'
    },
    {
      id: 5,
      title: 'Fitness Tracker',
      description: 'Mobile-first fitness application with workout plans and progress tracking.',
      technologies: ['React Native', 'Firebase', 'Redux'],
      image: 'http://static.photos/technology/640x360/5',
      demoLink: '#',
      githubLink: '#'
    },
    {
      id: 6,
      title: 'Recipe Finder',
      description: 'Interactive recipe database with search, filtering, and meal planning.',
      technologies: ['Vue.js', 'API', 'IndexedDB'],
      image: 'http://static.photos/technology/640x360/6',
      demoLink: '#',
      githubLink: '#'
    }
  ];

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-4" data-aos="fade-up">My Projects</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto mb-6" data-aos="fade-up" data-aos-delay="100"></div>
          <p className="text-gray-600 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="200">Here are some of my recent projects that showcase my skills and expertise.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="bg-white rounded-lg overflow-hidden shadow-md project-card transition duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="px-3 py-1 bg-indigo-100 text-indigo-800 text-xs rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                <button
                  onClick={() => openModal(project)}
                  className="text-indigo-600 font-medium hover:text-indigo-800 transition"
                >
                  View Project →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <ProjectModal
        isOpen={isModalOpen}
        onClose={closeModal}
        project={selectedProject}
      />
    </section>
  );
};

export default Projects;
