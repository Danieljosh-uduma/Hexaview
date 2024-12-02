// Registion functionality - code refactoring

export class User {
    constructor (userName, email, password, phoneNumber) {
        this.userName = userName;
        this.email = email;
        this.password = password;
        this.phoneNumber = phoneNumber;
        this.login = false;
    }
    signUp(username, user) {
        localStorage.setItem(username, JSON.stringify(user));
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
