import React from 'react'

const UserContext = React.createContext({
	loggedIn: false,
	user: null,
	logIn: () => {},
	logOur: () => {}
})

export default UserContext