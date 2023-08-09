// mapa.js
var map;
var markers = [];

function initMap() {
    var mapCenter = calculateCenter(ubicacionesJSON);
    var mapOptions = {
        center: mapCenter,
        zoom: 5 // Ajusta este valor según lo que consideres adecuado
    };
    map = new google.maps.Map(document.getElementById('map'), mapOptions);
    addMarkers();
}

function calculateCenter(locations) {
    var bounds = new google.maps.LatLngBounds();

    locations.forEach(function (ubicacion) {
        var position = new google.maps.LatLng(ubicacion.Latitud, ubicacion.Longitud);
        bounds.extend(position);
    });

    return bounds.getCenter();
}

function addMarkers() {
    var contenidoStringTemplate =
        '<b>ID: </b>{ID}' +
        '<br />' +
        '<b>Cliente: </b>{Cliente}' +
        '<br />' +
        '<b>Tel: </b>{Telefono}' +
        '<br />' +
        '<button>Ver ruta</button>';

    var listaUbicaciones = ubicacionesJSON; // Accede a la variable definida en el archivo .aspx
    listaUbicaciones.forEach(function (ubicacion) {

        var contenidoString = contenidoStringTemplate
            .replace('{ID}', ubicacion.ID)
            .replace('{Cliente}', ubicacion.Cliente)
            .replace('{Telefono}', ubicacion.Telefono);

        var marker = new google.maps.Marker({
            position: { lat: ubicacion.Latitud, lng: ubicacion.Longitud },
            map: map
        });
        var infoWindow = new google.maps.InfoWindow({
            content: contenidoString
        });
        marker.addListener('click', function () {
            infoWindow.open(map, marker);
        });
        markers.push(marker);
    });
}