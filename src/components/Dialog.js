import React from 'react'
import './Dialog.css'

const Dialog = props => {
  if (props.message) {
    return (
      <div className='bg-black-50 fixed flex flex-columns items-center justify-center min-vh-100 w-100 z-1'>
        <div className='bg-white black br4 pt4 tc'>
          <p className='ph4 pb3'>{props.message}</p>
          <button className='b--black-10 bg-transparent dt justify-center items-center ph5 pv3 pointer w-100' onClick={() => { window.location.reload() }}>OK</button>
        </div>
      </div>
    )
  } else {
    return null
  }
}

export default Dialog
