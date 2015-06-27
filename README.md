Leaflet.MapissoBuffer
=======================

Simple Leaflet control to buffer analysis on a leaflet map.

Check out the demo here: ...

There are one panel that you can add to buffer size and execute the buffer analysis. For these simple buffer operation you must draw something on map (point, line or polygon etc.). The main files for the control are ````lib/MapissoBuffer/Jquery.MapissoAjaxBufferRequest.js```` and ````lib/MapissoBuffer/Leaflet.MapissoBuffer.js````. Buffer control uses jQuery when sending buffer requests to the our restful service. jQuery working version added into project jquery folder.

To initialize the controls, add the following lines to the BODY of your HTML document:

    var mBuffer = new L.Control.mapissoBuffer();
    map.addControl(mBuffer);
				   
    
To buffer a layer you must define these Draw options. These is a Leaflet plugin Leaflet.draw 0.2.3+ Thanks for this beautiful Leaflet plugin.

    	var drawnItems = new L.FeatureGroup();
    		map.addLayer(drawnItems);
    		var oldlayer;
    		var drawControl = new L.Control.Draw({
    				draw : {
    				circle : false,
    				}
    		});
    		map.addControl(drawControl);
    		map.on('draw:created', function(e) {
    							var type = e.layerType, layer = e.layer;
    							if (oldlayer != undefined)
    							drawnItems.removeLayer(oldlayer);
    							drawnItems.addLayer(layer);
    							oldlayer = layer;
    						});
    
oldlayer variable must not be changed. Future version, this will be changed.  

The controls make use of the Leaflet and jquery libraries. Include the following lines of code in the HEAD of your HTML document:

    <link rel="stylesheet" href="lib/leaflet/leaflet.css" />
    <link rel="stylesheet" href="lib/leaflet/leaflet.css" />	
    <script src="lib/leaflet/leaflet.js"></script> 
    <script src="lib/jquery/jquery-1.11.2.min.js"></script>  
    <link rel="stylesheet" href="lib/Leaflet.draw-master/dist/leaflet.draw.css" />
    <script src="lib/Leaflet.draw-master/dist/leaflet.draw.js"></script>
    <link rel="stylesheet" href="lib/mapissoBuffer/Leaflet.MapissoBuffer.css" />
    <script src="lib/mapissoBuffer/Jquery.MapissoAjaxBufferRequest.js" charset="UTF-8"></script>
    <script src="lib/mapissoBuffer/Leaflet.MapissoBuffer.js" charset="UTF-8"></script>
    
   
