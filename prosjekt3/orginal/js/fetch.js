function nextLaunch(){
    var now = new Date();
    var launchDate = new Date("Jun 25, 2019 05:30:00"); 
    
    var currentTime = now.getTime();
    var launchTime = launchDate.getTime();
    
    var remTime = launchTime - currentTime;
    
    var s = Math.floor(remTime / 1000);
    var m = Math.floor(s / 60);
    var h = Math.floor(m / 60);
    var d = Math.floor(h / 24);
    
    h %= 24;
    m %= 60;
    s %= 60;
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    document.getElementById("timer-days").textContent = d;
    document.getElementById("timer-days").innerHTML = d + "<span class='label'>D</span>";
    
    document.getElementById("timer-hours").innerHTML = h + "<span class='label'>H</span>";
    document.getElementById("timer-mins").innerHTML = m + "<span class='label'>M</span>";
    document.getElementById("timer-secs").innerHTML = s + "<span class='label'>S</span>";
    
    
    setTimeout(nextLaunch, 1000);
}

nextLaunch();


const inputValue = document.querySelector("#search");
const searchButton = document.querySelector(".searchButton");
const patchContainer = document.querySelector(".launch-info-patch");
const flightContainer = document.querySelector(".launch-info-flightnr");
const mnContainer = document.querySelector(".launch-info-missionname");
const yearContainer = document.querySelector(".launch-info-year");
const rtContainer = document.querySelector(".launch-info-rockettype")
const nationalityContainer = document.querySelector(".launch-info-lsite")
const detailsContainer = document.querySelector(".launch-info-details");
const urlContainer = document.querySelector(".launch-info-url");
const url2Container = document.querySelector(".launch-info-url-video");
const imgContainer = document.querySelector(".launch-info-img");

const fetchLaunch = async (launches) => {
    const api_call = await fetch(`https://api.spacexdata.com/v3/launches/${launches}`);
    
const data = await api_call.json();
    return { data }  
};

const showData = () => {
    fetchLaunch(inputValue.value).then((res) => {
        
        console.log(res);
        
patchContainer.innerHTML = `<span class="launch-info-patch"><img src="${res.data.links.mission_patch_small}"></span>`;        
        
flightContainer.innerHTML = `flight number: <span class="launch-info-flightnr">${res.data.flight_number}</span>`;
        
mnContainer.innerHTML = `Mission name: <span class="launch-info-missionname">${res.data.mission_name}</span>`;
        
yearContainer.innerHTML = `Launch year: <span class="launch-info-year">${res.data.launch_year}</span>`;

rtContainer.innerHTML = `Rocket type: <span class="launch-info-rockettype">${res.data.rocket.rocket_type}</span>`; 
        
nationalityContainer.innerHTML = `Launch site: <span class="launch-info-lsite">${res.data.launch_site.site_name_long}</span>`;             
        
detailsContainer.innerHTML = `Details: <span class="launch-info-details">${res.data.details}</span>`;                
urlContainer.innerHTML = `<a class="launch-info-url"href="${res.data.links.wikipedia}">${res.data.links.wikipedia}</a>`;
        
url2Container.innerHTML = `<a class="launch-info-url-video" href="${res.data.links.video_link}">${res.data.links.video_link}</a>`; 

imgContainer.innerHTML = `<span class="launch-info-img"><img src="${res.data.links.flickr_images["2"]}" alt="Image" height="450" width="500"></span>`;                   
        
    })
};

searchButton.addEventListener("click", () =>{
    showData();
})