<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Pruebas.aspx.cs" Inherits="Mapas.Vistas.Pruebas" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title></title>
</head>
<body>
    <form id="form1" runat="server">
        <div>
            <asp:TextBox ID="miTextBox" runat="server"></asp:TextBox>
            <asp:Button ID="calcularButton" runat="server" Text="Calcular" OnClientClick="calcularVariable()" />
        </div>
    </form>
</body>
</html>
