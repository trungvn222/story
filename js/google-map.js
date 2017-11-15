jQuery(function($) {
	
	/*
	*  render_map
	*
	*  This function will render a Google Map onto the selected jQuery element
	*
	*  @type	function
	*  @date	8/11/2013
	*  @since	4.3.0
	*
	*  @param	$el (jQuery element)
	*  @return	n/a
	*/
	function render_map( $el ) {
		var styles = [{
		    "featureType": "administrative",
		    "elementType": "labels.text.fill",
		    "stylers": [{
		        "color": "#444444"
		    }]
		}, {
		    "featureType": "landscape",
		    "elementType": "all",
		    "stylers": [{
		        "color": "#f2f2f2"
		    }]
		}, {
		    "featureType": "poi",
		    "elementType": "all",
		    "stylers": [{
		        "visibility": "off"
		    }]
		}, {
		    "featureType": "road",
		    "elementType": "all",
		    "stylers": [{
		        "saturation": -100
		    }, {
		        "lightness": 45
		    }]
		}, {
		    "featureType": "road.highway",
		    "elementType": "all",
		    "stylers": [{
		        "visibility": "simplified"
		    }]
		}, {
		    "featureType": "road.arterial",
		    "elementType": "labels.icon",
		    "stylers": [{
		        "visibility": "off"
		    }]
		}, {
		    "featureType": "transit",
		    "elementType": "all",
		    "stylers": [{
		        "visibility": "off"
		    }]
		}, {
		    "featureType": "water",
		    "elementType": "all",
		    "stylers": [{
		        "color": "#ffc306"
		    }, {
		        "visibility": "on"
		    }]
		}];
		var styledMap = new google.maps.StyledMapType(styles, {
		    name: "Styled Map"
		});
		// var
		var $markers = $el.find('.marker');
		// vars
		var args = {
			zoom		: 16,
			center		: new google.maps.LatLng(0, 0),
			mapTypeControlOptions: {
			    mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
			}
		};

		// create map	        	
		var map = new google.maps.Map( $el[0], args);
		map.mapTypes.set('map_style', styledMap);
		map.setMapTypeId('map_style');
		// add a markers reference
		map.markers = [];
		// add markers
		$markers.each(function(){
	    	add_marker( $(this), map );
		});
		// center map
		center_map( map );
		google.maps.event.addDomListener(window, "resize", function() {
		    var center = map.getCenter();
		    google.maps.event.trigger(map, "resize");
		    map.setCenter(center); 
		});
	}
	function add_marker( $marker, map ) {

		// var
		var latlng = new google.maps.LatLng( $marker.attr('data-lat'), $marker.attr('data-lng') );

		// create marker
		var marker = new google.maps.Marker({
			position	: latlng,
			map			: map,
			icon: templateUrl + '/img/marker.png'
		});

		// add to array
		map.markers.push( marker );

		// if marker contains HTML, add it to an infoWindow
		if( $marker.html() )
		{
			// create info window
			var infowindow = new google.maps.InfoWindow({
				content		: $marker.html()
			});

			// show info window when marker is clicked
			google.maps.event.addListener(marker, 'click', function() {

				infowindow.open( map, marker );

			});
		}

	}
	function center_map( map ) {

		// vars
		var bounds = new google.maps.LatLngBounds();

		// loop through all markers and create bounds
		$.each( map.markers, function( i, marker ){

			var latlng = new google.maps.LatLng( marker.position.lat(), marker.position.lng() );

			bounds.extend( latlng );

		});

		// only 1 marker?
		if( map.markers.length == 1 )
		{
			// set center of map
		    map.setCenter( bounds.getCenter() );
		    map.setZoom( 16 );
		}
		else
		{
			// fit to bounds
			map.fitBounds( bounds );
		}

	}
	$('.acf-map').each(function(){
		render_map( $(this) );
	});
});