using Microsoft.AspNetCore.Mvc;
using WebAPI.Models;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OdemeController : ControllerBase
    {
        private readonly AppDbContext _context;

        public OdemeController(AppDbContext context)
        {
            _context = context;
        }

        [HttpPost]
        public async Task<IActionResult> PostOdeme([FromBody] Odeme odeme)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.ODEME_TABLE.Add(odeme);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetOdemeByKart_No), new { Kart_No = odeme.Kart_No }, odeme);
        }

        [HttpGet]
        public async Task<IActionResult> GetOdemeler()
        {
            var odemeler = await _context.ODEME_TABLE.ToListAsync();
            return Ok(odemeler);
        }

        [HttpGet("{Kart_No}")]
        public async Task<IActionResult> GetOdemeByKart_No(string Kart_No)
        {
            var odeme = await _context.ODEME_TABLE.FindAsync(Kart_No);
            if (odeme == null)
            {
                return NotFound();
            }
            return Ok(odeme);
        }

        [HttpPut("{Kart_No}")]
        public async Task<IActionResult> PutOdeme(string Kart_No, [FromBody] Odeme updatedOdeme)
        {
            if (Kart_No != updatedOdeme.Kart_No)
            {
                return BadRequest();
            }

            var odeme = await _context.ODEME_TABLE.FindAsync(Kart_No);
            if (odeme == null)
            {
                return NotFound();
            }

            odeme.Isim = updatedOdeme.Isim;
            odeme.Soyisim = updatedOdeme.Soyisim;
            odeme.Kul_Tar = updatedOdeme.Kul_Tar;

            await _context.SaveChangesAsync();

            return Ok(odeme);
        }

        [HttpDelete("{Kart_No}")]
        public async Task<IActionResult> DeleteOdeme(string Kart_No)
        {
            var odeme = await _context.ODEME_TABLE.FindAsync(Kart_No);
            if (odeme == null)
            {
                return NotFound();
            }

            _context.ODEME_TABLE.Remove(odeme);
            await _context.SaveChangesAsync();

            return NoContent();
        }
    }
}
