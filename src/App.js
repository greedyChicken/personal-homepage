import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { Container } from "./components/Container";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Portfolio from "./components/Portfolio";
import Section from "./components/Section";
import { GlobalStyle } from "./GlobalStyle";
import { theme } from "./theme";

function App() {
  const [mode, setMode] = useState("light");
  const isDarkMode = mode === "dark";

  const toggleMode = () => setMode(isDarkMode ? "light" : "dark");

  return (
    <ThemeProvider theme={isDarkMode ? theme.darkMode : theme.lightMode}>
      <GlobalStyle />
      <Container>
        <Header />
        <Section title={"My skillset"} />
        <Section title={"What I want to learn next"} />
        <Portfolio />
        <Footer />
      </Container>
    </ThemeProvider>
  );
}

export default App;
