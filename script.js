function restcountry(){



const res=fetch("https://restcountries.com/v2/all");

res.then((data)=>data.json()).then((data1)=>{
  const container = document.createElement('div');
  container.className = 'container';
  const header=document.createElement("h1");
  header.innerHTML="Restcountries & Weather using fetch API";
  header.id="title";
  header.className="text-center";
  document.body.append(header);
for(var i=0;i<data1.length;i++){
  if (i % 3 === 0) {
    var row = document.createElement('div');
    row.className = 'row';
  }
  
  const colLG4 = document.createElement('div');
  colLG4.className = 'col-lg-4 col-sm-12';
 let countryName=data1[i].name; 

colLG4.innerHTML=`<div class="card m-5" ">
<div class="card-header text-center" >

<h3 id="title" >${data1[i].name}</h3>
  <img src="${data1[i].flag}" class="card-img-top" alt="flag img"> 
   <div class="card-body text-center" style="padding-top:5px;">
  <h6 class="card-title">Capital : ${data1[i].subregion}</h6>
  <h6 class="card-title">Region : ${data1[i].region}</h6>
  <h6 class="card-title">Latlng : ${data1[i].latlng}</h6>
<h6 class="card-title">Country Code : ${data1[i].alpha3Code}</h6>

<button class="btn btn-primary" onclick="getWeather('${countryName}')" >Click for Weather</button>
</div>
</div>
</div>`


row.appendChild(colLG4);

if (i === data1.length - 1 || (i + 1) % 3 === 0) {
container.appendChild(row);
}
}
document.body.appendChild(container);

});
}
function getWeather(cn) {
  
  const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cn}&appid=fb2569a5c16b608a0c03be3d3c1560e7`;


  fetch(weatherUrl)
    .then((response) => response.json())
    .then((data) => {
      
            alert(`            Current Humidity  💧💧  ${data.main.humidity}
             Current Pressure  📶🌪️  ${data.main.pressure}
             Current temp      🥵🥵  ${data.main.temp}
             Current climate   🌦️🌦️  ${data.weather[0].description}`)
      
    })
    .catch((error) => {
      console.error("Error fetching weather data: " + error);
    });
}


document.addEventListener("click",(event)=>event.preventDefault());

restcountry();












// function getWeather(latt,long) {
 
//   const weatherUrl = fetch("https://api.openweathermap.org/data/2.5/weather?lat=latt&lon=long&appid=fb2569a5c16b608a0c03be3d3c1560e7")
//     .then((response) => response.json())
//     .then((data) => {
//       // Handle the weather data here and display it on your page
//       console.log(data);
//     })
//     .catch((error) => {
//       console.error('Error fetching weather data:', error);
//     });
// }
















// function weather(){
//   const wea=fetch("https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=fb2569a5c16b608a0c03be3d3c1560e7")
// console.log(wea);
// }
// wea.then((response)=>response.json() (console.log(wea)))
// console.log(wea);
  
// }



//https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}

//fb2569a5c16b608a0c03be3d3c1560e7
//fb2569a5c16b608a0c03be3d3c1560e7

// https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}

 // td.style="width: 20rem; height: 20rem; background-color: darkgray;" ;
// var bk=document.createElement("br");
// document.body.append(data1[i].name,bk);
// let div=document.createElement("div");
// div.style.width="17rem";
// // div.className="row col-lg-4 col-sm-12";
// div.className="card m-5";


// if(((i+1)%3==0)){
  
//   document.body.appendChild(td);
//  var br= document.createElement("br");
//  document.body.append(br);
// }
// }

// colLG4.textContent = 'Column for large screens (col-lg-4)';
  
  // const colSM12 = document.createElement('div');
  // colSM12.className = 'col-sm-12';
  // colSM12.textContent = 'Column for small screens (col-sm-12)';
 
  // const card = document.createElement('div');
  // card.className = 'card m-3'; 
 


  // const row = document.createElement('div');
  // row.className = 'row';

// colLG4.appendChild(card);
// colSM12.appendChild(card);
// Append columns to the row


// row.appendChild(colSM12);






