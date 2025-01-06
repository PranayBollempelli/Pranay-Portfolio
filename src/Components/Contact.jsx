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
    <section id="contact" className="main-container  scroll-mt-20">
      {/* Header */}
      <div className="text-center mb-16 space-y-4">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-secondary to-green-600 bg-clip-text text-transparent">
          Contact
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Let's connect and discuss your project
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-secondary to-green-600 mx-auto rounded-full" />
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Contact Info Cards */}
        <div className="md:col-span-1 space-y-6">
          {ContactList.map((item) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.id}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-green-50 rounded-lg">
                    <IconComponent
                      className="text-secondary"
                      style={{ fontSize: 24 }}
                    />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-gray-800">{item.name}</h3>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Contact Form */}
        <div className="md:col-span-2">
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all duration-300"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all duration-300"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  rows="5"
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all duration-300 resize-none"
                  placeholder="Your message..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-secondary to-green-600 text-white font-medium py-3 rounded-lg hover:opacity-90 transition-opacity duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
