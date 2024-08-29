using System.ComponentModel.DataAnnotations;

namespace WebAPI.Models
{
    public class Odeme
    {
        [Key]
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
