import React, { useState, useContext, useEffect } from 'react'
import { useHistory } from "react-router-dom"
import Header from '../../components/header'
import Footer from '../../components/footer'
import AppContext from '../../context'
import styles from './index.module.css'
import cx from 'classnames'

const RegisterPage = () => {
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
  	const [password, setPassword] = useState('')
  	const [passwordConfirmation, setPasswordConfirmation] = useState('')
  	const [errors, setErrors] = useState('')

  	const context = useContext(AppContext)
  	const history = useHistory()

	const handleSubmit = async (event) => {
	    event.preventDefault()

	    //front-end validation
	    if(name < 3 || email < 6 || password < 6){
	    	setErrors("Front-end validation failed! Name must be at least 3 symbols, email and password must be at least 6 symbold!")
	    	return
	    }

	    try{
	    	const promise = await fetch(`${context.backendApi}/register`, {
		    	method: 'POST',
		    	body: JSON.stringify({
		    		name,
			        email,
			        password,
			        password_confirmation: passwordConfirmation
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
					'user_id': response.user.id,
					'user_email': response.user.email,
					'usernames': response.user.name 
				}
				context.logIn(user)
				history.push('/')
			} else {
				setErrors(JSON.stringify(response))
			}
	    } catch(e) {
	    	console.log('Error ', e)
	    }
	}

	useEffect(() => {
	    document.title = `Weather Forecasts App - Register`;
	});

	return (
	  <div className={styles["site-content"]}>
	  	<Header />

	  	<div className={styles["fullwidth-block"]}>
			<div className={styles["container"]}>
				<div className={styles["row"]}>
			    	<div className={cx(styles["errors"], styles["col-md-4"])}>
						{errors}
					</div>

			    	Register Form
			    	<form onSubmit={handleSubmit}>
			    		<p>
			    			<input type="text" name="name" onChange={e => setName(e.target.value)} placeholder="Name" id="name" />
			    		</p>
			    		<p>
			    			<input type="text" name="email" onChange={e => setEmail(e.target.value)} placeholder="Email" id="email" />
			    		</p>
			    		<p>
			    			<input type="password" name="password" onChange={e => setPassword(e.target.value)} placeholder="Password" id="password" />
			    		</p>
			    		<p>
			    			<input type="password" name="password_confirmation" onChange={e => setPasswordConfirmation(e.target.value)} placeholder="Password Confirmation" id="password_confirmation" />
			    		</p>
			    		<p>
			    			<input type="submit" name="Register" value="Register"/>
			    		</p>
			    	</form>
			    </div>
			</div>
		</div>

	  	<Footer />
	  </div>
	)
}

export default RegisterPage
