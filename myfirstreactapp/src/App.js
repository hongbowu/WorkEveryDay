import React from 'react';
import {comments} from './commentData'
import Card from './Card'
import './App.css'

function App(){
 return (
  comments.map((comment,index) => <Card key= {index} commentObject= {comment} />)
 )
    
   
}

export default App;