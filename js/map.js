(function() {    
    var script = document.createElement('script');
    script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyCpSKIk7W0ZX5cNGZFI6khHVtOPLeQLUV4&callback=initMap";
    $(function(){
      document.body.appendChild(script);      
    });    
})();

function initMap(){
    var style = [{"featureType":"administrative","stylers":[{"visibility":"off"}]},{"featureType":"poi","stylers":[{"visibility":"simplified"}]},{"featureType":"road","elementType":"labels","stylers":[{"visibility":"simplified"}]},{"featureType":"water","stylers":[{"visibility":"simplified"}]},{"featureType":"transit","stylers":[{"visibility":"simplified"}]},{"featureType":"landscape","stylers":[{"visibility":"simplified"}]},{"featureType":"road.highway","stylers":[{"visibility":"off"}]},{"featureType":"road.local","stylers":[{"visibility":"on"}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"visibility":"on"}]},{"featureType":"water","stylers":[{"color":"#84afa3"},{"lightness":52}]},{"stylers":[{"saturation":-17},{"gamma":0.36}]},{"featureType":"transit.line","elementType":"geometry","stylers":[{"color":"#3f518c"}]}];
    var locations = [
          ['<div class="info-window"><h3>Земельна ділянка №1</h3><img src="img/1.png" alt="Земельна ділянка №1 Рівне" height="auto" width="100%"><ul><li><h4>Призначення: Комерція</h4></li><li><h4>Площа: 1 га</h4></li><li><h4>Комунікації: Вода, Газ, Світло, Каналізація, Дорога</h4></li><li><h4>Адреса: м.Рівне</h4></li></ul></div>', 50.600098, 26.272998, 1,'img/supermarket.png'],
          ['<div class="info-window"><h3>Земельна ділянка №2</h3><img src="img/2.png" alt="Земельна ділянка №2 Городок" height="auto" width="100%"><ul><li><h4>Призначення: Комерція</h4></li><li><h4>Площа: 2.67 га</h4></li><li><h4>Комунікації: Вода, Газ, Світло, Дорога</h4></li><li><h4>Адреса: смт.Городок</h4></li></ul></div>', 50.658501, 26.178350,2,'img/supermarket.png'],
          ['<div class="info-window"><h3>Земельна ділянка №3</h3><img src="img/3.png" alt="Земельна ділянка №3 Рівне" height="auto" width="100%"><ul><li><h4>Призначення: Багатоповерхове</h4></li><li><h4>Площа: від 1 га</h4></li><li><h4>Комунікації: Вода, Газ, Світло, Каналізація, Дорога</h4></li><li><h4>Адреса: м.Рівне</h4></li></ul></div>', 50.599558, 26.278066,3,'img/office-building.png'],
          ['<div class="info-window"><h3>Земельна ділянка №4</h3><img src="img/4.png" alt="Земельна ділянка №4 Рівне" height="auto" width="100%"><ul><li><h4>Призначення: Інд. будівництво</h4></li><li><h4>Площа: від 8 сот</h4></li><li><h4>Комунікації: Вода, Газ, Світло, Каналізація, Дорога</h4></li><li><h4>Адреса: м.Рівне</h4></li></ul></div>', 50.591701, 26.268444,4,'img/house.png'],
          ['<div class="info-window"><h3>Земельна ділянка №5</h3><img src="img/5.png" alt="Земельна ділянка №5 Рівне" height="auto" width="100%"><ul><li><h4>Призначення: Інд. будівництво</h4></li><li><h4>Площа: від 8 сот</h4></li><li><h4>Комунікації: Вода, Газ, Світло, Каналізація, Дорога</h4></li><li><h4>Адреса: м.Рівне</h4></li></ul></div>', 50.591183, 26.276105,5,'img/house.png'],
          ['<div class="info-window"><h3>Земельна ділянка №6</h3><img src="img/6.png" alt="Земельна ділянка №6 Рівне" height="auto" width="100%"><ul><li><h4>Призначення: Інд. будівництво</h4></li><li><h4>Площа: від 8 сот</h4></li><li><h4>Комунікації: Вода, Газ, Світло, Каналізація, Дорога</h4></li><li><h4>Адреса: м.Рівне</h4></li></ul></div>', 50.581170, 26.271952,6,'img/house.png'],
          ['<div class="info-window"><h3>Земельна ділянка №7</h3><img src="img/7.png" alt="Земельна ділянка №7 Рівне" height="auto" width="100%"><ul><li><h4>Призначення: Комерція</h4></li><li><h4>Площа: 3.2 га</h4></li><li><h4>Комунікації: Вода, Газ, Світло, Каналізація, Дорога</h4></li><li><h4>Адреса: м.Рівне</h4></li></ul></div>', 50.593989, 26.157551,7,'img/supermarket.png'], 
          ['<div class="info-window"><h3>Земельна ділянка №8</h3><img src="img/8.png" alt="Земельна ділянка №8 Рівне" height="auto" width="100%"><ul><li><h4>Призначення: Інд. будівництво</h4></li><li><h4>Площа: від 8 сот</h4></li><li><h4>Комунікації: Вода, Газ, Світло, Каналізація, Дорога</h4></li><li><h4>Адреса: м.Рівне</h4></li></ul></div>', 50.619053, 26.191093,8,'img/house.png'],       
          ['<div class="info-window"><h3>Земельна ділянка №9</h3><img src="img/9.png" alt="Земельна ділянка №9 Рівне" height="auto" width="100%"><ul><li><h4>Призначення: Комерція</h4></li><li><h4>Площа: ~10 сот</h4></li><li><h4>Комунікації: Вода, Газ, Світло, Каналізація, Дорога</h4></li><li><h4>Адреса: м.Рівне</h4></li></ul></div>', 50.619636, 26.196111,9,'img/supermarket.png'],
          ['<div class="info-window"><h3>Земельна ділянка №10</h3><img src="img/10.png" alt="Земельна ділянка №10 Рівне" height="auto" width="100%"><ul><li><h4>Призначення: Інд. будівництво</h4></li><li><h4>Площа: від 8 сот</h4></li><li><h4>Комунікації: Вода, Газ, Світло, Каналізація, Дорога</h4></li><li><h4>Адреса: м.Рівне</h4></li></ul></div>', 50.623648, 26.198889,10,'img/house.png'],
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

    //-----------------    
    
    var myOptions2 = {
        zoom: 14,
        /*center: new google.maps.LatLng(50.601, 26.22),*/
        center: new google.maps.LatLng(50.6, 26.2),
        styles: style
    };

    var map1 = new google.maps.Map(document.getElementById("map1"), myOptions2);    
    
    var myMarker2 = new google.maps.Marker(
    {
        position: new google.maps.LatLng(50.591701, 26.268444),
        map: map1,
        icon: locations[4][4]
    });    
}

$(document).ready(function () {
  $('.modal-trigger').leanModal({
    ready: function () {
      var map1 = document.getElementById("map1");
      google.maps.event.trigger(map1, 'resize');
    }
  });
});