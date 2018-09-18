import * as React from "react";
import { Container } from "semantic-ui-react";
import { Navbar } from "../components/navigation/Navbar";
import { AppBar } from "../components/navigation/AppBar";
import styled from "styled-components";
import { injectGlobal } from "styled-components";
/// <reference path='../../types/logo.d.ts'/>
import background from "../assets/bg.jpg";
import { TagBar } from "../components/navigation/TagBar";

injectGlobal`
  body {
    background: url(${background}) no-repeat center center fixed;
    background-size: cover;
  }
`;

const DefaultContainer = styled(Container)`
  padding-top: 1em;
`;

const DefaultLayout = ({ children, ...props }) => (
  <React.Fragment>
    <AppBar />
    <Navbar />
    <TagBar />
    <DefaultContainer {...props}>{children}</DefaultContainer>
  </React.Fragment>
);

export { DefaultLayout };
