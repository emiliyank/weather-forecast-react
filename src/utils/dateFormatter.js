const dateFormatter = (date, isFullDate = false) => {
	const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
	  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
	];

	const getDayOfDate = (date) => {
		let d = new Date(date)
		return d.getDate()
	}

	const getMonthOfDate = (date) => {
		let d = new Date(date)
		return monthNames[d.getMonth()]
	}

	const getYearOfDate = (date) => {
		let d = new Date(date)
		return d.getFullYear()
	}

	let formattedDate = getDayOfDate(date) + '-' + getMonthOfDate(date)
	if(isFullDate){
		formattedDate += '-' + getYearOfDate(date)
	}

	return formattedDate
}

export default dateFormatter
