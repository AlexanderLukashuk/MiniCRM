using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MiniCRM.BLL.Interfaces;
using MiniCRM.BLL.Models;
using MiniCRM.DAL.Entity;
using MiniCRM.DAL.Repositories;

namespace MiniCRM.BLL.Services
{
    public class TaskService : ITaskService
    {
        private readonly TaskRepository _taskRepository;

        public TaskService(TaskRepository taskRepository)
        {
            _taskRepository = taskRepository;
        }

        public async Task AddTask(TaskBLL task)
        {
            var taskEntity = MapToDataEntity(task);
            await _taskRepository.Create(taskEntity);
        }

        public async Task DeleteTask(int taskId)
        {
            await _taskRepository.Delete(new TaskEntity { Id = taskId });
        }

        public Task<TaskBLL> GetTaskById(int taskId)
        {
            var taskFromDb = await _taskRepository.GetById(taskId);

            return MapToBusinessModels(taskFromDb);
        }

        public Task<IEnumerable<TaskBLL>> GetTasksByEmployeeId(int employeeId)
        {
            var tasksFromDb = await _taskRepository.GetTasksByEmployeeId(employeeId);

            return MapToBusinessModels(tasksFromDb);
        }

        public async Task UpdateTask(TaskBLL task)
        {
            var taskEntity = MapToDataEntity(task);
            await _taskRepository.Update(taskEntity);
        }

        private IEnumerable<TaskBLL> MapToBusinessModels(IEnumerable<TaskEntity> taskFromDb)
        {
            return taskFromDb.Select(t => MapToBusinessModel(t));
        }

        private TaskBLL MapToBusinessModel(TaskEntity taskFromDb)
        {
            return new TaskBLL
            {
                Id = taskFromDb.Id,
                EmployeeId = taskFromDb.EmployeeId,
                Title = taskFromDb.Title,
                Description = taskFromDb.Description,
                StartDate = taskFromDb.StartDate,
                Deadline = taskFromDb.Deadline,
                CompletionPercentage = taskFromDb.CompletionPercentage
            };
        }

        private TaskEntity MapToDataEntity(TaskBLL task)
        {
            return new TaskEntity
            {
                Id = task.Id,
                EmployeeId = task.EmployeeId,
                Title = task.Title,
                Description = task.Description,
                StartDate = task.StartDate,
                Deadline = task.Deadline,
                CompletionPercentage = task.CompletionPercentage
            };
        }
    }
}