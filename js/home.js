getLocation();


// function search(){
//     let location=document.getElementById("inputSearchTxt").value;
//     alert(location);
//     serchLocation(location);
// }

document.getElementById("btn-search").addEventListener("click",(e)=>{
    e.preventDefault();
    let location=$("#inputSearchTxt").val();
    // alert(location);
    console.log(location);
    serchLocation(location);
})
let icon=$("#icon");
let cloud=$("#cloud");
let temp=$("#tempText");
let city=$("#city");
let humidity =$("#humiditytxt");
let wind=$("#windtxtt");
let province=$("#province");
let tdyImg=$("#tdyImg");
let tdyC=$("#tdyC");
let tdyF=$("#tdyF");
let tdywind=$("#tdyWind");
let country=$("#country");


function serchLocation(location){
  


    $.ajax({
        method : "GET",
        url :`https://api.weatherapi.com/v1/current.json?key=123d678a6bd74c81b3f165334230110&q=${location}`,
        success :(data)=>{
            //console.log(data);
            icon.attr("src",data.current.condition.icon);
            temp.text(data.current.temp_c+"°C");
            city.text(data.location.name);
            humidity.text(data.current.humidity+" %");
            wind.text(data.current.wind_kph+"  KP/H");
            cloud.text(data.current.condition.text);
            province.text(data.location.region);
            tdyImg.attr("src",data.current.condition.icon);
            tdyC.text(data.current.temp_c+"°C");
            tdyF.text(data.current.temp_f+"°C");
            tdywind.text(data.current.wind_kph+"  KP/H");
            country.text(data.location.tz_id);
        }
    })
}

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.watchPosition(showPosition);
  } else {
    // x.innerHTML = "Geolocation is not supported by this browser.";
  }
}
function showPosition(position) {
    let lon = position.coords.longitude;
    let lat = position.coords.latitude;
    serchLocation(lat+","+lon);
}