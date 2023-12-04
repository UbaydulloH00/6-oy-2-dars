const nameForm = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const date = document.getElementById('date');
const btn = document.getElementById('btn');
const nameSpan = document.getElementById('nameSpan')
const emailSpan = document.getElementById('emailSpan')
const phoneSpan = document.getElementById('phoneSpan')
const dataSpan = document.getElementById('dataSpan')
const done = document.getElementById('done')
const form = document.getElementById('formAll')

nameForm && nameForm.addEventListener('input', function () {
    if (nameForm.value.length >= 1) {
        nameSpan.innerHTML = '';
        nameForm.style.outlineColor = 'white'
    }
})
email && email.addEventListener('input', function () {
    if (email.value.length >= 1) {
        emailSpan.innerHTML = '';
        email.style.outlineColor = 'white'
    }
})
phone && phone.addEventListener('input', function () {
    if (phone.value.length >= 1) {
        phoneSpan.innerHTML = '';
        phone.style.outlineColor = 'white'
    }
})
date && date.addEventListener('input', function () {
    if (date.value.length >= 1) {
        dataSpan.innerHTML = '';
        date.style.outlineColor = 'white'
    }
})

function validateEmail(email) {
    // Regular expression for a basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Test the email against the regular expression
    return emailRegex.test(email);
}


function saveUser(){
    let data = localStorage.getItem('users')?JSON.parse(localStorage.getItem('users')):[];
    let user ={
        id:data.length +1,
        name:nameForm.value,
        email:email.value,
        phone:phone.value,
        date:date.value
    }
    data.push(user);
    localStorage.setItem('users',JSON.stringify(data));
}
function validate() {
    const emailAddress = email.value;
    if (!nameForm.value) {
        nameForm.style.outlineColor = 'red'
        nameForm.focus();
        nameSpan.innerHTML = "You didn't enter your name"
        return false;
    }
    if (!phone.value) {
        phone.style.outlineColor = 'red'
        phone.focus();
        phoneSpan.innerHTML = "You didn't enter your mail ID"
        return false;
    }
    if (!email.value) {
        email.style.outlineColor = 'red'
        email.focus();
        emailSpan.innerHTML = "You didn't enter your mail ID"
        return false;
    }
   
    if (!validateEmail(emailAddress)) {
        email.style.outlineColor = 'red'
        email.focus();
        emailSpan.innerHTML = "You didn't enter correct mail ID"
        email.value = '';
        return false;

    } 
    if (!date.value) {
        date.style.outlineColor = 'red'
        date.focus();
        dataSpan.innerHTML = "You didn't enter date"
        return false;
    }
    return true;
}
btn && btn.addEventListener('click', function () {
    if (validate()) {
        done.innerHTML = 'Hammasi yaxshi'
        saveUser();
    }
    if(data.length){
        done.innerHTML = '';
        nameForm.value = '';
        email.value = '';
        phone.value = '';
        date.value = '';
    }
});