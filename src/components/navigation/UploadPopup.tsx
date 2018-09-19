import * as React from "react";
import { Popup, Button, Grid, Header, Icon } from "semantic-ui-react";

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
          as="a"
          href="#upload-video"
        />
      </Grid.Column>
      <Grid.Column textAlign="center" verticalAlign="middle">
        <Header as="h4">Upload Image</Header>
        <p>Share an awesome panda picture!</p>
        <Button
          icon="image"
          size="mini"
          content="Upload Image"
          as="a"
          href="#upload-image"
        />
      </Grid.Column>
    </Grid>
  </Popup>
);

export { UploadPopup };
