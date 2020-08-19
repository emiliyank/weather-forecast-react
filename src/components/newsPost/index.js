import React, {useContext} from 'react'
import styles from './index.module.css'
import AppContext from '../../context' 

const NewsPost = ({title, author, date, image, content, id, showMore}) => {
	const context = useContext(AppContext)

	const generateLink = (id) => {
		return '/singlenews/' + id
	}

	const generateUpdateLink = (id) => {
		return '/updatenews/' + id
	}

	const generateDeleteLink = (id) => {
		return '/deletenews/' + id
	}

	let logged_user_id = null
	if(context.user){
		logged_user_id = context.user.id
	}

	if(showMore){
		if(author && author.id == logged_user_id){
			return (
				<div className={styles["post"]}>
					<h2 className={styles["entry-title"]}>{title}</h2>
					<div className={styles["entry-subheader"]}>
						<span> Автор:  {author ? author.name : 'няма'} </span>
						<span className={styles["entry-date"]}> Дата: {date.toString()} </span> 
					</div>
					<div className={styles["featured-image"]}><img src={image} alt="broker image" /></div>
					<p> {content} </p>
					<a href={generateLink(id)} className={styles["button"]}>Read more</a>
					<a href={generateUpdateLink(id)} className={styles["update-button"]}> Update </a>
					<a href={generateDeleteLink(id)} className={styles["delete-button"]}> Delete </a>
				</div>
			)
		} else {
			return(
				<div className={styles["post"]}>
					<h2 className={styles["entry-title"]}>{title}</h2>
					<div className={styles["entry-subheader"]}>
						<span> Автор:  {author ? author.name : 'няма'} </span>
						<span className={styles["entry-date"]}> Дата: {date.toString()} </span> 
					</div>
					<div className={styles["featured-image"]}><img src={image} alt="broker image" /></div>
					<p> {content} </p>
					<a href={generateLink(id)} className={styles["button"]}>Read more</a>
				</div>
			)
		}
	} else {
		return(
			<div className={styles["post"]}>
				<h2 className={styles["entry-title"]}>{title}</h2>
				<div className={styles["entry-subheader"]}>
					<span> Автор: {author} </span>
					<span className={styles["entry-date"]}> Дата: {date.toString()} </span> 
				</div>
				<div className={styles["featured-image"]}><img src={image} alt="broker image" /></div>
				<p> {content} </p>
			</div>
		)
	}
	
}

export default NewsPost