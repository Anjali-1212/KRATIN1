let api="029c92bf32f169fd511c3e1d6e4a3487";
getData();
async function getData(){
   
    let city = 'Nagpur';
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}`;
    
   let res= await fetch(url);
   
   let data = await res.json();
    append(data);
   console.log(data);
}


function append(data){
  console.log(data)
    let city = 'Nagpur';
    let container = document.getElementById("conten");
    container.innerHTML =null;
    let h3 =document.createElement("h3");
    h3.innerText=`City: ${data.name}`;

    let p1 =document.createElement("p");
    p1.innerText =`Current Temp: ${data.main.temp}K`;

    let p2 =document.createElement("p");
    p2.innerText =`Max Temp: ${data.main.temp_max}K`;

    let p3 =document.createElement("p");
    p3.innerText =`Min Temp: ${data.main.temp_min}K`;

    let p4 =document.createElement("p");
    p4.innerText =`Wind Speed: ${data.wind.speed}`;

    let p5 =document.createElement("p");
    p5.innerText =`Clouds:☁️ ${data.clouds.all}`;

    container.append(h3,p1,p2,p3,p4,p5);

};


function getLocation() {

  navigator.geolocation.getCurrentPosition(success);

  function success(pos) {
    const crd = pos.coords;

    console.log("Your Current Position is:");
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
    console.log(`More or Less ${crd.accuracy} Meters.`);
    getWhetherOnLocation(crd.latitude, crd.longitude);
  }
}


 async function getWhetherOnLocation(lat,lon){
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=029c92bf32f169fd511c3e1d6e4a3487`;

    let res= await fetch(url);
    let data = await res.json();
    append(data);
    console.log(data);
 }