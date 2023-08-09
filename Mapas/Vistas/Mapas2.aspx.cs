using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Script.Serialization;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace Mapas.Vistas
{
    public partial class Mapas2 : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
        }

        public string GetSerializedUbicaciones()
        {
            List<Ubicacion> listaUbicaciones = new List<Ubicacion>
            {
                new Ubicacion { ID = 1, Latitud = 19.813976, Longitud = -99.0438571, Cliente ="Oscary Basurto", Telefono="5544332211" },
                new Ubicacion { ID = 2, Latitud = 34.052235, Longitud = -118.243683,  Cliente ="Raul Hernandez", Telefono="5500998877" },
                new Ubicacion { ID = 3, Latitud = 4.105369348495166, Longitud = 19.198740102054952,  Cliente ="Raul Hernandez", Telefono="5500998877" },
                // Agrega más ubicaciones según sea necesario
            };

            JavaScriptSerializer serializer = new JavaScriptSerializer();
            return serializer.Serialize(listaUbicaciones);
        }
    }

    public class Ubicacion
    {
        public int ID { get; set; }
        public double Latitud { get; set; }
        public double Longitud { get; set; }
        public String Cliente { get; set; }
        public String Telefono { get; set; }
    }
}
