let dateToday=document.getElementById("date-today");

let today =new Date();


let day=`${today.getDate() < 10 ? "0" : ""}${today.getDate()}`;
let month=`${(today.getMonth()+1) < 10 ? "0" : ""}${today.getMonth() + 1}`;
let year =today.getFullYear();


dateToday.textContent = `${day}/${month}/${year}`;