import { useState } from "react";
import ProjectsList from "../contexts/projects";

function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(null);

  // Function to open a project
  const openProject = (project) => {
    setSelectedProject(project);
    console.log(project.name);
  };

  // Function to close the project details
  const closeProject = () => {
    setSelectedProject(null);
  };

  return (
    <div className="container mx-auto">
      <div className="main-container">
        <h1 className="text-5xl font-bold mt-32 mb-1">Projects</h1>
        <hr className="my-8 h-[2px] bg-gray-200" />
        {/* Main Projects Container */}
        <div className="grid gap-7 md:gap-14 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
          {ProjectsList.map((project) => (
            <div
              key={project.id}
              className="relative cursor-pointer overflow-hidden rounded-xl group shadow-2xl"
              onClick={() => openProject(project)}
            >
              <img
                src={project.image}
                alt={project.name}
                className="rounded-xl transition-transform duration-300 ease-in-out group-hover:scale-110"
              />
              <h2 className="absolute top-5 left-4 bg-green-500 text-white px-5 py-1 rounded-md text-xl font-semibold">
                {project.name}
              </h2>
            </div>
          ))}
        </div>
      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="relative bg-white rounded-lg shadow-lg w-full max-w-4xl p-6">
            {/* Close Button */}
            <button
              onClick={closeProject}
              className="absolute top-4 right-4 bg-gray-300 hover:bg-gray-400 text-gray-700 rounded-full w-8 h-8 flex items-center justify-center"
            >
              X
            </button>

            {/* Project Image */}
            <img
              src={selectedProject.image}
              alt={selectedProject.name}
              className="rounded-lg mb-4 w-full object-cover h-64"
            />

            {/* Project Details */}
            <h2 className="text-3xl font-bold text-gray-800 mb-3">
              {selectedProject.name}
            </h2>
            <p className="text-gray-600 mb-4">{selectedProject.description}</p>

            {/* Tools */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Tools Used</h3>
              <div className="flex flex-wrap gap-2">
                {selectedProject.tools.map((tool, index) => (
                  <span
                    key={index}
                    className="bg-green-500 text-white px-3 py-1 rounded-full text-sm"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-4">
              <a
                href={selectedProject.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition duration-300"
              >
                Live Website
              </a>
              <a
                href={selectedProject.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-green-500 text-green-500 px-4 py-2 rounded-lg hover:bg-green-500 hover:text-white transition duration-300"
              >
                GitHub Repo
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Portfolio;
