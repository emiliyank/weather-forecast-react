import React from 'react'
import styles from './index.module.css'

const SingleNews = ({date, title, content}) => {
	return(
		<div className={styles["col-md-4"]}>
			<div className={styles["news"]}>
				<div className={styles["date"]}> {date} </div>
				<h3><a href="#">{title} </a></h3>
				<p>{content}</p>
			</div>
		</div>
	)
}

export default SingleNews