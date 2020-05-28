function initMap() {

	var latLng = { lat: 18.592044, lng: 73.733426 };

	var map = new google.maps.Map(
	document.getElementById('map'), { zoom: 15, center: latLng });
    var marker = new google.maps.Marker({ position: latLng, map: map });
}