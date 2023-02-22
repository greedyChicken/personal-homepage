import { Caption } from "../Header/styled";
import { Description, Email, Media, StyledFooter } from "./styled";

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
        <span>logo1</span>
        <span>logo2</span>
      </Media>
    </StyledFooter>
  );
};

export default Footer;
