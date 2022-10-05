// declaration section
let name;
const videoArray = ['Nature.mp4','Rainy.mp4','Sheet.mp4','Snowflakes.mp4','Summer.mp4','Sunrise.mp4'];
const apiKey='8c88d8c6dff2e7dd93338bd93db8a4e2';
const input = document.getElementById('input');
const video = document.getElementById('video');
const celcius = document.getElementById('celcius');
const foreign = document.getElementById('foreign');
const details = document.getElementById('details');
const button = document.getElementById('btn-search');
const climate = document.getElementById('climate');
// const body = document.getElementByClassName('middle-tire');
function getDetails(name){
    let url = `http://api.weatherstack.com/current?access_key=${apiKey}&query=${name}`;
    let  data = fetch(url).then(response => response.json()).then(data => {
        console.log(data);
        if(data['success']==false)
        alert(data['error'].info)
        else{
            let detailsOfcity = `<p>name :${data['location'].name}</p><p>latitude :${data['location'].lat}</p><p>longitude :${data['location'].lon}</p><p>localtime :${data['location'].localtime}</p>`
            // locationName.innerHTML = data['location'].name;
            // latitude.innerHTML = data['location'].lat;
            // longitude.innerHTML = data['location'].lon;
            // time.innerHTML = data['location'].localtime;
            const temperature=data['current'].temperature;
            if(temperature<=20)
            video.src=videoArray[3];
            else if(temperature>20 && temperature<=27)
            video.src=videoArray[0];
            else if(temperature>27 && temperature<=33)
            video.src=videoArray[2];
            else if(temperature>33 && temperature<=37)
            video.src=videoArray[1];
            else
            video.src=videoArray[4];
            details.innerHTML = detailsOfcity;
            // body.style.display = 'block';
            climate.innerHTML = data['current'].weather_descriptions[0];
            celcius.innerHTML = `${data['current'].temperature}<sup>o</sup>c`;
            foreign.innerHTML = `${((data['current'].temperature)*1.8)+32}<sup>o</sup>f`;
        }
        input.value="";
    })
}
input.addEventListener('keypress',function(e){
    if(e.key=='Enter')
    inputTaken();
})
button.addEventListener('click', function(){inputTaken()});
function inputTaken(){
    name = input.value;
    console.log(name);
    getDetails(name);
}

