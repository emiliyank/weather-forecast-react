import React from 'react'

const AppContext = React.createContext({
	backendApi: 'http://localhost:8000/api',
	
	loggedIn: false,
	user: null,
	logIn: () => {},
	logOur: () => {}
})

export default AppContext