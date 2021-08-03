{


	var isMap = document.getElementById("map");
	if(isMap) {
		var map;

		var center = {
			lat: +isMap.dataset.centerLat,
			lng: +isMap.dataset.centerLng,
		}

		var markerPosition = {
			lat: +isMap.dataset.markPositionLat,
			lng: +isMap.dataset.markPositionLng,
		}

		function initMap() {

			map = new google.maps.Map(document.getElementById('map'), {
				center: {lat: center.lat, lng: center.lng},
				fullscreenControl: false,
				zoom: 16,
				//styles: 
			});

			var marker = new google.maps.Marker({

			    position: {lat: markerPosition.lat, lng: markerPosition.lng},

			    map: map,

			    title: '',
			    label: '',

			   // icon: 'img/contact/googlMarker.svg',
			});

		}
	}
}