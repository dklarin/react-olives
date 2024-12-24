import * as React from 'react';
import Map from 'react-map-gl';

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

export default function MapComponent() {
  return (
       <Wrapper>
          <GridContainer>
            <LeftGridContainer></LeftGridContainer>
            <RightGridContainer>
    <Map
      mapboxAccessToken="pk.eyJ1IjoibWFjamltdWxhYyIsImEiOiJjazZvNzVrdDgwMDN3M2VxbHljdjF5Yzd4In0.rWPmBMx94_Z7RwLIXnXF4g"
      initialViewState={{
        latitude: 43.78543,
    longitude: 15.64113,
        zoom: 14
      }}
      style={{width: 800, height: 600}}
      mapStyle="mapbox://styles/mapbox/streets-v9"
      
    />
   
    </RightGridContainer>
    </GridContainer>
    </Wrapper>
  );
}