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
let temp=$("#tempText");
let locationName=$("#locationName");
let country =$("#country");
let city = $("#city");
let humidity =$("#humiditytxt");

function serchLocation(location){
  


    $.ajax({
        method : "GET",
        url :`https://api.weatherapi.com/v1/current.json?key=123d678a6bd74c81b3f165334230110&q=${location}`,
        success :(data)=>{
            console.log(data);
            icon.attr("src",data.current.condition.icon);
            temp.text(data.current.temp_c+"°C");
            locationName.text(data.location.tz_id);
            country.text(data.location.country);
            city.text(data.location.name);

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