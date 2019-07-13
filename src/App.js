import React from 'react'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import './App.css'

function App () {
  return (
    <div className='site b bg-black-50 sans-serif white-80'>
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

export default App
