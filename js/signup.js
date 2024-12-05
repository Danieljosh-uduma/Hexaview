import { User, messages, allUsers, allUserNames, checkPassword, allEmails, findUser } from './utils.js';

let email = document.getElementById('email')
let password = document.getElementById('password')
let msg = document.getElementById('msg')
let btn = document.getElementById('btn');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    let username = findUser(email.value);
    if (username == 1) {
        msg.innerText = 'incorrect email or password';
    }
    else {
        msg.innerText = '';
        
        let user = JSON.parse(allUsers[username]);
        if (user.password != password.value) {
            msg.innerText = 'incorrect email or password';
        }
        else {
            msg.innerText = '';

            user.login = true;
            
            localStorage.setItem(user.userName, JSON.stringify(user));
            location.href = './profile.html'
        }
    }
})


// console.log(findUser('joshniel@gmail.com'))



// console.log(allEmails)
// console.log(allUserNames)