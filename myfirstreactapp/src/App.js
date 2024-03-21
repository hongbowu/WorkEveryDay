import logo from './logo.svg';
import './App.css';
import GroceryItem from './GroceryItem'

function App() {
  function handleClick(name) {
    alert(name + ' has been added to the cart!')
  }
  const groceries = ['Eggs','Banana', 'Strawberry', 'Bread'];
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {groceries.map(grocery => <GroceryItem key={grocery} onClick={()=> handleClick(grocery)} name={grocery} />)}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
