/*
        Leaflet.MapissoBuffer, a plugin for buffering drawn items on a Leaflet map.
        (c) 2015, Muhammet Emre Yildirim
        (c) 2015, mapisso.com and Innotech Software
        https://github.com/mapisso/Leaflet.MapissoBuffer
*/
var mapissoBuffer={};
mapissoBuffer.sayHello=function(){
	alert("Innotech Restful Web Services");
};
mapissoBuffer.baseUrl="http://localhost:6161/InnotechRestful/api/geoservices";

mapissoBuffer.bufferGet=function(geojson,buffersize,key){
					
					var url=mapissoBuffer.baseUrl+"/buffer/get";
					
					var response=$.ajax({
						type : 'GET',
						url : url,
						data : {
							geojson:JSON.stringify(geojson),
							buffersize:buffersize,
							key:key
						},
						dataType : 'json',
						 async: !1,
						success : function(response) {
							console.log("success buffer get");
						},
						error : function(XMLHttpRequest, textStatus,
								errorThrown) {
							console.log("some error in buffer get ajax");
						}
					});
					
					return response.responseJSON;
					
};

mapissoBuffer.bufferPost=function(geojson,buffersize,key){
					
					var url=mapissoBuffer.baseUrl+"/buffer/post";
					
					var response=$.ajax({
						type : 'POST',
						url : url,
						data : {
							geojson:JSON.stringify(geojson),
							buffersize:buffersize,
							key:key
						},
						dataType : 'json',
						 async: !1,
						success : function(response) {
							console.log("success buffer post");
						},
						error : function(XMLHttpRequest, textStatus,
								errorThrown) {
							console.log("some error in buffer post ajax");
						}
					});
					
					return response.responseJSON;
					
};

mapissoBuffer.getDownload=function(id){
	var url=mapissoBuffer.baseUrl+"/download/get?id="+id;
	
	var iframe = document.createElement("iframe");
	  iframe.setAttribute("src", url);
	  iframe.setAttribute("style", "display: none");
	  document.body.appendChild(iframe);
	 
};

