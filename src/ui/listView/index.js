import React from "react";
import styled from "styled-components";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  height: 100%;
`;
/***
 * The component
 */
export const ListView = (props) => {
  const { renderItem, loading } = props;
  if (!renderItem) return null;
  return (
    <Container>
      {loading ? <Shimmer shimmer={props.shimmer} /> : <Data {...props} />}
    </Container>
  );
};

const Shimmer = (props) => {
  if (!props.shimmer) return null;

  return (
    <div>
      {props.shimmer}
      {props.shimmer}
      {props.shimmer}
      {props.shimmer}
    </div>
  );
};
const Data = (props) => {
  const { data, keyExtractor, renderItem } = props;
  return data.questions.map((item) => (
    <div key={keyExtractor(item)}>{renderItem(item)}</div>
  ));
};
export default ListView;
