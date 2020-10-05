import React, { useState } from 'react'
import './App.css'

function App() {
  const [inputBin, setInputBin] = useState('')
  const [inputDec, setInputDec] = useState('')

  const changeBinary = value => {
    const binaryRegExp = new RegExp('^[0-1]+$');

    if (value.match(binaryRegExp) || value === '') {
      setInputBin(value)

      const decimal = parseInt(value, 2)
      if (!isNaN(decimal)) {
        setInputDec(decimal)
      }
    }
  }

  const changeDecimal = value => {
    const decimalRegExp = new RegExp('^[0-9]+$');

    if (value.match(decimalRegExp) || value === '') {
      setInputDec(value)
      const binary = Number(value).toString(2)
      setInputBin(binary)
    }
  }

  return (
    <div className="app">
      <div className="app__content">
        <div>Binary</div>
        <input
          type="text"
          name="binary"
          placeholder="Enter 0 or 1"
          value={inputBin}
          onChange={e => changeBinary(e.target.value)}
        />
        <div>Decimal</div>
        <input
            type="number"
            name="decimal"
            value={inputDec}
            onChange={e => changeDecimal(e.target.value)}
        />
      </div>
    </div>
  );
}

export default App;
