import React from 'react'
import styles from './index.module.css'
import LogoImage from '../../images/logo.png'

const headerLogo = () => {
	return(
		<a href="/" className={styles["branding"]}>
			<img src={LogoImage} alt="WF Logo" className={styles["logo"]}/>
			<div className={styles["logo-type"]}>
				<h1 className={styles["site-title"]}>Company name</h1>
				<div className={styles["site-description"]}>funny description here</div>
			</div>
		</a>
	)
}

export default headerLogo