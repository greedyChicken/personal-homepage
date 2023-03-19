import styled, { css } from "styled-components";
import { ReactComponent as SunIcon } from "./sunIcon.svg";

export const TogglerWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  color: ${({ theme }) => theme.color.text};
  font-size: 12px;
  font-weight: 700;
  line-height: 130%;
  text-transform: uppercase;
  position: absolute;
  right: 0;
`;

export const Toggler = styled.span`
  display: flex;
  align-items: center;
  width: 47px;
  height: 25px;
  background: ${({ theme }) => theme.color.togglerBackground};
  cursor: pointer;
  border-radius: 20px;
  border: 1px solid;
  transition: 0.5s;

  ${({ toRight }) =>
    toRight &&
    css`
      transform: translateX(22px);
    `}
`;

export const ToggleCircle = styled.span`
  width: 20px;
  height: 20px;
  background-color: currentColor;
  border-radius: 50px;
  margin: 0 2.5px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.5s;

  ${({ toRight }) =>
    toRight &&
    css`
      transform: translateX(20px);
    `}
`;

export const Icon = styled(SunIcon)`
  color: ${({ theme }) => theme.color.icon};
  transition: 0.5s;
`;
