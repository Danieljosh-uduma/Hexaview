import { User, messages, allUsers, allUserNames } from './utils.js';


// sign up functionality
// available username 
let username = document.getElementById('username');
let msg = document.getElementById('msg');


// username must start with the '@' symbol
username.addEventListener('input', () => {
    if (username.value[0] != '@') {
        msg.innerText = messages[3];
    }
    else {
        msg.innerText = '';

        // unique username availability 
        username.addEventListener('input', () => {
            for (let i = 0; i < allUserNames.length; i++){
                if (username.value == allUserNames[i]) {
                    // check for username in localStorage if user exist already 
                    msg.innerText = messages[6];
                    return 0;
                }
            }
            msg.innerText = messages[5];
            console.log(false)
        })
    }
})

// sign up functionality 
let SignUpForm = document.getElementById('form1')
let inputs = SignUpForm.elements

SignUpForm.addEventListener('submit', (event) => {
    console.log('default prevented')
    let username = inputs['username'];
    let email = inputs['email'];
    let number = inputs['phone-number'];
    let password = inputs['password'];
    console.log(SignUpForm.elements['username'].value)
    event.preventDefault()
})

// console.log(SignUpForm.elements['username'])