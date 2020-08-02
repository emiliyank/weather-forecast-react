import React, {Component} from 'react'
import styles from './index.module.css'

const ForecastTableDay = ({day, degrees, degreesMin, icon}) => {
	return(
		<div className={styles["forecast"]}>
			<div className={styles["forecast-header"]}>
				<div className={styles["day"]}>{day}</div>
			</div>
			<div className={styles["forecast-content"]}>
				<div className={styles["forecast-icon"]}>
					<img src={icon} alt="" width="48" />
				</div>
				<div className={styles["degree"]}>{degrees}<sup>o</sup>C</div>
				<small>{degreesMin}<sup>o</sup></small>
			</div>
		</div>
	)
} 

export default ForecastTableDay