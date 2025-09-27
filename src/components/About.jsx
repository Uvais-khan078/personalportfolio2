const About = () => {
  return (
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
  );
};

export default About;
