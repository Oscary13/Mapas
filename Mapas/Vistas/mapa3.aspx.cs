using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace Mapas.Vistas
{
    public partial class mapa3 : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            mapa.Visible = false;
        }


        protected void btnMostrarMapa_Click(object sender, EventArgs e)
        {
            mapa.Visible = true;
        }
    }
}