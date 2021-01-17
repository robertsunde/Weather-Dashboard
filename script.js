$(document).ready(function main () {



    //shows correct dates for each of 6 days shown
    $(".currentDate").text(moment().format("dddd, MMMM Do"));
    $(".currentDatePlus1").text(moment().add(1, 'days').format("dddd, MMMM Do"));
    $(".currentDatePlus2").text(moment().add(2, 'days').format("dddd, MMMM Do"));
    $(".currentDatePlus3").text(moment().add(3, 'days').format("dddd, MMMM Do"));
    $(".currentDatePlus4").text(moment().add(4, 'days').format("dddd, MMMM Do"));
    $(".currentDatePlus5").text(moment().add(5, 'days').format("dddd, MMMM Do"));


    // search button
    $(".search").on("click",


        function searchCity(data) {
            event.preventDefault()
            var searchbar = $(".searchInput").val()
            console.log(searchbar)
            weatherPull(searchbar)
            forecastPull(searchbar)


            // clears all api pulls on new search button click
            $(".todayWeather").empty();
            $(".tomorrow").empty();
            $(".tomorrowPlus1").empty();
            $(".tomorrowPlus2").empty();
            $(".tomorrowPlus3").empty();
            $(".tomorrowPlus4").empty();
// 




// 
            // first api pull for today's weather
            function weatherPull(searchbar) {
                $.ajax({
                    url: "http://api.openweathermap.org/data/2.5/weather?q=" + searchbar + "&appid=80f453ffaaff3c7ad14e0dd13df083a0&units=imperial",
                    method: "GET"
                }).then(function (response) {
                    console.log(response)



                    // adds pulled data into html document under todayWeather class
                    var city = $("<h1>").text(response.name)
                    var todayTemp = $("<h2>").text(response.main.temp + " " + "F")
                    var todayHumidity = $("<h6>").text("Humidity: " + response.main.humidity + "%")
                    var UVindex = $("<span>").addClass("font").text("UV Index: 1.2")
                    var windSpeed = $("<h6>").text("Wind Speed: " + response.wind.speed)


                    //creates stack up of pulled data underneath searched city
                    $(".todayWeather").prepend(city, todayTemp, todayHumidity, windSpeed, UVindex)

                    // variable and if/else commands to utilize icons for weather changes
                    var weatherType = (response.weather[0].main)
                    console.log(weatherType)

                    if (weatherType == "Clouds") {
                        $(".todayWeather").addClass("fas fa-cloud fa-3x")
                    }

                    else if (weatherType === "Thunderstorm") {
                        $(".todayWeather").addClass("fas fa-bolt fa-3x")
                    }

                    else if (weatherType === "Drizzle") {
                        $(".todayWeather").addClass("fas fa-cloud-rain fa-3x")
                    }

                    else if (weatherType === "Rain") {
                        $(".todayWeather").addClass("fas fa-cloud-showers-heavy fa-3x")
                    }

                    else if (weatherType === "Snow") {
                        $(".todayWeather").addClass("fas fa-snowflake fa-3x")
                    }

                    else if (weatherType === "Clear") {
                        $(".todayWeather").addClass("fas fa-circle fa-3x")
                    }

                    else {
                        $(".todayWeather").addClass("fas fa-sun fa-3x")
                    }

                    var cityName = $("<h2>").addClass("searchSave" + (response.name)).text(response.name)
                    $(".lastSearch").prepend(cityName)
                    localStorage.setItem("City", response.name)

// 





// $(".lastSearch").on("click", function(){
// weatherPull($(".searchSaveDetroit"));

// })

// 
                })
            }





            // second api pull for 5-day forecast

            function forecastPull(searchbar) {
                $.ajax({
                    url: "http://api.openweathermap.org/data/2.5/forecast?q=" + searchbar + "&appid=80f453ffaaff3c7ad14e0dd13df083a0&units=imperial",
                    method: "GET"
                }).then(function (response) {
                    console.log(response)
                    $(".tomorrow").empty();
                    // Displays Day 1 Weather
                    var todayTemp1 = $("<h1>").text(response.list[0].main.temp + " " + "F")
                    var todayHumidity1 = $("<h6>").text("Humidity: " + response.list[0].main.humidity + "%")

                    $(".tomorrow").append(todayTemp1, todayHumidity1)


                    // variable and if/else commands to utilize icons for weather changes
                    var weatherType1 = (response.list[0].weather[0].main)
                    console.log(weatherType1)

                    if (weatherType1 == "Clouds") {
                        $(".tomorrow").addClass("fas fa-cloud fa-3x")
                    }

                    else if (weatherType1 === "Thunderstorm") {
                        $(".tomorrow").addClass("fas fa-bolt fa-3x")
                    }

                    else if (weatherType1 === "Drizzle") {
                        $(".tomorrow").addClass("fas fa-cloud-rain fa-3x")
                    }

                    else if (weatherType1 === "Rain") {
                        $(".tomorrow").addClass("fas fa-cloud-showers-heavy fa-3x")
                    }

                    else if (weatherType1 === "Snow") {
                        $(".tomorrow").addClass("fas fa-snowflake fa-3x")
                    }

                    else if (weatherType1 === "Clear") {
                        $(".tomorrow").addClass("fas fa-circle fa-3x")
                    }

                    else {
                        $(".tomorrow").addClass("fas fa-sun fa-3x")
                    }

                    // Displays Day 2 weather
                    var todayTemp2 = $("<h1>").text(response.list[1].main.temp + " " + "F")
                    var todayHumidity2 = $("<h6>").text("Humidity: " + response.list[1].main.humidity + "%")
                    $(".tomorrowPlus1").empty();
                    $(".tomorrowPlus1").append(todayTemp2, todayHumidity2)

                    // variable and if/else commands to utilize icons for weather changes
                    var weatherType2 = (response.list[1].weather[0].main)
                    console.log(weatherType2)

                    if (weatherType2 == "Clouds") {
                        $(".tomorrowPlus1").addClass("fas fa-cloud fa-3x")
                    }

                    else if (weatherType2 === "Thunderstorm") {
                        $(".tomorrowPlus1").addClass("fas fa-bolt fa-3x")
                    }

                    else if (weatherType2 === "Drizzle") {
                        $(".tomorrowPlus1").addClass("fas fa-cloud-rain fa-3x")
                    }

                    else if (weatherType2 === "Rain") {
                        $(".tomorrowPlus1").addClass("fas fa-cloud-showers-heavy fa-3x")
                    }

                    else if (weatherType2 === "Snow") {
                        $(".tomorrowPlus1").addClass("fas fa-snowflake fa-3x")
                    }

                    else if (weatherType2 === "Clear") {
                        $(".tomorrowPlus1").addClass("fas fa-circle fa-3x")
                    }

                    else {
                        $(".tomorrowPlus1").addClass("fas fa-sun fa-3x")
                    }

                    // Displays Day 3 weather
                    var todayTemp3 = $("<h1>").text(response.list[2].main.temp + " " + "F")
                    var todayHumidity3 = $("<h6>").text("Humidity: " + response.list[2].main.humidity + "%")
                    $(".tomorrowPlus2").empty();
                    $(".tomorrowPlus2").append(todayTemp3, todayHumidity3)

                    // variable and if/else commands to utilize icons for weather changes
                    var weatherType3 = (response.list[2].weather[0].main)
                    console.log(weatherType3)

                    if (weatherType3 == "Clouds") {
                        $(".tomorrowPlus2").addClass("fas fa-cloud fa-3x")
                    }

                    else if (weatherType3 === "Thunderstorm") {
                        $(".tomorrowPlus2").addClass("fas fa-bolt fa-3x")
                    }

                    else if (weatherType3 === "Drizzle") {
                        $(".tomorrowPlus2").addClass("fas fa-cloud-rain fa-3x")
                    }

                    else if (weatherType3 === "Rain") {
                        $(".tomorrowPlus2").addClass("fas fa-cloud-showers-heavy fa-3x")
                    }

                    else if (weatherType3 === "Snow") {
                        $(".tomorrowPlus2").addClass("fas fa-snowflake fa-3x")
                    }

                    else if (weatherType3 === "Clear") {
                        $(".tomorrowPlus2").addClass("fas fa-circle fa-3x")
                    }

                    else {
                        $(".tomorrowPlus2").addClass("fas fa-sun fa-3x")
                    }

                    // Displays Day 4 weather
                    var todayTemp4 = $("<h1>").text(response.list[3].main.temp + " " + "F")
                    var todayHumidity4 = $("<h6>").text("Humidity: " + response.list[3].main.humidity + "%")
                    $(".tomorrowPlus3").empty();
                    $(".tomorrowPlus3").append(todayTemp4, todayHumidity4)

                    // variable and if/else commands to utilize icons for weather changes
                    var weatherType4 = (response.list[3].weather[0].main)
                    console.log(weatherType4)

                    if (weatherType4 == "Clouds") {
                        $(".tomorrowPlus3").addClass("fas fa-cloud fa-3x")
                    }

                    else if (weatherType4 === "Thunderstorm") {
                        $(".tomorrowPlus3").addClass("fas fa-bolt fa-3x")
                    }

                    else if (weatherType4 === "Drizzle") {
                        $(".tomorrowPlus3").addClass("fas fa-cloud-rain fa-3x")
                    }

                    else if (weatherType4 === "Rain") {
                        $(".tomorrowPlus3").addClass("fas fa-cloud-showers-heavy fa-3x")
                    }

                    else if (weatherType4 === "Snow") {
                        $(".tomorrowPlus3").addClass("fas fa-snowflake fa-3x")
                    }

                    else if (weatherType4 === "Clear") {
                        $(".tomorrowPlus3").addClass("fas fa-circle fa-3x")
                    }

                    else {
                        $(".tomorrowPlus3").addClass("fas fa-sun fa-3x")
                    }

                    //  Displays Day 5 weather
                    var todayTemp5 = $("<h1>").text(response.list[4].main.temp + " " + "F")
                    var todayHumidity5 = $("<h6>").text("Humidity: " + response.list[4].main.humidity + "%")
                    $(".tomorrowPlus4").empty();
                    $(".tomorrowPlus4").append(todayTemp5, todayHumidity5)

                    // variable and if/else commands to utilize icons for weather changes
                    var weatherType5 = (response.list[4].weather[0].main)
                    console.log(weatherType5)

                    if (weatherType5 == "Clouds") {
                        $(".tomorrowPlus4").addClass("fas fa-cloud fa-3x")
                    }

                    else if (weatherType5 === "Thunderstorm") {
                        $(".tomorrowPlus4").addClass("fas fa-bolt fa-3x")
                    }

                    else if (weatherType5 === "Drizzle") {
                        $(".tomorrowPlus4").addClass("fas fa-cloud-rain fa-3x")
                    }

                    else if (weatherType5 === "Rain") {
                        $(".tomorrowPlus4").addClass("fas fa-cloud-showers-heavy fa-3x")
                    }

                    else if (weatherType5 === "Snow") {
                        $(".tomorrowPlus4").addClass("fas fa-snowflake fa-3x")
                    }

                    else if (weatherType5 === "Clear") {
                        $(".tomorrowPlus4").addClass("fas fa-circle fa-3x")
                    }

                    else {
                        $(".tomorrowPlus4").addClass("fas fa-sun fa-3x")
                    }


                    

                })
            }

        }

    )
})









