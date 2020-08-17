import React, {Component} from 'react'
import UserContext from '../../context' 

class LogoutPage extends Component
{
	static contextType = UserContext

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
