import React, {useContext} from 'react'
import styles from './index.module.css'
import AppContext from '../../context' 
import NewsLinks from '../newsLinks'
import dateFormatter from '../../utils/dateFormatter'

const NewsPost = ({title, author, date, image, content, id, showMore}) => {
	const context = useContext(AppContext)

	let logged_user_id = null
	if(context.user){
		logged_user_id = context.user.id
	}
	
	return(
		<div className={styles["post"]}>
			<h2 className={styles["entry-title"]}>{title}</h2>
			<div className={styles["entry-subheader"]}>
				<span> Author: {author ? author.name : 'none'} </span>
				<span className={styles["entry-date"]}> Date: {dateFormatter(date, true)} </span> 
			</div>
			<div className={styles["featured-image"]}><img src={image} alt="broker image" /></div>
			<p> {content} </p>
			<NewsLinks showMore={showMore} author={author} logged_user_id={logged_user_id} id={id} />
		</div>
	)
}

export default NewsPost