import React from "react";
import ContentLoader from "react-content-loader";
import styled from "styled-components";

const ShimmerContainer = styled.div`
  background: white;
`;
export const ImageCardShimmer = props => {
  const { style, className } = props;

  return (
    <ShimmerContainer style={style} className={className}>
      <ContentLoader height={40} speed={2}>
        <rect x="40" y="10" rx="4" ry="4" width="60" height="6" />
        <rect x="40" y="20" rx="4" ry="4" width="160" height="6" />

        <rect x="9" y="9" rx="3" ry="3" width="20" height="20" />
      </ContentLoader>
    </ShimmerContainer>
  );
};
