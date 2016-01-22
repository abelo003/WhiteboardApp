/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var wsUri = "ws://" + document.location.host + document.location.pathname + "whiteboardendpoint";
var websocket = new WebSocket(wsUri);
alert(wsUri);
websocket.onmessage = function(evt){
    onMessage(evt);
};

function sendText(json){
    console.log("sending text: " + json);
    websocket.send(json);
}

function onMessage(evt){
    console.log("recived: " + evt.data);
    drawImageText(evt.data);
}

websocket.onerror = function(evt){
    onError(evt);
};

function onError(evt){
    //writeToScreen('<span style="color: red;">ERROR:</span> ' + evt.data);
    alert('<span style="color: red;">ERROR:</span> ' + evt.data);
}
