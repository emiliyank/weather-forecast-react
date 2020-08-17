import React, {Component} from 'react'
import {Switch, Route} from 'react-router-dom'

import Home from './pages/home'
import News from './pages/news'
import LoginPage from './pages/login'
import LogoutPage from './pages/logout'
import CreateNews from './pages/createNews'
import UserContext from './context' 

class Navigation extends Component 
{
	static contextType = UserContext

	render(){
		return(
			<Switch>
				<Route path="/" exact component={Home} activeClassName="activeNav"/>
				<Route path="/news" component={News} activeClassName="activeNav"/>
				<Route path="/create-news" component={CreateNews}/>
				<Route path="/login" component={LoginPage}/>
				<Route path="/logout" component={LogoutPage}/>
			</Switch>
		)
	}
	
}

export default Navigation