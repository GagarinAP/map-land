/*var style = [
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

function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: {lat: 50.62, lng: 26.26}
  });
  map.setOptions({styles: style});
  setMarkers(map);
};

var beaches = [
  ['hfdh', 50.6131722, 26.2720472, 4,'<p><b>Uluru1</b>u is listed as a World Heritage Site.</p>'],
  ['fdhfdh', 50.6586693, 26.1985223, 6,'<p><b>Uluru1</b>u is listed as a World Heritage Site.</p>'],
  ['fdhfdh', 50.6516693, 26.1925223, 5,'<p><b>Uluru1</b>u is listed as a World Heritage Site.</p>'],
  ['Csfhsch', 50.6035367, 26.1947755, 3,'<p><b>Uluru1</b>u is listed as a World Heritage Site.</p>'],
  ['Mashsach', 50.6012749, 26.2589769, 2,'<p><b>Uluru1</b>u is listed as a World Heritage Site.</p>'],
  ['Maroshfsch', 50.6339021, 26.2668659, 1,'<p><b>Uluru1</b>u is listed as a World Heritage Site.</p>']
];

function setMarkers(map) {             
  for (var i = 0; i <= beaches.length; i++) {
    var beach = beaches[i];               
    var infowindow = new google.maps.InfoWindow({ content: beach[4] });
    var markers = new google.maps.Marker({
      position: {lat: beach[1], lng: beach[2]},
      center: {lat: beach[1], lng: beach[2]},
      map: map,
      content: beach[4],
      /*draggable: true,
    	animation: google.maps.Animation.DROP,
      title: beach[0],
      zIndex: beach[3]
    });
              /*markers.addListener('click', function(){
                	for (var i =0; i < markers.length; i++) {
					    setTimeout(function() {
					      addMarkerMethod();
					    }, i * 200);
					  }
                });
    markers.addListener('click', function() {
      infowindow.open(map, markers);
    });
  }                        
}*/


/*var locations = [
  ['hfdh', 50.6131722, 26.2720472, '<p><b>Uluru1</b>u is listed as a World Heritage Site.</p>'],
  ['fdhfdh', 50.6586693, 26.1985223, '<p><b>Uluru1</b>u is listed as a World Heritage Site.</p>'],
  ['fdhfdh', 50.6516693, 26.1925223, '<p><b>Uluru1</b>u is listed as a World Heritage Site.</p>'],
  ['Csfhsch', 50.6035367, 26.1947755, '<p><b>Uluru1</b>u is listed as a World Heritage Site.</p>'],
  ['Mashsach', 50.6012749, 26.2589769, '<p><b>Uluru1</b>u is listed as a World Heritage Site.</p>'],
  ['Maroshfsch', 50.6339021, 26.2668659, '<p><b>Uluru1</b>u is listed as a World Heritage Site.</p>']
  ];

  function initialize() {

    var myOptions = {
      center: new google.maps.LatLng(50.62, 26.26),
      zoom: 12,
      mapTypeId: google.maps.MapTypeId.ROADMAP

    };
    var map = new google.maps.Map(document.getElementById("map"),
        myOptions);

    setMarkers(map,locations)

  }



  function setMarkers(map,locations){

      var marker, i

for (i = 0; i < locations.length; i++){  

 var loan = locations[i][0]
 var lat = locations[i][1]
 var long = locations[i][2]
 var add =  locations[i][3]

 latlngset = new google.maps.LatLng(lat, long);

var marker = new google.maps.Marker({  
  map: map, title: loan , position: latlngset  
});

map.setCenter(marker.getPosition())

var content = "Loan Number: " + loan +  '</h3>' + "Address: " + add     

var infowindow = new google.maps.InfoWindow()

google.maps.event.addListener(marker,'click', (function(marker,content,infowindow){ 
        return function() {
           infowindow.setContent(content);
           infowindow.open(map,marker);
        };
})(marker,content,infowindow)); 

  }
  }*/

/*jQuery(function($) {
    // Asynchronously Load the map API 
    var script = document.createElement('script');
    script.src = "maps.googleapis.com/maps/api/js?key=AIzaSyCpSKIk7W0ZX5cNGZFI6khHVtOPLeQLUV4&callback=inittialize";
    document.body.appendChild(script);
});*/
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

