import { Container } from "./components/Container";
import Header from "./components/Header";
import Portfolio from "./components/Portfolio";
import Section from "./components/Section";

function App() {
  return (
    <Container>
      <Header />
      <Section title={"My skillset"} />
      <Section title={"What I want to learn next"} />
      <Portfolio />
    </Container>
  );
}

export default App;
