const apiKey = '1c4c3f6256c31a0017b5f004440f5caf';

const getWeather = async (city) => {
    return await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`)
 
    .then((res) => res.json())
    .then((json) => {
        return json;
    })
}

export default getWeather;