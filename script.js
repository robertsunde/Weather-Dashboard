$(document).ready(function(){

var searchHistory = [];

//wire up search button to pull city from ajax call for general search
$(".search").on("click", 

function searchCity(data){
var searchbar = $(".searchInput").val()
console.log(searchbar)

// mainWeatherPull(searchbar)

searchHistory.push($(".searchInput").val())

$(".searchInput").val("");
$(".recentSearches").text("");

$.each(searchHistory, function (index, value) {
    $(".recentSearches").append("<li class='cityName' onclick='addCity("+index+")'>" + value +  '</li>');
});

function addCity(id) {
$(".searchInput").val(searchHistory[id]);














}
}
)




})


// first ajax call with weather variables (temp humidity windspeed uvindex) for today's weather
// function mainWeatherPull (searchbar){

// console.log(searchbar)

// $.ajax({
// url:"https://openweathermap.org/api" + searchbar + "889e002b8fmsh68a55d24a31d654p1e691ajsn4b5a65ae9eb2",
// method:"GET"
// }).then(function(dataPull){
// console.log(dataPull)
// })
// }





// second ajax call for five day weather forecast























    
