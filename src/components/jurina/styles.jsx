import React from "react";
import styled from "styled-components";
import { ReactComponent as LeftArrow } from "../../sdk/assets/icons/left-arrow.svg";
import { ReactComponent as RightArrow } from "../../sdk/assets/icons/right-arrow.svg";
import { ReactComponent as DownArrow } from "../../sdk/assets/icons/down-arrow.svg";
import { ReactComponent as AddIcon } from "../../sdk/assets/icons/add.svg";
import { ReactComponent as GridLayoutIcon } from "../../sdk/assets/icons/table.svg";
import { ReactComponent as ListLayoutIcon } from "../../sdk/assets/icons/list.svg";
import { ReactComponent as CardLayoutIcon } from "../../sdk/assets/icons/cardlayout.svg";
import { ReactComponent as DotsIcon } from "../../sdk/assets/icons/dots.svg";
import { ReactComponent as EditIcon } from "../../sdk/assets/icons/edit.svg";
import { ReactComponent as DeleteIcon } from "../../sdk/assets/icons/delete.svg";
import { ReactComponent as ResizeIcon } from "../../sdk/assets/icons/resize.svg";
import smartSaveImage from "../../sdk/assets/images/smartsave.png";
import lifeCareImage from "../../sdk/assets/images/lifecare.png";
import executivecareImage from "../../sdk/assets/images/executivecare.png";
import educareImage from "../../sdk/assets/images/educare.png";
import secureincomeImage from "../../sdk/assets/images/secureincome.png";
import smegeneralImage from "../../sdk/assets/images/smegeneral.png";

//import smegeneralImage from "../../sdk/"

export const StyledPageSelectorContainer = styled.div`
  font-size: 1.25rem;
  height: 20px;
  padding: 0px;
  display: flex;
  justify-content: center;
  align-items: baseline;
  & > * {
    margin: 0px 0.25rem;
  }
  margin-top: 2rem;
`;

export const StyledPageButton = styled.div`
  cursor: pointer;
  pointer-events: ${(props) => props.disabled && "none"};
  color: ${(props) => (props.disabled ? props.theme.palette.primary100 : "")};
  :hover& {
    color: ${(props) => props.theme.palette.primary100};
  }
`;

export const StyledLeftArrow = styled(LeftArrow)`
  cursor: pointer;
  pointer-events: ${(props) => props.disabled && "none"};
  opacity: ${(props) => (props.disabled ? ".3" : "1")};
  width: 0.75rem;
  height: 0.75rem;
  :hover& {
    fill: "blue";
  }
`;
export const StyledRightArrow = styled(RightArrow)`
  cursor: pointer;
  pointer-events: ${(props) => props.disabled && "none"};
  opacity: ${(props) => (props.disabled ? ".3" : "1")};
  width: 0.75rem;
  height: 0.75rem;
  :hover& {
    fill: "blue";
  }
`;

export const StyledNewCertificateContainer = styled.div`
  display: flex;
  align-items: baseline;
  color: darkgray;
  fill: darkgray;
  border-radius: ${(props) => props.theme.borderRadius};
  padding: 8px;
  user-select: none;
  :hover& {
    cursor: pointer;
    fill: ${(props) => props.theme.palette.primary100};
    color: ${(props) => props.theme.palette.primary100};
    & > svg {
      transform: scale(1.2);
    }
  }
  & > * {
    margin: 0px 4px;
  }
`;

export const StyledMyCertificatesContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 0px ${(props) => props.theme.inputPadding};
`;
export const StyledCardContainer = styled.div`
  width: 80%;
  position: relative;
  left: 10%;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  justify-content: center;
  & > * {
    margin: 1rem;
  }
`;

export const StyledCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  width: 20rem;
  font-size: 1rem;
  border: 1px solid darkgray;
  border-radius: 4px;
  user-select: none;
  overflow: hidden;

  :hover& {
    box-shadow: 0px 0px 8px 2px darkgray;
  }
  transition: all 0.2s, scale 0.1s;
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

export const StyledToolbar = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  border-bottom: 1px solid lightgrey;

  & > * {
    margin: 0 0.25rem;
  }
`;

export const StyledTablesLayoutIcon = styled(ListLayoutIcon)`
  cursor: pointer;
  height: 1rem;
  width: 1rem;
  margin: 0px 0.5rem;
  fill: ${(props) =>
    props.active === "true" ? props.theme.palette.primary100 : "darkgray"};
  :hover& {
    fill: ${(props) => props.theme.palette.primary100};
    transform: scale(1.05);
  }
  transition: scale 0.2s;
`;

export const StyledGridLayoutIcon = styled(GridLayoutIcon)`
  cursor: pointer;
  height: 1rem;
  width: 1rem;
  fill: ${(props) =>
    props.active === "true" ? props.theme.palette.primary100 : "darkgray"};
  :hover& {
    fill: ${(props) => props.theme.palette.primary100};
    transform: scale(1.05);
  }
  transition: scale 0.2s;
`;

export const StyledAddIcon = styled(AddIcon)`
  cursor: pointer;
  height: 12px;
`;
export const StyledDownArrow = styled(DownArrow)`
  cursor: pointer;
  height: 12px;
`;

