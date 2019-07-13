import React from 'react'

const Main = props => {
  return (
    <div className='main center flex flex-auto flex-wrap items-center justify-center pv2 w-100'>
      {props.children}
    </div>
  )
}

export default Main
