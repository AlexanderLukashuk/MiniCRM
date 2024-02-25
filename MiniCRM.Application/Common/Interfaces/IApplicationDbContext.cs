using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using MiniCRM.Domain.Entities;

namespace MiniCRM.Application.Common.Interfaces
{
    public interface IApplicationDbContext
    {
        DbSet<EmployeeEntity> Employees { get; }

        DbSet<TaskEntity> Tasks { get; }

        Task<int> SaveChangesAsync(CancellationToken cancellationToken);
    }
}