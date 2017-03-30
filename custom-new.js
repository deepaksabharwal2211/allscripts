// JavaScript Document
jQuery(document).ready(function(){
	jQuery( '.ie-searchbx' ).click(function() { jQuery( '.searchbx' ).slideToggle(); });
// techie menu
	jQuery('.hamburber_icon').click(function(){
				jQuery('#mobnav').slideToggle();
				return false;
	});
	
	var win = jQuery(window).width();
	if(win < 767 ){
		jQuery('i.fa.fa-search').click(function(){
		jQuery(this).parent().find('input[type="text"],input[type="submit"]').toggle();
	});
	}

// menu dropdown strat
jQuery('li.mainnav').click(function(){ 
		jQuery(this).children('a#menu').hide();
		jQuery(this).children('a#menuclose').show();
		jQuery('.menu-sub').slideDown(300);
				
});
jQuery('#navnext').click(function(){
			jQuery('.first-menu ul').animate({top : '-=295'});
			jQuery(this).hide()
			jQuery('#navprev').show()
		})
jQuery('#navprev').click(function(){
			jQuery('.first-menu ul').animate({top : '+=295'});
			jQuery(this).hide()
			jQuery('#navnext').show()
		})

jQuery('a#menuclose').click(function(){
		jQuery('.menu-sub').slideUp(500);
		jQuery('a#menu').show();
		jQuery(this).hide();
		return false;
});

// menu dropdown END
// Trending JS

//group link js
jQuery('li.grouplinks a#menu_h').click(function() {
	jQuery('.menu-sub').slideUp(500);
	jQuery('a#menu').show();
	jQuery('a#menuclose').hide();
	jQuery(this).parent('li.grouplinks').toggleClass('active')
	jQuery('.right_t_menu').slideToggle(500);
});	


jQuery('.right_t_menu').mouseleave(function(){
	jQuery(this).slideUp(500);
	jQuery('.navi li.grouplinks').removeClass('active');
});

jQuery('.tabs .tab-links a').on('click', function(e)  {
				var currentAttrValue = jQuery(this).attr('href');

				// Show/Hide Tabs
				jQuery('.tabs ' + currentAttrValue).show().siblings().hide();

				// Change/remove current tab to active
				jQuery(this).parent('li').addClass('active').siblings().removeClass('active');

				e.preventDefault();
		});
	var hei = jQuery('.hdr').height();
	jQuery('div[class ="add-left"],div[class ="add-right"]').css('top','56px');
	jQuery(window).scroll(function(){
		var scr = jQuery(window).scrollTop();
		if(scr > hei){
			jQuery('div[class ="add-left"],div[class ="add-right"]').css('top','56px');
		}
		else{
			jQuery('div[class ="add-left"],div[class ="add-right"]').css('top','56px');
		}
	})
	

	jQuery(window).scroll(function (event) {
		var y = jQuery(this).scrollTop();
		if ( y >= 5 ) {
			jQuery( '#fixedMenu' ).addClass( 'fixed' );
			jQuery( "#fixedMenu" ).fadeIn();
		} else if( y < 5 ) {
			jQuery( '#fixedMenu' ).removeClass( 'fixed' );
		}
	});
	
	if( jQuery(window).scrollTop() >= 500 ){
		jQuery(window).trigger('scroll');
	}

	jQuery( 'ul.top-quotes' ).bxSlider( {
		minSlides: 1,
		maxSlides: 1,
		speed: 1000,
		easing: 'swing',
		pager: false,
		autoControls: false,
		auto: true,
		infiniteLoop: true,
		moveSlides: 1
	});
});


// Drow Down Menu on 1024 Resolutions
jQuery(function() {
	jQuery(window).resize(function(){
		try{
			var w = jQuery(window).width();
			if(w > 1024 && menu.is(':hidden')) {
				menu.removeAttr('style');
			}
		}catch(err){}
	});
});
		
// Guggter Space ADD Code and Social Icons on Mouse hover
jQuery(document).ready(function(){
		try{
	if ( jQuery('#wpadminbar') != null && jQuery('#wpadminbar').length > 0 ) {
			  jQuery('.top-menu').css({ 'top': '32px'  });
		}
		else {
			  jQuery('.top-menu').css({ 'top': '0px'  });
		}


		var w_width = jQuery(window).width();
		if (w_width <= 1280)
		{
			jQuery('.left-ad, .right-ad').hide();
			jQuery('#storycenterbyline').show();
		}
		if( page_type == 'story' ){
			var advt = jQuery('.add-left, .add-right').html();
			if(advt == null || advt == undefined || advt.trim() == "") {
				jQuery('.left-ad, .right-ad').hide();
			}
			else
			{
				jQuery('#storycenterbyline').show();
			}
		}

		/* Social Icons */
		jQuery('.fbbx').hover(function(){jQuery('.face').slideToggle(100);});
		jQuery('.twitbx').hover(function(){jQuery('.twitbxh').slideToggle(100);});
		jQuery('.gplusbx').hover(function(){jQuery('.gplusbxh').slideToggle(100);});
	}
	catch(err){}
});


