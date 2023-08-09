function initMap() {
    var mapOptions = {
        center: { lat: 0, lng: 0 },
        zoom: 8
    };

    var map = new google.maps.Map(document.getElementById('mapa'), mapOptions);

    var input = document.getElementById('pac-input');
    var searchBox = new google.maps.places.SearchBox(input);

    map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

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
        var latitud = event.latLng.lat();
        var longitud = event.latLng.lng();

        // Puedes guardar estas coordenadas en variables JavaScript o en inputs ocultos
        alert('Latitud: ' + latitud + '\nLongitud: ' + longitud);
    });
}

function mostrarMapa() {
    var script = document.createElement('script');
    script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyC-lMWBn1AxyjkF9G6ljsD2J07wpYlVWSk&libraries=places&callback=initMap';
    document.body.appendChild(script);
}