import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Resume from "./Components/Resume";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";

import "./App.css";

function App() {
  return (
    <div className="relative">
      <Navbar />
      <Home />
      <Resume />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
