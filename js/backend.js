var edgeSize = 200;
var timer = null

window.addEventListener("mousemove" , handleMousemove, false);

drawGridLines();

/* viewport x and y need to be switched to scope x and y of the div element */

function handleMousemove(event) {
    var viewportX = event.clientX;
    var viewportY = event.clientY;

    var viewportWidth = document.documentElement.clientWidth;
    var viewportHeight = document.documentElement.clientHeight;

    var edgeTop = edgeSize;
    var edgeLeft = edgeSize;
    var edgeBottom = (viewportHeight - edgeSize);
    var edgeRight = (viewportWidth - edgeSize);

    var isInLeftEdge = (viewportX < edgeLeft);
    var isInRightEdge = (viewportX > edgeRight);
    var isInTopEdge = (viewportY < edgeTop);
    var isInBottomEdge = (viewportY > edgeBottom);

    if ( ! (isInLeftEdge || isInRightEdge || isInTopEdge || isInBottomEdge)) {
        clearTimeout(timer);
        return;
    }

    var documentWidth = Math.max(
        document.body.scrollWidth,
        document.body.offsetWidth,
        document.body.clientWidth,
        document.documentElement.scrollWidth,
        document.documentElement.offsetlWidth,
        document.documentElement.clientWidth
    );
    var documentHeight = Math.max(
        document.body.scrollHeight,
        document.body.offsetHeight,
        document.body.clientHeight,
        document.documentElement.scrollHeight,
        document.documentElement.offsetHeight,
        document.documentElement.clientHeight
    );

    var maxScrollX = (documentWidth - viewportWidth);
    var maxScrollY = (documentHeight - viewportHeight);

    (function checkForWindowScroll() {

        clearTimeout(timer);

        if (adjustWindowScroll ()) {
            timer = setTimeout(checkForWindowScroll, 30);
        }
    })();

    function adjustWindowScroll () {
        var currentScrollX = window.pageXOffset;
        var currentScrollY = window.pageYOffset;

        var canScrollUp = ( currentScrollY > 0 );
        var canScrollDown = ( currentScrollY < maxScrollY );
        var canScrollLeft = ( currentScrollX > 0 );
        var canScrollRight = ( currentScrollX < maxScrollX );

        var nextScrollX = currentScrollX;
        var nextScrollY = currentScrollY;

        var maxStep = 50;

        if ( isInLeftEdge && canScrollLeft ) {
 
            var intensity = ( ( edgeLeft - viewportX ) / edgeSize );

            nextScrollX = ( nextScrollX - ( maxStep * intensity ) );
    }
    else if ( isInRightEdge && canScrollRight ) {
 
        var intensity = ( ( viewportX - edgeRight ) / edgeSize );

        nextScrollX = ( nextScrollX + ( maxStep * intensity ) );

    }
    if ( isInTopEdge && canScrollUp ) {
 
        var intensity = ( ( edgeTop - viewportY ) / edgeSize );

        nextScrollY = ( nextScrollY - ( maxStep * intensity ) );

    }
    else if ( isInBottomEdge && canScrollDown ) {

        var intensity = ( ( viewportY - edgeBottom ) / edgeSize );

        nextScrollY = ( nextScrollY + ( maxStep * intensity ) );

    }
    nextScrollX = Math.max( 0, Math.min( maxScrollX, nextScrollX ) );
    nextScrollY = Math.max( 0, Math.min( maxScrollY, nextScrollY ) );

    if (
        ( nextScrollX !== currentScrollX ) ||
        ( nextScrollY !== currentScrollY )
        ) {

        window.scrollTo( nextScrollX, nextScrollY );
        return( true );

    } else {

        return( false );

    }

}
}

/* Add the image background to the script */