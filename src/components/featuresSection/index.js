import React from 'react'
import styles from './index.module.css'

const FeaturesSection = () => {
	return(
		<div className={styles["fullwidth-block"]}>
			<div className={styles["container"]}>
				<div className={styles["row"]}>
					<div className={styles["col-md-4"]}>
						<h2 className={styles["section-title"]}>Cool features</h2>
					</div>
					<div className={styles["col-md-4"]}>
						<h2 className={styles["section-title"]}>Weather analyssis</h2>
					</div>
					<div className={styles["col-md-4"]}>
						<h2 className={styles["section-title"]}>All free</h2>
					</div>
				</div>
			</div>
		</div>
	)
}

export default FeaturesSection