using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace Mapas.Vistas
{
    public partial class Pruebas : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            ClientScript.RegisterStartupScript(this.GetType(), "UpdateTextBox", "function actualizarTextBox(valor) { document.getElementById('" + miTextBox.ClientID + "').value = valor; }", true);
        }
    }
}