import React from "react";
import { Container } from "react-bootstrap";
import Contact from "Routes/Contact/ContactForHome";
import SummaryForHome from "components/SummaryForHome";
import LinkImageForHome from "components/LinkImageForHome";
import SimpleSlider from 'components/SimpleSlider'
import StoreForHome from "Routes/Store/StoreForHome";

export default class extends React.Component {
  render() {
    return (
      <Container>
        <SimpleSlider/>
        <SummaryForHome />
        <StoreForHome />
        <Contact />
        <LinkImageForHome />
      </Container>
    );
  }
}