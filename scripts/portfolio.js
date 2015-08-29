    /**
     *
     *	Portfolio.js
     *
     *	Mike Speight
     *
     *	8/01/2014
     *
     *
     */

"use strict"

var Portfolio = Portfolio || {};

Portfolio = {
	/**
    * Extends the Tournament object with the specified object
    * @function
    * @memberOf Portfolio
    * @name {String} The namespace the object should be dropped into
    * @obj {Object} The object
    */

    extend: function( name, obj ) {
        if (this[name] === undefined) {
            this[name] = obj;
        }
    }
};
window.Portfolio = Portfolio;
var port = Portfolio;

    /**
    *
    * model
    *
    */

//console.log(window.location.hostname);

if(window.location.hostname == "www.mike-speight.co.uk"){
    var baseURL = "www.mike-speight.co.uk/";
    //console.log(baseURL);
}
else if(window.location.hostname == "192.168.1.80:8080/mike-speight.co.uk"){
    var baseURL = "192.168.1.80:8080/mike-speight.co.uk/";
}
else {
    var baseURL = "localhost:8080/mike-speight.co.uk/";    
    //console.log(baseURL);
}

console.log(baseURL);


port.data = {};
var noExamples;


var getexampledata = function(){

    $.ajax({
        type: "GET",
        url: "http://"+baseURL+"data/examples.json",
        dataType: "JSON",
        async: false, // avoid race conditions
        success: function( data ) {
    
            port.data.examples = data;
    
        },
        error: function( jqXHR, textStatus, errorThrown ) {
    
            console.log( errorThrown );
        }
    });
}();

noExamples = port.data.examples.length;

var pageInit = function(){



}();


var toggleMenu = function(){

        console.log('Clicked');
        alert('Clicked');
        var $menuToggle = $('#mobile'),
            $switcher = $('#menu-switch i');

        if($switcher.hasClass('icon-reorder')) {
            $switcher.removeClass('icon-reorder').addClass('icon-remove');
        }
        else {
            $switcher.removeClass('icon-remove').addClass('icon-reorder');
        }
        $menuToggle.toggle();
}




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

    // event handelers

    $('#menu-switch a').click(function(e){
        e.preventDefault();

        toggleMenu();
        
    });

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
                draggable: false           
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

/*
$('#infoDiag').dialog(
            { bgiframe: true,
                dialogClass: 'eMailDialog',
                resizable: false,
                height: 645,
                width: 510,
                modal: true,
                draggable: false,
                title: "Rights dept request",
                buttons: [ 
                    {
                        text: "Send",
                        class: 'leftButton', 
                        click: function() { 
                        $( this ).dialog( "close" ); 
                        } 
                    } 
                ]              
            }
        );
*/