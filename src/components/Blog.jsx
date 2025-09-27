import { useEffect } from 'react';
import feather from 'feather-icons';

const Blog = () => {
  useEffect(() => {
    // Initialize feather icons
    feather.replace();

    // Mobile menu toggle
    const mobileMenuButton = document.querySelector('.mobile-menu-button');
    if (mobileMenuButton) {
      mobileMenuButton.addEventListener('click', function() {
        alert('Mobile menu would open here in a complete implementation');
      });
    }
  }, []);

  return (
    <div className="font-sans antialiased text-gray-800 bg-gray-50">
      

      {/* Blog Header */}
      <section className="pt-32 pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-800 mb-4" data-aos="fade-up">My Blog</h1>
            <div className="w-20 h-1 bg-indigo-600 mx-auto mb-6" data-aos="fade-up" data-aos-delay="100"></div>
            <p className="text-gray-600 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="200">Thoughts, tutorials and insights about web development and design.</p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Post 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md transition duration-300 hover:shadow-lg" data-aos="fade-up">
              <img src="http://static.photos/technology/640x360/7" alt="Post 1" className="w-full h-48 object-cover" />
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <span>June 15, 2023</span>
                  <span className="mx-2">•</span>
                  <span>5 min read</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Getting Started with React Hooks</h3>
                <p className="text-gray-600 mb-4">Learn how to use React Hooks to simplify your functional components and manage state effectively.</p>
                <a href="#" className="text-indigo-600 font-medium hover:text-indigo-800 transition">Read More →</a>
              </div>
            </div>

            {/* Post 2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md transition duration-300 hover:shadow-lg" data-aos="fade-up" data-aos-delay="100">
              <img src="http://static.photos/technology/640x360/8" alt="Post 2" className="w-full h-48 object-cover" />
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <span>May 28, 2023</span>
                  <span className="mx-2">•</span>
                  <span>8 min read</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">CSS Grid vs Flexbox</h3>
                <p className="text-gray-600 mb-4">When to use CSS Grid and when to stick with Flexbox - a practical guide with examples.</p>
                <a href="#" className="text-indigo-600 font-medium hover:text-indigo-800 transition">Read More →</a>
              </div>
            </div>

            {/* Post 3 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md transition duration-300 hover:shadow-lg" data-aos="fade-up" data-aos-delay="200">
              <img src="http://static.photos/technology/640x360/9" alt="Post 3" className="w-full h-48 object-cover" />
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <span>April 12, 2023</span>
                  <span className="mx-2">•</span>
                  <span>6 min read</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Optimizing Web Performance</h3>
                <p className="text-gray-600 mb-4">Practical tips and techniques to make your websites load faster and perform better.</p>
                <a href="#" className="text-indigo-600 font-medium hover:text-indigo-800 transition">Read More →</a>
              </div>
            </div>
          </div>
        </div>
      </section>

    
    </div>
  );
};

export default Blog;
