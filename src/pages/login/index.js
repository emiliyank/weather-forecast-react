import React, {Component} from 'react'
import Header from '../../components/header'
import Footer from '../../components/footer'
import styles from './index.module.css'
import cx from 'classnames'

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

	handleChange = (event, type) => {
		const newState = {}
		newState[type] = event.target.value

		this.setState(newState)
	}

	handleSubmit = async (event) => {
	    event.preventDefault()

	    const {
	      email,
	      password
	    } = this.state

	    try{
	    	const promise = await fetch('http://localhost:8000/api/login', {
		    	method: 'POST',
		    	body: JSON.stringify({
			        email,
			        password
			    }), 
			    headers: {
			    	'Content-Type': 'application/json'
			    }
			})
			console.log(promise)


			const response = await promise.json()
			const authToken = response.token
			document.cookie = `x-auth-token=${authToken}`

			if(authToken){
				this.props.history.push('/')
			} else {
				const newState = {}
				if(response.message == 'Unauthorized'){
					newState['errors'] = "Грешен потребител и/или парола!"
				} else {
					newState['errors'] = JSON.stringify(response.message)
				}
		    	
		    	this.setState(newState)
		    	console.log(this.state)
			}
	    } catch(e) {
	    	console.log(e)
	    	const newState = {}
	    	newState['errors'] = e
	    	this.setState(newState)
	    	console.log(this.state)
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
