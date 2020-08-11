import React, {Component} from 'react'
import './App.css'

import Navigation from './navigation'
import { BrowserRouter } from 'react-router-dom'


class App extends Component
{
	componentDidMount(){
	    document.title = "Weather Forecasts App"
	}

	render(){
	  return (
	  	<BrowserRouter>
          <Navigation />
        </BrowserRouter>
	  )
	}
}

export default App
