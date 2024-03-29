import React from 'react';
const highScoresData = require('./scoreData');

function HighScore(){
  const {highScores} = highScoresData;
 return (
  <>
    {highScores.map((highScore, index)=>(
      <ul key={index}>
        <li key={`username${index}`}>{highScore.username}</li>
        <li key={`date${index}`}>{highScore.date}</li>
        <li key={`score${index}`}>{highScore.score}</li>
      </ul>
    ))}
  </>
 )
}

export default HighScore;