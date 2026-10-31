import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import { useState } from "react";
import Projects from "./components/Projects";
import RepoSearch from "./components/RepoSearch";
import Resume from "./components/Resume";
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
    <div className="min-h-screen w-full bg-[#0a0a0a] text-white">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects onTagClick={searchTag} />
      <RepoSearch query={query} setQuery={setQuery} />
      <Resume />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
