/* 
Zoom Template 
http://www.templatemo.com/preview/templatemo_414_zoom
*/

var menuDisabled = false;

jQuery(function($) {
    
    /*$(window).load(function() { // makes sure the whole site is loaded
            $('#status').fadeOut(); // will first fade out the loading animation
            $('#preloader').delay(0).fadeOut('slow'); // will fade out the white DIV that covers the website.
            $('#main-wrapper').delay(350).css({'overflow':'visible'});
    });*/
    
    $(document).ready( function() {
	console.log('Ready');
	//for image slide on menu item click(normal) and responsive
	$(".change-section").on('click',function(e){
            e.preventDefault();
            if (menuDisabled == false) // check the menu has disabled?
            {
                menuDisabled = true; // disable to menu
                
                var name = $(this).attr('href');
                console.log(name);

                // content zoom in/out
                $("section.active").hide('size',{easing: 'easeInQuart', duration: 400},function(){
                    $(this).removeClass("active");
                    $(name+"-section").show('size',{easing: 'easeOutQuart', duration: 400},function(){
                        $(this).addClass("active");

                        menuDisabled = false;
                     });
                });
            }
            return;
	});
        
    });
    console.log('Not Ready');

});
