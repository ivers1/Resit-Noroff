var inputFname = document.getElementById('firstname');
var inputLname = document.getElementById('lastname');
var inputAdress = document.getElementById('adress');
var inputEmail = document.getElementById('email');
var inputFeedback = document.getElementById('feedback');
var button = document.querySelector('.submit');
var regEx = /\S+@\S+\.\S+/;
var form = document.querySelector('.form')

function validateForm() {
    if ( inputFname.value.trim() !== "" && inputLname.value.trim() !== "" && inputAdress.value.trim() !== "" && regEx.test(inputEmail.value) && inputFeedback.value.trim() !== "" ) { button.style.backgroundColor = 'green'
    } else {
       button.style.backgroundColor = 'red';     
    }
}

form.addEventListener('submit', function(event) {
    event.preventDefault();
    console.log(event);
})
    
   

