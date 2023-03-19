import styled from "styled-components";

export const StyledSection = styled.section`
  background-color: ${({ theme }) => theme.color.sectionBackground};
  border: none;
  box-shadow: 0px -2px 50px rgba(9, 10, 51, 0.02),
    0px 16px 58px rgba(9, 10, 51, 0.03);
  margin: 63px 0 72px;
  transition: 0.5s;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    margin: 48px 0;
  }
`;

export const Title = styled.h2`
  font-weight: 900;
  font-size: 30px;
  padding: 32px 0 15px;
  margin: 32px 32px 0;
  border-bottom: 1px solid ${({ theme }) => theme.color.titleBorder};
  color: ${({ theme }) => theme.color.title};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    font-size: 18px;
    line-height: 22px;
  }
`;

export const SkillsList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding-bottom: 32px;
  row-gap: 8px;
  margin: 32px 32px 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    grid-template-columns: 1fr;
    margin: 12px 38px 16px 16px;
  }
`;
