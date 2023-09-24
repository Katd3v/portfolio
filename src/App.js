import "./App.css";
import { Layout } from "./layout/Layout";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Contact from "./components/Contact";
import { Projects } from "./components/Projects";

function App() {
  return (
    <Layout>
      <Hero />
      <About />
      <Projects />
      <Contact />
    </Layout>
  );
}

export default App;
