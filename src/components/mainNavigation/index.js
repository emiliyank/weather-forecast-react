import React from 'react'
import styles from './index.module.css'
import cx from 'classnames'

const mainNavigation = () => {
	return(
		<div>
			<div className={styles["main-navigation"]}>
				<button type="button" className={styles["menu-toggle"]}><i className={styles["fa fa-bars"]}></i></button>
				<ul className={styles["menu"]}>
					<li className={cx(styles["menu-item"], styles["current-menu-item"])}><a href="#">Home</a></li>
					<li className={styles["menu-item"]}><a href="#">News</a></li>
				</ul>
			</div>

			<div className="mobile-navigation"></div>
		</div>
	)
}

export default mainNavigation