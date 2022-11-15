import React, {useState} from 'react'
import './App.css';
import serie from './serie';
import Result from './result';

function App() {

  const [number, setNumber] = useState(0)
  const [result, setResult] = useState(0)

  const handleNumber = (e) => {
    setNumber(e.target.value)
  }

  const getSerie = (e) => {
    e.preventDefault()
    setResult(serie(number))
  }

  return (
    <div className="App">
      <div>
        <h2>Calcular serie</h2>

        <form  onSubmit={getSerie}>
          <label>Numero:</label>
          <input type="number" name="" id="" value={number} onChange={handleNumber} />
          <button className="button button__save" type="submit">Calcular</button>

          <Result result={result} />
        </form>
      </div>
    </div>
  );
}

export default App;
