import React, { useState } from 'react'
import './App.css'
import './toggleThemes.css'
import stylesTheme from './themes.module.css'

function App() {
  const [inputBin, setInputBin] = useState('')
  const [inputDec, setInputDec] = useState('')
  const [isLightTheme, changeTheme] = useState(true)

  const toggleTheme = value => {
    changeTheme(value)
  }

  const changeBinary = value => {
    const binaryRegExp = new RegExp('^[0-1]+$');

    if (value.match(binaryRegExp) || value === '') {
      setInputBin(value)

      const decimal = parseInt(value, 2)

      if (value === '') {
        setInputDec('')
      } else if (!isNaN(decimal)) {
        setInputDec(String(decimal))
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
    <div className={`${isLightTheme ? stylesTheme.light : stylesTheme.dark} app`}>
      <div className="change-theme">
        <input
            className="change-theme__input"
            type="checkbox"
            checked={isLightTheme}
            onChange={e => toggleTheme(e.target.checked)}
        />
      </div>
      <div className="container">
        <div className="content">
          <h1 className="title">Bin2Dec</h1>
          <div>Binary</div>
          <div className="input">
            // TODO input style
            <input
                type="text"
                name="binary"
                placeholder="Enter 0 or 1"
                value={inputBin}
                onChange={e => changeBinary(e.target.value)}
            />
          </div>
          <div>Decimal</div>
          <input
              type="number"
              name="decimal"
              value={inputDec}
              onChange={e => changeDecimal(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
