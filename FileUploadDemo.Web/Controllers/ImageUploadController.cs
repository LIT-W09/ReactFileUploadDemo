using FileUploadDemo.Web.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FileUploadDemo.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ImageUploadController : ControllerBase
    {
        [HttpPost]
        [Route("upload")]
        public void Upload(UploadViewModel viewModel)
        {
            int index = viewModel.Base64Image.IndexOf(",") + 1;
            string base64 = viewModel.Base64Image.Substring(index);
            byte[] imageBytes = Convert.FromBase64String(base64);
            System.IO.File.WriteAllBytes($"uploads/{viewModel.Name}", imageBytes);
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
