const getNavigationLinks = (loggedIn) => {
	const authLinks = [
		{
			title: 'Home',
			link: '/'
		},
		{
			title: 'News',
			link: '/news'
		},
		{
			title: 'Create News',
			link: '/create-news'
		},
		{
			title: 'Logout',
			link: '/logout'
		}
	]

	const guestLinks = [
		{
			title: 'Home',
			link: '/'
		},
		{
			title: 'News',
			link: '/news'
		},
		{
			title: 'Login',
			link: '/login'
		},
		{
			title: 'Register',
			link: '/register'
		},
	]

	if(loggedIn){
		return authLinks
	} else {
		return guestLinks
	}
}

export default getNavigationLinks