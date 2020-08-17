import React, {Component} from 'react'
import './App.css'

import Navigation from './navigation'
import UserContext from './context'
import { BrowserRouter } from 'react-router-dom'


class App extends Component
{
	constructor(props){
		super(props)

		this.state = {
			loggedIn: false,
			user: null
		}
	}

	logIn = (user) => {
		this.setState({
			loggedIn: true,
			user
		})
	}

	logOut = () => { 
		document.cookie = 'x-auth-token= ; expires = Thu, 01 Jan 1970 00:00:00 GMT'
		
		this.setState({
			loggedIn: false,
			user: null
		})
	}


	componentDidMount(){
	    document.title = "Weather Forecasts App"
	}

	render(){
		const {
			loggedIn,
			user
		} = this.state

	  return (
	  	<UserContext.Provider value={{
	  			loggedIn,
	  			user,
	  			logIn: this.logIn,
	  			logOut: this.logOut
	  		}}>
          		{this.props.children}
        </UserContext.Provider>
	  )
	}
}

export default App
