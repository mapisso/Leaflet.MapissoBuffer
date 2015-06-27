/*
        Leaflet.MapissoBuffer, a plugin for buffering drawn items on a Leaflet map.
        (c) 2015, Muhammet Emre Yildirim
        (c) 2015, mapisso.com and Innotech Software
        https://github.com/mapisso/Leaflet.MapissoBuffer
*/
			
L.Control.mapissoBuffer = L.Control.extend({
	options: {
	        position: 'topright'
	    },	
	
    onAdd: function () { 
    	    
    	    var buffer_panel_div = L.DomUtil.create('div', 'info'); // create a div with a class "info"
    	    
    	     buffer_panel_div.innerHTML = '<h4>Mapisso Buffer Service</h4>'+'<b>' + 'Buffer Value:' + '</b><br></br>'+ '<input type="text" id="buffersize" value="10" style="width:100%" />'
		    +'<br></br>'+'<input id="bufferbutton" type="button" value="Buffer" onclick="buffer(oldlayer)" style="width:100%; height:35px"/>'+
		    '<p>Note: draw point, line, polygon and then, enter the buffer value, click the buffer button to star buffer operation.</p>';
    	    
    	    return buffer_panel_div;
    }  
    
});

var id="";
function buffer(layer) {
	
	if (layer != undefined) {
		//console.log(oldlayer.toGeoJSON().geometry);
		try {
			var donen = mapissoBuffer.bufferGet(
							layer.toGeoJSON().geometry,
							document.getElementById('buffersize').value,
							key);
			
			L.geoJson(donen.response).addTo(map);
			id=donen.id;
			
			
		} catch (err) {
			alert(err);
		}
	} else {
		alert("First draw a shape!");
	}
}
function download(){
	if(id!=""&&oldlayer!=undefined){
		mapissoBuffer.getDownload(id);
	}
	else{
		alert("First buffer!");
	}
}








