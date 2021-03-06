import React, { Component } from 'react'
import Header from './components/Header'
import Main from './components/Main'
import AppIcon from './components/AppIcon'
import Footer from './components/Footer'
import Dialog from './components/Dialog'
import apps from './apps.json'
import './App.css'

class App extends Component {
  constructor (props) {
    super (props)
    this.state = {
      apps,
      message: '',
      openedApps: [],
      score: 0,
      showDialog: false,
      topScore: 0
    }
    this.hideOverlay = this.hideOverlay.bind(this)
  }

  // Based on the Fisher-Yates shuffle algorithm
  // https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array
  shuffleApps = appArray => {
    let currentIndex = appArray.length, temporaryValue, randomIndex
    while (currentIndex !== 0) {
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
    if (this.state.openedApps.includes(id)) {
      this.setState({
        message: 'Click OK to start over.',
        openedApps: [],
        score: 0,
        showDialog: true
      })
    } else {
      this.setState({
        message: '',
        openedApps: this.state.openedApps.concat([id]),
        score: this.state.score + 1,
        showDialog: false
      })
    }
    if (this.state.score > this.state.topScore) this.setState({ topScore: this.state.score })
    if (this.state.score === apps.length - 1) {
      this.setState({
        message: 'Wow! You have really good memory!',
        showDialog: true,
        topScore: apps.length
      })
    }
  }

  hideOverlay = () => {
    this.setState({
      openedApps: [],
      showDialog: false,
      score: 0
    })
  }

  render () {
    return (
      <div className='bg-black-50 flex flex-column min-vh-100 sans-serif white-80'>
        <Header
          score={this.state.score}
          topScore={this.state.topScore}
        />
        <Main>
          {this.state.apps.map(app => 
            <AppIcon
              id={app.id}
              image={app.image}
              key={app.id}
              name={app.name}
              openApp={this.openApp}
            />
          )}
        </Main>
        { this.state.showDialog ? <Dialog message={this.state.message} hideOverlay={this.hideOverlay} /> : null }
        <Footer />
      </div>
    )
  }
}

export default App
