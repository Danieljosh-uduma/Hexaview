import { User, messages, allUsers, allUserNames, checkPassword, allEmails } from './utils.js';


// sign up functionality
// available username 
let username = document.getElementById('username');
let email = document.getElementById('email');
let msg = document.getElementById('msg');
let msg3 = document.getElementById('msg3');

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
        })
    }
})
email.addEventListener('input', () => {
    for ( let i = 0; i < allUserNames.length; i++) {
        if (allUsers[allUserNames[i]] != 'INFO' && allUsers[allUserNames[i]] != 'return') {
            let know = JSON.parse(allUsers[allUserNames[i]]);
            if (email.value == know.email) {
                msg3.innerText = 'email must be unique';
                return 0;
            }
            else {
                msg3.innerText = '';
            }
        }
    }
    
})


// sign up functionality 
let SignUpForm = document.getElementById('form1')
let inputs = SignUpForm.elements;
let msg2 = document.getElementById('msg2');

SignUpForm.addEventListener('submit', (event) => {
    
    let username = inputs['username'].value;
    let email = inputs['email'].value;
    let number = inputs['phone-number'].value;
    let password = inputs['password'].value;
    let confirmPassword = inputs['confirm-password'].value;

    // prevnt default form submission
    event.preventDefault();

    let mainPassword = checkPassword(password, confirmPassword);
    if (mainPassword == 0) {
        let newUser = new User(username, email, number, password);
        msg2.innerText = '';
        newUser.signUp(newUser);
    }
    else if (mainPassword == 1) {
        msg2.innerText = 'passwords must be the same';
    }
    else if (mainPassword == 2) {
        msg2.innerText = 'Password must be more or 8 characters';
    }
})