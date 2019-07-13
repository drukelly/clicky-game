import React from 'react'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='b bg-black-50 flex flex-column min-vh-100 sans-serif white-80'>
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

export default App
