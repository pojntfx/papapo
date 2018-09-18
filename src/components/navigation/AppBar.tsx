import * as React from "react";
import { Menu, Container, Button } from "semantic-ui-react";
import styled from "styled-components";
/// <reference path='../../types/logo.d.ts'/>
import logo from "../../assets/logo.png";

const AppBarContainer = styled(Container)`
  padding-top: 1em !important;
`;

const AppBarWrapper = styled(Menu)`
  overflow-x: auto;
`;

const Action = styled(Menu.Item)`
  padding-left: 0.5em !important;
  padding-right: 0.5em !important;
`;

const LogoWrapper = styled.a`
  margin-left: auto !important;
`;

const Logo = styled.img`
  height: 32.5px;
  margin-top: 10px;
`;

const AppBar = props => (
  <AppBarContainer>
    <AppBarWrapper {...props}>
      <Action>
        <Button icon="search" content="Search" color="green" />
      </Action>
      <LogoWrapper href="#">
        <Logo src={logo} />
      </LogoWrapper>
      <Menu.Menu position="right">
        <Action>
          <Button icon="upload" content="Upload" color="pink" />
        </Action>
      </Menu.Menu>
    </AppBarWrapper>
  </AppBarContainer>
);

export { AppBar };
