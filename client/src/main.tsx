import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Hero from "./components/Hero.tsx";
import Navbar from "./components/Navbar.tsx";
import Skills from "./components/Skills/Skills.tsx";
import Projects from "./components/Projects.tsx";
import Dsa from "./components/Dsa.tsx";
import About from "./components/About.tsx";
import Auth from "./components/Joining/Auth.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Navbar />
    <Hero />
    <Skills />
    <About />
    <Projects />
    <Dsa />
    <Auth />
  </React.StrictMode>
);
