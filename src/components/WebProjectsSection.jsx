const WebProjectsSection = () => {
  return (
    <div className="mb-16">
      <div className="flex items-center mb-8">
        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-teal-600 rounded-xl flex items-center justify-center mr-4">
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
            />
          </svg>
        </div>
        <h2 className="text-3xl font-bold text-gray-900">Featured Projects</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* University Clubs Management System */}
        <div className="bg-white rounded-2xl overflow-hidden transform hover:scale-[1.02] transition-transform duration-300">
          <div className="bg-gradient-to-r from-blue-500 to-teal-600 p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mr-4">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white">
                  University Clubs Management
                </h3>
              </div>
              <span className="text-sm text-white/80 bg-white/20 px-3 py-1 rounded-full">
                2024
              </span>
            </div>
          </div>
          <div className="p-6">
            <p className="text-gray-600 mb-4">
              Led a team of 10 in developing a comprehensive management system
              for university clubs, implementing Matrix Organization methodology
              and Waterfall model for project execution.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                ASP.NET
              </span>
              <span className="px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-sm">
                Bootstrap
              </span>
              <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
                Database Design
              </span>
              <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm">
                Project Management
              </span>
            </div>
          </div>
        </div>

        {/* Cross-Platform Course Enrollment System */}
        <div className="bg-white rounded-2xl overflow-hidden transform hover:scale-[1.02] transition-transform duration-300">
          <div className="bg-gradient-to-r from-teal-500 to-pink-600 p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mr-4">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white">
                  Course Enrollment System
                </h3>
              </div>
              <span className="text-sm text-white/80 bg-white/20 px-3 py-1 rounded-full">
                2024
              </span>
            </div>
          </div>
          <div className="p-6">
            <p className="text-gray-600 mb-4">
              Developed a cross-platform application for course enrollment with
              real-time database integration, focusing on user experience and
              system reliability.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-sm">
                .NET MAUI
              </span>
              <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                XAML
              </span>
              <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
                Real-time DB
              </span>
              <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm">
                Cross-platform
              </span>
            </div>
          </div>
        </div>

        {/* E-commerce Database */}
        <div className="bg-white rounded-2xl overflow-hidden transform hover:scale-[1.02] transition-transform duration-300">
          <div className="bg-gradient-to-r from-green-500 to-teal-600 p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mr-4">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white">
                  E-commerce Database
                </h3>
              </div>
              <span className="text-sm text-white/80 bg-white/20 px-3 py-1 rounded-full">
                2023
              </span>
            </div>
          </div>
          <div className="p-6">
            <p className="text-gray-600 mb-4">
              Designed and implemented a relational database for an e-commerce
              platform, including ERD and EERD diagrams, with optimized
              transaction and inventory management.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
                MySQL
              </span>
              <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                Database Design
              </span>
              <span className="px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-sm">
                ERD
              </span>
              <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm">
                Optimization
              </span>
            </div>
          </div>
        </div>

        {/* Job Application System */}
        <div className="bg-white rounded-2xl overflow-hidden transform hover:scale-[1.02] transition-transform duration-300">
          <div className="bg-gradient-to-r from-orange-500 to-red-600 p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mr-4">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white">
                  Job Application System
                </h3>
              </div>
              <span className="text-sm text-white/80 bg-white/20 px-3 py-1 rounded-full">
                2024
              </span>
            </div>
          </div>
          <div className="p-6">
            <p className="text-gray-600 mb-4">
              Developed a secure job application system with authentication
              features, working in an Agile Scrum team for rapid iteration and
              delivery.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm">
                Agile Scrum
              </span>
              <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm">
                Authentication
              </span>
              <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                Security
              </span>
              <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
                Team Collaboration
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebProjectsSection;
