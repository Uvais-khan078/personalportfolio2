import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import AOS from 'aos';
import feather from 'feather-icons';
import 'aos/dist/aos.css';

const Layout = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true
    });
    feather.replace();
  }, []);

  return (
    <div className="font-sans antialiased text-gray-800">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-xl font-bold text-indigo-600">Portfolio</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="/" className="text-gray-700 hover:text-indigo-600 transition">Home</a>
              <a href="/#about" className="text-gray-700 hover:text-indigo-600 transition">About</a>
              <a href="/#projects" className="text-gray-700 hover:text-indigo-600 transition">Projects</a>
              <a href="/#skills" className="text-gray-700 hover:text-indigo-600 transition">Skills</a>
              <a href="/#contact" className="text-gray-700 hover:text-indigo-600 transition">Contact</a>
              <a href="/blog" className="text-gray-700 hover:text-indigo-600 transition">Blog</a>
            </div>
            <div className="md:hidden flex items-center">
              <button className="mobile-menu-button">
                <i data-feather="menu"></i>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <Outlet />

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Your Name</h2>
            <p className="text-gray-400 max-w-2xl mx-auto mb-8">Frontend Developer & UI/UX Designer creating digital experiences that matter.</p>
            <div className="flex justify-center space-x-6 mb-8">
              <a href="#" className="text-gray-400 hover:text-white transition">
                <i data-feather="github" className="w-6 h-6"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <i data-feather="twitter" className="w-6 h-6"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <i data-feather="linkedin" className="w-6 h-6"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <i data-feather="instagram" className="w-6 h-6"></i>
              </a>
            </div>
            <div className="border-t border-gray-700 pt-8">
              <p className="text-gray-400">&copy; 2023 Your Name. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
