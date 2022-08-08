var animation1 = bodymovin.loadAnimation({
    container: document.getElementById('loaderAnim'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'loader.json'
});

var loader = document.getElementById('loader');

window.addEventListener('load', (event) => {
    setTimeout (function() {
        animation1.path = 'loaderEnd.json'
        setTimeout (function() {
            loader.style.transition = '.5s';
            loader.style.opacity = '0';
            setTimeout (function() {
                loader.style.display = "none";
            }, 500);
        }, 2070);
    }, 5000);
});