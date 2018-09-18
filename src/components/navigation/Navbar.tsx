import * as React from "react";
import { Menu, Container } from "semantic-ui-react";
import styled from "styled-components";

const navbarItems = [
  {
    icon: "video",
    content: "Videos",
    href: "#videos"
  },
  {
    icon: "image",
    content: "Images",
    href: "#images"
  }
];

const NavbarContainer = styled(Container)`
  overflow-x: auto;
`;

const NavbarWrapper = styled(Menu)`
  margin-top: 1em !important;
`;

const Navbar = props => (
  <NavbarContainer>
    <NavbarWrapper {...props} color="green" widths="2">
      {navbarItems.map((props, index) => (
        <Menu.Item
          as="a"
          {...props}
          active={index === 0 ? true : false}
          key={index}
        />
      ))}
    </NavbarWrapper>
  </NavbarContainer>
);

export { Navbar };
