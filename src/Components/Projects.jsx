import ProjectsList from "../contexts/projects";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";

function Portfolio() {
  return (
    <section id="projects" className="main-container scroll-mt-20">
      <div className="text-center mb-16 space-y-4">
        <div className="inline-flex items-center gap-3">
          <h1 className="leading-relaxed tracking-wide py-2 text-5xl font-bold bg-gradient-to-r from-secondary to-green-600 bg-clip-text text-transparent">
            Projects
          </h1>
        </div>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Showcasing my expertise in web development through innovative projects
        </p>
      </div>

      {/* Mobile Horizontal Scroll */}
      <div className="flex md:hidden overflow-x-auto gap-6 -mx-4 px-4 pb-8 snap-x snap-mandatory">
        {ProjectsList.map((project) => (
          <div
            key={project.id}
            className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex-shrink-0 w-[85vw] max-w-sm snap-center"
          >
            <div className="relative overflow-hidden aspect-video">
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div className="text-white space-y-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl font-bold">{project.name}</h3>
                </div>
              </div>
            </div>

            <div className="p-6 space-y-4">
              <h3 className="text-xl font-semibold text-gray-800 group-hover:text-secondary transition-colors duration-300">
                {project.name}
              </h3>
              <p className="text-gray-600 text-sm line-clamp-3">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tools.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full hover:bg-secondary hover:text-white transition-colors duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="pt-4 flex justify-between items-center border-t border-gray-100">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-50 text-secondary hover:bg-secondary hover:text-white transition-all duration-300"
                >
                  <LaunchIcon fontSize="small" />
                  <span className="font-medium">Live Demo</span>
                </a>
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-gray-50 text-gray-600 transition-all duration-300"
                >
                  <GitHubIcon fontSize="small" />
                  <span className="font-medium">Source</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop Grid View */}
      <div className="hidden md:grid gap-8 md:gap-12 md:grid-cols-2 lg:grid-cols-3">
        {ProjectsList.map((project) => (
          <div
            key={project.id}
            className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
          >
            <div className="relative overflow-hidden aspect-video">
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div className="text-white space-y-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl font-bold">{project.name}</h3>
                </div>
              </div>
            </div>

            <div className="p-6 space-y-4">
              <h3 className="text-xl font-semibold text-gray-800 group-hover:text-secondary transition-colors duration-300">
                {project.name}
              </h3>
              <p className="text-gray-600 text-sm line-clamp-3">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tools.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full hover:bg-secondary hover:text-white transition-colors duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="pt-4 flex justify-between items-center border-t border-gray-100">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-50 text-secondary hover:bg-secondary hover:text-white transition-all duration-300"
                >
                  <LaunchIcon fontSize="small" />
                  <span className="font-medium">Live Demo</span>
                </a>
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-gray-50 text-gray-600 transition-all duration-300"
                >
                  <GitHubIcon fontSize="small" />
                  <span className="font-medium">Source</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
