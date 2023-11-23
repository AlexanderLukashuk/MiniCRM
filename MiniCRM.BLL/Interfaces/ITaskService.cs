using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MiniCRM.BLL.Models;

namespace MiniCRM.BLL.Interfaces
{
    public interface ITaskService
    {
        Task<IEnumerable<TaskBLL>> GetTasksByEmployeeId(int employeeId);

        Task<TaskBLL> GetTaskById(int taskId);

        Task AddTask(TaskBLL task);

        Task UpdateTask(TaskBLL task);

        Task DeleteTask(int taskId);
    }
}