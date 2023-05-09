async function getWeather(location) {
    try {
    let response = await fetch(`https://api.weatherapi.com/v1/current.json?key=92f555c514464e9ba1b20137230805&q=${location}`, {mode: "cors"})
    let newData = await response.json();
       
    return newData;

    } catch (error) {alert(error)}
};




console.log(getWeather("honolulu"))