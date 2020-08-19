import React from 'react'
import styles from './index.module.css'

const SingleNews = ({date, title, content, id}) => {
	const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
	  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
	];

	const getDayOfDate = (date) => {
		let d = new Date(date)
		return d.getDate()
	}

	const getMonthOfDate = (date) => {
		let d = new Date(date)
		return monthNames[d.getMonth()]
	}

	return(
		<div className={styles["col-md-4"]}>
			<div className={styles["news"]}>
				<div className={styles["date"]}> {getDayOfDate(date)}-{getMonthOfDate(date)} </div>
				<h3><a href="#">{title} </a></h3>
				<p>{content}</p>
			</div>
		</div>
	)
}

export default SingleNews