import * as React from "react";
import { Menu, Container } from "semantic-ui-react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const navbarItems = [
  {
    icon: "video",
    content: "Videos",
    to: "/videos"
  },
  {
    icon: "image",
    content: "Images",
    to: "/images"
  }
];

const NavbarContainer = styled.div`
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
          as={Link}
          {...props}
          active={index === 0 ? true : false}
          key={index}
        />
      ))}
    </NavbarWrapper>
  </NavbarContainer>
);

export { Navbar };
