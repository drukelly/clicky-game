import React from 'react'
import moment from 'moment'

const Header = () => {
  return (
    <header className='bb b--white-20 mb2 pa2 tc w-100'>{moment().format('HH:mm')}</header>
  )
}

export default Header
