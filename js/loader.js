var animation1 = bodymovin.loadAnimation({
    container: document.getElementById('loaderAnim'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'loader.json'
});

/* You might need to delete this if nothing works */

var animation2 = bodymovin.loadAnimation({
    container: document.getElementById('loaderAnim1'),
    renderer: 'svg',
    loop: false,
    autoplay: true,
    path: 'loaderEnd.json'
});

var loader1 = document.getElementById('loaderAnim')
var loader2 = document.getElementById('loaderAnim1')
var loader = document.getElementById('loader');

window.addEventListener('load', (event) => {
    loader1.style.display = "none";
    loader2.style.display = "inline";
    setTimeout (function() {
        loader.style.transition = '.5s';
        loader.style.opacity = '0';
        setTimeout (function() {
            loader.style.display = "none";
        }, 500);
    }, 2070);
});