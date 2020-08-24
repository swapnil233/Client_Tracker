var mainApp = {};

(function () {
    var firebase = app_firebase;
    var uid = null;
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            // User is signed in.
            uid = user.uid;
            var email_id = user.email;
            document.getElementById('name_inject').innerHTML = "Hello " + email_id;
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