import * as React from "react";
import { Card, Button, Icon } from "semantic-ui-react";
import styled from "styled-components";
/// <reference path='../../types/video.d.ts'/>
import Plyr from "react-plyr";
import "plyr/dist/plyr.css";

const PublishDate = styled(Card.Meta)`
  margin-top: 0.5em;
`;

const VideoCardIcon = styled(Icon)`
  margin-right: 0.5em !important;
  &:not(:first-child) {
    margin-left: 0.5em !important;
  }
`;

const ViewsWrapper = styled.span`
  margin-right: 1em;
  white-space: nowrap;
`;

const ActionsWrapper = styled(Card.Content)`
  overflow-x: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Actions = styled.div`
  margin-left: auto;
  white-space: nowrap;
`;

const VideoCard = () => (
  <Card>
    <Plyr type="youtube" videoId="006ip4ndThE" />
    <Card.Content>
      <Card.Header>Giant panda bear does handstand!</Card.Header>
      <PublishDate>
        <VideoCardIcon name="clock" />
        Published 3 hours ago
      </PublishDate>
      <Card.Description>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore
        pariatur aspernatur optio ipsum dolorum quisquam accusantium incidunt
        iusto ratione harum maxime laudantium atque.
      </Card.Description>
    </Card.Content>
    <ActionsWrapper extra>
      <ViewsWrapper>
        <VideoCardIcon name="eye" />
        3206 views
      </ViewsWrapper>
      <Actions>
        <Button
          icon="heart"
          color="pink"
          content="Like"
          label={{
            basic: true,
            color: "pink",
            pointing: "left",
            content: "37"
          }}
        />
        <Button
          icon="share"
          color="green"
          content="Share"
          label={{
            basic: true,
            color: "green",
            pointing: "left",
            content: "12"
          }}
        />
      </Actions>
    </ActionsWrapper>
  </Card>
);

export { VideoCard };
