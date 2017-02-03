jQuery(document).ready(function(){
jQuery(".election-tab ul li a").click(function() {
			jQuery(this).parent().siblings().removeClass("active"); 
			jQuery(this).parent().addClass("active");
			var e = jQuery(this).attr("id").split("-");
			jQuery("div[id^='"+e[0]+"']").hide();
			jQuery("div[id='"+e[0]+"-"+e[1]+"']").show();
			return false;
		});


jQuery("select.thechoices").click(function() {
			jQuery(this).parent().siblings().removeClass("active"); 
			jQuery(this).parent().addClass("active");
			var e = jQuery(this).attr("value").split("-");
			jQuery("div[id^='"+e[0]+"']").hide();
			jQuery("div[id='"+e[0]+"-"+e[1]+"']").show();
			return false;
		});

});

function gutterAds(){
	var gut = jQuery('div[class^="gutt-"]');
var width = jQuery(window).width();
if(gut.children().length < 1 || gut.children().length <= 0 || width <= 1280){
	gut.remove();
}
else{
	jQuery('.innerright , .storysidebar').remove();
	jQuery('.holdercontainer').css('width','1000px');
	jQuery('.gutt-left,.gutt-right').fadeIn();
	jQuery('.storyrightbar').css('width','100%');
	jQuery('.leftsection').css({ 'float': 'left','margin-right': '2%','width': '67%'});
	jQuery('.leftsection .innerleft').css({ 'padding-right': '3%','margin-right': '0','width': '99%'});
	jQuery('.rightsection').css({ 'float': 'left','width': '30%'});
	jQuery('.election-data li.data-head span').css('font-size','13px');
}
}
jQuery(document).on('ready',gutterAds);

jQuery(document).ready(function(){
var hei = jQuery('.hdr').height();
	jQuery('div[class ="gutt-left"],div[class ="gutt-right"]').css('top','233px');
	jQuery(window).scroll(function(){
		var scr = jQuery(window).scrollTop();
		var main = scr - hei;
		if(scr > hei){
			jQuery('div[class ="gutt-left"],div[class ="gutt-right"]').css('top','79px');
		}
		else{
			jQuery('div[class ="gutt-left"],div[class ="gutt-right"]').css('top','233px');
		}
	})

	jQuery.fn.extend({
		accTab: function() {
			//accordian script
			jQuery(this).children('.schd_row').not(':first').children('.election-data').hide();
			jQuery('.schd_row .schd_tab').on('click', function() {
				jQuery(this).parent().siblings('.schd_row').children('.election-data').hide()
				jQuery(this).next('ul.election-data').fadeToggle();
				jQuery(this).children('i').toggleClass('rev');
				jQuery(this).parent().siblings('.schd_row').find('.schd_tab i').removeClass('rev')
			});
		},
	});
	jQuery('.sched_accrodian').accTab();
});
