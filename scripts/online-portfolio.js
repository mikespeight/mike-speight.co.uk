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

"use strict"

/**
 *
 * model
 *
 */

var noExamples,
    exampledata;

noExamples = port.data.examples.length;
exampledata = port.data.examples;

var pageInit = function(){



}();




$(document).ready(function() {
    //console.log("running main script");

    if ($('#examplesList').length > 0){

        for (var count = 0; count < noExamples; count++) {

            var thisObj = port.data.examples[count];

            // Underscore Template
            // Get the template's markup...
            var tmplMarkup = $('#template-example').html();

            // ...tell Underscore to render the template...
            var compiledTmpl = _.template(tmplMarkup, { exampledata : thisObj });

            // ...and update part of your page:
            $('#examplesList').append(compiledTmpl);

        };
    }
    else {
        //console.log("No list  to display")
    };

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


    $('body').delegate('button.backBtn', 'click', function(e){
        e.preventDefault();
        history.back(1);
    });

    //info dialog

    $('body').delegate('.img .inner a.info', 'click', function(e){
        e.preventDefault();

        var $this = $(this),
            thisLi = $this.parents('li.example').attr('id'),
            thisSelector = "#"+ thisLi + " .info-popup",
            thisContentStr = $(thisSelector).html();

        $('#infoDiag').html('');

        $('#infoDiag').html(thisContentStr);

        $('#infoDiag').dialog(
            { bgiframe: true,
                dialogClass: 'infoDialog',
                resizable: false,
                width: 700,
                modal: true,
                draggable: false,
				position: ['center',100]
			}
        );

        return false;
    });

    //info dialog close

    $('body').delegate('div.ui-widget-content a.closeInfo', 'click', function(e){
        e.preventDefault();

        //console.log('info close button clicked');
        $('#infoDiag').dialog( "close" );

        return false;

    });

    //pop-up slider

    $('body').delegate('.img .inner a.inspect', 'click', function(e){
        e.preventDefault();

        var $this = $(this),
            thisLi = $this.parents('li.example').attr('id'),
            thisSelector = "#"+ thisLi + " .inspect-popup ul",
            thisContentStr = $(thisSelector).html();

        //console.log(thisContentStr);

        $('#sliderDiag ul.slides').html('');

        $('#sliderDiag ul.slides').html(thisContentStr);

        $('#sliderDiag').dialog(
            { bgiframe: true,
                dialogClass: 'sliderDialog',
                position: "top",
                resizable: false,
                width: 800,
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

    $('body').delegate('#sliderDiag a.closeSlider', 'click', function(e){
        e.preventDefault();

        //console.log('slider close button clicked');
        $('#sliderDiag').dialog( "close" );

        $('.flexslider').removeData("flexslider");

        return false;

    });

});

