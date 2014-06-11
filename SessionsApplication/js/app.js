/*
	We want to wait until the "ready" event for the document
	fires before we do anything.  The ready event fires when
	all content is loaded and initialized.  
*/
$(document).ready(function (){
	//All our logic will go here
	var app = new TopcoatTouch(); // Initialize Topcoat
	app.goTo("home"); // show the home page by default
	getLocation(); //Get the users geolocation data
});

/*
	This function asks the browser for geolocation data.
*/
function getLocation() {
	//Check to see if geolocation is supported
    if (navigator.geolocation) {
		//If it's supported, call the getCurrentPosition function
        navigator.geolocation.getCurrentPosition(showPosition,showError);
    } else {
		//If it's not supported, show an error message in place of the map
        $("#map-holder").html("Geolocation is not supported by this browser.");
    }
}


/*
	This function is called if we successfully get geolocation
	data from the browser
*/
function showPosition(position) {
	//append the latitude and logitude positions together
    var latlon = position.coords.latitude+","+position.coords.longitude;
	
	//append a really long URL to pull in a google map image
    var img_url = "http://maps.googleapis.com/maps/api/staticmap?center="
    +latlon+"&zoom=13&size=400x300&sensor=false";
	
	//Create an <img> tag and add it to our map-holder
    $("#map-holder").html("<img src='"+img_url+"'>");
}


/*
	This function is called if there's an error getting the 
	geolocation data. The error is passed to the function and
	the switch statement displays a message based on the error code
	in our map-holder.
*/
function showError(error) {
    switch(error.code) {
        case error.PERMISSION_DENIED:
            $("#map-holder").html("User denied the request for Geolocation.");
            break;
        case error.POSITION_UNAVAILABLE:
            $("#map-holder").html("Location information is unavailable.");
            break;
        case error.TIMEOUT:
            $("#map-holder").html("The request to get user location timed out.");
            break;
        case error.UNKNOWN_ERROR:
            $("#map-holder").html("An unknown error occurred.");
            break;
    }
}
