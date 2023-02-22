import styled from "styled-components";

export const Container = styled.article`
  max-width: 1216px;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SectionName = styled.h2`
  font-weight: 900;
  font-size: 30px;
  color: ${({ theme }) => theme.color.title};
  line-height: 36px;
  letter-spacing: 0.05em;
`;

export const Subtitle = styled.h3`
  font-size: 20px;
  color: ${({ theme }) => theme.color.title};
  line-height: 140%;
  letter-spacing: 0.05em;
`;

export const Projects = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 5%;
`;

export const Project = styled.div`
  background-color: ${({ theme }) => theme.color.sectionBackground};
  padding: 56px;
  flex-grow: 1;
  border: 6px solid ${({ theme }) => theme.color.projectBorder};
  box-shadow: 0px -2px 50px rgba(9, 10, 51, 0.02),
    0px 16px 58px rgba(9, 10, 51, 0.03);
  border-radius: 4px;
  max-height: 320px;

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
  color: ${({ theme }) => theme.color.link};
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  letter-spacing: 0.05em;
  margin: 0;
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.color.text};
  font-size: 18px;
  line-height: 140%;
  letter-spacing: 0.05em;
  margin: 0;
`;

export const Link = styled.a`
  color: ${({ theme }) => theme.color.link};
  font-size: 18px;
  line-height: 140%;
  letter-spacing: 0.05em;
  border-bottom: 1px solid ${({ theme }) => theme.color.link};
`;

Project.Box = Box;
Project.Title = Title;
Project.Description = Description;
Project.Link = Link;
