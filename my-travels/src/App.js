import React, { Component } from 'react'
import { Row, Col } from 'reactstrap'
import './App.css'

import Travel from './Travel'

class App extends Component {
  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <Row>
            <Col xs='12' md='6' lg='6'>
              <Travel
                photo='https://www.kuoni.fr/wp-content/uploads/2017/12/IS-Circuit-Islande-%C2%A9-Nikolay-Pandev-iStock-56258174-500x500.jpg'
                destination='Islande'
                country='Islande'
                distance='2038 km'
              />
            </Col>
            <Col xs='12' md='6' lg='6'>
              <Travel
                photo='https://i0.wp.com/www.carnetdeshopping.com/wp-content/uploads/2011/07/plages-de-guadeloupe_500.jpg?fit=500%2C500&ssl=1'
                destination='Guadeloupe'
                country='Guadeloupe'
                distance='6831 km'
              />
            </Col>
          </Row>
        </header>
      </div>
    )
  }
}

export default App
