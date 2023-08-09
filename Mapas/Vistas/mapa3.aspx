<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="mapa3.aspx.cs" Inherits="Mapas.Vistas.mapa3" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <title>Mapa con Coordenadas</title>
    <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyC-lMWBn1AxyjkF9G6ljsD2J07wpYlVWSk&libraries=places&callback=initMap" async defer></script>
    <script type="text/javascript" src="../js/mapa3.js"></script>
</head>
<body>
    <form id="form1" runat="server">
        <asp:Button ID="btnMostrarMapa" runat="server" Text="Marcar Punto" OnClick="btnMostrarMapa_Click" />
        <div id="mapa" runat="server" style="width: 100%; height: 400px;"></div>
    </form>
    
</body>
</html>
