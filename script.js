$(document).ready(function(){


//wire up search button to pull city from ajax call for general search
$(".search").on("click", 
function searchCity(data){
event.preventDefault()
var searchbar = $(".searchInput").val()
console.log(searchbar)
console.log("hello")
weatherPull(searchbar)
forecastPull(searchbar)
})

function weatherPull(searchbar) {
    $.ajax({
    url: "http://api.openweathermap.org/data/2.5/weather?q=" + searchbar + "&appid=80f453ffaaff3c7ad14e0dd13df083a0",
    method: "GET"
    }).then(function (response){
    console.log(response)

var city = $("<h2>").text(response.name)    
var todayTemp = $("<h6>").addClass("todaystyle").text(response.main.temp)

$(".todayWeather").append(city, todayTemp)
})}


// add next function here for 5 day weather same as before

function forecastPull(searchbar) {
    $.ajax({
    url: "http://api.openweathermap.org/data/2.5/forecast?q=" + searchbar + "&appid=80f453ffaaff3c7ad14e0dd13df083a0",
    method: "GET"
    }).then(function (response){
    console.log(response)




})}


})



