$(document).ready(function(){

$(".currentDate").text(moment().format("dddd, MMMM Do"));
$(".currentDatePlus1").text(moment().add(1,'days').format("dddd, MMMM Do"));
$(".currentDatePlus2").text(moment().add(2,'days').format("dddd, MMMM Do"));
$(".currentDatePlus3").text(moment().add(3,'days').format("dddd, MMMM Do"));
$(".currentDatePlus4").text(moment().add(4,'days').format("dddd, MMMM Do"));
$(".currentDatePlus5").text(moment().add(5,'days').format("dddd, MMMM Do"));


//wire up search button to pull city from ajax call for general search
$(".search").on("click",


function searchCity(data){      
event.preventDefault()
var searchbar = $(".searchInput").val()
console.log(searchbar)
weatherPull(searchbar)
forecastPull(searchbar)
$(".todayWeather").empty();
$(".tomorrow").empty();
$(".tomorrowPlus1").empty();
$(".tomorrowPlus2").empty();
$(".tomorrowPlus3").empty();
$(".tomorrowPlus4").empty();
},
)


// function cleartodayWeather() {
//     var remove = document.getElementById("remove")
//     remove.classList.remove("todayWeather")  
// },

// function addtodayWeather() {
//     var add = document.getElementById("remove")
//     add.classList.add("todayWeather")  
// }





// first api pull for today's weather
function weatherPull(searchbar) {
    $.ajax({
    url: "http://api.openweathermap.org/data/2.5/weather?q=" + searchbar + "&appid=80f453ffaaff3c7ad14e0dd13df083a0&units=imperial",
    method: "GET"
    }).then(function (response){
    console.log(response)


    // adds pulled data into html document under todayWeather class
var city = $("<h1>").text(response.name)    
var todayTemp = $("<h2>").text(response.main.temp + " " + "F")
var todayHumidity = $("<h6>").text("Humidity: " + response.main.humidity + "%")
var UVindex = $("<h6>").text("UV Index: 1.2")
var windSpeed = $("<h6>").text("Wind Speed: " + response.wind.speed)

    
// var todayTempConverted = "Temperature" + todayTemp + "F"

$(".todayWeather").prepend(city, todayTemp, todayHumidity, windSpeed, UVindex)

var cityName = $("<h2>").text(response.name)
$(".lastSearch").prepend(cityName)

})}
   

// add next function here for 5 day weather same as before

function forecastPull(searchbar) {
    $.ajax({
    url: "http://api.openweathermap.org/data/2.5/forecast?q=" + searchbar + "&appid=80f453ffaaff3c7ad14e0dd13df083a0&units=imperial",
    method: "GET"
    }).then(function (response){
    console.log(response)

    // tomorrow weather
    var todayTemp1 = $("<h1>").text(response.list[0].main.temp + " " + "F")
    var todayHumidity1 = $("<h6>").text("Humidity: " + response.list[0].main.humidity + "%")

    $(".tomorrow").append(todayTemp1, todayHumidity1)

    // Day 2 weather
    var todayTemp2 = $("<h1>").text(response.list[1].main.temp + " " + "F")
    var todayHumidity2 = $("<h6>").text("Humidity: " + response.list[1].main.humidity + "%")

    $(".tomorrowPlus1").append(todayTemp2, todayHumidity2)

    // Day 3 weather
    var todayTemp3 = $("<h1>").text(response.list[2].main.temp + " " + "F")
    var todayHumidity3 = $("<h6>").text("Humidity: " + response.list[2].main.humidity + "%")

    $(".tomorrowPlus2").append(todayTemp3, todayHumidity3)

    // Day 4 weather
    var todayTemp4 = $("<h1>").text(response.list[3].main.temp + " " + "F")
    var todayHumidity4 = $("<h6>").text("Humidity: " + response.list[3].main.humidity + "%")

    $(".tomorrowPlus3").append(todayTemp4, todayHumidity4)

    // Day 5 weather
    var todayTemp5 = $("<h1>").text(response.list[4].main.temp + " " + "F")
    var todayHumidity5 = $("<h6>").text("Humidity: " + response.list[4].main.humidity + "%")

    $(".tomorrowPlus4").append(todayTemp5, todayHumidity5)





    })}






















})
