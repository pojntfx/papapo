import * as React from "react";
import { Container } from "semantic-ui-react";
import { Navbar } from "../components/navigation/Navbar";

const DefaultLayout = ({ children, ...props }) => (
  <React.Fragment>
    <Navbar />
    <Container {...props}>{children}</Container>
  </React.Fragment>
);

export { DefaultLayout };
