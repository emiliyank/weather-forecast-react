import React from 'react'
import styles from './index.module.css'
import bannerImage from '../../images/banner.png'

const findLocation = () => {
	return(
		<div className={styles["hero"]} data-bg-image={bannerImage}>
			<div className={styles["container"]}>
				<form action="#" className={styles["find-location"]}>
					<input type="text" placeholder="Find your location..."/>
					<input type="submit" value="Find"/>
				</form>
			</div>
		</div>
	)
}

export default findLocation