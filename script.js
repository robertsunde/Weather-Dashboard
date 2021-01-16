$(document).ready(function(){


//wire up search button to pull city from ajax call for general search
$(".search").on("click",


function searchCity(data){      
event.preventDefault()
var searchbar = $(".searchInput").val()
console.log(searchbar)
weatherPull(searchbar)
$(".todayWeather").empty();

// forecastPull(searchbar)
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
var city = $("<h2>").text(response.name)    
var todayTemp = $("<h1>").text(response.main.temp + " " + "F")
var todayHumidity = $("<h6>").text("Humidity: " + response.main.humidity + "%")
    
// var todayTempConverted = "Temperature" + todayTemp + "F"

$(".todayWeather").prepend(city, todayTemp, todayHumidity)

var cityName = $("<h2>").text(response.name)
$(".lastSearch").prepend(cityName)

    

// add next function here for 5 day weather same as before

// function forecastPull(searchbar) {
//     $.ajax({
//     url: "http://api.openweathermap.org/data/2.5/forecast?q=" + searchbar + "&appid=80f453ffaaff3c7ad14e0dd13df083a0",
//     method: "GET"
//     }).then(function (response){
//     console.log(response)

// })}






































})}



})
