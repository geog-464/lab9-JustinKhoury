<!-- Justin Khoury , 2022 -->
function initialize(){
    loadMap();
};

//function to create a table with cities and their populations
function loadMap(){
    	//create a basemap style. You can find other options at https://leaflet-extras.github.io/leaflet-providers/preview/
		
		/*var CartoDB_Positron = L.tileLayer(
		'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', 
		{
			attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
			subdomains: 'abcd'
		}
		
	)
	*/
	var OpenStreetMap_HOT = L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Tiles style by <a href="https://www.hotosm.org/" target="_blank">Humanitarian OpenStreetMap Team</a> hosted by <a href="https://openstreetmap.fr/" target="_blank">OpenStreetMap France</a>'
	});
	
	var OpenTopoMap = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
		maxZoom: 17,
		attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
		});
	
	var OpenStreetMap_BZH = L.tileLayer(
		'https://tile.openstreetmap.bzh/br/{z}/{x}/{y}.png',
		{
		
			attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Tiles courtesy of <a href="http://www.openstreetmap.bzh/" target="_blank">Breton OpenStreetMap Team</a>',
		
		}
	);
 	
	//add this basemap style to a JS object, to which you could also add other baselayers. This object is loaded as a basemap selector as seen further down
	var baseLayers = {
		"OpenStreetMap": OpenStreetMap_BZH,
		"OpenStreetMap_HOT":OpenStreetMap_HOT
	};
	// create the map
	var mymap = L.map('mapdiv', {
		center: [45.50, -73.58]
		,zoom: 3
		,maxZoom: 18
		,minZoom: 3
		,layers:OpenStreetMap_HOT
		
	});
	

	// parse json object (var geojsonData) and turn into loadable layer
	geojsonLayer = L.geoJSON(geojsonData,{
		pointToLayer: function (feature, latlng){
			
		}
	}	
	).addTo(mymap);
	
	//add geojsonData to map
	geojsonLayer.addTo(mymap);// add json element to map
	
	//declare basemap selector widget
	var lcontrol = L.control.layers(baseLayers);
	//add it to the map
	lcontrol.addTo(mymap);
	
	
};

//call the initialize function when the window has loaded
window.onload = initialize();