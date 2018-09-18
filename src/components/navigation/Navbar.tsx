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

const NavbarWrapper = styled(Menu)`
  margin-top: 1em !important;
`;

const Navbar = props => (
  <Container>
    <NavbarWrapper {...props} widths="2">
      {navbarItems.map((props, index) => (
        <Menu.Item
          as="a"
          {...props}
          active={index === 0 ? true : false}
          key={index}
        />
      ))}
    </NavbarWrapper>
  </Container>
);

export { Navbar };
