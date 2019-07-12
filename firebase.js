var firebaseConfig = {
    apiKey: "AIzaSyCWLoH3IimIVAirC8Iw-0JR0VrD3bvH4bU",
    authDomain: "minitelegraph.firebaseapp.com",
    databaseURL: "https://minitelegraph.firebaseio.com",
    projectId: "minitelegraph",
    storageBucket: "minitelegraph.appspot.com",
    messagingSenderId: "802906428032",
    appId: "1:802906428032:web:20f3bd695f4709e6"
};

var user_name = "none";

function updateUserName() {
    user_name = "" + new Date().getTime()%100000*100 + Math.round(Math.random()*100);

    alert(user_name);
}

firebase.initializeApp(firebaseConfig);
updateUserName();