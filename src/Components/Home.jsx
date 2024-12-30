import { useNavigate } from "react-router-dom";

import DevicesIcon from "@mui/icons-material/Devices";
import StorageIcon from "@mui/icons-material/Storage";
import CodeOffIcon from "@mui/icons-material/CodeOff";

const WhatIDoList = [
  {
    id: 1,
    title: "JavaScript Mastery",
    description:
      "Building dynamic and interactive web applications with modern JavaScript frameworks.",
    icon: CodeOffIcon,
  },
  {
    id: 2,
    title: "Responsive Design",
    description:
      "Ensuring optimal performance and user experience across all devices.",
    icon: DevicesIcon,
  },
  {
    id: 3,
    title: "Backend Development",
    description: "Developing robust server-side logic and APIs.",
    icon: StorageIcon,
  },
];

function Home() {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto">
      <div className="main-container flex flex-col">
        {/* Profile Intro */}
        <div className="flex flex-col md:flex-row items-center my-5 mb-20">
          <div className="p-3 md:p-5 shadow-add_full mt-4 mb-8 rounded-full aspect-square h-60 w-60 md:h-80 md:w-80 md:mr-8">
            <img
              src="https://res.cloudinary.com/dcuemmcmb/image/upload/v1735557757/Portfolio%20images/profile_image_zkwhes.jpg"
              alt="profile"
              className="rounded-[50%] w-full h-full object-cover"
            />
          </div>
          <div className="text-center md:text-start">
            <p className="text-text_secondary font-semibold md:mx-4 md:text-xl">
              Full Stack Developer{" "}
              <span className="font-medium">(MERN stack)</span>
            </p>
            <h1 className="text-heading_color text-3xl font-semibold mt-2 md:mx-4 md:text-5xl">
              PRANAY BOLLEMPELLI
            </h1>
            <p className="mx-4 text-left mt-4 mb-8 text-gray-400 text-sm font-medium ">
              Full Stack Developer crafting responsive, scalable web
              applications with clean code and user-focused design.
            </p>
            <button className="main_button md:mx-4">Download CV</button>
            <button
              className="secondary_button md:mx-4"
              onClick={() => navigate("/contact")}
            >
              Contact
            </button>
          </div>
        </div>

        {/* What I Do */}
        <div className="mt-10">
          <h1 className="relative text-2xl font-semibold inline-block pb-1">
            What I Do
            <span className="absolute bottom-0 left-0 w-[30%] h-[2px] bg-green-500"></span>
            <span className="absolute bottom-0 left-[30%] w-[70%] h-[2px] bg-gray-200"></span>
          </h1>

          <div className="mt-5 grid gap-5 lg:gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {WhatIDoList.map((item) => {
              const IconComponent = item.icon;
              return (
                <div
                  className="flex bg-white shadow-lg p-3 rounded-lg"
                  key={item.id}
                >
                  <IconComponent
                    className="text-icon_color mr-4 mt-[1px]"
                    style={{ fontSize: 30 }}
                  />
                  <div>
                    <h1 className="text-[17px] font-medium">{item.title}</h1>
                    <p className="text-gray-400 text-sm font-medium">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
