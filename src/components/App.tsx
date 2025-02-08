import { useState, useRef } from "react";
import { Header } from "./Header.tsx";
import { Home } from "./Home.tsx";
import { About } from "./About.tsx";
import { Projects } from "./Projects.tsx";
import { Footer } from "./Footer.tsx";


function App() {
  const [lang, setLang] = useState<string>("En");
  const aboutRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  function goToAbout() {
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: "smooth" })}}
  
  function goToProjects() {
    if (projectsRef.current) {
      projectsRef.current.scrollIntoView({ behavior: "smooth" })}}


  return (
    <div className="bg-blue-900">
      <Header lang={lang} setLang={setLang} goToAbout={goToAbout}
            goToProjects={goToProjects} />
      <Home lang={lang} />
      <About lang={lang} ref={aboutRef} />
      <Projects lang={lang} ref={projectsRef} />
      <Footer />
    </div>)}


export { App }