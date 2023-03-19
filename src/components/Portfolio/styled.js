import styled from "styled-components";
import { ReactComponent as GithubIcon } from "../../images/githubIcon.svg";

export const Container = styled.article`
  max-width: 100%;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  width: 40px;
  height: 40px;
`;

export const Icon = styled(GithubIcon)`
  color: ${({ theme }) => theme.color.link};
`;

export const SectionName = styled.h2`
  font-weight: 900;
  font-size: 30px;
  color: ${({ theme }) => theme.color.title};
  line-height: 36px;
  margin: 12px 0 8px;
`;

export const Subtitle = styled.h3`
  font-weight: 400;
  font-size: 20px;
  color: ${({ theme }) => theme.color.title};
  line-height: 140%;
  margin: 0;
  margin-bottom: 24px;
`;

export const Projects = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
`;

export const Project = styled.div`
  background-color: ${({ theme }) => theme.color.sectionBackground};
  padding: 56px;
  border: 6px solid ${({ theme }) => theme.color.projectBorder};
  box-shadow: 0px -2px 50px rgba(9, 10, 51, 0.02),
    0px 16px 58px rgba(9, 10, 51, 0.03);
  border-radius: 4px;

  &:hover {
    border: 6px solid ${({ theme }) => theme.color.projectBorderHover};
  }
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 24px;
`;

export const Title = styled.h3`
  color: ${({ theme }) => theme.color.portfolioItemTitle};
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  margin: 0;
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.color.text};
  font-size: 18px;
  line-height: 140%;
  margin: 0;
`;

export const Links = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const LinkPrefix = styled.span`
  color: ${({ theme }) => theme.color.text};
  font-size: 18px;
  line-height: 140%;
`;

export const Link = styled.a`
  color: ${({ theme }) => theme.color.link};
  font-size: 18px;
  line-height: 140%;
  text-decoration: none;
`;

export const Text = styled.span`
  color: ${({ theme }) => theme.color.text};
  font-weight: 400;
  font-size: 18px;
  line-height: 140%;
`;

Project.Box = Box;
Project.Title = Title;
Project.Description = Description;
Project.Links = Links;
Project.LinkPrefix = LinkPrefix;
Project.Link = Link;
