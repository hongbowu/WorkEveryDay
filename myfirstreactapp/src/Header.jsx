import React from 'react';
import happyBunny from './image/background.png'

function Header(){
  return (
  <>
    <h1 style={{backgroundImage: `url(${happyBunny})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>EasyFind--EasyLife</h1>
  </>
  )
}

export default Header;