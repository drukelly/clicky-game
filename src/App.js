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
    message: '',
    openedApps: [],
    score: 0,
    topScore: 0
  }
  
  // Based on the Fisher-Yates shuffle algorithm
  // https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array
  shuffleApps = appArray => {
    let currentIndex = appArray.length, temporaryValue, randomIndex
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex)
      currentIndex -= 1
      temporaryValue = appArray[currentIndex]
      appArray[currentIndex] = appArray[randomIndex]
      appArray[randomIndex] = temporaryValue
    }
    // Need to convert output into an actual array
    Array.from(appArray)
    return appArray
  }

  openApp = id => {
    this.setState({ apps: this.shuffleApps(apps) })
  }

  render () {
    return (
      <div className='bg-black-50 flex flex-column min-vh-100 sans-serif white-80'>
        <Header />
        <Main>
          {this.state.apps.map(app => 
            <AppIcon
              openApp={this.openApp}
              image={app.image}
              key={app.id}
              name={app.name}
            />
          )}
        </Main>
        <Footer />
      </div>
    )
  }
}

export default App
