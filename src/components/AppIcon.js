import React from 'react'
import './AppIcon.css'

const AppIcon = props => {
  return (
    <div className='w-20 mh3 tc'>
      <img src={props.image} alt={props.name} className='app-icon pointer shadow-4 w-25-l w-70' onClick={() => props.openApp(props.id)} />
      <div className='text-shadow f7 mv4-l mv3'>
        {props.name}
      </div>
    </div>
  )
}

export default AppIcon
