import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './features/counter/Counter'
import Coin from './features/Coin';
function App() {
  
  return (
    <div className="App">
<Counter/>
<Coin/>
<input type="file" name="image"/>
    </div>
  );
}

export default App;
