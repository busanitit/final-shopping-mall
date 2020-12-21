import React from "react";
import Router from 'components/Router';
import {Container} from 'react-bootstrap';
import GlobalStyles from 'components/GlobalStyles'
import Footer from '../Footer/Footer';
import StoreDetail from '../Routes/StoreDetail';

function App() {
  return (
    <Container>
      <Router/>
      <GlobalStyles/>
      <StoreDetail />
      <Footer/>
    </Container>
  );
}

export default App;
