import React from "react";
import {
  Container,
  Header,
  Logo,
  Project,
  Projects,
  SectionName,
  Subtitle,
} from "./styled";

const Portfolio = () => {
  return (
    <Container>
      <Header>
        <Logo />
        <SectionName />
        <Subtitle />
      </Header>
      <Projects>
        <Project>
          <Project.Box>
            <Project.Title>title1</Project.Title>
            <Project.Description>description1</Project.Description>
            <Project.Link>link1</Project.Link>
          </Project.Box>
        </Project>
        <Project>
          <Project.Box>
            <Project.Title>title1</Project.Title>
            <Project.Description>description1</Project.Description>
            <Project.Link>link1</Project.Link>
          </Project.Box>
        </Project>
      </Projects>
    </Container>
  );
};

export default Portfolio;
