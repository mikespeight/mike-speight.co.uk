/**
 * Created by Mike on 25/05/2014.
 */    /**
 *
 *	online-portfolio.js
 *
 *  replaces portfolio.js introduces sidr menu
 *
 *	Mike Speight
 *
 *	27/08/2014
 *
 *
 */

"use strict";

/**
 *
 * model
 *
 */

$(document).ready(function() {

	var $body = $('body'),
		$copy = $('#copy');

	var copyDate = new Date();

	$copy.html(copyDate.getFullYear());

	$('#menu-switch').sidr({
		name: 'sidr-main',
		displace: false,
		source: '#mobile'
	});

	$(document).on( "click", function() {
		//Hide the menus if visible
		//$('#mobile').hide();
		$.sidr('close', 'sidr-main');
	});

	// event handelers


	$body.delegate('button.backBtn', 'click', function(e){
		e.preventDefault();
		history.back(1);
	});

	//info dialog
	/*$body.delegate('.img .inner a.info', 'click touchend', function(e){*/
	$body.on('click touchend', '.img .inner a.info', function(e){
		e.preventDefault();
		e.stopPropagation();

		var $this = $(this),
			thisLi = $this.parents('li.example').attr('id'),
			thisSelector = "#"+ thisLi + " .info-popup",
			thisContentStr = $(thisSelector).html(),
			$infoDiag = $('#infoDiag'),
			screenSize;

		var getScreenSize = function() {
			return window.innerWidth;
		};

		var diagData = {
			width: 1100
		};

		screenSize = getScreenSize();

		if(screenSize < 1200 && screenSize > 992) {
			diagData.width = 860
		} else if (screenSize < 993 && screenSize > 768) {
			diagData.width = 730
		} else if (screenSize < 769 && screenSize > 480) {
			diagData.width = 450
		} else if (screenSize < 481) {
			diagData.width = 310
		} else {

		}

		$infoDiag.html('');

		$infoDiag.html(thisContentStr);

		$infoDiag.dialog(
			{ bgiframe: true,
				dialogClass: 'infoDialog',
				resizable: false,
				width: diagData.width,
				modal: true,
				draggable: false,
				position: ['center',100]
			}
		);

		return false;
	});

	//info dialog close

	$body.delegate('div.ui-widget-content a.closeInfo', 'click', function(e){
		e.preventDefault();

		//console.log('info close button clicked');
		$('#infoDiag').dialog( "close" );

		return false;

	});

	//pop-up slider

	$body.delegate('.img .inner a.inspect', 'click', function(e){
		e.preventDefault();

		var $this = $(this),
			thisLi = $this.parents('li.example').attr('id'),
			thisSelector = "#"+ thisLi + " .inspect-popup ul",
			thisContentStr = $(thisSelector).html(),
			screenSize;

		var getScreenSize = function() {
			return window.innerWidth;
		};

		var diagData = {
			width: 1100
		};

		screenSize = getScreenSize();
		//console.log(screenSize);

		if(screenSize < 1200 && screenSize > 992) {
			diagData.width = 860
		} else if (screenSize < 993 && screenSize > 768) {
			diagData.width = 730
		} else if (screenSize < 769 && screenSize > 480) {
			diagData.width = 450
		} else if (screenSize < 481) {
			diagData.width = 310
		} else {

		}

		//console.log(thisContentStr);

		$('#sliderDiag ul.slides').html('');

		$('#sliderDiag ul.slides').html(thisContentStr);

		$('#sliderDiag').dialog(
			{ bgiframe: true,
				dialogClass: 'sliderDialog',
				position: "top",
				resizable: false,
				width: diagData.width,
				modal: true,
				draggable: false
			}
		);

		//TODO add conditional to turn off transitions on touch devices

		$('.flexslider').flexslider({
			animation: "slide",
			useCSS: "false"
		});


		return false;
	});

	//pop-up slider close

	$body.delegate('#sliderDiag a.closeSlider', 'click', function(e){
		e.preventDefault();

		//console.log('slider close button clicked');
		$('#sliderDiag').dialog( "close" );

		$('.flexslider').removeData("flexslider");

		return false;

	});

});

