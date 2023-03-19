import React from "react";
import { SkillsList, StyledSection, Title } from "./styled";

const Section = ({ title, children }) => {
  return (
    <StyledSection>
      <Title>{title}</Title>
      <SkillsList>{children}</SkillsList>
    </StyledSection>
  );
};

export default Section;
