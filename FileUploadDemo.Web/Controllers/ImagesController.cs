using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FileUploadDemo.Web.Controllers
{
    public class ImagesController : Controller
    {
        public IActionResult Index(string imageName)
        {
            byte[] imageBytes = System.IO.File.ReadAllBytes($"uploads/{imageName}");
            return File(imageBytes, "APPLICATION/octet-stream", imageName);
        }

        public IActionResult GenerateCsv()
        {
            string csv = "Name,Age\r\n";
            csv += "Avrumi,40";
            byte[] bytes = Encoding.UTF8.GetBytes(csv);
            return File(bytes, "text/csv", "people.csv");
        }
    }
}
