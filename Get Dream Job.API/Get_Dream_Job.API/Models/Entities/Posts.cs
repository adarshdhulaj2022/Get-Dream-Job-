using System.ComponentModel.DataAnnotations;

namespace Get_Dream_Job.API.Models.Entities
{
    public class Posts
    {
        [Key]
        public Guid Id { get; set; }
        public string Title { get; set; }
        public string ImageUrl { get; set; }
        public string JobDiscription { get; set; }
        public string Eligibility { get; set; }
        public string Tags { get; set; }
        public DateTime PublishedDate { get; set; }
        public string Heading { get; set; }
        public string OrganizationName { get; set; }
        public string PostName { get; set; }
        public string Degree { get; set; }
        public string Batch { get; set; }
        public string Salary { get; set; }
        public string Experience { get; set; }
        public string Location { get; set; }
        public string LastDate { get; set; }
    }
}
