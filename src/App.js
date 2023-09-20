import logo from "./logo.svg";
import "./App.css";
import { Layout } from "./layout/Layout";
import Hero from "./components/Hero";
import About from "./components/About";

function App() {
  return (
    <Layout>
      <Hero />
      <About />
    </Layout>
  );
}

export default App;
