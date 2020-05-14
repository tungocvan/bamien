$(document).ready(function(){
	
    /////////////////  items slider. /plugins/owlcarousel/
    if ($('.slider-banner-owl').length > 0) { // check if element exists
        $('.slider-banner-owl').owlCarousel({
            loop:true,
            margin:0,
            items: 1,            
            dots: false,
            nav:true,
            navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
        });
    } // end if 

    /////////////////  items slider. /plugins/owlslider/
    if ($('.slider-items-owl').length > 0) { // check if element exists
        $('.slider-items-owl').owlCarousel({
            loop:true,
            // autoplay: true,
            // autoPlaySpeed: 5000,
            // autoPlayTimeout: 5000,
            // autoplayHoverPause: true,
            margin:10,
            nav:true,
            navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
            responsive:{
                0:{
                    items:1
                },
                640:{
                    items:3
                },
                1024:{
                    items:4
                }
            }
        })
    } // end if

    /////////////////  items slider. /plugins/owlcarousel/
    if ($('.slider-custom-owl').length > 0) { // check if element exists
        var slider_custom_owl = $('.slider-custom-owl');
        slider_custom_owl.owlCarousel({
            loop: true,
            margin:15,
            items: 2,
            nav: false,
        });

        // for custom navigation
        $('.owl-prev-custom').click(function(){
            slider_custom_owl.trigger('prev.owl.carousel');
        });

        $('.owl-next-custom').click(function(){
           slider_custom_owl.trigger('next.owl.carousel');
        });

    } // end if 
});	