using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using MiniCRM.BLL.Interfaces;
using MiniCRM.BLL.Models;
using MiniCRM.DAL.Entity;
using MiniCRM.DAL.Repositories;

namespace MiniCRM.BLL.Services
{
    public class EmployeeService : IEmployeeService
    {
        private readonly EmployeeRepository _employeeRepository;

        public EmployeeService(EmployeeRepository employeeRepository)
        {
            _employeeRepository = employeeRepository;
        }

        public async Task<Employee> AddEmployee(Employee employee)
        {
            var employeeEntity = MapToDataEntity(employee);
            await _employeeRepository.Create(employeeEntity);

            return MapToBusinessModel(employeeEntity);
        }

        public async Task DeleteEmployee(int employeeId)
        {
            
            await _employeeRepository.Delete(new EmployeeEntity { Id = employeeId });
        }

        public async Task<IEnumerable<Employee>> GetAllEmployees()
        {
            var employeesFromDb = await _employeeRepository.GetAll().ToListAsync();

            return MapToBusinessModels(employeesFromDb);
        }

        public async Task UpdateEmployee(Employee employee)
        {
            var employeeEmtity = MapToDataEntity(employee);
            await _employeeRepository.Update(employeeEmtity);
        }

        async Task<Employee> IEmployeeService.GetEmployeeById(int employeeId)
        {
            var employeeFromDb = await _employeeRepository.GetEmployeeById(employeeId);

            return MapToBusinessModel(employeeFromDb);
        }

        private IEnumerable<Employee> MapToBusinessModels(IEnumerable<EmployeeEntity> employeesFromDb)
        {
            return employeesFromDb.Select(e => MapToBusinessModel(e));
        }

        private Employee MapToBusinessModel(EmployeeEntity employeeFromDb)
        {
            return new Employee
            {
                Id = employeeFromDb.Id,
                FullName = employeeFromDb.FullName,
                Position = employeeFromDb.Position
            };
        }

        private EmployeeEntity MapToDataEntity(Employee employee)
        {
            return new EmployeeEntity
            {
                Id = employee.Id,
                FullName = employee.FullName,
                Position = employee.Position
            };
        }
    }
}