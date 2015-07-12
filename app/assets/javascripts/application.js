// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .


$(document).ready(function(){
	var latitude;
	var longitude;


	function getLocation() {
	     navigator.geolocation.getCurrentPosition(showPosition);
	    }
	    getLocation();

	    function showPosition(position) {
	      latitude = position["coords"]["latitude"];
	      longitude = position["coords"]["longitude"];
	      // debugger;
	      $.ajax({
	       type: 'POST',
	       url: '/reports/get_geo',
	       data: {lat: latitude, lng: longitude},
	       success: function(data){
	       	// debugger;
	        // console.log(data); 
	        console.log(data['schools'][0]['school_name']); 
	        $('#school-name').text(data['schools'][0]['school_name']); 
	       }
	    })
	    }

});




