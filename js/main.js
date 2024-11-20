// login functionality
// required variables
let username = document.getElementById('username');
let password = document.getElementById('password');
let msg = document.getElementById('msg');

// error messages
let messages = [
    'incorrect password or username',
    'invalid User',
    'username must start with @ character',
    'password must be up to 8 characters'
]

// validate the '@' symbol
username.addEventListener('input', function (){
    if (username.value[0] != '@') {
        msg.innerText = messages[2];
    }
    else {
        msg.innerText = '';
    }
})

// validate password length
password.addEventListener('input', function (){
    console.log(password)
    if (password.value.length < 8) {
        msg.innerText = messages[3];
    }
    else{
        msg.innerText = '';
    }
})

// validate if username and password exist
function validate(){
    if (username.value == '@daniel' && password.value == 'lovemean'){
        msg.innerText = `welcome ${username.value}`;
    }
    else if (username.value != '@daniel') {
        msg.innerText = messages[0];
    }
}
