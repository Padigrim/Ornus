var animation = bodymovin.loadAnimation({
    container: document.getElementById('loaderAnim'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'loader.json'
});

window.addEventListener('load', (event) => {
    let loader = document.getElementById('loader');

    setTimeout (function() {
        loader.style.display = "none";
    }, 5120);
})