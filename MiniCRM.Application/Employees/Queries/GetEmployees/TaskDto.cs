using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using MiniCRM.Domain.Entities;

namespace MiniCRM.Application.Employees.Queries.GetEmployees
{
    public class TaskDto
    {
        public int Id { get; init; }
        
        public int EmployeeId { get; init; }

        public string? Ttitle { get; init; }

        public string? Description { get; init; }

        public DateTime StartDate { get; init; }

        public DateTime Deadline { get; init; }

        public int CompletionPercentage { get; init; }

        private class Mapping : Profile
        {
            public Mapping()
            {
                // CreateMap<TaskEntity, TaskDto>().ForMember(d => d.Priority, 
                // opt => opt.MapFrom(s => (int)s.Priority));
                CreateMap<TaskEntity, TaskDto>();
            }
        }
    }
}