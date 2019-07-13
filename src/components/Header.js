import React from 'react'
import moment from 'moment'

const Header = () => {
  return (
    <header className='text-shadow bb b--white-20 flex justify-center mb2 pt3 ph3 pb2 tc w-100'>
      <div className='mr-auto'>Score: 0</div>
      <div>{moment().format('HH:mm')}</div>
      <div className='ml-auto'>Top Score: 0</div>
    </header>
  )
}

export default Header
