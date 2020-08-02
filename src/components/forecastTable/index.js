import React, {Component} from 'react'
import styles from './index.module.css'
import IconWeather3 from '../../images/icon-3.svg'
import IconWeather4 from '../../images/icon-4.svg'
import IconWeather5 from '../../images/icon-5.svg'
import IconWeather6 from '../../images/icon-6.svg'
import IconWeather7 from '../../images/icon-7.svg'
import IconWeather8 from '../../images/icon-8.svg'
import IconWeather9 from '../../images/icon-9.svg'
import ForecastTableToday from '../forecastTableToday'
import ForecastTableDay from '../forecastTableDay'

class ForecastTable extends Component
{
	render(){
		return(
			<div className={styles["forecast-table"]}>
				<div className={styles["container"]}>
					<div className={styles["forecast-container"]}>
						<ForecastTableToday />

						<ForecastTableDay day="Tuesday" degrees="23" degreesMin="18" icon={IconWeather8}/>
						<ForecastTableDay day="Wednesday" degrees="20" degreesMin="15" icon={IconWeather4}/>
						<ForecastTableDay day="Thursday" degrees="24" degreesMin="14" icon={IconWeather5}/>
						<ForecastTableDay day="Friday" degrees="23" degreesMin="10" icon={IconWeather6}/>
						<ForecastTableDay day="Saturday" degrees="25" degreesMin="19" icon={IconWeather7}/>
						<ForecastTableDay day="Sunday" degrees="28" degreesMin="22" icon={IconWeather3}/>
					</div>
				</div>
			</div>
		)
	}
}

export default ForecastTable