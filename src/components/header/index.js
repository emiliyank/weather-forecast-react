import React from 'react'
import HeaderLogo from '../headerLogo'
import MainNavigation from '../mainNavigation'
import styles from './index.module.css'

const Header = () => {
	return(
		<div className={styles["site-header"]}>
			<div className={styles["container"]}>
				<HeaderLogo />
				<MainNavigation />
			</div>
		</div>
	)
}

export default Header