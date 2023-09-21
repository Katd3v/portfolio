import logo from "./logo.svg";
import "./App.css";
import { Layout } from "./layout/Layout";
import Hero from "./components/Hero";
import About from "./components/About";
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
