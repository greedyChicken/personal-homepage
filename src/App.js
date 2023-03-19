import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { Container } from "./components/Container";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ModeToggler from "./components/ModeToggler";
import Portfolio from "./components/Portfolio";
import Section from "./components/Section";
import { GlobalStyle } from "./GlobalStyle";
import { theme } from "./theme";
import { skills, futureSkills } from "./skills";
import { SingleSkill } from "./components/SingleSkill";

function App() {
  const [mode, setMode] = useState("light");
  const isDarkMode = mode === "dark";

  const toggleMode = () => setMode(isDarkMode ? "light" : "dark");

  return (
    <ThemeProvider theme={isDarkMode ? theme.darkMode : theme.lightMode}>
      <GlobalStyle />
      <Container>
        <ModeToggler toggleMode={toggleMode} isDarkMode={isDarkMode} />
        <Header />
        <Section title={"My skillset"}>
          {skills.map((skill, index) => (
            <SingleSkill key={index}>{skill}</SingleSkill>
          ))}
        </Section>
        <Section title={"What I want to learn next"}>
          {futureSkills.map((skill, index) => (
            <SingleSkill key={index}>{skill}</SingleSkill>
          ))}
        </Section>
        <Portfolio />
        <Footer />
      </Container>
    </ThemeProvider>
  );
}

export default App;
