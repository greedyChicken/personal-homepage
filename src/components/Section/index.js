import React from "react";
import { StyledSection, Title } from "./styled";

const Section = ({ title }) => {
  return (
    <StyledSection>
      <Title>{title}</Title>
    </StyledSection>
  );
};

export default Section;
