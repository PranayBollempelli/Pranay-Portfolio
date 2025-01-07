import { useState, useEffect } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import NavItems from "../contexts/navLinks";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Handle scroll and active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = NavItems.map((item) => item.link.replace("#", ""));
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-sm z-50">
      <div className="container mx-auto">
        <div className="h-20 px-5 md:px-14 flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="group flex items-center gap-3">
            <div className="bg-gradient-to-r from-secondary to-green-600 h-10 w-10 lg:h-12 lg:w-12 rounded-xl flex items-center justify-center transform rotate-12 group-hover:rotate-0 transition-all duration-300">
              <p className="text-white font-bold text-xl lg:text-2xl">P</p>
            </div>
            <h1 className="font-bold text-xl lg:text-2xl bg-gradient-to-r from-secondary to-green-600 bg-clip-text text-transparent">
              Pranay
            </h1>
          </a>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            {NavItems.map((item) => (
              <a
                key={item.id}
                href={item.link}
                className={`relative px-2 py-1 text-sm font-medium transition-colors
                  ${
                    activeSection === item.link.replace("#", "")
                      ? "text-secondary"
                      : "text-gray-600 hover:text-secondary"
                  }`}
              >
                {item.name}
                <span
                  className={`absolute bottom-0 left-0 w-full h-0.5 bg-secondary transform origin-left transition-transform duration-300
                  ${
                    activeSection === item.link.replace("#", "")
                      ? "scale-x-100"
                      : "scale-x-0"
                  }`}
                />
              </a>
            ))}
          </div>

          {/* Mobile Menu Container */}
          <div
            className={`fixed inset-0 min-h-screen w-full transition-all duration-300 lg:hidden ${
              isMenuOpen ? "visible" : "invisible"
            }`}
          >
            {/* Blur Background */}
            <div
              className={`absolute inset-0 bg-white/70 backdrop-blur-lg transition-opacity duration-300 ${
                isMenuOpen ? "opacity-100" : "opacity-0"
              }`}
              style={{ zIndex: 40 }}
            />

            {/* Menu Items */}
            <div
              className={`relative pt-28 px-6 transition-opacity duration-300 ${
                isMenuOpen ? "opacity-100" : "opacity-0"
              }`}
              style={{ zIndex: 41 }}
            >
              <div className="flex flex-col items-center gap-8">
                {NavItems.map((item) => (
                  <a
                    key={item.id}
                    href={item.link}
                    onClick={() => setIsMenuOpen(false)}
                    className={`text-lg font-medium transition-colors
                  ${
                    activeSection === item.link.replace("#", "")
                      ? "text-secondary"
                      : "text-gray-600"
                  }`}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
