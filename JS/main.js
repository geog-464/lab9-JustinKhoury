<!-- Justin Khoury , 2022 -->
//initialize function called when the script loads
function initialize(){
    loadMap();
};

function loadMap(){
		//create a basemap style. You can find other options at https://leaflet-extras.github.io/leaflet-providers/preview/
	var CartoDB_Positron = L.tileLayer(
		'https://tileserver.memomaps.de/tilegen/{z}/{x}/{y}.png', 
		{
	maxZoom: 18,
	attribution: 'Map <a href="https://memomaps.de/">memomaps.de</a> <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
		}
	)
	//add this basemap style to a JS object, to which you could also add other baselayers. This object is loaded as a basemap selector as seen further down
	var baseLayers = {
		"CartoDB": CartoDB_Positron
		//,...
	};
	// create the map
	var mymap = L.map('mapdiv', {
		center: [45.50, -73.58]
		,zoom: 3
		,maxZoom: 18
		,minZoom: 3
		,layers: CartoDB_Positron
	});
		
	// parse json object (var geojsonData) and turn into loadable layer
	geojsonLayer = L.geoJSON(geojsonData);
	
	//add geojsonData to map
	geojsonLayer.addTo(mymap);// add json element to map
	
	//declare basemap selector widget
	var lcontrol = L.control.layers(baseLayers);
	//add it to the map
	lcontrol.addTo(mymap);
}
//call the initialize function when the window has loaded
window.onload = initialize();