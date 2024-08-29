using Microsoft.AspNetCore.Mvc;
using WebAPI.Models;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;


namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly AppDbContext _context;

        public UsersController(AppDbContext context)
        {
            _context = context;
        }

        [HttpPost]
        public async Task<IActionResult> PostUser([FromBody] User user)
        {
            _context.MUSTERI_TABLE.Add(user);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetUserByTcKimlikNo), new { TcKimlik_No = user.TcKimlik_No }, user);
        }

        [HttpGet]
        public async Task<IActionResult> GetUsers()
        {
            var users = await _context.MUSTERI_TABLE.ToListAsync();
            return Ok(users);
        }

        [HttpGet("{TcKimlik_No}")]
        public async Task<IActionResult> GetUserByTcKimlikNo(string TcKimlik_No)
        {
            var user = await _context.MUSTERI_TABLE.FindAsync(TcKimlik_No);
            if (user == null)
            {
                return NotFound();
            }
            return Ok(user);
        }

        [HttpPut("{TcKimlik_No}")]
        public async Task<IActionResult> PutUser(string TcKimlik_No, [FromBody] User updatedUser)
        {
            var user = await _context.MUSTERI_TABLE.FindAsync(TcKimlik_No);
            if (user == null)
            {
                return NotFound();
            }

            user.Isim = updatedUser.Isim;
            user.Soyisim = updatedUser.Soyisim;
            user.Eposta = updatedUser.Eposta;
            user.Cep_Tel = updatedUser.Cep_Tel;
            user.Il_Kodu = updatedUser.Il_Kodu;
            user.Plaka_Numarasi = updatedUser.Plaka_Numarasi;
            user.Ruhsat_Kodu = updatedUser.Ruhsat_Kodu;
            user.Ruhsat_Numarasi = updatedUser.Ruhsat_Numarasi;

            await _context.SaveChangesAsync();

            return Ok(user);
        }


        [HttpDelete("{TcKimlik_No}")]
        public async Task<IActionResult> DeleteUser(string TcKimlik_No)
        {
            var user = await _context.MUSTERI_TABLE.FindAsync(TcKimlik_No);
            if (user == null)
            {
                return NotFound();
            }

            _context.MUSTERI_TABLE.Remove(user);
            await _context.SaveChangesAsync();

            return NoContent();
        }



    }
}