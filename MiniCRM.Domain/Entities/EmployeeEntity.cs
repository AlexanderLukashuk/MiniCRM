using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MiniCRM.Domain.Common;

namespace MiniCRM.Domain.Entities
{
    public class EmployeeEntity : BaseAuditableEntity
    {
        public string? FullName { get; set; }

        public string? Position { get; set; }

        public IList<TaskEntity> Tasks { get; set; } = new List<TaskEntity>();
    }
}