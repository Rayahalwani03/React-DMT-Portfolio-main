import { useNavigate } from "react-router-dom";
import heroBg from "../assets/andrew-kliatskyi-2bfHAKhGn4g-unsplash.jpg";
import dmtLogo from "../assets/dmt-logo.jpg";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative bg-gradient-to-br from-indigo-600 via-teal-600 to-pink-500 text-white overflow-hidden">
      {/* Background Image */}
      <img
        src={heroBg}
        alt="Abstract black background"
        className="absolute inset-0 w-full h-full object-cover object-center z-0 opacity-60"
        style={{ pointerEvents: "none" }}
      />
      {/* SVG Gradient Overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAzNGMwLTIuMjA5IDEuNzkxLTQgNC00czQgMS43OTEgNCA0LTEuNzkxIDQtNCA0LTQtMS43OTEtNC00eiIgZmlsbD0iI2ZmZiIgZmlsbC1vcGFjaXR5PSIuMSIvPjwvZz48L3N2Zz4=')] opacity-10 z-10"></div>
      <div className="relative z-20 max-w-screen-xl mx-auto px-4 py-24 lg:py-32">
        <div className="text-center">
          {/* DMT Logo */}
          <div className="mb-8 transform hover:scale-105 transition-transform duration-300">
            <a
              href="https://uskudar.edu.tr/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <img
                src={dmtLogo}
                alt="DMT Logo"
                className="mx-auto h-40 w-40 rounded-2xl object-cover shadow-2xl border-4 border-white/20 hover:border-white/40 transition-all duration-300"
              />
            </a>
          </div>

          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-teal-100 to-teal-100 bg-clip-text text-transparent">
              Raya Halwani
            </span>
          </h1>

          {/* Slogan */}
          <p className="text-2xl md:text-3xl font-light text-white/90 mb-6">
          Transforming Data into Digital Experiences
          </p>

          {/* Course Info */}
          <div className="bg-white/10 backdrop-blur-sm rounded-full px-8 py-4 inline-block mb-12 border border-white/20">
            <p className="text-lg font-medium text-white/90">
              Translating Ideas into Impact – Final Project for ETI462
            </p>
          </div>

          {/* CTA Button */}
          <div className="flex justify-center">
            <button
              onClick={() => navigate("/article")}
              className="inline-flex items-center bg-white text-indigo-600 px-8 py-4 rounded-full font-semibold hover:bg-indigo-50 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              <span className="mr-2">Read Academic Article</span>
              <svg
                className="w-5 h-5"
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
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
