import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Resume from "./Components/Resume";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

import "./App.css";

function App() {
  return (
    <div className="relative bg-gradient-to-b from-gray-50 to-white min-h-screen">
      <Navbar />
      <Home />
      <Resume />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
