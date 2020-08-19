import React, {Component} from 'react'
import Header from '../../components/header'
import Footer from '../../components/footer'
import AppContext from '../../context' 
import styles from './index.module.css'
import cx from 'classnames'

class NewsUpdate extends Component 
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
		console.log('news update ')
		console.log(this.context)

		const newState = {}
		newState[type] = event.target.value

		this.setState(newState)
	}

	handleSubmit = async (event) => {
	    event.preventDefault()
	    
	    const { id } = this.props.match.params
	    
	    const {
	      title,
	      content
	    } = this.state

	    try{
	    	const promise = await fetch(`${this.context.backendApi}/news/update/${id}`, {
		    	method: 'PUT',
		    	body: JSON.stringify({
			        title,
			        content
			    }), 
			    headers: {
			    	'Content-Type': 'application/json',
			    }
			})
			const response = await promise.json()

			if(promise.status == 200 || promise.status == 201){
				this.props.history.push('/news')
			} else {
				const newState = {}
				newState['errors'] = JSON.stringify(response)
		    	
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

	fetchNews = async (id) => {
	  const promise = await fetch(`${this.context.backendApi}/news/${id}`)
	  const news = await promise.json()
	  console.log('fetchNews()')
	  console.log(promise)
	  console.log(news)
	  return news
	}

	getNews = async (id) => {
		const singleNews = await this.fetchNews(id)
		console.log('getNews()')
		console.log(singleNews.news)


		this.setState({
	      	title: singleNews.news.title,
			content: singleNews.news.content
	    })
	}
	
	componentDidMount(){
		const { id } = this.props.match.params
		this.getNews(id)

	    document.title = "Weather Forecasts App - Update News"
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
				    	
				    	Edit News
				    	<form onSubmit={this.handleSubmit}>
				    		<p>
				    			<input type="text" name="title" onChange={(e) => this.handleChange(e, 'title')} value={this.state.title} id="title" />
				    		</p>
				    		<p>
				    			<textarea  name="content" onChange={(e) => this.handleChange(e, 'content')} value={this.state.content} id="content">
				    				
				    			</textarea>
				    		</p>
				    		<p>
				    			<input type="submit" name="Update" value="Update"/>
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

export default NewsUpdate