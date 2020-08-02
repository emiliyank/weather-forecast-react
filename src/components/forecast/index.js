import React, { Component }  from 'react'

class Forecast extends Component {
	constructor(props) {
    	super(props)

    	this.state = {
	      forecast: []
	    }
  	}

  	

  	getForecast = async () => {
	    //Simple City Search: const promise = await fetch('http://dataservice.accuweather.com/locations/v1/cities/search?apikey=BOqlnuPBUcz9Kiv0LF4dezXCbnlAYogU&q=Sofia')
	    //IP Address
      //const promise = await fetch('http://dataservice.accuweather.com/locations/v1/cities/ipaddress?apikey=BOqlnuPBUcz9Kiv0LF4dezXCbnlAYogU&q=77.76.140.130')
      //const forecastResponse = await promise.json()
      const forecastResponse = {
              "Version": 1,
              "Key": "51097",
              "Type": "City",
              "Rank": 20,
              "LocalizedName": "Sofia",
              "EnglishName": "Sofia",
              "PrimaryPostalCode": "",
              "Region": {
                "ID": "EUR",
                "LocalizedName": "Europe",
                "EnglishName": "Europe"
              },
              "Country": {
                "ID": "BG",
                "LocalizedName": "Bulgaria",
                "EnglishName": "Bulgaria"
              },
              "AdministrativeArea": {
                "ID": "22",
                "LocalizedName": "Sofia City",
                "EnglishName": "Sofia City",
                "Level": 1,
                "LocalizedType": "District",
                "EnglishType": "District",
                "CountryID": "BG"
              },
              "TimeZone": {
                "Code": "EEST",
                "Name": "Europe/Sofia",
                "GmtOffset": 3,
                "IsDaylightSaving": true,
                "NextOffsetChange": "2020-10-25T01:00:00Z"
              },
              "GeoPosition": {
                "Latitude": 42.686,
                "Longitude": 23.337,
                "Elevation": {
                  "Metric": {
                    "Value": 565,
                    "Unit": "m",
                    "UnitType": 5
                  },
                  "Imperial": {
                    "Value": 1853,
                    "Unit": "ft",
                    "UnitType": 0
                  }
                }
              },
              "IsAlias": false,
              "SupplementalAdminAreas": [],
              "DataSets": [
                "AirQualityCurrentConditions",
                "AirQualityForecasts",
                "Alerts",
                "ForecastConfidence",
                "FutureRadar",
                "MinuteCast",
                "Radar"
              ]
            }
      console.log(forecastResponse.Key)
	    console.log(forecastResponse)
	    this.setState({
	      forecast: forecastResponse
	    })
	  }

  	componentDidMount() {
  		this.getForecast()
	}

  	render() {
  		return (
  			<div> 
  				Forecast: 
  			</div>
  		)
  	}
}

export default Forecast