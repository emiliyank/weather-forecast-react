import React from 'react'
import {Switch, Route} from 'react-router-dom'

import Home from './pages/home'
import News from './pages/news'
import LoginPage from './pages/login'
import CreateNews from './pages/createNews'

const Navigation = () => {
	return(
		<Switch>
			<Route path="/" exact component={Home} activeClassName="activeNav"/>
			<Route path="/news" component={News} activeClassName="activeNav"/>
			<Route path="/create-news" component={CreateNews}/>
			<Route path="/login" component={LoginPage}/>
		</Switch>
	)
}

export default Navigation