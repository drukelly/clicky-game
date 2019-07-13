import React from 'react'
import moment from 'moment'

function Header () {
  return (
    <header className='bb b--white-50 pa2 tc w-100'>{moment().format('HH:mm')}</header>
  )
}

export default Header
