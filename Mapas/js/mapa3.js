//var map; // Variable global para el objeto del mapa
//var searchBox; // Variable global para la SearchBox

//function initMap() {
//    var mapOptions = {
//        center: { lat: 0, lng: 0 },
//        zoom: 8
//    };

//    map = new google.maps.Map(document.getElementById('mapa'), mapOptions);

//    var input = document.createElement('input');
//    input.id = 'pac-input';
//    input.type = 'text';
//    input.placeholder = 'Buscar dirección...';

//    map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

//    searchBox = new google.maps.places.SearchBox(input);

//    map.addListener('bounds_changed', function () {
//        searchBox.setBounds(map.getBounds());
//    });

//    searchBox.addListener('places_changed', function () {
//        var places = searchBox.getPlaces();

//        if (places.length === 0) {
//            return;
//        }

//        var place = places[0];
//        if (!place.geometry) {
//            console.log("La dirección ingresada no tiene coordenadas.");
//            return;
//        }

//        map.setCenter(place.geometry.location);
//        map.setZoom(15);
//    });

//    map.addListener('click', function (event) {
//        var latitud = event.latLng.lat();
//        var longitud = event.latLng.lng();

//        // Puedes guardar estas coordenadas en variables JavaScript o en inputs ocultos
//        alert('Latitud: ' + latitud + '\nLongitud: ' + longitud);
//    });
//}

//var map; // Variable global para el objeto del mapa
//var searchBox; // Variable global para la SearchBox
//var marker; // Variable global para el marcador

//function initMap() {
//    var mapOptions = {
//        center: { lat: 0, lng: 0 },
//        zoom: 8
//    };

//    map = new google.maps.Map(document.getElementById('mapa'), mapOptions);

//    var input = document.createElement('input');
//    input.id = 'pac-input';
//    input.type = 'text';
//    input.placeholder = 'Buscar dirección...';

//    map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

//    searchBox = new google.maps.places.SearchBox(input);

//    map.addListener('bounds_changed', function () {
//        searchBox.setBounds(map.getBounds());
//    });

//    searchBox.addListener('places_changed', function () {
//        var places = searchBox.getPlaces();

//        if (places.length === 0) {
//            return;
//        }

//        var place = places[0];
//        if (!place.geometry) {
//            console.log("La dirección ingresada no tiene coordenadas.");
//            return;
//        }

//        // Centrar el mapa en la ubicación seleccionada y hacer zoom
//        map.setCenter(place.geometry.location);
//        map.setZoom(15);

//        // Eliminar el marcador anterior si existe
//        if (marker) {
//            marker.setMap(null);
//        }

//        // Crear un nuevo marcador en la ubicación de la dirección
//        marker = new google.maps.Marker({
//            position: place.geometry.location,
//            map: map,
//            title: place.name
//        });
//    });

//    map.addListener('click', function (event) {
//        var latitud = event.latLng.lat();
//        var longitud = event.latLng.lng();

//        // Puedes guardar estas coordenadas en variables JavaScript o en inputs ocultos
//        alert('Latitud: ' + latitud + '\nLongitud: ' + longitud);
//    });
//}

//var map; // Variable global para el objeto del mapa
//var searchBox; // Variable global para la SearchBox
//var marker; // Variable global para el marcador

//function initMap() {
//    var mapOptions = {
//        center: { lat: 19.713029682070907, lng: - 98.96875946108221 },
//        zoom: 13
//    };

//    map = new google.maps.Map(document.getElementById('mapa'), mapOptions);

//    var input = document.createElement('input');
//    input.id = 'pac-input';
//    input.type = 'text';
//    input.placeholder = 'Buscar dirección...';

//    map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

//    searchBox = new google.maps.places.SearchBox(input);

//    map.addListener('bounds_changed', function () {
//        searchBox.setBounds(map.getBounds());
//    });

//    searchBox.addListener('places_changed', function () {
//        var places = searchBox.getPlaces();

//        if (places.length === 0) {
//            return;
//        }

//        var place = places[0];
//        if (!place.geometry) {
//            console.log("La dirección ingresada no tiene coordenadas.");
//            return;
//        }

//        map.setCenter(place.geometry.location);
//        map.setZoom(15);
//    });

//    map.addListener('click', function (event) {


//        // Eliminar el marcador anterior si existe
//        if (marker) {
//            marker.setMap(null);
//        }

//        // Crear un nuevo marcador en la ubicación del clic
//        marker = new google.maps.Marker({
//            position: event.latLng,
//            map: map,
//            title: 'Marcador'
//        });

//        var latitud = event.latLng.lat();
//        var longitud = event.latLng.lng();

//        // Puedes guardar estas coordenadas en variables JavaScript o en inputs ocultos
//        alert('Latitud: ' + latitud + '\nLongitud: ' + longitud);
//    });
//}

//var map; // Variable global para el objeto del mapa
//var searchBox; // Variable global para la SearchBox
//var marker; // Variable global para el marcador

