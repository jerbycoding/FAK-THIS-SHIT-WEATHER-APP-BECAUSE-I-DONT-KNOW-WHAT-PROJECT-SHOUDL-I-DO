const humidity = document.getElementById('data-humidity');
const temp = document.getElementById('temp');
const wind_speed = document.getElementById('data-wind-speed');
const country = document.getElementById('location');  
const weather_pic = document.getElementById('weather-pic');
const weather_input = document.getElementById('input_country');
const weather_submit = document.getElementById('submit_country');
const footer = document.getElementsByClassName('weather-data-footer');
const content = document.getElementsByClassName('weather-content');
content[0].style.display='none';
footer[0].style.display ='none';
async function weather(Country){
  content[0].style.display='block';
  footer[0].style.display ='flex';
  const API_KEY = "f396986e82ca157311f04f633d41f36c";
  const API = `https://api.openweathermap.org/data/2.5/weather?q=${Country}&appid=${API_KEY}`;
  const response = await fetch(API);
  if(response.ok){
    const data = await response.json();
    humidity.innerText = data.main.humidity +'%';
    console.log(humidity.innerText)
    wind_speed.innerText = data.wind.speed +'km/h'
    temp.innerText = Math.round(data.main.temp - 273.15) + 'C*';
    country.innerText = data.name
    if(data.weather[0].main == 'Clouds'){
      weather_pic.src = './clouds.png';
    }
    else if(data.weather[0].main == 'Clear'){
      weather_pic.src = './clear.png';
    }
    else if(data.weather[0].main == 'Rain'){
      weather_pic.src = './rain.png'
    }else if(data.weather[0].main =='Drizzle'){
      weather_pic.src='./rain.dizzle.png'
    }
    console.log(data.weather[0].main)
  }else {
    return;
  }

 
}

weather_submit.onclick = ()=>{
  weather(weather_input.value)
 
  
}
console.log("DONT SEARCH ANYTHING WHERE CONTINENT HAVEA SNOW, SEARCH KALANG SA PILIPINS UNGGOY");
