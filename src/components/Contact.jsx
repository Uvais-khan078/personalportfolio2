const Contact = () => {
  return (
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
  );
};

export default Contact;
