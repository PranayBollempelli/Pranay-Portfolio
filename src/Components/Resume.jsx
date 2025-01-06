import { Frontend, Backend, Tools } from "../contexts/skills";
import AboutMe from "./About";
import Education from "../contexts/educationList";

function Resume() {
  return (
    <section id="resume" className="main-container scroll-mt-20">
      {/* Modern Header */}
      <div className="text-center mb-16 space-y-4">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-secondary to-green-600 bg-clip-text text-transparent">
          Resume
        </h1>
        <div className="w-24 h-1 bg-gradient-to-r from-secondary to-green-600 mx-auto rounded-full" />
      </div>

      {/* About Section with Card */}
      <div className="bg-white rounded-xl shadow-lg p-8 mb-16 transform transition-all duration-300 hover:shadow-xl">
        <AboutMe />
      </div>

      {/* Education Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 relative inline-block">
          Education
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-secondary to-green-600 rounded-full" />
        </h2>
        <div className="bg-white rounded-xl shadow-lg p-8 transform transition-all duration-300 hover:shadow-xl">
          <EducationSection education={Education} />
        </div>
      </div>

      {/* Skills Section */}
      <div>
        <h2 className="text-3xl font-bold mb-8 relative inline-block">
          Skills
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-secondary to-green-600 rounded-full" />
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <SkillCard title="Frontend Development" skills={Frontend} />
          <SkillCard title="Backend Development" skills={Backend} />
          <SkillCard title="Tools & Version Control" skills={Tools} />
        </div>
      </div>
    </section>
  );
}

// Enhanced Skill Card Component
const SkillCard = ({ title, skills }) => (
  <div className="bg-white rounded-xl shadow-lg p-6 transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
    <h3 className="text-xl font-semibold mb-6 text-secondary">{title}</h3>
    <div className="space-y-6">
      {skills.map((skill, index) => (
        <div key={index} className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium text-gray-600">
              {skill.name}
            </span>
            <span className="text-sm font-semibold text-secondary">
              {skill.percentage}%
            </span>
          </div>
          <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-secondary to-green-600 rounded-full transition-all duration-500 ease-out"
              style={{ width: `${skill.percentage}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  </div>
);

// Enhanced Education Timeline Component
const EducationSection = ({ education }) => (
  <div className="space-y-8">
    {education.map((item, index) => (
      <div
        key={index}
        className="relative pl-8 pb-8 border-l-2 border-gray-200 last:pb-0"
      >
        <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-secondary border-4 border-white" />
        <div className="bg-gray-50 rounded-lg p-4 transform transition-all duration-300 hover:-translate-x-1">
          <span className="inline-block px-3 py-1 mb-4 text-sm font-medium text-secondary bg-green-50 rounded-full">
            {item.year}
          </span>
          <h3 className="text-lg font-bold text-gray-800">{item.name}</h3>
          {item.degree && (
            <h4 className="text-md font-semibold text-gray-600">
              {item.degree}
            </h4>
          )}
          <p className="text-sm text-gray-500 mt-1">{item.course}</p>
        </div>
      </div>
    ))}
  </div>
);

export default Resume;
