import React, { Component } from 'react'
import { Container } from 'reactstrap'
import './App.css'

import Travels from './Travels'

class App extends Component {
  render() {
    return (
      <Container fluid>
        <Travels />
      </Container>
    )
  }
}

export default App
