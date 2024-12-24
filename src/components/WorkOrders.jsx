import React from "react";
import {
  Wrapper,
  GridContainer,
  Container,
  LeftGridContainer,
  RightGridContainer,
  MainHeader,
  FlexRow,
  FlexColumn,
  ButtonContainer,
} from "../style/global-style";

//import { ContentView } from "../layout/ContentView";

import { data } from "../data";
import olive from "../assets/olive.jpg";

const todaysDate = new Date();

export const WorkOrders = (props) => {
  const funk = () => {
    console.log("tada");
    //props.history.push(`/somethingelse`);
  };

  return (
    <Wrapper>
      <GridContainer>
        <LeftGridContainer></LeftGridContainer>
        <RightGridContainer>
          <MainHeader style={{ marginTop: "5px" }}>
            <FlexRow>
              <FlexColumn>Maslinici</FlexColumn>
            </FlexRow>
          </MainHeader>
          {data.questions.map((journey) => (
            <Container onClick={funk}>
              <FlexRow>
                <FlexColumn>
                  {journey.text}
                  <img src={olive} style={{ width: 200, height: 100 }} />
                </FlexColumn>
                <FlexColumn style={{ marginRight: 400 }}>
                  <FlexRow>
                    <FlexColumn>
                      <b>Broj maslina:</b>
                    </FlexColumn>
                    <FlexColumn>{journey.infos.oliveTrees}</FlexColumn>
                  </FlexRow>
                  <FlexRow>
                    <FlexColumn>
                      <b>Udaljenost:</b>
                    </FlexColumn>
                    <FlexColumn>{journey.infos.distance}</FlexColumn>
                  </FlexRow>
                  <FlexRow>
                    <FlexColumn>
                      <b>Vrijeme:</b>
                    </FlexColumn>
                    <FlexColumn>{journey.infos.timeOnDistance}</FlexColumn>
                  </FlexRow>
                </FlexColumn>
              </FlexRow>
            </Container>
          ))}
        </RightGridContainer>
      </GridContainer>
    </Wrapper>
  );
};