export const StyledSeparator = styled.div`
  margin: 0px 10px;
  width: 2px;
  height: 20px;
  background-color: lightgray;
`;

export const StyledFlexRow = styled.div`
  display: flex;
  font-weight: ${(props) => (props.bold ? "bold" : "normal")};
`;

export const StyledTable = styled.div`
  cursor: pointer;
  position: relative;
  width: ${(props) => props.width || "80%"};
  left: ${(props) => (props.width ? "0%" : "10%")};
  display: grid;
  grid-template-columns: 3fr 2fr 3fr 2fr;
  grid-template-rows: repeat(24, 1fr);
  grid-gap: 2px;
  background-color: white;
  font-size: 0.75rem;
  height: ${(props) => (props.hide ? "0px" : "480px")};
  :hover& {
    box-shadow: 0px 0px 8px 2px darkgray;
  }
  border-radius: 4px;
  overflow: hidden;
  transition: all 0.2s;
  margin: ${(props) => props.margin} 0;
`;

export const StyledGridItem = styled.div`
  grid-area: ${(props) => props.position};
  padding: 0rem
    ${(props) =>
      props.label === "true" ? "3rem" : props.header ? "2rem" : "1rem"};
  font-size: ${(props) => (props.header === "true" ? ".9rem" : "inherit")};
  background-color: ${(props) =>
    props.header === "true" ? "darkgray" : "#EEE"};
  grid-column: ${(props) => props.header === "true" && "span 4"};
  color: ${(props) => (props.header === "true" ? "white" : "inherit")};
  font-weight: ${(props) => props.label === "true" && "500"};
`;

export const StyledDotsIcon = styled(DotsIcon)`
  z-index: 10;
  cursor: pointer;
  height: 1.25rem;
  width: 1.25rem;
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  fill: ${(props) =>
    props.active === "true" ? props.theme.palette.accent100 : "white"};
  transform: rotate(90deg);
  :hover& {
    fill: "blue";
    transform: scale(1.25), rotate(90deg);
  }
`;

export const StyledCardOptions = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 3rem;
  right: 0.25rem;
  padding-right: 4px;
  height: ${(props) => (props.expand ? "70%" : "0%")};
  transition: all 0.2s;
  background-color: transparent;
  & > * {
    margin: 0.25rem;
  }
`;

export const StyledDeleteIcon = styled(DeleteIcon)`
  cursor: pointer;
  width: 1.5rem;
  height: 1.5rem;
  fill: white;
  :hover& {
    fill: tomato;
    transform: scale(1.1);
  }
  transition: 0.2s;
`;

export const StyledEditIcon = styled(EditIcon)`
  cursor: pointer;
  width: 1.5rem;
  height: 1.5rem;
  fill: white;
  :hover& {
    fill: "blue";
    transform: scale(1.1);
  }
  transition: 0.2s;
`;

export const StyledResizeIcon = styled(ResizeIcon)`
  cursor: pointer;
  width: 1.5rem;
  height: 1.5rem;
  fill: white;
  :hover& {
    fill: "blue";
    transform: scale(1.1);
  }
  transition: 0.2s;
`;

export const StyledImage = styled.img`
  width: 3rem;
  user-select: none;
`;

export const StyledCardLayoutIcon = styled(CardLayoutIcon)`
  cursor: pointer;
  height: 1rem;
  width: 1rem;
  fill: ${(props) =>
    props.active === "true" ? props.theme.palette.primary100 : "darkgray"};
  :hover& {
    fill: ${(props) => props.theme.palette.primary100};
    transform: scale(1.05);
  }
  transition: scale 0.2s;
`;

const images = {
  LIFECARE: lifeCareImage,
  SMARTSAVE: smartSaveImage,
  executivecare: executivecareImage,
  educare: educareImage,
  SECUREINCOME: secureincomeImage,
  SME: smegeneralImage,
  SMEAFF: smegeneralImage,
};

export const GetImage = (props) => {
  return <StyledImage src={images[props.name]}></StyledImage>;
};

export const StyledModalWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1050;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  outline: 0;
  backdrop-filter: grayscale(80%);
`;

export const StyledModal = styled.div`
  z-index: 100;
  background: white;
  position: fixed;
  top: 27vh;
  border-radius: 4px;
  width: 50vw;
  left: 25vw;
`;

export const StyledModalHeader = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledCardHeader = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.palette.primary100};
  color: white;
  & > * {
    margin: 0.5rem 0;
  }
`;

export const StyledCardBody = styled.div`
  display: flex;
  flex-direction: column;
  & > * {
    margin: 0.5rem 0;
  }
`;

export const StyledCardLabel = styled.div`
  width: 50%;
  text-align: right;
  padding-right: 0.25rem;
  font-weight: lighter;
`;

export const Flex = styled.div`
  display: flex;
  justify-content: center;
`;

export const StyledImageContainer = styled.div`
  position: absolute;
  left: 102px;
  top: 80px;
  width: 96px;
  height: 96px;
  border: 1px solid darkgray;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 0px 8px 2px darkgray;
`;
