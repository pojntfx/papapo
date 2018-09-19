import * as React from "react";
import { DefaultLayout } from "../layouts/Default";
import { VideoCards } from "../components/feed/VideoCards";
import { Navbar } from "../components/navigation/Navbar";
import { TagBar } from "../components/navigation/TagBar";

const Home = props => (
  <DefaultLayout title="Videos" {...props}>
    <Navbar />
    <TagBar />
    <VideoCards />
  </DefaultLayout>
);

export { Home };
