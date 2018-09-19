import * as React from "react";
import { VideoCard } from "./VideoCard";
import { Card } from "semantic-ui-react";
import styled from "styled-components";

const videos = [
  {
    url: "https://www.youtube.com/watch?v=006ip4ndThE",
    title: "Giant panda bear does handstand!",
    publishDate: "3 hours",
    description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore
    pariatur aspernatur optio ipsum dolorum quisquam accusantium incidunt
    iusto ratione harum maxime laudantium atque.`,
    viewCount: 3206,
    likeCount: 37,
    shareCount: 12
  },
  {
    url: "https://www.youtube.com/watch?v=006ip4ndThE",
    title: "Giant panda bear does handstand!",
    publishDate: "3 hours",
    description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore
    pariatur aspernatur optio ipsum dolorum quisquam accusantium incidunt
    iusto ratione harum maxime laudantium atque.`,
    viewCount: 3206,
    likeCount: 37,
    shareCount: 12
  }
];

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
