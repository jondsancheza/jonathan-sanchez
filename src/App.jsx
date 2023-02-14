// import components
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Service from "./components/Services";
import Projects from "./components/Projects";
import Hireme from "./components/Hireme";
import Contact from "./components/Contact";
import img_footer from "./assets/images/Footer/logo.svg"
import Navbar from "./Layouts/Navbar";
import { useEffect } from "react";

//Animation package
import Aos from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(()=>{
    Aos.init({
      duration: 1800,
      offset: 100,
    });
  },[])
  return (
    <div>
      <Navbar/>
      <Hero />
      <Skills />
      <Service />
      <Projects />
      <Hireme />
      <Contact />
      <footer className="flex flex-col items-center">
        <img src={img_footer} alt="..." className="w-12 mt-3"/>
        <h6 className="mb-1">JONATHAN SÁNCHEZ</h6>
        <p>© 2023</p>
      </footer>
    </div>
  );
};

export default App;
