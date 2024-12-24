import React, { useState } from "react";
import styled from "styled-components";
import {
  Wrapper,
  GridContainer,
  //Container,
  LeftGridContainer,
  RightGridContainer,
  MainHeader,
  FlexRow,
  FlexColumn,
} from "../../../style/global-style";
import { DataCard } from "../../../ui/dataCard";

//import { data } from "../data";
//import olive from "../../assets/olive.jpg";
import olive from "../../../assets/olive.jpg";

const LineCode = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  text-align: center;
  margin: 2px;
  background-color: blue;
  color: white;
`;

const PortName = styled.div`
  resize: none;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  margin-right: 12px;
  margin-left: 12px;
  text-align: ${(props) => (props.textAlign ? props.textAlign : "left")};
`;

const FieldName = styled.h4`
  text-align: left;
  margin-left: 12px;
  width: 180px;

  @media screen and (max-width: 1024px) {
    text-align: center;
    margin-left: 0px;
  }
`;

const DetailsContainer = styled(FlexRow)`
  padding-left: 5px;
`;

const ItineraryContainer = styled(FlexColumn)`
  height: 150px;
  max-height: 150px;
  margin: 4px;
  overflow-y: hidden;
  font-size: 0.85em;
  justify-content: center;
  padding: 4px;
  padding-right: 26px;
  :hover {
    padding-right: 9px;
    overflow-y: auto;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  @media screen and (max-width: 1024px) {
    flex-direction: column;
    padding-top: 6px;
  }
`;

const JourneyPresenter = (props) => {
  const { oliveTrees, distance, timeOnDistance } = props;
  return (
    <div>
      <LineCode>{oliveTrees}</LineCode>
      <br />
      <PortName>{distance}</PortName>
      <PortName>{timeOnDistance}</PortName>
    </div>
  );
};

export const FieldItemPresenter = (props) => {
  const { text, infos } = props;

  const funk = () => {
    //alert(data.questions[0].text);
  };

  return (
    <DataCard onClick={funk}>
      <Container>
        <DetailsContainer>
          <img
            style={{
              width: "200px",
              borderRadius: "6px",
              margin: "6px",
            }}
            alt=""
            src={olive}
          />
          <FieldName>{text}</FieldName>
        </DetailsContainer>
        <ItineraryContainer>
          <JourneyPresenter key={infos.id} {...infos} />

          {/*<JourneyPresenter key={journey.id} {...journey} />*/}

          {/*<JourneyPresenter key={journey.id} {...journey} />*/}
        </ItineraryContainer>
      </Container>
    </DataCard>
  );
};
