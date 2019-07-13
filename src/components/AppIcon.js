import React from 'react'
import './AppIcon.css'

const AppIcon = props => {
  return (
    <div className='w-20 mh3 tc' onClick={() => console.log(props.name)}>
      <img src={props.image} alt={props.name} className='app-icon pointer w-25-l w-70' />
      <div className='f7 mv4-l mv3'>
        {props.name}
      </div>
    </div>
  )
}

export default AppIcon
