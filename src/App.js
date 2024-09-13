import './App.css';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import Projects from './Components/Projects/Projects';
import Skills from './Components/Skills/Skills';
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init()


function App() {
  return (
    <div className="App">
      <Navbar />
      <div id="home" data-aos="fade-up" data-aos-duration="1500"><Home /></div>
      <div id="about" data-aos="fade-up" data-aos-duration="1500"><About /></div>
      <div id="skills" data-aos="fade-up" data-aos-duration="3000"><Skills /></div>
      <div id="projects" data-aos="fade-up" data-aos-duration="3500"><Projects /></div>
      <div id="contact" data-aos="fade-up" data-aos-duration="3500"><Contact /></div>
    </div>
  );
}

export default App;
