var mainApp = {};

(function () {
    var firebase = app_firebase;
    var uid = null;
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            // User is signed in.
            uid = user.uid;
            document.getElementById('email_inject').innerHTML = "Hello " + user.displayName;
        } else {
            // nullify the uid
            uid = null;
            // redirect to login page if user isnt logged in
            window.location.replace('login.html');
        }
    });

    function logOut() {
        firebase.auth().signOut();
    }

    mainApp.logOut = logOut;
})()