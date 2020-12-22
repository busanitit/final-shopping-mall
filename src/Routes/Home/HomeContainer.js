import React from "react";
import { Container } from "react-bootstrap";
<<<<<<< HEAD
import Contact from "Routes/Contact/ContactForHome";
import SummaryForHome from "components/SummaryForHome";
import LinkImageForHome from "components/LinkImageForHome";
import SimpleSlider from 'components/SimpleSlider'
import StoreForHome from "Routes/Store/StoreForHome";
=======
import SimpleSlider from "components/SimpleSlider";
import Contact from "Routes/Contact/ContactForHome";
import SummaryForHome from "components/SummaryForHome";
import LinkImageForHome from "components/LinkImageForHome";
>>>>>>> 2c0d3b4df69438455c37a6fae47efb1ef88db7af

export default class extends React.Component {
  render() {
    return (
      <Container>
<<<<<<< HEAD
        <SimpleSlider/>
        <SummaryForHome />
        <StoreForHome />
=======
        {/* <SimpleSlider /> */}
        <SummaryForHome />
>>>>>>> 2c0d3b4df69438455c37a6fae47efb1ef88db7af
        <Contact />
        <LinkImageForHome />
      </Container>
    );
  }
}