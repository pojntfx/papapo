import * as React from "react";
import { DefaultLayout } from "../layouts/Default";
import { VideoCards } from "../components/feed/VideoCards";

const Home = props => (
  <DefaultLayout {...props}>
    <VideoCards />
  </DefaultLayout>
);

export { Home };
