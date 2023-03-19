import styled from "styled-components";

export const PrimaryButton = styled.a`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 12px 16px;
  gap: 16px;
  color: #ffffff;
  background-color: ${({ theme }) => theme.color.link};
  border: 1px solid rgba(209, 213, 218, 0.3);
  border-radius: 4px;
  font-size: 20.0584px;
  font-weight: 600;
  text-decoration: none;
  letter-spacing: initial;

  &:hover {
    box-shadow: ${({ theme }) => theme.color.hireMeButtonHoverShadow};
  }

  &:active {
    box-shadow: inset 0px 2px 0px rgba(20, 70, 32, 0.2);
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    font-size: 18px;
    line-height: 22px;
  }
`;
