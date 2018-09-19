import * as React from "react";
import { Menu, Container, Button, Icon } from "semantic-ui-react";
import styled from "styled-components";
/// <reference path='../../types/logo.d.ts'/>
import logo from "../../assets/logo.png";
import { UploadPopup } from "./UploadPopup";

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
  height: 25px;
  margin-top: 15px;
`;

const AppBar = props => (
  <AppBarContainer>
    <AppBarWrapper {...props}>
      <Action>
        <Button animated="fade" color="green">
          <Button.Content visible>
            <Icon name="search" />
          </Button.Content>
          <Button.Content hidden>Search</Button.Content>
        </Button>
      </Action>
      <LogoWrapper href="#">
        <Logo src={logo} />
      </LogoWrapper>
      <Menu.Menu position="right">
        <Action>
          <UploadPopup />
        </Action>
      </Menu.Menu>
    </AppBarWrapper>
  </AppBarContainer>
);

export { AppBar };
