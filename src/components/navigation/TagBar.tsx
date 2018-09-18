import * as React from "react";
import { Container, Segment, Divider } from "semantic-ui-react";
import styled from "styled-components";
import { Tags } from "./Tags";
import { Sorting } from "./Sorting";

const TagBarContainer = styled(Container)`
  margin-top: 1em;
`;

const TagBarWrapper = styled(Segment)`
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  padding-top: 0 !important;
`;

const TagBar = props => (
  <TagBarContainer {...props}>
    <TagBarWrapper>
      <Divider content="Sorting" horizontal />
      <Sorting />
      <Divider content="Tags" horizontal />
      <Tags />
    </TagBarWrapper>
  </TagBarContainer>
);

export { TagBar };
