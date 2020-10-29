import { ThemeBase } from "@theme/theme";
import React from "react";
import styled from "styled-components";


export type StyledRoundButtonTypes = {
  dimension ?: string;
  colorIcon ?: ThemeBase.ColorsTypes;
}

const defaultSize = "50px";
const StyledRoundButton = styled.button<StyledRoundButtonTypes>`
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-width: 0;
  outline: none;
  background-color: ${props => props.theme.colors.vgBlackAlpha10};
  width: ${(props) => props.dimension || defaultSize};
  height: ${(props) => props.dimension || defaultSize};
  color: ${({ colorIcon, theme }) => theme.colors[colorIcon || "vgBlackAlpha50"]};
`;


export type RoundButtonProps = StyledRoundButtonTypes & React.ButtonHTMLAttributes<{}> & {
  children ?: React.ReactNode;
}
const RoundButton = ({ children, ...restProps } : RoundButtonProps) => {
  return <StyledRoundButton {...restProps}>{children}</StyledRoundButton>;
};

export default RoundButton;