<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Mapas2.aspx.cs" Inherits="Mapas.Vistas.Mapas2" %>

<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>Google Maps</title>
    <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyC-lMWBn1AxyjkF9G6ljsD2J07wpYlVWSk&libraries=places&callback=initMap" async defer></script>
    <script type="text/javascript">
        var ubicacionesJSON = <%= GetSerializedUbicaciones() %>;
    </script>
    <script type="text/javascript" src="../js/mapa.js"></script>
</head>
<body>
    <form id="form1" runat="server">
        <div id="map" style="height: 500px;"></div>
    </form>
</body>
</html>