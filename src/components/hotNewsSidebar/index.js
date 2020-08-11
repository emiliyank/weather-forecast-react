import React from 'react'
import styles from './index.module.css'
import cx from 'classnames'

const HotNewsSidebar = () => {
	return(
		<div className={cx(styles["sidebar"], styles["col-md-3"], styles["col-md-offset-1"])}>
			<div className={styles["widget"]}>
				<h3 className={styles["widget-title"]}>Hot News</h3>
				<ul className={styles["arrow-list"]}>
					<li><a href="#">Accusamus dignissimos</a></li>
					<li><a href="#">Ducimus praesentium</a></li>
					<li><a href="#">Voluptatum deleniti corrupti</a></li>
					<li><a href="#">Wuos dolores excepturi sint</a></li>
					<li><a href="#">Occaecati provident dolor</a></li>
				</ul>
			</div>
		</div>
	)
}

export default HotNewsSidebar