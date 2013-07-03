/*//////////////////////

Author: David Vogeleer
Site: http://www.individual11.com/
Description: animated scroll to anchor

Version: 0.3

**THANKS:

-> solution for setting the hash without jumping the page -> Lea Verou : http://leaverou.me/2011/05/change-url-hash-without-page-jump/
-> Add stop  - Joe Mafia
-> add some easing - Daniel Garcia
-> added use strict, cleaned up some white space adn added conditional for anchors without hashtag -> Bret Morris, https://github.com/bretmorris

**TODO:
-> Add hashchange support, but make it optional http://leaverou.me/2011/05/get-your-hash-the-bulletproof-way/
*//////////////////////


(function($){
  "use strict";
  $.fn.scrollTo = function( options ) {

    var settings = {
        offset : 0,       //an integer allowing you to offset the position by a certain number of pixels. Can be negative or positive
        speed : 'slow',   //speed at which the scroll animates
        override : null,  //if you want to override the default way this plugin works, pass in the ID of the element you want to scroll through here
        easing : null //easing equation for the animation. Supports easing plugin as well (http://gsgd.co.uk/sandbox/jquery/easing/)
    };

    if (options) {
        if(options.override){
            //if they choose to override, make sure the hash is there
            options.override = (override('#') != -1)? options.override:'#' + options.override;
        }
        $.extend( settings, options );
    }

    return this.each(function(i, el){
        $(el).click(function(e){
            var idToLookAt;
            if ($(el).attr('href').match(/#/) !== null) {
                e.preventDefault();
                idToLookAt = (settings.override)? settings.override:$(el).attr('href');//see if the user is forcing an ID they want to use
                //if the browser supports it, we push the hash into the pushState for better linking later
                if(history.pushState){
                    history.pushState(null, null, idToLookAt);
                    $('html,body').stop().animate({scrollTop: $(idToLookAt).offset().top + settings.offset}, settings.speed, settings.easing);
                }else{
                    //if the browser doesn't support pushState, we set the hash after the animation, which may cause issues if you use offset
                    $('html,body').stop().animate({scrollTop: $(idToLookAt).offset().top + settings.offset}, settings.speed, settings.easing,function(e){
                        //set the hash of the window for better linking
                        window.location.hash = idToLookAt;
                    });
                }
            }
        });
    });
  };
})( jQuery );
