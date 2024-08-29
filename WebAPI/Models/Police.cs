using System.ComponentModel.DataAnnotations;

namespace WebAPI.Models
{
    public class Police
    {
        [Key]
        [Required]
        public string PolTip { get; set; }

    }
}
