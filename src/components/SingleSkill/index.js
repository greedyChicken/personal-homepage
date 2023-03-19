import styled from "styled-components";

export const SingleSkill = styled.li`
  font-size: 18px;
  font-weight: 400;
  color: ${({ theme }) => theme.color.text};
  list-style: none;

  &::before {
    content: "•";
    color: ${({ theme }) => theme.color.link};
    padding-right: 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    font-size: 14px;
    line-height: 17px;
  }
`;
