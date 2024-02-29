using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using MiniCRM.Domain.Entities;

namespace MiniCRM.Application.Tasks.Queries.GetTasksWithPagination
{
    public class TaskBriefDto
    {
        public int Id { get; init; }

        public int EmployeeId { get; init; }

        public string? Title { get; init; }

        public int CompletionPercentage { get; init; }

        private class Mapping : Profile
        {
            public Mapping()
            {
                CreateMap<TaskEntity, TaskBriefDto>();
            }
        }
    }
}