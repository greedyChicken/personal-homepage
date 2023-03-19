import ErrorMessage from "./ErrorMessage";
import Loader from "./Loader";
import {
  Container,
  Header,
  Icon,
  Logo,
  Project,
  Projects,
  SectionName,
  Subtitle,
} from "./styled";
import formatRepoName from "./formatRepoName";
import useRepos from "./useRepos";

const Portfolio = () => {
  const { repos, loading } = useRepos();

  return (
    <Container>
      <Header>
        <Logo>
          <Icon />
        </Logo>
        <SectionName>Portfolio</SectionName>
        <Subtitle>My recent projects</Subtitle>
      </Header>
      {loading ? (
        <Loader />
      ) : repos ? (
        <Projects>
          {repos.map((repo, id) => (
            <Project key={id}>
              <Project.Box>
                <Project.Title>{formatRepoName(repo.name)}</Project.Title>
                <Project.Description>{repo.description}</Project.Description>
                <Project.Links>
                  {repo.homepage && (
                    <div>
                      <Project.LinkPrefix>Demo: </Project.LinkPrefix>
                      <Project.Link href={repo.homepage} target="_blank">
                        demo link
                      </Project.Link>
                    </div>
                  )}
                  <div>
                    <Project.LinkPrefix>Code: </Project.LinkPrefix>
                    <Project.Link href={repo.html_url} target="_blank">
                      github repository
                    </Project.Link>
                  </div>
                </Project.Links>
              </Project.Box>
            </Project>
          ))}
        </Projects>
      ) : (
        <ErrorMessage />
      )}
    </Container>
  );
};

export default Portfolio;
