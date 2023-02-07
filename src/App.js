import { Container } from "./components/Container";
import Footer from "./components/Footer";
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
      <Footer />
    </Container>
  );
}

export default App;
