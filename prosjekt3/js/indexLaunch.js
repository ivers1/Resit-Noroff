document.addEventListener('DOMContentLoaded', ()=>{

const url = "https://api.spacexdata.com/v4/launches/";
const idUrl = url + "past";
const i = 0;    
const value = "";  

       
fetch(idUrl)
    .then(function(response) {
        return response.json();
    })
    .then(function(json) {
        populateCards(json);
      
    })
    .catch(function(error) {
        console.dir(error);
    });
    
  function populateCards(data) {
      console.dir(data);
               
      for (const q of data){  
        
      const qCont = document.querySelector('#container');
      const qDiv = document.createElement('div');
      const h1 = document.createElement('h1');
      const h2 = document.createElement('h2');
      const h3 = document.createElement('h3');
    const p = document.createElement('p');        
      
      qCont.className = 'container';          
      qDiv.className = 'card';       
     
         
      h1.innerHTML += `flight number: <span                         class="launch-info-flightnr">${q.flight_number}</span>`;     
      h2.innerHTML += `Mission name: <span class="launch-info-missionname">${q.name}</span>`;
      
     p.innerHTML += `Details: <span class="launch-info-details">${q.details}</span>`;        

      qDiv.append(h1, h2, h3, p);
      qCont.append(qDiv);
      }
   } 
    
  })  
    
  
  
    
    
    

