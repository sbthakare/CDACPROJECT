using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TalentBridge2.Data;
using TalentBridge2.Models;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace TalentBridge2.Controllers
{
    [Route("api/job")]
    [ApiController]
    public class JobController : ControllerBase
    {
        private readonly AppDbContext _context;

        public JobController(AppDbContext context)
        {
            _context = context;
        }

        // POST: api/job/post
        [HttpPost("post")]
        public async Task<IActionResult> PostJob([FromBody] Job job)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            if (job == null)
                return BadRequest(new { message = "Invalid job data." });

            job.PostedDate = DateTime.UtcNow;
            _context.Jobs.Add(job);
            await _context.SaveChangesAsync();

            return Ok(new { message = "Job posted successfully!", jobId = job.Id });
        }

        // GET: api/job/list
        [HttpGet("list")]
        public async Task<IActionResult> GetJobs()
        {
            var jobs = await _context.Jobs.ToListAsync();
            if (jobs.Count == 0)
                return NotFound(new { message = "No jobs found." });

            return Ok(jobs);
        }

        // GET: api/job/{id}
        [HttpGet("{id}")]
        public async Task<IActionResult> GetJobById(int id)
        {
            var job = await _context.Jobs.FindAsync(id);
            if (job == null)
                return NotFound(new { message = "Job not found." });

            return Ok(job);
        }

        // PUT: api/job/update/{id}
        [HttpPut("update/{id}")]
        public async Task<IActionResult> UpdateJob(int id, [FromBody] Job updatedJob)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var existingJob = await _context.Jobs.FindAsync(id);
            if (existingJob == null)
                return NotFound(new { message = "Job not found." });

            existingJob.Title = updatedJob.Title;
            existingJob.Description = updatedJob.Description;
            existingJob.Skills = updatedJob.Skills;
            existingJob.Salary = updatedJob.Salary;
            existingJob.PostedDate = updatedJob.PostedDate;
            await _context.SaveChangesAsync();

            return Ok(new { message = "Job updated successfully!" });
        }

        // DELETE: api/job/delete/{id}
        [HttpDelete("delete/{id}")]
        public async Task<IActionResult> DeleteJob(int id)
        {
            var job = await _context.Jobs.FindAsync(id);
            if (job == null)
                return NotFound(new { message = "Job not found." });

            _context.Jobs.Remove(job);
            await _context.SaveChangesAsync();

            return Ok(new { message = "Job deleted successfully!" });
        }
    }
}
