var animation1 = bodymovin.loadAnimation({
    container: document.getElementById('loaderAnim'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'loader.json'
});

var loader = document.getElementById('loader');
var noticeVisibility = document.getElementsByClassName('noticeVisibility');

/* remove the switch from loaderEnd as it does not work properly. Save it as an animation for something else */

window.addEventListener('load', (event) => {
    setTimeout (function() {
        loader.style.transition = '.5s';
        loader.style.opacity = '0';
        setTimeout (function() {
            loader.style.display = "none";
            setTimeout (function() {
                noticeVisibility.style.display = "flex";
            }, 500);
        }, 500);
    }, 5000);
});