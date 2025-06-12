import HeroSection from "../components/HeroSection";
import SocialMediaCard from "../components/SocialMediaCard";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      {/* <About/> */}
      {/* About Section */}
      {/* <AboutSection /> */}

      {/* DMT Course Info */}

      {/* Social Media Section */}
      <section
        id="social-media"
        className="py-24 bg-gradient-to-b from-white to-indigo-50"
      >
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">
              Connect With Me
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Follow my journey in data analytics and software engineering
              through my social media channels
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* YouTube */}
            <SocialMediaCard
              platform="YouTube"
              url="https://www.youtube.com/@RayaHalwanii"
              gradientFrom="from-red-500"
              gradientTo="to-pink-600"
              icon={
                <svg
                  className="w-6 h-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              }
              description="Educational content about data analytics, software engineering tutorials, and insights into my academic projects at Üsküdar University."
              hashtags={[
                {
                  text: "#DataAnalytics",
                  bgColor: "bg-red-100",
                  textColor: "text-red-800",
                },
                {
                  text: "#SoftwareEngineering",
                  bgColor: "bg-indigo-100",
                  textColor: "text-indigo-800",
                },
                {
                  text: "#ÜÜ",
                  bgColor: "bg-teal-100",
                  textColor: "text-teal-800",
                },
              ]}
              footer={
                <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-red-500 to-pink-600 text-white rounded-full font-semibold hover:from-red-600 hover:to-pink-700 transition-colors duration-300"
                  >
                    Video 1
                  </a>
                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-red-500 to-pink-600 text-white rounded-full font-semibold hover:from-red-600 hover:to-pink-700 transition-colors duration-300"
                  >
                    Video 2
                  </a>
                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-red-500 to-pink-600 text-white rounded-full font-semibold hover:from-red-600 hover:to-pink-700 transition-colors duration-300"
                  >
                    Video 3
                  </a>
                </div>
              }
            />

            {/* LinkedIn */}
            <SocialMediaCard
              platform="LinkedIn"
              url="https://www.linkedin.com/in/raya-halwani-46806a192/"
              gradientFrom="from-indigo-600"
              gradientTo="to-teal-600"
              icon={
                <svg
                  className="w-6 h-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              }
              description="Professional network showcasing my experience in data analytics and software engineering, including academic projects and industry connections."
              hashtags={[
                {
                  text: "#DataAnalytics",
                  bgColor: "bg-indigo-100",
                  textColor: "text-indigo-800",
                },
                {
                  text: "#SoftwareEngineering",
                  bgColor: "bg-teal-100",
                  textColor: "text-teal-800",
                },
                {
                  text: "#ÜÜ",
                  bgColor: "bg-pink-100",
                  textColor: "text-pink-800",
                },
              ]}
              footer={
                <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
                  <a
                    href="https://drive.google.com/file/d/1ZxMzW2TNI4EGebzB5yAzL-dNCdQhItYQ/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-indigo-600 to-teal-600 text-white rounded-full font-semibold hover:from-indigo-700 hover:to-teal-700 transition-colors duration-300"
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
                        d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                    CV
                  </a>
                  <a
                    href="https://www.linkedin.com/feed/update/urn:li:activity:7338968713674555392/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-teal-600 to-indigo-600 text-white rounded-full font-semibold hover:from-teal-700 hover:to-indigo-700 transition-colors duration-300"
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
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                    Post
                  </a>
                </div>
              }
            />

            {/* Instagram */}
            <SocialMediaCard
              platform="Instagram"
              url="https://instagram.com/rayahalwani"
              gradientFrom="from-pink-500"
              gradientTo="to-purple-600"
              icon={
                <svg
                  className="w-6 h-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              }
              description="Behind-the-scenes look at my data analytics projects, academic life, and professional development journey."
              hashtags={[
                {
                  text: "#DataAnalytics",
                  bgColor: "bg-pink-100",
                  textColor: "text-pink-800",
                },
                {
                  text: "#SoftwareEngineering",
                  bgColor: "bg-teal-100",
                  textColor: "text-teal-800",
                },
                {
                  text: "#ÜÜ",
                  bgColor: "bg-indigo-100",
                  textColor: "text-indigo-800",
                },
              ]}
              footer="Project Updates & Academic Life"
            />
          </div>
        </div>
      </section>

      {/* <DMTCourseInfo /> */}
    </div>
  );
};

export default Home;
