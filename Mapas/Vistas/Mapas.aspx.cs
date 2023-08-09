using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace Mapas.Vistas
{
    public partial class Mapas : System.Web.UI.Page
    {
        public class Ubicacion
        {
            public int ID { get; set; }
            public double Latitud { get; set; }
            public double Longitud { get; set; }
        }
        protected void Page_Load(object sender, EventArgs e)
        {
            List<Ubicacion> listaUbicaciones = new List<Ubicacion>
            {
                new Ubicacion { ID = 1, Latitud = 40.712776, Longitud = -74.005974 },
                new Ubicacion { ID = 2, Latitud = 34.052235, Longitud = -118.243683 },
                new Ubicacion { ID = 3, Latitud = 19.814049877543415, Longitud = -99.04376238584518 }
                // Agrega más ubicaciones según sea necesario
            };

            gvMapas.DataSource = listaUbicaciones;
            gvMapas.DataBind();
        }
    }
}