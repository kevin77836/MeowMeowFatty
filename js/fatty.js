$(document).ready(function () {
    var w = $(window).width();
    var h = $(window).height();
    if (w > 768) {
        $(document).mousemove(function (event) {
            var xx = event.pageX;
            var x = (xx - w / 2) / 15;
            var yy = event.pageY;
            var y = (yy - h / 2) / 15;
            $(".fatty").css({
                "top": "calc(50% + " + y + "px)",
                "left": "calc(50% + " + x + "px)",
                "transform": "translate(-50 %, -50 %)",
            })
        });
        $(document).mouseout(function (event) {
            $(".fatty").css({
                "top": "50%",
                "left": "50%",
                "transform": "translate(-50 %, -50 %)",
            })
        })
    }
});

function PlaySound(soundobj) {
    var thissound = document.getElementById(soundobj);
    thissound.play();
    console.log(thissound)
}

function StopSound(soundobj) {
    var thissound = document.getElementById(soundobj);
    thissound.pause();
    thissound.currentTime = 0;
}