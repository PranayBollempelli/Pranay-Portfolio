function ProjectDetails() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="main-container">
        {/* Project Card */}
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Project Image */}
          <div className="h-64">
            <img
              src="https://via.placeholder.com/800x400" // Replace with project image link
              alt="Project Screenshot"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Project Content */}
          <div className="p-6">
            {/* Title */}
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              Project Title
            </h1>

            {/* Description */}
            <p className="text-gray-600 leading-relaxed mb-4">
              This is a brief description of the project. It highlights the main
              features, objectives, and challenges you solved while working on
              this project.
            </p>

            {/* Tools */}
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-gray-700 mb-2">
                Tools Used
              </h2>
              <ul className="flex flex-wrap gap-2">
                {["HTML", "CSS", "React", "Tailwind CSS", "Node.js"].map(
                  (tool, index) => (
                    <li
                      key={index}
                      className="bg-green-500 text-white text-sm px-3 py-1 rounded-full"
                    >
                      {tool}
                    </li>
                  )
                )}
              </ul>
            </div>

            {/* Buttons */}
            <div className="flex flex-col md:flex-row gap-4">
              {/* Live Website Button */}
              <a
                href="https://example.com" // Replace with live website link
                target="_blank"
                rel="noopener noreferrer"
                className="text-white bg-green-500 hover:bg-green-600 px-6 py-2 rounded-lg text-center font-medium transition duration-300"
              >
                Live Website
              </a>

              {/* GitHub Repo Button */}
              <a
                href="https://github.com" // Replace with GitHub repo link
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-500 border-2 border-green-500 hover:bg-green-500 hover:text-white px-6 py-2 rounded-lg text-center font-medium transition duration-300"
              >
                GitHub Repo
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetails;
