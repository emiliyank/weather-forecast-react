import React from 'react'
import styles from './index.module.css'
import cx from 'classnames'
import 'font-awesome/css/font-awesome.min.css'

const Footer = () => {
	return(
		<footer className={styles["site-footer"]}>
			<div className={styles["container"]}>
				<div className={styles["row"]}>
					<div className={styles["col-md-8"]}>
						<form action="#" className={styles["subscribe-form"]}>
							<input type="text" placeholder="Enter your email to subscribe..." />
							<input type="submit" value="Subscribe" />
						</form>
					</div>
					<div className={cx(styles["col-md-3"], styles["col-md-offset-1"])}>
						<div className={styles["social-links"]}>
							<a href="#"><i className="fa fa-facebook"></i></a>
							<a href="#"><i className="fa fa-twitter"></i></a>
							<a href="#"><i className="fa fa-pinterest"></i></a>
						</div>
					</div>
				</div>

				<p className={styles["colophon"]}>Copyright 2014 Weather forecasts with React. Designed by Themezy. All rights reserved</p>
			</div>
		</footer>
	)
}

export default Footer