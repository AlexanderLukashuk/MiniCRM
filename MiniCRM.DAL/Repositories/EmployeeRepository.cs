using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MiniCRM.DAL.Entity;
using MiniCRM.DAL.Interfaces;

namespace MiniCRM.DAL.Repositories
{
    public class EmployeeRepository : IBaseRepository<EmployeeEntity>
    {
        private readonly AppDbContext _context;

        public EmployeeRepository(AppDbContext context)
        {
            _context = context;
        }

        public Task Create(EmployeeEntity entity)
        {
            throw new NotImplementedException();
        }

        public Task Delete(EmployeeEntity entity)
        {
            throw new NotImplementedException();
        }

        public IQueryable<EmployeeEntity> GetAll()
        {
            throw new NotImplementedException();
        }

        public Task<EmployeeEntity> Update(EmployeeEntity entity)
        {
            throw new NotImplementedException();
        }
    }
}