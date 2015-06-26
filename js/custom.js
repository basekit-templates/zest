function ecomproductSlider() {



    var currentPosition = 0;
    var slide = $( '.ecomproduct__gallery-item' );
    var numberOfSlides = slide.length;
    var nextPosition = 1;
    var prevPosition = numberOfSlides - 1;

    $(".ecomproduct__product-gallery").append('<li class="btnprev"></li><li class="btnnext"></li>');



    function slideIt(way) {
        console.log( "Slides: " + numberOfSlides );



        if (way == "forward") {
            currentPosition++;
            nextPosition++;
            prevPosition++;

            if ( nextPosition == numberOfSlides ) {
                nextPosition = 0;
            }

            if ( prevPosition == numberOfSlides ) {
                prevPosition = 0;
            }

            if ( prevPosition < 0 ) {
                prevPosition = numberOfSlides - 1;
            }

            if ( currentPosition == numberOfSlides ) {
                currentPosition = 0;
            }


        }

        if (way == "backward") {
            currentPosition--;
            nextPosition--;
            prevPosition--;

            if ( nextPosition == numberOfSlides ) {
                nextPosition = 0;
            }

            if ( prevPosition < 0 ) {
                prevPosition = numberOfSlides - 1;
            }

            if ( nextPosition < 0 ) {
                nextPosition = numberOfSlides - 1;
            }

            if ( currentPosition < 0 ) {
                currentPosition = numberOfSlides - 1;
            }


        }

        // Reset classes
        $( slide ).removeClass("next prev current");

        // Mark Current
        $( slide ).eq(currentPosition).addClass("current");

        // Mark next
        $( slide ).eq(nextPosition).addClass("next");

        // Mark previous
        $( slide ).eq(prevPosition).addClass("prev");

        console.log( "way Slide: " + way );
        console.log( "Current Slide: " + currentPosition );
        console.log( "prevPosition Slide: " + prevPosition );
        console.log( "nextPosition Slide: " + nextPosition );


    }

    slideIt();



    // Click next

    $( '.ecomproduct__product-gallery .btnnext' ).click(function() {
        slideIt("forward");
    });

    $( '.ecomproduct__product-gallery' ).on("swipeleft",function(){
        slideIt("forward");
    });



    // Click prev

    $( '.ecomproduct__product-gallery .btnprev' ).click(function() {
        slideIt("backward");
    });


    $( '.ecomproduct__product-gallery' ).on("swiperight",function(){
        slideIt("backward");
    });







}

ecomproductSlider();






// Makes the whole ecom product tiles clickable
$(document).ready(function() {



    var publishedmode = false;
    // Edit mode test

     if($("body.edit-mode").length == 0) {
        publishedmode = true;
     }





    $('.product-item').each(function() {
        var href = $(this).find("a").attr("href");
        if(href) {
            $(this).addClass("clickable");
        }
    });


    metaKeyPressed = false;

    $(window).keydown(function(e) {
        if (e.ctrlKey || e.metaKey) {
            metaKeyPressed = true;
        }
    });


    $('.product-item').click(function() {

        var href = $(this).find("a").attr("href");
        if(href) {

            if (metaKeyPressed == true) {
                 window.open(href, '_blank');
            } else {
                window.location = href;
            }
        }

    });

    // Adds variation class when there is only one product image

    if($(".ecomproduct__product-gallery").length == 0)
    {
       $("body").addClass("product--one-image");
    }



    // Ecom Gallery Scrolling

    $('#ecomscroll').click(function(e) {
        e.preventDefault();
        var id = e.target.id;
        if(id == 'ecomscroll')
        {
            $('ul.product-gallery li:first').appendTo('ul.product-gallery');
        }
            else
        {
            $('ul.product-gallery li:last').prependTo('ul.product-gallery');
        }
    });














    $( ".ecombasket__basket-toggle" ).click(function() {
        $( "body" ).toggleClass( "basket--open" );
    });



    $('.basket-body').click(function(e) {
        if (e.target == this) {
            $( "body" ).removeClass( "basket--open" );
            $( "#page-zones__template-widgets__ecombasket-shopbasket" ).removeClass( "show-content" );
        }
    });


    if(publishedmode==true) {
        $( ".search-toggle" ).click(function() {
            $( "body" ).addClass( "search--open" );
        });

        $('.search-overlay').click(function(e) {
            if (e.target == this) {
                 $( "body" ).removeClass( "search--open" );
            }
        });
    }





    $('.navigation-body').click(function(e) {
        if (e.target == this) {
            $( ".widget__extendednavigation" ).removeClass( "open" );
            $( "body" ).removeClass( "navigation--open" );
        }
    });



    document.onkeydown = function(evt) {
        evt = evt || window.event;
        if (evt.keyCode == 27) {
            $( ".widget__extendednavigation" ).removeClass( "open" );
            $( "body" ).removeClass( "navigation--open" );
            $( "body" ).removeClass( "search--open" );
            $( "body" ).removeClass( "basket--open" );
            $( "#page-zones__template-widgets__ecombasket-shopbasket" ).removeClass( "show-content" );
        }
    };




    // Toggles class open to display/hide the whole navigation
$( ".widget__extendednavigation" ).addClass( "closed" );


if(publishedmode==true) {
    $( ".extendednavigation__navigation-toggle" ).click(function() {
        $( ".widget__extendednavigation" ).toggleClass( "open" );
        $( "body" ).toggleClass( "navigation--open" );
    });



    $('.navigation-body').click(function(e) {
        if (e.target == this) {
            $( ".widget__extendednavigation" ).removeClass( "open" );
            $( "body" ).removeClass( "navigation--open" );
        }
    });





    // Togglse class open to display/hide folders

    $( ".navigation-item.folder .item-name--parent" ).each(function() {
        $( this ).click(function() {
                $( this ).parent( ".navigation-item.folder" ).toggleClass( "open" );
        });
    });
}


});