import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import styles from './index.module.css'
import cx from 'classnames'
import AppContext from '../../context'
import getNavigationLinks from '../../utils/navigationLinks.js' 

class mainNavigation extends Component 
{
	static contextType = AppContext

	render(){
		const {
			loggedIn
		} = this.context

		const links = getNavigationLinks(loggedIn)

		return(
			<div>
				<div className={styles["main-navigation"]}>
					<button type="button" className={styles["menu-toggle"]}><i className={styles["fa fa-bars"]}></i></button>
					<ul className={styles["menu"]}>
						{
							links.map(navElement => {
								return (<li key={navElement.title} className={styles["menu-item"]}><Link to={navElement.link}>{navElement.title}</Link></li>)
							})
						}
					</ul>
				</div>

				<div className="mobile-navigation"></div>
			</div>
		)
	}
}

export default mainNavigation