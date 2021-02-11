using System;
using System.ComponentModel.DataAnnotations;

namespace Api.Dtos
{
    public class ReasonDto
    {
        public int Id { get; set; }

        [Required]
        public string Color { get; set; }

        [Required]
        [MaxLength(200)]
        public string Content { get; set; }
        public DateTime DateCreated { get; set; } = DateTime.Now;
        
    }
}