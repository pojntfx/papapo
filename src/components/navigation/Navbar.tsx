import * as React from "react";
import { Menu, Container } from "semantic-ui-react";

const navbarItems = [
  {
    icon: "video",
    content: "Videos",
    href: "#video"
  },
  {
    icon: "image",
    content: "Images",
    href: "#images"
  }
];

const Navbar = props => (
  <Menu fixed="tops" {...props} widths="2">
    <Container>
      {navbarItems.map((props, index) => (
        <Menu.Item
          as="a"
          {...props}
          active={index === 0 ? true : false}
          key={index}
        />
      ))}
    </Container>
  </Menu>
);

export { Navbar };
