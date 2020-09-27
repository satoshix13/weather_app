window.addEventListener("load", loadedPage)


function loadedPage(){
  let weatherForm = document.querySelector("#weather")
  if(weatherForm){
    weatherForm.addEventListener("submit", handleWeatherForm)
  }
}

function handleWeatherForm(e){
  e.preventDefault()
  let input = document.querySelector("#weather input")
  let cityName = document.querySelector(".location")
  cityName.innerText = input.value

  
  getWeatherData(input.value)
  
}

async function getWeatherData(city){
    let url = "https://api.openweathermap.org/data/2.5/weather?q="+city+"&units=metric&appid=3c958106ab8608bd8f689b422b367bd4"
    try{
      let request = await fetch(url)
      let response = await request.json()
      let temperatura = document.querySelector(".temp-value")
      let humidity = document.querySelector(".humidity")
      let wind = document.querySelector(".wind-speed")
  
      temperatura.innerText = response.main.temp
      humidity.innerText = response.main.humidity
      wind.innerText = response.wind.speed
  
    }
    catch{
      alert("Upps, please check spelling")
    }
  }




