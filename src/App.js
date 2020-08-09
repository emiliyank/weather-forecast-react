import React from 'react'
import Header from './components/header'
import FindLocation from './components/findLocation'
import ForecastTable from './components/forecastTable'
import Forecast from './components/forecast'
import NewsSection from './components/newsSection'
import Footer from './components/footer'
import './App.css'


function App() {
  return (
    <div className="site-content">
    	<Header />
    	<FindLocation />
    	<ForecastTable />
    	<NewsSection />
    	<Footer />
    </div>
  )
}

export default App
