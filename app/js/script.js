
					var url = "https://api.minetools.eu/ping/zalegajo.maxc.pl/27586";
 
					$.getJSON(url, function(r) {
					//data is the JSON string
					if(r.error){
					$('#rest').html('Serwer Offline');
					return false;
					} 
					var pl = '';
					if(r.players.sample.length > 0 ){ pl = '<br>OP: '+r.players.sample[0].name;  } 
					$('#rest').html(r.description.replace(/§(.+?)/gi, '')+'<br><b>Graczy Online:</b> '+r.players.online+pl);
    
					});
