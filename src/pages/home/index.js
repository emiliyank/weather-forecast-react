import React, {Component} from 'react'
import Header from '../../components/header'
import FindLocation from '../../components/findLocation'
import ForecastTable from '../../components/forecastTable'
import Forecast from '../../components/forecast'
import NewsSection from '../../components/newsSection'
import FeaturesSection from '../../components/featuresSection'
import Footer from '../../components/footer'
import UserContext from '../../context' 
import './index.module.css'


class Home extends Component
{
	componentDidMount(){
	    document.title = "Weather Forecasts App"
	}

	static contextType = UserContext

	render(){		
	  return (
	    <div className="site-content">
	    	<Header />
	    	<FindLocation />
	    	<ForecastTable />
	    	<NewsSection />
	    	<FeaturesSection />
	    	<Footer />
	    </div>
	  )
	}
}

export default Home