//function initMap() {
//    var mapOptions = {
//        center: { lat: 19.713029682070907, lng: -98.96875946108221 },
//        zoom: 13
//    };

//    map = new google.maps.Map(document.getElementById('mapa'), mapOptions);

//    var input = document.createElement('input');
//    input.id = 'pac-input';
//    input.type = 'text';
//    input.placeholder = 'Buscar dirección...';

//    map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

//    searchBox = new google.maps.places.SearchBox(input);

//    map.addListener('bounds_changed', function () {
//        searchBox.setBounds(map.getBounds());
//    });

//    searchBox.addListener('places_changed', function () {
//        var places = searchBox.getPlaces();

//        if (places.length === 0) {
//            return;
//        }

//        var place = places[0];
//        if (!place.geometry) {
//            console.log("La dirección ingresada no tiene coordenadas.");
//            return;
//        }

//        map.setCenter(place.geometry.location);
//        map.setZoom(15);
//    });

//    map.addListener('click', function (event) {
//        // Eliminar el marcador anterior si existe
//        if (marker) {
//            marker.setMap(null);
//        }

//        // Crear un nuevo marcador en la ubicación del clic
//        marker = new google.maps.Marker({
//            position: event.latLng,
//            map: map,
//            title: 'Marcador'
//        });

//        var latitud = event.latLng.lat();
//        var longitud = event.latLng.lng();

//        // Usar la API de Geocodificación para obtener la dirección
//        var geocoder = new google.maps.Geocoder();
//        geocoder.geocode({ location: event.latLng }, function (results, status) {
//            if (status === 'OK') {
//                if (results[0]) {
//                    var direccion = results[0].formatted_address;
//                    alert('Latitud: ' + latitud + '\nLongitud: ' + longitud + '\nDirección: ' + direccion);
//                } else {
//                    alert('Latitud: ' + latitud + '\nLongitud: ' + longitud + '\nNo se encontró dirección.');
//                }
//            } else {
//                alert('Error de geocodificación: ' + status);
//            }
//        });
//    });
//}

var map; // Variable global para el objeto del mapa
var searchBox; // Variable global para la SearchBox
var marker; // Variable global para el marcador

function initMap() {
    var mapOptions = {
        center: { lat: 19.713029682070907, lng: -98.96875946108221 },
        zoom: 13
    };

    map = new google.maps.Map(document.getElementById('mapa'), mapOptions);

    var input = document.createElement('input');
    input.id = 'pac-input';
    input.type = 'text';
    input.placeholder = 'Buscar dirección...';

    // Estilos CSS para centrar el campo de entrada y hacerlo más largo
    input.style.display = 'block';
    input.style.width = '80%';
    input.style.margin = '10px auto';
    input.style.padding = '10px';
    input.style.fontSize = '14px';

    map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

    searchBox = new google.maps.places.SearchBox(input);

    map.addListener('bounds_changed', function () {
        searchBox.setBounds(map.getBounds());
    });

    searchBox.addListener('places_changed', function () {
        var places = searchBox.getPlaces();

        if (places.length === 0) {
            return;
        }

        var place = places[0];
        if (!place.geometry) {
            console.log("La dirección ingresada no tiene coordenadas.");
            return;
        }

        map.setCenter(place.geometry.location);
        map.setZoom(15);
    });

    map.addListener('click', function (event) {
        // Eliminar el marcador anterior si existe
        if (marker) {
            marker.setMap(null);
        }

        // Crear un nuevo marcador en la ubicación del clic
        marker = new google.maps.Marker({
            position: event.latLng,
            map: map,
            title: 'Marcador'
        });

        var latitud = event.latLng.lat();
        var longitud = event.latLng.lng();


        // Usar la API de Geocodificación para obtener la dirección
        var geocoder = new google.maps.Geocoder();
        geocoder.geocode({ location: event.latLng }, function (results, status) {
            if (status === 'OK') {
                if (results[0]) {
                    var direccion = results[0].formatted_address;

                    var latitud = event.latLng.lat();
                    var longitud = event.latLng.lng();

                    // Actualizar los valores de los labels en el HTML
                    //document.getElementById('latitud-label').value = latitud;
                    //document.getElementById('longitud-label').value = longitud;
                    //document.getElementById('direccion-label').value = direccion;

                    document.getElementById('<%= latitudTextBox.ClientID %>').value = latitud;
                    document.getElementById('<%= longitudTextBox.ClientID %>').value = longitud;
                    document.getElementById('<%= direccionTextBox.ClientID %>').value = direccion;

                    alert('Latitud: ' + latitud + '\nLongitud: ' + longitud + '\nDirección: ' + direccion);
                } else {
                    alert('Latitud: ' + latitud + '\nLongitud: ' + longitud + '\nNo se encontró dirección.');
                }
            } else {
                alert('Error de geocodificación: ' + status);
            }
        });
    });
}