import styled from "styled-components";
import { ReactComponent as GithubIcon } from "../../images/githubIcon.svg";

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
  color: ${({ theme }) => theme.color.title};

  &:hover {
    color: ${({ theme }) => theme.color.link};
  }
`;

export const Description = styled.p`
  font-size: 18px;
  line-height: 140%;
  color: ${({ theme }) => theme.color.title};
  margin: 0;
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
`;

export const Github = styled(GithubIcon)`
  color: ${({ theme }) => theme.color.title};

  &:hover {
    color: ${({ theme }) => theme.color.link};
  }
`;
