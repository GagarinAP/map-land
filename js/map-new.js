    var style = [
      {
        featureType: "road.local",
        elementType: "geometry",
        stylers: [
          { hue: "#00d4ff" },
          { saturation: 100 },
          { lightness: -40 },
          { gamma: 0.51 }
        ]
      }
    ];
    var locations = [
        ['<div class="container"><div class="row"><div class="col l12 s12"><h3>Лот №1</h3><p>The Palace of Westminster is the meeting place of the House of Commons and the House of Lords, the two houses of the Parliament of the United Kingdom. Commonly known as the Houses of Parliament after its tenants.</p><img class="col l12 s12 responsive-img" src="img/444.jpg"></div></div></div>', 50.6131722, 26.2720472,1,'img/sunny.png'],
        ['<div class="container"><div class="row"><div class="col l12 s12"><h3>Лот №2</h3><p>The Palace of Westminster is the meeting place of the House of Commons and the House of Lords, the two houses of the Parliament of the United Kingdom. Commonly known as the Houses of Parliament after its tenants.</p><img class="col l12 s12 responsive-img" src="img/444.jpg"></div></div></div>', 50.6586693, 26.1985223,2,'img/marker.png'],
        ['<div class="container"><div class="row"><div class="col l12 s12"><h3>Лот №3</h3><p>The Palace of Westminster is the meeting place of the House of Commons and the House of Lords, the two houses of the Parliament of the United Kingdom. Commonly known as the Houses of Parliament after its tenants.</p><img class="col l12 s12 responsive-img" src="img/444.jpg"></div></div></div>', 50.6516693, 26.1925223,3,'img/marker.png'],
        ['<div class="container"><div class="row"><div class="col l12 s12"><h3>Лот №4</h3><p>The Palace of Westminster is the meeting place of the House of Commons and the House of Lords, the two houses of the Parliament of the United Kingdom. Commonly known as the Houses of Parliament after its tenants.</p><img class="col l12 s12 responsive-img" src="img/444.jpg"></div></div></div>', 50.6035367, 26.1947755,4,'img/sunny.png'],
        ['<div class="container"><div class="row"><div class="col l12 s12"><h3>Лот №5</h3><p>The Palace of Westminster is the meeting place of the House of Commons and the House of Lords, the two houses of the Parliament of the United Kingdom. Commonly known as the Houses of Parliament after its tenants.</p><img class="col l12 s12 responsive-img" src="img/444.jpg"></div></div></div>', 50.6012749, 26.2589769,5,'img/marker-big.png'],
        ['<div class="container"><div class="row"><div class="col l12 s12"><h3>Лот №6</h3><p>The Palace of Westminster is the meeting place of the House of Commons and the House of Lords, the two houses of the Parliament of the United Kingdom. Commonly known as the Houses of Parliament after its tenants.</p><img class="col l12 s12 responsive-img" src="img/444.jpg"></div></div></div>', 50.6339021, 26.2668659,6,'img/marker.png']
    ];
    var mapOptions = {
        mapTypeId: 'roadmap',
        styles: style
    };
    var map = new google.maps.Map(document.getElementById('map'), mapOptions, {
      zoom: 12,
      center: new google.maps.LatLng(50.6, 26.2),      
    });
    map.setTilt(45);

    var infowindow = new google.maps.InfoWindow({maxWidth: 400});
    var bounds = new google.maps.LatLngBounds();
    var marker, i;
    //var markerImage = 'img/marker.png';
    for (i = 0; i < locations.length; i++) {
      var position = new google.maps.LatLng(locations[i][1], locations[i][2]);
      bounds.extend(position);  
      marker = new google.maps.Marker({
        position: position,
        map: map,
        title: locations[i][3],
        icon: locations[i][4]
      });

      google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
          infowindow.setContent(locations[i][0]);
          infowindow.open(map, marker);
        }
      })(marker, i));
      map.fitBounds(bounds);
    }
    var boundsListener = google.maps.event.addListener((map), 'bounds_changed', function(event) {
        this.setZoom(12);
        google.maps.event.removeListener(boundsListener);
    });