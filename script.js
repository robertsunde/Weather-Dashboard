$(document).ready(function(){


//wire up search button to pull city from ajax call for general search
$("#destinationSearch").on("click", function(){
var searchbar = $("#textInput").val().trim()
console.log(searchbar)

mainWeatherPull(searchbar)

var recentSearches = [];
recentSearches.push($("recentSearches"))
})



// first ajax call with weather variables (temp humidity windspeed uvindex) for today's weather
function mainWeatherPull (searchbar){

console.log(searchbar)

$.ajax({
url:"https://openweathermap.org/api" + searchbar + "api key from website",
method:"GET"
}).then(function(dataPull){
console.log(dataPull)
})
}





// second ajax call for five day weather forecast























    
})