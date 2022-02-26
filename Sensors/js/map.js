function drawMap() {
	dataSet = []
	sensors.forEach(sensor => {
		dataSet.push({
			lat: sensor.location.lat, 
			long: sensor.location.lng, 
			name: sensor.id
		})
	})
	var series_lat_long = map.marker(dataSet);
	//series_lat_long.tooltip({title: false, separator: false});
	//initiate map drawing
	map.draw();
}
var dataSet = [];
// create map
var map = anychart.map();
map.geoData(anychart.maps['world']);
//set map container id (div)
map.container('map');
