const HeroSection = () => {
  return (
    <section className="relative bg-gray-50 min-h-screen flex items-center justify-center overflow-hidden">
      <div className="relative z-10 max-w-screen-xl mx-auto px-4 py-32">
        <div className="text-center">
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light text-gray-900 mb-8 leading-tight">
            Hi, I'm Ray
            <br />
            <span className="text-4xl md:text-5xl lg:text-6xl text-gray-600 mt-4 block">
              Software Engineer & Data Analyst
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 font-light max-w-3xl mx-auto">
            Building web applications and analyzing data to create meaningful solutions
          </p>

          {/* Scroll Indicator */}
          <div className="mt-16 animate-bounce">
            <svg
              className="w-6 h-6 mx-auto text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
