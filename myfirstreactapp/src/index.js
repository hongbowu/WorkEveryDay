import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import {animals} from './animals';

const title = '';
const images = [];
for (const animal in animals) {
  images.push(
    <img
      key={animal}
      className="animal"
      alt={animal}
      src={animals[animal].image}
      arial-label={animal}
      role="button"
      onClick={displayFact}
    />
  );
}
function displayFact(e) {
  let selectedAnimal = e.target.alt;
  let fact = animals[selectedAnimal].facts[Math.floor(Math.random()*animals[selectedAnimal].facts.length)]
  document.getElementById('fact').innerHTML = fact;
}

const background = (
  <img className="background" alt="ocean" src="/images/ocean.jpg" />
);


const showBackground = true;
const animalFacts = (
  <div>
    <h1>{title ? title : "Click an animal for a fun fact"}</h1>
    {showBackground === true && background}
    <div className="animals">{images}</div>
    <p id='fact'></p>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  {animalFacts}
  <h1>{10*10}</h1>
  </>
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
