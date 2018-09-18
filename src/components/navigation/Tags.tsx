import * as React from "react";
import { Label, Button, Icon } from "semantic-ui-react";
import styled from "styled-components";

const tags = [
  {
    label: "White",
    selected: true
  },
  {
    label: "Bamboo",
    selected: true
  },
  {
    label: "Red"
  },
  {
    label: "Yellow"
  },
  {
    label: "Amber"
  }
];

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
    {tags.map(({ label, selected }, index) => (
      <Label as="a" color={selected ? "green" : undefined} key={index}>
        {label}
      </Label>
    ))}
    <MoreButton color="pink" compact basic size="mini">
      More
      <Icon name="arrow right" />
    </MoreButton>
  </LabelGroup>
);

export { Tags };
