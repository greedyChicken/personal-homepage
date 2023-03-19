import { PrimaryButton } from "../PrimaryButton";
import ButtonIcon from "./ButtonIcon";
import { Caption, Description, Name, Photo, StyledHeader } from "./styled";
import { Email } from "../../email";
import image from "../../images/pic.jpg";

const Header = () => {
  return (
    <StyledHeader>
      <Photo src={image} />
      <div>
        <Caption>this is</Caption>
        <Name>Jan Hickiewicz</Name>
        <Description>
          I’m a computer science student with interests in fullstack
          development, especially in Java and Javascript. Currently looking for
          new job opportunities.
        </Description>
        <PrimaryButton href={`mailto:${Email}`} title={Email}>
          <ButtonIcon />
          Hire Me
        </PrimaryButton>
      </div>
    </StyledHeader>
  );
};

export default Header;
