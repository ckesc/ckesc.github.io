            window.onmousemove = handleMouseMove;
            window.addEventListener("touchmove", handleMouseMove, false);
            function handleMouseMove(event) {
                event.preventDefault();
                var touches = event.changedTouches;
                event = event || window.event; // IE-ism
                // event.clientX and event.clientY contain the mouse position
                var start_x = window.innerWidth/2;
                var start_y = window.innerHeight/2;
                
                var x = (touches[0].pageX - start_x) / window.innerWidth * 2;
                var y = (touches[0].pageY - start_y) / window.innerHeight * 2;
                console.log ( touches[0]);
                
                $('#eye1').css({
                    'transform': 'translate('+270*x+'px, '+210*y+'px)'
                });
                $('#eye2').css({
                    'transform': 'translate('+270*-1*x+'px, '+210*y+'px)'
                });
                $('#eye3').css({
                    'transform': 'translate('+270*x+'px, '+210*y+'px)'
                });
                $('#eye4').css({
                    'transform': 'translate('+400*x+'px, '+300*-1*y+'px)'
                });
                $('#eye5').css({
                    'transform': 'translate('+650*x+'px, '+300*y+'px)'
                });
                
            }  