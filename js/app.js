import { User, messages, allUsers, allUserNames, checkPassword } from './utils.js';


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
let inputs = SignUpForm.elements;
let msg2 = document.getElementById('msg2');

SignUpForm.addEventListener('submit', (event) => {
    console.log('default prevented')
    let username = inputs['username'].value;
    let email = inputs['email'].value;
    let number = inputs['phone-number'].value;
    let password = inputs['password'].value;
    let confirmPassword = inputs['confirm-password'].value;
    console.log(username,email, number, password, confirmPassword);
    event.preventDefault();
    let mainPassword = checkPassword(password, confirmPassword);
    if (mainPassword == 0) {
        let newUser = new User(username, email, number, password);
        msg2.innerText = '';
        newUser.signUp(newUser);
    }
    else {
        msg2.innerText = 'passwords must be the same';
  must   }
})

//m console.log(SignUpForm.elements['username'])









