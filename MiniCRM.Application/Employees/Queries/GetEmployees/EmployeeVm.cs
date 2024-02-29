using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MiniCRM.Application.Common.Models;

namespace MiniCRM.Application.Employees.Queries.GetEmployees
{
    public class EmployeeVm
    {
        public IReadOnlyCollection<LookupDto> PriorityLevels { get; init; } = Array.Empty<LookupDto>();

        public IReadOnlyCollection<EmployeeDto> Employees { get; init; } = Array.Empty<EmployeeDto>();
    }
}