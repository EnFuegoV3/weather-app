const main = document.querySelector('main');
const header = document.querySelector('h1');
const cityName = document.querySelector('#city-name');
const submit = document.querySelector('#submit');
const temp = document.querySelector('#temp');
const conditions = document.querySelector('#conditions');
const humidity = document.querySelector('#humidity');
const wind = document.querySelector('#wind');
const tempChange = document.querySelector("#toggle");

async function getWeather(location) {
    try {
    let response = await fetch(`https://api.weatherapi.com/v1/current.json?key=92f555c514464e9ba1b20137230805&q=${location}`, {mode: "cors"});
    let newData = await response.json();
    console.log(newData)
    if(newData.error) {
        alert(newData.error.message);
    } else {
        main.classList.remove('hidden');
        header.textContent = newData.location.name + ", " + newData.location.region;
        temp.textContent = newData.current.temp_f + "\u00B0";
        conditions.textContent = "\r\n" + newData.current.condition.text;
        conditions.style.backgroundImage = `url(${newData.current.condition.icon})`;
        humidity.textContent = newData.current.humidity + "%";
        wind.textContent = newData.current.wind_dir + "\r\n"; 
        wind.textContent += newData.current.wind_mph + "mph";
        tempChange.addEventListener('change', (e) => {
            if (e.target.checked) {
                temp.textContent = newData.current.temp_c + "\u00B0";
            } else {
                temp.textContent = newData.current.temp_f + "\u00B0";
            }
        });
    }

    } catch (error) {alert(error)}
};

// async function surfReport(location) {
//     try {
//     let response = await fetch(`https://api.weatherapi.com/v1/marine.json?key=92f555c514464e9ba1b20137230805&q=${location}`, {mode: "cors"})
//     let newReport = await response.json();
//     // console.log(response)
//     console.log(newReport)
//     // console.log(newData.current.condition.text)
//     if(newData.error) {
//         alert(newReport.error.message);
//     } else {
        
//     }

//     } catch (error) {alert(error)}
// };


submit.addEventListener('click', (e) => {
    e.preventDefault();
    getWeather(cityName.value);
    // surfReport(cityName.value)
});







