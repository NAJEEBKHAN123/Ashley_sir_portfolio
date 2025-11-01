import React from "react";
import Navbar from "./common/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Blog from "./components/Blog";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Projects />
      <Experience />
      <Skills />
      <Blog />
      <Contact />
    </div>
  );
}

export default App;