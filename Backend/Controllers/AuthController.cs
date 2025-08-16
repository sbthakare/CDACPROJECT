using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TalentBridge2.Data;
using TalentBridge2.Models;
using TalentBridge2.Helpers;
using BCrypt.Net;

namespace TalentBridge2.Controllers
{
    [Route("api/auth")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly AppDbContext _context;
        private readonly JwtHelper _jwtHelper;

        public AuthController(AppDbContext context, JwtHelper jwtHelper)
        {
            _context = context;
            _jwtHelper = jwtHelper;
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register([FromBody] Register register)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            if (await _context.Users.AnyAsync(u => u.Email == register.Email))
                return BadRequest(new { message = "Email already exists." });

            if (register.Role.ToLower() == "admin")
                return BadRequest(new { message = "Admin registration is not allowed." });

            var newUser = new User
            {
                FirstName = register.FirstName,
                LastName = register.LastName,
                Address = register.Address,
                PhoneNumber = register.PhoneNumber,
                Email = register.Email,
                UserName = register.UserName,
                PasswordHash = BCrypt.Net.BCrypt.HashPassword(register.Password),
                Role = register.Role
            };

            _context.Users.Add(newUser);
            await _context.SaveChangesAsync();

            return Ok(new { message = "Registration successful." });
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] Login login)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var user = await _context.Users.FirstOrDefaultAsync(u => u.UserName == login.UserName);
            if (user == null || !BCrypt.Net.BCrypt.Verify(login.Password, user.PasswordHash))
                return Unauthorized(new { message = "Invalid credentials." });

            var token = _jwtHelper.GenerateToken(user);

            return Ok(new { message = "Login successful", token, role = user.Role });
        }

        [HttpPost("forgot-password")]
        public async Task<IActionResult> ForgotPassword([FromBody] ForgotPassword forgotPassword)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var user = await _context.Users.FirstOrDefaultAsync(u => u.Email == forgotPassword.Email);
            if (user == null)
                return NotFound(new { message = "User not found." });

            if (user.Role == "Admin")
                return BadRequest(new { message = "Admin password cannot be reset through this API." });

            user.PasswordHash = BCrypt.Net.BCrypt.HashPassword(forgotPassword.NewPassword);
            await _context.SaveChangesAsync();

            return Ok(new { message = "Password updated successfully." });
        }

        [HttpDelete("delete/{id}")]
        public async Task<IActionResult> DeleteUser(int id)
        {
            var user = await _context.Users.FindAsync(id);
            if (user == null)
                return NotFound(new { message = "User not found." });

            _context.Users.Remove(user);
            await _context.SaveChangesAsync();

            return Ok(new { message = "User deleted successfully." });
        }

        [HttpGet("get/{username}")]
        public async Task<IActionResult> GetUserByUserName(string username)
        {
            var user = await _context.Users
                .Where(u => u.UserName.ToLower() == username.ToLower()) // Case-insensitive search
                .Select(u => new User
                {
                    Id = u.Id,
                    FirstName = u.FirstName,
                    LastName = u.LastName,
                    Address = u.Address,
                    PhoneNumber = u.PhoneNumber,
                    Email = u.Email,
                    UserName = u.UserName,
                    Role = u.Role
                })
                .FirstOrDefaultAsync();

            if (user == null)
                return NotFound(new { message = "User not found." });

            return Ok(user);
        }

        [HttpGet("check-email")]
        public IActionResult CheckEmailExists([FromQuery] string email)
        {
            var existingUser = _context.Users.FirstOrDefault(u => u.Email == email);
            if (existingUser != null)
            {
                return Ok(new { exists = true });
            }
            return Ok(new { exists = false });
        }


    }
}
