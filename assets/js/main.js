/**************************************************************************
-- Main.js contains all the jQuery functions needed for our elements. -----
---------------------------------------------------------------------------
-- Author: Irene Gayle Roque ----------------------------------------------
**************************************************************************/

$(document).ready(function(){
    
    //Example 1 - displays/alerts text in input field when "Display Text" button is clicked
	$('#btn-get-text').click(function(){
		var name = $('input:text').val();
		alert(name);
	});
    //Example 1 - set text in input field to 'Hello World!'
	$('#btn-set-text').click(function(){
		$('input:text').val('Hello World!');
	});
    //Example 1 - clears text in input field
	$('#btn-clear-text').click(function () {
		$('input:text').val('');
	});
    //Example 2 - hides elements within the div with id 'sugar'
	$('#btnhide').click(function(){
		$('#sugar').hide();
	});
    //Example 2 - shows elements within the div with id 'sugar'
	$('#btnshow').click(function(){
		$('#sugar').show();
	});
    //Example 2 - hides/shows or toggles elements within the div with id 'sugar'
	$('#btntoggle').click(function(){
		$('#sugar').toggle();
	});
    //Example 3 - elements within the div with id 'sugar' fade in 2 seconds
	$('#btnfadein').click(function(){
		$('#sugar').fadeIn(2000);
	});
    //Example 3 - elements within the div with id 'sugar' fade out 2 seconds
	$('#btnfadeout').click(function(){
		$('#sugar').fadeOut(2000);
	});
    //Example 3 - elements within the div with id 'sugar' fade in 2 seconds if text is not visible and fade out in 2 seconds if text is visible
	$('#btnprogram').click(function(){
		$('#sugar').fadeIn(2000).fadeOut(2000);
	});

});