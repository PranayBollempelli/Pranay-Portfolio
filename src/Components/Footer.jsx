import { socialLinks } from "../contexts/socialLinks";

function Footer() {
  const quickLinks = ["Home", "Resume", "Projects", "Contact"];

  return (
    <footer className="relative mt-32">
      {/* Enhanced Wave Separator */}
      <div className="absolute top-0 left-0 w-full overflow-hidden h-24 -translate-y-23 transform rotate-180">
        <svg
          className="w-full h-full"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className="fill-white"
          ></path>
        </svg>
      </div>

      <div className="bg-gradient-to-br from-gray-50 via-white to-gray-100">
        <div className="container mx-auto px-4 pt-24 pb-12">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 max-w-7xl mx-auto">
            {/* About Column */}
            <div className="space-y-6 group">
              <div className="flex items-center space-x-4 group-hover:translate-x-2 transition-transform duration-300">
                <div className="bg-gradient-to-br from-secondary via-green-500 to-green-600 h-14 w-14 rounded-xl flex items-center justify-center shadow-lg transform rotate-12 group-hover:rotate-0 transition-all duration-300">
                  <p className="text-white font-bold text-2xl">P</p>
                </div>
                <h2 className="font-bold text-3xl bg-gradient-to-r from-secondary to-green-600 text-transparent bg-clip-text">
                  Pranay
                </h2>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed hover:text-gray-800 transition-colors duration-300 pr-4">
                A passionate Full Stack Developer crafting innovative web
                solutions with modern technologies and creative design
                approaches.
              </p>
            </div>

            {/* Quick Links Column */}
            <div className="space-y-8">
              <h3 className="text-xl font-semibold relative">
                Quick Links
                <span className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-secondary to-green-600 rounded-full"></span>
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {quickLinks.map((link) => (
                  <a
                    key={link}
                    href={`#${link.toLowerCase()}`}
                    className="text-gray-600 hover:text-secondary flex items-center space-x-2 group"
                  >
                    <span className="h-1 w-0 bg-secondary transition-all duration-300 group-hover:w-4"></span>
                    <span className="transition-transform duration-300 group-hover:translate-x-2">
                      {link}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Connect Column */}
            <div className="space-y-8">
              <h3 className="text-xl font-semibold relative">
                Let's Connect
                <span className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-secondary to-green-600 rounded-full"></span>
              </h3>
              <div className="flex gap-6">
                {socialLinks.map((item) => {
                  const IconComponent = item.icon;
                  return (
                    <a
                      key={item.id}
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group"
                    >
                      <div
                        className="p-4 rounded-lg bg-white hover:bg-gradient-to-br hover:from-secondary hover:to-green-600 
                                    transform hover:-translate-y-2 transition-all duration-300 shadow-lg hover:shadow-xl"
                      >
                        <IconComponent
                          className="text-gray-600 group-hover:text-white transition-colors duration-300"
                          style={{ fontSize: 24 }}
                        />
                      </div>
                      <span className="block text-center mt-2 text-sm text-gray-500 group-hover:text-secondary">
                        {item.label}
                      </span>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Copyright Bar */}
          <div className="mt-16 pt-8 border-t border-gray-200">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-500 text-sm">
                © {new Date().getFullYear()} Pranay Bollempelli. All rights
                reserved.
              </p>
              <p className="text-sm">
                <span className="text-gray-400">Crafted with</span>{" "}
                <span className="text-red-500">❤</span>{" "}
                <span className="text-gray-400">using</span>{" "}
                <span className="text-secondary font-medium">React.js</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
