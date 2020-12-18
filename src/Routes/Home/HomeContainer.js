import React from "react";
import { Container } from "react-bootstrap";
import SimpleSlider from "components/SimpleSlider";

export default class extends React.Component {
  render() {
    return (
      <>
        <SimpleSlider />
        <Container></Container>
      </>
    );
  }
}
