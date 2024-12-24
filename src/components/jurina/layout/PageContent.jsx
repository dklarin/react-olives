import React from "react";
import { FlexColumn, ActivityIndicator } from "../../../sdk/ui";

import { styled } from "../styling/theme";

const StyledPageContent = styled(FlexColumn)`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 12px;
  background: white;
  width: 80%;
  max-width: 95%;
  min-height: 800px;
  /* border-left: 1px solid silver;
  border-right: 1px solid silver; */
  overflow-y: hidden;
  flex: 1;
`;
const StyledChildrenContainer = styled(FlexColumn)`
  flex: 1;
`;
const StyledHeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  color: ${(props) => props.theme.palette.primary100};
  font-size: 1.3rem;
  padding-top: 6px;
  padding-bottom: 6px;
  border-bottom: 0.5px solid whitesmoke;
  z-index: 100;
  margin-bottom: 12px;
`;

export const PageContent = (props) => {
  const { children, header, isBusy, noContent, onClose } = props;

  return (
    <StyledPageContent>
      {header ? (
        <StyledHeaderContainer>
          <div style={{ flex: 1 }}>{header}</div>
          {onClose ? <ClosePageButton onClick={onClose} /> : null}
        </StyledHeaderContainer>
      ) : null}
      {noContent ? null : (
        <StyledChildrenContainer>{children}</StyledChildrenContainer>
      )}
      {isBusy ? (
        <StyledActivityIndicatorContainer>
          <StyledActivityIndicatorBackground>
            <ActivityIndicator isBusy={isBusy}></ActivityIndicator>
          </StyledActivityIndicatorBackground>
        </StyledActivityIndicatorContainer>
      ) : null}
    </StyledPageContent>
  );
};
const StyledActivityIndicatorBackground = styled.div`
  background: whitesmoke;
  align-self: center;
  border-radius: 4px;
  border: 1px solid silver;
`;
const StyledActivityIndicatorContainer = styled.div`
  position: absolute;
  display: flex;
  justify-items: center;
  justify-content: center;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(50, 50, 50, 0.2);
  z-index: 2;
`;

const ClosePageButton = (props) => {
  return (
    <StyledCloseButton
      className="fa fa-times-circle"
      onClick={props.onClick}
    ></StyledCloseButton>
  );
};

const StyledCloseButton = styled.i`
  font-size: 24x;
  cursor: pointer;
  :hover {
    opacity: 0.5;
  }
`;
