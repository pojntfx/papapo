import * as React from "react";
import { Popup, Button, Grid, Header, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";

const UploadPopup = props => (
  <Popup
    trigger={
      <Button animated="fade" color="pink">
        <Button.Content visible>
          <Icon name="upload" />
        </Button.Content>
        <Button.Content hidden>Upload</Button.Content>
      </Button>
    }
    flowing
    hoverable
    {...props}
  >
    <Grid centered divided columns={2}>
      <Grid.Column textAlign="center" verticalAlign="middle">
        <Header as="h4">Upload Video</Header>
        <p>Moving pandas are the best!</p>
        <Button
          icon="video"
          size="mini"
          content="Upload Video"
          as={Link}
          to="/upload/video"
        />
      </Grid.Column>
      <Grid.Column textAlign="center" verticalAlign="middle">
        <Header as="h4">Upload Image</Header>
        <p>Share an awesome panda picture!</p>
        <Button
          icon="image"
          size="mini"
          content="Upload Image"
          as={Link}
          to="/upload/image"
        />
      </Grid.Column>
    </Grid>
  </Popup>
);

export { UploadPopup };
