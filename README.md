#Scroll To
*an easy way to scroll to an anchor*

[See it in action.](http://www.individual11.com/scrollTo "Scroll To Plugin")

* * *

##HTML setup

You don't have to change how you setup your HTML at all. Simply set the *href* the same way you normally would. This means everything will still work even if JavaScript is disabled in the browser.

		<a href="#anchorPoint" id="selectorID">Click Here</a>

##JQuery

The JQuery code is pretty straight forward as well.

	$('#selectorID').scrollTo();

##Optional Parameters

*	offset - this allows you to offset the stop position plus or minus in pixels. The default is __0__.
*	speed - controls the speed of the scrolling, and supports any viable Jquery animation speed (i.e. 'fast' or 5000). The default is __'slow'__. 
*	override - this will allow you to override the default anchor scroll to position. The default is __null__.