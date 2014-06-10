/* Custom JavaScript code goes here */

//jQuery Ready event fires when the document is completely loaded
$(document).ready(function(){

	//Initialize Topcoat
	var app = new TopcoatTouch();
	
	//Tell topcoat to show the home page
	app.goTo("home");
});