const ProfessionalOverview = () => {
  return (
    <div className="bg-white rounded-2xl p-8 mb-16 transform hover:scale-[1.02] transition-transform duration-300">
      <div className="flex items-center mb-6">
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
        <h2 className="text-3xl font-bold text-gray-900">
          Professional Overview
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            I'm a Software Engineering student at Üsküdar University with a
            strong focus on data analytics and full-stack development. My
            expertise spans from creating responsive web applications to
            extracting meaningful insights from complex datasets using modern
            tools and technologies.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            With hands-on experience in both front-end development and data
            analysis, I bridge the gap between technical implementation and
            data-driven decision making. I'm passionate about creating solutions
            that combine technical excellence with practical business value.
          </p>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-xl p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Core Competencies
          </h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white/50 rounded-lg p-4">
              <h4 className="font-medium text-gray-900 mb-2 flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                Data Analytics
              </h4>
              <div className="space-y-2">
                <p className="text-gray-600 text-sm">• Power BI & Excel</p>
                <p className="text-gray-600 text-sm">
                  • Python (Pandas, NumPy)
                </p>
                <p className="text-gray-600 text-sm">• Data Visualization</p>
              </div>
            </div>
            <div className="bg-white/50 rounded-lg p-4">
              <h4 className="font-medium text-gray-900 mb-2 flex items-center">
                <span className="w-2 h-2 bg-teal-500 rounded-full mr-2"></span>
                Web Development
              </h4>
              <div className="space-y-2">
                <p className="text-gray-600 text-sm">• React & Node.js</p>
                <p className="text-gray-600 text-sm">• ASP.NET & .NET MAUI</p>
                <p className="text-gray-600 text-sm">• Database Design</p>
              </div>
            </div>
            <div className="bg-white/50 rounded-lg p-4">
              <h4 className="font-medium text-gray-900 mb-2 flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                Software Engineering
              </h4>
              <div className="space-y-2">
                <p className="text-gray-600 text-sm">• Agile & Waterfall</p>
                <p className="text-gray-600 text-sm">• CI/CD & Testing</p>
                <p className="text-gray-600 text-sm">• System Design</p>
              </div>
            </div>
            <div className="bg-white/50 rounded-lg p-4">
              <h4 className="font-medium text-gray-900 mb-2 flex items-center">
                <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
                Languages
              </h4>
              <div className="space-y-2">
                <p className="text-gray-600 text-sm">• Arabic (Native)</p>
                <p className="text-gray-600 text-sm">• English (Fluent)</p>
                <p className="text-gray-600 text-sm">• Turkish (B2)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalOverview;
