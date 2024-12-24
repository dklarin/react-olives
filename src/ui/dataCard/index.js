import React from "react";
import styled from "styled-components";

const StyledCard = styled.div`
  border: 1px solid silver;
  margin: 6px;
  cursor: pointer;
  background-color: white;
  :hover {
    background-color: lightgreen;
    box-shadow:lighting-color img {
      opacity: 0.7;
    }
  }
`;

/***
 * The component
 */
export const DataCard = (props) => {
  return <StyledCard onClick={props.onClick}>{props.children}</StyledCard>;
};

export default DataCard;
