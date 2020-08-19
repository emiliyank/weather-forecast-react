import React, { useState, useCallback, useEffect, useMemo }  from 'react'
import styles from './index.module.css'
import cx from 'classnames'

const HotNewsSidebar = (props) => {
	const [newsList, setNewsList] = useState([])
  		
  	const fetchNews = async (count) => {
	  const promise = await fetch(`http://localhost:8000/api/news/list/${count}`)
	  const news = await promise.json()
	  return news
	}

	const generateLink = (id) => {
		return '/singlenews/' + id
	}

  	const getNews = useCallback(async () => {
	   const newsList = await fetchNews(props.count)
	    setNewsList(newsList)
	}, [props.count])

	const renderNews = useMemo(() => {
		if(typeof newsList != "undefined" && newsList.news){
			return newsList.news.map((oneNews, index) => {
			    return (
			    	<li key={index}><a href={generateLink(oneNews.id)}>{oneNews.title}</a></li>
			    )
			  })
		} else {
			return <div> Loading... </div>
		}
	  
	}, [newsList])

	useEffect(() => {
	  getNews()
	}, [props.updatedNews, getNews])

	return(
		<div className={cx(styles["sidebar"], styles["col-md-3"], styles["col-md-offset-1"])}>
			<div className={styles["widget"]}>
				<h3 className={styles["widget-title"]}>Hot News</h3>
				<ul className={styles["arrow-list"]}>
					{renderNews}
				</ul>
			</div>
		</div>
	)
}

export default HotNewsSidebar