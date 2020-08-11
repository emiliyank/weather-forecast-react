import React, {Component} from 'react'
import Header from '../../components/header'
import NewsList from '../../components/newsList'
import Footer from '../../components/footer'
import './index.module.css'


class News extends Component
{
	componentDidMount(){
	    document.title = "Weather Forecasts App - News"
	}

	render(){
	  return (
	    <div className="site-content">
	    	<Header />
	    	<NewsList />
	    	<Footer />
	    </div>
	  )
	}
}

export default News
