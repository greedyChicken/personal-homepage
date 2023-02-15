import styled from "styled-components";

export const StyledFooter = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  margin: 120px 0 109px;
  max-width: 55%;
`;

export const Email = styled.span`
  font-weight: 900;
  font-size: 32px;
  line-height: 39px;
  letter-spacing: 0.05em;
  color: ${({ theme }) => theme.color.title};
`;

export const Description = styled.p`
  font-size: 18px;
  line-height: 140%;
  letter-spacing: 0.05em;
  color: ${({ theme }) => theme.color.title};
  margin: 0;
`;

export const Media = styled.div`
  display: flex;
  gap: 24px;
  margin-top: 32px;
`;
