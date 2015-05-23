using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace LightSwitchApplication
{
    public partial class DownloadDocument : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if (Request.QueryString["Id"] != null)
            {
                int id = Convert.ToInt32(Request.QueryString["id"]);
                SqlConnection conection = new SqlConnection();
                conection.ConnectionString = ConfigurationManager.ConnectionStrings["_IntrinsicData"].ConnectionString;

                string query = "SELECT * FROM DocumentVersions WHERE Id=@DocumentVersionId";
                SqlCommand command = new SqlCommand(query, conection);
                command.Parameters.AddWithValue("@DocumentVersionId", id);
                conection.Open();

                SqlDataReader dataReader = command.ExecuteReader();
                if (dataReader.Read())
                {
                    HttpResponse response = HttpContext.Current.Response;
                    response.Clear();
                    response.ClearContent();
                    response.ClearHeaders();
                    response.Buffer = true;

                    response.AddHeader("Content-Disposition", "attachment;filename=\"" + dataReader["DocumentName"].ToString() + "\"");
                    response.BinaryWrite((byte[])dataReader["StoredDocument"]);

                    response.End();
                }
                conection.Close();
            }

        }
    }
}