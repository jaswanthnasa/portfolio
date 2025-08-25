import React from "react";
import AnimatedBackground from "./components/layout/AnimatedBackground";
import { useTheme } from "./components/layout/ThemeContext";
import Navbar from "./components/layout/Navbar";
import PageActions from "./components/layout/PageActions";
import Footer from "./components/layout/Footer";
import Landing from "./components/Landing";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Journey from "./components/Journey";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  const { darkMode } = useTheme();

  return (
    <main className={`${darkMode ? "bg-professional-dark text-gray-200" : "bg-white text-gray-800"} min-h-screen font-sans overflow-x-hidden scroll-smooth`}>
      {/* Fixed Background and Navigation */}
      <AnimatedBackground />
      <Navbar />
      <PageActions />

      {/* Main Content with proper spacing */}
      <div className="relative z-10">
        <div className="pt-20 px-4 md:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto space-y-32">
            <Landing />
            <Skills />
            <Experience />
            <Projects />
            <Journey />
            <Contact />
          </div>
        </div>
        <Footer />
      </div>
    </main>
  );
}

export default App;