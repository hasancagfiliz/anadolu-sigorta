using Microsoft.AspNetCore.Mvc;
using WebAPI.Models;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PolController : ControllerBase
    {
        private readonly AppDbContext _context;

        public PolController(AppDbContext context)
        {
            _context = context;
        }

        [HttpPost]
        public async Task<IActionResult> PostPolice([FromBody] Police police)
        {
            _context.POLICE_TABLE.Add(police);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetPoliceById), new { Pol_ID = police.Pol_ID }, police);
        }

        [HttpGet]
        public async Task<IActionResult> GetPolices()
        {
            var police = await _context.POLICE_TABLE.ToListAsync();
            return Ok(police);
        }

        [HttpGet("{Pol_ID}")]
        public async Task<IActionResult> GetPoliceById(string Pol_ID)
        {
            var police = await _context.POLICE_TABLE.FindAsync(Pol_ID);
            if (police == null)
            {
                return NotFound();
            }
            return Ok(police);
        }

        [HttpPut("{Pol_ID}")]
        public async Task<IActionResult> PutPolice(string Pol_ID, [FromBody] Police updatedPolice)
        {
            var police = await _context.POLICE_TABLE.FindAsync(Pol_ID);
            if (police == null)
            {
                return NotFound();
            }

            police.Pol_Tip = updatedPolice.Pol_Tip;

            await _context.SaveChangesAsync();

            return Ok(police);
        }

        [HttpDelete("{Pol_ID}")]
        public async Task<IActionResult> DeletePolice(string Pol_ID)
        {
            var police = await _context.POLICE_TABLE.FindAsync(Pol_ID);
            if (police == null)
            {
                return NotFound();
            }

            _context.POLICE_TABLE.Remove(police);
            await _context.SaveChangesAsync();

            return NoContent();
        }
    }
}
