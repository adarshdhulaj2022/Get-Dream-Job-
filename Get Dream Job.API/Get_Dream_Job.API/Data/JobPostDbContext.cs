using Get_Dream_Job.API.Models.Entities;
using Microsoft.EntityFrameworkCore;

namespace Get_Dream_Job.API.Data
{
    public class JobPostDbContext : DbContext
    {
        public JobPostDbContext(DbContextOptions<JobPostDbContext> options) : base(options)
        {
        }

        //DbSet
        public DbSet<Posts> Posts { get; set; }
    }
}
