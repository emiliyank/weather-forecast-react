import React, { useState, useContext, useCallback, useEffect, useMemo }  from 'react'
import AppContext from '../../context'
import styles from './index.module.css'
import SingleNews from '../singleNews'

const NewsSection = (props) => {
	const [newsList, setNewsList] = useState([])
	const context = useContext(AppContext)
  		
  	const fetchNews = async (count) => {
	  const promise = await fetch(`${context.backendApi}/news/list/${count}`)
	  const news = await promise.json()
	  return news
	}

  	const getNews = useCallback(async () => {
	   const newsList = await fetchNews(props.count)
	    setNewsList(newsList)
	}, [props.count])

	const renderNews = useMemo(() => {
		if(typeof newsList != "undefined" && newsList.news && newsList.news.length > 0){
			return newsList.news.map((oneNews, index) => {
			    return (
			      <SingleNews
			      	key={index}
			    	date={oneNews.created_at}
					title={oneNews.title}
					content={oneNews.author ? oneNews.author.name : 'няма'}
					id={oneNews.id}
				  />
			    )
			  })
		} else if (newsList.news && newsList.news.length <= 0) {
			console.log('we are supposed to be here!')
			return (
				<div> 
					No News Yet! You can <a href="/register"> Register </a> and add news to the site! 
				</div>
				)
		} else {
			return <div> Loading... </div>
		}
	  
	}, [newsList])

	useEffect(() => {
	  getNews()
	}, [props.updatedNews, getNews])

	return (
		<div className={styles["fullwidth-block"]}>
			<div className={styles["container"]}>
				<div className={styles["row"]}>
					{renderNews}
				</div>
			</div>
		</div>

	)
}

export default NewsSection