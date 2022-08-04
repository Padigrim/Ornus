var animation = bodymovin.loadAnimation({
    container: document.getElementById('loaderAnim'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'loader.json'
});

window.addEventListener('load', (event) => {
    setTimeout (function() {
        let loader = document.getElementById('loader');
        
        loader.style.display = "none";
    }, 5120);
})