import {User} from './utils.js'

let newUser = new User('daniel', 'danieludumajosh@gmail.com', 'lovemean','08061542504');
let newUser1 = new User('daniel2', 'danieludumajosh@gmail.com', 'lovemean','08061542504');
let newUser2 = new User('daniel344', 'danieludumajosh@gmail.com', 'lovemean','08061542504');
// console.log(newUser)
let user2 = 'daniel';

localStorage.setItem(user2, JSON.stringify(newUser))
localStorage.setItem('@mark', JSON.stringify(newUser1))
localStorage.setItem('usinx', JSON.stringify(newUser2))

let username = localStorage.getItem('user')

// console.log(JSON.parse(username))
let checkBox = document.getElementById('privacy')
let submitBtn = document.getElementById('btn-submit')

checkBox.onchange = ()=> {
    if (!checkBox.checked) {
        submitBtn.disabled = true;
    }
    else {
        submitBtn.disabled = false;
    }
}