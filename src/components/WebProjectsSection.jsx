import { useScrollAnimation } from '../hooks/useScrollAnimation';

const WebProjectsSection = () => {
  const [ref, isVisible] = useScrollAnimation();
  
  const projects = [
    {
      title: "CDA App",
      subtitle: "MERN Stack Advertising Platform",
      description:
        "A comprehensive advertising platform built with MongoDB, Express, React, and Node.js. Features include real-time ad posting, user authentication, and advanced search capabilities for connecting businesses with their target audience.",
      techStack: ["MongoDB", "Express", "React", "Node.js", "JWT"],
      gradient: "from-blue-500 to-teal-600",
      githubUrl: "https://github.com/Rayahalwani03",
      websiteUrl: "https://your-cda-app-demo.vercel.app", // Add your actual website URL
      icon: (
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
            d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
          />
        </svg>
      ),
    },
    {
      title: "Women Rights Platform",
      subtitle: "Secure MERN + Real-Time Updates",
      description:
        "A secure web platform empowering women with resources and support. Built with MERN stack, featuring encrypted data storage, real-time chat support, GDPR compliance, and community forums for sharing experiences and information.",
      techStack: ["MERN", "Socket.io", "JWT", "GDPR", "Encryption"],
      gradient: "from-pink-500 to-purple-600",
      githubUrl: "https://github.com/Rayahalwani03",
      websiteUrl: "https://your-women-rights-platform.vercel.app", // Add your actual website URL
      icon: (
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
            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
          />
        </svg>
      ),
    },
    {
      title: "Refugee Data Dashboard",
      subtitle: "Power BI + Python Analytics",
      description:
        "Interactive data visualization dashboard analyzing refugee migration patterns and demographics. Combines Python data processing with Power BI visualizations to provide actionable insights for humanitarian organizations and policymakers.",
      techStack: ["Power BI", "Python", "Pandas", "Data Viz", "SQL"],
      gradient: "from-green-500 to-teal-600",
      githubUrl: "https://github.com/Rayahalwani03",
      websiteUrl: "https://your-refugee-dashboard.vercel.app", // Add your actual website URL
      icon: (
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
      ),
    },
    {
      title: "University Clubs System",
      subtitle: "ASP.NET + SQL Management Platform",
      description:
        "Led a team of 10 in developing a comprehensive management system for university clubs. Implements Matrix Organization methodology and Waterfall model with features for event management, member tracking, and resource allocation.",
      techStack: ["ASP.NET", "SQL Server", "Bootstrap", "C#"],
      gradient: "from-indigo-500 to-blue-600",
      githubUrl: "https://github.com/Rayahalwani03/Cross-platform-Application-Courses-enrolment-System",
      websiteUrl: "https://your-university-clubs.vercel.app", // Add your actual website URL
      icon: (
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
      ),
    },
  ];

  return (
    <section 
      id="projects" 
      ref={ref}
      className={`py-24 bg-gray-50 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-gray-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light">
            Innovative solutions combining full-stack development, data analytics, and user-centered design
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-gray-200"
            >
              <div className="p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm font-light mb-6">
                  {project.subtitle}
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed font-light">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-md text-sm font-light"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-gray-900 hover:text-gray-600 font-light transition-colors underline underline-offset-4"
                  >
                    <svg
                      className="w-4 h-4 mr-2"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    View on GitHub
                  </a>
                  <a
                    href={project.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-gray-900 hover:text-gray-600 font-light transition-colors underline underline-offset-4"
                  >
                    <svg
                      className="w-4 h-4 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                      />
                    </svg>
                    Go to Website
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WebProjectsSection;
