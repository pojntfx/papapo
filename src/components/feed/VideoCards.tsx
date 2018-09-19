import * as React from "react";
import { VideoCard } from "./VideoCard";
import { Card } from "semantic-ui-react";
import styled from "styled-components";
/// <reference path="../../types/json.d.ts"/>
import videos from "../../data/videos.json";

const CardGroup = styled(Card.Group)`
  @media (max-width: 767px) {
    margin-top: 1em !important;
  }
  @media (min-width: 768px) {
    padding-top: 1em !important;
  }
`;

const VideoCards = props => (
  <CardGroup stackable itemsPerRow={2} {...props}>
    {videos.map((props, index) => (
      <VideoCard {...props} key={index} />
    ))}
  </CardGroup>
);

export { VideoCards };
