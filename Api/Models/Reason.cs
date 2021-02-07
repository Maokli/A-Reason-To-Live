using System;

namespace Api.Models
{
    public class Reason
    {
        public int Id { get; set; }
        public string UserName { get; set; }
        public string Content { get; set; }
        public DateTime DateCreated { get; set; }
    }
}