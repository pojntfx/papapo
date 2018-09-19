import * as React from "react";
import { Fragment } from "react";
import { Container } from "semantic-ui-react";
import { AppBar } from "../components/navigation/AppBar";
import { injectGlobal } from "styled-components";
/// <reference path='../../types/logo.d.ts'/>
import background from "../assets/bg.jpg";
import { Footer } from "../components/navigation/Footer";
import { Helmet } from "react-helmet";

injectGlobal`
  body {
    background: url(${background}) no-repeat center center fixed;
    background-size: cover;
  }
`;

const DefaultLayout = ({ children, title, ...props }) => (
  <Fragment>
    {title ? (
      <Helmet>
        <title>{title} | PaPaPo</title>
      </Helmet>
    ) : null}
    <AppBar />
    <Container {...props}>{children}</Container>
    <Footer />
  </Fragment>
);

export { DefaultLayout };
