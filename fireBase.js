var app_firebase = {};

(function () {
    // Your web app's Firebase configuration
    var firebaseConfig = {
        apiKey: "AIzaSyB3nXTEfnoqV6NOdyOvpozuQ_hsxuBHiBg",
        authDomain: "fir-clientlogin.firebaseapp.com",
        databaseURL: "https://fir-clientlogin.firebaseio.com",
        projectId: "fir-clientlogin",
        storageBucket: "fir-clientlogin.appspot.com",
        messagingSenderId: "427196122863",
        appId: "1:427196122863:web:489065c1a660a0d4a07d1a"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    app_firebase = firebase;
})()