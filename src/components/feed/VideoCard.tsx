import * as React from "react";
import { Card, Button, Icon } from "semantic-ui-react";
import styled from "styled-components";
import ReactPlayer from "react-player";

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

const Video = styled(ReactPlayer)`
  & iframe {
    border-top-left-radius: 0.28571429rem;
    border-top-right-radius: 0.28571429rem;
  }
`;

const VideoCard = ({
  url,
  title,
  publishDate,
  description,
  viewCount,
  likeCount,
  shareCount,
  ...props
}: any) => (
  <Card {...props}>
    <Video url={url} controls width="100%" />
    <Card.Content>
      <Card.Header>{title}</Card.Header>
      <PublishDate>
        <VideoCardIcon name="clock" />
        Published {publishDate} ago
      </PublishDate>
      <Card.Description>{description}</Card.Description>
    </Card.Content>
    <ActionsWrapper extra>
      <ViewsWrapper>
        <VideoCardIcon name="eye" />
        {viewCount} views
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
            content: likeCount
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
            content: shareCount
          }}
        />
      </Actions>
    </ActionsWrapper>
  </Card>
);

export { VideoCard };
