import Resume from "../../public/resume/Resume.pdf";
import { WhatIDoList } from "../contexts/whatIDo";
import { socialLinks } from "../contexts/socialLinks";

function Home() {
  const whatIDo = (WhatIDoList) => {
    return (
      <div className="mt-16 sm:mt-20">
        {/* Section Header */}
        <h2 className="relative text-2xl sm:text-3xl font-bold inline-block pb-2 bg-gradient-to-r from-secondary to-green-600 bg-clip-text text-transparent">
          What I Do
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-secondary to-green-600 rounded-full" />
        </h2>

        {/* Cards Grid */}
        <div className="mt-8 sm:mt-10 grid gap-6 sm:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {WhatIDoList.map((item) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.id}
                className="group bg-white p-4 sm:p-6 rounded-xl shadow-md hover:shadow-lg 
                  transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex items-start space-x-4">
                  <div
                    className="p-2.5 sm:p-3 bg-gray-50 rounded-lg 
                    group-hover:bg-secondary/10 transition-colors duration-300"
                  >
                    <IconComponent
                      className="text-secondary transform group-hover:scale-110 
                        transition-transform duration-300 w-6 h-6 sm:w-7 sm:h-7"
                    />
                  </div>
                  <div className="space-y-2">
                    <h3
                      className="text-base sm:text-lg font-semibold text-gray-800 
                      group-hover:text-secondary transition-colors duration-300"
                    >
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <div className="main-container min-h-screen bg-gray-50" id="home">
      <div className="min-h-[90vh] flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse md:flex-row items-center gap-8 sm:gap-12 md:gap-16 lg:gap-20 max-w-6xl mx-auto">
          {/* Content */}
          <div className="text-center md:text-start w-full max-w-xl">
            <div className="space-y-4 sm:space-y-6">
              {/* Header */}
              <div className="space-y-2 sm:space-y-3">
                <span className="text-secondary font-medium text-xs sm:text-sm md:text-base tracking-wider uppercase">
                  Full Stack Developer [MERN Stack]
                </span>
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
                  PRANAY
                  <span className="text-gray-400"> BOLLEMPELLI</span>
                </h1>
                <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed max-w-lg">
                  Building modern web applications with clean code and
                  thoughtful design.
                </p>
              </div>
              {/* Buttons */}
              <div className="flex gap-3 justify-center md:justify-start">
                <a
                  href={Resume}
                  download
                  className="px-3 sm:px-4 py-1.5 text-xs sm:text-sm font-medium 
                      bg-gradient-to-r from-secondary to-green-600 text-white rounded
                      shadow-sm hover:shadow-md shadow-secondary/10
                      transform hover:-translate-y-0.5 active:translate-y-0
                      transition-all duration-300"
                >
                  Download CV
                </a>
                <a
                  href="#contact"
                  className="px-3 sm:px-4 py-1.5 text-xs sm:text-sm font-medium
                      border border-gray-200 text-gray-600 rounded
                      hover:border-secondary hover:text-secondary
                      hover:shadow-sm hover:shadow-secondary/5
                      transform hover:-translate-y-0.5 active:translate-y-0
                      transition-all duration-300 bg-white/50"
                >
                  Contact
                </a>
              </div>

              {/* Social Links */}
              <div className="flex gap-3 sm:gap-4 justify-center md:justify-start">
                {socialLinks.map((item) => (
                  <a
                    key={item.id}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-gray-400 hover:text-secondary transition-colors"
                  >
                    <item.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Enhanced Profile Image */}
          <div className="relative group animate-float">
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-secondary/20 to-green-400/20 rounded-full blur-2xl group-hover:blur-3xl transition-all duration-500" />

            {/* Decorative Ring */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-secondary to-green-400 rounded-full opacity-20 group-hover:opacity-30 blur-sm transition-opacity duration-500" />

            {/* Main Image Container */}
            <div className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-72 lg:h-72 xl:w-80 xl:h-80">
              <div className="w-full h-full rounded-full overflow-hidden bg-white ring-2 ring-white/80 ring-offset-2 ring-offset-gray-100 shadow-lg transition-transform duration-500 group-hover:scale-[1.02]">
                <img
                  src="https://res.cloudinary.com/dcuemmcmb/image/upload/v1735557757/Portfolio%20images/profile_image_zkwhes.jpg"
                  alt="profile"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Decorative Dots */}
              <div className="absolute -right-2 top-1/4 flex flex-col gap-1">
                <div className="w-1 h-1 rounded-full bg-secondary/50"></div>
                <div className="w-1 h-1 rounded-full bg-secondary/50"></div>
                <div className="w-1 h-1 rounded-full bg-secondary/50"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {whatIDo(WhatIDoList)}
    </div>
  );
}

export default Home;
