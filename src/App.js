import React, {Component} from 'react'
import './App.css'

import Navigation from './navigation'
import AppContext from './context'
import { BrowserRouter } from 'react-router-dom'
import getCookie from './utils/cookie'

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
		console.log('logIn()')
		console.log(user)
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

	    const token = getCookie('x-auth-token')

	    if(!token){
	    	this.logOut()
	    	return
	    }

	    fetch('http://localhost:8000/api/me', {
	    	method: 'POST',
	    	body: JSON.stringify({
	    		token
	    	}),
	    	headers: {
			    'Content-Type': 'application/json'
			}
	    }).then(promise => {
	    	return promise.json()
	    }).then(response => {
	    	if(response.id){
	    		console.log('base componentDidMount()')
	    		console.log(response)
	    		this.logIn(response)
	    	}
	    })

	}

	render(){
		const {
			loggedIn,
			user
		} = this.state

	  return (
		<AppContext.Provider value={{
				backendApi: 'http://inveit280.voyager.icnhost.net/learning/weather-news/public/api',

				loggedIn,
				user,
				logIn: this.logIn,
				logOut: this.logOut
			}}>
	       		{this.props.children}
	    </AppContext.Provider>
	  )
	}
}

export default App