/* Previous Next Story */
jQuery(function () {
jQuery('#pre-story').mouseover(function () {
  jQuery('.one').css("display", "block");
});
  jQuery('#pre-story').mouseout(function () {
  jQuery('.one').css("display", "none");
});

jQuery('#next-story').mouseover(function () {
  jQuery('.two').css("display", "block");
});
  jQuery('#next-story').mouseout(function () {
  jQuery('.two').css("display", "none");
});
});

/* Previous Next Story and Breaking Hide*/
jQuery(document).ready(function(){
jQuery(".icons-share").hide();
jQuery('.share').click(function () {
jQuery('.icons-share').slideToggle(100);
});

jQuery('.search').click(function () {
	jQuery('.form').slideToggle();
});

jQuery('.close').click(function () {
	jQuery('.breaking').hide();
});

	jQuery( '.bx-slides' ).bxSlider( { auto : true } );
});


/* Breaking News Display*/
function ticker() {
		jQuery('#news li:first').slideUp(function() {
		jQuery(this).appendTo(jQuery('#news')).slideDown();
});
}
setInterval(ticker, 6000);


// Video Custom Scroll ///////////////////////////////////

(function($) {

jQuery.fn.extend({
slimScroll: function(options) {

  var defaults = {

	// width in pixels of the visible scroll area
	width : 'auto',

	// height in pixels of the visible scroll area
	height : '120px',

	// width in pixels of the scrollbar and rail
	size : '5px',

	// scrollbar color, accepts any hex/color value
	color: '#a1a1a1',

	// scrollbar position - left/right
	position : 'left',

	// distance in pixels between the side edge and the scrollbar
	distance : '1px',

	// default scroll position on load - top / bottom / $('selector')
	start : 'top',

	// sets scrollbar opacity
	opacity : 1,

	// enables always-on mode for the scrollbar
	alwaysVisible : true,

	// check if we should hide the scrollbar when user is hovering over
	disableFadeOut : false,

	// sets visibility of the rail
	railVisible : false,

	// sets rail color
	railColor : '#333',

	// sets rail opacity
	railOpacity : 1,

	// whether  we should use jQuery UI Draggable to enable bar dragging
	railDraggable : true,

	// defautlt CSS class of the slimscroll rail
	railClass : 'slimScrollRail',

	// defautlt CSS class of the slimscroll bar
	barClass : 'slimScrollBar',

	// defautlt CSS class of the slimscroll wrapper
	wrapperClass : 'slimScroll',

	// check if mousewheel should scroll the window if we reach top/bottom
	allowPageScroll : false,

	// scroll amount applied to each mouse wheel step
	wheelStep : 1,

	// scroll amount applied when user is using gestures
	touchScrollStep : 400,

	// sets border radius
	borderRadius: '7px',

	// sets border radius of the rail
	railBorderRadius : '7px'
  };

  var o = $.extend(defaults, options);

  // do it for every element that matches selector
  this.each(function(){

  var isOverPanel, isOverBar, isDragg, queueHide, touchDif,
	barHeight, percentScroll, lastScroll,
	divS = '<div></div>',
	minBarHeight = 30,
	releaseScroll = false;

	// used in event handlers and for better minification
	var me = $(this);

	// ensure we are not binding it again
	if (me.parent().hasClass(o.wrapperClass))
	{
		// start from last bar position
		var offset = me.scrollTop();

		// find bar and rail
		bar = me.parent().find('.' + o.barClass);
		rail = me.parent().find('.' + o.railClass);

		getBarHeight();

		// check if we should scroll existing instance
		if ($.isPlainObject(options))
		{
		  // Pass height: auto to an existing slimscroll object to force a resize after contents have changed
		  if ( 'height' in options && options.height == 'auto' ) {
			me.parent().css('height', 'auto');
			me.css('height', 'auto');
			var height = me.parent().parent().height();
			me.parent().css('height', height);
			me.css('height', height);
		  }

		  if ('scrollTo' in options)
		  {
			// jump to a static point
			offset = parseInt(o.scrollTo);
		  }
		  else if ('scrollBy' in options)
		  {
			// jump by value pixels
			offset += parseInt(o.scrollBy);
		  }
		  else if ('destroy' in options)
		  {
			// remove slimscroll elements
			bar.remove();
			rail.remove();
			me.unwrap();
			return;
		  }

		  // scroll content by the given offset
		  scrollContent(offset, false, true);
		}

		return;
	}

	// optionally set height to the parent's height
	o.height = (o.height == 'auto') ? me.parent().height() : o.height;

	// wrap content
	var wrapper = $(divS)
	  .addClass(o.wrapperClass)
	  .css({
		position: 'relative',
		overflow: 'hidden',
		width: o.width,
		height: o.height
	  });

	// update style for the div
	me.css({
	  overflow: 'hidden',
	  width: o.width,
	  height: o.height
	});

	// create scrollbar rail
	var rail = $(divS)
	  .addClass(o.railClass)
	  .css({
		width: o.size,
		height: '100%',
		position: 'absolute',
		top: 0,
		display: (o.alwaysVisible && o.railVisible) ? 'block' : 'none',
		'border-radius': o.railBorderRadius,
		background: o.railColor,
		opacity: o.railOpacity,
		zIndex: 90
	  });

	// create scrollbar
	var bar = $(divS)
	  .addClass(o.barClass)
	  .css({
		background: o.color,
		width: o.size,
		position: 'absolute',
		top: 0,
		opacity: o.opacity,
		display: o.alwaysVisible ? 'block' : 'none',
		'border-radius' : o.borderRadius,
		BorderRadius: o.borderRadius,
		MozBorderRadius: o.borderRadius,
		WebkitBorderRadius: o.borderRadius,
		zIndex: 99
	  });

	// set position
	var posCss = (o.position == 'right') ? { right: o.distance } : { left: o.distance };
	rail.css(posCss);
	bar.css(posCss);

	// wrap it
	me.wrap(wrapper);

	// append to parent div
	me.parent().append(bar);
	me.parent().append(rail);

	// make it draggable and no longer dependent on the jqueryUI
	if (o.railDraggable){
	  bar.bind("mousedown", function(e) {
		var $doc = $(document);
		isDragg = true;
		t = parseFloat(bar.css('top'));
		pageY = e.pageY;

		$doc.bind("mousemove.slimscroll", function(e){
		  currTop = t + e.pageY - pageY;
		  bar.css('top', currTop);
		  scrollContent(0, bar.position().top, false);// scroll content
		});

		$doc.bind("mouseup.slimscroll", function(e) {
		  isDragg = false;hideBar();
		  $doc.unbind('.slimscroll');
		});
		return false;
	  }).bind("selectstart.slimscroll", function(e){
		e.stopPropagation();
		e.preventDefault();
		return false;
	  });
	}

	// on rail over
	rail.hover(function(){
	  showBar();
	}, function(){
	  hideBar();
	});

	// on bar over
	bar.hover(function(){
	  isOverBar = true;
	}, function(){
	  isOverBar = false;
	});

	// show on parent mouseover
	me.hover(function(){
	  isOverPanel = true;
	  showBar();
	  hideBar();
	}, function(){
	  isOverPanel = false;
	  hideBar();
	});

	// support for mobile
	me.bind('touchstart', function(e,b){
	  if (e.originalEvent.touches.length)
	  {
		// record where touch started
		touchDif = e.originalEvent.touches[0].pageY;
	  }
	});

	me.bind('touchmove', function(e){
	  // prevent scrolling the page if necessary
	  if(!releaseScroll)
	  {
		  e.originalEvent.preventDefault();
		  }
	  if (e.originalEvent.touches.length)
	  {
		// see how far user swiped
		var diff = (touchDif - e.originalEvent.touches[0].pageY) / o.touchScrollStep;
		// scroll content
		scrollContent(diff, true);
		touchDif = e.originalEvent.touches[0].pageY;
	  }
	});

	// set up initial height
	getBarHeight();

	// check start position
	if (o.start === 'bottom')
	{
	  // scroll content to bottom
	  bar.css({ top: me.outerHeight() - bar.outerHeight() });
	  scrollContent(0, true);
	}
	else if (o.start !== 'top')
	{
	  // assume jQuery selector
	  scrollContent($(o.start).position().top, null, true);

	  // make sure bar stays hidden
	  if (!o.alwaysVisible) { bar.hide(); }
	}

	// attach scroll events
	attachWheel();

	function _onWheel(e)
	{
	  // use mouse wheel only when mouse is over
	  if (!isOverPanel) { return; }

	  var e = e || window.event;

	  var delta = 0;
	  if (e.wheelDelta) { delta = -e.wheelDelta/120; }
	  if (e.detail) { delta = e.detail / 3; }

	  var target = e.target || e.srcTarget || e.srcElement;
	  if ($(target).closest('.' + o.wrapperClass).is(me.parent())) {
		// scroll content
		scrollContent(delta, true);
	  }

	  // stop window scroll
	  if (e.preventDefault && !releaseScroll) { e.preventDefault(); }
	  if (!releaseScroll) { e.returnValue = false; }
	}

	function scrollContent(y, isWheel, isJump)
	{
	  releaseScroll = false;
	  var delta = y;
	  var maxTop = me.outerHeight() - bar.outerHeight();

	  if (isWheel)
	  {
		// move bar with mouse wheel
		delta = parseInt(bar.css('top')) + y * parseInt(o.wheelStep) / 100 * bar.outerHeight();

		// move bar, make sure it doesn't go out
		delta = Math.min(Math.max(delta, 0), maxTop);

		// if scrolling down, make sure a fractional change to the
		// scroll position isn't rounded away when the scrollbar's CSS is set
		// this flooring of delta would happened automatically when
		// bar.css is set below, but we floor here for clarity
		delta = (y > 0) ? Math.ceil(delta) : Math.floor(delta);

		// scroll the scrollbar
		bar.css({ top: delta + 'px' });
	  }

	  // calculate actual scroll amount
	  percentScroll = parseInt(bar.css('top')) / (me.outerHeight() - bar.outerHeight());
	  delta = percentScroll * (me[0].scrollHeight - me.outerHeight());

	  if (isJump)
	  {
		delta = y;
		var offsetTop = delta / me[0].scrollHeight * me.outerHeight();
		offsetTop = Math.min(Math.max(offsetTop, 0), maxTop);
		bar.css({ top: offsetTop + 'px' });
	  }

	  // scroll content
	  me.scrollTop(delta);

	  // fire scrolling event
	  me.trigger('slimscrolling', ~~delta);

	  // ensure bar is visible
	  showBar();

	  // trigger hide when scroll is stopped
	  hideBar();
	}

	function attachWheel()
	{
	  if (window.addEventListener)
	  {
		this.addEventListener('DOMMouseScroll', _onWheel, false );
		this.addEventListener('mousewheel', _onWheel, false );
		this.addEventListener('MozMousePixelScroll', _onWheel, false );
	  }
	  else
	  {
		document.attachEvent("onmousewheel", _onWheel)
	  }
	}

	function getBarHeight()
	{
	  // calculate scrollbar height and make sure it is not too small
	  barHeight = Math.max((me.outerHeight() / me[0].scrollHeight) * me.outerHeight(), minBarHeight);
	  bar.css({ height: barHeight + 'px' });

	  // hide scrollbar if content is not long enough
	  var display = barHeight == me.outerHeight() ? 'none' : 'block';
	  bar.css({ display: display });
	}

	function showBar()
	{
	  // recalculate bar height
	  getBarHeight();
	  clearTimeout(queueHide);

	  // when bar reached top or bottom
	  if (percentScroll == ~~percentScroll)
	  {
		//release wheel
		releaseScroll = o.allowPageScroll;

		// publish approporiate event
		if (lastScroll != percentScroll)
		{
			var msg = (~~percentScroll == 0) ? 'top' : 'bottom';
			me.trigger('slimscroll', msg);
		}
	  }
	  else
	  {
		releaseScroll = false;
	  }
	  lastScroll = percentScroll;

	  // show only when required
	  if(barHeight >= me.outerHeight()) {
		//allow window scroll
		releaseScroll = true;
		return;
	  }
	  bar.stop(true,true).fadeIn('fast');
	  if (o.railVisible) { rail.stop(true,true).fadeIn('fast'); }
	}

	function hideBar()
	{
	  // only hide when options allow it
	  if (!o.alwaysVisible)
	  {
		queueHide = setTimeout(function(){
		  if (!(o.disableFadeOut && isOverPanel) && !isOverBar && !isDragg)
		  {
			bar.fadeOut('slow');
			rail.fadeOut('slow');
		  }
		}, 1000);
	  }
	}

  });

  // maintain chainability
  return this;
}
});

jQuery.fn.extend({
slimscroll: jQuery.fn.slimScroll
});

})(jQuery);

jQuery(document).ready(function(){
	jQuery( '#infoscroll' ).slimScroll({ height : '120px' });
	jQuery( 'a[class="click-event"]' ).each( function(){
		var anchor_id    = jQuery( this ).attr( 'id' );
		var article_href = jQuery( this ).attr( 'href' );
		jQuery( this ).attr( 'onclick', 'ga( "send", "event", "'+ anchor_id +'", "click", "'+ article_href +'" );' );
	});
});
