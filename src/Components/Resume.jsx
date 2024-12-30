import { Frontend, Backend, Tools } from "../contexts/skills";
import AboutMe from "./About";
import Education from "../contexts/educationList";

const SkillSection = ({ title, skills }) => (
  <div className="p-4 bg-white shadow-lg rounded-lg">
    <h1 className="text-2xl font-semibold mb-4 text-green-500">{title}</h1>
    <div className="space-y-4">
      {skills.map((skill, index) => (
        <div key={index} className="flex items-center">
          <span className="text-md font-medium w-1/3">{skill.name}</span>
          <div className="w-2/3 bg-gray-200 rounded-full h-2 relative">
            <div
              className="bg-green-500 h-2 rounded-full"
              style={{ width: `${skill.percentage}%` }}
            ></div>
            <span className="absolute right-0 text-xs font-semibold text-green-500 pr-2">
              {skill.percentage}%
            </span>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const EducationSection = ({ education }) => (
  <div className="px-3 mx-auto py-8">
    <section>
      <div className="relative border-l-2 border-gray-300 pl-8">
        {education.map((item, index) => (
          <div key={index} className="mb-8 relative">
            <div className="absolute -left-10 top-0 bg-white text-black border-2 border-green-500 font-bold w-20 h-8 flex items-center justify-center rounded-md shadow-lg">
              <span className="text-xs">{item.year}</span>
            </div>
            <div className="ml-16">
              <h3 className="text-lg font-bold text-gray-800">{item.name}</h3>
              {item.degree && (
                <h4 className="text-md font-semibold text-gray-600">
                  {item.degree}
                </h4>
              )}
              <h4 className="text-sm text-gray-500">{item.course}</h4>
            </div>
          </div>
        ))}
      </div>
    </section>
  </div>
);

function Resume() {
  return (
    <div className="container mx-auto">
      <div className="main-container">
        <h1 className="text-5xl font-bold mt-32 mb-1">Resume</h1>
        <hr className="my-8 h-[2px] bg-gray-200" />

        <AboutMe />

        <div>
          <h1 className="relative text-2xl font-semibold pb-1 inline-block py-8">
            Education
            <span className="absolute bottom-0 left-0 w-[30%] h-[2px] bg-green-500"></span>
            <span className="absolute bottom-0 left-[30%] w-[70%] h-[2px] bg-gray-200"></span>
          </h1>
          <EducationSection education={Education} />
        </div>

        <h1 className="relative text-2xl font-semibold pb-1 inline-block py-8">
          Skills
          <span className="absolute bottom-0 left-0 w-[30%] h-[2px] bg-green-500"></span>
          <span className="absolute bottom-0 left-[30%] w-[70%] h-[2px] bg-gray-200"></span>
        </h1>
        <div className="gap-7 md:gap-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <SkillSection title="Frontend Development" skills={Frontend} />
          <SkillSection title="Backend Development" skills={Backend} />
          <SkillSection title="Tools & Version Control" skills={Tools} />
        </div>
      </div>
    </div>
  );
}

export default Resume;
