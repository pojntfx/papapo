import * as React from "react";
import { Container } from "semantic-ui-react";

const DefaultLayout = ({ children, ...props }) => (
  <Container {...props}>{children}</Container>
);

export { DefaultLayout };
