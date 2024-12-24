import React from "react";
import {
  Wrapper,
  GridContainer,
  LeftGridContainer,
  RightGridContainer,
  MainHeader,
  FlexRow,
  FlexColumn,
} from "../../style/global-style";

export const Arkod = () => {
  const links = [
    {
      href: "http://preglednik.arkod.hr/ARKOD-Web/#layers=OSNOVNI%20PROSTORNI%20PODACI,DOF-client,ZU-client,LPIS_FILTERED,LPIS_200,LPIS_210,LPIS_310,LPIS_320,LPIS_321,LPIS_410,LPIS_421,LPIS_422,LPIS_430,LPIS_450,LPIS_451,LPIS_490,LPIS_900,LPIS,SLOPE05,SLOPE510,SLOPE1015,SLOPE15,SLOPEnull,POP,POVS,GAEC7,Zasticena%20podrucja,Ptice,Leptiri,Kontinentalna%20regija,Mediteranska%20regija,Brdsko-planinska%20regija,3m%20Vodoza%C5%A1titni%20pojas,10m%20Vodoza%C5%A1titni%20pojas,Obiljezja%20krajobraza,Tocke,Linije,Poligoni,TT%202015,RP,GPP,BFO,SPEC&map_x=500000&map_y=4925000&map_sc=3657142",
      text: "ARKOD",
    },
    { href: "https://oss.uredjenazemlja.hr/", text: "Uređena zemlja" },
  ];

  return (
    <Wrapper>
      <GridContainer>
        <LeftGridContainer></LeftGridContainer>
        <RightGridContainer>
          <MainHeader style={{ marginTop: "5px" }}>
            <FlexRow>
              <FlexColumn>Arkod</FlexColumn>
            </FlexRow>
          </MainHeader>
          <div>
            {links.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.text}
                <br/>
              </a>
              
            ))}
          </div>
        </RightGridContainer>
      </GridContainer>
    </Wrapper>
  );
};
