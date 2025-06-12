const AboutSection = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-screen-xl mx-auto px-4">
        {/* Introduction */}
        <div className="text-center mb-16">
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Based in Istanbul, Turkey, with a strong passion for data analytics
            and digital media technologies. As a high-honor student at Üsküdar
            University, I specialize in using tools like Python, Power BI, and
            Excel to extract insights from complex datasets.
          </p>
        </div>

        {/* Main Grid - Education & Experience */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Education Card */}
          <div className="bg-white rounded-2xl p-8 transform hover:scale-[1.02] transition-transform duration-300">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
                <svg
                  className="w-6 h-6 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 14l9-5-9-5-9 5 9 5z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 14l9-5-9-5-9 5 9 5z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 14v7"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Education</h3>
            </div>
            <div className="space-y-8">
              <div className="relative pl-6 border-l-2 border-blue-200">
                <div className="absolute -left-[9px] top-0 w-4 h-4 bg-blue-500 rounded-full"></div>
                <h4 className="text-lg font-semibold text-gray-900">
                  Üsküdar University
                </h4>
                <p className="text-blue-600 font-medium">
                  Bachelor of Science in Software Engineering
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  Expected Graduation: June 2025
                </p>
                <div className="mt-3 space-y-2">
                  <p className="text-gray-600 flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    GPA: 3.32 / 4.00 – High Honor Student
                  </p>
                  <p className="text-gray-600 flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    Medium of Instruction: English
                  </p>
                  <p className="text-gray-600 flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    Credit Points: 217 / 240
                  </p>
                </div>
              </div>
              <div className="relative pl-6 border-l-2 border-teal-200">
                <div className="absolute -left-[9px] top-0 w-4 h-4 bg-teal-500 rounded-full"></div>
                <h4 className="text-lg font-semibold text-gray-900">
                  Fatih Anadolu Imam-Hatip High School
                </h4>
                <p className="text-teal-600 font-medium">
                  Science & Social Sciences Program
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  Graduated: June 2020
                </p>
                <p className="text-gray-600 mt-2">Diploma Grade: 69.64 / 100</p>
              </div>
            </div>
          </div>

          {/* Experience Card */}
          <div className="bg-white rounded-2xl p-8 transform hover:scale-[1.02] transition-transform duration-300">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center mr-4">
                <svg
                  className="w-6 h-6 text-teal-600"
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
              <h3 className="text-2xl font-bold text-gray-900">
                Professional Experience
              </h3>
            </div>
            <div className="space-y-8">
              <div className="relative pl-6 border-l-2 border-teal-200">
                <div className="absolute -left-[9px] top-0 w-4 h-4 bg-teal-500 rounded-full"></div>
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">
                      Frontend Web Developer
                    </h4>
                    <p className="text-teal-600 font-medium">
                      Services From Istanbul, Turkey
                    </p>
                  </div>
                  <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                    Jul 2024 – Sep 2024
                  </span>
                </div>
                <ul className="mt-3 space-y-2">
                  <li className="text-gray-600 flex items-start">
                    <span className="w-1.5 h-1.5 bg-teal-500 rounded-full mt-2 mr-2"></span>
                    Developed responsive interfaces using React
                  </li>
                  <li className="text-gray-600 flex items-start">
                    <span className="w-1.5 h-1.5 bg-teal-500 rounded-full mt-2 mr-2"></span>
                    Collaborated in team-based development
                  </li>
                  <li className="text-gray-600 flex items-start">
                    <span className="w-1.5 h-1.5 bg-teal-500 rounded-full mt-2 mr-2"></span>
                    Optimized performance and UX for production deployment
                  </li>
                </ul>
              </div>
              <div className="relative pl-6 border-l-2 border-blue-200">
                <div className="absolute -left-[9px] top-0 w-4 h-4 bg-blue-500 rounded-full"></div>
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">
                      University Mentor
                    </h4>
                    <p className="text-blue-600 font-medium">
                      Üsküdar University
                    </p>
                  </div>
                  <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                    Oct 2022 – Current
                  </span>
                </div>
                <ul className="mt-3 space-y-2">
                  <li className="text-gray-600 flex items-start">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-2"></span>
                    Guided first-year students academically and socially
                  </li>
                  <li className="text-gray-600 flex items-start">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-2"></span>
                    Hosted sessions on curriculum planning and project advice
                  </li>
                </ul>
              </div>
              <div className="relative pl-6 border-l-2 border-green-200">
                <div className="absolute -left-[9px] top-0 w-4 h-4 bg-green-500 rounded-full"></div>
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">
                      Data Analysis Intern (Volunteer)
                    </h4>
                    <p className="text-green-600 font-medium">
                      Municipal Orientation Program for Refugee Support
                    </p>
                  </div>
                  <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                    May 2025 – Current
                  </span>
                </div>
                <ul className="mt-3 space-y-2">
                  <li className="text-gray-600 flex items-start">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 mr-2"></span>
                    Used Excel, Power BI, and internal municipal systems for
                    data analysis
                  </li>
                  <li className="text-gray-600 flex items-start">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 mr-2"></span>
                    Created reports and visual dashboards for policy improvement
                  </li>
                  <li className="text-gray-600 flex items-start">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 mr-2"></span>
                    Contributed to refugee integration services through
                    data-driven insights
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Skills & Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Technical Skills Card */}
          <div className="bg-white rounded-2xl p-8 transform hover:scale-[1.02] transition-transform duration-300">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mr-4">
                <svg
                  className="w-6 h-6 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">
                Technical Skills
              </h3>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gray-50 rounded-xl p-4">
                <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  Languages
                </h4>
                <div className="flex flex-wrap gap-2">
                  {["JavaScript", "Python", "Java", "C#", "C++", "SQL"].map(
                    (skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    )
                  )}
                </div>
              </div>
              <div className="bg-gray-50 rounded-xl p-4">
                <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                  <span className="w-2 h-2 bg-teal-500 rounded-full mr-2"></span>
                  Frameworks & Tools
                </h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    "React",
                    "Node.js",
                    "ASP.NET",
                    ".NET MAUI",
                    "Docker",
                    "Git",
                    "MongoDB",
                    "MySQL",
                    "PostgreSQL",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div className="bg-gray-50 rounded-xl p-4">
                <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  Data Analytics
                </h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Power BI",
                    "Excel",
                    "Pandas",
                    "NumPy",
                    "Matplotlib",
                    "Seaborn",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div className="bg-gray-50 rounded-xl p-4">
                <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
                  Concepts
                </h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Agile",
                    "Waterfall",
                    "Scrum",
                    "CI/CD",
                    "ERD",
                    "Testing",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Projects Card */}
          <div className="bg-white rounded-2xl p-8 transform hover:scale-[1.02] transition-transform duration-300">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
                <svg
                  className="w-6 h-6 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">
                Notable Projects
              </h3>
            </div>
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-xl p-6">
                <div className="flex justify-between items-start mb-3">
                  <h4 className="text-lg font-semibold text-gray-900">
                    University Clubs Management System
                  </h4>
                  <span className="text-sm text-gray-500 bg-gray-200 px-3 py-1 rounded-full">
                    2024
                  </span>
                </div>
                <p className="text-sm text-gray-500 mb-3">ASP.NET, Bootstrap</p>
                <ul className="space-y-2">
                  <li className="text-gray-600 flex items-start">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-2"></span>
                    Led team of 10 members in project development
                  </li>
                  <li className="text-gray-600 flex items-start">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-2"></span>
                    Developed frontend using ASP.NET and Bootstrap
                  </li>
                  <li className="text-gray-600 flex items-start">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-2"></span>
                    Applied Matrix Organization and Waterfall methodologies
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 rounded-xl p-6">
                <div className="flex justify-between items-start mb-3">
                  <h4 className="text-lg font-semibold text-gray-900">
                    Cross-Platform Course Enrollment System
                  </h4>
                  <span className="text-sm text-gray-500 bg-gray-200 px-3 py-1 rounded-full">
                    2024
                  </span>
                </div>
                <p className="text-sm text-gray-500 mb-3">.NET MAUI, XAML</p>
                <p className="text-gray-600">
                  Developed cross-platform app with real-time database
                  integration
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-6">
                <div className="flex justify-between items-start mb-3">
                  <h4 className="text-lg font-semibold text-gray-900">
                    E-commerce Database
                  </h4>
                  <span className="text-sm text-gray-500 bg-gray-200 px-3 py-1 rounded-full">
                    2023
                  </span>
                </div>
                <p className="text-sm text-gray-500 mb-3">MySQL</p>
                <ul className="space-y-2">
                  <li className="text-gray-600 flex items-start">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-2"></span>
                    Designed and implemented relational database
                  </li>
                  <li className="text-gray-600 flex items-start">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-2"></span>
                    Created ERD and EERD diagrams
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Languages & Certifications */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Languages Card */}
          <div className="bg-white rounded-2xl p-8 transform hover:scale-[1.02] transition-transform duration-300">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center mr-4">
                <svg
                  className="w-6 h-6 text-teal-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Languages</h3>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gray-50 rounded-xl p-4">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-medium text-gray-900">Arabic</span>
                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
                    Native
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-medium text-gray-900">English</span>
                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
                    Fluent
                  </span>
                </div>
              </div>
              <div className="bg-gray-50 rounded-xl p-4">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-medium text-gray-900">Turkish</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                    B2
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-medium text-gray-900">German</span>
                  <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm">
                    A1
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Certifications Card */}
          <div className="bg-white rounded-2xl p-8 transform hover:scale-[1.02] transition-transform duration-300">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mr-4">
                <svg
                  className="w-6 h-6 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">
                Certifications
              </h3>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {[
                {
                  name: "IBM - Developing Websites and Front-Ends with Bootstrap",
                  date: "Jan 2025",
                },
                {
                  name: "IBM - Developing Front-End Apps with React",
                  date: "Dec 2024",
                },
                { name: "MathWorks - Systems Engineering", date: "Dec 2024" },
                { name: "Board Infinity - C# for .NET Developers", date: "" },
                {
                  name: "IBM - Designing User Interfaces and Experiences (UI/UX)",
                  date: "",
                },
                { name: "Coursera - Get Started with Figma", date: "" },
                {
                  name: "University of California, Davis - SQL for Data Science",
                  date: "",
                },
                { name: "Udemy - The Complete SQL Bootcamp", date: "" },
                { name: "What is Data Science?", date: "" },
                { name: "Everyday Excel", date: "" },
              ].map((cert, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-xl p-4 flex justify-between items-center"
                >
                  <span className="text-gray-600">{cert.name}</span>
                  {cert.date && (
                    <span className="text-sm text-gray-500 bg-gray-200 px-3 py-1 rounded-full">
                      {cert.date}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
