using System.ComponentModel.DataAnnotations;

namespace YourNamespace.Models
{
    public class Police
    {   
        [Required]
        public string Isim { get; set; }

        [Required]
        public string Soyisim { get; set; }

        [Required]
        public string KartNo { get; set; }

        [Required]
        public string KulTar { get; set; }


    }
}
