import About from "../components/About";
import Contact from "../components/Contact";
import Experience from "../components/Experience";
import Header from "../components/Header";
import HomeSection from "../components/HomeSection";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

export default function Home() {
  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <Header />
      <HomeSection />
      <About />
      <Experience />
      <Skills />
      {/* <Projects /> */}
      <Contact />
    </div>
  );
}
