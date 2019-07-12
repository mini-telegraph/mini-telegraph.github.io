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

function getCookie(name) {
    var matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
  }

function setCookie(name, value, options) {
    options = options || {};
  
    var expires = options.expires;
  
    if (typeof expires == "number" && expires) {
      var d = new Date();
      d.setTime(d.getTime() + expires * 1000);
      expires = options.expires = d;
    }
    if (expires && expires.toUTCString) {
      options.expires = expires.toUTCString();
    }
  
    value = encodeURIComponent(value);
  
    var updatedCookie = name + "=" + value;
  
    for (var propName in options) {
      updatedCookie += "; " + propName;
      var propValue = options[propName];
      if (propValue !== true) {
        updatedCookie += "=" + propValue;
      }
    }
  
    document.cookie = updatedCookie;
  }

function updateUserName() {
    user_name = getCookie("mt_name");
    if(user_name == undefined) {
        user_name = "" + new Date().getTime()*100 + Math.round(Math.random()*100);
        setCookie("mt_name", user_name, {});
    }

    alert(user_name);
}

firebase.initializeApp(firebaseConfig);
updateUserName();