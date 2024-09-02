using System.ComponentModel.DataAnnotations;

namespace WebAPI.Models
{
    public class Police
    {
        [Key]
        [Required]
        public string Pol_ID { get; set; }

        [Required]
        public string Pol_Tip { get; set; }

    }
}
