import React from 'react'
import styles from './index.module.css'

const NewsPost = ({title, author, date, image, content, link}) => {
	return(
		<div className={styles["post"]}>
			<h2 className={styles["entry-title"]}>{title}</h2>
			<div className={styles["entry-subheader"]}>
				<span> Автор: {author} </span>
				<span className={styles["entry-date"]}> Дата: {date.toString()} </span> 
			</div>
			<div className={styles["featured-image"]}><img src={image} alt="broker image" /></div>
			<p> {content} </p>
			<a href={link} className={styles["button"]}>Read more</a>
		</div>
	)
}

export default NewsPost