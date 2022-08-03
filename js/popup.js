/* create onLoad event handler to carry the display none closeout */

function Hide(HideID) {
    var audio = document.getElementById("audioNotice")
    audio.play();
    HideID.style.transition = '.5s';
    HideID.style.opacity = '0';

    setTimeout (function() {
        HideID.style.display = "none";
    }, 500);
}