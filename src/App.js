import React, { Component } from 'react'
import Header from './components/Header'
import Main from './components/Main'
import AppIcon from './components/AppIcon'
import Footer from './components/Footer'
import apps from './apps.json'
import './App.css'

class App extends Component {
  state = {
    apps,
    score: 0
  }

  render () {
    return (
      <div className='bg-black-50 flex flex-column min-vh-100 sans-serif white-80'>
        <Header />
        <Main>
          {this.state.apps.map(app => 
            <AppIcon name={app.name} image={app.image} key={app.id} />
          )}
        </Main>
        <Footer />
      </div>
    )
  }
}

export default App
