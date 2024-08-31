using System.ComponentModel.DataAnnotations;

namespace WebAPI.Models
{
    public class Odeme
    {
        [Required]
        public string Isim { get; set; }

        [Required]
        public string Soyisim { get; set; }

        [Key]
        [Required]
        public string Kart_No { get; set; }

        [Required]
        public string Kul_Tar { get; set; }

        [Required]
        public string CVC { get; set; }

    }
}
