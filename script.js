async function getWeather(){

let city=document.getElementById("cityInput").value;

let url=`http://api.weatherapi.com/v1/forecast.json?key=cf31daade6954c7d98951828261403&q=${city}&days=7&aqi=yes`;

let res=await fetch(url);

let data=await res.json();

/* current weather */

document.getElementById("city").innerText=data.location.name;

document.getElementById("temp").innerText=data.current.temp_c+"°C";

document.getElementById("condition").innerText=data.current.condition.text;

document.getElementById("icon").src=data.current.condition.icon;


/* hourly forecast */

let hours=data.forecast.forecastday[0].hour;

let hourlyHTML="";

for(let i=0;i<6;i++){

hourlyHTML+=`

<div class="hour">

<p>${hours[i].time.split(" ")[1]}</p>

<img src="${hours[i].condition.icon}">

<p>${hours[i].temp_c}°</p>

</div>

`;

}

document.getElementById("hourlyData").innerHTML=hourlyHTML;


/* 7 day forecast */

let days=data.forecast.forecastday;

let forecastHTML="";

days.forEach(day=>{

forecastHTML+=`

<div class="forecast-item">

<p>${day.date}</p>

<img src="${day.day.condition.icon}">

<p>${day.day.maxtemp_c}° / ${day.day.mintemp_c}°</p>

</div>

`;

});

document.getElementById("forecastData").innerHTML=forecastHTML;

}