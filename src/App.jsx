import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import { useState } from "react";
import Projects from "./components/Projects";
import RepoSearch from "./components/RepoSearch";
import Experience from "./components/Experience";
import { TAGS } from "./data/repos";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [query, setQuery] = useState("");

  const searchTag = (id) => {
    setQuery(`${TAGS[id].label} `);
    document.getElementById("search")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="site">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects onTagClick={searchTag} />
      <RepoSearch query={query} setQuery={setQuery} />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
