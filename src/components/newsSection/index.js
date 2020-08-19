import React, { useState, useCallback, useEffect, useMemo }  from 'react'
import styles from './index.module.css'
import SingleNews from '../singleNews'

const NewsSection = (props) => {
	const [newsList, setNewsList] = useState([])
  		
  	const fetchNews = async (count) => {
	  const promise = await fetch(`http://localhost:8000/api/news/list/${count}`)
	  const news = await promise.json()
	  return news
	}

  	const getNews = useCallback(async () => {
	   const newsList = await fetchNews(props.count)
	    setNewsList(newsList)
	}, [props.count])

	const renderNews = useMemo(() => {
		if(typeof newsList != "undefined" && newsList.news){
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