import { ThemeProvider } from './contexts/theme.js'
import './App.css'
import { useEffect, useState } from 'react';
import HomePage from './components/HomePage/HomePage.jsx';
import AboutMe from './components/AboutMe/AboutMe.jsx';
import Projects from './components/Projects/Projects.jsx';
import Skills from './components/Skills/Skills.jsx';
import Experience from './components/Experience/Experience.jsx';
import Footer from './components/Footer/Footer.jsx'

function App() {

  const [themeMode, setThemeMode] = useState("light");

  const lightTheme = () => {
    setThemeMode("light");
  }

  const darkTheme = () => {
    setThemeMode("dark");
  }

  useEffect(() => {
    document.querySelector('html').classList.remove("light", "dark");
    document.querySelector('html').classList.add(themeMode);
  }, [themeMode])


  return (
    <ThemeProvider value={{ themeMode, lightTheme, darkTheme }} >
      <HomePage />
      <AboutMe />
      <Projects />
      <Skills />
      <Experience />
      <Footer />
    </ThemeProvider>
  )
}

export default App
