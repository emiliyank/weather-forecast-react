import React, { useState, useCallback, useEffect, useMemo, useContext } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../../components/header'
import NewsPost from '../../components/newsPost'
import HotNewsSidebar from '../../components/hotNewsSidebar'
import Footer from '../../components/footer'
import AppContext from '../../context'
import FeaturedImage3 from '../../images/featured-image-3.jpg'
import styles from './index.module.css'
import cx from 'classnames'

const SingleNews = (props) => {
	const [newsList, setNewsList] = useState([])
	const params = useParams()
	const context = useContext(AppContext)
  		
  	const fetchNews = async (id) => {
	  const promise = await fetch(`${context.backendApi}/news/${id}`)
	  const news = await promise.json()
	  return news
	}

  	const getNews = useCallback(async () => {
	   const newsList = await fetchNews(params.id)
	    setNewsList(newsList)
	}, [params.id])

	const renderNews = useMemo(() => {
		if(typeof newsList != "undefined" && newsList.news){
			    return (
			      <NewsPost
					title={newsList.news.title}
					author={newsList.news.author ? newsList.news.author.name : 'none'}
					date={newsList.news.created_at}
					image={FeaturedImage3}
					content={newsList.news.content}
					id={newsList.news.id}
				  />
			    )
		} else {
			return (<div> Loading... </div>)
		}
	  
	}, [newsList])

	useEffect(() => {
	  document.title = `Weather Forecasts App - SingleNews Page`;
	  getNews()
	}, [props.updatedNews, getNews])

	return(
		<div className={styles["site-content"]}>
		  	<Header />

				<div className={styles["fullwidth-block"]}>
					<div className={styles["container"]}>
						<div className={styles["row"]}>
							<div className={cx(styles["content"], styles["col-md-8"])}>
								{renderNews}
							</div>
							<HotNewsSidebar count={5}/>
						</div>
					</div>
				</div>

			<Footer />
		</div>
		)
}

export default SingleNews