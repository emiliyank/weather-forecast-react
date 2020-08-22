import React from 'react'
import styles from './index.module.css'

const newsLinks = ({showMore, author, logged_user_id, id}) => {
	const generateLink = (id) => {
		return '/singlenews/' + id
	}

	const generateUpdateLink = (id) => {
		return '/updatenews/' + id
	}

	const generateDeleteLink = (id) => {
		return '/deletenews/' + id
	}

	if(showMore){
		if(author && author.id == logged_user_id){
			return (
				<div>
					<a href={generateLink(id)} className={styles["button"]}>Read more</a>
					<a href={generateUpdateLink(id)} className={styles["update-button"]}> Update </a>
					<a href={generateDeleteLink(id)} className={styles["delete-button"]}> Delete </a>
				</div>
			)
		} else {
			return (
				<a href={generateLink(id)} className={styles["button"]}>Read more</a>
			)
		}
	} else {
		return (<></>)
	}
}

export default newsLinks