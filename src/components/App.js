import React from "react";
import Router from 'components/Router'
import {Container} from 'react-bootstrap'
import GlobalStyles from 'components/GlobalStyles'

function App() {
  return (
    <Container>
      <Router/>
      <GlobalStyles/>
      <p>Footer 들어갈곳</p>
    </Container>
  );
}

export default App;
