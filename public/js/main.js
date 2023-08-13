const searchBtn = document.querySelector("#search-btn");
const cityName = document.querySelector("#cityName");
const outputCity =document.querySelector(".outputCity");
const temp =document.querySelector(".temp");
const tempStat = document.querySelector(".temp-stat");
const getDate = document.querySelector("#date");
const getDay = document.querySelector("#day");
const getMonth = document.querySelector("#month");

const APIkey ="9346f4b0a1e63e1a7e764e91804624bf";


window.addEventListener("DOMContentLoaded", () => {
    tempStat.classList.add("hide-content");
  });


const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];


const d = new Date();
let mon = month[d.getUTCMonth()];
let day = weekday[d.getUTCDay()];
let date = d.getDate();

getDate.innerText=date;
getDay.innerText=day;
getMonth.innerText = mon;

// console.log( day , mon ,date);



const getInfo = async(event) =>{
    event.preventDefault();
    let cityVal = cityName.value;
    
    if(cityVal === ""){
        outputCity.innerText = `Please enter valid cityname`;
        tempStat.classList.add("hide-content");
    }
    else{
        try {
            let url =`https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=${APIkey}`;
            const res = await fetch(url);
            const data = await res.json();
            const arrData = [data];
            console.log(arrData);
            outputCity.innerText = `${arrData[0]?.name} , ${arrData[0]?.sys.country}`;
            temp.innerText = arrData[0]?.main?.temp; 
            tempStat.classList.remove("hide-content");
            
        } catch (error) {
            outputCity.innerText = `Please enter valid city`;
            tempStat.classList.add("hide-content");
        }
        
    }   

}

searchBtn.addEventListener("click",getInfo);