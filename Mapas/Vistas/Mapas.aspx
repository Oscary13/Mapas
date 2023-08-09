<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Mapas.aspx.cs" Inherits="Mapas.Vistas.Mapas" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title></title>
    <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyC-lMWBn1AxyjkF9G6ljsD2J07wpYlVWSk&libraries=places&callback=initMap">></script>
</head>

<body>
    <form id="form1" runat="server">
        <div>
            <asp:GridView ID="gvMapas" runat="server" AutoGenerateColumns="False" CellSpacing="0" CssClass="limited-widthee">
                <Columns>
                    <asp:BoundField DataField="ID" HeaderText="ID" FooterText="ID" FooterStyle-Font-Bold="true" ItemStyle-HorizontalAlign="Center" />
                    <asp:TemplateField HeaderText="Mapa" ItemStyle-HorizontalAlign="Center">
                        <ItemTemplate>
                            <div id='<%# "map_" + Eval("ID") %>' style="width: 300px; height: 200px;"></div>
                            <script type="text/javascript">
                                function initMap_<%# Eval("ID") %>() {
                                    var latLng = new google.maps.LatLng(<%# Eval("Latitud") %>, <%# Eval("Longitud") %>);
                                    var mapOptions = {
                                        zoom: 15,
                                        center: latLng
                                    };
                                    var map = new google.maps.Map(document.getElementById('<%# "map_" + Eval("ID") %>'), mapOptions);
                                    var marker = new google.maps.Marker({
                                        position: latLng,
                                        map: map
                                    });
                                }
                                google.maps.event.addDomListener(window, 'load', initMap_<%# Eval("ID") %>);
                            </script>
                        </ItemTemplate>
                    </asp:TemplateField>
                </Columns>
            </asp:GridView>
        </div>
    </form>
</body>
</html>
