import React from 'react'

const AppContext = React.createContext({
	backendApi: 'http://inveit280.voyager.icnhost.net/learning/weather-news/public/api',
	
	loggedIn: false,
	user: null,
	logIn: () => {},
	logOur: () => {}
})

export default AppContext