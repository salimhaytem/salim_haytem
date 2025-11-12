import Hero from "./components/Hero";
import About from "./components/About"; 
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer  from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
       <Skills />
        <Projects />
       <Footer />
    </div>
  );
}

export default App;
