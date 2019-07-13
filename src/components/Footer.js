import React from 'react'

const Footer = () => {
  return (
    <footer className='b--white-20 bt f7 flex items-center ph2 pv3'>
      <div className='ph2'>
        <img src='https://gravatar.com/avatar/51db1ea6eca68e896fc46be2437222d3?s=100' alt='' className='br-100 mr2 v-mid w-20' />
        <a href='https://www.drukelly.com' className='b link light-blue'>John Kelly</a>
      </div>
      <div className='ml-auto ph2'>
        <a href='https://www.github.com/drukelly/clicky-game' className='b link light-blue'>Github Repo</a>
      </div>
    </footer>
  )
}

export default Footer
