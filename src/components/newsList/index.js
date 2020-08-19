import React, {Component} from 'react'
import AppContext from '../../context'
import styles from './index.module.css'
import cx from 'classnames'
import NewsPost from '../newsPost'
import HotNewsSidebar from '../hotNewsSidebar'
import FeaturedImage1 from '../../images/featured-image-1.jpg'
import FeaturedImage2 from '../../images/featured-image-2.jpg'
import FeaturedImage3 from '../../images/featured-image-3.jpg'

class NewsList extends Component
{
	constructor(props) {
    	super(props)

    	this.state = {
	      newsList: []
	    }
  	}
  	static contextType = AppContext

	fetchNews = async () => {
	    //Fetch all news
	    const promise = await fetch(`${this.context.backendApi}/news`, {
			    method: 'GET',
			    headers: {
			    	'Content-Type': 'application/json'
			    }
			})
      	const allNews = await promise.json()

	    this.setState({
	      newsList: allNews.all_news.map((news, index) => (
	      	<NewsPost
	      		key={index}
				title={news.title}
				author={news.author}
				date={news.created_at}
				image={FeaturedImage3}
				content={news.content}
				id={news.id}
				showMore={true}
			/>
	      ))
	    })
	}

	componentDidMount(){
		this.fetchNews()
	}

	render(){
		return(
			<div className={styles["fullwidth-block"]}>
				<div className={styles["container"]}>
					<div className={styles["row"]}>
						<div className={cx(styles["content"], styles["col-md-8"])}>
							{this.state.newsList}
						</div>
						<HotNewsSidebar count={5}/>
					</div>
				</div>
			</div>
		)
	}
}

export default NewsList