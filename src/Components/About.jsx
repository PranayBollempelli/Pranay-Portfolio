function AboutMe() {
  return (
    <section id="about" className=" ">
      <h1 className="relative text-2xl font-semibold inline-block pb-1 mb-4">
        About Me
        <span className="absolute bottom-0 left-0 w-[30%] h-[2px] bg-green-500"></span>
        <span className="absolute bottom-0 left-[30%] w-[70%] h-[2px] bg-gray-200"></span>
      </h1>
      <div className=" mx-auto text-gray-700  leading-relaxed">
        <p className="mb-4">
          Hi, I’m{" "}
          <span className="font-semibold text-green-600">
            Pranay Bollempelli
          </span>
          , a passionate
          <span className="text-green-500 font-semibold">
            {" "}
            Web Developer
          </span>{" "}
          dedicated to building interactive and user-friendly web applications.
        </p>
        <p className=" text-gray-600 mt-4 leading-relaxed">
          I specialize in building scalable platforms with clean and
          maintainable code. My experience includes developing e-commerce
          websites, job search portals, and food delivery applications with
          features like authentication, cart management, and API integration.
        </p>
        <p className=" text-gray-600 mt-4 leading-relaxed">
          I thrive on solving real-world problems and collaborating with teams
          to deliver seamless user experiences.
        </p>
      </div>
    </section>
  );
}

export default AboutMe;
