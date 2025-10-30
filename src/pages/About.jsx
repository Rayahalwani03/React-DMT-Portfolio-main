import React from "react";

const About = () => {
  const experiences = [
    {
      title: "Data Analysis Intern",
      company: "Municipal Orientation Program for Refugee Support",
      period: "May 2025 – Sep 2025",
      location: "Germany",
      description: "Working with municipal datasets to support refugee integration programs, I discovered my passion for using data to drive meaningful social impact.",
      highlights: [
        "Analyzed municipal datasets using Excel, Power BI, and internal systems to support decision-making in local administration",
        "Created data reports and dashboards that helped local administrators understand refugee integration patterns and needs",
        "Focused on data privacy, accuracy, and ethical reporting, ensuring all work aligned with GDPR principles",
        "Collaborated with IT teams to improve system integration and data flow transparency",
      ],
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
    },
    {
      title: "Frontend Developer Intern",
      company: "Services, Istanbul",
      period: "Jul 2024 – Sep 2024",
      location: "Istanbul, Turkey",
      description: "My first professional frontend role, where I learned the importance of writing clean, maintainable code while working in a fast-paced production environment.",
      highlights: [
        "Built and optimized React.js components for responsive user interfaces, ensuring consistent experiences across devices",
        "Collaborated on secure API integrations and performance testing, learning best practices for production-ready code",
        "Contributed to improving UX and data consistency within production systems",
        "Worked closely with senior developers, gaining insights into professional development workflows",
      ],
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
    },
    {
      title: "University Mentor",
      company: "Üsküdar University",
      period: "Oct 2022 – Jun 2025",
      location: "Istanbul, Turkey",
      description: "Giving back to my university community by helping new students navigate their academic journey and discover their passion for technology.",
      highlights: [
        "Supported new students academically and technically, particularly in data management and project planning",
        "Assisted with organizing workshops on digital tools and teamwork in tech projects",
        "Helped students overcome challenges I once faced, creating a supportive learning environment",
        "Developed leadership and communication skills through mentoring diverse groups of students",
      ],
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
    },
  ];

  const projects = [
    {
      title: "Women's Rights Platform",
      category: "Graduation Project (2025)",
      description: "My graduation project was close to my heart, building a secure platform to promote women's rights and create a safe space for important conversations. This project taught me that technology can be a powerful force for social good.",
      techStack: ["MongoDB", "Express", "React", "Node.js", "JWT", "Real-time Updates"],
      highlights: [
        "Developed a secure MERN-stack platform with authentication and real-time updates for community discussions",
        "Integrated data validation and privacy mechanisms to ensure user safety and confidentiality",
        "Focused on accessibility and user-centered design to create an inclusive experience",
        "Implemented real-time features for immediate community engagement and support",
      ],
      gradient: "from-purple-50 to-pink-50",
    },
    {
      title: "Machine Learning in Computer Networks",
      category: "Research Project",
      description: "Diving deep into the intersection of machine learning and network optimization, I explored how AI can make networks smarter, faster, and more secure.",
      techStack: ["Python", "Machine Learning", "SDN/NFV", "Network Optimization"],
      highlights: [
        "Explored ML-driven network optimization and secure resource allocation strategies",
        "Investigated SDN/NFV frameworks and deterministic networking for reliability and performance",
        "Analyzed cutting-edge research on AI-powered network management",
        "Proposed novel approaches to improve network efficiency and security",
      ],
      gradient: "from-blue-50 to-cyan-50",
    },
    {
      title: "University Clubs Management System",
      category: "Team Leadership Project (2024)",
      description: "Leading a 10-member team was both challenging and rewarding. We built a comprehensive system for managing university clubs, and I learned invaluable lessons about collaboration, communication, and technical leadership.",
      techStack: ["ASP.NET", "SQL Server", "Bootstrap", "Entity Framework"],
      highlights: [
        "Led a 10-member team, managing frontend and backend integration using ASP.NET and Bootstrap",
        "Designed database structures and ERD models for organized, secure data handling",
        "Coordinated team sprints and ensured timely delivery of project milestones",
        "Integrated authentication and role-based access control for secure club management",
      ],
      gradient: "from-green-50 to-emerald-50",
    },
    {
      title: "Job Application System",
      category: "Agile Scrum Project (2024)",
      description: "Working in an Agile environment taught me the value of iterative development and continuous improvement. This project was my introduction to professional software development methodologies.",
      techStack: ["React", "Node.js", "MongoDB", "Agile Scrum"],
      highlights: [
        "Built authentication and access control modules ensuring secure user sessions",
        "Participated in Agile sprints for iterative testing and quality improvement",
        "Implemented RESTful APIs for seamless frontend-backend communication",
        "Conducted code reviews and pair programming to maintain code quality",
      ],
      gradient: "from-orange-50 to-amber-50",
    },
    {
      title: "E-Commerce Testing Project",
      category: "Quality Assurance Project (2023)",
      description: "This project opened my eyes to the critical importance of testing and quality assurance. Finding vulnerabilities and improving system reliability became a fascinating puzzle to solve.",
      techStack: ["Selenium", "JMeter", "Automated Testing", "Performance Testing"],
      highlights: [
        "Designed automated testing using Selenium and JMeter to detect vulnerabilities and improve reliability",
        "Reported performance bottlenecks and proposed optimization strategies",
        "Created comprehensive test cases covering functional, security, and performance testing",
        "Collaborated with developers to resolve bugs and improve system stability",
      ],
      gradient: "from-red-50 to-rose-50",
    },
  ];

  const skills = [
    {
      category: "Languages",
      items: ["JavaScript", "Python", "SQL", "C#", "Java", "C++", "HTML", "CSS"],
    },
    {
      category: "Frontend",
      items: ["React.js", "HTML5", "CSS3", "Bootstrap", "Tailwind CSS", "Responsive Design"],
    },
    {
      category: "Backend",
      items: ["Node.js", "Express.js", "ASP.NET", "MongoDB", "SQL Server", "PostgreSQL", "MySQL"],
    },
    {
      category: "Data & Analytics",
      items: ["Power BI", "Excel", "Pandas", "NumPy", "Matplotlib", "Data Visualization", "EDA"],
    },
    {
      category: "Tools & DevOps",
      items: ["Docker", "Git", "GitHub", "Selenium", "Puppeteer", "Jira", "Figma"],
    },
    {
      category: "Concepts",
      items: ["Agile", "Scrum", "CI/CD", "UX Testing", "System Modelling", "GDPR", "Data Privacy"],
    },
  ];

  const languages = [
    { name: "Arabic", level: "Native" },
    { name: "English", level: "Fluent" },
    { name: "Turkish", level: "B2" },
    { name: "German", level: "A1" },
  ];

  const certifications = [
    "IBM – Developing Websites and Front-Ends with Bootstrap (Jan 2025)",
    "IBM – Developing Front-End Apps with React (Dec 2024)",
    "Yale University – Introduction to Psychology (Dec 2024)",
    "MathWorks – Systems Engineering (Dec 2024)",
    "Board Infinity – C# for .NET Developers",
    "IBM – Designing User Interfaces and Experiences (UI/UX)",
    "IBM – What is Data Science?",
    "İstanbul Aydın University – E-Marketing Specialist",
    "Coursera – Get Started with Figma",
    "University of California, Davis – SQL for Data Science",
    "Udemy – The Complete SQL Bootcamp: Go from Zero to Hero",
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-light text-gray-900 mb-6">
              My Story
            </h1>
            <div className="w-20 h-1 bg-gray-900 mx-auto mb-8"></div>
          </div>

          <div className="space-y-6 text-lg text-gray-700 font-light leading-relaxed">
            <p>
              Hi, I'm Raya Halwani, a software engineer who believes technology should serve people, not the other way around.
            </p>
            
            <p>
              My journey into tech started at Üsküdar University in Istanbul, where I earned my B.Sc. in Software Engineering with a GPA of 3.4. It wasn't always easy, learning to code, debugging late into the night, working on team projects with people from different backgrounds. But each challenge taught me something valuable, not just about writing code, but about solving real problems for real people.
            </p>

            <p>
              Now, I'm pursuing my M.Sc. in Engineering of Socio-Technical Systems at the University of Oldenburg in Germany. This program is perfect for how I see technology, not as isolated systems, but as tools that interact with society, culture, and human needs. I'm learning to design digital solutions that are not only technically sound but also socially responsible and user-centered.
            </p>

            <p>
              What excites me most about software engineering is its versatility. One day I'm analyzing municipal datasets to support refugee integration programs, ensuring data privacy and ethical reporting. Another day I'm building secure web applications with the MERN stack, focusing on authentication and user experience. I love that I can combine full-stack development with data analytics to create solutions that are both functional and meaningful.
            </p>

            <p>
              Whether it's developing a platform to promote women's rights, optimizing network performance with machine learning, or leading a team to build a university management system, I approach every project with the same mindset: how can this make someone's life better? How can I build something that people will trust and want to use?
            </p>

            <p>
              I'm currently learning German (A1 level, ich lerne noch!) and navigating life in a new country, which has taught me resilience, adaptability, and the importance of clear communication across cultures. Speaking Arabic natively, English fluently, and Turkish at B2 level, I bring a multicultural perspective to every team I work with.
            </p>

            <p>
              I'm looking for opportunities where I can contribute to meaningful projects while continuing my studies. I'm particularly interested in roles involving full-stack development, data analytics, or UX design, but I'm always open to new challenges that push me to grow.
            </p>

            <p className="text-xl font-normal text-gray-900 pt-4">
              If you're working on something interesting and think I could help, let's talk. I'm ready to bring my skills, passion, and a fresh perspective to your team.
            </p>
          </div>

          {/* Connect Button */}
          <div className="mt-12 text-center">
            <a
              href="mailto:raya.halwani@gmail.com"
              className="inline-flex items-center px-8 py-4 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors font-light text-lg"
            >
              <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Send an Email
            </a>
          </div>
        </div>
      </section>

      {/* Professional Experience */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-gray-900 mb-4">
              Professional Experience
            </h2>
            <p className="text-xl text-gray-600 font-light">
              Where I've worked and what I've learned
            </p>
          </div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg p-8 border border-gray-200 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center text-white">
                    {exp.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-semibold text-gray-900 mb-1">
                          {exp.title}
                        </h3>
                        <p className="text-lg text-gray-700 font-light mb-1">
                          {exp.company}
                        </p>
                        <p className="text-sm text-gray-600 font-light">
                          📍 {exp.location}
                        </p>
                      </div>
                      <span className="text-sm text-gray-600 font-light mt-2 md:mt-0 whitespace-nowrap">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-gray-700 font-light leading-relaxed mb-4 italic">
                      {exp.description}
                    </p>
                    <ul className="space-y-2">
                      {exp.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start text-gray-600 font-light">
                          <span className="mr-2 mt-1 text-gray-400">•</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Projects */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-gray-900 mb-4">
              Academic Projects
            </h2>
            <p className="text-xl text-gray-600 font-light">
              Turning ideas into reality through code
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-8 border border-gray-200 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="mb-4">
                  <span className="text-sm text-gray-600 font-light">
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-semibold text-gray-900 mt-2 mb-4">
                    {project.title}
                  </h3>
                  <p className="text-gray-700 font-light leading-relaxed mb-4 italic">
                    {project.description}
                  </p>
                </div>

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

                <ul className="space-y-2">
                  {project.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start text-gray-600 font-light text-sm">
                      <span className="mr-2 mt-1 text-gray-400">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Skills */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-gray-900 mb-4">
              Technical Skills
            </h2>
            <p className="text-xl text-gray-600 font-light">
              The tools and technologies I work with
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skillGroup, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg p-6 border border-gray-200"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {skillGroup.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-white text-gray-700 rounded-md text-sm font-light border border-gray-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Languages & Certifications */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Languages */}
            <div>
              <h2 className="text-3xl font-light text-gray-900 mb-8">
                Languages
              </h2>
              <div className="space-y-4">
                {languages.map((lang, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg p-6 border border-gray-200"
                  >
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">
                        {lang.name}
                      </h3>
                      <p className="text-sm text-gray-600 font-light">
                        {lang.level}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h2 className="text-3xl font-light text-gray-900 mb-8">
                Certifications
              </h2>
              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <ul className="space-y-3">
                  {certifications.map((cert, index) => (
                    <li
                      key={index}
                      className="flex items-start text-gray-700 font-light"
                    >
                      <span className="mr-3 mt-1 text-gray-400">✓</span>
                      <span>{cert}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-light mb-6">
            Let's Build Something Together
          </h2>
          <p className="text-xl text-gray-300 font-light mb-8 leading-relaxed">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Whether you're looking for someone to join your team or want to collaborate on an individual project, I'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/491633734785"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 rounded-lg hover:bg-gray-100 transition-colors font-light text-lg"
            >
              <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              Send a Message on WhatsApp
            </a>
            <a
              href="https://drive.google.com/file/d/1Rkam2w2qKWIg7FmDZ_4CIILbbmrOyvD4/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-colors font-light text-lg"
            >
              <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download My CV
            </a>
        </div>
      </div>
      </section>
    </div>
  );
};

export default About;
