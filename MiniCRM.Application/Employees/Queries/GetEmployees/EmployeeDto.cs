using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using MiniCRM.Domain.Entities;

namespace MiniCRM.Application.Employees.Queries.GetEmployees
{
    public class EmployeeDto
    {
        public EmployeeDto()
        {
            Tasks = Array.Empty<TaskDto>();
        }

        public int Id { get; init; }

        public string? FullName { get; init; }

        public string? Position { get; init; }

        public IReadOnlyCollection<TaskDto> Tasks { get; init; }

        private class Mapping : Profile
        {
            public Mapping()
            {
                CreateMap<EmployeeEntity, EmployeeDto>();
            }
        }
    }
}