import React from "react";
import { styled } from "../../../components/jurina/styling/theme";
//"../../../styling/theme";

const StyledBanner = styled.div`
  padding: 3px;
  background: ${(props) => props.theme.palette.errorAlertBackground};
  border: 1px solid ${(props) => props.theme.palette.errorAlertBorder};
  color: ${(props) => props.theme.palette.errorAlertText};

  margin-top: 6px;
  margin-bottom: 3px;
`;
export const Banner = (props) => {
  return <StyledBanner style={props?.style}>{props.children}</StyledBanner>;
};
