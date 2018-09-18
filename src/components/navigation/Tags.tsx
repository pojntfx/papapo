import * as React from "react";
import { Label, Button, Icon } from "semantic-ui-react";
import styled from "styled-components";

const LabelGroup = styled(Label.Group)`
  display: flex;
  overflow-x: auto;
`;

const MoreButton = styled(Button)`
  height: 2.3em;
  margin-left: auto !important;
  white-space: nowrap;
`;

const Tags = props => (
  <LabelGroup tag {...props}>
    <Label as="a" color="green">
      White
    </Label>
    <Label as="a" color="green">
      Bamboo
    </Label>
    <Label as="a">Red</Label>
    <Label as="a">Yellow</Label>
    <Label as="a">Amber</Label>
    <MoreButton color="pink" compact basic size="mini">
      More
      <Icon name="arrow right" />
    </MoreButton>
  </LabelGroup>
);

export { Tags };
