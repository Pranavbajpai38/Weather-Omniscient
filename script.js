let weather = {
    apikey:"6a2862a74dd957479db7dbb98f84e0c3",
    fetchweather:function(city)
    {
        fetch("https://api.openweathermap.org/data/2.5/weather?q="
        + city
        + "&units=metric&appid="
        + this.apikey)
    .then((response)=>response.json())
    .then((data)=>{this.displayweather(data)})
    },
    displayweather: function (data)
    {
        const{name}=data;
        const{icon,description}= data.weather[0]
        const{temp,humidity}=data.main
        const{speed}=data.wind
        document.querySelector('.city').innerHTML="Weather in "+ name;
        document.querySelector('.icon').src="https://openweathermap.org/img/wn/"+icon+".png";
        document.querySelector('.description').innerHTML=description;
        document.querySelector('.temp').innerHTML=Math.round(temp)+"°C";
        document.querySelector('.humidity').innerHTML="humidity : "+humidity+"%";
        document.querySelector('.wind').innerHTML="Wind speed : "+speed+" km/h";
   

    },
    search:function()
    {
        
        this.fetchweather(document.querySelector('.search-bar').value);
        
       
    }

}
weather.fetchweather('New delhi');

document.querySelector('.search button').addEventListener('click',function()
{
  weather.search();
})
document.querySelector('.search-bar').addEventListener('keyup', function(e)
{
    if (e.key=='Enter')
    {
        weather.search();
    }
})
