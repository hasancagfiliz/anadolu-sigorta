using System.ComponentModel.DataAnnotations;

namespace WebAPI.Models
{
    public class User
    {
        [Key]
        [Required]
        [MaxLength(11)]
        public string TcKimlik_No { get; set; }

        [Required]
        [MaxLength(50)]
        public string Isim { get; set; }

        [Required]
        [MaxLength(50)]
        public string Soyisim { get; set; }

        [Required]
        public string Eposta { get; set; }

        [Required]
        public string Cep_Tel { get; set; }

        [Required]
        public string Il_Kodu { get; set; }

        [Required]
        public string Plaka_Numarasi { get; set; }

        public string Ruhsat_Kodu { get; set; }

        public string Ruhsat_Numarasi { get; set; }

    }
}
