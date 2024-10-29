import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Hero from "./Components/home/Hero";
import AboutSection from "./Components/home/AboutSection";
import PropertySection from "./Components/home/PropertySection";
import Contact from "./Components/home/Contact";
import Testimonies from "./Components/home/Testimonies";
import SearchInput from "./Components/SearchInput";

function App() {
  const [count, setCount] = useState(0);

  return (
    <section>
      <Hero />
      {/* <SearchInput /> */}
      <AboutSection />
      <PropertySection />
      <Testimonies />
      <Contact />
    </section>
  );
}

export default App;
