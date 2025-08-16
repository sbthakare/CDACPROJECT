using System.ComponentModel.DataAnnotations;

namespace TalentBridge2.Models
{
    public class Job
    {
        [Key]
        public int Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public string Skills { get; set; }
        public decimal Salary { get; set; }
        public DateTime PostedDate { get; set; }
    }
}
