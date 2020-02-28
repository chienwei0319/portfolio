var masonryElem = document.querySelector('.masonry');

["resize", "load"].forEach(function(event) {
  window.addEventListener(event, function() {
    imagesLoaded( document.querySelector('.masonry'), function() {
        masonryElem.style.display = "block";
        var msnry = new Masonry( '.masonry', {
            columnWidth: '.grid-sizer',
            gutter: '.gutter-sizer',
            itemSelector: '.grid-item',
            percentPosition: true
        });
    });
  }, false);
});
