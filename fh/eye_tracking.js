var mouse_captured = false;
var start_x = 0;
var start_y = 0;

function moveEye(x, y) {
    $('#eye1').css({
        'transform': 'translate(' + 270 * x + 'px, ' + 210 * y + 'px)'
    });
    $('#eye2').css({
        'transform': 'translate(' + 270 * -1 * x + 'px, ' + 210 * y + 'px)'
    });
    $('#eye3').css({
        'transform': 'translate(' + 270 * x + 'px, ' + 210 * y + 'px)'
    });
    $('#eye4').css({
        'transform': 'translate(' + 400 * x + 'px, ' + 300 * -1 * y + 'px)'
    });
    $('#eye5').css({
        'transform': 'translate(' + 650 * x + 'px, ' + 300 * y + 'px)'
    });
}

function captureFirstPos(x, y) {
    if (!mouse_captured) {
        start_x = x;
        start_y = y;
        mouse_captured = true;
        console.log('start pos '+x+' '+y);
    }
}

function eyeTrack() {
    //mouse
    window.onmousemove = handleMouse;

    //touch
    window.addEventListener("touchmove", handleTouch, false);

    function handleMouse(event) {
        event = event || window.event; // IE-ism
        // event.clientX and event.clientY contain the mouse position

        captureFirstPos(event.clientX, event.clientY);

        var rel_x = (event.clientX - start_x);
        var x;
        if (rel_x > 0) {
            x = rel_x / (window.innerWidth - start_x);
        } else {
            x = rel_x / start_x;
        }

        var rel_y = (event.clientY - start_y);
        var y;
        if (rel_y > 0) {
            y = rel_y / (window.innerHeight - start_y);
        } else {
            y = rel_y / start_y;
        }

        console.log ('mouse '+x+' '+y);

        moveEye(x,y);
    }

    function handleTouch(event) {
        event.preventDefault();
        var touches = event.changedTouches;

        var start_x = window.innerWidth/2;
        var start_y = window.innerHeight/2;

        var x = (touches[0].pageX - start_x) / window.innerWidth * 2;
        var y = (touches[0].pageY - start_y) / window.innerHeight * 2;
        console.log ('touches: '+touches);

        moveEye(x,y);
    }

}
eyeTrack()
