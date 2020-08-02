import React, {Component} from 'react'
import styles from './index.module.css'
import cx from 'classnames'
import IconUmbrella from '../../images/icon-umberella.png'
import IconWind from '../../images/icon-wind.png'
import IconCompass from '../../images/icon-compass.png'
import IconWeather1 from '../../images/icon-1.svg'

class ForecastTableToday extends Component
{
	constructor(props) {
    	super(props)

    	this.state = {
	      forecast: []
	    }
  	}

	getForecast = async () => {
		//TODO: fetch location (by IP) instead of hardcoding 51097
      //Daily forecast.
      // const promise = await fetch('http://dataservice.accuweather.com/forecasts/v1/daily/1day/51097?apikey=BOqlnuPBUcz9Kiv0LF4dezXCbnlAYogU&language=en-us&details=false&metric=true')
      // const forecastResponse = await promise.json()
      const forecastResponse = {
			  "Headline": {
			    "EffectiveDate": "2020-08-05T08:00:00+03:00",
			    "EffectiveEpochDate": 1596603600,
			    "Severity": 5,
			    "Text": "сряда: Гръмотевични бури",
			    "Category": "thunderstorm",
			    "EndDate": "2020-08-05T20:00:00+03:00",
			    "EndEpochDate": 1596646800,
			    "MobileLink": "http://m.accuweather.com/bg/bg/sofia/51097/extended-weather-forecast/51097?unit=c",
			    "Link": "http://www.accuweather.com/bg/bg/sofia/51097/daily-weather-forecast/51097?unit=c"
			  },
			  "DailyForecasts": [
			    {
			      "Date": "2020-08-02T07:00:00+03:00",
			      "EpochDate": 1596340800,
			      "Temperature": {
			        "Minimum": {
			          "Value": 12,
			          "Unit": "C",
			          "UnitType": 17
			        },
			        "Maximum": {
			          "Value": 25.8,
			          "Unit": "C",
			          "UnitType": 17
			        }
			      },
			      "Day": {
			        "Icon": 1,
			        "IconPhrase": "Слънчево",
			        "HasPrecipitation": false
			      },
			      "Night": {
			        "Icon": 34,
			        "IconPhrase": "Предимно ясно",
			        "HasPrecipitation": false
			      },
			      "Sources": [
			        "AccuWeather"
			      ],
			      "MobileLink": "http://m.accuweather.com/bg/bg/sofia/51097/daily-weather-forecast/51097?day=1&unit=c",
			      "Link": "http://www.accuweather.com/bg/bg/sofia/51097/daily-weather-forecast/51097?day=1&unit=c"
			    }
			  ]
			}

     //  console.log(forecastResponse.DailyForecasts[0].Date)
	    // console.log(forecastResponse)
	    this.setState({
	      forecast: forecastResponse
	    })
	}

	printDate = () => {
		console.log(this.state.forecast.DailyForecasts)
		if(this.state.forecast.DailyForecasts){
			let date = new Date(this.state.forecast.DailyForecasts[0].Date)
			let month = date.getMonth() + 1
			return date.getDate() + '.' + month + '.' + date.getFullYear()
		}
	}

	getWeekDay = () => {
		let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

		if(this.state.forecast.DailyForecasts){
			let date = new Date(this.state.forecast.DailyForecasts[0].Date)
			return days[date.getDay()]
		}
	}

	getMaxTemp = () => {
		if(this.state.forecast.DailyForecasts){
			return this.state.forecast.DailyForecasts[0].Temperature.Maximum.Value
		} 
	}

	componentDidMount() {
  		this.getForecast()
	}

	render(){
		return(
			<div className={cx(styles["today"], styles["forecast"])}>
				<div className={styles["forecast-header"]}>
					<div className={styles["day"]}>{this.getWeekDay()}</div>
					<div className={styles["date"]}>{this.printDate()}</div>
				</div>
				<div className={styles["forecast-content"]}>
					<div className={styles["location"]}>Sofia</div>
					<div className={styles["degree"]}>
						<div className={styles["num"]}>{this.getMaxTemp()}<sup>o</sup>C</div>
						<div className={styles["forecast-icon"]}>
							<img src={IconWeather1} alt="" width="90"/>
						</div>	
					</div>
					<span><img src={IconUmbrella} alt="" />20%</span>
					<span><img src={IconWind} alt="" />18km/h</span>
					<span><img src={IconCompass} alt="" />East</span>
				</div>
			</div>
		)
	}
}

export default ForecastTableToday