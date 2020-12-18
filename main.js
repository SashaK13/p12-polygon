
window.onload = preparePage;

var canvas;
var context;

/*
*
*/
function preparePage() {
    // window.onclick = userClick;
    document.addEventListener('click', userClick);
    canvas = document.getElementById("canvas");
    context = canvas.getContext("2d");
    context.beginPath();
};

/*
*
*/
function userClick(event) {
    console.log(event);
    var x = event.offsetX;
    var y = event.offsetY;
    console.log('event.offsetX : ' + x + ', event.offsetY : ' + y);

    context.lineTo(x, y);
    context.stroke();
};
