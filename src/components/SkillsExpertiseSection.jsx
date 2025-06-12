const SkillsExpertiseSection = () => {
  const skills = [
    {
      category: "Programming Languages",
      items: [
        { name: "JavaScript", level: "Advanced" },
        { name: "Python", level: "Intermediate" },
        { name: "C#", level: "Intermediate" },
        { name: "SQL", level: "Advanced" },
      ],
    },
    {
      category: "Web Development",
      items: [
        { name: "React", level: "Advanced" },
        { name: "Node.js", level: "Intermediate" },
        { name: "ASP.NET", level: "Intermediate" },
        { name: "Bootstrap", level: "Advanced" },
      ],
    },
    {
      category: "Data Analytics",
      items: [
        { name: "Data Visualization", level: "Advanced" },
        { name: "Statistical Analysis", level: "Intermediate" },
        { name: "Machine Learning", level: "Basic" },
        { name: "Data Mining", level: "Intermediate" },
      ],
    },
    {
      category: "Tools & Technologies",
      items: [
        { name: "Git", level: "Advanced" },
        { name: "Docker", level: "Basic" },
        { name: "Tableau", level: "Intermediate" },
        { name: "Power BI", level: "Intermediate" },
      ],
    },
  ];

  const getLevelColor = (level) => {
    switch (level.toLowerCase()) {
      case "advanced":
        return "bg-green-100 text-green-800";
      case "intermediate":
        return "bg-blue-100 text-blue-800";
      case "basic":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="mb-16">
      <div className="flex items-center mb-8">
        <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-pink-600 rounded-xl flex items-center justify-center mr-4">
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
              d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
            />
          </svg>
        </div>
        <h2 className="text-3xl font-bold text-gray-900">Skills & Expertise</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skills.map((skillGroup, index) => (
          <div key={index} className="bg-white rounded-2xl p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
              <span className="w-8 h-8 bg-gradient-to-r from-teal-500 to-pink-600 rounded-lg flex items-center justify-center mr-3">
                <svg
                  className="w-4 h-4 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </span>
              {skillGroup.category}
            </h3>
            <div className="space-y-3">
              {skillGroup.items.map((skill, skillIndex) => (
                <div
                  key={skillIndex}
                  className="flex items-center justify-between"
                >
                  <span className="text-gray-700">{skill.name}</span>
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${getLevelColor(
                      skill.level
                    )}`}
                  >
                    {skill.level}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 bg-gradient-to-r from-teal-500 to-pink-600 rounded-2xl p-6 text-white">
        <h3 className="text-xl font-semibold mb-4 flex items-center">
          <svg
            className="w-6 h-6 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 10V3L4 14h7v7l9-11h-7z"
            />
          </svg>
          Additional Expertise
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-medium mb-2">Methodologies</h4>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
                Agile Scrum
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
                Waterfall
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
                Matrix Organization
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-2">Soft Skills</h4>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
                Team Leadership
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
                Project Management
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
                Problem Solving
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsExpertiseSection;
