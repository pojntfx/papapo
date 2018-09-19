import * as React from "react";
import { Container, Segment, Divider } from "semantic-ui-react";
import styled from "styled-components";
import { Tags } from "./Tags";
import { Sorting } from "./Sorting";

const TagBarContainer = styled(Container)`
  margin-top: 1em;
`;

const TagBar = props => (
  <TagBarContainer {...props}>
    <Segment>
      <Divider content="Sorting" horizontal />
      <Sorting />
      <Divider content="Tags" horizontal />
      <Tags />
    </Segment>
  </TagBarContainer>
);

export { TagBar };
