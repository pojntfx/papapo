import * as React from "react";
import { DefaultLayout } from "../layouts/Default";
import { Segment } from "semantic-ui-react";

const Home = props => (
  <DefaultLayout {...props}>
    <Segment>
      <h1>PaPaPo</h1>
    </Segment>
  </DefaultLayout>
);

export { Home };
