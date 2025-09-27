const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-4" data-aos="fade-up">My Projects</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto mb-6" data-aos="fade-up" data-aos-delay="100"></div>
          <p className="text-gray-600 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="200">Here are some of my recent projects that showcase my skills and expertise.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Project 1 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md project-card transition duration-300" data-aos="fade-up">
            <img src="http://static.photos/technology/640x360/1" alt="Project 1" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">E-commerce Website</h3>
              <p className="text-gray-600 mb-4">A fully responsive e-commerce platform built with React and Node.js.</p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-indigo-100 text-indigo-800 text-xs rounded-full">React</span>
                <span className="px-3 py-1 bg-indigo-100 text-indigo-800 text-xs rounded-full">Node.js</span>
                <span className="px-3 py-1 bg-indigo-100 text-indigo-800 text-xs rounded-full">MongoDB</span>
              </div>
              <a href="#" className="text-indigo-600 font-medium hover:text-indigo-800 transition">View Project →</a>
            </div>
          </div>
          
          {/* Project 2 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md project-card transition duration-300" data-aos="fade-up" data-aos-delay="100">
            <img src="http://static.photos/technology/640x360/2" alt="Project 2" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Task Management App</h3>
              <p className="text-gray-600 mb-4">A productivity application for managing tasks and projects with team collaboration.</p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-indigo-100 text-indigo-800 text-xs rounded-full">Vue.js</span>
                <span className="px-3 py-1 bg-indigo-100 text-indigo-800 text-xs rounded-full">Firebase</span>
                <span className="px-3 py-1 bg-indigo-100 text-indigo-800 text-xs rounded-full">Tailwind CSS</span>
              </div>
              <a href="#" className="text-indigo-600 font-medium hover:text-indigo-800 transition">View Project →</a>
            </div>
          </div>
          
          {/* Project 3 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md project-card transition duration-300" data-aos="fade-up" data-aos-delay="200">
            <img src="http://static.photos/technology/640x360/3" alt="Project 3" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Portfolio Website</h3>
              <p className="text-gray-600 mb-4">A minimalist portfolio website for a photographer with image gallery.</p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-indigo-100 text-indigo-800 text-xs rounded-full">HTML/CSS</span>
                <span className="px-3 py-1 bg-indigo-100 text-indigo-800 text-xs rounded-full">JavaScript</span>
                <span className="px-3 py-1 bg-indigo-100 text-indigo-800 text-xs rounded-full">GSAP</span>
              </div>
              <a href="#" className="text-indigo-600 font-medium hover:text-indigo-800 transition">View Project →</a>
            </div>
          </div>
          {/* Project 4 */}
         
          <div className="bg-white rounded-lg overflow-hidden shadow-md project-card transition duration-300" data-aos="fade-up" data-aos-delay="100">
            <img src="http://static.photos/technology/640x360/4" alt="Project 2" className="w-full h-48 object-cover" />
            <div className="p-6">
                <h3 class="text-xl font-semibold text-gray-800 mb-2">Weather Dashboard</h3>
                        <p class="text-gray-600 mb-4">Real-time weather forecasting application with interactive maps.</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                  <span class="px-3 py-1 bg-indigo-100 text-indigo-800 text-xs rounded-full">React</span>
                            <span class="px-3 py-1 bg-indigo-100 text-indigo-800 text-xs rounded-full">API</span>
                            <span class="px-3 py-1 bg-indigo-100 text-indigo-800 text-xs rounded-full">Chart.js</span>
                        </div>
              <a href="#" className="text-indigo-600 font-medium hover:text-indigo-800 transition">View Project →</a>
            </div>
          </div>
          {/* Project 5 */}
        
          <div className="bg-white rounded-lg overflow-hidden shadow-md project-card transition duration-300" data-aos="fade-up" data-aos-delay="100">
            <img src="http://static.photos/technology/640x360/5" alt="Project 2" className="w-full h-48 object-cover" />
            <div className="p-6">
               <h3 class="text-xl font-semibold text-gray-800 mb-2">Fitness Tracker</h3>
                        <p class="text-gray-600 mb-4">Mobile-first fitness application with workout plans and progress tracking.</p>
                       <div className="flex flex-wrap gap-2 mb-4">
                  <span class="px-3 py-1 bg-indigo-100 text-indigo-800 text-xs rounded-full">React Native</span>
                            <span class="px-3 py-1 bg-indigo-100 text-indigo-800 text-xs rounded-full">Firebase</span>
                            <span class="px-3 py-1 bg-indigo-100 text-indigo-800 text-xs rounded-full">Redux</span>
                         </div>
              <a href="#" className="text-indigo-600 font-medium hover:text-indigo-800 transition">View Project →</a>
            </div>
          </div>
          {/* Project 6 */}
       
          <div className="bg-white rounded-lg overflow-hidden shadow-md project-card transition duration-300" data-aos="fade-up" data-aos-delay="100">
            <img src="http://static.photos/technology/640x360/6" alt="Project 2" className="w-full h-48 object-cover" />
            <div className="p-6">
             <h3 class="text-xl font-semibold text-gray-800 mb-2">Recipe Finder</h3>
                        <p class="text-gray-600 mb-4">Interactive recipe database with search, filtering, and meal planning.</p>
                         <div className="flex flex-wrap gap-2 mb-4">
               <span class="px-3 py-1 bg-indigo-100 text-indigo-800 text-xs rounded-full">Vue.js</span>
                            <span class="px-3 py-1 bg-indigo-100 text-indigo-800 text-xs rounded-full">API</span>
                            <span class="px-3 py-1 bg-indigo-100 text-indigo-800 text-xs rounded-full">IndexedDB</span>
                        </div>
              <a href="#" className="text-indigo-600 font-medium hover:text-indigo-800 transition">View Project →</a>
            </div>
          </div>
          
        </div>
         </div>
          
              
        
        </section>

  );
};

export default Projects;