function initMap() {
    var map;
    var bounds = new google.maps.LatLngBounds();
    var mapOptions = {
        mapTypeId: 'roadmap'
    };
                    
    // Display a map on the page
    map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);
    map.setTilt(45);
        
    // Multiple Markers
    var markers = [
        ['Лот №1', 50.6131722, 26.2720472],
        ['Лот №2', 50.6586693, 26.1985223],
        ['Лот №3', 50.6516693, 26.1925223],
        ['Лот №4', 50.6035367, 26.1947755],
        ['Лот №5', 50.6012749, 26.2589769],
        ['Лот №6', 50.6339021, 26.2668659]
    ];
                        
    // Info Window Content
    var infoWindowContent = [
        ['<div class="col s6"><div class="card">'+
    '<div class="card-image waves-effect waves-block waves-light">'+
      '<img class="activator" src="img/office.jpg">'+
    '</div>'+
    '<div class="card-content">'+
      '<span class="card-title activator grey-text text-darken-4">Card Title<i class="material-icons right">more_vert</i></span>'+
      '<p><a href="#">This is a link</a></p>'+
    '</div>'+
    '<div class="card-reveal">'+
      '<span class="card-title grey-text text-darken-4">Card Title<i class="material-icons right">close</i></span>'+
      '<p>Here is some more information about this product that is only revealed once clicked on.</p>'+
    '</div>'+
  '</div></div>'],
        ['<div class="info_content">' +
        '<h3>Palace of Westminster</h3>' +
        '<p>The Palace of Westminster is the meeting place of the House of Commons and the House of Lords, the two houses of the Parliament of the United Kingdom. Commonly known as the Houses of Parliament after its tenants.</p>' +
        '</div>'],['<div class="info_content">' +
        '<h3>London Eye</h3>' +
        '<p>The London Eye is a giant Ferris wheel situated on the banks of the River Thames. The entire structure is 135 metres (443 ft) tall and the wheel has a diameter of 120 metres (394 ft).</p>' +        '</div>'],
        ['<div class="info_content">' +
        '<h3>Palace of Westminster</h3>' +
        '<p>The Palace of Westminster is the meeting place of the House of Commons and the House of Lords, the two houses of the Parliament of the United Kingdom. Commonly known as the Houses of Parliament after its tenants.</p>' +
        '</div>'],['<div class="info_content">' +
        '<h3>London Eye</h3>' +
        '<p>The London Eye is a giant Ferris wheel situated on the banks of the River Thames. The entire structure is 135 metres (443 ft) tall and the wheel has a diameter of 120 metres (394 ft).</p>' +        '</div>'],
        ['<div class="container"><div class="row"><div class="col l12 s12">' +
        '<h3>Лот №6</h3>' +
        '<p>The Palace of Westminster is the meeting place of the House of Commons and the House of Lords, the two houses of the Parliament of the United Kingdom. Commonly known as the Houses of Parliament after its tenants.</p>' +
        '<table class="highlight responsive-table"><thead><tr>'+
              '<th data-field="id">Name</th>'+
              '<th data-field="name">Item Name</th>'+
              '<th data-field="price">Item Price</th>'+
          '</tr></thead>'+
        '<tbody><tr>'+
            '<td>Alvin</td>'+
            '<td>Eclair</td>'+
            '<td>$0.87</td>'+
        '</tr><tr><td>Alan</td>'+
            '<td>Jellybean</td>'+
            '<td>$3.76</td>'+
          '</tr><tr>'+
            '<td>Jonathan</td>'+
            '<td>Lollipop</td>'+
           '<td>$7.00</td>'+
          '</tr>'+
        '</tbody>'+
      '</table>'+
        '<img class="responsive-img col l6 s6" src="img/office.jpg"><img class="responsive-img col l6 s6" src="img/office.jpg"><a class="waves-effect waves-teal btn-flat modal-trigger" href="#modal1">Детальніше</a></div></div></div>']
    ];
        
    // Display multiple markers on a map
    var infoWindow = new google.maps.InfoWindow({maxWidth: 400}), marker, i;
    var markerImage = 'img/marker.png';
    // Loop through our array of markers & place each one on the map  
    for( i = 0; i < markers.length; i++ ) {
        var position = new google.maps.LatLng(markers[i][1], markers[i][2]);
        bounds.extend(position);
        marker = new google.maps.Marker({
            position: position,
            map: map,
            title: markers[i][0],
            icon: markerImage
        });
        
        // Allow each marker to have an info window    
        google.maps.event.addListener(marker, 'click', (function(marker, i) {
            return function() {
                infoWindow.setContent(infoWindowContent[i][0]);
                infoWindow.open(map, marker);
            }
        })(marker, i));

        // Automatically center the map fitting all markers on the screen
        map.fitBounds(bounds);
    }

    // Override our map zoom level once our fitBounds function runs (Make sure it only runs once)
    var boundsListener = google.maps.event.addListener((map), 'bounds_changed', function(event) {
        this.setZoom(12);
        google.maps.event.removeListener(boundsListener);
    });
    
}

/*
<!DOCTYPE html>
<html> 
<head> 
  <meta http-equiv="content-type" content="text/html; charset=UTF-8" /> 
  <title>Google Maps Multiple Markers</title> 
  <script src="http://maps.google.com/maps/api/js?sensor=false" 
          type="text/javascript"></script>
</head> 
<body>
  <div id="map" style="width: 500px; height: 400px;"></div>

  <script type="text/javascript">
    var locations = [
      ['Bondi Beach', -33.890542, 151.274856, 4],
      ['Coogee Beach', -33.923036, 151.259052, 5],
      ['Cronulla Beach', -34.028249, 151.157507, 3],
      ['Manly Beach', -33.80010128657071, 151.28747820854187, 2],
      ['Maroubra Beach', -33.950198, 151.259302, 1]
    ];

    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 10,
      center: new google.maps.LatLng(-33.92, 151.25),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    var infowindow = new google.maps.InfoWindow();

    var marker, i;

    for (i = 0; i < locations.length; i++) {  
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
        map: map
      });

      google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
          infowindow.setContent(locations[i][0]);
          infowindow.open(map, marker);
        }
      })(marker, i));
    }
  </script>
</body>
</html>*/