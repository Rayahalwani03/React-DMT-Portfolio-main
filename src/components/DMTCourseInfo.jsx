import { useNavigate } from 'react-router-dom';
import dmtLogo from '../assets/dmt-logo.jpg';

const DMTCourseInfo = () => {
  const navigate = useNavigate();
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-screen-xl mx-auto px-4 text-center">
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-8 transition-colors duration-300">
          <img 
            src={dmtLogo} 
            alt="DMT Logo" 
            className="mx-auto h-20 w-20 rounded-lg object-cover shadow-lg mb-6"
          />
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">ETI462 - Digital Media Translation</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 max-w-3xl mx-auto transition-colors duration-300">
            This portfolio website represents my final project for the Digital Media Translation course, 
            demonstrating the intersection of technology, creativity, and cross-cultural communication 
            in the digital age.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => navigate('/article')}
              className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transition-colors"
            >
              <span className="mr-2">Read Academic Article</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
            <button 
              onClick={() => navigate('/about')}
              className="inline-flex items-center border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 px-6 py-3 rounded-full font-semibold hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-gray-900 transition-colors"
            >
              <span className="mr-2">View Portfolio</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DMTCourseInfo; 