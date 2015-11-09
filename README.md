# allscripts
i am in struggling phase of job and left with self study only so i am making new scripts just for me and practice


//deepak js
//for equalling the two instrunction and ingredients div
var divone = jQuery(".rec-inst").height();
var divtwo = jQuery(".rec-ingr").height();
var maxdiv = Math.ceil(divone, divtwo);
jQuery(".rec-inst").height(maxdiv);
jQuery(".rec-ingr").height(maxdiv);
//for equalling the two instrunction and ingredients div ends


//for image according to width
$(document).ready(function() {
    //alert('hi')
    var picture = $('.rightsec p img');
    picture.each(function() {
        alert($(this).width());
        //if image is less than 450
        if ($(this).width() < 450) {
            $(this).css({
                'float': 'left',
                'margin': '0 10px 10px 15px '
            })
        }
        //if image is greater than 450
        else {
            //$(this).addClass('big-image')
            $(this).css({
                'display': 'block',
                'margin': '10px auto '
            })
        }
    })
})

//same image but with core js
function getImages() {
    var i;
    var parent = document.getElementById('right');
    var parent_list = parent.getElementsByTagName('p');
    for (i = 0; i < parent_list.length; i++) {
        var img = parent_list[i].getElementsByTagName('img');
        for (j = 0; j < img.length; j++) {
            //alert(img)
            img[j].className = "sc"
            alert(img[j].length)
                //if(img[j].length > 0)
                // Update individual image
            if (img[j].width < 400) {
                img[j].style.cssFloat = "left";
                img[j].style.margin = "0 10px 10px 15px"
            } else {
                img[j].style.display = "block";
                img[j].style.margin = "10px auto"
            }
        }
    }
}
getImages()




//accordian by Deepak
jQuery('.chk-hld .filters').not('.chk-hld:first-of-type .filters').hide();
jQuery('.chk-hld .fltr-head i').not('.chk-hld:first-of-type .fltr-head i').removeClass('fa-minus').addClass('fa-plus');
jQuery('.filters li label').click(function() {
    jQuery(this).prev().trigger('click')
})
jQuery('.fltr-head').click(function() {
    //jQuery(this).children('i').removeClass('fa-plus')
    if (jQuery(this).children('i').hasClass('fa-minus')) {
        jQuery(this).children('i').removeClass('fa-minus').addClass('fa-plus');
    } else {
        jQuery(this).children('i').addClass('fa-minus').removeClass('fa-plus');
    }
    jQuery(this).next('ul.filters').slideToggle();
    //chk if parent children is visible if yes close it
    if (jQuery(this).parent().siblings().children('ul.filters').is(':visible')) {
        jQuery(this).parent().siblings().find('i').removeClass('fa-minus').addClass('fa-plus')
        jQuery(this).parent().siblings().children('ul.filters').slideUp();
    }
})
//viewport
 function isElementInViewport (el) {
      //special bonus for those using jQuery
      if (typeof jQuery === "function" && el instanceof jQuery) {
        el = el[0];
      }
      var rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /*or $(window).height() */
        rect.right <= (window.innerWidth || document.documentElement.clientWidth) /*or $(window).width() */
      );
    }


//for detecting bottom of page while scrolling
$(window).scroll(function() {
            if ($(window).scrollTop() == $(document).height() - $(window).height()) {
                /*$(window).scrollTop() returns the position of the top of the page, and $(document).height() 
                returns the position of the bottom of the page.
                Therefore you need to subtract the height of the window to get the position to compare against, 
                as this will give you the position where the top of the page would be if you were fully scrolled to the bottom.
                }*/
                //alert('i am at bottom')
            })
