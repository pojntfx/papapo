import * as React from "react";
import { Container } from "semantic-ui-react";
import { Navbar } from "../components/navigation/Navbar";
import { AppBar } from "../components/navigation/AppBar";
import styled from "styled-components";

const DefaultContainer = styled(Container)`
  padding-top: 1em;
`;

const DefaultLayout = ({ children, ...props }) => (
  <React.Fragment>
    <AppBar />
    <Navbar />
    <DefaultContainer {...props}>{children}</DefaultContainer>
  </React.Fragment>
);

export { DefaultLayout };
