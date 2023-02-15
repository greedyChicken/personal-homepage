import styled from "styled-components";

export const StyledSection = styled.section`
  background-color: ${({ theme }) => theme.color.sectionBackground};
  border: none;
  box-shadow: 0px -2px 50px rgba(9, 10, 51, 0.02),
    0px 16px 58px rgba(9, 10, 51, 0.03);
  margin-bottom: 72px;
`;

export const Title = styled.h2`
  font-weight: 900;
  font-size: 30px;
  padding: 32px;
  padding-bottom: 15px;
  border-bottom: 1px solid ${({ theme }) => theme.color.titleBorder};
`;

export const SkillsList = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 0;
  gap: 115px;
  border-top: 1px solid black;
`;

export const SkillsColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0;
  gap: 8px;
`;

export const SingleSkill = styled.span`
  font-size: 18px;
  font-weight: 400;
  color: ${({ theme }) => theme.color.text};
`;
