// Registion functionality - code refactoring

export class User {
    constructor (userName, email, password, phoneNumber) {
        this.userName = userName;
        this.email = email;
        this.password = password;
        this.phoneNumber = phoneNumber;
        this.login = false;
    }

    signUp(user) {
        localStorage.setItem(this.userName, JSON.stringify(user));
        location.href = './login.html'
    }

    logIn(login, ) {
        if (username == this.userName && password == this.password) {
            this.login = true;
            location.href = '/home.html';
        }
        else {
            return this.logIn;    
        }
    }

    logout() {
        this.login = fasle;
        location.href = '/login.html'
    }
}

// messages
export let messages = [
    'No spaces allowed, use underscore instead',
    'incorrect password or email',
    'invalid email address',
    'username must start with @ character',
    'password must be up to 8 characters',
    'This username is available',
    'This username is not available'
]

// get all users from db
export let allUsers = {};
export let allUserNames = [];
export let allEmails = [];

for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);
    allUsers[key] = value;
    allUserNames[i] = key;
}
for ( let i = 0; i < allUserNames.length; i++) {
    // let know = JSON.parse(allUsers[allUserNames[i]]);
    // allEmails[i] = know.email
    if (allUsers[allUserNames[i]] != 'INFO' && allUserNames[i] != 'return'){
        let know = JSON.parse(allUsers[allUserNames[i]]);
        allEmails[i] = know.email
    }
}
export function checkPassword(password1, password2) {
    if (password1.length < 8) {
        return 2;
    }
    else if (password1 == password2) {
        return 0;
    }
    else {
        return 1;
    }
}
export function findUser(email) {
    for (let i = 0; i < allUserNames.length; i++) {
        if (allUsers[allUserNames[i]] != 'INFO') {
            let know = JSON.parse(allUsers[allUserNames[i]]);
            if (know.email == email){
            return allUserNames[i];
        }
        }
    }
    return 1;
}
export function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  