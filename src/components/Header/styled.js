import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  gap: 66px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    flex-direction: column;
    gap: 13px;
  }
`;

export const PersonalInfo = styled.div`
  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    display: flex;
    flex-direction: column;
  }
`;

export const Caption = styled.span`
  font-size: 12px;
  font-weight: 700;
  color: ${({ theme }) => theme.color.text};
  width: 100px;
  text-align: left;
  text-transform: uppercase;
  letter-spacing: initial;
  line-height: 130%;
`;

export const Name = styled.h1`
  font-size: 38px;
  font-weight: 900;
  color: ${({ theme }) => theme.color.title};
  margin-top: 12px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    font-size: 22px;
    line-height: 27px;
  }
`;

export const Description = styled.p`
  font-size: 20px;
  font-weight: 400;
  margin: 32px 0;
  color: ${({ theme }) => theme.color.text};
  line-height: 140%;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    font-size: 17px;
  }
`;

export const Photo = styled.img`
  width: 398px;
  height: 398px;
  border-radius: 50%;
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    width: 128px;
    height: 128px;
  }
`;
