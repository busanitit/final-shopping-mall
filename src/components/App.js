import React from "react";
import Router from 'components/Router';
import {Container} from 'react-bootstrap';

function App() {
  return (
    <Container>
      <p>Header 들어갈곳</p>
      <Router/>
      <p>Footer 들어갈곳</p>
    </Container>
  );
}

export default App;
