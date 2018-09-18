import * as React from "react";
import { Dropdown } from "semantic-ui-react";

const options = [
  {
    text: "By Name",
    value: "By Name"
  },
  {
    text: "By Relevance",
    value: "By Relevance"
  },
  {
    text: "By Upload Date",
    value: "By Upload Date"
  },
  {
    text: "By Likes",
    value: "By Likes"
  },
  {
    text: "By Comments",
    value: "By Comments"
  }
];

const Sorting = props => (
  <Dropdown
    placeholder="By Relevance"
    fluid
    selection
    search
    options={options}
    {...props}
  />
);

export { Sorting };
