import * as React from "react";
import { DefaultLayout } from "../layouts/Default";
import { Segment, Button } from "semantic-ui-react";
import styled from "styled-components";

const Wrapper = styled(Segment)`
  margin-top: 1em !important;
`;

const UploadVideo = props => (
  <DefaultLayout title="Upload Videos" {...props}>
    <Wrapper>
      <h1>Upload Video</h1>
      <Button content="Upload" />
    </Wrapper>
  </DefaultLayout>
);

export { UploadVideo };
