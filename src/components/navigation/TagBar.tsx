import * as React from "react";
import { Container, Segment, Divider } from "semantic-ui-react";
import styled from "styled-components";
import { Tags } from "./Tags";
import { Sorting } from "./Sorting";

const TagBarContainer = styled.div`
  margin-top: 1em;
`;

const TagBarSegment = styled(Segment)`
  padding-top: 0.25em !important;
`;

const TagBar = props => (
  <TagBarContainer {...props}>
    <TagBarSegment>
      <Divider content="Sorting" horizontal />
      <Sorting />
      <Divider content="Tags" horizontal />
      <Tags />
    </TagBarSegment>
  </TagBarContainer>
);

export { TagBar };
