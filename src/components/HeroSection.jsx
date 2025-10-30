const HeroSection = () => {
  return (
    <section className="relative bg-gray-50 min-h-screen flex items-center justify-center overflow-hidden">
      <div className="relative z-10 max-w-screen-xl mx-auto px-4 py-32">
        <div className="text-center">
          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-light text-gray-900 mb-6 md:mb-8 leading-tight px-4">
            Hi, I'm Ray
            <br />
            <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-gray-600 mt-3 md:mt-4 block">
              Software Engineer & Data Analyst
            </span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 font-light max-w-3xl mx-auto px-4">
            Building web applications and analyzing data to create meaningful solutions
          </p>

          {/* Scroll Indicator */}
          <div className="mt-16">
            <div className="flex flex-col items-center gap-2 animate-bounce">
              <span className="text-sm text-gray-600 font-light tracking-wider">
                Scroll Down
              </span>
              <svg
                className="w-6 h-6 text-gray-900"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
