import * as React from "react";
import { Container, Segment, Button } from "semantic-ui-react";
import styled from "styled-components";

const FooterContainer = styled(Container)`
  margin-top: 1em;
  margin-bottom: 1em;
`;

const FooterSegment = styled(Segment)`
  overflow-x: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const FooterText = styled.span`
  white-space: nowrap;
`;

const FooterActions = styled.div`
  margin-left: 1em;
  white-space: nowrap;
`;

const Footer = props => (
  <FooterContainer {...props}>
    <FooterSegment>
      <FooterText>&copy; 2018 Felicitas Pojtinger</FooterText>
      <FooterActions>
        <Button icon="legal" content="Licenses" as="a" href="#licenses" />
        <Button icon="code" content="Source Code" as="a" href="#source-code" />
      </FooterActions>
    </FooterSegment>
  </FooterContainer>
);

export { Footer };
