import { Caption } from "../Header/styled";
import {
  Description,
  Email,
  Github,
  Logo,
  Media,
  StyledFooter,
} from "./styled";

const Footer = () => {
  return (
    <StyledFooter>
      <Caption>let's talk!</Caption>
      <Email>janhi@tutanota.com</Email>
      <Description>
        I’m always open to new projects whenever I have the time. If you have a
        website, dashboard or mobile app in mind and need some help to make your
        ideas come to life, feel free to conatct me
      </Description>
      <Media>
        <Logo href="https://github.com/greedyChicken" target="_blank">
          <Github />
        </Logo>
      </Media>
    </StyledFooter>
  );
};

export default Footer;
