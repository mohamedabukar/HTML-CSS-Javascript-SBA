const userSearch = localStorage.getItem("search")

const apiKey = "5d1b3f150d64e1e1cd5a4bedbf160469";


//function storeInput was made so that the api could be used with the input of the user to get the desired city
function storeInput(cityName) {
    const apiUrlcitySearch = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + apiKey;
    fetch(apiUrlcitySearch)
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            console.log(data)
            var dt = data.dt;
            var date = new Date(dt * 1000).toLocaleDateString();
            $(".city-nme").text(data.name);
            $(".date").text(date);
            $(".tempEl").text("Temp: " + (((data.main.temp - 273.15) * 9 / 5) + 32).toFixed(2) + "F");
            $(".humidityEl").text("Humiditiy: " + data.main.humidity + "%");
            $(".windEl").text("Wind speed: " + (data.wind.speed) + " mph");
            var lat = data.coord.lat
            var lon = data.coord.lon
            fiveDay(lat, lon);
        })

}
//event listener is so the user input can be ran into the storeinput function
$(".btn").on("click", function (event) {
    var cityName = event.target.value;
    storeInput(cityName);
})

//this function is for the display of the next five days of weather in the city the user inputed
function fiveDay(lat, lon) {
    var fiveDayUrl = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&appid=" + apiKey;
    fetch(fiveDayUrl)
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            console.log(data);
            for (var i = 1; i < 6; i++) {
                var dt = data.daily[i].dt;
                var date = new Date(dt * 1000).toLocaleDateString("en-US");
                var weatherForecastHtml = `
                    <div class="col-2 day">
                    <h2 class="date">${date}</h2>
                    <p class="temp">Temp: ${(((data.daily[i].temp.day - 273.15) * 9 / 5) + 32).toFixed(2)}F</p>
                    <p class="humidity">Humidity: ${data.daily[i].humidity}%</p>
                    <p class="wind">Wind: ${data.daily[i].wind_speed} MPH</p>
                </div>
                `
                $(".Days").append(weatherForecastHtml);

            }
        })

}


//event listener is for getting popular cities data
$(".searchBtn").on("click", function () {
    let x = $("#city-name").val()
    storeInput(x);

})