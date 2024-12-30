import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const ContactList = [
  {
    id: 1,
    icon: EmailIcon,
    name: "Email",
    description:
      "Reach out to me via email for any inquiries or collaborations.",
  },
  {
    id: 2,
    icon: LinkedInIcon,
    name: "LinkedIn",
    description:
      "Connect with me on LinkedIn for opportunities and networking.",
  },
];

function Contact() {
  return (
    <div className="container mx-auto">
      <div className="main-container">
        <h1 className="text-5xl font-bold mt-32 mb-1">Contact</h1>
        <p className=" text-gray-400 text-sm font-medium ">Get in Touch</p>
        <hr className="my-8 h-[2px] bg-gray-200" />
        {/* Email  and Linkedin */}
        <div className="md:flex">
          <div className="grid md:flex md:flex-col md:w-[30%] md:mr-5 gap-5 mb-10">
            {ContactList.map((item) => {
              const IconComponent = item.icon;
              return (
                <div className="flex" key={item.id}>
                  <IconComponent
                    className="text-icon_color mr-4 mt-[1px]"
                    style={{ fontSize: 30 }}
                  />
                  <div>
                    <h1 className="text-[17px] font-medium">{item.name}</h1>
                    <p className="text-gray-400 text-sm font-medium">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          {/* Help You */}
          <div>
            <h1 className="relative text-2xl font-semibold pb-1 inline-block">
              How Can I Help You?
              <span className="absolute bottom-0 left-0 w-[30%] h-[2px] bg-green-500"></span>
              <span className="absolute bottom-0 left-[30%] w-[70%] h-[2px] bg-gray-200"></span>
            </h1>

            {/* Form Container */}
            <div>
              <form className="my-6">
                <div className="grid md:grid-cols-2 gap-5">
                  {/* Left column: Full Name, Email, Subject */}
                  <div className="space-y-5">
                    <input
                      type="text"
                      className="input_box"
                      placeholder="Full Name"
                    />
                    <input
                      type="email"
                      className="input_box"
                      placeholder="Email Address"
                    />
                    <input
                      type="text"
                      className="input_box"
                      placeholder="Subject"
                    />
                  </div>

                  {/* Right column: Textarea */}
                  <div>
                    <textarea
                      className="input_box_textarea w-full"
                      rows={7}
                      placeholder="Message"
                    ></textarea>
                  </div>
                </div>
                <button className="main_button mt-5">Send message</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
