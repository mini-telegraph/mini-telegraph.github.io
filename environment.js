var last_time = 0;

function addMessage(msg) {
    var d = new Date();
    document.getElementById("history").innerHTML +=
    '<div class="message_box"><span class="time">' + 
    d.getHours() + ':' + d.getMinutes() +'</span>&#9993;&nbsp;' + 
    '<span class="message">' + msg + '</span></div>';
}

function isSendAvailable() {
    return document.getElementById("textbox").value.length > 0;
}

function clickSend() {
    if(isSendAvailable()) {
        msg = document.getElementById("textbox").value;
        document.getElementById("textbox").value = "";

        addMessage(msg);
        sendMessage(msg);
    }
}

document.getElementById("textbox")
    .addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) clickSend();
});