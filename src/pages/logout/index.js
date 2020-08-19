import React, {Component} from 'react'
import AppContext from '../../context' 

class LogoutPage extends Component
{
	static contextType = AppContext

	logOut = () => {
		this.context.logOut()
		this.props.history.push('/')
	}

	componentDidMount(){
	   this.logOut()
	}

	render(){
	  return (<></>)
	}
}

export default LogoutPage
