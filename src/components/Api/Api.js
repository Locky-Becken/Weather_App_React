
let store = {"coord":{"lon":-43.21,"lat":-22.9},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"base":"stations","main":{"temp":25.78,"feels_like":29.24,"temp_min":24,"temp_max":28,"pressure":1018,"humidity":78},"visibility":10000,"wind":{"speed":1.5,"deg":30},"clouds":{"all":0},"dt":1601040907,"sys":{"type":1,"id":8429,"country":"BR","sunrise":1601023135,"sunset":1601066986},"timezone":-10800,"id":3451190,"name":"Rio de Janeiro","cod":200}

export const getCity = async (city) => {
    try {
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${city},br&units=metric&appid=573f9a99528d6cdf92517d5265dea16c` 
        const response = await fetch( url, {mode: 'cors'})
        const weatherInfo = await response.json()  
        return store = weatherInfo
    } catch (err) {
        return store 
    }
}

export const getInfo = () => {
    return store
}


    
    

