import styled from "styled-components";
import { ReactComponent as GithubIcon } from "../../images/githubIcon.svg";

export const StyledFooter = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  margin: 120px 0 109px;
  max-width: 55%;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    gap: 12px;
    max-width: 100%;
    margin: 48px 0 31px;
  }
`;

export const Email = styled.span`
  font-weight: 900;
  font-size: 32px;
  line-height: 39px;
  color: ${({ theme }) => theme.color.title};

  &:hover {
    color: ${({ theme }) => theme.color.link};
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    font-size: 18px;
    line-height: 22px;
  }
`;

export const Description = styled.p`
  font-size: 18px;
  line-height: 140%;
  color: ${({ theme }) => theme.color.title};
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    font-size: 14px;
    line-height: 17px;
  }
`;

export const Media = styled.div`
  display: flex;
  gap: 24px;
  margin-top: 32px;
`;

export const Logo = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  width: 48px;
  height: 48px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    width: 32px;
    height: 32px;
  }
`;

export const Github = styled(GithubIcon)`
  color: ${({ theme }) => theme.color.title};

  &:hover {
    color: ${({ theme }) => theme.color.link};
  }
`;
