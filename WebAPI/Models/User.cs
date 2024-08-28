using System.ComponentModel.DataAnnotations;

namespace YourNamespace.Models
{
    public class User
    {
        [Key]
        [Required]
        [MaxLength(11)]
        public string TcKimlikNo { get; set; }

        [Required]
        [MaxLength(50)]
        public string Isim { get; set; }

        [Required]
        [MaxLength(50)]
        public string Soyisim { get; set; }

        [Required]
        public string Eposta { get; set; }

        [Required]
        public string CepTel { get; set; }

        [Required]
        public string IlKodu { get; set; }

        [Required]
        public string PlakaNumarasi { get; set; }

        public string RuhsatKodu { get; set; }

        public string RuhsatNumarasi { get; set; }

    }
}
