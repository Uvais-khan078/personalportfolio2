import { useEffect } from 'react';
import feather from 'feather-icons';

const Home = () => {
  useEffect(() => {
    feather.replace();
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section id="home" className="hero-bg text-white min-h-screen flex items-center relative overflow-hidden" data-aos="fade">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-24">
          <div className="flex flex-col md:flex-row items-center justify-center gap-12">
            <div className="md:w-1/3" data-aos="fade-right">
              <img src="http://static.photos/people/640x360/1" alt="Profile" className="rounded-full w-64 h-64 object-cover mx-auto shadow-lg border-4 border-white" />
            </div>
            <div className="md:w-2/3 text-center md:text-left">
              <h1 className="text-5xl md:text-6xl font-bold mb-4" data-aos="fade-up">Hi, I'm <span className="text-indigo-200">Your Name</span></h1>
              <h2 className="text-2xl md:text-3xl font-semibold mb-8" data-aos="fade-up" data-aos-delay="100">Frontend Developer & UI/UX Designer</h2>
              <div className="flex justify-center md:justify-start space-x-4" data-aos="fade-up" data-aos-delay="200">
                <a href="#projects" className="px-6 py-3 bg-white text-indigo-600 rounded-full font-medium hover:bg-indigo-100 transition">View My Work</a>
                <a href="#contact" className="px-6 py-3 border border-white text-white rounded-full font-medium hover:bg-white hover:text-indigo-600 transition">Contact Me</a>
              </div>
            </div>
          </div>
          <div className="absolute bottom-10 left-0 right-0 text-center">
            <a href="#about" className="animate-bounce inline-block">
              <i data-feather="chevron-down" className="w-10 h-10 text-white"></i>
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4" data-aos="fade-up">About Me</h2>
            <div className="w-20 h-1 bg-indigo-600 mx-auto mb-6" data-aos="fade-up" data-aos-delay="100"></div>
            <p className="text-gray-600 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="200">I'm a passionate developer who loves creating beautiful and functional digital experiences.</p>
          </div>
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/3 mb-10 md:mb-0" data-aos="fade-right">
              <img src="http://static.photos/people/640x360/1" alt="Profile" className="rounded-full w-64 h-64 object-cover mx-auto shadow-lg" />
            </div>
            <div className="md:w-2/3 md:pl-16" data-aos="fade-left">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Who am I?</h3>
              <p className="text-gray-600 mb-6">I'm a creative frontend developer with 3+ years of experience building responsive and user-friendly websites. I specialize in modern JavaScript frameworks and have a keen eye for design details.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Personal Info</h4>
                  <ul className="text-gray-600 space-y-2">
                    <li className="flex items-center"><i data-feather="user" className="w-4 h-4 mr-2"></i> <span>Your Name</span></li>
                    <li className="flex items-center"><i data-feather="map-pin" className="w-4 h-4 mr-2"></i> <span>City, Country</span></li>
                    <li className="flex items-center"><i data-feather="mail" className="w-4 h-4 mr-2"></i> <span>your.email@example.com</span></li>
                    <li className="flex items-center"><i data-feather="phone" className="w-4 h-4 mr-2"></i> <span>+123 456 7890</span></li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">My Hobbies</h4>
                  <ul className="text-gray-600 space-y-2">
                    <li className="flex items-center"><i data-feather="music" className="w-4 h-4 mr-2"></i> <span>Music Production</span></li>
                    <li className="flex items-center"><i data-feather="camera" className="w-4 h-4 mr-2"></i> <span>Photography</span></li>
                    <li className="flex items-center"><i data-feather="book" className="w-4 h-4 mr-2"></i> <span>Reading</span></li>
                    <li className="flex items-center"><i data-feather="globe" className="w-4 h-4 mr-2"></i> <span>Traveling</span></li>
                  </ul>
                </div>
              </div>
              <a href="#" className="inline-block mt-8 px-6 py-3 bg-indigo-600 text-white rounded-full font-medium hover:bg-indigo-700 transition">Download CV</a>
            </div>
          </div>
        </div>
      </section>

      {/* Education & Experience Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4" data-aos="fade-up">Education & Experience</h2>
            <div className="w-20 h-1 bg-indigo-600 mx-auto mb-6" data-aos="fade-up" data-aos-delay="100"></div>
            <p className="text-gray-600 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="200">My academic background and professional journey.</p>
          </div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="border-l-2 border-indigo-600 absolute h-full left-1/2 transform -translate-x-1/2"></div>
            
            {/* Timeline items */}
            <div className="space-y-12">
              {/* Item 1 */}
              <div className="relative" data-aos="fade-up">
                <div className="bg-white p-6 rounded-lg shadow-md relative z-10 md:w-1/2 ml-auto">
                  <div className="flex items-center mb-2">
                    <div className="bg-indigo-100 p-2 rounded-full mr-4">
                      <i data-feather="book" className="w-5 h-5 text-indigo-600"></i>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800">Master's Degree</h3>
                  </div>
                  <p className="text-gray-600 mb-2">University Name • 2020-2022</p>
                  <p className="text-gray-600">Specialized in Computer Science with focus on Human-Computer Interaction.</p>
                </div>
                <div className="hidden md:block absolute top-6 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-indigo-600 rounded-full z-20"></div>
              </div>

              {/* Item 2 */}
              <div className="relative" data-aos="fade-up" data-aos-delay="100">
                <div className="bg-white p-6 rounded-lg shadow-md relative z-10 md:w-1/2">
                  <div className="flex items-center mb-2">
                    <div className="bg-indigo-100 p-2 rounded-full mr-4">
                      <i data-feather="briefcase" className="w-5 h-5 text-indigo-600"></i>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800">Frontend Developer</h3>
                  </div>
                  <p className="text-gray-600 mb-2">Company Name • 2019-Present</p>
                  <p className="text-gray-600">Developed responsive web applications using React, Vue.js and modern JavaScript frameworks.</p>
                </div>
                <div className="hidden md:block absolute top-6 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-indigo-600 rounded-full z-20"></div>
              </div>

              {/* Item 3 */}
              <div className="relative" data-aos="fade-up" data-aos-delay="200">
                <div className="bg-white p-6 rounded-lg shadow-md relative z-10 md:w-1/2 ml-auto">
                  <div className="flex items-center mb-2">
                    <div className="bg-indigo-100 p-2 rounded-full mr-4">
                      <i data-feather="book" className="w-5 h-5 text-indigo-600"></i>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800">Bachelor's Degree</h3>
                  </div>
                  <p className="text-gray-600 mb-2">University Name • 2016-2020</p>
                  <p className="text-gray-600">Majored in Computer Science with minor in Design.</p>
                </div>
                <div className="hidden md:block absolute top-6 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-indigo-600 rounded-full z-20"></div>
              </div>

              {/* Item 4 */}
              <div className="relative" data-aos="fade-up" data-aos-delay="300">
                <div className="bg-white p-6 rounded-lg shadow-md relative z-10 md:w-1/2">
                  <div className="flex items-center mb-2">
                    <div className="bg-indigo-100 p-2 rounded-full mr-4">
                      <i data-feather="briefcase" className="w-5 h-5 text-indigo-600"></i>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800">UI/UX Intern</h3>
                  </div>
                  <p className="text-gray-600 mb-2">Startup Name • Summer 2018</p>
                  <p className="text-gray-600">Designed user interfaces and conducted usability testing for mobile applications.</p>
                </div>
                <div className="hidden md:block absolute top-6 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-indigo-600 rounded-full z-20"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4" data-aos="fade-up">My Skills</h2>
            <div className="w-20 h-1 bg-indigo-600 mx-auto mb-6" data-aos="fade-up" data-aos-delay="100"></div>
            <p className="text-gray-600 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="200">I've worked with a variety of technologies in the web development world.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div data-aos="fade-right">
              <h3 className="text-xl font-semibold text-gray-800 mb-6">Technical Skills</h3>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-gray-700">HTML/CSS</span>
                    <span className="text-gray-600">95%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-indigo-600 h-2 rounded-full skill-bar" style={{width: '95%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-gray-700">JavaScript</span>
                    <span className="text-gray-600">90%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-indigo-600 h-2 rounded-full skill-bar" style={{width: '90%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-gray-700">React</span>
                    <span className="text-gray-600">85%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-indigo-600 h-2 rounded-full skill-bar" style={{width: '85%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-gray-700">Node.js</span>
                    <span className="text-gray-600">80%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-indigo-600 h-2 rounded-full skill-bar" style={{width: '80%'}}></div>
                  </div>
                </div>
              </div>
            </div>
            <div data-aos="fade-left">
              <h3 className="text-xl font-semibold text-gray-800 mb-6">Professional Skills</h3>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-gray-700">UI/UX Design</span>
                    <span className="text-gray-600">90%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-indigo-600 h-2 rounded-full skill-bar" style={{width: '90%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-gray-700">Communication</span>
                    <span className="text-gray-600">85%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-indigo-600 h-2 rounded-full skill-bar" style={{width: '85%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-gray-700">Team Work</span>
                    <span className="text-gray-600">95%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-indigo-600 h-2 rounded-full skill-bar" style={{width: '95%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-gray-700">Project Management</span>
                    <span className="text-gray-600">75%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-indigo-600 h-2 rounded-full skill-bar" style={{width: '75%'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
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
          </div>
          <div className="text-center mt-12" data-aos="fade-up">
            <a href="/projects" className="px-6 py-3 border border-indigo-600 text-indigo-600 rounded-full font-medium hover:bg-indigo-600 hover:text-white transition">View All Projects</a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4" data-aos="fade-up">Get In Touch</h2>
            <div className="w-20 h-1 bg-indigo-600 mx-auto mb-6" data-aos="fade-up" data-aos-delay="100"></div>
            <p className="text-gray-600 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="200">Have a project in mind or want to discuss potential opportunities? Feel free to reach out!</p>
          </div>
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-1/2" data-aos="fade-right">
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-2">Your Name</label>
                  <input type="text" id="name" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-2">Email Address</label>
                  <input type="email" id="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent" />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-gray-700 mb-2">Subject</label>
                  <input type="text" id="subject" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
                  <textarea id="message" rows="5" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent"></textarea>
                </div>
                <button type="submit" className="px-6 py-3 bg-indigo-600 text-white rounded-full font-medium hover:bg-indigo-700 transition w-full">Send Message</button>
              </form>
            </div>
            <div className="md:w-1/2" data-aos="fade-left">
              <div className="bg-white p-8 rounded-lg shadow-md h-full">
                <h3 className="text-xl font-semibold text-gray-800 mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-indigo-100 p-3 rounded-full mr-4">
                      <i data-feather="mail" className="w-5 h-5 text-indigo-600"></i>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800 mb-1">Email</h4>
                      <p className="text-gray-600">your.email@example.com</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-indigo-100 p-3 rounded-full mr-4">
                      <i data-feather="phone" className="w-5 h-5 text-indigo-600"></i>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800 mb-1">Phone</h4>
                      <p className="text-gray-600">+123 456 7890</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-indigo-100 p-3 rounded-full mr-4">
                      <i data-feather="map-pin" className="w-5 h-5 text-indigo-600"></i>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800 mb-1">Location</h4>
                      <p className="text-gray-600">City, Country</p>
                    </div>
                  </div>
                </div>
                <div className="mt-8">
                  <h4 className="font-medium text-gray-800 mb-4">Follow Me</h4>
                  <div className="flex space-x-4">
                    <a href="#" className="bg-gray-100 p-3 rounded-full hover:bg-indigo-100 transition">
                      <i data-feather="github" className="w-5 h-5 text-gray-700"></i>
                    </a>
                    <a href="#" className="bg-gray-100 p-3 rounded-full hover:bg-indigo-100 transition">
                      <i data-feather="twitter" className="w-5 h-5 text-gray-700"></i>
                    </a>
                    <a href="#" className="bg-gray-100 p-3 rounded-full hover:bg-indigo-100 transition">
                      <i data-feather="linkedin" className="w-5 h-5 text-gray-700"></i>
                    </a>
                    <a href="#" className="bg-gray-100 p-3 rounded-full hover:bg-indigo-100 transition">
                      <i data-feather="instagram" className="w-5 h-5 text-gray-700"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

          </>
  );
};

export default Home;
