// Name and Password from the register-form
var username = document.getElementById('username');
var pass = document.getElementById('pass');

// storing input from register-form
function store() {
    localStorage.setItem('username', username.value);
    localStorage.setItem('pass', pass.value);
}

// check if stored data from register-form is equal to entered data in the   login-form
function Login() {

    // stored data from the register-form
    var storedName = localStorage.getItem('username').value;
    var storedPw = localStorage.getItem('pass').value;

    // entered data from the login-form
    var userName = document.getElementById('username').value;
    var userPw = document.getElementById('pass').value;

    // check if stored data from register-form is equal to data from login form
    if(userName.value == storedName && userPw.value == storedPw) {
        alert('You are loged in.');
    }else {
        alert('ERROR.');
    }
}