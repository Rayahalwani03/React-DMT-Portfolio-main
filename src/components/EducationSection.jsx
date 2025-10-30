import { useScrollAnimation } from '../hooks/useScrollAnimation';

const EducationSection = () => {
  const [ref, isVisible] = useScrollAnimation();
  
  const education = [
    {
      degree: "Master of Science (M.Sc.)",
      program: "Engineering of Socio-Technical Systems",
      school: "Carl von Ossietzky University of Oldenburg",
      location: "Oldenburg, Germany",
      period: "2025 – 2027",
      status: "Current",
      gradient: "from-blue-50 to-teal-50",
      borderColor: "border-blue-100",
      badgeColor: "bg-blue-600",
      highlights: [
        "Human-Centered Design",
        "System Engineering",
        "Digital Systems",
        "UX Design",
      ],
      description:
        "Focusing on the design and development of innovative digital systems that integrate technical excellence with social responsibility, emphasizing user experience, data analytics, and sustainable technology solutions.",
    },
    {
      degree: "Bachelor's Degree",
      program: "Software Engineering",
      school: "Üsküdar Üniversitesi",
      location: "Istanbul, Turkey",
      period: "Completed",
      status: "Graduated",
      gpa: "3.4",
      gradient: "from-purple-50 to-pink-50",
      borderColor: "border-purple-100",
      badgeColor: "bg-purple-600",
      highlights: [
        "JavaScript",
        "Python",
        "C#",
        "ASP.NET",
        "Database Design",
        "Agile & Waterfall",
        "Data Visualization",
        "Problem Solving",
      ],
      description:
        "Comprehensive software engineering education covering full-stack development, data structures, algorithms, and project management methodologies. Gained hands-on experience with modern frameworks and development practices.",
    },
  ];

  return (
    <section 
      id="education" 
      ref={ref}
      className={`py-24 bg-gray-50 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-gray-900 mb-4">Education</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light">
            Academic foundation in software engineering and socio-technical systems
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-8 border border-gray-200 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-start">
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-semibold text-gray-900 mb-1">
                        {edu.degree}
                      </h3>
                      <p className="text-xl text-gray-700 font-light mb-1">
                        {edu.program}
                      </p>
                      <p className="text-lg text-gray-600 font-light mb-2">
                        {edu.school}
                      </p>
                      <div className="flex flex-wrap items-center gap-3 text-sm text-gray-600 font-light">
                        <p>📍 {edu.location}</p>
                        {edu.gpa && (
                          <p>
                            <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-md">
                              GPA: {edu.gpa}/4.0
                            </span>
                          </p>
                        )}
                      </div>
                    </div>
                    <span className="text-sm text-gray-600 font-light mt-2 md:mt-0 whitespace-nowrap">
                      {edu.period}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2 my-4">
                    {edu.highlights.map((highlight, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-md text-sm font-light"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                  <p className="text-gray-600 leading-relaxed font-light">
                    {edu.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;

