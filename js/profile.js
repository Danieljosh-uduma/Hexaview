import { allUsers, allUserNames } from './utils.js';

let username = document.getElementById('username');

let activeUser = () => {
    for (let i = 0; i < allUserNames.length; i++) {
        if (allUsers[allUserNames[i]] != 'INFO' && allUsers[allUserNames[i]] != 'return'){
            let user = JSON.parse(allUsers[allUserNames[i]]);
            if (user.login == true) {
                return user;
            }
        }
        return 1;
    }
}

let user = activeUser();
username.innerText = user.userName;

const userProfiles = [...document.getElementsByClassName('user')]
const addProfile = document.getElementById('add-user')

console.log(userProfiles)
userProfiles.forEach(element => {
    element.addEventListener('click', () => {
        location.href = './home.html'
    })
});

addProfile.onclick = () => {
    alert('You cant do that right now!!!')
}