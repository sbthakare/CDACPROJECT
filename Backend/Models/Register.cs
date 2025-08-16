using System.ComponentModel.DataAnnotations;

namespace TalentBridge2.Models
{
    public class Register
    {
        [Required, StringLength(15)]
        public string FirstName { get; set; }

        [Required, StringLength(15)]
        public string LastName { get; set; }

        [Required]
        public string Address { get; set; }

        [Required]
        [Phone]
        public string PhoneNumber { get; set; }

        [Required]
        [EmailAddress]
        public string Email { get; set; }

        [Required]
        [MinLength(4, ErrorMessage = "Username must be at least 4 characters long.")]
        public string UserName { get; set; }

        [Required]
        [MinLength(6, ErrorMessage = "Password must be at least 6 characters long.")]
        public string Password { get; set; }

        [Required]
        public string Role { get; set; } // Student, Employee, Client (Admin not allowed)
    }
}
