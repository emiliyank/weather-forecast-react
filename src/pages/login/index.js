import React, {Component} from 'react'
import Header from '../../components/header'
import Footer from '../../components/footer'
import styles from './index.module.css'
import cx from 'classnames'
import AppContext from '../../context' 

class LoginPage extends Component
{
	constructor(props) {
		super(props)

		this.state = {
			email: "",
			password: "",
			errors: ""
		}
	}

	static contextType = AppContext

	handleChange = (event, type) => {
		const loginState = {}
		loginState[type] = event.target.value

		this.setState(loginState)
	}

	handleSubmit = async (event) => {
	    event.preventDefault()

	    const {
	      email,
	      password
	    } = this.state
	    const loginState = {}

	    //front-end validation
	    if(email.length < 6 || password.length < 6){
	    	loginState['errors'] = "Front-end validation failed! Email and password should be at least 6 symbols long!"
	    	this.setState(loginState)
	    	return
	    }

	    try{
	    	const promise = await fetch(`${this.context.backendApi}/login`, {
		    	method: 'POST',
		    	body: JSON.stringify({
			        email,
			        password
			    }), 
			    headers: {
			    	'Content-Type': 'application/json'
			    }
			})

			const response = await promise.json()
			const authToken = response.token
			
			document.cookie = `x-auth-token=${authToken}`

			if(authToken){
				const user = {
					'id': response.user_id,
					'email': response.user_email,
					'name': response.usernames 
				}
				this.context.logIn(user)
				this.props.history.push('/')
			} else {
				if(response.message == 'Unauthorized'){
					loginState['errors'] = "Wrong user and/or password!"
				} else {
					loginState['errors'] = JSON.stringify(response.message)
				}
		    	
		    	this.setState(loginState)
			}
	    } catch(e) {
	    	console.log(e)
	    	const loginState = {}
	    	loginState['errors'] = e
	    	this.setState(loginState)
	    }
	}

	componentDidMount(){
	    document.title = "Weather Forecasts App - Login"
	}

	render(){
	  return (
	    <div className="site-content">
	    	<Header />
	    	<div className={styles["fullwidth-block"]}>
				<div className={styles["container"]}>
					<div className={styles["row"]}>
						<div className={cx(styles["errors"], styles["col-md-4"])}>
							{this.state.errors}
						</div>
				    	
				    	Login Form
				    	<form onSubmit={this.handleSubmit}>
				    		<p>
				    			<input type="text" name="email" onChange={(e) => this.handleChange(e, 'email')} placeholder="Email" id="email" />
				    		</p>
				    		<p>
				    			<input type="password" name="password" onChange={(e) => this.handleChange(e, 'password')} placeholder="Password" id="password" />
				    		</p>
				    		<p>
				    			<input type="submit" name="Login" value="Login"/>
				    		</p>
				    	</form>
				    </div>
				</div>
			</div>
	    	<Footer />
	    </div>
	  )
	}
}

export default LoginPage
