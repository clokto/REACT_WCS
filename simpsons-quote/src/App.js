import React, { Component } from 'react'
import logo from './logo.svg'
import Donut from './assets/images/Simpsons_Donut.svg.png'
import './App.css'
import { Button } from 'reactstrap'

import Quotes from './Quotes'
import Lamp from './Lamp'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      working: true,
      logoHomer: true
    }
  }

  handleClick = () => {
    this.setState({
      working: !this.state.working,
      logoHomer: !this.state.logoHomer
    })
  }

  render() {
    const work = this.state.working ? 'App-logo' : 'App-logo-nope'
    const logoH = this.state.logoHomer ? logo : Donut
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logoH} className={work} alt='logo' />
          <h1 className='App-title'>Simpsons Quotes</h1>
          <Button onClick={this.handleClick}>
            Is Homer working ?
          </Button>
        </header>
        <Quotes />
      </div>
    )
  }
}

export default App
