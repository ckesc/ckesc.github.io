var mouse_captured = false;
var start_x = 0;
var start_y = 0;

function moveEyes(x, y) {
    moveEye (1, x, y, +100,  +600, +150, +150);
    moveEye (2, x, y, -270,  -670, +210, +210);
    moveEye (3, x, y, +270,  +270, +400, +50);
    moveEye (4, x, y, +1000, +200, -300, -100);
    moveEye (5, x, y, +700,  +500, +100, +500);
}

function moveEye(number, x, y, maxX, minX, maxY, minY) {
    var translateX;
    var translateY;

    if (x > 0) {
        translateX = maxX * x;
    } else {
        translateX = minX * x;
    }

    if (y > 0) {
        translateY = maxY * y;
    } else {
        translateY = minY * y;
    }

    $('#eye' + number).css({
        'transform': 'translate(' + translateX + 'px, ' + translateY + 'px)'
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

        moveEyes(x,y);
    }

    function handleTouch(event) {
        event.preventDefault();
        var touches = event.changedTouches;

        var start_x = window.innerWidth/2;
        var start_y = window.innerHeight/2;

        var x = (touches[0].pageX - start_x) / window.innerWidth * 2;
        var y = (touches[0].pageY - start_y) / window.innerHeight * 2;
        console.log ('touches: '+touches);

        moveEyes(x,y);
    }

}
eyeTrack()
