var last_time = 0;

function scrollDown() {
    var h = document.getElementById("history");
    h.scrollTop = h.scrollHeight;
}

function addMessage(msg) {
    var d = new Date();
    document.getElementById("history").innerHTML +=
    '<div class="message_box"><span class="time">' + 
    (d.getHours() < 10 ? '0' : '') + d.getHours()  + ':' + (d.getMinutes() < 10 ? '0' : '') + d.getMinutes() +'</span>&#9993;&nbsp;' + 
    '<span class="message">' + msg + '</span></div>';

    scrollDown();
}

function isSendAvailable() {
    return (curr - last_time >= 30000) && 
    document.getElementById("textbox").value.length > 0;
}

function clickSend() {
    if(isSendAvailable()) {
        msg = document.getElementById("textbox").value;
        document.getElementById("textbox").value = "";

        addMessage(msg);
        sendMessage(msg);
        last_time = new Date().getTime();
        setCookie("last_time", last_time, {});
        onType();
    }
}

function onType() {
    var l = document.getElementById("textbox").value.length
    document.getElementById("text_limit").innerHTML = (l < 10 ? "&nbsp;" : "") + l + "/20";
}

function timeLoop() {
    curr = new Date().getTime();
    b = document.getElementById("button_send");
    if(curr - last_time < 30000) {
        b.disabled = true;
        b.innerHTML = "" + parseInt(30 - (curr - last_time)/1000);
    } else {
        b.disabled = false;
        b.innerHTML = "OK";
    }
}

document.getElementById("textbox")
    .addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) clickSend();
});

/** init */
scrollDown();
setInterval(timeLoop, 500);
let tmp = getCookie("last_time");
if(tmp != undefined) last_time = parseInt(tmp);