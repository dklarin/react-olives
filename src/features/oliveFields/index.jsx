import React, { useState } from "react";
import {
  Wrapper,
  GridContainer,
  LeftGridContainer,
  RightGridContainer,
  MainHeader,
  FlexRow,
  FlexColumn,
} from "../../style/global-style";

import { ContentPage } from "../../ui/contentPage";
import styled from "styled-components";
//"ui/contentPage";
import ListView from "../../ui/listView";
import { data } from "../../data";
import { FieldItemPresenter } from "./components/FieldItemPresenter";

export const ContentPageStyled = styled(ContentPage)`
  background-color: lightblue;
`;

export const FieldsListView = (props) => {
  const [loading, setLoading] = useState(false);

  return (
    <Wrapper>
      <GridContainer>
        <LeftGridContainer></LeftGridContainer>
        <RightGridContainer>
          <ContentPageStyled>
            <ListView
              loading={loading}
              data={data}
              //shimmer={<StyledShimmer />}
              renderItem={(item) => (
                <FieldItemPresenter
                  key={item.id}
                  {...item}
                  onClick={() => props.history.push(`fleet/vessel/${item.id}`)}
                />
              )}
              keyExtractor={(item) => item.id}
            />
          </ContentPageStyled>
        </RightGridContainer>
      </GridContainer>
    </Wrapper>
  );
};
