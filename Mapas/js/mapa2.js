function initMap() {
    var mapOptions = {
        center: { lat: 0, lng: 0 },
        zoom: 8
    };

    var map = new google.maps.Map(document.getElementById('mapa'), mapOptions);

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