import React from "react";
import Router from 'components/Router';
import {Container} from 'react-bootstrap';
import GlobalStyles from 'components/GlobalStyles'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function App() {
  return (
    <Container>
      <Router/>
      <GlobalStyles/>
      <Footer />
    </Container>
  );
}

export default App;
