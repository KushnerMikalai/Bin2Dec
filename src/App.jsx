import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet'
import './toggleThemes.css'
import stylesTheme from './themes.module.css'
import stylesApp from './App.module.css'

function App() {
  const [inputBin, setInputBin] = useState('')
  const [inputDec, setInputDec] = useState('')
  const [isLightTheme, changeTheme] = useState(true)

  useEffect(() => {
    const data = sessionStorage.getItem('is_light_theme');
    changeTheme(!!Number(data))
  }, [])

  const toggleTheme = value => {
    sessionStorage.setItem('is_light_theme', String(value ? 1 : 0));
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

  const title = 'Bin2Dec'

  return (
    <React.Fragment>
      <Helmet>
        <title>{title}</title>
      </Helmet>
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
            <h1 className="title">{title}</h1>
            <div className={stylesApp.input}>
              <label className={stylesApp.inputLabel}>Binary</label>
              <input
                  className={stylesApp.inputInner}
                  type="text"
                  name="binary"
                  placeholder="Enter 0 or 1"
                  value={inputBin}
                  onChange={e => changeBinary(e.target.value)}
              />
            </div>
            <div className={stylesApp.input}>
              <label className={stylesApp.inputLabel}>Decimal</label>
              <input
                  className={stylesApp.inputInner}
                  type="number"
                  name="decimal"
                  value={inputDec}
                  onChange={e => changeDecimal(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
