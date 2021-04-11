function nextLaunch(){
    var now = new Date();
    var launchDate = new Date("April 14, 2021 05:30:00"); 
    
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