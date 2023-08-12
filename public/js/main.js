const submitbtn=document.getElementById("submitbtn")
const cityName=document.getElementById("cityname")
const city_Name=document.getElementById("city_name")
const temp=document.getElementById("temp")
const temp_status=document.getElementById("temp_status")
const dataHide=document.getElementsByClassName("data_hide")
const getInfo=async (event)=>{
event.preventDefault()
const cityVal=cityName.value
if(cityVal===""){
  city_Name.innerHTML="You Have Not Type Anything"
  alert("plaese enter something")
}
else{
    try{
        let url=`https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=cf1cf3556e6c3f8d5d4169117ac69786`
        const data=await fetch(url)
        const output=await data.json()
        const arr=[output]
        city_Name.innerHTML=`${(arr[0].name).toUpperCase()} ,${arr[0].sys.country} `
        temp.innerHTML=` ${arr[0].main.temp} `
        // temp_status.innerHTML=arr[0].weather[0].main
        const wheatherReport=arr[0].weather[0].main
        if(wheatherReport==="Clear"){
            temp_status.innerHTML='<i class="fa fa-sun fa-beat fa-2xl" style="color: #7b7c27;"></i>'
        }
        else if(wheatherReport==="Rain"){
            temp_status.innerHTML='<i class="fa-sharp fa fa-cloud-rain fa-bounce fa-2xl"></i>'
        }
        else if(wheatherReport==="Clouds"){
            temp_status.innerHTML='<i class="fa fa-cloud fa-2xl" ></i>'
        }
        else{
            temp_status.innerHTML='<i class="fa fa-cloud fa-2xl" ></i>'
        }
    
    }catch{
        city_Name.innerHTML="Please Type Corect City Name"
        alert("Please Type Corect City Name")
        temp_status.innerHTML='<i class="fa fa-cloud fa-2xl" ></i>'
        temp.innerHTML=0
    }
    
}


}
submitbtn.addEventListener("click",getInfo)
const day=document.getElementById("day")
const getday=()=>{
    const weeks=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday",]
    
    const date=new Date()


    const day=weeks[date.getDay()];
        return day
    // console.log(time)

}
const today_data=document.getElementById("today_data")
const getdates=()=>{
    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    const time=new Date() 
    const month=months[time.getMonth()];
    const times=`${time.getHours()}:${time.getMinutes()}:${time.getSeconds()} `;
    const date=time.getDate();
    const year=time.getFullYear();
    return `${times} ${date} ${month} ${year}`
        
}
day.innerHTML= getday() 
today_data.innerHTML=getdates()