function initMap() {
    var style = [{"featureType":"administrative","stylers":[{"visibility":"off"}]},{"featureType":"poi","stylers":[{"visibility":"simplified"}]},{"featureType":"road","elementType":"labels","stylers":[{"visibility":"simplified"}]},{"featureType":"water","stylers":[{"visibility":"simplified"}]},{"featureType":"transit","stylers":[{"visibility":"simplified"}]},{"featureType":"landscape","stylers":[{"visibility":"simplified"}]},{"featureType":"road.highway","stylers":[{"visibility":"off"}]},{"featureType":"road.local","stylers":[{"visibility":"on"}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"visibility":"on"}]},{"featureType":"water","stylers":[{"color":"#84afa3"},{"lightness":52}]},{"stylers":[{"saturation":-17},{"gamma":0.36}]},{"featureType":"transit.line","elementType":"geometry","stylers":[{"color":"#3f518c"}]}];
    var locations = [
        ['<div class="info-window"><h4>Лот №1</h4><img src="img/22.jpg" alt="Лот №1 Курчатова Рівне" height="auto" width="100%"><h5>Інформація: </h5><ul><li><h6>Призначення: Комерція</h6></li><li><h6>Площа: 1 га</h6></li><li><h6>Адреса: м.Рівне вул.Курчатова</h6></li></ul></div>', 50.600098, 26.272998, 1,'img/supermarket.png'],
        ['<div class="info-window"><h4>Лот №2</h4><img src="img/22.jpg" alt="Лот №2 Городок" height="auto" width="100%"><h5>Інформація: </h5><ul><li><h6>Призначення: Комерція</h6></li><li><h6>Площа: від 2.67 га</h6></li><li><h6>Адреса: смт.Городок</h6></li></ul></div>', 50.657839, 26.178874,2,'img/supermarket.png'],
        ['<div class="info-window"><h4>Лот №3</h4><img src="img/22.jpg" alt="Лот №3 Курчатова Рівне" height="auto" width="100%"><h5>Інформація: </h5><ul><li><h6>Призначення: Житлове будівництво</h6></li><li><h6>Площа: від 1 га</h6></li><li><h6>Адреса: м.Рівне вул.Курчатова</h6></li></ul></div>', 50.599558, 26.278066,3,'img/office-building.png'],
        ['<div class="info-window"><h4>Лот №4</h4><img src="img/22.jpg" alt="Лот №4 Рівне" height="auto" width="100%"><h5>Інформація: </h5><ul><li><h6>Призначення: Інд. будівництво</h6></li><li><h6>Площа: ~10 сот</h6></li><li><h6>Адреса: </h6></li></ul></div>', 50.591701, 26.268444,4,'img/house.png'],
        ['<div class="info-window"><h4>Лот №5</h4><img src="img/22.jpg" alt="Лот №5 Рівне" height="auto" width="100%"><h5>Інформація: </h5><ul><li><h6>Призначення: Інд. будівництво</h6></li><li><h6>Площа: ~10 сот</h6></li><li><h6>Адреса: </h6></li></ul></div>', 50.591183, 26.276105,5,'img/house.png'],
        ['<div class="info-window"><h4>Лот №6</h4><img src="img/22.jpg" alt="Лот №6 Корнинська Рівне" height="auto" width="100%"><h5>Інформація: </h5><ul><li><h6>Призначення: Інд. будівництво</h6></li><li><h6>Площа: Площа: ~10 сот</h6></li><li><h6>Адреса: м.Рівне вул.Корнинська</h6></li></ul></div>', 50.581170, 26.271952,6,'img/house.png'],
        ['<div class="info-window"><h4>Лот №7</h4><img src="img/22.jpg" alt="Лот №7 Веренсневе Рівне" height="auto" width="100%"><h5>Інформація: </h5><ul><li><h6>Призначення: Комерція</h6></li><li><h6>Площа: 3.2 га</h6></li><li><h6>Адреса: м.Рівне Вересневе</h6></li></ul></div>', 50.593989, 26.157551,7,'img/supermarket.png'],        
        ['<div class="info-window"><h4>Лот №9</h4><img src="img/22.jpg" alt="Лот №9 Екватор Рівне" height="auto" width="100%"><h5>Інформація: </h5><ul><li><h6>Призначення: Комерція</h6></li><li><h6>Площа: ~10 сот</h6></li><li><h6>Адреса: </h6></li></ul></div>', 50.615539, 26.192173,9,'img/supermarket.png'],
        ['<div class="info-window"><h4>Лот №10</h4><img src="img/22.jpg" alt="Лот №10 Екватор Рівне" height="auto" width="100%"><h5>Інформація: </h5><ul><li><h6>Призначення: Інд. будівництво</h6></li><li><h6>Площа: ~10 сот</h6></li><li><h6>Адреса: </h6></li></ul></div>', 50.623648, 26.198889,10,'img/house.png'],
    ];
    var mapOptions = {
        styles: style,
        zoomControl: true,
	      scaleControl: true,
		  scrollwheel: false,
		  disableDoubleClickZoom: false
    };

    var map = new google.maps.Map(document.getElementById('map'), mapOptions, {
      zoom: 12,
      center: new google.maps.LatLng(50.6, 26.2)      
    });

    var infowindow = new google.maps.InfoWindow({maxWidth: 400});
    var bounds = new google.maps.LatLngBounds();
    var marker, i;
    for (i = 0; i < locations.length; i++) {      
      var position = new google.maps.LatLng(locations[i][1], locations[i][2]);
      bounds.extend(position);  
      marker = new google.maps.Marker({
        position: position,
        map: map,
        icon: locations[i][4]
      });

      google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
          infowindow.setContent(locations[i][0]);
          infowindow.open(map, marker);
        }
      })(marker, i));

      google.maps.event.addListener(infowindow, 'domready', function() {
        $('#map > div > div > div:nth-child(1) > div:nth-child(4) > div:nth-child(4) > div').addClass('animated zoomIn'); 
      });

      map.fitBounds(bounds);
    }
    var boundsListener = google.maps.event.addListener((map), 'bounds_changed', function(event) {
        this.setZoom(12);        
        google.maps.event.removeListener(boundsListener);
    });
}
