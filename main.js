 

const weatherData= async()=>{
 console.log(userInput.value);
    cityName.innerHTML="--"
    dateTime.innerHTML=""
    humidity.innerHTML="--%"
    temperature.innerHTML="--°C"
    windSpeed.innerHTML="--km/h"
    weatherDescription.innerHTML="---"
   const abselutZero=273.15
//Api calling
if(userInput.value){
    const  response= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${userInput.value}&appid=ef0e59164ddbb6cf4e9ccb6706b69f76`)
    console.log(response);
    if(response.status==200){
       const weatherDetails= await response.json()
       console.log(weatherDetails);
          const kelvin=weatherDetails.main.temp
          const cels= kelvin-abselutZero
          console.log(cels);
          
         cityName.innerHTML= weatherDetails.name
         dateTime.innerHTML=new Date().toLocaleString();
         temperature.innerHTML=`${cels.toFixed(2)}°C`
         humidity.innerHTML=`${weatherDetails.main.humidity}%`
         windSpeed.innerHTML=`${weatherDetails.wind.speed}km/h`
         weatherDescription.innerHTML=weatherDetails.weather[0].description
       
    }else{
        alert("enter a valid county...")
    }
}else{
    alert("enter a conuty name...")
}

}