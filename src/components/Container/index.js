import styled from "styled-components";

export const Container = styled.main`
  margin: 120px auto 0;
  max-width: 1216px;
  position: relative;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    margin: 32px 16px;
  }
`;
