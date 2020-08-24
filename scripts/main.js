// Getting the current user by setting an observer on the Auth object
firebase.auth().onAuthStateChanged(function (user) {
    if (user) {

    } else {

    }
});

// When the login button is clicked
function login() {
    let userEmail = document.getElementById('user_email').value;
    let userPass = document.getElementById('user_pass').value;

    firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        window.alert("Error: " + errorMessage)
    });
}

function logout() {
    firebase.auth().signOut().then(function () {
        // Sign-out successful.
        window.location = 'sign-in-page.html'
    }).catch(function (error) {
        // An error happened.
    });
}