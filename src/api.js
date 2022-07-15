const geoApiOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '6d7efd3c7bmsh551dc404ca833c9p15ad1cjsn2ff476655c03',
		'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
	}
};

export const getCities = (inputValue) => {
  return fetch(`https://wft-geo-db.p.rapidapi.com/v1/geo/cities?minPopulation=1000000&namePrefix=${inputValue}`, geoApiOptions)
	.then(response => response.json())
	.then(response => {
        return {
            options: response.data.map((city)=>{
                return {
                    value: `${city.latitude} ${city.longitude}`,
                    label: `${city.name}, ${city.countryCode}`
                }
            })
        }
    })
	.catch(err => console.error(err));
}
