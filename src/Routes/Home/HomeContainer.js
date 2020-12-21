import React from "react";
import { Container } from "react-bootstrap";
import SimpleSlider from "components/SimpleSlider";
import Contact from "Routes/Contact/ContactForHome";
import SummaryForHome from "components/SummaryForHome";
import LinkImageForHome from "components/LinkImageForHome";

export default class extends React.Component {
  render() {
    return (
      <Container>
        <SimpleSlider />
        <SummaryForHome />
        <Contact />
        <LinkImageForHome />
      </Container>
    );
  }
}
