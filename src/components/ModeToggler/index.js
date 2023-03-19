import { Icon, ToggleCircle, Toggler, TogglerWrapper } from "./styled";

const ModeToggler = ({ toggleMode, isDarkMode }) => {
  return (
    <TogglerWrapper>
      <span>dark mode {isDarkMode ? "off" : "on"}</span>
      <Toggler onClick={toggleMode}>
        <ToggleCircle toRight={isDarkMode}>
          <Icon />
        </ToggleCircle>
      </Toggler>
    </TogglerWrapper>
  );
};

export default ModeToggler;
