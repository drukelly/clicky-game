import React from 'react'
import moment from 'moment'

const Header = props => {
  return (
    <header className='text-shadow bb b--white-20 flex justify-center mb2 pt3 ph3 pb2 tc w-100'>
      <div className='mr-auto'>Score: {props.score}</div>
      <div>{ moment().format('HH:mm') }</div>
      <div className='ml-auto'>Top Score: {props.topScore}</div>
    </header>
  )
}

export default Header
