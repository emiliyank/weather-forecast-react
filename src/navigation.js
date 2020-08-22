import React, {Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import Home from './pages/home'
import News from './pages/news'
import SingleNews from './pages/singleNews'
import NewsUpdate from './pages/newsUpdate'
import NewsDelete from './pages/newsDelete'
import LoginPage from './pages/login'
import RegisterPage from './pages/register'
import LogoutPage from './pages/logout'
import CreateNews from './pages/createNews'
import AppContext from './context' 

class Navigation extends Component 
{
	static contextType = AppContext

	render(){
		const loggedIn = this.context.loggedIn
		return(
			<Switch>
				<Route path="/" exact component={Home} activeClassName="activeNav"/>
				<Route path="/news" component={News} />
				<Route path="/singlenews/:id" component={SingleNews} />
				<Route path="/updatenews/:id" component={NewsUpdate} />
				<Route path="/deletenews/:id" component={NewsDelete} />

				<Route path="/create-news" component={CreateNews} />

				<Route path="/login" component={LoginPage}/>
				<Route path="/register" component={RegisterPage}/>
				<Route path="/logout" component={LogoutPage}/>
			</Switch>
		)
	}
	
}

export default Navigation