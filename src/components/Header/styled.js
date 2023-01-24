import styled from "styled-components";

export const Caption = styled.caption`
  font-size: 12px;
  font-weight: 700;
  color: ${({ theme }) => theme.color.slateGray};
  width: 100px;
  text-align: left;
`;

export const Name = styled.h1`
  font-size: 38px;
  font-weight: 900;
  color: ${({ theme }) => theme.color.mineShaft};
  margin-top: 12px;
`;

export const Description = styled.p`
  font-size: 20px;
  font-weight: 400;
  margin: 32px 0;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px 16px;
  gap: 16px;
  color: ${({ theme }) => theme.color.white};
  background-color: ${({ theme }) => theme.color.scienceBlue};
  border: 1px solid rgba(209, 213, 218, 0.3);
  border-radius: 4px;
  font-size: 20.0584px;
  font-weight: 600;

  &:focus {
    box-shadow: 2px -2px 0px #8cc2ff, -2px 2px 0px #8cc2ff, 2px 2px 0px #8cc2ff,
      -2px -2px 0px #8cc2ff;
  }
`;
