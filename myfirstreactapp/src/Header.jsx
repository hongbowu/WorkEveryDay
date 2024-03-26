import React from 'react';
import happyBunny from './image/happybunny.png'

function Header(props){
  return (
  <>
    <img src={happyBunny} alt='a bunny holds a giant carrot with happy face' />
    <h1>EasyFind--EasyLife</h1>
  </>
  )
}

export default Header;