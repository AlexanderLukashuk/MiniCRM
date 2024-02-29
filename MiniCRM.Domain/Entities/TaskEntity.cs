using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MiniCRM.Domain.Common;

namespace MiniCRM.Domain.Entities
{
    public class TaskEntity : BaseAuditableEntity
    {
        public int EmployeeId { get; set; }

        public string? Title { get; set; }

        public string? Description { get; set; }

        public DateTime StartDate { get; set; }

        public DateTime Deadline { get; set; }

        public int CompletionPercentage { get; set; }

        public EmployeeEntity? Employee { get; set; }
    }
}