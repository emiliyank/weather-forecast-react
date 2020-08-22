import React, {Component} from 'react'
import Header from '../../components/header'
import Footer from '../../components/footer'
import AppContext from '../../context' 
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
	}

	static contextType = AppContext

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

	    let author_id = null
	    if(this.context.user){
	    	author_id = this.context.user.id
	    }

	    //front-end validatoin
	    let newState = {}
	    if(title.length < 1 || content.length < 1){
	    	this.setState({errors: "Front-end validation fails! Title and content cannot be empty!"})
	    	return
	    }

	    try{
	    	const promise = await fetch(`${this.context.backendApi}/news/store`, {
		    	method: 'POST',
		    	body: JSON.stringify({
			        title,
			        content,
			        author_id
			    }), 
			    headers: {
			    	'Content-Type': 'application/json'
			    }
			})
			const response = await promise.json()

			if(promise.status == 200 || promise.status == 201){
				this.props.history.push('/news')
			} else {
				newState['errors'] = JSON.stringify(response)
		    	this.setState(newState)
			}
	    } catch(e) {
	    	console.log(e)
	    	newState['errors'] = e
	    	this.setState(newState)
	    }
	}

	componentDidMount(){
	    document.title = "Weather Forecasts App - Create News"
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
