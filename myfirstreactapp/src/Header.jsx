import React from 'react';
import happyBunny from './image/joyBunny.jpg'

function Header(props){
  return (
  <>
    <h1 style={{backgroundImage: `url(${happyBunny})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>EasyFind--EasyLife</h1>
  </>
  )
}

export default Header;