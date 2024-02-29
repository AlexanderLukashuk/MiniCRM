using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using MiniCRM.Application.Employees.Queries.GetEmployees;
using MiniCRM.Domain.Entities;

namespace MiniCRM.Application.Common.Models
{
    public class LookupDto
    {
        public int Id { get; init; }

        public string? Title { get; init; }

        private class Mapping : Profile
        {
            public Mapping()
            {
                CreateMap<EmployeeEntity, EmployeeDto>();
                CreateMap<TaskEntity, LookupDto>();
            }
        }
    }
}