import React from 'react'
import styles from './index.module.css'
import SingleNews from '../singleNews'

const NewsSection = () => {
	return (
		<div className={styles["fullwidth-block"]}>
			<div className={styles["container"]}>
				<div className={styles["row"]}>
					<SingleNews date="5-Oct" title="News 1" content="lorem impsum" />
					<SingleNews date="6-Oct" title="News 2" content="lorem impsum dolores ..." />
				</div>
			</div>
		</div>

	)
}

export default NewsSection