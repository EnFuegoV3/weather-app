const main = document.querySelector('main');
const header = document.querySelector('h1');
const cityName = document.querySelector('#city-name');
const submit = document.querySelector('#submit');

async function getWeather(location) {
    try {
    let response = await fetch(`https://api.weatherapi.com/v1/current.json?key=92f555c514464e9ba1b20137230805&q=${location}`, {mode: "cors"});
    let newData = await response.json();
    // console.log(response)
    console.log(newData)
    // console.log(newData.current.condition.text)
    if(newData.error) {
        alert(newData.error.message);
    } else {
        header.textContent = newData.location.name + ", " + newData.location.region;
        // const condition = document.createElement('div');
        // condition.textContent = newData.current.condition.text;
        // main.appendChild(condition);
    }

    } catch (error) {console.log(error)}
};

async function surfReport(location) {
    try {
    let response = await fetch(`https://api.weatherapi.com/v1/marine.json?key=92f555c514464e9ba1b20137230805&q=${location}`, {mode: "cors"})
    let newReport = await response.json();
    // console.log(response)
    console.log(newReport)
    // console.log(newData.current.condition.text)
    if(newData.error) {
        alert(newReport.error.message);
    } else {
        // header.textContent = ""
        // const condition = document.createElement('div');
        // condition.textContent = newData.current.condition.text;
        // main.appendChild(condition);
    }

    } catch (error) {alert(error)}
};





submit.addEventListener('click', (e) => {
    e.preventDefault();
    getWeather(cityName.value);
    surfReport(cityName.value)
});

// getWeather("honolulu")





