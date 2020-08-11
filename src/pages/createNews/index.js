import React, {Component} from 'react'
import Header from '../../components/header'
import Footer from '../../components/footer'
import styles from './index.module.css'
import cx from 'classnames'

class CreateNews extends Component
{
	constructor(props) {
		super(props)

		this.state = {
			title: "",
			content: "",
			errors: ""
		}
		console.log(document.cookie)
	}

	handleChange = (event, type) => {
		const newState = {}
		newState[type] = event.target.value

		this.setState(newState)
	}

	handleSubmit = async (event) => {
	    event.preventDefault()

	    const {
	      title,
	      content
	    } = this.state

	    try{
	    	const promise = await fetch('http://localhost:8000/api/news/store', {
		    	method: 'POST',
		    	body: JSON.stringify({
			        title,
			        content
			    }), 
			    headers: {
			    	'Content-Type': 'application/json',
			    	'Authorization': 'bearer Djibri' 
			    }
			})
			console.log(promise)


			const response = await promise.json()
			const authToken = response.token
			document.cookie = `x-auth-token=${authToken}`

			if(promise.status == 200 || promise.status == 201){
				this.props.history.push('/news')
			} else {
				const newState = {}
				newState['errors'] = 'Грешка при попълване на формата!'
		    	
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
				    	
				    	Add News
				    	<form onSubmit={this.handleSubmit}>
				    		<p>
				    			<input type="text" name="title" onChange={(e) => this.handleChange(e, 'title')} placeholder="Title" id="title" />
				    		</p>
				    		<p>
				    			<textarea  name="content" onChange={(e) => this.handleChange(e, 'content')} placeholder="Content" id="content">
				    				
				    			</textarea>
				    		</p>
				    		<p>
				    			<input type="submit" name="Save" value="Save"/>
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

export default CreateNews
