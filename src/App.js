import React from 'react'
import Header from './components/header'
import FindLocation from './components/findLocation'
import ForecastTable from './components/forecastTable'
import Forecast from './components/forecast'
import './App.css'


function App() {
  return (
    <div className="site-content">
    	<Header />
    	<FindLocation />
    	<ForecastTable />
    </div>
  )
}

export default App
