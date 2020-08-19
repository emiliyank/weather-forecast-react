import React, { useCallback, useEffect, useMemo, useContext } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import UserContext from '../../context'


const NewsDelete = () => {
	const params = useParams()
	const context = useContext(UserContext)
	const history = useHistory()

  	const deleteNews = async (id) => {
	  const promise = await fetch(`http://localhost:8000/api/news/delete/${id}`,
	  	 	{
		    	method: 'DELETE',
			})

	  history.push('/news')
	}

	useEffect(() => {
	 	deleteNews(params.id)
	})

	return (<></>)
}

export default NewsDelete
