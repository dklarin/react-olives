import styled from "styled-components";
import { ReactComponent as AddIcon } from "sdk/assets/icons/add.svg";

export const StyledAddIcon = styled(AddIcon)`
  height: 12px;
  margin: 0px 0.5rem;
`;

export const StyledForm = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: calc(100% - 150px);
`;

export const StyledToolbar = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;
  border-bottom: 1px solid lightgrey;
`;

export const StyledUserContainer = styled.div`
  display: flex;
  align-items: center;
  width: 190px;
  color: darkgray;
  border-radius: ${(props) => props.theme.borderRadius};
  margin: 2px 0px;
  padding: 4px;
  border: 1px solid transparent;
  fill: grey;
  :hover& {
    cursor: pointer;
    fill: ${(props) => props.theme.palette.primary100};
    color: ${(props) => props.theme.palette.primary100};
  }
`;

export const StyledSearchBar = styled.input`
  outline: none;
  padding: ${(props) => props.theme.inputPadding};
  border-radius: ${(props) => props.theme.borderRadius};
  border: 1px solid ${(props) => props.theme.borderColor};
  margin: 4px 0px;
  :focus& {
    box-shadow: ${(props) => props.theme.borderFocusBoxShadow};
    border-color: ${(props) => props.theme.borderFocusColor};
  }
  :hover& {
    border-color: ${(props) => props.theme.borderHoverColor};
  }
`;
