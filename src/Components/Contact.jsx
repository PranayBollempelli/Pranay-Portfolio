import { useState } from "react";
import emailjs from "@emailjs/browser";

const SERVICE_ID = import.meta.env.VITE_YOUR_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_YOUR_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_YOUR_PUBLIC_KEY;

function Contact() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: "", message: "" });

    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY);
      setStatus({
        type: "success",
        message: "Message sent successfully!",
      });
      e.target.reset();
    } catch (error) {
      setStatus({
        type: "error",
        message: "Failed to send message. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="main-container scroll-mt-16">
      {/* Header */}
      <div className="text-center mb-12 space-y-4">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-secondary to-green-600 bg-clip-text text-transparent">
          Contact
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Let's connect and discuss your project
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-secondary to-green-600 mx-auto rounded-full" />
      </div>

      {/* Contact Form */}
      <div className="max-w-2xl mx-auto">
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="user_name"
                  required
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="user_email"
                  required
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent outline-none"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Message
              </label>
              <textarea
                name="message"
                required
                rows="5"
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent outline-none resize-none"
              ></textarea>
            </div>

            {status.message && (
              <div
                className={`text-sm ${
                  status.type === "success" ? "text-green-600" : "text-red-600"
                }`}
              >
                {status.message}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-secondary to-green-600 text-white font-medium py-3 rounded-lg hover:opacity-90 transition-all duration-300 disabled:opacity-70"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
