import React, { useCallback, useEffect, useMemo, useContext } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import AppContext from '../../context'


const NewsDelete = () => {
	const params = useParams()
	const context = useContext(AppContext)
	const history = useHistory()

  	const deleteNews = async (id) => {
	  const promise = await fetch(`${context.backendApi}/news/delete/${id}`,
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
