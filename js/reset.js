import { allUsers, allUserNames, checkPassword, allEmails, findUser, getRandomNumber } from './utils.js';

let email = document.getElementById('email');
let password = document.getElementById('password');
let passwordConfirm = document.getElementById('confirm-password');
let msg = document.getElementById('msg2');
let msg2 = document.getElementById('msg');
let msg3 = document.getElementById('msg3')
let btnEmail = document.getElementById('btn-submit-email');
let firstForm = document.getElementById('form1');
let secondForm = document.getElementById('form2');
let thirdForm = document.getElementById('form3')
let input = [...document.getElementsByClassName('OTP')]

// Generate a random number between 1000 and 9999
let randomNumber = getRandomNumber(1000, 9999);


email.addEventListener('input', () => {
    if (email.value != '') {
        btnEmail.disabled = false;
    }
    else {
        btnEmail.disabled = true;
    }
})
firstForm.addEventListener('submit', (event) => {
    event.preventDefault();
    for (let i = 0; i < allEmails.length; i++){
        if (allEmails[i] != undefined) {
            if (allEmails[i] == email.value) {
                msg2.innerText = '';
                firstForm.style.display = 'none';
                secondForm.style.display = 'block';
                alert(`Hello ${allEmails[i]}, this is your OTP verifaction code ${randomNumber}`)
                return 0;
            }
            else {
                msg2.innerText = 'invalid email address'
            }
    }
}
})

input.forEach(element => {
    element.addEventListener('keyup', () => {
        if(input.indexOf(element)+1 != input.length) {
            input[input.indexOf(element)+1].focus()
        }
    })
})

secondForm.addEventListener('submit', (event) => {
    event.preventDefault();
    let OTP = ''
    for (let i = 0; i < input.length; i++) {
        OTP += input[i].value
    }
    if (OTP != String(randomNumber)){
        msg.innerText = 'incorrect passcode';
    }
    else {
        secondForm.style.display = 'none';
        thirdForm.style.display = 'block';
    }
})

thirdForm.addEventListener('submit', (event) => {
    event.preventDefault()
    if (password.value.length < 8) {
        msg3.innerText = 'password must be 8 or more characters';
    }
    else if (password.value != passwordConfirm.value) {
        msg3.innerText = 'password must be the same';
    }
    else if (password.value == passwordConfirm.value) {
        msg.innerText = '';
        let username = findUser(email.value)
        let user = JSON.parse(allUsers[username])
        user.password = password.value;
        localStorage.setItem(username, JSON.stringify(user))
        location.href = './login.html';
    }
})