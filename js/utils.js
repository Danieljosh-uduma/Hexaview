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
        console.log('saved new user')
        location.href = './login.html'
    }
    logIn(username, password) {
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

for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);
    allUsers[key] = value;
    allUserNames[i] = key;
}

export function checkPassword(password1, password2) {
    if (password1 == password2) {
        console.log('password saved')
        return 0;
    }
    else {
        console.log('password must be the same');
        return 1;
    }
{

}
}