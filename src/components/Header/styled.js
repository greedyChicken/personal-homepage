import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  gap: 66px;
`;

export const Caption = styled.span`
  font-size: 12px;
  font-weight: 700;
  color: ${({ theme }) => theme.color.text};
  width: 100px;
  text-align: left;
  text-transform: uppercase;
  letter-spacing: initial;
`;

export const Name = styled.h1`
  font-size: 38px;
  font-weight: 900;
  color: ${({ theme }) => theme.color.title};
  margin-top: 12px;
`;

export const Description = styled.p`
  font-size: 20px;
  font-weight: 400;
  margin: 32px 0;
  color: ${({ theme }) => theme.color.text};
`;

export const Photo = styled.img`
  width: 398px;
  height: 398px;
  border-radius: 50%;
  margin: 0;
`;
